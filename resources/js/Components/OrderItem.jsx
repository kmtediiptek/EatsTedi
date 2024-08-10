import React, { useState } from "react";
import {
    IconBell,
    IconCash,
    IconChecks,
    IconCircle,
    IconClick,
    IconExchange,
    IconMoodDollar,
    IconProgress,
    IconSend,
    IconX,
    IconCircleCheck,
} from "@tabler/icons-react";
import toast from "react-hot-toast";
import Toast from "@/Components/Toast";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { router } from "@inertiajs/react";
import MyModal from "./Modal";
import TextInput from "./TextInput";

export default function OrderItem({ invoice, onClick }) {
    let [isToast, setIsToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [orderId, setOrderId] = useState("");

    const callVoice = (customer_name) => {
        const speech = new SpeechSynthesisUtterance(
            `The order under the name ${customer_name} has been completed`
        );
        window.speechSynthesis.speak(speech);
    };

    function openToast(orderId, title) {
        setIsToast(true);
        setToastTitle(title);
        setOrderId(orderId);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onUpdate = (orderId) => {
        router.post(
            `/admin/invoice/${orderId}`,
            {
                _method: "put",
            },
            {
                onSuccess: () => {
                    setIsToast(false);
                    toast.success("Invoice has been added!");
                },
            }
        );
    };

    // Open Modal Payment
    const [data, setData] = useState({ charge: invoice.charge });
    const [change, setChange] = useState(invoice.total_price); // State untuk change
    let [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [modalPayment, setModalPayment] = useState("");

    function openModalOrder(type) {
        setIsOpen(true);
        setModalPayment("Invoice");
        setModalType(type);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });

        if (name === "charge") {
            const chargeValue = parseFloat(value) || 0;
            const totalPrice = parseFloat(invoice.total_price);
            const calculatedChange = chargeValue - totalPrice;
            setChange(calculatedChange);
        }
    };

    const onPay = (e) => {
        e.preventDefault();
        router.put(
            `/admin/invoice/${invoice.id}/pay`,
            {
                ...data,
                charge: data.charge,
            },
            {
                onSuccess: () => {
                    setData({
                        id: "",
                        charge: "",
                    }),
                        toast.success("Order has been paid!");
                    setIsOrderListOpen(false);
                },
            }
        );
    };

    return (
        <div className="flex gap-x-2 p-2 w-1/5 border border-secondary rounded text-white">
            <div className="flex w-full gap-x-1">
                <div className="h-16 w-full text-fourth flex flex-col justify-between">
                    <h5 className="w-full font-semibold text-base text-fourth">
                        {invoice.customer_name}
                    </h5>
                    <span className="text-third text-sm text-left">
                        {invoice.total_quantity} Item
                    </span>
                </div>
                <div className="bg-white flex items-end flex-col flex-1 gap-y-2 h-full justify-between h-16 w-full text-fourth">
                    <button
                        className="bg-emerald font-semibold text-sm flex items-center gap-x-2 h-full px-1 rounded text-white"
                        type="button"
                        onClick={() => openModalOrder("create")}
                        disabled={invoice.charge != 0}
                    >
                        {invoice.charge == 0 ? (
                            <IconMoodDollar size={26} />
                        ) : (
                            <>
                                {invoice.status == 1 ? (
                                    <IconChecks size={26} />
                                ) : (
                                    <IconProgress size={26} />
                                )}
                            </>
                        )}
                    </button>
                    <div className="bg-sky font-semibold text-sm flex items-center gap-x-2 h-full px-1 rounded text-white">
                        {" "}
                        {invoice.charge == 0 ? (
                            <IconCircle size={26} />
                        ) : (
                            <IconCircleCheck size={26} />
                        )}
                    </div>
                </div>
                {invoice.status == 1 ? null : (
                    <>
                        <div className="flex flex-col justify-between item-center gap-y-2">
                            <button
                                type="button"
                                onClick={() => callVoice(invoice.customer_name)}
                                className="flex justify-center items-center rounded bg-primary px-1 h-full"
                            >
                                <IconBell
                                    size={26}
                                    className="p-0 m-0 font-bold"
                                />
                            </button>
                            <button
                                onClick={onClick}
                                className="flex justify-center items-center rounded bg-violet px-1 h-full"
                            >
                                <IconClick />{" "}
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Toast */}
            <Toast
                isToast={isToast}
                name="Confirm"
                onClose={() => setIsToast(false)}
                title={toastTitle}
            >
                <div className="flex justify-end gap-2 justify-center">
                    <SecondaryButton onClick={() => onCancelToast()}>
                        No
                    </SecondaryButton>
                    <PrimaryButton onClick={() => onUpdate(orderId)}>
                        Yes
                    </PrimaryButton>
                </div>
            </Toast>

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
                        value={data.charge || ""}
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
                        value={change}
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
                            onPay(e);
                            setIsOpen(false);
                        }}
                        className="bg-primary text-white px-3 py-4 w-full rounded"
                        disabled={change < 0 || data.charge === ""}
                    >
                        <IconChecks />
                    </PrimaryButton>
                </div>
            </MyModal>
        </div>
    );
}
