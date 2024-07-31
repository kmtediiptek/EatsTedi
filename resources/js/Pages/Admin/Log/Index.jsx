import ActionButton from "@/Components/Actionbutton";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/App";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import { formatDistanceToNow } from "date-fns";
import ActionLink from "@/Components/ActionLink";

const formatDate = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

const Index = ({ total_activities, ...props }) => {
    const { data: activities, meta, links } = props.activities;

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/admin/activity`,
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
            <Head title="Activity" />
            <Container>
                {/* Start Activity */}
                <h3 className="text-2xl mt-10 mb-4 font-semibold text-fourth">
                    Activity
                </h3>
                <div className="flex flex-wrap justify-between gap-2 w-full my-2">
                    <ActionLink href={route("admin.dashboard")} />
                    <TextInput
                        type="search"
                        className="w-3/4 md:w-1/4"
                        placeholder="Search menu.."
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-full">
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>#</Table.Th>
                                <Table.Th>Activity</Table.Th>
                                <Table.Th>Created At</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {activities.length > 0 ? (
                                activities.map((activity, index) => (
                                    <tr
                                        className="bg-white border-b text-secondary"
                                        key={index}
                                    >
                                        <Table.Td className="w-5">
                                            {meta.from + index}
                                        </Table.Td>
                                        <Table.Td>{activity.activity}</Table.Td>
                                        <Table.Td>
                                            {formatDate(activity.created_at)}
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="bg-white border-b text-secondary text-center">
                                    <Table.Td colSpan="4">No data</Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </div>
                {activities.length > 0 && (
                    <div className="flex w-full justify-between items-center">
                        <Pagination meta={meta} links={links} />
                        <p className="text-sm text-third mt-10">
                            Total Activity:{" "}
                            <span className="font-bold">
                                {total_activities}
                            </span>{" "}
                        </p>
                    </div>
                )}
                {/* End Activity */}
            </Container>
        </>
    );
};

Index.layout = (page) => <App children={page} />;

export default Index;
