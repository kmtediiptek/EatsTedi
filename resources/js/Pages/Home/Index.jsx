import React, { useEffect, useState } from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import {
    IconCalendarTime,
    IconCategory,
    IconMoodSmileBeam,
} from "@tabler/icons-react";
import Guest from "@/Layouts/Guest";
import ProductItemUser from "@/Components/ProductItemUser";
import Footer from "@/Components/Footer";
import TextInput from "@/Components/TextInput";
import Select2 from "react-select";

export default function Index({
    categories,
    total_categories,
    payments,
    schedules,
    suppliers,
    ...props
}) {
    const { url } = usePage();

    const { data: products, meta, links } = props.products;

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState("all");

    // Opsi untuk Select2
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

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            url,
            {
                search: e.target.value,
                supplier: selectedSupplier,
            },
            {
                preserveState: true,
            }
        );
    };

    const onCategory = (category) => {
        router.get(
            url,
            {
                category: category,
            },
            {}
        );
    };

    const [dateTimeInfo, setDateTimeInfo] = useState({
        dayName: "",
        day: "",
        month: "",
        year: "",
        hours: "",
        minutes: "",
        seconds: "",
    });

    useEffect(() => {
        const updateDateTime = () => {
            const currentDate = new Date();

            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            setDateTimeInfo({
                dayName: days[currentDate.getDay()],
                day: currentDate.getDate(),
                month: months[currentDate.getMonth()],
                year: currentDate.getFullYear(),
                hours: currentDate.getHours().toString().padStart(2, "0"),
                minutes: currentDate.getMinutes().toString().padStart(2, "0"),
                seconds: currentDate.getSeconds().toString().padStart(2, "0"),
            });
        };

        // Perbarui tanggal dan waktu setiap detik (1000 ms)
        const intervalId = setInterval(updateDateTime, 1000);

        // Bersihkan interval saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Head title="Our Menus" />
            <Container className="w-full text-center pt- p4b-0">
                <div className="w-full mt-4">
                    <div>
                        <h3 className="text-fourth text-3xl font-semibold">
                            Our Menus
                        </h3>
                    </div>
                    <div className="w-full mt-4">
                        <h5 className="text-third text-xl">
                            {" "}
                            Here are some of the products we present to you
                        </h5>
                    </div>
                </div>
                {/* <div className="w-full mt-4">
                    <p className="text-third">
                        In our diverse menu, there are various choices of
                        mouth-watering food and drinks.
                    </p>
                    <p className="text-third">
                        Starting from fresh and aromatic specialty coffee,
                        delicious light dishes, to indulgent main dishes, we
                        offer a variety of choices that can satisfy every
                        customer's desires and tastes.
                    </p>
                </div> */}
            </Container>

            <Container>
                <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
                    <div className="w-full md:w-3/4 flex block rounded scrolling-wrapper relative gap-4 overflow-x-scroll flex-nowrap">
                        {schedules.map((schedule, index) => {
                            return (
                                <div
                                    className="flex w-full py-4 items-center gap-2 text-center border border-gray-300 p-3 rounded"
                                    key={index}
                                >
                                    <IconCalendarTime
                                        size={50}
                                        className="text-violet/70"
                                    />
                                    <div className="flex flex-col items-start">
                                        <div className="flex gap-2">
                                            <h6 className="text-third font-semibold">
                                                {schedule.day}
                                            </h6>
                                        </div>
                                        <div className="flex gap-2 w-32">
                                            {schedule.is_break ? (
                                                <span className="text-red-500 font-semibold">
                                                    Break Time
                                                </span>
                                            ) : (
                                                <span className="text-third">
                                                    {schedule.open}-
                                                    {schedule.close}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="flex flex-col py-4 rounded border border-gray-300">
                            <h6 className="text-center w-full text-xl text-slate-600">
                                {dateTimeInfo.dayName}, {dateTimeInfo.month}{" "}
                                {dateTimeInfo.day} {dateTimeInfo.year}
                            </h6>
                            <h1 className="text-center w-full text-4xl font-bold text-fourth">
                                {dateTimeInfo.hours}:{dateTimeInfo.minutes}:
                                {dateTimeInfo.seconds}
                            </h1>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="">
                <div className="w-full flex items-center justify-end">
                    <div className="w-full md:w-1/4">
                        <TextInput
                            type="search"
                            className="w-full border-r border-b-none border-r "
                            placeholder="Search menu.."
                            defaultValue={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="w-full gap-4 flex items-center justify-between  mt-4">
                    {/* Select2 nya disini */}
                    <div className="w-full md:w-1/4">
                        <Select2
                            id="supplier-select"
                            value={selectedSupplierOption}
                            options={supplierOptions}
                            className="w-full"
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
                    <div className="w-full md:w-3/4 flex relative rounded scrolling-wrapper relative gap-x-4 overflow-x-scroll flex-nowrap">
                        <Link
                            href={route("home.index")}
                            className="px-2 gap-x-2 flex text-white text-fourth border border-secondary rounded-md px-4 "
                        >
                            <IconCategory
                                className="my-2 text-primary"
                                size={20}
                            />
                            <div className="flex h-10 items-center justify-center">
                                <p className="text-third font-semibold pr-2">
                                    All
                                </p>
                            </div>
                        </Link>
                        {categories.map((category, index) => (
                            <button
                                onClick={() => onCategory(category.slug)}
                                className="justify-between gap-x-2 flex items-center text-white border-secondary rounded-md px-4 text-fourth border"
                                key={index}
                            >
                                <div
                                    className="my-2 text-primary"
                                    dangerouslySetInnerHTML={{
                                        __html: category.icon,
                                    }}
                                />
                                <div className="flex h-10 items-center justify-center">
                                    <p className="text-third font-semibold pr-2">
                                        {category.name}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </Container>

            <Container>
                <h3 className="text-2xl mb-4 font-semibold text-fourth">
                    Special menu for you
                </h3>
                {products.length ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-full md:grid-cols-5 lg:grid-cols-5 sm:gap-10 gap-4">
                        {products.map((product) => (
                            <ProductItemUser
                                product={product}
                                key={product.slug}
                            />
                        ))}
                        {products.map((product) => (
                            <ProductItemUser
                                product={product}
                                key={product.slug}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-third flex-col">
                        <IconMoodSmileBeam
                            className="text-third mb-4"
                            size={72}
                            stroke={1}
                        />
                        Menu tidak tersedia
                    </div>
                )}
            </Container>

            <Container className="flex justify-center">
                <Pagination meta={meta} links={links} />
            </Container>

            <Footer />
        </>
    );
}

Index.layout = (page) => <Guest children={page} />;
