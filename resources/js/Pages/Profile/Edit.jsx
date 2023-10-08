
import App from '@/Layouts/App'
import DeleteUserForm from './Partials/DeleteUserForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { Head, usePage } from '@inertiajs/react'
import Container from '@/Components/Container'
import { useState } from 'react'
import SecondaryButton from '@/Components/SecondaryButton'
import { IconCategory, IconLocation, IconMail, IconPhone, IconSquare, IconSquareFilled } from '@tabler/icons-react'
import { numberFormat } from '@/Libs/Helper'

const fillYearData = (dailySalary) => {

    const yearData = []

    dailySalary.forEach(item => {
        const monthIndex = parseInt(item.date.split('-')[1]) - 1
        const day = parseInt(item.date.split('-')[2])

        if (!yearData[monthIndex]) {
            yearData[monthIndex] = {
                month: item.date.split('-')[1],
                days: [],
            }
        }

        // Isi informasi penghasilan per hari
        yearData[monthIndex].days[day - 1] = {
            day,
            total: item.total,
        }
    })

    return yearData
}

export default function Edit({ auth, mustVerifyEmail, status, picture, dailySalary, total_salary }) {

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const yearData = fillYearData(dailySalary)

    const [activeTab, setActiveTab] = useState('Information') // Default active tab
    const tabs = ['Edit', 'Account', 'Delete', 'Information']
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const onHandleTab = () => {
        setActiveTab('Information')
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }


    return (
        <>
            <Head title="Profile" />
            <Container className="py-12 pb-0 w-full flex">
                <div className="md:flex w-full lg:w-3/4 mx-auto gap-4">
                    <div className="w-full sm:w-1/3 flex flex-wrap flex-col gap-4 justify-start mb-6">
                        <img src={auth.user.picture ? picture : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"} alt={auth.user.picture} className='w-[100%] bg-white aspect-square rounded-xl mx-auto' />
                        <div className='px-4'>
                            <h3 className='text-2xl font-semibold mt-8 text-slate-700'>{auth.user.name}</h3>
                            <p className='text-lg mt-0 text-slate-500'>{auth.user.username}</p>
                        </div>
                        <div className='flex px-4 gap-2'>
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
                        <div className='gap-2 px-4 space-y-2 mt-4'>
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
                    <div className="w-full sm:w-2/3 mx-auto items-center">
                        {activeTab === 'Edit' && (
                            <div className="p-4 w-full rounded border border-1 border-gray-300">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="w-full"
                                    onHandleTab={onHandleTab}
                                    picture={picture}
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
                            <>
                                <div className="p-4 w-full space-y-8 rounded border border-1 border-gray-300">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-700">Information System</h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Randa is a point of sales application that is flexible in ordering. Randa itself has sales statistical data. Randa can record finances, orders and even print sales results. The following are promotional materials that can be used for marketing
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-700">Profile Information</h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            So far I have worked from  {formatDate(auth.user.created_at)} till now
                                        </p>
                                    </div>
                                </div>
                                {auth.user && auth.user.status !== "owner" ? <>

                                <div className="p-4 rounded mt-4 border border-1 border-gray-300">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-700">Salary Information</h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            The following is a list of your attendance
                                        </p>
                                    </div>
                                    <div className="w-full py-2 gap-4 flex flex-row-reverse block scrolling-wrapper overflow-x-scroll overflow-y-hidden">
                                        {yearData.map((monthData, index) => {
                                            const year = new Date().getFullYear()
                                            const monthIndex = parseInt(monthData.month) - 1
                                            const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()  // Calculate the number of days in the month
                                            const checkboxes = Array(daysInMonth).fill(false)  // Initialize all checkboxes to false (unchecked)
                                            monthData.days.forEach(day => {
                                                checkboxes[day.day - 1] = true  // Mark checkboxes for days with salary
                                            })

                                            return (
                                                <div key={index} className="flex h-48 w-min">
                                                    <div className="flex flex-col w-32 h-48">
                                                        <p className="text-center text-sm text-slate-700 mb-1">{monthNames[monthIndex]}</p>
                                                        <div className="grid grid-cols-5 w-32 h-48">
                                                            {checkboxes.map((checked, dayIndex) => (
                                                                <span key={dayIndex}>
                                                                    <input className='rounded w-6 border border-gray-400 h-6 text-green-600'
                                                                        type="checkbox"
                                                                        checked={checked}
                                                                        readOnly
                                                                    />
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="p-4 w-full mt-4 mb-12 space-y-8 rounded border border-1 border-gray-300">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-700">Total Salary </h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Total salary this month
                                        </p>
                                        <h1 className="mt-5 text-3xl text-red-500 font-bold text-slate-700">
                                            <sup>Rp.</sup>  {numberFormat(total_salary)}
                                        </h1>
                                    </div>
                                </div>
                                </> : null}
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </>
    )
}

Edit.layout = page => <App children={page} />
