import Container from '@/Components/Container'
import Pagination from '@/Components/Pagination'
import Table from '@/Components/Table'
import App from '@/Layouts/App'
import { Head, router } from '@inertiajs/react'
import React, { useState } from 'react'
import TextInput from '@/Components/TextInput'
import { IconMoodSmile, IconMoodSmileDizzy } from '@tabler/icons-react'

const Index = ({ total_presences, qrCodes, ...props }) => {
    const { data: attendaces, meta, links } = props.attendaces

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        router.get(`/admin/attendace`, {
            search: e.target.value
        }, {
            preserveState: true
        })
    }

    const config = {
        interval: 1000,
    }


    return (
        <>
            <Head title="Attendace" />
            <Container>
                <div className="flex flex-wrap w-full mt-10 mb-4">
                    {/* Start Attendace */}
                    <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Attendace</h3>
                    <div className="flex flex-wrap justify-end w-full my-2">
                        <TextInput
                            type="search"
                            className="w-3/4 sm:w-1/4"
                            placeholder="Search attendace.."
                            defaultValue={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className='w-full'>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th>#</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th>Status</Table.Th>
                                    <Table.Th>Attendace Date</Table.Th>
                                    <Table.Th>Is Attendace</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {attendaces.length > 0 ? (
                                    attendaces.map((attendace, index) => (
                                        <tr className="bg-white border-b text-gray-500" key={index}>
                                            <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                            <Table.Td>{attendace.user.name}</Table.Td>
                                            <Table.Td>
                                                <span classNamgite={`text-xs p-2 ${attendace.user.status == 'employee' ? 'bg-green-500 text-white rounded' : attendace.user.status == 'admin' ? 'bg-yellow-400 text-white rounded' : 'bg-red-500 text-white rounded'}`}>
                                                    {attendace.user.status.toUpperCase()}
                                                </span>
                                            </Table.Td>
                                            <Table.Td>{attendace.presence_date}</Table.Td>
                                            <Table.Td className="w-32 text-center">{attendace.is_presence == 1 ? <IconMoodSmile color='green' /> : <IconMoodSmileDizzy color='red' />}</Table.Td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="bg-white border-b text-gray-500 text-center">
                                        <Table.Td colSpan="5">No data</Table.Td>
                                    </tr>
                                )}
                            </Table.Tbody>
                        </Table>
                    </div>
                    {attendaces.length > 0 && (
                        <div className='flex w-full justify-between items-center'>
                            <Pagination meta={meta} links={links} />
                            <p className='text-sm text-slate-500 mt-10'>Total Attendace: <span className='font-bold'>{total_presences}</span> </p>
                        </div>
                    )}
                    {/* End Attendace */}
                </div>
            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />

export default Index
