import ActionButton from '@/Components/Actionbutton'
import CategoryForm from '@/Components/CategoryForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Table from '@/Components/Table'
import Toast from '@/Components/Toast'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import { IconCoffee, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
// import { } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function Index() {

    const { post, data, setData } = useForm({
        name: '',
        icon: '',
    })

    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalCategory, setModalCategory] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    function openModalCategory(type) {
        setIsOpen(true)
        setModalCategory("Category")
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
        post(route('setting.category.index'), {
            data,
            onSuccess: () => {
                toast.success('Category has been created!')
                setIsOpen(false)
                setData({name : '', icon: ''})
            }

        })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        toast.success('Achievement has been added!')
        post(route('admin.achievements.store'), {
            ...data,
            onSuccess: () => toast.success('Achievement has been added!')
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Categories */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>
                <div className="flex justify-between w-full item-center my-2">
                    <button
                        onClick={() => openModalCategory("create")}
                        type="button"
                        className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded'
                    >
                        <IconPlus size={18} />
                    </button>
                    <p className='text-sm text-slate-500'>Total Categories: <span className='font-bold'>10</span> </p>
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>No.</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Icon</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <tr className="bg-white border-b text-gray-500">
                            <Table.Td className="w-5">1</Table.Td>
                            <Table.Td>Coffe</Table.Td>
                            <Table.Td><IconCoffee /></Table.Td>
                            <Table.Td className="w-10" >
                                <div className='flex flex-nowrap gap-2'>
                                    <ActionButton className='bg-yellow-400' type="button" onClick={() => openModalCategory("edit")}><IconEdit size={18} /></ActionButton>
                                    <ActionButton className='bg-red-500' type="button" onClick={() => openToast("Coffe")}><IconTrash size={18} /></ActionButton>
                                </div>
                            </Table.Td>
                        </tr>
                    </Table.Tbody>
                </Table>
                {/* End Categories */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`2xl`} type={modalType} title={modalCategory}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate} className='mt-6'>
                        <CategoryForm {...{ data, setData }} />
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
