import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import { IconCategory, IconCreditCard, IconReportMoney, IconTable, IconUsers } from '@tabler/icons-react'
import { IconMenuOrder } from '@tabler/icons-react'
import Chart from 'react-apexcharts'
import React, { Component, useState } from 'react'
import { numberFormat } from '@/Libs/Helper'


export default function Dashboard({ total_categories, total_tables, total_employees, total_products }) {
    const options = {
        chart: {
            id: 'apexchart-example',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        title: {
            text: 'Statistic Income ',  // Add a title for the chart
            align: 'center',
            margin: 12,
            offsetY: 20,
            style: {
                fontSize: '20px',
                fontWeight: '500',
                color: '#333',
                fontFamily: 'Figtree'
            },
        }
    }

    const series = [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]

    return (
        <>
            <Head title="Dashboard" />
            <Container>
                {/* Start Dashboard */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Dashboard</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-4">
                    {/* Start Order */}
                    <Link href={route('admin.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-orange-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCategory size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Categories</h5>
                            <span className='text-slate-500'>{total_categories} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.product.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-sky-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconMenuOrder size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Menus</h5>
                            <span className='text-slate-500'>{total_products} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.table.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-purple-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconTable size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Tables</h5>
                            <span className='text-slate-500'>{total_tables} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.employee.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-pink-600 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconUsers size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Employees</h5>
                            <span className='text-slate-500'>{total_employees} Item</span>
                        </div>
                    </Link>
                    {/* End Order */}
                </div>
                {/* End Dashboard */}

                {/* Start Dashboard */}
                </Container>
                <Container>
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Cash</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full gap-x-4">
                    {/* Start Order */}
                    <Link href={route('admin.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-green-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconReportMoney size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Total Income</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(' 1500000')}</span>
                        </div>
                    </Link>
                    <Link href={route('admin.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-yellow-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Today's Income</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(' 1000000')}</span>
                        </div>
                    </Link>
                    <Link href={route('admin.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-blue-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Now</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(' 1000000')}</span>
                        </div>
                    </Link>
                    <Link href={route('admin.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-red-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Later</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(' 500000')}</span>
                        </div>
                    </Link>
                    {/* End Order */}
                </div>
                {/* End Dashboard */}
            </Container>
            <Container className="mb-12">
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-4">
                    <Chart options={options} series={series} type="bar" className="w-full min-h-screen border border-gray-300 p-4 rounded"  />
                    <Chart options={options} series={series} type="bar" className="w-full min-h-screen border border-gray-300 p-4 rounded"  />
                </div>
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />
