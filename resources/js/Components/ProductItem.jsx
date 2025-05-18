import React from "react";
import {router, usePage} from "@inertiajs/react";
import { toast } from "react-hot-toast";
import {IconBox, IconShoppingBagPlus, IconShoppingCart} from "@tabler/icons-react";
import { numberFormat } from "@/Libs/Helper";

export default function ProductItem({ product, setIsOrderListOpen }) {
    const addToCart = () => {
        router.post(
            `/admin/cart/${product.slug}`, // Endpoint untuk menambah ke cart
            {
                quantity: 1, // Menambahkan quantity 1 selalu
            },
            {
                onSuccess: (e) => {
                    console.log(e, 'a')
                    setIsOrderListOpen(true);
                    toast.success("Add to Cart!");
                },
                onFinish: (res) => {
                    console.log(res)
                },
                onError: (e) => {
                    toast.error(e['0']);
                }

            }
        );

        // fetch(`/admin/cart/${product.slug}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         "X-CSRF-TOKEN": props.csrf_token,
        //     },
        //     body: JSON.stringify({
        //         quantity: 1,
        //     }),
        // }).then((res) => {
        //     if (res.status === 200) {
        //         setIsOrderListOpen(true);
        //         toast.success("Add to Cart!");
        //     } else {
        //         toast.error("Failed to add to cart!");
        //     }
        // });
    };
    return (
        <button
            onClick={addToCart}
            className="border border-secondary rounded-md h-[180px] mb-4 relative flex flex-1 justify-end flex-col bg-cover bg-center"
            style={{
                backgroundImage: `url(${
                    product.picture
                        ? product.picture
                        : "https://estore.mandom.co.id/assets/images/product/no_image.jpg"
                })`,
            }}
        >
            <span className="bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4">
                {product.category.name}
            </span>
            <span className="bg-white opacity-50 flex items-center gap-2 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow left-4 top-4">
               <IconBox/> {product.daily_stock.quantity}
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
    );
}
