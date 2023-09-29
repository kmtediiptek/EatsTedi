import React from 'react'
import { numberFormat } from '@/Libs/Helper'

export default function ProductItemUser({ product}) {
    return (
        <div className="max-h-[420px] mb-4 relative flex flex-1 justify-between flex-col">
            <span className='bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4'>{product.category.name}</span>
            <div>
                <img src={product.picture ? product.picture : `https://via.placeholder.com/400`} alt={product.name} className='rounded h-[300px] w-full' />
            </div>
            <div className="py-2">
                <p className='text-slate-500 py-4 text-lg'>{product.name}</p>
                <h6 className='text-3xl font-bold text-slate-700'> <sup className='font-light'> Rp.</sup> {numberFormat(product.price)}</h6>
            </div>
        </div>
    )
}
