import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import { IconArrowsMaximize, IconArrowsMinimize, IconCards, IconCategory, IconCoffee, IconLockOpen, IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'


export default function Dashboard(props) {
    const [isOrderListOpen, setIsOrderListOpen] = useState(true)

    const toggleOrderList = () => {
        setIsOrderListOpen(!isOrderListOpen)
    }
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                <div className="flex w-full">
                        <button
                            className="block sm:hidden fixed z-[100] top-18 right-0  p-4 text-orange-600"
                            onClick={toggleOrderList}
                        >
                            {isOrderListOpen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                        </button>
                    <div className="sm:w-3/4 w-full bg-white">
                        <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Categories</h3>
                        <div className="flex w-full overflow-x-scroll flex-nowrap gap-x-4">
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32 bg-orange-600 p-2 shadow-xl">
                                    <IconCategory className='my-2' />
                                    <p className='block'>All Menu</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>

                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>
                            <div className="flex rounded text-white">
                                <div className="w-32 h-32  rounded border border-gray-300 text-slate-600 p-2">
                                    <IconCoffee className='my-2' />
                                    <p className='text-slate-500'>Coffe</p>
                                    <h6 className='text-lg font-semibold'>10 items</h6>
                                </div>
                            </div>

                        </div>
                        <div className="w-full">
                            <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Special menu for you</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-lg-4 gap-4 w-full flex-wrap">
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                                <div className="h-[400px] mb-4">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded' />
                                    <div className="py-2">
                                        <p className='text-slate-500 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h6 className='text-3xl font-semibold text-slate-700'>Rp. 10.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`w-3/4 sm:w-1/4 bg-white right-0 fixed h-screen border-l border-gray-300 ml-4 ${isOrderListOpen ? 'block' : 'hidden'}`}>
                        <div className="px-4 py-8">
                            <h3 className='text-xl font-semibold text-slate-700 mb-8'>Order Details</h3>
                            <hr />
                            <div className="header-card py-4 flex-flex-column gap-4">
                                <h6 className='text-lg font-semibold text-slate-700'>Recipent : Dinda Indriana</h6>
                                <p className='text-lg text-slate-500'>Senin, 20 November 2023</p>
                                <p className='text-lg text-slate-500'>#000099</p>
                            </div>
                            <hr />
                            <div className="flex order py-4 flex-flex-column gap-4">
                                <div className="flex gap-2 w-2/3 overflow-hidden">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded h-20 w-20' />
                                    <div className="flex flex flex-col justify-between">
                                        <h6 className='text-lg text-slate-700'>wdwqs</h6>
                                        <h5 className='text-xl font-semibold text-slate-700'>Rp. 10.000</h5>
                                    </div>
                                </div>
                                <div className="w-1/3 text-end flex flex-col flex-1 justify-between">
                                    <IconX size={16} color='red' className='ml-auto' />
                                    <div className="flex justify-between align-center  mt-5 ">
                                        <IconPlus size={32} className='text-white bg-orange-600 border p-1 rounded' />
                                        <p className='text-center mx-auto text-lg'>100</p>
                                        <IconMinus size={32} color='red' className='border p-1 rounded' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex order py-4 flex-flex-column gap-4">
                                <div className="flex gap-2 w-2/3 overflow-hidden">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded h-20 w-20' />
                                    <div className="flex flex flex-col justify-between">
                                        <h6 className='text-lg text-slate-700'>wdwqs</h6>
                                        <h5 className='text-xl font-semibold text-slate-700'>Rp. 10.000</h5>
                                    </div>
                                </div>
                                <div className="w-1/3 text-end flex flex-col flex-1 justify-between">
                                    <IconX size={16} color='red' className='ml-auto' />
                                    <div className="flex justify-between align-center  mt-5 ">
                                        <IconPlus size={32} className='text-white bg-orange-600 border p-1 rounded' />
                                        <p className='text-center mx-auto text-lg'>100</p>
                                        <IconMinus size={32} color='red' className='border p-1 rounded' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex order py-4 flex-flex-column gap-4">
                                <div className="flex gap-2 w-2/3 overflow-hidden">
                                    <img src="https://assets-pergikuliner.com/sjuhly1RSlpU40nj40K59-4lfXg=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/19888/coffee_shop_di_bekasiip.jpg" alt="" className='rounded h-20 w-20' />
                                    <div className="flex flex flex-col justify-between">
                                        <h6 className='text-lg text-slate-700'>wdwqs</h6>
                                        <h5 className='text-xl font-semibold text-slate-700'>Rp. 10.000</h5>
                                    </div>
                                </div>
                                <div className="w-1/3 text-end flex flex-col flex-1 justify-between">
                                    <IconX size={16} color='red' className='ml-auto' />
                                    <div className="flex justify-between align-center  mt-5 ">
                                        <IconPlus size={32} className='text-white bg-orange-600 border p-1 rounded' />
                                        <p className='text-center mx-auto text-lg'>100</p>
                                        <IconMinus size={32} color='red' className='border p-1 rounded' />
                                    </div>
                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

Dashboard.layout = page => <App children={page} />
