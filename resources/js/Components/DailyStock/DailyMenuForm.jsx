import React, { useEffect, useState } from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import Select2 from "react-select";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import Error from "../Error";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import toast from "react-hot-toast";

export default function DailyMenuForm({ setIsOpen }) {
    const { data, setData, post } = useForm({
        supplier_id: "",
        daily_stocks: [],
    });

    const { errors, suppliers, daily_stocks } = usePage().props;
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [loading, setLoading] = useState(false);

    // Add this function to prevent scroll wheel from changing number input values
    const preventScrollChange = (e) => {
        e.target.blur();
    };

    useEffect(() => {
        setLoading(true);
        const queryParams = new URLSearchParams(window.location.search);
        const initialSupplier = queryParams.get("supplier") || null;
        const page = queryParams.get("page") || 1;
        const search = queryParams.get("search") || null;
        if (initialSupplier) {
            setSelectedSupplier(initialSupplier);
            router.get(
                `/admin/setting/product/today`,
                {
                    supplier: initialSupplier,
                    page: page,
                    search: search,
                },
                {
                    preserveState: true,
                    onSuccess: (page) => {
                        // Initialize quantities properly when loading data
                        const stocksWithQuantities =
                            page.props.daily_stocks.data.map((stock) => ({
                                ...stock,
                                quantity: stock.rest || 0,
                            }));
                        setData("daily_stocks", stocksWithQuantities);
                        setLoading(false);
                    },
                }
            );
        }
    }, []);

    const queryParams = new URLSearchParams(window.location.search);
    const initialSupplier = queryParams.get("supplier") || null;
    const page = queryParams.get("page") || 1;
    const search = queryParams.get("search") || null;
    useEffect(() => {
        setLoading(true);
        if (initialSupplier) {
            setSelectedSupplier(initialSupplier);
            router.get(
                `/admin/setting/product/today`,
                {
                    supplier: initialSupplier,
                    page: page,
                    search: search,
                },
                {
                    preserveState: true,
                    onSuccess: (page) => {
                        // Initialize quantities properly when loading data
                        const stocksWithQuantities =
                            page.props.daily_stocks.data.map((stock) => ({
                                ...stock,
                                quantity: stock.rest || 0,
                            }));
                        setData("daily_stocks", stocksWithQuantities);
                        setLoading(false);
                    },
                }
            );
        }
    }, [initialSupplier]);

    const handleSupplierChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : "";
        setSelectedSupplier(value || "all");
        router.get(
            `/admin/setting/product/today`,
            {
                supplier: value,
            },
            {
                preserveState: true,
                onSuccess: (page) => {
                    // Initialize quantities properly when changing supplier
                    const stocksWithQuantities =
                        page.props.daily_stocks.data.map((stock) => ({
                            ...stock,
                            quantity: stock.rest || 0,
                        }));
                    setData("daily_stocks", stocksWithQuantities);
                },
            }
        );
    };

    const handleInputChange = (e, productId) => {
        const newProducts = data.daily_stocks.map((product) =>
            product.product.id === productId
                ? { ...product, quantity: e.target.value }
                : product
        );
        setData("daily_stocks", newProducts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Set the supplier_id in the form data
        setData("supplier_id", selectedSupplier);

        post("/admin/setting/product/update-stock", {
            onSuccess: () => {
                // Save the current supplier ID before resetting
                const currentSupplierId = selectedSupplier;

                // Only reset the daily_stocks array, keep the supplier_id
                setData({
                    supplier_id: currentSupplierId, // Keep the current supplier ID
                    daily_stocks: [],
                });

                // Close modal if needed
                if (typeof setIsOpen === "function") {
                    setIsOpen(false);
                }

                // Show success message
                toast.success("Stock updated successfully!");

                // Refetch the data for the same supplier to get updated stock values
                router.get(
                    `/admin/setting/product/today`,
                    {
                        supplier: currentSupplierId,
                    },
                    {
                        preserveState: true,
                        onSuccess: (page) => {
                            // Update with fresh data after stock update
                            const stocksWithQuantities =
                                page.props.daily_stocks.data.map((stock) => ({
                                    ...stock,
                                    quantity: stock.rest || 0,
                                }));
                            setData({
                                supplier_id: currentSupplierId, // Ensure supplier ID is preserved
                                daily_stocks: stocksWithQuantities,
                            });
                        },
                    }
                );
            },
        });
    };

    const supplierOptions = suppliers
        .slice() // Create a copy to avoid mutating the original array
        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
        .map((supplier) => ({
            value: supplier.id,
            label: supplier.name,
        }));

    const selectedSupplierOption = supplierOptions.find(
        (option) => option.value === selectedSupplier
    );

    return (
        <div>
            <div className="mb-6">
                <InputLabel htmlFor="supplier" value="Supplier" />
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
                            zIndex: 9999,
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
                {errors.supplier_id && <Error value={errors.supplier_id} />}
            </div>
            {loading ? (
                <>
                    <div className="h-8 bg-gray-300 rounded-full animate-pulse dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                </>
            ) : (
                <>
                    {selectedSupplier || data.daily_stocks ? (
                        <form onSubmit={handleSubmit}>
                            {data.daily_stocks.length ? (
                                <>
                                    <hr />
                                    <h4 className="text-lg text-fourth font-medium leading-6 mt-4 mb-4">
                                        Perbarui Seluruh Stock
                                    </h4>
                                    {data.daily_stocks.map((daily_stock) => (
                                        <div
                                            key={daily_stock.product.id}
                                            className="flex w-full gap-2 mb-6"
                                        >
                                            <div className="w-full">
                                                <InputLabel
                                                    htmlFor={`name-${daily_stock.product.id}`}
                                                    value="Name"
                                                />
                                                <TextInput
                                                    name={`name-${daily_stock.product.id}`}
                                                    id={`name-${daily_stock.product.id}`}
                                                    readOnly
                                                    className="w-full"
                                                    value={
                                                        daily_stock.product.name
                                                    }
                                                />
                                            </div>
                                            <div className="md:w-1/4">
                                                <InputLabel
                                                    htmlFor={`quantity-${daily_stock.product.id}`}
                                                    value="Initial Quantity"
                                                />
                                                <TextInput
                                                    name={`quantity-${daily_stock.product.id}`}
                                                    id={`quantity-${daily_stock.product.id}`}
                                                    type="number"
                                                    className="w-full noSpinner"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    onWheel={
                                                        preventScrollChange
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            daily_stock.product
                                                                .id
                                                        )
                                                    }
                                                    value={
                                                        daily_stock.quantity ||
                                                        ""
                                                    }
                                                />
                                                {errors[
                                                    `quantity-${daily_stock.product.id}`
                                                ] && (
                                                    <Error
                                                        value={
                                                            errors[
                                                                `quantity-${daily_stock.product.id}`
                                                            ]
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex justify-end gap-2">
                                        <SecondaryButton
                                            type="button"
                                            onClick={() =>
                                                setSelectedSupplier(null)
                                            }
                                        >
                                            Cancel
                                        </SecondaryButton>
                                        <PrimaryButton type="submit">
                                            Update Stock
                                        </PrimaryButton>
                                    </div>
                                </>
                            ) : (
                                <div className="flex w-full h-52 justify-center items-center text-fourth">
                                    <h3>
                                        There are no products from this supplier
                                    </h3>
                                </div>
                            )}
                        </form>
                    ) : (
                        <div className="flex w-full h-52 justify-center items-center text-fourth">
                            <h3>Choose a Supplier First</h3>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
