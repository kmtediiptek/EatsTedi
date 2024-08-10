import React from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import { numberFormat } from "@/Libs/Helper";

export default function ProductItem({ product, setIsOrderListOpen }) {
    const addToCart = () => {
        router.post(
            `/admin/cart/${product.slug}`, // Endpoint untuk menambah ke cart
            {
                quantity: 1, // Menambahkan quantity 1 selalu
            },
            {
                onSuccess: () => {
                    setIsOrderListOpen(true);
                    toast.success("Add to Cart!");
                },
            }
        );
    };

    return (
        <button
            onClick={addToCart}
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
                    {product.name} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, officiis.
                </p>
                <h6 className="text-lg font-bold rounded">
                    <sup className="font-light"> Rp.</sup>{" "}
                    {numberFormat(product.price)}
                </h6>
            </div>
        </button>
    );
}
