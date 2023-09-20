import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function TableForm({ data, setData }) {
    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-4">
                <InputLabel htmlFor="number" value="number" />
                <TextInput name='number' id='number' className="w-full" onChange={onChange} value={data.number} />
                {errors.number ? <Error className='' value={errors.number} /> : null}
            </div>
        </>
    )
}
