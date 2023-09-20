import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import { IconCategory, IconCreditCard, IconReportMoney, IconTable, IconUsers } from '@tabler/icons-react'
import { IconMenuOrder } from '@tabler/icons-react'
// import { } from '@tabler/icons-react'
import React, { useState } from 'react'


export default function Dashboard() {
    let [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    function openModalAddCategory(title) {
        setIsOpen(true)
        setModalTitle(title)
    }
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                {/* Start Dashboard */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Dashboard</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-4">
                    {/* Start Order */}
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-orange-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCategory size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Categories</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-sky-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconMenuOrder size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Menus</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-purple-500 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconTable size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Tables</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-pink-600 w-16 h-16 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconUsers size={36} /></h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Employees</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    {/* End Order */}
                </div>
                {/* End Dashboard */}

                {/* Start Dashboard */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Cash</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-4">
                    {/* Start Order */}
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                    <div className="rounded bg-green-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconReportMoney size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Total Income</h5>
                            <span className='text-slate-800 text-3xl font-bold'>Rp. 1.500.000</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-blue-500 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Now</h5>
                            <span className='text-slate-800 text-3xl font-bold'>Rp. 1.000.000</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white mb-4">
                        <div className="rounded bg-yellow-400 w-24 h-24 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'><IconCreditCard size={72} /></h3>
                        </div>
                        <div className='text-slate-500 flex flex-col flex-1 justify-around'>
                            <h5 className='font-semibold text-xl'>Paid Later</h5>
                            <span className='text-slate-800 text-3xl font-bold'>Rp. 500.000</span>
                        </div>
                    </Link>
                    {/* End Order */}
                </div>
                {/* End Dashboard */}
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />
