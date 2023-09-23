import ActionButton from '@/Components/Actionbutton'
import ProductForm from '@/Components/ProductForm'
import Container from '@/Components/Container'
import MyModal from '@/Components/Modal'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Table from '@/Components/Table'
import Toast from '@/Components/Toast'
import App from '@/Layouts/App'
import { Head, useForm, router } from '@inertiajs/react'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function Index({ total_categories, ...props }) {
    const { data: products, meta, links } = props.products

    const [searchQuery, setSearchQuery] = useState('')

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10)

    const { delete: destroy, data, setData } = useForm({
        name: '',
        category_id: '',
        slug: '',
        price: '',
        picture: '',
    })

    let [isOpen, setIsOpen] = useState(false)
    let [isToast, setIsToast] = useState(false)

    const [modalProduct, setModalProduct] = useState("")

    const [toastTitle, setToastTitle] = useState("")

    const [modalType, setModalType] = useState("")

    const [productSlug, setProductSlug] = useState("")

    function openModalCategory(productSlug, type) {
        console.log(type)
        setIsOpen(true)
        setModalProduct("Product")
        setModalType(type)
        setProductSlug(productSlug)
        if (productSlug) {
            const selectedProduct = products.find(product => product.slug === productSlug)
            console.log(selectedProduct.category);
            setProductSlug(productSlug)
            setData({
                name: selectedProduct.name,
                slug: selectedProduct.slug,
                category_id: selectedProduct.category,
                price: selectedProduct.price,
                picture: '',
            })
        } else {
            setProductSlug("")
            setData({
                name: '',
                category_id: '',
                slug: '',
                price: '',
                picture: '',
            })
        }
    }

    function openToast(productSlug, title) {
        setIsToast(true)
        setToastTitle(title)
        setProductSlug(productSlug)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    function onCancelToast() {
        setIsToast(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        router.post(`/admin/setting/product`, {
            ...data,
            category_id: data.category_id.id,
        }, {
            onSuccess: () => {
                setData({ name: '', slug: '', price: '', category_id: '', picture: '' }),
                    setIsOpen(false),
                    toast.success('Product has been created!')
            }
        })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        router.post(`/admin/setting/product/${data.slug}`, {
            _method: 'put',
            ...data,
            category_id: data.category_id.id,
        }, {
            onSuccess: () => {
                setIsOpen(false),
                    setData({ name: '', slug: '', price: '', picture: '', category_id: '' }),
                    toast.success('Product has been updated!')
            }
        })
    }
    const onDelete = (productSlug) => {
        destroy(route('admin.product.destroy', productSlug), {
            onSuccess: () => {
                toast.success('Product has been deleted!'),
                    setIsToast(false)
            }
        })
    }
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Products */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Products</h3>
                <div className="flex justify-between w-full item-center my-2">
                    <ActionButton
                        onClick={() => openModalCategory("", "create")}
                        type="button"
                    >
                        <IconPlus size={18} />
                    </ActionButton>
                    <input id="searchQuery" type="text" className='w-3/4 sm:w-1/4 rounded border-gray-300 py-1 focus:ring-puple-300 focus:border-purple-600' placeholder='Search product..'
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
                            <Table.Th>Category</Table.Th>
                            <Table.Th>Price</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {filteredProducts.length > 0 ? <>
                            {filteredProducts.map((product, index) => (
                                <tr className="bg-white border-b text-gray-500" key={index}>
                                    <Table.Td className="w-5">{index + 1}</Table.Td>
                                    <Table.Td>{product.name}</Table.Td>
                                    <Table.Td>
                                        <span className={`text-xs p-2 ${product.category.id == 1 ? 'bg-sky-500 text-white rounded' : product.category.id == 2 ? 'bg-emerald-400 text-white rounded' : 'bg-purple-500 text-white rounded'}`}>
                                            {product.category.name.toUpperCase()}
                                        </span>
                                    </Table.Td>
                                    <Table.Td>{product.price}</Table.Td>
                                    <Table.Td>
                                        <img src={product.picture ? product.picture : 'https://flowbite.com/docs/images/blog/image-1.jpg'} className='rounded w-12 h-12' />
                                    </Table.Td>
                                    <Table.Td className="w-10" >
                                        <div className='flex flex-nowrap gap-2'>
                                            <ActionButton className='bg-yellow-400' type="button" onClick={() => openModalCategory(product.slug, "edit")}><IconEdit size={18} /></ActionButton>
                                            <ActionButton className='bg-red-500' type="button" onClick={() => openToast(product.slug, product.name)}><IconTrash size={18} /></ActionButton>
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </> :
                            <tr className="bg-white border-b text-gray-500 text-center">
                                <Table.Td colSpan="6">No data</Table.Td>
                            </tr>
                        }
                    </Table.Tbody>
                </Table>
                {products.length > 0 &&
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-slate-500 mt-10'>Total Products: <span className='font-bold'>{total_categories}</span> </p>
                    </div>
                }
                {/* End Products */}

                {/* Modal */}
                <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`1/3`} type={modalType} title={modalProduct}>
                    <form onSubmit={modalType == "create" ? onSubmit : onUpdate} className='mt-6'>
                        <ProductForm {...{ data, setData }} />
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
                        <PrimaryButton onClick={() => onDelete(productSlug)}>Yes</PrimaryButton>
                    </div>
                </Toast>

            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
