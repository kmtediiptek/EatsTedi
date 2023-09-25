import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Select from './Select'
import InputFile from './InputFIle'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function ProductForm({ data, setData }) {
    const { errors, categories } = usePage().props;
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputFile name='picture' id='picture' className="w-full" onChange={(e) => setData('picture', e.target.files[0])} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor='category_id' value="Category" />
                <Select value={data.category_id} data={categories} className="w-full" onChange={(e) => setData('category_id', e)} />
                {errors.category_id ? <Error className='' value={errors.category_id} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} />
                {errors.name ? <Error className='' value={errors.name} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="price" value="Price" />
                <TextInput name='price' id='price' className="w-full" onChange={onChange} value={data.price} />
                {errors.price ? <Error className='' value={errors.price} /> : null}
            </div>
        </>
    )
}
