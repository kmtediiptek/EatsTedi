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
import { IconRefresh, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { numberFormat } from "@/Libs/Helper";
import TextInput from "@/Components/TextInput";
import ActionLink from "@/Components/ActionLink";
import TabLink from "@/Components/Ui/TabLink";
import Select2 from "react-select";
import DailyMenuForm from "@/Components/DailyStock/DailyMenuForm";

export default function Index({ total_products, suppliers, ...props }) {
    const { data: daily_stocks, meta, links } = props.daily_stocks;

    let [isOpen, setIsOpen] = useState(false);
    const [isToast, setIsToast] = useState(false);

    const [modalDailyMenu, setModalDailyMenu] = useState("");

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    function openModalCategory() {
        setIsOpen(true);
        setModalDailyMenu("Daily Menu");
    }

    function openToast() {
        setIsToast(true);
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/product/today`,
            {
                search: e.target.value,
                supplier: selectedSupplier,
            },
            {
                preserveState: true,
            }
        );
    };

    const onResetStock = () => {
        router.post(
            `/admin/setting/product/reset-stock`,
            {},
            {
                onSuccess: () => {
                    setIsToast(false),
                        toast.success("Stock has been successfully reset!");
                },
            }
        );
    };

    const handleSupplierChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : "";
        setSelectedSupplier(value || "all");
        router.get(
            `/admin/setting/product/today`,
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
        { value: "all", label: "All Suppliers" }, // Add this option
        ...suppliers.map((supplier) => ({
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
                {/* Start Products */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Products
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex w-3/4 md:w-1/2 gap-2">
                        <ActionLink href={route("admin.dashboard")} />

                        <ActionButton
                            onClick={() => openModalCategory("", "update")}
                            type="button"
                        >
                            <IconRefresh size={18} />
                        </ActionButton>
                        <ActionButton onClick={() => openToast()} type="button">
                            <IconTrash size={18} />
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

                {/* Navigation */}
                <div className="flex items-center gap-2 py-2">
                    <TabLink
                        href={route("admin.product.index")}
                        active={route().current("admin.product.index")}
                    >
                        Semua Daily Menu
                    </TabLink>
                    <TabLink
                        href={route("admin.product.today.index")}
                        active={route().current("admin.product.today.index")}
                    >
                        Daily Menu Hari Ini
                    </TabLink>
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Supplier</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Price</Table.Th>
                            <Table.Th>Sold</Table.Th>
                            <Table.Th>Rest</Table.Th>
                            <Table.Th>Total Quantity</Table.Th>
                            <Table.Th>Total Price</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {daily_stocks.length > 0 ? (
                            <>
                                {daily_stocks.map((daily_stock, index) => (
                                    <tr
                                        className="bg-white border-b"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td className="font-bold">
                                            {daily_stock.product.supplier.name.toUpperCase()}
                                        </Table.Td>
                                        <Table.Td>
                                            {daily_stock.product.name}
                                        </Table.Td>
                                        <Table.Td>
                                            <sup> Rp.</sup>{" "}
                                            {numberFormat(
                                                daily_stock.product.price
                                            )}
                                        </Table.Td>
                                        <Table.Td>
                                            {numberFormat(daily_stock.sold)}
                                        </Table.Td>
                                        <Table.Td>
                                            {numberFormat(daily_stock.rest)}
                                        </Table.Td>
                                        <Table.Td>
                                            {numberFormat(daily_stock.quantity)}
                                        </Table.Td>
                                        <Table.Td>
                                            <sup> Rp.</sup>{" "}
                                            {numberFormat(
                                                daily_stock.quantity *
                                                    daily_stock.product.price
                                            )}
                                        </Table.Td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="8">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {daily_stocks.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Products:{" "}
                            <span className="font-bold">{total_products}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Products */}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(setIsOpen)}
                    setIsOpen={setIsOpen}
                    size={`1/2`}
                    title={modalDailyMenu}
                >
                    <DailyMenuForm />
                </MyModal>

                {/* Toast */}
                <Toast
                    isToast={isToast}
                    onClose={() => setIsToast(false)}
                    title={`This action will start the process of resetting all Product Stock. Are you sure you want to reset Stock?`}
                >
                    <div className="flex justify-end gap-2 justify-end">
                        <SecondaryButton
                            onClick={() => setIsToast(false)}
                            className="w-32"
                        >
                            No
                        </SecondaryButton>
                        <PrimaryButton
                            onClick={() => onResetStock()}
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
