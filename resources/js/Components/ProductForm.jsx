import React, { useState, useEffect } from "react";
import InputLabel from "./InputLabel";
import Error from "./Error";
import Select from "./Select";
import InputFile from "./InputFile";
import { usePage } from "@inertiajs/react";
import TextInput from "./TextInput";
import ComboboxComponent from "./Combobox";

export default function ProductForm({ data, setData }) {
    const { errors, categories, suppliers, products } = usePage().props;

    const handleSelectChange = (name) => (selectedItem) => {
        setData(name, selectedItem);
    };

    // Check Product If Exist
    const [productExists, setProductExists] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const handleCheckboxChange = () => {
        setTransitioning(true);
        setTimeout(() => {
            setProductExists(!productExists);
            setTransitioning(false);
        }, 500);
    };

    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="supplier_id" value="Supplier" />
                <Select
                    value={data.supplier_id}
                    data={suppliers}
                    className="w-full"
                    onChange={handleSelectChange("supplier_id")}
                />
                {errors.supplier_id ? (
                    <Error className="" value={errors.supplier_id} />
                ) : null}
            </div>
            <div className="mb-6">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={productExists}
                        onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">Product sudah ada?</span>
                </label>
            </div>

            <div
                className={`transition-opacity duration-500 ${
                    transitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                {/* If Product is exist, don't show create product */}
                {productExists ? (
                    <>
                        <div className="mb-6">
                            <InputLabel htmlFor="product" value="Product" />

                            {errors.product ? (
                                <Error className="" value={errors.product} />
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <InputLabel htmlFor="quantity" value="Quantity" />
                            <TextInput
                                name="quantity"
                                id="quantity"
                                type="number"
                                className="w-1/4"
                                onChange={(e) =>
                                    setData("quantity", e.target.value)
                                }
                                value={data.quantity}
                            />
                            {errors.quantity ? (
                                <Error className="" value={errors.quantity} />
                            ) : null}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-6">
                            <InputFile
                                picture={data.picture}
                                name="picture"
                                id="picture"
                                className="w-full"
                                onChange={(e) =>
                                    setData("picture", e.target.files[0])
                                }
                            />
                            {errors.picture ? (
                                <Error className="" value={errors.picture} />
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <InputLabel
                                htmlFor="category_id"
                                value="Category"
                            />
                            <Select
                                value={data.category_id}
                                data={categories}
                                className="w-full"
                                onChange={handleSelectChange("category_id")}
                            />
                            {errors.category_id ? (
                                <Error
                                    className=""
                                    value={errors.category_id}
                                />
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                name="name"
                                id="name"
                                className="w-full"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                value={data.name}
                            />
                            {errors.name ? (
                                <Error className="" value={errors.name} />
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <InputLabel htmlFor="price" value="Price" />
                            <TextInput
                                name="price"
                                id="price"
                                type="number"
                                className="w-full"
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                value={data.price}
                            />
                            {errors.price ? (
                                <Error className="" value={errors.price} />
                            ) : null}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
