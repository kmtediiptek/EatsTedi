import ActionButton from '@/Components/Actionbutton'
import Container from '@/Components/Container'
import Pagination from '@/Components/Pagination'
import Table from '@/Components/Table'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'
import TextInput from '@/Components/TextInput'
import { formatDistanceToNow } from 'date-fns'

const formatDate = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}

const Index = ({ total_activities, ...props }) => {
    const { data: activities, meta, links } = props.activities

    const [searchQuery, setSearchQuery] = useState('')

    const filteredInvoices = activities.filter(activity =>
        activity.activity.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10)

    return (
        <>
            <Head title="Activity" />
            <Container>
                {/* Start Activity */}
                <h3 className='text-2xl mt-10 mb-4 font-semibold text-slate-700'>Activity</h3>
                <div className="flex flex-wrap justify-end w-full items-center my-2">
                    <TextInput
                        id="searchQuery"
                        type="text"
                        className='w-full md:w-1/4 rounded border-gray-300 py-1 focus:ring-purple-300 focus:border-purple-600'
                        placeholder='Search activity..'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>#</Table.Th>
                                <Table.Th>Activity</Table.Th>
                                <Table.Th>Created At</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {filteredInvoices.length > 0 ? (
                                filteredInvoices.map((activity, index) => (
                                    <tr className="bg-white border-b text-gray-500" key={index}>
                                        <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                        <Table.Td>{activity.activity}</Table.Td>
                                        <Table.Td>{formatDate(activity.created_at)}</Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="bg-white border-b text-gray-500 text-center">
                                    <Table.Td colSpan="4">No data</Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </div>
                {activities.length > 0 && (
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-slate-500 mt-10'>Total Activity: <span className='font-bold'>{total_activities}</span> </p>
                    </div>
                )}
                {/* End Activity */}
            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />

export default Index
