import ActionButton from '@/Components/Actionbutton'
import CategoryForm from '@/Components/CategoryForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Table from '@/Components/Table'
import TableForm from '@/Components/TableForm'
import Toast from '@/Components/Toast'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function Index({ tables, total_categories }) {

    const { post, data, setData } = useForm({
        name: '',
        icon: '',
    })

    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalCategory, setModalCategory] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    function openModalTable(type) {
        setIsOpen(true)
        setModalCategory("Table")
        setModalType(type)
    }

    function openToast(title) {
        setIsToast(true)
        setToastTitle(title)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    function onCancelToast() {
        setIsToast(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        post(route('admin.table.index'), {
            data,
            onSuccess: () => {
                toast.success('Table has been created!')
                setIsOpen(false)
                setData({ name: '', icon: '' })
            }

        })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        toast.success('Achievement has been added!')
        post(route('admin.table.store'), {
            ...data,
            onSuccess: () => toast.success('Achievement has been added!')
        })
    }
    return (
        <>
            <Head title="Setting - Table" />
            <Container>
                {/* Start Categories */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Tables</h3>
                <div className="flex justify-between w-full item-center my-2">
                    <button
                        onClick={() => openModalTable("create")}
                        type="button"
                        className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded'
                    >
                        <IconPlus size={18} />
                    </button>
                    <p className='text-sm text-slate-500'>Total Categories: <span className='font-bold'>{total_categories}</span> </p>
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>No.</Table.Th>
                            <Table.Th>Number</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {tables.map((table, index) => (
                            <tr className="bg-white border-b text-gray-500" key={index}>
                                <Table.Td className="w-5">{index + 1}</Table.Td>
                                <Table.Td>{table.number}</Table.Td>
                                <Table.Td className="w-10" >
                                    <div className='flex flex-nowrap gap-2'>
                                        <ActionButton className='bg-yellow-400' type="button" onClick={() => openModalCategory("edit")}><IconEdit size={18} /></ActionButton>
                                        <ActionButton className='bg-red-500' type="button" onClick={() => openToast("Coffe")}><IconTrash size={18} /></ActionButton>
                                    </div>
                                </Table.Td>
                            </tr>
                        ))}
                    </Table.Tbody>
                </Table>
                {/* End Categories */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="2xl" type={modalType} title={modalCategory}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate} className='mt-6'>
                        <TableForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={() => onCancelModal()}>Cancel</SecondaryButton>
                            <PrimaryButton type='submit'>{modalType == "create" ? "Create" : "Update"}</PrimaryButton>
                        </div>
                    </form>
                </MyModal>

                {/* Toast */}
                <Toast isToast={isToast} onClose={() => setIsToast(false)} title={toastTitle}>
                    <div className="flex justify-end gap-2 justify-center">
                        <SecondaryButton onClick={() => onCancelToast()}>No</SecondaryButton>
                        <PrimaryButton>Yes</PrimaryButton>
                    </div>
                </Toast>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
