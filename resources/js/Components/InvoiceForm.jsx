import React, { useState } from 'react'
import TextInput from './TextInput'
import Error from './Error'
import { usePage, router } from '@inertiajs/react'
import SelectTable from './SelectTable'
import SelectPayment from './SelectPayment'
import PrimaryButton from './PrimaryButton'
import MyModal from './Modal'
import SecondaryButton from './SecondaryButton'
import { IconCash, IconChecks, IconExchange, IconMail, IconSend, IconX} from '@tabler/icons-react'
import toast from 'react-hot-toast'


export default function InvoiceForm({ data, setData, onSubmit, carts, total_price }) {
    let [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState("")
    const [modalPayment, setModalPayment] = useState("")

    function openModalOrder(type) {
        setIsOpen(true)
        setModalPayment("Invoice")
        setModalType(type)
    }

    function onCancelModal() {
        setIsOpen(false)
    }

    const { errors, tables, payments } = usePage().props
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const [showPaymentOptions, setShowPaymentOptions] = useState(false)

    const handleRadioChange = (e) => {
        const isRadioValue1 = e.target.value === 1;
        setShowPaymentOptions(isRadioValue1);
    }


    const charge = parseFloat(data.charge) || 0

    const difference = charge - total_price

    const sendBill = async () => {
        try {
            await router.post(`/admin/send-email`, {
                ...data,
                carts: carts,
                total_price: total_price
            }, {
                onSuccess: () => {
                    setIsOpen(false)
                    toast.success("Invoice has been send Email")
                }
            })
        } catch (error) {
            console.error('Error sending email:', error)
        }

    }

    return (
        <>
            <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} placeholder="Customer name.." />
            {errors.name ? <Error className='' value={errors.name} /> : null}
            <div className='flex items-center gap-4'>
                <div className={`w-1/2 ${data.charge  != "" ? 'w-full' : ''} flex items-center pl-4 border border-gray-300 rounded`}>
                    <TextInput id="bordered-radio-1" type="radio" checked={data.paid == 1} onChange={(e) => { onChange(e); handleRadioChange(e) }} value="1" name="paid" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500" />
                    <label htmlFor="bordered-radio-1" className="w-full py-2 ml-2 font-medium text-slate-500">Paid Now</label>
                </div>
                <div className={`${data.charge  != "" ? 'hidden' : ''} w-1/2 flex items-center pl-4 border border-gray-300 rounded`}>
                    <TextInput id="bordered-radio-2" type="radio" disabled={data.charge != 0 && data.payment_id !== ""} checked={data.paid == 2} onChange={(e) => { onChange(e); handleRadioChange(e) }} value="2" name="paid" className=" w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"/>
                    <label htmlFor="bordered-radio-2" className="w-full py-2 ml-2 font-medium text-slate-500">Paid Later</label>
                </div>
            </div>
            <div className='flex justify-between w-full gap-x-4'>
                <div className='flex flex-col w-full'>
                    <SelectTable value={data.table_id} data={tables} className="w-full" placeholder='Tables' onChange={(e) => setData('table_id', e)} />
                    {errors.table_id ? <Error className='' value={errors.table_id} /> : null}
                </div>
                {showPaymentOptions || data.paid == 1 ?
                    <div className='flex flex-col w-full'>
                        <SelectPayment value={data.payment_id} data={payments} className="w-full" placeholder='Payment' onChange={(e) => setData('payment_id', e)} />
                        {errors.payment_id ? <Error className='' value={errors.payment_id} /> : null}
                    </div>
                : ""}

            </div>
            {showPaymentOptions || data.paid == 1 ? <>
                    <TextInput type="number" min={data.paid == 1 ? 1 : ""} name='charge' id='charge' className="w-full" value={data.charge} onChange={onChange} placeholder="Charge.." />
                    {errors.charge ? <Error className='' value={errors.charge} /> : null}
            </> : ""
            }

            <div className="pb-4 flex items-end flex-1 justify-end">
                {
                    data.charge != 0 || data.paid == 1 ? <>
                        <PrimaryButton type="button" onClick={() => openModalOrder("create")} disabled={charge < total_price || data.payment_id == "" || data.name == "" || data.table_id == ""} className='bg-purple-600 text-white px-3 py-4 w-full rounded'>
                            Buy
                        </PrimaryButton>
                    </> : <>
                        <PrimaryButton className='bg-purple-600 text-white px-3 py-4 w-full rounded' disabled={tables.length == 0 || data.name == "" || data.table_id == "" || data.paid == ""}>
                            Confirm
                        </PrimaryButton>
                    </>
                }

            </div>

            {/* Modal */}
            <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} size={`1/3`} type={modalType} title={modalPayment}>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <IconCash color='green' /> <sup className='ml-1'>Rp.</sup>
                    </div>
                    <TextInput type="number" name='charge' id='charge' className="w-full pl-16" value={data.charge} onChange={onChange} placeholder="Charge.." />
                </div>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <IconExchange color='orange' /> <sup className='ml-1'>Rp.</sup>
                    </div>
                    <input type="number" readOnly disabled name='change' id='change' className="w-full pl-16" value={difference} placeholder="Change.." />
                </div>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <IconMail color='red' />
                    </div>
                    <input type="email" name='email' id='email' className="w-full pl-16" onChange={onChange} value={data.email || ''} placeholder="Email.." />
                </div>
                <div className="flex gap-4">
                    <SecondaryButton onClick={() => onCancelModal()}>
                        <IconX />
                    </SecondaryButton>
                    <PrimaryButton
                        onClick={(e) => {
                            e.preventDefault()
                            sendBill()
                            onSubmit(e)
                            setIsOpen(false)
                        }}
                        className="bg-orange-600 text-white px-3 py-4 w-full rounded"
                        disabled={charge < total_price || data.email == null || data.email == ''}
                    >
                        <IconSend />
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={(e) => {
                            e.preventDefault()
                            onSubmit(e)
                            setIsOpen(false)
                        }}
                        className="bg-purple-600 text-white px-3 py-4 w-full rounded"
                        disabled={charge < total_price}
                    >
                        <IconChecks />
                    </PrimaryButton>

                </div>
            </MyModal>
        </>
    )
}
