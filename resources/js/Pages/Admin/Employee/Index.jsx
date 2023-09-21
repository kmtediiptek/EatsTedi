import ActionButton from '@/Components/Actionbutton'
import EmployeeForm from '@/Components/EmployeeForm'
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


export default function Index({ total_employees, statuses, ...props }) {
    const { data: employees, meta, links } = props.employees
    const [searchQuery, setSearchQuery] = useState('')

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10)

    const { delete: destroy, post, put, data, setData } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        number_phone: '',
        address: '',
        picture: '',
        status: statuses[0],
        password_confirmation: '',

    })


    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalCategory, setModalCategory] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    const [userName, setCategorySlug] = useState("")

    function openModalCategory(userName, type) {
        setIsOpen(true)
        setModalCategory("Employee")
        setModalType(type)
        setCategorySlug(userName)
        if (userName) {
            const selectedEmployee = employees.find(employee => employee.username === userName)

            setCategorySlug(userName)
            setData({
                name: selectedEmployee.name,
                username: selectedEmployee.username,
                email: selectedEmployee.email,
                number_phone: selectedEmployee.number_phone,
                password: selectedEmployee.password,
                address: selectedEmployee.address,
                picture: selectedEmployee.picture,
                status: selectedEmployee.status,
            })
        } else {
            setCategorySlug("")
            setData({
                name: '',
                username: '',
                email: '',
                number_phone: '',
                password: '',
                address: '',
                picture: '',
                status: '',
            })
        }
    }

    function openToast(userName, title) {
        setIsToast(true)
        setToastTitle(title)
        setCategorySlug(userName)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    function onCancelToast() {
        setIsToast(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        post(route('admin.employee.index'), {
            ...data,
            status: data.status.id,
            onSuccess: () => {
                toast.success('Employee has been created!')
                setIsOpen(false)
                setData({ name: '', username: '', password: '', email: '', address: '', status: '',  picture: '', number_phone: ''})
            }

        })
    }

    const onUpdate = (userName) => (e) => {
        e.preventDefault()
        put(route('admin.employee.update', userName), {
            ...data,
            onSuccess: () => {
                toast.success('Employee has been updated!'),
                    setIsOpen(false)
            }
        })
    }

    const onDelete = (userName) => {
        destroy(route('admin.employee.destroy', userName), {
            onSuccess: () => {
                toast.success('Employee has been deleted!'),
                    setIsToast(false)
            }
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start employees */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Employees</h3>
                <div className="flex justify-between w-full item-center my-2">
                    <ActionButton
                        onClick={() => openModalCategory("", "create")}
                        type="button"
                    >
                        <IconPlus size={18} />
                    </ActionButton>
                    <input id="searchQuery" type="text" className='w-3/4 sm:w-1/4 rounded border-gray-300 py-1 focus:ring-puple-300 focus:border-purple-600' placeholder='Search employee..'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)} />
                </div>
                <div className='w-full'>
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>No.</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Username</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Number Phone</Table.Th>
                            <Table.Th>Address</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {filteredEmployees.length > 0 ? <>
                            {filteredEmployees.map((employee, index) => (
                                <tr className="bg-white border-b text-gray-500" key={index}>
                                    <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                    <Table.Td>{employee.name}</Table.Td>
                                    <Table.Td>{employee.username}</Table.Td>
                                    <Table.Td>{employee.email}</Table.Td>
                                    <Table.Td>{employee.number_phone}</Table.Td>
                                    <Table.Td>{employee.address}</Table.Td>
                                    <Table.Td>{employee.status}</Table.Td>
                                    <Table.Td>{employee.picture}</Table.Td>
                                    <Table.Td className="w-10" >
                                        <div className='flex flex-nowrap gap-2'>
                                            <ActionButton className='bg-yellow-400' type="button" onClick={() => openModalCategory(employee.username, "edit")}><IconEdit size={18} /></ActionButton>
                                            <ActionButton className='bg-red-500' type="button" onClick={() => openToast(employee.username, employee.name)}><IconTrash size={18} /></ActionButton>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </> :
                            <tr className="bg-white border-b text-gray-500 text-center">
                                <Table.Td colSpan="9">No data</Table.Td>
                            </tr>
                        }
                    </Table.Tbody>
                </Table>
                {employees.length > 0 &&
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-slate-500 mt-10'>Total employees: <span className='font-bold'>{total_employees}</span> </p>
                    </div>
                }
                {/* End employees */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`2/3`} type={modalType} title={modalCategory}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate(userName)} className='mt-6'>
                        <EmployeeForm {...{ data, setData }} />
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
                        <PrimaryButton onClick={() => onDelete(userName)}>Yes</PrimaryButton>
                    </div>
                </Toast>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
