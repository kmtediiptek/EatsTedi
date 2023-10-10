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
import { Head, router, useForm } from '@inertiajs/react'
import { IconArrowLeft, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import TextInput from '@/Components/TextInput'
import ActionLink from '@/Components/ActionLink'


export default function Index({ total_employees, ...props }) {
    const { data: employees, meta, links } = props.employees
    const [searchQuery, setSearchQuery] = useState('')

    const { delete: destroy, data, setData } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        number_phone: '',
        address: '',
        picture: '',
        status: '',
    })


    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalEmployee, setModalEmployee] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    const [userName, setUserName] = useState("")

    function openModalCategory(userName, type) {
        setIsOpen(true)
        setModalEmployee("Employee")
        setModalType(type)
        setUserName(userName)
        if (userName) {
            const selectedEmployee = employees.find(employee => employee.username === userName)
            setUserName(userName)
            setData({
                name: selectedEmployee.name,
                username: selectedEmployee.username,
                email: selectedEmployee.email,
                number_phone: selectedEmployee.number_phone,
                address: selectedEmployee.address,
                picture: '',
                status: selectedEmployee.status,
            })
        } else {
            setUserName("")
            setData({
                name: '',
                username: '',
                email: '',
                number_phone: '',
                address: '',
                picture: '',
                status: '',
            })
        }
    }

    function openToast(userName, title) {
        setIsToast(true)
        setToastTitle(title)
        setUserName(userName)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    function onCancelToast() {
        setIsToast(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        router.post(`/admin/setting/employee`, {
            ...data,
            status: data.status.name,
        }, {
            onSuccess: () => {
                setData({ name: '', username: '', email: '', address: '', status: '', picture: '', number_phone: '' }),
                    setIsOpen(false),
                    toast.success('Employee has been created!')
            }
        })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        router.post(`/admin/setting/employee/${data.username}`, {
            _method: 'put',
            ...data,
            status: data.status.name
        }, {
            onSuccess: () => {
                setIsOpen(false),
                    setData({ name: '', username: '', email: '', address: '', status: '', picture: '', number_phone: '' }),
                    toast.success('Employee has been updated!')
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

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        router.get(`/admin/setting/employee`, {
            search: e.target.value
        }, {
            preserveState: true
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start employees */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Employees</h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">

                    <div className="flex gap-2">

                        <ActionLink href={route('admin.dashboard')} />
                        <ActionButton
                            onClick={() => openModalCategory("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search employee.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className='w-full'>
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
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
                        {employees.length > 0 ? <>
                            {employees.map((employee, index) => (
                                <tr className="bg-white border-b text-gray-500" key={index}>
                                    <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                    <Table.Td>{employee.name}</Table.Td>
                                    <Table.Td>{employee.username}</Table.Td>
                                    <Table.Td>{employee.email}</Table.Td>
                                    <Table.Td>{employee.number_phone}</Table.Td>
                                    <Table.Td>{employee.address}</Table.Td>
                                    <Table.Td>
                                        <span className={`text-xs p-2 ${employee.status == 'employee' ? 'bg-green-500 text-white rounded' : employee.status == 'admin' ? 'bg-yellow-400 text-white rounded' : 'bg-red-500 text-white rounded'}`}>
                                            {employee.status.toUpperCase()}
                                        </span>
                                    </Table.Td>
                                    <Table.Td>
                                        <img src={employee.picture ? employee.picture : 'https://flowbite.com/docs/images/blog/image-1.jpg'} className='rounded w-12 h-12' />
                                    </Table.Td>
                                    <Table.Td className="w-10" >
                                        <div className='flex flex-nowrap gap-2'>
                                            <ActionButton className='w-8 h-8 bg-yellow-400' type="button" onClick={() => openModalCategory(employee.username, "edit")}><IconEdit size={18} /></ActionButton>
                                            <ActionButton className='w-8 h-8 bg-red-500' type="button" onClick={() => openToast(employee.username, employee.name)}><IconTrash size={18} /></ActionButton>
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
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`2/3`} type={modalType} title={modalEmployee}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate} className='mt-6'>
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
