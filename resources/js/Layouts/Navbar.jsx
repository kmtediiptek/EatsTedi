import React from 'react'
import { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import { Link, router, usePage } from '@inertiajs/react'
import TextInput from '@/Components/TextInput'

export default function Navbar() {
    const { auth } = usePage().props
    const { url } = usePage()
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        console.log(url);
        router.get(url, {
            search : searchQuery
        }, {
            preserveState: true
        })
    }

    return (
        <nav className="bg-white fixed z-[100] top-0 border-b border-gray-300 w-full">
            <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex w-full md:w-3/4 justify-between">
                        <div className='flex items-center w-full'>
                            <Link href="/" className="text-3xl font-bold text-orange-500">
                                RANDA
                                {/* <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" /> */}
                            </Link>
                            {route().current('admin.transaction') ?
                                <div className="px-4 w-full">
                                    <TextInput
                                        type="search"
                                        className="w-full"
                                        placeholder="Search menu.."
                                        defaultValue={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                                :
                                null}

                        </div>

                        <div className="hidden sm:-my-px sm:flex flex justify-between gap-8">
                            <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                                Dashboard
                            </NavLink>
                            <NavLink href={route('admin.transaction')} active={route().current('admin.transaction')}>
                                Menu
                            </NavLink>
                            <NavLink href={route('admin.invoice.index')} active={route().current('admin.invoice.index')}>
                                History
                            </NavLink>
                            <NavLink href={route('admin.activity.index')} active={route().current('admin.activity.index')}>
                                Log
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden w-1/4 flex justify-end sm:flex sm:items-center">
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <div className="flex items-center gap-2">
                                                <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" className='w-10 h-10 rounded-full' />
                                                {auth.user.name}
                                            </div>

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                        Dashboard
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('admin.transaction')} active={route().current('admin.transaction')}>
                        Menu
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('admin.invoice.index')} active={route().current('admin.invoice.index')}>
                        History
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('admin.activity.index')} active={route().current('admin.activity.index')}>
                        Log
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {auth.user.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
