
import App from '@/Layouts/App'
import DeleteUserForm from './Partials/DeleteUserForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { Head } from '@inertiajs/react'
import Container from '@/Components/Container'
import { useState } from 'react'
import SecondaryButton from '@/Components/SecondaryButton'
import { IconCategory, IconLocation, IconMail, IconPhone } from '@tabler/icons-react'

export default function Edit({ auth, mustVerifyEmail, status }) {
    const [activeTab, setActiveTab] = useState('Information') // Default active tab
    const tabs = ['Edit', 'Account', 'Delete', 'Information']

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const onHandleTab = () => {
        setActiveTab("Information")
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <>
            <Head title="Profile" />

            <Container className="py-12 pb-0 w-full flex">
                <div className="flex w-full lg:w-3/4 mx-auto gap-4">
                    <div className="w-1/3 p-4flex flex-col gap-4 justify-start">
                        <img src={auth.user.picture !== "" ? "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" : auth.user.picture} alt={auth.user.picture} className='w-full bg-white aspect-square rounded-xl mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold mt-8 text-slate-700'>{auth.user.name}</h3>
                            <p className='text-lg mt-0 text-slate-500'>{auth.user.username}</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex w-full gap-2'>
                                <SecondaryButton
                                    className={`w-full my-2 text-gray-500 border rounded border-gray-300 hover:bg-orange-500 hover:text-white ${activeTab === 'Edit' ? 'bg-orange-500 border-none text-white' : ''}`}
                                    onClick={() => handleTabClick('Edit')}
                                >
                                    Edit
                                </SecondaryButton>
                                <SecondaryButton
                                    className={`w-full my-2 text-gray-500 border rounded border-gray-300 hover:bg-orange-500 hover:text-white ${activeTab === 'Account' ? 'bg-orange-500 border-none text-white' : ''}`}
                                    onClick={() => handleTabClick('Account')}
                                >
                                    Account
                                </SecondaryButton>
                                <SecondaryButton
                                    className={`w-full my-2 text-gray-500 border rounded border-gray-300 hover:bg-orange-500 hover:text-white ${activeTab === 'Delete' ? 'bg-orange-500 border-none text-white' : ''}`}
                                    onClick={() => handleTabClick('Delete')}
                                >
                                    Delete
                                </SecondaryButton>
                            </div>
                        </div>
                        <div className='gap-2 space-y-2 mt-4'>
                            <div className="flex gap-2 items-center">
                                <IconLocation color='gray' size={20} />
                                <p className='text-base mt-0 text-slate-500'>{auth.user.address}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconMail color='gray' size={20} />
                                <p className='text-base mt-0 text-slate-500'>{auth.user.email}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconPhone color='gray' size={20} />
                                <p className='text-base mt-0 text-slate-500'>{auth.user.number_phone}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconCategory color='gray' size={20} />
                                <p className='text-base mt-0 text-slate-500'>{auth.user.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 mx-auto items-center">
                        {activeTab === 'Edit' && (
                            <div className="p-4 w-full rounded border border-1 border-gray-300">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="w-full"
                                    onHandleTab={onHandleTab}
                                />
                            </div>
                        )}
                        {activeTab === 'Account' && (
                            <div className="p-4 w-full rounded border border-1 border-gray-300">
                                <UpdatePasswordForm className="w-full"
                                    onHandleTab={onHandleTab}
                                />
                            </div>
                        )}
                        {activeTab === 'Delete' && (
                            <div className="p-4 w-full rounded border border-1 border-gray-300">
                                <DeleteUserForm className="w-full" />
                            </div>
                        )}
                        {activeTab === 'Information' && (
                            <div className="p-4 w-full space-y-8 rounded border border-1 border-gray-300">
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">Information System</h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Randa is a point of sales application that is flexible in ordering. Randa itself has sales statistical data. Randa can record finances, orders and even print sales results. The following are promotional materials that can be used for marketing
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        So far I have worked from  {formatDate(auth.user.created_at)} till now
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    )
}

Edit.layout = page => <App children={page} />
