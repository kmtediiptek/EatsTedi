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
                {errors.name ? (
                    <Error className="" value={errors.name} />
                ) : null}
            </div>
            <div className="mb-4">
                <div className="flex items-center gap-4">
                    <div
                        className={`w-1/2 flex items-center bg-third focus:ring-fifth focus:bg-white pl-4 border ${
                            data.status == "1" ? "border-fifth" : "border-fifth"
                        } rounded-md`}
                    >
                        <TextInput
                            id="bordered-radio-1"
                            type="radio"
                            onChange={onChange}
                            checked={data.status == "1"}
                            value="1"
                            name="status"
                        />
                        <label
                            htmlFor="bordered-radio-1"
                            className="w-full py-2 ml-2 font-medium text-dark "
                        >
                            Aktif
                        </label>
                    </div>
                    <div
                        className={`w-1/2 flex items-center pl-4 bg-third focus:border-fifth focus:ring-fifth focus:bg-white pl-4 border ${
                            data.status == "0"
                                ? "border-fifth bg-white"
                                : "border-fifth"
                        } rounded-md`}
                    >
                        <TextInput
                            id="bordered-radio-2"
                            type="radio"
                            onChange={onChange}
                            checked={data.status == "0"}
                            value="0"
                            name="status"
                        />
                        <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-2 ml-2 font-medium text-dark"
                        >
                            Tidak Aktif
                        </label>
                    </div>
                </div>
                {errors.status ? (
                    <InputError className="" message={errors.status} />
                ) : null}
            </div>
        </>
    );
}
