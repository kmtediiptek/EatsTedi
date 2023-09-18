import CategoryForm from '@/Components/CategoryForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
// import { } from '@tabler/icons-react'
import React, { useState } from 'react'


export default function Index() {

    const { post, data, setData } = useForm({
        name: '',
        icon: '',
    })

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

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`2xl`} title={modalTitle}>
                    <CategoryForm {...{ data, setData }} />
                    <div className="flex justify-end">
                    <PrimaryButton>Add</PrimaryButton>
                    </div>
                </MyModal>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
