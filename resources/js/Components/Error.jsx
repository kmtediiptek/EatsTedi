import React from 'react'

export default function Error({ value, children }) {
    return (
        <div className='font-medium text-sm mt-2 text-rose-500 block'>{value ? value : children}</div>
    )
}
