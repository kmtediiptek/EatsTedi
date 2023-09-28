import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function TableForm({ data, setData }) {
    const { errors } = usePage().props

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <div className="mb-4">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    name="name"
                    id="name"
                    className="w-full"
                    onChange={onChange}
                    value={data.name}
                />
                {errors.name ? <Error className="" value={errors.name} /> : null}
            </div>
            <div className="mb-4">
                <div className="flex items-center gap-4">
                    <div className={`w-1/2 flex items-center pl-4 border ${data.status === '1' ? 'border-orange-500' : 'border-gray-300'} rounded`}>
                        <TextInput
                            id="bordered-radio-1"
                            type="radio"
                            onChange={onChange}
                            checked={data.status === '1'}
                            value="1"
                            name="status"
                            className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                        />
                        <label
                            htmlFor="bordered-radio-1"
                            className="w-full py-2 ml-2 font-medium text-slate-500"
                        >
                            Active
                        </label>
                    </div>
                    <div className={`w-1/2 flex items-center pl-4 border ${data.status === '0' ? 'border-orange-500' : 'border-gray-300'} rounded`}>
                        <TextInput
                            id="bordered-radio-2"
                            type="radio"
                            onChange={onChange}
                            checked={data.status === '0'}
                            value="0"
                            name="status"
                            className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                        />
                        <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-2 ml-2 font-medium text-slate-500"
                        >
                            Non Active
                        </label>
                    </div>
                    {errors.name ? <Error className="" value={errors.name} /> : null}
                </div>
            </div>
        </>
    )
}
