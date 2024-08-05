import React, { useState } from "react";
import {
    IconBell,
    IconChecks,
    IconCircleFilled,
    IconClick,
    IconProgress,
} from "@tabler/icons-react";
import toast from "react-hot-toast";
import Toast from "@/Components/Toast";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { router } from "@inertiajs/react";

export default function OrderItem({ invoice, onClick }) {
    let [isToast, setIsToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [orderId, setOrderId] = useState("");

    const callVoice = (name, table) => {
        const speech = new SpeechSynthesisUtterance(
            `Pesanan atas Nama ${name} di Meja ${table}`
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
        <div className="flex gap-x-4 p-2 border border-gray-300 rounded text-white">
            <div className="w-20 h-20 bg-sky rounded p-2 flex justify-center items-center"></div>
            <div className="flex">
                <div className="h-16 w-32 text-fourth flex flex-col flex-1 justify-between">
                    <h5 className="font-semibold text-xl text-fourth truncate">
                        {invoice.name}
                    </h5>
                    <span className="text-third text-left">
                        {invoice.total_quantity} Item
                    </span>
                </div>
                <div className="flex items-end flex-col flex-1 gap-y-2 h-full justify-between h-16 w-32 text-fourth">
                    <button
                        onClick={() => {
                            if (invoice.charge !== 0) {
                                openToast(invoice.cart_id, invoice.name);
                            }
                        }}
                        className={`font-semibold text-sm flex items-center gap-x-2 py-1 h-full px-2 rounded text-white ${
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
                            "In Progress"
                        ) : (
                            <>
                                {invoice.status == 1 ? (
                                    <IconChecks size={26} />
                                ) : (
                                    <IconProgress size={26} />
                                )}
                                {invoice.status == 1 ? "Done" : "In Progress"}
                            </>
                        )}
                    </button>
                    <div className="text-third h-full flex items-center gap-x-2">
                        {" "}
                        <IconCircleFilled
                            size={16}
                            className={`${
                                invoice.charge !== 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        />
                        {invoice.charge !== 0 ? "Paid" : "Unpaid"}
                    </div>
                </div>
                {invoice.status == 1 ? (
                    <>""</>
                ) : (
                    <>
                        <div className="flex flex-col justify-between item-center w-8 gap-y-2 ml-2">
                            <button
                                type="button"
                                onClick={() =>
                                    callVoice(invoice.name)
                                }
                                className="flex justify-center items-center rounded bg-primary w-full h-full"
                            >
                                <IconBell
                                    size={26}
                                    className="p-0 m-0 font-bold"
                                />
                            </button>
                            <button
                                onClick={onClick}
                                className="flex justify-center items-center rounded bg-violet w-full h-full"
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
