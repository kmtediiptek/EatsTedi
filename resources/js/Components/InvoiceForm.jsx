import React, { useState } from 'react'
import TextInput from './TextInput'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import SelectTable from './SelectTable'
import Select from './Select'

export default function InvoiceForm({ data, setData }) {

    const { errors, tables } = usePage().props
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    const [showPaymentOptions, setShowPaymentOptions] = useState(false)

    const handleRadioChange = (e) => {
        if (e.target.value === '1') {
            setShowPaymentOptions(true)
        } else {
            setShowPaymentOptions(false)
        }
    }


    const payments = [
        {
            id: 1,
            name: "Cash"

        },
        {
            id: 2,
            name: "QRIS"
        },
        {
            id: 3,
            name: "Lainnya"
        }
    ]

    return (
        <>
            <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} placeholder="Customer name.." />
            {errors.name ? <Error className='' value={errors.name} /> : null}
            <div className='flex items-center gap-4'>
                <div className="w-1/2 flex items-center pl-4 border border-gray-300 rounded">
                    <TextInput id="bordered-radio-1" type="radio" onChange={(e) => { onChange(e); handleRadioChange(e) }} value="1" name="paid" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500" />
                    <label htmlFor="bordered-radio-1" className="w-full py-2 ml-2 font-medium text-slate-500">Paid Now</label>
                </div>
                <div className="w-1/2 flex items-center pl-4 border border-gray-300 rounded">
                    <TextInput id="bordered-radio-2" type="radio" onChange={(e) => { onChange(e); handleRadioChange(e) }} value="2" name="paid" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500" />
                    <label htmlFor="bordered-radio-2" className="w-full py-2 ml-2 font-medium text-slate-500">Paid Later</label>
                </div>
            </div>
            <div className='flex justify-between w-full gap-x-4'>
            <div className='flex flex-col w-full'>
                <SelectTable value={data.table_id} data={tables} className="w-full" placeholder='Tables' onChange={(e) => setData('table_id', e)} />
                {errors.table_id ? <Error className='' value={errors.table_id} /> : null}
            </div>
                {showPaymentOptions && (
                    <div className='flex flex-col w-full'>
                        <Select value={data.payment_id} data={payments} className="w-full" placeholder='Payment' onChange={(e) => setData('payment_id', e)} />
                        {errors.payment_id ? <Error className='' value={errors.payment_id} /> : null}
                    </div>
                )}

            </div>
            {showPaymentOptions && (
                <>
                    <TextInput type="number" name='charge' id='charge' className="w-full" value={data.charge} onChange={onChange} placeholder="Charge.." />
                    {errors.charge ? <Error className='' value={errors.charge} /> : null}
                </>
            )}
        </>
    )
}
