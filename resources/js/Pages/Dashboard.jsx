import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import { IconCalendarTime, IconCategory, IconCreditCard, IconMoneybag, IconReportMoney, IconTable, IconUsers } from '@tabler/icons-react'
import { IconMenuOrder } from '@tabler/icons-react'
import Chart from 'react-apexcharts'
import React, { Component, useState } from 'react'
import { numberFormat } from '@/Libs/Helper'


export default function Dashboard({ total_categories, total_tables, total_payments, total_employees, total_products, total_income, today_income, paid_later, paid_now, weeklyIncome, dailyIncome, monthlyIncome }) {
    const weekLabels = weeklyIncome.map(item => "Week " + item.week + ", " + item.year)
    const weekData = weeklyIncome.map(item => item.total)

    const dayLabels = dailyIncome.map(item => "Date " + item.date + ", " + item.year)
    const dayData = dailyIncome.map(item => item.total)


    const monthLabels = monthlyIncome.map(item => "Month " + item.month + ' ' + item.year)
    const monthData = monthlyIncome.map(item => item.total)

    const optionsWeekly = {
        chart: {
            id: 'apexchart-weekly',
        },
        xaxis: {
            categories: weekLabels
        },
        yaxis: {
            title: {
                text: 'Rp. (thousands)'
            }
        },
        title: {
            text: 'Weekly Income',
            align: 'center',
            margin: 12,
            offsetY: 20,
            style: {
                fontSize: '20px',
                fontWeight: '500',
                color: '#333',
                fontFamily: 'Figtree'
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "Rp. " + val
                }
            }
        }
    }

    const seriesWeekly = [{
        name: 'Total Price (Weekly)',
        data: weekData
    }]

    const optionsDaily = {
        chart: {
            id: 'apexchart-daily',
        },
        xaxis: {
            categories: dayLabels
        },
        yaxis: {
            title: {
                text: 'Rp. (thousands)'
            }
        },
        title: {
            text: 'Daily Income',
            align: 'center',
            margin: 12,
            offsetY: 20,
            style: {
                fontSize: '20px',
                fontWeight: '500',
                color: '#333',
                fontFamily: 'Figtree'
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "Rp. " + val
                }
            }
        }
    }
    const seriesDaily = [{
        name: 'Total Price (Daily)',
        data: dayData
    }]

    const optionsMonthly = {
        chart: {
            id: 'apexchart-monthly',
        },
        xaxis: {
            categories: monthLabels
        },
        yaxis: {
            title: {
                text: 'Rp. (thousands)'
            }
        },
        title: {
            text: 'Monthly Income',
            align: 'center',
            margin: 12,
            offsetY: 20,
            style: {
                fontSize: '20px',
                fontWeight: '500',
                color: '#333',
                fontFamily: 'Figtree'
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "Rp. " + val
                }
            }
        }
    }

    const seriesMonthly = [{
        name: 'Total Price (Monthly)',
        data: monthData
    }]

    return (
        <>
            <Head title="Dashboard" />
            <Container>
                {/* Start Dashboard */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Dashboard</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4">
                    {/* Start Dashboard */}
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
                    <Link href={route('admin.payment.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-red-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconMoneybag size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Payments</h5>
                            <span className='text-slate-500'>{total_payments} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.employee.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-pink-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconUsers size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Employees</h5>
                            <span className='text-slate-500'>{total_employees} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.presence.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-fuchsia-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconUsers size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Presences</h5>
                            <span className='text-slate-500'>{total_employees} Item</span>
                        </div>
                    </Link>
                    <Link href={route('admin.schedule.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-cyan-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCalendarTime size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Schedules</h5>
                            <span className='text-slate-500'>{total_employees} Item</span>
                        </div>
                    </Link>
                    {/* End Dashboard */}
                </div>
                {/* End Dashboard */}

                {/* Start Dashboard */}
            </Container>
            <Container>
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Cash</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full gap-x-4">
                    {/* Start Dashboard */}
                    <div className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-green-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconReportMoney size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Total Income</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(total_income)}</span>
                        </div>
                    </div>
                    <div className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-yellow-400 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Today's Income</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(today_income)}</span>
                        </div>
                    </div>
                    <div className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-blue-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Now</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(paid_now)}</span>
                        </div>
                    </div>
                    <div className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-red-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Later</h5>
                            <span className='text-slate-800 text-3xl font-bold'> <sup>Rp.</sup> {numberFormat(paid_later)}</span>
                        </div>
                    </div>
                    {/* End Dashboard */}
                </div>
                {/* End Dashboard */}
            </Container>
            <Container className="mb-12">
                <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-4">
                    <Chart options={optionsMonthly} series={seriesMonthly} type="bar" className="w-full min-h-screen border border-gray-300 p-4 rounded" />
                    <Chart options={optionsWeekly} series={seriesWeekly} type="line" className="w-full min-h-screen border border-gray-300 p-4 rounded" />
                    <Chart options={optionsDaily} series={seriesDaily} type="bar" className="w-full min-h-screen border border-gray-300 p-4 rounded" />
                </div>
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />
