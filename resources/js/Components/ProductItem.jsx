import React from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import { numberFormat } from "@/Libs/Helper";

export default function ProductItem({ product, setIsOrderListOpen }) {
    const addToCart = () => {
        console.log(product);
        router.post(
            `/admin/cart/${product.slug}`,
            {
                order_id: product.order_id,
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
        <div className="max-h-[420px] mb-4 relative flex flex-1 justify-between flex-col">
            <span className="bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4">
                {product.category.name}
            </span>
            <div>
                <button
                    className="rounded text-center hover:bg-primary hover:text-white flex items-center justify-center bg-white w-16 text-violet h-16 absolute right-4 bottom-32"
                    onClick={addToCart}
                >
                    <IconShoppingBagPlus size={32} />{" "}
                </button>
                <img
                    src={
                        product.picture
                            ? product.picture
                            : `https://via.placeholder.com/400`
                    }
                    alt={product.name}
                    className="rounded h-[250px] w-full"
                />
            </div>
            <div className="py-2">
                <p className="text-third py-4 text-lg">{product.name}</p>
                <h6 className="text-3xl font-bold text-fourth">
                    {" "}
                    <sup className="font-light"> Rp.</sup>{" "}
                    {numberFormat(product.price)}
                </h6>
            </div>
        </div>
    );
}
