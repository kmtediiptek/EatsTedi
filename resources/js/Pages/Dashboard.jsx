import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import { IconChecks, IconCircleFilled } from '@tabler/icons-react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
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
            <Head title="Setting" />
            <Container>
                {/* Start Categories */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Dashboard</h3>

                <div className="grid grid-cols-5 w-full gap-x-4">
                    {/* Start Order */}
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white">
                        <div className="rounded bg-orange-500 p-2 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'>T1</h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-between'>
                            <h5 className='font-semibold text-xl'>Categories</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white">
                        <div className="rounded bg-purple-500 p-2 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'>T1</h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-between'>
                            <h5 className='font-semibold text-xl'>Menus</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    <Link href={route('setting.category.index')} className="w-full flex gap-x-4 p-4 border border-gray-300 rounded text-white">
                        <div className="rounded bg-sky-500 p-2 flex justify-center items-center">
                            <h3 className='text-4xl font-semibold text-center'>T1</h3>
                        </div>
                        <div className='text-slate-800 flex flex-col flex-1 justify-between'>
                            <h5 className='font-semibold text-xl'>Employees</h5>
                            <span className='text-slate-500'>2 Item</span>
                        </div>
                    </Link>
                    {/* End Order */}
                </div>
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />
