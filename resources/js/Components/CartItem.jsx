import { IconTrash, IconX } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'
import React from 'react'
import TextInput from './TextInput'
import { IconMinus } from '@tabler/icons-react'
import { router } from '@inertiajs/react'
import toast from 'react-hot-toast'
import { numberFormat } from '@/Libs/Helper'

export default function CartItem({ cart }) {

    const quantityIncrement = () => {
        router.post(`/admin/cart/increment/${cart.product_slug}`)
    }

    const quantityDecrement = () => {
        router.post(`/admin/cart/decrement/${cart.product_slug}`)
    }

    const deleteCart = () => {
        router.delete(`/admin/cart/${cart.id}`, {
            onSuccess: () => toast.success('Delete Item!')
        })
    }

    return (
        <>
            <div className="flex order py-4 flex-flex-column gap-4">
                <div className="flex gap-2 w-1/2 sm:w-2/3 overflow-hidden">
                    <img src={cart.product_picture ? cart.product_picture : `https://via.placeholder.com/80`} alt="" className='rounded h-16 w-16 hidden md:block' />
                    <div className="flex flex flex-col justify-between">
                        <h6 className='text-base text-slate-700'>{cart.product_name}</h6>
                        <h5 className='text-lg font-semibold text-slate-700'>Rp. {numberFormat(cart.product_price)}</h5>
                    </div>
                </div>
                <div className="w-1/2 sm:w-1/3 text-end flex flex-col flex-1 justify-between">
                    <IconTrash size={16} color='red' className='ml-auto rounded border' onClick={deleteCart} />
                    <div className="flex justify-between align-center  mt-5 ">
                        <IconPlus
                            size={32}
                            className="text-white bg-orange-500 border p-1 rounded cursor-pointer"
                            onClick={quantityIncrement}
                        />
                        <TextInput className="border-0 w-12 px-0 h-8 text-lg text-center mx-auto text-lg" value={cart.quantity} />
                        <IconMinus
                            size={32}
                            className={cart.quantity == 1 ? "bg-gray-400 text-white border p-1 rounded" : "text-red-500 border p-1 rounded cursor-pointer"}
                            onClick={cart.quantity == 1 ? null : quantityDecrement}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
