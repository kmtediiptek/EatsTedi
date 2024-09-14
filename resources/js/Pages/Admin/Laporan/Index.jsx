import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/App";
import {Head, router, useForm, usePage} from "@inertiajs/react";
import React, {useState} from "react";
import { numberFormat } from "@/Libs/Helper";
import ActionLink from "@/Components/ActionLink";
import TextInput from "@/Components/TextInput";
import {IconFilter, IconPrinter} from "@tabler/icons-react";
import Select2 from "react-select";
import jsPDF from "jspdf";
import "jspdf-autotable";



export default function Index({ products_sold, suppliers }) {
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const { errors } = usePage().props;
    const [selectedSupplier, setSelectedSupplier] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const { url } = usePage();



    // Grouping and aggregating data by product name
    const aggregatedProducts = products_sold.reduce((acc, product) => {
        const { name } = product.product;
        const supplierName = product.supplier.name;
        if (!acc[name]) {
            acc[name] = {
                totalCash: 0,
                totalQris: 0,
                totalTransactionsCash: 0,
                totalTransactionsQris: 0,
                totalOmset: 0,
                totalKomisi: 0,
                totalQrisKomisi: 0,
                totalOmsetBersih: 0,
                price: product.product.price, // assuming price is the same for each product
                supplierName: supplierName
            };
        }
        const paymentType = product.invoice.payment.name;
        const totalAmount = product.price * product.quantity;
        const komisi = paymentType === 'qris' ? totalAmount * 0.1 : 0;
        const omsetBersih = totalAmount - komisi;

        acc[name].totalCash += paymentType === 'cash' ? totalAmount : 0;
        acc[name].totalQris += paymentType === 'qris' ? totalAmount : 0;
        acc[name].totalTransactionsCash += paymentType === 'cash' ? product.quantity : 0;
        acc[name].totalTransactionsQris += paymentType === 'qris' ? product.quantity : 0;
        acc[name].totalOmset += totalAmount;
        acc[name].totalKomisi += paymentType === 'qris' ? komisi : 0;
        acc[name].totalQrisKomisi += paymentType === 'qris' ? komisi : 0;
        acc[name].totalOmsetBersih += omsetBersih;

        return acc;
    }, {});

    const filterInvoice = () => {
        router.get(
            `/admin/laporan`,
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



    const { data, setData, delete:destroy } = useForm({
        start_date: "",
        end_date: "",
    });

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const generatePDF = (products_sold) => {
        try {
            const doc = new jsPDF("landscape");
            const tableColumn = ["No", "Nama Penitip", "Nama Produk", "Harga Produk Satuan", "Jumlah Pendapatan Cash", "Jumlah Pendapatan Qris", "Jumlah Transaksi Cash", "Jumlah Transaksi Qris", "Total Omset", "Komisi 10%", "Total Qris - Komisi", "Omset Bersih"];
            const tableRows = [];
            let index = 1;
            Object.entries(aggregatedProducts).map(([productName, data], index) =>
            {
                const omset = data.price * data.totalTransactionsCash + data.price * data.totalTransactionsQris;
                const komisi = (data.price * data.totalTransactionsCash + data.price * data.totalTransactionsQris) * 0.1;
                const qrisKomisi = (data.price * data.totalTransactionsQris) - komisi
                tableRows.push([index + 1, data.supplierName, productName, numberFormat(data.price), numberFormat(data.price * data.totalTransactionsCash), numberFormat(data.price * data.totalTransactionsQris), numberFormat(data.totalTransactionsCash), numberFormat(data.totalTransactionsQris), numberFormat(omset), numberFormat(komisi), numberFormat(qrisKomisi), numberFormat(data.totalOmsetBersih)])
            });
            console.log(doc)
            doc.autoTable(
                {
                    head: [tableColumn],
                    body: tableRows,
                    startY: 20,
                }
            );
            // add generated on
            doc.text(`Generated on ${new Date().toLocaleString()}`, 14, doc.internal.pageSize.height - 10);
            doc.save('Laporan.pdf');
        } catch (e) {
            console.error("Error generating PDF:", e);
        }

    }

    const handleSupplierChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : "";
        setSelectedSupplier(value || "all");
        router.get(
            url,
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
        { value: "all", label: "All Suppliers" }, // Tambahkan opsi ini
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
            <Head title="History" />
            <Container>
                {/* Start Invoices */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Rekap Transaksi
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
                                onClick={() => generatePDF(products_sold)}
                                type="button"
                                disabled={!isFilterApplied} // Menonaktifkan jika filter belum diaplikasikan
                            >
                                <IconPrinter size={26} />
                            </ActionButton>
                        </div>
                    </div>
                    {/*<TextInput*/}
                    {/*    type="search"*/}
                    {/*    className="w-full md:w-1/4 "*/}
                    {/*    placeholder="Search invoice.."*/}
                    {/*    defaultValue={searchQuery}*/}
                    {/*    onChange={handleSearch}*/}
                    {/*/>*/}
                    <Select2
                        id="supplier-select"
                        value={selectedSupplierOption}
                        options={supplierOptions}
                        className="w-full lg:w-1/4"
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
                <div className="w-full"></div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Penitip</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Produk</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga Produk Satuan</th>
                        <th colSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Pendapatan</th>
                        <th colSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Transaksi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Omset</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Komisi 10%</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Qris - Komisi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Omset Bersih</th>
                    </tr>
                    <tr>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3">Cash</th>
                        <th className="px-6 py-3">Qris</th>
                        <th className="px-6 py-3">Cash</th>
                        <th className="px-6 py-3">Qris</th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(aggregatedProducts).map(([productName, data], index) =>
                    {
                        const omset = data.price * data.totalTransactionsCash + data.price * data.totalTransactionsQris;
                        const komisi = (data.price * data.totalTransactionsCash + data.price * data.totalTransactionsQris) * 0.1;
                        const qrisKomisi = (data.price * data.totalTransactionsQris) - komisi
                        return (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{data.supplierName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{productName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.price)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.price * data.totalTransactionsCash)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.price * data.totalTransactionsQris)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.totalTransactionsCash)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.totalTransactionsQris)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(omset)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(komisi)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(qrisKomisi)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{numberFormat(data.totalOmsetBersih)}</td>
                        </tr>
                    )})}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
