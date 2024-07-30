import ActionLink from "@/Components/ActionLink";
import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SupplierForm from "@/Components/Suppliers/SupplierForm";
import Table from "@/Components/Table";
import TextInput from "@/Components/TextInput";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router } from "@inertiajs/react";
import { IconArrowLeft } from "@tabler/icons-react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Index({ total_suppliers, ...props }) {
    const { data: suppliers, meta, links } = props.suppliers;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        name: "",
        icon: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalSupplier, setModalSupplier] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [supplierUsername, setSupplierUsername] = useState("");

    function openModalSupplier(supplierUsername, type) {
        setIsOpen(true);
        setModalSupplier("Supplier");
        setModalType(type);
        setSupplierUsername(supplierUsername);
        if (supplierUsername) {
            const selectedSupplier = suppliers.find(
                (supplier) => supplier.username === supplierUsername
            );

            setSupplierUsername(supplierUsername);
            setData({
                name: selectedSupplier.name,
                username: selectedSupplier.username,
                email: selectedSupplier.email,
                number_phone: selectedSupplier.number_phone,
                address: selectedSupplier.address,
                picture: selectedSupplier.picture,
                is_active: selectedSupplier.is_active,
            });
        } else {
            setSupplierUsername("");
            setData({
                name: "",
                username: "",
                email: "",
                number_phone: "",
                address: "",
                picture: "",
                status: "",
            });
        }
    }

    function openToast(supplierUsername, title) {
        setIsToast(true);
        setToastTitle(title);
        setSupplierUsername(supplierUsername);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.supplier.index"), {
            data,
            onSuccess: () => {
                toast.success("Supplier has been created!");
                setIsOpen(false);
                setData({ name: "", icon: "" });
            },
        });
    };

    const onUpdate = (supplierUsername) => (e) => {
        e.preventDefault();
        put(route("admin.supplier.update", supplierUsername), {
            ...data,
            onSuccess: () => {
                toast.success("Supplier has been updated!"), setIsOpen(false);
            },
        });
    };

    const onDelete = (supplierUsername) => {
        destroy(route("admin.supplier.destroy", supplierUsername), {
            onSuccess: () => {
                toast.success("Supplier has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/supplier`,
            {
                search: e.target.value,
            },
            {
                preserveState: true,
            }
        );
    };
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Suppliers */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-slate-700">
                    Suppliers
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route("admin.dashboard")}>
                            <IconArrowLeft size={18} />
                        </ActionLink>
                        <ActionButton
                            onClick={() => openModalSupplier("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search supplier.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-full"></div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Username</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Number Phone</Table.Th>
                            <Table.Th>Address</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {suppliers.length > 0 ? (
                            <>
                                {suppliers.map((supplier, index) => (
                                    <tr
                                        className={`${
                                            supplier.is_active === 1
                                                ? "bg-white"
                                                : "bg-gray-300"
                                        } border-b text-gray-500`}
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>{supplier.name}</Table.Td>
                                        <Table.Td>{supplier.username}</Table.Td>
                                        <Table.Td>{supplier.email}</Table.Td>
                                        <Table.Td>
                                            {supplier.number_phone}
                                        </Table.Td>
                                        <Table.Td>{supplier.address}</Table.Td>
                                        <Table.Td>
                                            <img
                                                src={
                                                    supplier.picture
                                                        ? supplier.picture
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                className="rounded w-12 h-12"
                                            />
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-yellow-400"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalSupplier(
                                                            supplier.username,
                                                            "edit"
                                                        )
                                                    }
                                                >
                                                    <IconEdit size={18} />
                                                </ActionButton>
                                                <ActionButton
                                                    className="w-8 h-8 bg-red-500"
                                                    type="button"
                                                    onClick={() =>
                                                        openToast(
                                                            supplier.username,
                                                            supplier.name
                                                        )
                                                    }
                                                >
                                                    <IconTrash size={18} />
                                                </ActionButton>
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <tr className="bg-white border-b text-gray-500 text-center">
                                <Table.Td colSpan="9">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {suppliers.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-slate-500 mt-10">
                            Total Suppliers:{" "}
                            <span className="font-bold">{total_suppliers}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Suppliers */}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    size={`2/3`}
                    type={modalType}
                    title={modalSupplier}
                    onCancel={onCancelModal}
                >
                    <form
                        onSubmit={
                            modalType === "create"
                                ? onSubmit
                                : onUpdate(supplierUsername)
                        }
                        className="mt-6"
                    >
                        <SupplierForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={onCancelModal}>
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton type="submit">
                                {modalType === "create" ? "Create" : "Update"}
                            </PrimaryButton>
                        </div>
                    </form>
                </MyModal>

                {/* Toast */}
                <Toast
                    isToast={isToast}
                    title={`Tindakan ini akan memulai proses menghapus Supplier. Apakah Anda ingin menghapus ${toastTitle}? `}
                >
                    <div className="flex justify-end gap-2">
                        <SecondaryButton
                            className="w-32"
                            onClick={() => onCancelToast()}
                        >
                            No
                        </SecondaryButton>
                        <PrimaryButton
                            className="w-32"
                            onClick={() => onDelete(supplierUsername)}
                        >
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
