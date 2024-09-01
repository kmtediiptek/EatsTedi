import React, {useEffect, useState} from "react";
import TextInput from "./TextInput";
import Error from "./Error";
import { usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import MyModal from "./Modal";
import SecondaryButton from "./SecondaryButton";
import {
    IconCash,
    IconChecks,
    IconExchange,
    IconX,
} from "@tabler/icons-react";

export default function InvoiceForm({
    data,
    setData,
    onSubmit,
    total_price,
}) {
    let [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [modalPayment, setModalPayment] = useState("");
    const [payment_id, setPaymentId] = useState(0);

    function openModalOrder(type) {
        setIsOpen(true);
        setModalPayment("Invoice");
        setModalType(type);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    const { errors } = usePage().props;
    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // on enter pressed
    const onEnterPressed = (e) => {
        if (e.key === "Enter" && payment_id && data.charge !== 0) {
            console.log(payment_id, data.charge, isOpen)
            if (isOpen){
                console.log(
                    "a"
                )
                if (charge < total_price) {
                    return;
                }
                onSubmit(e);
                setIsOpen(false);
            } else {
                openModalOrder("create")
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onEnterPressed);
        return () => {
            window.removeEventListener("keydown", onEnterPressed);
        };
    }, [payment_id, isOpen, data.payment_id, data.charge, total_price]);

    useEffect(() => {
            setData("charge", total_price)
    }, [data.payment_id]);

    const [_, setShowPaymentOptions] = useState(false);

    const handleRadioChange = (e) => {
        const isRadioValue1 = e.target.value === 1;
        setShowPaymentOptions(isRadioValue1);
    };

    const charge = parseFloat(data.charge) || 0;

    const difference = charge - total_price;

    return (
        <>
            {errors.name ? <Error className="" value={errors.name} /> : null}
            <div className="flex items-center gap-4">
                <div
                    className={`w-1/2 flex items-center pl-4 border border-gray-300 rounded`}
                >
                    <TextInput
                        id="bordered-radio-1"
                        type="radio"
                        checked={data.payment_id == 1}
                        onChange={(e) => {
                            onChange(e);
                            handleRadioChange(e);
                            setPaymentId(1)
                        }}
                        value="1"
                        name="payment_id"
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                    />
                    <label
                        htmlFor="bordered-radio-1"
                        className="w-full py-2 ml-2 font-medium text-third"
                    >
                        Pay Cash
                    </label>
                </div>
                <div
                    className={`w-1/2 flex items-center pl-4 border border-gray-300 rounded`}
                >
                    <TextInput
                        id="bordered-radio-2"
                        type="radio"
                        checked={data.payment_id == 2}
                        onChange={(e) => {
                            onChange(e);
                            handleRadioChange(e);
                            setPaymentId(2)
                        }}
                        value="2"
                        name="payment_id"
                        className=" w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                    />
                    <label
                        htmlFor="bordered-radio-2"
                        className="w-full py-2 ml-2 font-medium text-third"
                    >
                        Pay Qris
                    </label>
                </div>
            </div>
            {data.payment_id ? (
                <>
                    <TextInput
                        type="number"
                        min={data.is_paid === 1 ? 1 : ""}
                        name="charge"
                        id="charge"
                        className="w-full"
                        // value={data.charge}
                        defaultValue={ total_price  }
                        onChange={onChange}
                        placeholder="Charge.."
                    />
                    {errors.charge ? (
                        <Error className="" value={errors.charge} />
                    ) : null}
                </>
            ) : (
                ""
            )}

            <div className="pb-4 flex items-end flex-1 justify-end">
                {data.charge !== 0 || data.is_paid === 1 ? (
                    <>
                        <PrimaryButton
                            type="button"
                            onClick={() => openModalOrder("create")}
                            disabled={
                                charge < total_price ||
                                data.payment_id === ""
                            }
                            className="bg-violet-600 text-white px-3 py-4 w-full rounded"
                        >
                            Buy
                        </PrimaryButton>
                    </>
                ) : (
                    <>
                        <PrimaryButton
                            className="bg-violet-600 text-white px-3 py-4 w-full rounded"
                            disabled={data.is_paid === ""}
                        >
                            Confirm
                        </PrimaryButton>
                    </>
                )}
            </div>

            {/* Modal */}
            <MyModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size={`1/3`}
                type={modalType}
                title={modalPayment}
            >
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <IconCash color="green" />{" "}
                        <sup className="ml-1">Rp.</sup>
                    </div>
                    <TextInput
                        type="number"
                        name="charge"
                        id="charge"
                        className="w-full pl-16"
                        value={data.charge}
                        onChange={onChange}
                        placeholder="Charge.."
                    />
                </div>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <IconExchange color="orange" />{" "}
                        <sup className="ml-1">Rp.</sup>
                    </div>
                    <TextInput
                        type="number"
                        readOnly
                        disabled
                        name="change"
                        id="change"
                        className="w-full pl-16"
                        value={difference}
                        placeholder="Change.."

                    />
                </div>
                <div className="flex gap-4">
                    <SecondaryButton onClick={() => onCancelModal()}>
                        <IconX />
                    </SecondaryButton>
                    <PrimaryButton
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit(e);
                            setIsOpen(false);
                        }}
                        className="bg-violet-600 text-white px-3 py-4 w-full rounded"
                        disabled={charge < total_price}
                    >
                        <IconChecks />
                    </PrimaryButton>
                </div>
            </MyModal>
        </>
    );
}
