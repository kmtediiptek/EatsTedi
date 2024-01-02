import React from 'react'
import InputLabel from './InputLabel'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'
import Error from './Error';

export default function CategoryForm({ data, setData }) {
    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-4">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} />
                {errors.name ? <Error className='' value={errors.name} /> : null}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="icon" value="Icon" />
                <TextInput name='icon' id='icon' className="w-full" onChange={onChange} value={data.icon} />
                {errors.icon ? <Error className='' value={errors.icon} /> : null}
            </div>
        </>
    )
}
