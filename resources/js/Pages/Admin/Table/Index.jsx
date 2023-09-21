import ActionButton from '@/Components/Actionbutton'
import TableForm from '@/Components/TableForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Table from '@/Components/Table'
import Toast from '@/Components/Toast'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function Index({ total_tables, ...props }) {
    const { data: tables, meta, links } = props.tables

    const [searchQuery, setSearchQuery] = useState('')

    const filteredTables = tables.filter(table =>
        table.number.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10)

    const { delete: destroy, post, put, data, setData } = useForm({
        number: '',
    })

    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalTable, setModalTable] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    const [TableSlug, setTableSlug] = useState("")

    function openModalTable(TableSlug, type) {
        setIsOpen(true)
        setModalTable("Table")
        setModalType(type)
        setTableSlug(TableSlug)
        if (TableSlug) {
            const selectedTable = tables.find(table => table.slug === TableSlug)

            setTableSlug(TableSlug)
            setData({
                number: selectedTable.number,
            })
        } else {
            setTableSlug("")
            setData({
                number: '',
            })
        }
    }

    function openToast(TableSlug, title) {
        setIsToast(true)
        setToastTitle(title)
        setTableSlug(TableSlug)
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

    const onUpdate = (TableSlug) => (e) => {
        e.preventDefault()
        put(route('admin.table.update', TableSlug), {
            ...data,
            onSuccess: () => {
                toast.success('Table has been updated!'),
                    setIsOpen(false)
            }
        })
    }

    const onDelete = (TableSlug) => {
        destroy(route('admin.table.destroy', TableSlug), {
            onSuccess: () => {
                toast.success('Table has been deleted!'),
                    setIsToast(false)
            }
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Tables */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Tables</h3>
                <div className="flex justify-between w-full item-center my-2">
                    <button
                        onClick={() => openModalTable("", "create")}
                        type="button"
                        className='w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded'
                    >
                        <IconPlus size={18} />
                    </button>
                    <input id="searchQuery" type="text" className='w-3/4 sm:w-1/4 rounded border-gray-300 py-1 focus:ring-puple-300 focus:border-purple-600' placeholder='Search category..'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)} />
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
                        {filteredTables.length > 0 ? <>

                            {filteredTables.map((table, index) => (
                                <tr className="bg-white border-b text-gray-500" key={index}>
                                    <Table.Td className="w-5">{index + 1}</Table.Td>
                                    <Table.Td>{table.number}</Table.Td>
                                    <Table.Td className="w-10" >
                                        <div className='flex flex-nowrap gap-2'>
                                            <ActionButton className='bg-yellow-400' type="button" onClick={() => openModalTable(table.slug, "edit")}><IconEdit size={18} /></ActionButton>
                                            <ActionButton className='bg-red-500' type="button" onClick={() => openToast(table.slug, 'Table ' + table.number)}><IconTrash size={18} /></ActionButton>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </> :
                            <tr className="bg-white border-b text-gray-500 text-center">
                                <Table.Td colSpan="3">No data</Table.Td>
                            </tr>
                        }
                    </Table.Tbody>
                </Table>
                {tables.length > 0 &&
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-slate-500 mt-10'>Total Tables: <span className='font-bold'>{total_tables}</span> </p>
                    </div>
                }
                {/* End Tables */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`1/3`} type={modalType} title={modalTable}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate(TableSlug)} className='mt-6'>
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
                        <PrimaryButton onClick={() => onDelete(TableSlug)}>Yes</PrimaryButton>
                    </div>
                </Toast>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
