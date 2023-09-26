import CartItem from '@/Components/CartItem'
import Container from '@/Components/Container'
import InvoiceForm from '@/Components/InvoiceForm'
import OrderItem from '@/Components/OrderItem'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import ProductItem from '@/Components/ProductItem'
import TextInput from '@/Components/TextInput'
import App from '@/Layouts/App'
import { numberFormat } from '@/Libs/Helper'
import { Head, Link, useForm, router } from '@inertiajs/react'
import { IconArrowsMaximize, IconArrowsMinimize, IconCategory, IconTrashX } from '@tabler/icons-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Index({ categories, carts, invoices, tables, ...props }) {

    const [isOrderListOpen, setIsOrderListOpen] = useState(true)
    const { data: products, meta, links } = props.products

    const toggleOrderList = () => {
        setIsOrderListOpen(!isOrderListOpen)
    }


    const total = carts.reduce((acc, cart) => acc + cart.price, 0)

    const quantity = carts.reduce((acc, cart) => acc + cart.quantity, 0)


    const { data, setData } = useForm({
        id: '',
        name: '',
        table_id: '',
        payment_id: '',
        charge: '',
    })


    const onSubmit = (e) => {
        e.preventDefault()
        router.post(`/admin/invoice`, {
            ...data,
            carts: carts,
            total: total,
            quantity: quantity,
            table_id: data.table_id.id,
            payment_id: data.payment_id.id,
        }, {
            onSuccess: () => {
                setData({ id: '', name: '', carts: '', total: '', table_id: '', payment_id: '', charge: '' }),
                    toast.success('Invoice has been added!')
            }
        })
    }

    return (
        <>
            <Head title="Menu" />
            <Container>
                <div className="flex w-full">
                    {/* Start Button Card Order */}
                    <button
                        className="block fixed z-[100] bg-white rounded right-4 top-18 mt-1  p-4 text-orange-500"
                        onClick={toggleOrderList}
                    >
                        {isOrderListOpen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                    </button>
                    {/* End Button Card Order */}

                    {/* Start Menu */}
                    <div className={`bg-white ${isOrderListOpen ? 'w-3/4' : 'w-full'}`}>

                        {/* Start Order List */}
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Order List</h3>
                        <div className="flex w-full scrolling-wrapper overflow-x-scroll overflow-y-hidden pb-1 flex-nowrap gap-x-4">
                            {invoices.length > 0 ? <>
                                {
                                    invoices.map((invoice, index) => (
                                        <OrderItem invoice={invoice} key={index} />
                                    ))
                                }
                            </>
                                :
                                <div className="flex justify-start items-center flex-1">
                                    <h1 className='text-slate-300 mr-2'><IconTrashX size={32} />  </h1>
                                    <p className='text-slate-500 text-lg'>Empty Order List</p>
                                </div>
                            }
                        </div>
                        {/* End Order List */}

                        {/* Start Categories */}
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>
                        <div className="flex w-full scrolling-wrapper overflow-x-scroll pb-1 flex-nowrap gap-x-4">
                            <Link href={route('admin.transaction')} className="flex text-white">
                                <div className="w-32 h-32 bg-orange-500 rounded p-2 shadow">
                                    <IconCategory className='my-2' />
                                    <p className='block'>All Menu</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </Link>
                            {categories.map((category, index) => (
                                <Link href={`/admin/transaction?category=${category.slug}`} className="flex rounded text-white" key={index}>
                                    <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2" >
                                        <div className='w-8 h-8 mb-2' dangerouslySetInnerHTML={{ __html: category.icon }} />
                                        <p className='text-slate-500'>{category.name}</p>
                                        <h6 className='text-lg font-semibold'>10 items</h6>
                                    </div>
                                </Link>
                            ))}

                        </div>
                        {/* End Categories */}

                        {/* Start Special Menu */}
                        <div className="w-full">
                            <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                            {products.length > 0 ?
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-lg-4 gap-4 gap-y-8 w-full flex-wrap">
                                    {
                                        products.map((product, index) => (
                                            <ProductItem product={product} key={index} />
                                        ))
                                    }
                                </div>
                                : <div className="flex justify-center items-center flex-col flex-1 h-[280px]">
                                    <h1 className='text-slate-300'><IconTrashX size={64} />  </h1>
                                    <p className='text-slate-500 mt-4 text-lg'>Empty Menu</p>
                                </div>
                            }

                            {products.length > 0 &&
                                <Pagination meta={meta} links={links} />
                            }
                        </div>
                        {/* End Special Menu */}
                    </div>
                    {/* End Menu */}

                    {/* Start Order Details */}
                    <div className={`w-3/4 sm:w-2/5 md:w-1/4 flex flex-col bg-white top-16 right-0 bottom-0 fixed max-h-screen border-l border-b rounded-bl border-gray-300 ml-2 ${isOrderListOpen ? 'block' : 'hidden'}`}>
                        <div className="fixed bg top-16 w-full flex flex-col justify-end">
                            <h3 className='text-xl pl-4 bg-white font-semibold text-slate-700 py-5'>Order Details</h3>
                            <hr />
                        </div>
                        <div className="px-4 h-3/6 flex flex-col h-full justify-start bg-white flex-1 pt-16 scrolling-wrapper overflow-y-scroll">
                            <div className="flex flex-col flex-1">
                                {carts.length > 0 ? <>
                                    {carts.map((cart, index) => (
                                        <CartItem key={index} cart={cart} />
                                    ))}
                                </> :
                                    <div className="flex justify-center items-center flex-col flex-1 h-[280px]">
                                        <h1 className='text-slate-300'><IconTrashX size={64} />  </h1>
                                        <p className='text-slate-500 mt-4 text-lg'>Empty Order</p>
                                    </div>
                                }

                            </div>

                        </div>
                        <div className="h-max w-full px-4 pb-0 bg-white">
                            <div className='space-y-3 flex flex-col justify-start mb-4'>
                                <hr />
                                <div className="flex justify-between">
                                    <p className='text-lg text-slate-500'>Quantity</p>
                                    <p className='text-lg font-bold text-slate-600'>{quantity}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-lg font-semibold text-slate-500'>Total</p>
                                    <p className='text-lg font-bold text-slate-600'>Rp. {numberFormat(total)}</p>
                                </div>
                                <form onSubmit={onSubmit} className='w-full space-y-4'>
                                    <InvoiceForm {...{ data, setData }} />
                                    <hr />
                                    <div className="pb-4 flex items-end flex-1 justify-end">
                                        {
                                            tables.length > 1 ?
                                                <PrimaryButton className='bg-slate-600 text-white px-3 py-4 w-full rounded'>
                                                    Empty Table
                                                </PrimaryButton>
                                                :
                                                <PrimaryButton className='bg-purple-600 text-white px-3 py-4 w-full rounded'>
                                                    Confirm
                                                </PrimaryButton>
                                        }

                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                    {/* End Order Details */}
                </div>
            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />
