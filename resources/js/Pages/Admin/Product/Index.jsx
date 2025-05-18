import ActionButton from "@/Components/Actionbutton";
import ProductForm from "@/Components/ProductForm";
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
import { numberFormat } from "@/Libs/Helper";
import TextInput from "@/Components/TextInput";
import ActionLink from "@/Components/ActionLink";
import TabLink from "@/Components/Ui/TabLink";
import Select2 from "react-select";

export default function Index({ total_products, suppliers, ...props }) {
    const { data: products, meta, links } = props.products;
    const {
        delete: destroy,
        data,
        setData,
    } = useForm({
        name: "",
        supplier_id: "",
        category_id: "",
        slug: "",
        price: "",
        picture: "",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [isToast, setIsToast] = useState(false);
    const [modalProduct, setModalProduct] = useState("");
    const [toastTitle, setToastTitle] = useState("");
    const [modalType, setModalType] = useState("");
    const [productSlug, setProductSlug] = useState("");

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    function openModalCategory(productSlug, type) {
        setIsOpen(true);
        setModalProduct("Menu");
        setModalType(type);
        setProductSlug(productSlug);
        if (productSlug) {
            const selectedProduct = products.find(
                (product) => product.slug === productSlug
            );
            setData({
                name: selectedProduct.name,
                slug: selectedProduct.slug,
                supplier_id: selectedProduct.supplier,
                category_id: selectedProduct.category,
                price: selectedProduct.price,
                picture: selectedProduct.picture,
            });
        } else {
            setData({
                name: "",
                supplier_id: "",
                category_id: "",
                slug: "",
                price: "",
                picture: "",
            });
        }
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function openToast(productSlug, title) {
        setIsToast(true);
        setToastTitle(title);
        setProductSlug(productSlug);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        router.post(
            `/admin/setting/product`,
            {
                ...data,
                supplier_id: data.supplier_id,
                category_id: data.category_id.id,
            },
            {
                onSuccess: () => {
                    setIsOpen(false),
                        setData({
                            name: "",
                            slug: "",
                            price: "",
                            supplier_id: "",
                            category_id: "",
                            picture: "",
                        }),
                        toast.success("Menu has been created!");
                },
            }
        );
    };

    const onUpdate = (e) => {
        e.preventDefault();
        router.post(
            `/admin/setting/product/${data.slug}`,
            {
                _method: "put",
                ...data,
                supplier_id: data.supplier_id,
                category_id: data.category_id.id,
            },
            {
                onSuccess: () => {
                    setIsOpen(false),
                        setData({
                            name: "",
                            slug: "",
                            price: "",
                            picture: "",
                            supplier_id: "",
                            category_id: "",
                        }),
                        toast.success("Menu has been updated!");
                },
            }
        );
    };

    const onDelete = (productSlug) => {
        destroy(route("admin.product.destroy", productSlug), {
            onSuccess: () => {
                toast.success("Menu has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/product`,
            {
                search: e.target.value,
                supplier: selectedSupplier,
            },
            {
                preserveState: true,
            }
        );
    };

    const handleSupplierChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : "";
        setSelectedSupplier(value || "all");
        router.get(
            `/admin/setting/product`,
            {
                search: searchQuery,
                supplier: value,
            },
            {
                preserveState: true,
            }
        );
    };

    const supplierOptions = [
        { value: "all", label: "All Suppliers" },
        ...suppliers
            .slice() // Create a copy to avoid mutating the original array
            .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
            .map((supplier) => ({
                value: supplier.id,
                label: supplier.name,
            })),
    ];

    const selectedSupplierOption = supplierOptions.find(
        (option) => option.value === selectedSupplier
    ) || { value: "all", label: "All Suppliers" };

    return (
        <>
            <Head title="Setting" />
            <Container>
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Products
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2 w-min">
                        <ActionLink href={route("admin.dashboard")} />

                        <ActionButton
                            onClick={() => openModalCategory("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <div className="flex w-3/4 md:w-1/2 gap-2">
                        <Select2
                            id="supplier-select"
                            value={selectedSupplierOption}
                            options={supplierOptions}
                            className="w-full md:w-1/2"
                            onChange={handleSupplierChange}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    border: state.isFocused
                                        ? "2px solid #d4d4d8"
                                        : "2px solid #d4d4d8",
                                    boxShadow: "none",
                                    "&:hover": {
                                        border: "2px solid #d4d4d8",
                                    },
                                    height: "44px",
                                    borderRadius: "8px",
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: state.isSelected
                                        ? "#d4d4d8"
                                        : state.isFocused
                                        ? "#d4d4d8"
                                        : null,
                                    color: "black",
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    borderRadius: "8px",
                                }),
                                menuList: (provided) => ({
                                    ...provided,
                                    borderRadius: "8px",
                                }),
                            }}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#d4d4d8",
                                    primary: "black",
                                },
                            })}
                        />
                        <TextInput
                            type="search"
                            className="w-full md:w-1/2"
                            placeholder="Search menu.."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <TabLink
                        href={route("admin.product.index")}
                        active={route().current("admin.product.index")}
                    >
                        All Menu
                    </TabLink>
                    {products.length > 0 ? (
                        <TabLink
                            href={route("admin.product.today.index")}
                            active={route().current(
                                "admin.product.today.index"
                            )}
                        >
                            Daily Menu
                        </TabLink>
                    ) : null}
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Supplier</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Category</Table.Th>
                            <Table.Th>Price</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <tr className="bg-white border-b" key={index}>
                                    <Table.Td className="w-5">
                                        {meta.from + index}
                                    </Table.Td>
                                    <Table.Td className="font-bold">
                                        {product.supplier.name.toUpperCase()}
                                    </Table.Td>
                                    <Table.Td>{product.name}</Table.Td>
                                    <Table.Td>
                                        <span
                                            className={`text-xs p-2 ${
                                                product.category.id === 1
                                                    ? "bg-sky text-white rounded"
                                                    : product.category.id === 2
                                                    ? "bg-emerald text-white rounded"
                                                    : "bg-violet text-white rounded"
                                            }`}
                                        >
                                            {product.category.name.toUpperCase()}
                                        </span>
                                    </Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(product.price)}
                                    </Table.Td>
                                    <Table.Td>
                                        <img
                                            src={
                                                product.picture
                                                    ? product.picture
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
                                                    openModalCategory(
                                                        product.slug,
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
                                                        product.slug,
                                                        product.name
                                                    )
                                                }
                                            >
                                                <IconTrash size={18} />
                                            </ActionButton>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="7">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {products.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Products:{" "}
                            <span className="font-bold">{total_products}</span>{" "}
                        </p>
                    </div>
                )}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    size={`1/2`}
                    type={modalType}
                    title={modalProduct}
                >
                    <form
                        onSubmit={modalType === "create" ? onSubmit : onUpdate}
                        className="mt-6"
                    >
                        <ProductForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={() => onCancelModal()}>
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
                    onClose={() => setIsToast(false)}
                    title={`This action will start the Product deletion process. Do you want to delete the Product? ${toastTitle}? `}
                >
                    <div className="flex justify-end gap-2 justify-end">
                        <SecondaryButton
                            onClick={() => setIsToast(false)}
                            className="w-32"
                        >
                            No
                        </SecondaryButton>
                        <PrimaryButton
                            onClick={() => onDelete(productSlug)}
                            className="w-32"
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
