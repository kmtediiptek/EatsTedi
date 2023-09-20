import clsx from 'clsx'
import React from 'react'

const Table = ({children, className}) => {
    return (
        <div className={clsx(className, 'w-full relative overflow-x-auto')}>
            <table className={clsx('w-full text-sm text-left text-gray-500 text-gray-400', className)}>
                {children}
            </table>
        </div>
    )
}

const Thead = ({ children, className }) => {
    return (
        <thead className={clsx("text-xs text-slate-700 uppercase bg-gray-100 bg-gray-100", className)}>
            {children}
        </thead>
    )
}

const Tbody = ({ children, className }) => {
    return (
        <tbody className={className}>
            {children}
        </tbody>
    )
}

const Th = ({ children, className }) => {
    return (
        <th scope="col" className={clsx("px-6 py-3", className)}>
            {children}
        </th>
    )
}


const Td = ({ children, className }) => {
    return (
        <td className={clsx("px-6 py-3", className)}>
            {children}
        </td>
    )
}


Table.Thead = Thead
Table.Tbody = Tbody
Table.Th = Th
Table.Td = Td

export default Table
