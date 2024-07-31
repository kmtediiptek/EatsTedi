import React from "react";
import { numberFormat } from "@/Libs/Helper";

export default function ProductItemUser({ product }) {
    return (
        <div className="max-h-[420px] mb-4 relative flex flex-1 justify-between flex-col">
            <span className="bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4">
                {product.category.name}
            </span>
            <div>
                <img
                    src={
                        product.picture
                            ? product.picture
                            : `https://via.placeholder.com/400`
                    }
                    alt={product.name}
                    className="rounded h-[200px] sm:h-[300px] w-full"
                />
            </div>
            <div className="py-2">
                <p className="text-third py-4 text-base sm:text-lg">
                    {product.name}
                </p>
                <h6 className="text-xl sm:text-3xl font-bold text-fourth">
                    {" "}
                    <sup className="font-light"> Rp.</sup>{" "}
                    {numberFormat(product.price)}
                </h6>
            </div>
        </div>
    );
}
