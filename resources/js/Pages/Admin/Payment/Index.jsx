import ActionButton from "@/Components/Actionbutton";
import PaymentForm from "@/Components/PaymentForm";
import Container from "@/Components/Container";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router } from "@inertiajs/react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TextInput from "@/Components/TextInput";
import ActionLink from "@/Components/ActionLink";

export default function Index({ total_payments, ...props }) {
    const { data: payments, meta, links } = props.payments;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        name: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalPayment, setModalPayment] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [PaymentSlug, setPaymentSlug] = useState("");

    function openModalTable(PaymentSlug, type) {
        setIsOpen(true);
        setModalPayment("Payment");
        setModalType(type);
        setPaymentSlug(PaymentSlug);
        if (PaymentSlug) {
            const selectedPayment = payments.find(
                (payment) => payment.slug === PaymentSlug
            );

            setPaymentSlug(PaymentSlug);
            setData({
                name: selectedPayment.name,
                status: selectedPayment.status,
            });
        } else {
            setPaymentSlug("");
            setData({
                name: "",
                status: "",
            });
        }
    }

    function openToast(PaymentSlug, title) {
        setIsToast(true);
        setToastTitle(title);
        setPaymentSlug(PaymentSlug);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.payment.index"), {
            data,
            onSuccess: () => {
                toast.success("Payment has been created!");
                setIsOpen(false);
                setData({ name: "" });
            },
        });
    };

    const onUpdate = (PaymentSlug) => (e) => {
        e.preventDefault();
        put(route("admin.payment.update", PaymentSlug), {
            ...data,
            onSuccess: () => {
                toast.success("Payment has been updated!"), setIsOpen(false);
            },
        });
    };

    const onDelete = (PaymentSlug) => {
        destroy(route("admin.payment.destroy", PaymentSlug), {
            onSuccess: () => {
                toast.success("Payment has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/payment`,
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
                {/* Start Payments */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Payments
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route("admin.dashboard")} />
                        <ActionButton
                            onClick={() => openModalTable("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search payment.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {payments.length > 0 ? (
                            <>
                                {payments.map((payment, index) => (
                                    <tr
                                        className="bg-white border-b"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>
                                            {payment.name.toUpperCase()}
                                        </Table.Td>
                                        <Table.Td className="text-left">
                                            <span
                                                className={`text-xs p-2 ${
                                                    payment.status == 1
                                                        ? "bg-sky text-white rounded"
                                                        : "bg-emerald text-white rounded"
                                                }`}
                                            >
                                                {payment.status == 1
                                                    ? "Active"
                                                    : "Non Active"}
                                            </span>
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-yellow-400"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalTable(
                                                            payment.slug,
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
                                                            payment.slug,
                                                            "Payment " +
                                                                payment.name
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
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="4">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {payments.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Payments:{" "}
                            <span className="font-bold">{total_payments}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Payments */}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    size={`1/3`}
                    type={modalType}
                    title={modalPayment}
                >
                    <form
                        onSubmit={
                            modalType == "create"
                                ? onSubmit
                                : onUpdate(PaymentSlug)
                        }
                        className="mt-6"
                    >
                        <PaymentForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={() => onCancelModal()}>
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton type="submit">
                                {modalType == "create" ? "Create" : "Update"}
                            </PrimaryButton>
                        </div>
                    </form>
                </MyModal>

                {/* Toast */}
                <Toast
                    isToast={isToast}
                    onClose={() => setIsToast(false)}
                    title={toastTitle}
                >
                    <div className="flex justify-end gap-2 justify-center">
                        <SecondaryButton onClick={() => onCancelToast()}>
                            No
                        </SecondaryButton>
                        <PrimaryButton onClick={() => onDelete(PaymentSlug)}>
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
