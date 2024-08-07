import React, { useState } from "react";
import {
    IconBell,
    IconChecklist,
    IconChecks,
    IconCheckupList,
    IconCircle,
    IconCircleFilled,
    IconClick,
    IconEyeDollar,
    IconProgress,
} from "@tabler/icons-react";
import toast from "react-hot-toast";
import Toast from "@/Components/Toast";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { router } from "@inertiajs/react";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { IconCircleCheck } from "@tabler/icons-react";

export default function OrderItem({ invoice, onClick }) {
    let [isToast, setIsToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [orderId, setOrderId] = useState("");

    const callVoice = (name) => {
        const speech = new SpeechSynthesisUtterance(
            `Pesanan atas Nama ${name}`
        );
        speech.lang = "id-ID";
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

    return (
        <div className="flex gap-x-2 p-2 w-1/4 border border-secondary rounded text-white">
            <div className="flex w-full gap-x-1">
                <div className="h-16 w-full text-fourth flex flex-col justify-between">
                    <h5 className="w-full font-semibold text-base text-fourth">
                        {invoice.name}
                    </h5>
                    <span className="text-third text-sm text-left">
                        {invoice.total_quantity} Item
                    </span>
                </div>
                <div className="bg-white flex items-end flex-col flex-1 gap-y-2 h-full justify-between h-16 w-full text-fourth">
                    <button
                        onClick={() => {
                            if (invoice.charge !== 0) {
                                openToast(invoice.order_id, invoice.name);
                            }
                        }}
                        className={`font-semibold text-sm flex items-center gap-x-2 h-full px-1 rounded text-white ${
                            invoice.status == 1
                                ? "bg-green-500"
                                : "bg-yellow-400"
                        } ${
                            invoice.charge == 0 || invoice.status == 1
                                ? "cursor-not-allowed"
                                : ""
                        }`}
                        disabled={invoice.charge == 0 || invoice.status == 1}
                    >
                        {invoice.charge == 0 ? (
                            <IconProgress size={26} />
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
                {invoice.status == 1 ? (
                    <>""</>
                ) : (
                    <>
                        <div className="flex flex-col justify-between item-center gap-y-2">
                            <button
                                type="button"
                                onClick={() => callVoice(invoice.name)}
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
        </div>
    );
}
