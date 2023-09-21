import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'
import InputFile from './InputFIle'
import Select from './Select'
import Textarea from './Textarea'

export default function EmployeeForm({ data, setData }) {
    const { errors, statuses } = usePage().props
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <div className="mb-4">
                <InputFile name='picture' id='picture' className="w-full" onChange={onChange} value={data.picture} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} />
                    {errors.name ? <Error className='' value={errors.name} /> : null}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="username" value="Username" />
                    <TextInput name='username' id='username' className="w-full" onChange={onChange} value={data.username} />
                    {errors.username ? <Error className='' value={errors.username} /> : null}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="mb-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput name='email' id='email' className="w-full" onChange={onChange} value={data.email} />
                {errors.email ? <Error className='' value={errors.email} /> : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="number_phone" value="Number Phone" />
                <TextInput type="number" name='number_phone' id='number_phone' className="w-full" onChange={onChange} value={data.number_phone} />
                {errors.number_phone ? <Error className='' value={errors.number_phone} /> : null}
            </div>
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="address" value="Address" />
                <Textarea name='address' id='address' onChange={onChange} value={data.address} />
                {errors.address ? <Error className='' value={errors.address} /> : null}
            </div>
            <div className="mb-4 w-1/2">
                <InputLabel htmlFor="status" value="Status" />
                <Select value={data.status} data={statuses} onChange={(e) => setData('status', e)} />
                    {errors.status ? <Error className='' value={errors.status} /> : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput name='password' id='password' className="w-full" onChange={onChange} value={data.password} />
                {errors.password ? <Error className='' value={errors.password} /> : null}
            </div>
        </>
    )
}
