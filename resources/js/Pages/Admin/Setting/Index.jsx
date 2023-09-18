import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
// import { } from '@tabler/icons-react'
import React, { useState } from 'react'


export default function Index() {
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
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>

                {/* Setting All */}
                <Link href={route('setting.category.index')} className='bg-red-500 p-4 rounded'>Category</Link>

                <div className="w-full relative overflow-x-auto">
                    <div className="flex my-2 justify-between items-center">
                        <button
                            onClick={() => openModalAddCategory("Form Add Categories")}
                            type="button"
                            className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded'
                        >
                            <IconPlus size={18} />
                        </button>
                        <p className='text-sm text-slate-500'>Total Categories: <span className='font-bold'>10</span> </p>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 text-gray-400">
                        <thead className="text-xs text-slate-700 uppercase bg-gray-100 bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Icon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b text-gray-500">
                                <td className="px-6 py-3" width="2%">
                                    1
                                </td>
                                <td className="px-6 py-3">
                                    Silver
                                </td>
                                <td className="px-6 py-3">
                                    Laptop
                                </td>
                                <td className="px-6 py-3 text-center" width="5%">
                                    <div className='flex flex-nowrap gap-2'>
                                        <button className='w-8 h-8 flex justify-center items-center bg-yellow-400 text-white rounded'><IconEdit size={18} /></button>
                                        <button className='w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded'><IconTrash size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* End Categories */}

                {/* Start Menus */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Menus</h3>

                <div className="w-full relative overflow-x-auto">
                    <div className="flex my-2 justify-between items-center">
                        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded' type="button">
                            <IconPlus size={18} />
                        </button>
                        <p className='text-sm text-slate-500'>Total Menus: <span className='font-bold'>10</span> </p>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 text-gray-400">
                        <thead className="text-xs text-slate-700 uppercase bg-gray-100 bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Icon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b text-gray-500">
                                <td className="px-6 py-3" width="2%">
                                    1
                                </td>
                                <td className="px-6 py-3">
                                    Silver
                                </td>
                                <td className="px-6 py-3">
                                    Laptop
                                </td>
                                <td className="px-6 py-3 text-center" width="5%">
                                    <div className='flex flex-nowrap gap-2'>
                                        <button className='w-8 h-8 flex justify-center items-center bg-yellow-400 text-white rounded'><IconEdit size={18} /></button>
                                        <button className='w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded'><IconTrash size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* End Menus */}

                {/* Start Employees */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Employees</h3>

                <div className="w-full relative overflow-x-auto">
                    <div className="flex my-2 justify-between items-center">
                        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded' type="button">
                            <IconPlus size={18} />
                        </button>
                        <p className='text-sm text-slate-500'>Total Employees: <span className='font-bold'>10</span> </p>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 text-gray-400">
                        <thead className="text-xs text-slate-700 uppercase bg-gray-100 bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Icon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b text-gray-500">
                                <td className="px-6 py-3" width="2%">
                                    1
                                </td>
                                <td className="px-6 py-3">
                                    Silver
                                </td>
                                <td className="px-6 py-3">
                                    Laptop
                                </td>
                                <td className="px-6 py-3 text-center" width="5%">
                                    <div className='flex flex-nowrap gap-2'>
                                        <button className='w-8 h-8 flex justify-center items-center bg-yellow-400 text-white rounded'><IconEdit size={18} /></button>
                                        <button className='w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded'><IconTrash size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* End Employees */}




                {/* <!-- Main modal --> */}
                <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded shadow">
                            <div className="flex items-start justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Form Add Categories
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 pb-0space-y-6">
                                <form>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Category name.." required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icon</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                    </div>

                                    <div className="flex items-center justify-end p-6 px-0 space-x-2 border-t border-gray-200 rounded-b">
                                        <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-orange-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                                        <button data-modal-hide="defaultModal" type="button" className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-1 focus:outline-none focus:ring-orange-300 font-medium rounded text-sm px-5 py-2.5 text-center">I accept</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>


                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`2xl`} title={modalTitle}>
                    <form className="space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className='w-full rounded border-gray-300 focus:ring-puple-100 focus:border-purple-300' placeholder="name@company.com" required />
                        </div>
                        <div className="flex gap-x-2 justify-end">
                        <button type="submit" className='w-1/5 text-purple-600 px-3 py-2.5 w-full rounded border border-purple-600'>Cancel</button>
                        <button type="submit" className='w-1/5 bg-purple-600 text-white px-2.5 py-2 w-full rounded'>Add</button>
                        </div>
                    </form>

                </MyModal>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
