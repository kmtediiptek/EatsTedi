import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'
import InputFile from './InputFIle'
import Select from './Select'
import Textarea from './Textarea'

export default function EmployeeForm({ data, setData }) {
    const { errors } = usePage().props
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const statuses = [
        {
            id: 1,
            name: "owner"

        },
        {
            id: 2,
            name: "admin"
        },
        {
            id: 3,
            name: "employee"
        }
    ]

    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="picture" value="Picture" />
                <InputFile picture={data.picture} name='picture' id='picture' className="text-third" onChange={(e) => setData('picture', e.target.files[0])} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-6">
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} />
                    {errors.name ? <Error className='' value={errors.name} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="username" value="Username" />
                    <TextInput name='username' id='username' className="w-full" onChange={onChange} value={data.username} />
                    {errors.username ? <Error className='' value={errors.username} /> : null}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-6">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput type="email" name='email' id='email' className="w-full" onChange={onChange} value={data.email} />
                    {errors.email ? <Error className='' value={errors.email} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="number_phone" value="Number Phone" />
                    <TextInput type="number" name='number_phone' id='number_phone' className="w-full" onChange={onChange} value={data.number_phone} />
                    {errors.number_phone ? <Error className='' value={errors.number_phone} /> : null}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-6">
                    <InputLabel htmlFor="status" value="Status" />
                    <Select value={data.status} data={statuses} onChange={(e) => setData('status', e)} />
                    {errors.status ? <Error className='' value={errors.status} /> : null}
                </div>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="mb-6">
                <InputLabel htmlFor="is_active" value="Actives" />
                    <div className="flex items-center gap-4">
                        <div className={`w-1/2 flex items-center pl-4 border ${data.is_active == 1 ? 'border-orange-500' : 'border-gray-300'} rounded`}>
                            <TextInput
                                id="bordered-radio-1"
                                type="radio"
                                onChange={onChange}
                                checked={data.is_active == 1}
                                value="1"
                                name="is_active"
                                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                            />
                            <label
                                htmlFor="bordered-radio-1"
                                className="w-full py-2 ml-2 font-medium text-slate-500"
                            >
                                Active
                            </label>
                        </div>
                        <div className={`w-1/2 flex items-center pl-4 border ${data.is_active == 0 ? 'border-orange-500' : 'border-gray-300'} rounded`}>
                            <TextInput
                                id="bordered-radio-2"
                                type="radio"
                                onChange={onChange}
                                checked={data.is_active == 0}
                                value="0"
                                name="is_active"
                                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                            />
                            <label
                                htmlFor="bordered-radio-2"
                                className="w-full py-2 ml-2 font-medium text-slate-500"
                            >
                                Non Active
                            </label>
                        </div>
                    </div>
                        {errors.is_active ? <Error className="" value={errors.is_active} /> : null}
                </div>
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="address" value="Address" />
                <Textarea rows="6" name='address' id='address' onChange={onChange} value={data.address} />
                {errors.address ? <Error className='' value={errors.address} /> : null}
            </div>

        </>
    )
}
