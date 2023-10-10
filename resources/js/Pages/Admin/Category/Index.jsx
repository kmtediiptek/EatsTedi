import ActionLink from '@/Components/ActionLink'
import ActionButton from '@/Components/Actionbutton'
import CategoryForm from '@/Components/CategoryForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Table from '@/Components/Table'
import TextInput from '@/Components/TextInput'
import Toast from '@/Components/Toast'
import App from '@/Layouts/App'
import { Head, useForm, router, Link } from '@inertiajs/react'
import { IconArrowLeft } from '@tabler/icons-react'
import { IconArrowLeftSquare, IconArrowRight, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function Index({ total_categories, ...props }) {
    const { data: categories, meta, links } = props.categories

    const [searchQuery, setSearchQuery] = useState('')

    const { delete: destroy, post, put, data, setData } = useForm({
        name: '',
        icon: '',
    })

    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalCategory, setModalCategory] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    const [categorySlug, setCategorySlug] = useState("")

    function openModalCategory(categorySlug, type) {
        setIsOpen(true)
        setModalCategory("Category")
        setModalType(type)
        setCategorySlug(categorySlug)
        if (categorySlug) {
            const selectedCategory = categories.find(category => category.slug === categorySlug)

            setCategorySlug(categorySlug)
            setData({
                name: selectedCategory.name,
                icon: selectedCategory.icon
            })
        } else {
            setCategorySlug("")
            setData({
                name: '',
                icon: ''
            })
        }
    }

    function openToast(categorySlug, title) {
        setIsToast(true)
        setToastTitle(title)
        setCategorySlug(categorySlug)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    function onCancelToast() {
        setIsToast(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        post(route('admin.category.index'), {
            data,
            onSuccess: () => {
                toast.success('Category has been created!')
                setIsOpen(false)
                setData({ name: '', icon: '' })
            }

        })
    }

    const onUpdate = (categorySlug) => (e) => {
        e.preventDefault()
        put(route('admin.category.update', categorySlug), {
            ...data,
            onSuccess: () => {
                toast.success('Category has been updated!'),
                    setIsOpen(false)
            }
        })
    }

    const onDelete = (categorySlug) => {
        destroy(route('admin.category.destroy', categorySlug), {
            onSuccess: () => {
                toast.success('Category has been deleted!'),
                    setIsToast(false)
            }
        })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        router.get(`/admin/setting/category`, {
            search: e.target.value
        }, {
            preserveState: true
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Categories */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route('admin.dashboard')}>
                            <IconArrowLeft size={18} />
                        </ActionLink>
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
                        placeholder="Search category.."
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
                            <Table.Th>Icon</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {categories.length > 0 ? <>
                            {categories.map((category, index) => (
                                <tr className="bg-white border-b text-gray-500" key={index}>
                                    <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                    <Table.Td>{category.name}</Table.Td>

                                    <Table.Td> <div className='w-10 h-10 p-2 border border-gray rounded' dangerouslySetInnerHTML={{ __html: category.icon }} /></Table.Td>
                                    <Table.Td className="w-10" >
                                        <div className='flex flex-nowrap gap-2'>
                                            <ActionButton className='w-8 h-8 bg-yellow-400' type="button" onClick={() => openModalCategory(category.slug, "edit")}><IconEdit size={18} /></ActionButton>
                                            <ActionButton className='w-8 h-8 bg-red-500' type="button" onClick={() => openToast(category.slug, category.name)}><IconTrash size={18} /></ActionButton>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </> :
                            <tr className="bg-white border-b text-gray-500 text-center">
                                <Table.Td colSpan="4">No data</Table.Td>
                            </tr>
                        }
                    </Table.Tbody>
                </Table>
                {categories.length > 0 &&
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-slate-500 mt-10'>Total Categories: <span className='font-bold'>{total_categories}</span> </p>
                    </div>
                }
                {/* End Categories */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`1/3`} type={modalType} title={modalCategory}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate(categorySlug)} className='mt-6'>
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
                        <PrimaryButton onClick={() => onDelete(categorySlug)}>Yes</PrimaryButton>
                    </div>
                </Toast>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
