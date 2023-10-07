import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Select from './Select'
import InputFile from './InputFIle'
import { useForm, usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function ScheduleForm({ data, setData }) {

    const { errors } = usePage().props;
    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="day" value="Day" />
                <TextInput name='day' id='day' className="w-full" onChange={onChange} value={data.day} />
                {errors.day ? <Error className='' value={errors.day} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="open" value="Open" />
                <TextInput name='open' type="time" id='open' className="w-full" onChange={onChange} value={data.open} />
                {errors.open ? <Error className='' value={errors.open} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="close" value="Close" />
                <TextInput name='close' id='close' type="time" className="w-full" onChange={onChange} value={data.close} />
                {errors.close ? <Error className='' value={errors.close} /> : null}
            </div>
        </>
    )
}
