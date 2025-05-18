import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/App";
import { Head, useForm, router, usePage } from "@inertiajs/react";
import { IconFilter, IconPrinter, IconTrash } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { numberFormat } from "@/Libs/Helper";
import TextInput from "@/Components/TextInput";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ActionLink from "@/Components/ActionLink";
import Select2 from "react-select";
import MyModal from "@/Components/Modal";

export default function Index({
    total_qris,
    total_cash,
    banyak_transaksi,
    suppliers,
    rekap_transaksi,
    total_invoices,
    ...props
}) {
    const { data: invoices, meta, links } = props.invoices;
    const { url } = usePage();

    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        start_date: "",
        end_date: "",
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState("all");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRekap, setSelectedRekap] = useState({});
    const [filteredRekap, setFilteredRekap] = useState([]);
    const [hasSearchResults, setHasSearchResults] = useState(true);

    const { errors } = usePage().props;

    // Initialize filtered data
    useEffect(() => {
        // Create a copy and sort by purchased_at in descending order (newest first)
        setFilteredRekap(
            rekap_transaksi
                .slice()
                .sort((a, b) => 
                    new Date(b.purchased_at) - new Date(a.purchased_at)
                )
        );
    }, [rekap_transaksi]);

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSupplierChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : "all";
        setSelectedSupplier(value);
        router.get(
            url,
            {
                search: searchQuery,
                supplier: value !== "all" ? value : null,
                start_date: data.start_date || null,
                end_date: data.end_date || null,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

    const filterInvoice = () => {
        router.get(
            `/admin/rekap`,
            {
                start_date: data.start_date,
                end_date: data.end_date,
                search: searchQuery,
                supplier: selectedSupplier !== "all" ? selectedSupplier : null,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
        setIsFilterApplied(true);
    };

    const generatePDF = (data) => {
        if (isFilterApplied) {
            try {
                const doc = new jsPDF("landscape");

                const headers = [
                    [
                        "Invoice ID",
                        "Nama Supplier",
                        "Nama Customer",
                        "Nama Produk",
                        "Jenis Pembayaran",
                        "Harga",
                        "Jumlah",
                        "Total Harga",
                        "Waktu Pembelian",
                    ],
                ];

                const rows = rekap_transaksi.map((transaksi) => [
                    transaksi.invoice_id,
                    transaksi.supplier.name,
                    transaksi.invoice.customer_name,
                    transaksi.product.name,
                    transaksi.invoice.payment.name,
                    `Rp. ${numberFormat(transaksi.price)}`,
                    transaksi.quantity,
                    `Rp. ${numberFormat(transaksi.price * transaksi.quantity)}`,
                    transaksi.purchased_at,
                ]);

                doc.autoTable({
                    head: headers,
                    body: rows,
                    startY: 20,
                });

                doc.save("Report Order Eatstedi.pdf");
            } catch (error) {
                console.error("Error generating PDF:", error);
            }
        } else {
            alert("Please apply the filter first.");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/rekap`,
            {
                search: e.target.value,
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
            <Head title="History" />
            <Container>
                {/* Start Invoices */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Rekap Transaksi
                </h3>
                <div className="flex flex-wrap justify-between w-full item-center mt-2">
                    <ActionLink href={route("admin.dashboard")} />
                </div>
                <div className="flex flex-wrap justify-between w-full item-center my-2">
                    <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 w-full mb-2 md:mb-0 sm:w-full md:w-1/2">
                        <div className="w-full flex gap-2">
                            <div className="w-full">
                                <TextInput
                                    type="date"
                                    name="start_date"
                                    id="start_date"
                                    className="w-full"
                                    onChange={onChange}
                                    value={data.start_date}
                                />
                                {errors.start_date ? (
                                    <span className="text-red-500">
                                        {errors.start_date}
                                    </span>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <TextInput
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    className="w-full"
                                    onChange={onChange}
                                    value={data.end_date}
                                />
                                {errors.end_date ? (
                                    <span className="text-red-500">
                                        {errors.end_date}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-full sm:w-auto flex gap-2 justify-end sm:justify-start">
                            <ActionButton
                                className="w-10 h-10 bg-violet"
                                onClick={filterInvoice}
                                type="button"
                                disabled={!data.start_date || !data.end_date}
                            >
                                <IconFilter size={26} />
                            </ActionButton>
                            <ActionButton
                                className="w-10 h-10"
                                onClick={() => generatePDF(invoices)}
                                type="button"
                                disabled={!isFilterApplied}
                            >
                                <IconPrinter size={26} />
                            </ActionButton>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-between">
                        <TextInput
                            id="searchInput"
                            type="search"
                            className="w-full md:w-1/2 ml-3 lg:w-2/5"
                            placeholder="Search rekap (invoice, supplier, product, etc.)"
                            defaultValue={searchQuery}
                            onChange={handleSearch}
                            autoComplete="off"
                        />
                        <Select2
                            id="supplier-select"
                            value={selectedSupplierOption}
                            options={supplierOptions}
                            className="w-full md:w-1/2 lg:w-2/5"
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
                    </div>
                </div>
                <div className="w-full"></div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Invoice ID</Table.Th>
                            <Table.Th>Nama Supplier</Table.Th>
                            <Table.Th>Nama Customer</Table.Th>
                            <Table.Th>Nama Produk</Table.Th>
                            <Table.Th>Jenis Pembayaran</Table.Th>
                            <Table.Th>Harga</Table.Th>
                            <Table.Th>Jumlah</Table.Th>
                            <Table.Th>Total Harga</Table.Th>
                            <Table.Th>Waktu Pembelian</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {hasSearchResults ? (
                            filteredRekap.map((rekap, index) => (
                                <tr className="bg-white border-b" key={index}>
                                    <Table.Td className="w-5">
                                        {meta.from + index}
                                    </Table.Td>
                                    <Table.Td>#{rekap.invoice_id}</Table.Td>
                                    <Table.Td>{rekap.supplier.name}</Table.Td>
                                    <Table.Td>
                                        {rekap.invoice.customer_name}
                                    </Table.Td>
                                    <Table.Td>{rekap.product.name}</Table.Td>
                                    <Table.Td>{rekap.payment_name}</Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(rekap.price)}
                                    </Table.Td>
                                    <Table.Td>
                                        {numberFormat(rekap.quantity)}
                                    </Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(
                                            rekap.price * rekap.quantity
                                        )}
                                    </Table.Td>
                                    <Table.Td>{rekap.purchased_at}</Table.Td>
                                    <Table.Td>
                                        <span
                                            className={`text-xs p-2 ${
                                                rekap.invoice.status == 1
                                                    ? "bg-green-500 text-white rounded"
                                                    : "bg-yellow-400 text-white rounded"
                                            }`}
                                        >
                                            {rekap.invoice.status == 1
                                                ? "Done"
                                                : "In Progress"}
                                        </span>
                                    </Table.Td>
                                    <Table.Td>
                                        <ActionButton
                                            type={"button"}
                                            onClick={() => {
                                                setIsOpen(true);
                                                setSelectedRekap(rekap);
                                            }}
                                            className="w-10 h-10"
                                        >
                                            <IconTrash size={26} />
                                        </ActionButton>
                                    </Table.Td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="12">
                                    Tidak ada data yang ditemukan
                                </Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {invoices.length > 0 && hasSearchResults && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <div className={"flex gap-3"}>
                            <p className="text-sm text-third mt-10">
                                Total Rekap:{" "}
                                <span className="font-bold">
                                    {numberFormat(banyak_transaksi)}
                                </span>{" "}
                            </p>
                            <p className="text-sm text-third mt-10">
                                Total Qris:{" "}
                                <span className="font-bold">
                                    {numberFormat(total_qris)}
                                </span>{" "}
                            </p>
                            <p className="text-sm text-third mt-10">
                                Total Cash:{" "}
                                <span className="font-bold">
                                    {numberFormat(total_cash)}
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                )}
                {/* End Invoices */}
            </Container>
            <MyModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                size={"1/3"}
                title={"Delete Confirmation"}
            >
                <div>Are you sure you want to delete this data?</div>
                <ActionButton
                    type={"button"}
                    className={"w-10 h-10 mt-5"}
                    onClick={() =>
                        destroy(
                            route("admin.rekap.destroy", selectedRekap.id),
                            {
                                preserveScroll: true,
                                onSuccess: () => setIsOpen(false),
                            }
                        )
                    }
                >
                    <IconTrash size={20} />
                </ActionButton>
            </MyModal>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
