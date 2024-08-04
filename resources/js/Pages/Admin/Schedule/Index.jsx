import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import MyModal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table";
import Toast from "@/Components/Toast";
import App from "@/Layouts/App";
import { Head, useForm, router } from "@inertiajs/react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TextInput from "@/Components/TextInput";
import ScheduleForm from "@/Components/ScheduleForm";
import ActionLink from "@/Components/ActionLink";

export default function Index({ total_payments, ...props }) {
    const { data: schedules, meta, links } = props.schedules;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        delete: destroy,
        post,
        put,
        data,
        setData,
    } = useForm({
        day: "",
        open: "",
        close: "",
        is_break: "",
    });

    let [isOpen, setIsOpen] = useState(false);
    let [isToast, setIsToast] = useState(false);

    const [modalSchedule, setModalSchedule] = useState("");

    const [toastTitle, setToastTitle] = useState("");

    const [modalType, setModalType] = useState("");

    const [scheduleId, setScheduleId] = useState("");

    function openModalTable(scheduleId, type) {
        setIsOpen(true);
        setModalSchedule("Schedule");
        setModalType(type);
        setScheduleId(scheduleId);
        if (scheduleId) {
            const selectedSchedule = schedules.find(
                (schedule) => schedule.id === scheduleId
            );

            setScheduleId(scheduleId);
            setData({
                day: selectedSchedule.day,
                open: selectedSchedule.open,
                close: selectedSchedule.close,
                is_break: selectedSchedule.is_break,
            });
        } else {
            setScheduleId("");
            setData({
                day: "",
                open: "",
                close: "",
                is_break: "",
            });
        }
    }

    function openToast(scheduleId, title) {
        setIsToast(true);
        setToastTitle(title);
        setScheduleId(scheduleId);
    }

    function onCancelModal() {
        setIsOpen(false);
    }

    function onCancelToast() {
        setIsToast(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.schedule.index"), {
            data,
            onSuccess: () => {
                toast.success("Schedule has been created!");
                setIsOpen(false);
                setData({ day: "", open: "", close: "", is_break: "" });
            },
        });
    };

    const onUpdate = (scheduleId) => (e) => {
        e.preventDefault();
        put(route("admin.schedule.update", scheduleId), {
            ...data,
            onSuccess: () => {
                toast.success("Schedule has been updated!"), setIsOpen(false);
            },
        });
    };

    const onDelete = (scheduleId) => {
        destroy(route("admin.schedule.destroy", scheduleId), {
            onSuccess: () => {
                toast.success("Schedule has been deleted!"), setIsToast(false);
            },
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/setting/schedule`,
            {
                search: e.target.value,
            },
            {
                preserveState: true,
            }
        );
    };
    return (
        <>
            <Head title="Setting" />
            <Container>
                {/* Start Schedules */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Schedules
                </h3>
                <div className="flex justify-between gap-2 w-full item-center my-2">
                    <div className="flex gap-2">
                        <ActionLink href={route("admin.dashboard")} />
                        <ActionButton
                            onClick={() => openModalTable("", "create")}
                            type="button"
                        >
                            <IconPlus size={18} />
                        </ActionButton>
                    </div>
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search schedule.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Day</Table.Th>
                            <Table.Th>Schedule</Table.Th>
                            <Table.Th>Break</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {schedules.length > 0 ? (
                            <>
                                {schedules.map((schedule, index) => (
                                    <tr
                                        className="bg-white border-b"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>{schedule.day}</Table.Td>
                                        <Table.Td>
                                            {schedule.open} - {schedule.close}
                                        </Table.Td>
                                        <Table.Td>
                                            <span
                                                className={`text-xs p-2 ${
                                                    schedule.is_break
                                                        ? "bg-emerald text-white rounded"
                                                        : "bg-violet text-white rounded"
                                                }`}
                                            >
                                                {schedule.is_break ? "Yes" : "No"}
                                            </span>
                                        </Table.Td>
                                        <Table.Td className="w-10">
                                            <div className="flex flex-nowrap gap-2">
                                                <ActionButton
                                                    className="w-8 h-8 bg-yellow-400"
                                                    type="button"
                                                    onClick={() =>
                                                        openModalTable(
                                                            schedule.id,
                                                            "edit"
                                                        )
                                                    }
                                                >
                                                    <IconEdit size={18} />
                                                </ActionButton>
                                                <ActionButton
                                                    className="w-8 h-8 bg-red-500"
                                                    type="button"
                                                    onClick={() =>
                                                        openToast(
                                                            schedule.id,
                                                            "Schedule " +
                                                                schedule.day
                                                        )
                                                    }
                                                >
                                                    <IconTrash size={18} />
                                                </ActionButton>
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <tr className="bg-white border-b text-secondary text-center">
                                <Table.Td colSpan="4">No data</Table.Td>
                            </tr>
                        )}
                    </Table.Tbody>
                </Table>
                {schedules.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Schedules:{" "}
                            <span className="font-bold">{total_payments}</span>{" "}
                        </p>
                    </div>
                )}
                {/* End Schedules */}

                {/* Modal */}
                <MyModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(setIsOpen)}
                    setIsOpen={setIsOpen}
                    size={`1/3`}
                    type={modalType}
                    title={modalSchedule}
                >
                    <form
                        onSubmit={
                            modalType == "create"
                                ? onSubmit
                                : onUpdate(scheduleId)
                        }
                        className="mt-6"
                    >
                        <ScheduleForm {...{ data, setData }} />
                        <div className="flex justify-end gap-2">
                            <SecondaryButton onClick={() => onCancelModal()}>
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton type="submit">
                                {modalType == "create" ? "Create" : "Update"}
                            </PrimaryButton>
                        </div>
                    </form>
                </MyModal>

                {/* Toast */}
                <Toast
                    isToast={isToast}
                    onClose={() => setIsToast(false)}
                    title={toastTitle}
                >
                    <div className="flex justify-end gap-2 justify-center">
                        <SecondaryButton onClick={() => onCancelToast()}>
                            No
                        </SecondaryButton>
                        <PrimaryButton onClick={() => onDelete(scheduleId)}>
                            Yes
                        </PrimaryButton>
                    </div>
                </Toast>
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
