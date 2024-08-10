import React, { useState } from "react";
import { numberFormat } from "@/Libs/Helper";
import MyModal from "./Modal";
import { IconUserDollar } from "@tabler/icons-react";

export default function ProductItemUser({ product }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    const handleProductClick = (product) => {
        setModalProduct(product);
        setIsOpen(true);
    };

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleProductClick(product);
                }}
                className="border border-secondary rounded-md h-[180px] mb-4 relative flex flex-1 justify-end flex-col bg-cover bg-center"
                style={{
                    backgroundImage: `url(${
                        product.picture
                            ? product.picture
                            : "https://asset.kompas.com/crops/FDAcmidsNYJDL80i55bj7pbXqyk=/95x0:939x563/750x500/data/photo/2022/07/10/62ca309364500.jpeg"
                    })`,
                }}
            >
            <span className="bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4">
                {product.category.name}
            </span>

                <div className="p-2 text-left w-full bg-opacity-60 bg-white">
                    <p className="text-fourth rounded text-lg font-bold line-clamp-2">
                        {product.name}
                    </p>
                    <h6 className="text-lg font-bold rounded">
                        <sup className="font-light"> Rp.</sup>{" "}
                        {numberFormat(product.price)}
                    </h6>
                </div>
            </button>

            {/* Modal Component */}
            <MyModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClose={() => setIsOpen(false)}
                size={`1/2`}
                title={`Rincian Menu  ${modalProduct ? modalProduct.name : ""}`}
            >
                {modalProduct && (
                    <div className="mt-6">
                        <div
                            href="#"
                            className="max-h-[400px] w-full mb-4 relative flex flex-1 justify-start gap-x-4 flex-row"
                        >
                            <div className="w-full md:w-1/2">
                                <img
                                    src={
                                        modalProduct.picture
                                            ? modalProduct.picture
                                            : `https://via.placeholder.com/400`
                                    }
                                    alt={modalProduct.name}
                                    className="rounded h-[200px] sm:h-[280px] w-full"
                                />
                            </div>
                            <div className="w-full md:w-1/2 pb-2 flex flex-col justify-between">
                                <div>
                                    <div className="bg-white opacity-50 text-sm text-black absolute rounded opacity-[0.8] shadow p-3 py-2 left-4 top-4">
                                        {modalProduct.category.name}
                                    </div>

                                    <span className="flex items-center gap-x-2 text-base text-black">
                                        <IconUserDollar
                                            className="text-fourth"
                                            size={28}
                                        />
                                        <p className="mt-1">
                                            {modalProduct.supplier.name}
                                        </p>
                                    </span>
                                    <p className="text-fourth font-semibold py-2 mt-4 text-2xl">
                                        {modalProduct.name}
                                    </p>
                                    <h6 className="text-xl font-bold mt-2 sm:text-4xl text-fourth">
                                        {" "}
                                        <sup className="font-light">
                                            Rp.
                                        </sup>{" "}
                                        {numberFormat(modalProduct.price)}
                                    </h6>
                                </div>
                                <div className="flex justify-between w-full">
                                    <h5 className="text-fourth text-lg">
                                        Available{" "}
                                        {modalProduct.daily_stock.quantity}
                                    </h5>
                                    <h5 className="text-fourth text-lg">
                                        Sold {modalProduct.daily_stock.sold}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </MyModal>
        </>
    );
}
