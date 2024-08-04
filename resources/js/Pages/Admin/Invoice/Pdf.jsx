import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/App";
import { Head, useForm, router, usePage } from "@inertiajs/react";
import { IconPrinter } from "@tabler/icons-react";
import React, { useState } from "react";
import { numberFormat } from "@/Libs/Helper";
import TextInput from "@/Components/TextInput";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Index(props) {
    const { data: invoices } = props.invoices;

    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Invoices */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Invoices
                </h3>
                <div className="w-full"></div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Order ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Charge</Table.Th>
                            <Table.Th>Change</Table.Th>
                            <Table.Th>Table</Table.Th>
                            <Table.Th>Total Quantity</Table.Th>
                            <Table.Th>Total Price</Table.Th>
                            <Table.Th>Succeeded at</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {invoices.length > 0 ? (
                            <>
                                {invoices.map((invoice, index) => (
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
                                        <Table.Td>{invoice.table_id}</Table.Td>
                                        <Table.Td>
                                            {invoice.total_quantity}
                                        </Table.Td>
                                        <Table.Td>
                                            <sup> Rp.</sup>{" "}
                                            {numberFormat(invoice.total_price)}
                                        </Table.Td>
                                        <Table.Td>
                                            {invoice.succeeded_at}
                                        </Table.Td>
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
                                ))}
                            </>
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="10">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {/* End Invoices */}
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
