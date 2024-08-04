import React from "react";
import InputLabel from "./InputLabel";
import Error from "./Error";
import { usePage } from "@inertiajs/react";
import TextInput from "./TextInput";

export default function ScheduleForm({ data, setData }) {
    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="day" value="Day" />
                <TextInput
                    name="day"
                    id="day"
                    className="w-full"
                    onChange={onChange}
                    value={data.day}
                />
                {errors.day ? <Error className="" value={errors.day} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="open" value="Open" />
                <TextInput
                    name="open"
                    type="time"
                    id="open"
                    className="w-full"
                    onChange={onChange}
                    value={data.open}
                />
                {errors.open ? (
                    <Error className="" value={errors.open} />
                ) : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="close" value="Close" />
                <TextInput
                    name="close"
                    id="close"
                    type="time"
                    className="w-full"
                    onChange={onChange}
                    value={data.close}
                />
                {errors.close ? (
                    <Error className="" value={errors.close} />
                ) : null}
            </div>

            <div className="mb-6">
                <InputLabel htmlFor="is_break" value="Break" />
                <div className="flex items-center gap-4">
                    <div
                        className={`w-1/2 flex items-center pl-4 border ${
                            data.is_break == 1
                                ? "border-primary"
                                : "border-gray-300"
                        } rounded`}
                    >
                        <TextInput
                            id="is_break_yes"
                            type="radio"
                            onChange={onChange}
                            checked={data.is_break == 1}
                            value="1"
                            name="is_break"
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                        />
                        <label
                            htmlFor="is_break_yes"
                            className="w-full py-2 ml-2 font-medium text-third"
                        >
                            Yes
                        </label>
                    </div>
                    <div
                        className={`w-1/2 flex items-center pl-4 border ${
                            data.is_break == 0
                                ? "border-primary"
                                : "border-secondary"
                        } rounded`}
                    >
                        <TextInput
                            id="is_break_no"
                            type="radio"
                            onChange={onChange}
                            checked={data.is_break == 0}
                            value="0"
                            name="is_break"
                            className="w-4 h-4 text-primary bg-white border-secondary focus:ring-primary"
                        />
                        <label
                            htmlFor="is_break_no"
                            className="w-full py-2 ml-2 font-medium text-third"
                        >
                            No
                        </label>
                    </div>
                </div>
                {errors.is_break ? (
                    <Error className="" value={errors.is_break} />
                ) : null}
            </div>
        </>
    );
}
