import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/App";
import { Head, useForm, router, usePage } from "@inertiajs/react";
import { IconFilter, IconPrinter } from "@tabler/icons-react";
import React, { useState } from "react";
import { numberFormat } from "@/Libs/Helper";
import TextInput from "@/Components/TextInput";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ActionLink from "@/Components/ActionLink";

export default function Index({ total_invoices, ...props }) {
    const { data: invoices, meta, links } = props.invoices;

    const { data, setData } = useForm({
        start_date: "",
        end_date: "",
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const filterInvoice = () => {
        router.get(
            `/admin/invoice`,
            {
                start_date: data.start_date,
                end_date: data.end_date,
            },
            {
                preserveState: true,
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
                        "Order ID",
                        "Name",
                        "Charge",
                        "Change",
                        "Total Quantity",
                        "Total Price",
                        "Succeeded at",
                    ],
                ];

                const rows = data.map((invoice) => [
                    invoice.order_id,
                    invoice.name,
                    `Rp. ${numberFormat(invoice.money.charge)}`,
                    `Rp. ${numberFormat(invoice.money.change)}`,
                    invoice.total_quantity,
                    `Rp. ${numberFormat(invoice.total_price)}`,
                    invoice.succeeded_at,
                ]);

                doc.autoTable({
                    head: headers,
                    body: rows,
                    startY: 20,
                });

                doc.save("Report Order RANDA.pdf");
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
            `/admin/invoice`,
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
            <Head title="History" />
            <Container>
                {/* Start Invoices */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Invoices
                </h3>
                <div className="flex  flex-wrap justify-between w-full item-center mt-2">
                    <ActionLink href={route("admin.dashboard")} />
                </div>
                <div className="flex  flex-wrap justify-between w-full item-center my-2">
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
                                disabled={!data.start_date || !data.end_date} // Menonaktifkan jika tanggal belum diisi
                            >
                                <IconFilter size={26} />
                            </ActionButton>
                            <ActionButton
                                className="w-10 h-10"
                                onClick={() => generatePDF(invoices)}
                                type="button"
                                disabled={!isFilterApplied} // Menonaktifkan jika filter belum diaplikasikan
                            >
                                <IconPrinter size={26} />
                            </ActionButton>
                        </div>
                    </div>
                    <TextInput
                        type="search"
                        className="w-full md:w-1/4 "
                        placeholder="Search invoice.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-full"></div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Order ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Charge</Table.Th>
                            <Table.Th>Change</Table.Th>
                            <Table.Th>Total Quantity</Table.Th>
                            <Table.Th>Total Price</Table.Th>
                            <Table.Th>Succeeded at</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {invoices.length > 0 ? (
                            invoices.map((invoice, index) => (
                                <tr
                                    className="bg-white border-b"
                                    key={index}
                                >
                                    <Table.Td className="w-5">
                                        {meta.from + index}
                                    </Table.Td>
                                    <Table.Td>#{invoice.order_id}</Table.Td>
                                    <Table.Td>{invoice.name}</Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(invoice.money.charge)}
                                    </Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(invoice.money.change)}
                                    </Table.Td>
                                    <Table.Td>
                                        {invoice.total_quantity}
                                    </Table.Td>
                                    <Table.Td>
                                        <sup> Rp.</sup>{" "}
                                        {numberFormat(invoice.total_price)}
                                    </Table.Td>
                                    <Table.Td>{invoice.succeeded_at}</Table.Td>
                                    <Table.Td>
                                        <span
                                            className={`text-xs p-2 ${
                                                invoice.status == 1
                                                    ? "bg-emerald-500 text-white rounded"
                                                    : "bg-yellow-400 text-white rounded"
                                            }`}
                                        >
                                            {invoice.status == 1
                                                ? "Done"
                                                : "In Progress"}
                                        </span>
                                    </Table.Td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="10">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {invoices.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Invoices:{" "}
                            <span className="font-bold">{total_invoices}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Invoices */}
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
