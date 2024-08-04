import React from "react";
import InputLabel from "./InputLabel";
import Error from "./Error";
import Select from "./Select";
import InputFile from "./InputFile";
import { usePage } from "@inertiajs/react";
import TextInput from "./TextInput";
import Select2 from "react-select";

export default function ProductForm({ data, setData }) {
    const { errors, categories, suppliers } = usePage().props;

    const handleSelectChange = (name) => (selectedOption) => {
        const value = selectedOption ? selectedOption.value : null;
        setData(name, value);
    };

    const supplierOptions = suppliers.map((supplier) => ({
        value: supplier.id,
        label: supplier.name,
    }));

    const selectedSupplierOption = supplierOptions.find(
        (option) => option.value === data.supplier_id.id
    );

    return (
        <>
            <div>
                <div className="mb-6">
                    <InputLabel htmlFor="supplier" value="Supplier" />
                    <Select2
                        id="supplier-select"
                        value={selectedSupplierOption}
                        options={supplierOptions}
                        className="w-full"
                        onChange={handleSelectChange("supplier_id")}
                    />
                    {errors.supplier_id && <Error value={errors.supplier_id} />}
                </div>
                <div className="mb-6">
                    <InputFile
                        picture={data.picture}
                        name="picture"
                        id="picture"
                        className="w-full"
                        onChange={(e) => setData("picture", e.target.files[0])}
                    />
                    {errors.picture && <Error value={errors.picture} />}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="category_id" value="Category" />
                    <Select
                        value={data.category_id}
                        data={categories}
                        className="w-full"
                        onChange={(e) => setData("category_id", e)}
                    />
                    {errors.category_id && <Error value={errors.category_id} />}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        name="name"
                        id="name"
                        className="w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                    {errors.name && <Error value={errors.name} />}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="price" value="Price" />
                    <TextInput
                        name="price"
                        id="price"
                        type="number"
                        className="w-full"
                        onChange={(e) => setData("price", e.target.value)}
                        value={data.price}
                    />
                    {errors.price && <Error value={errors.price} />}
                </div>
            </div>
        </>
    );
}
