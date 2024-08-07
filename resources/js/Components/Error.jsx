import React from 'react'

export default function Error({ value, children }) {
    return (
        <div className='font-medium text-xs text-danger block'>{value ? value : children}</div>
    )
}
