import ActionButton from '@/Components/Actionbutton'
import Container from '@/Components/Container'
import Pagination from '@/Components/Pagination'
import Table from '@/Components/Table'
import App from '@/Layouts/App'
import { Head, router, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import TextInput from '@/Components/TextInput'
import { formatDistanceToNow } from 'date-fns'
import Html5QrcodePlugin from '@/Components/Scan'
import toast from 'react-hot-toast'
import { IconMoodSmile, IconMoodSmileDizzy, IconQrcode, IconScan } from '@tabler/icons-react'

const Index = ({ total_presences, qrCodes, ...props }) => {
    const { auth } = usePage().props

    const { data: presences, meta, links } = props.presences

    const [searchQuery, setSearchQuery] = useState('')
    const [isCameraActive, setIsCameraActive] = useState(false)


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        router.get(`/admin/presence`, {
            search: e.target.value
        }, {
            preserveState: true
        })
    }


    const config = {
        interval: 1000,
    }
    const [decodedResults, setDecodedResults] = useState([])
    const onNewScanResult = (decodedText, decodedResult) => {
        config
        router.post(route('admin.presence.store'), {
            decodedText,
            user_id: auth.user.id,
        }, {
            onSuccess: () => toast.success('Presence'),
        })
        setDecodedResults(prev => [...prev, decodedResults])
    }

    const handleOpenCamera = () => {
        setIsCameraActive(true)
    }


    return (
        <>
            <Head title="Presence" />

            {isCameraActive && (
                <Container className="pt-12">
                    <Html5QrcodePlugin
                        className="rounded-lg bg-orange-500"
                        fps={5}
                        qrbox={800}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
                </Container>
            )}
            <Container>
                <div className="flex flex-wrap w-full mt-10">
                    <div className=" mx-auto flex flex-1 items-center justify-center lg:w-1/3 ">
                        <div
                            dangerouslySetInnerHTML={{ __html: qrCodes }}
                        />
                    </div>
                    <div className="p-4 w-full lg:w-2/3">


                        {/* Start Presence */}
                        <h3 className='text-2xl mb-4 font-semibold text-slate-700'>Presence</h3>
                        <div className="flex flex-wrap justify-between w-full items-center my-2">
                            <ActionButton className={`w-12 h-12 ${isCameraActive ? 'cursor-not-allowed' : ""} `} disabled={isCameraActive} type="button" onClick={handleOpenCamera}>
                                {isCameraActive ? <IconQrcode /> : <IconScan />}
                            </ActionButton>


                            <TextInput
                                type="search"
                                className="w-3/4 sm:w-1/4"
                                placeholder="Search menu.."
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
                                        <Table.Th>Presence Date</Table.Th>
                                        <Table.Th>Is Presence</Table.Th>
                                    </tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    {presences.length > 0 ? (
                                        presences.map((presence, index) => (
                                            <tr className="bg-white border-b text-gray-500" key={index}>
                                                <Table.Td className="w-5">{meta.from + index}</Table.Td>
                                                <Table.Td>{presence.user.name}</Table.Td>
                                                <Table.Td>{presence.presence_date}</Table.Td>
                                                <Table.Td className="w-32 text-center">{presence.is_presence == 1 ? <IconMoodSmile color='green' /> : <IconMoodSmileDizzy color='red' />}</Table.Td>
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
                        {presences.length > 0 && (
                            <div className='flex w-full justify-between items-center'>
                                <Pagination meta={meta} links={links} />
                                <p className='text-sm text-slate-500 mt-10'>Total Presence: <span className='font-bold'>{total_presences}</span> </p>
                            </div>
                        )}
                        {/* End Presence */}
                    </div>

                </div>
            </Container>
        </>
    )
}

Index.layout = page => <App children={page} />

export default Index
