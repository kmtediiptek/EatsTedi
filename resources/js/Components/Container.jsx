import clsx from 'clsx'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={clsx(className, 'max-w-8xl mx-auto px-4 mt-16 sm:px-4 lg:px-8 flex flex-wrap items-center')}>{children}</div>
    )
}
