import PrimaryButton from '@/Components/PrimaryButton'
import Guest from '@/Layouts/Guest'
import { Head, Link, useForm } from '@inertiajs/react'

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({})

    const submit = (e) => {
        e.preventDefault()

        post(route('verification.send'))
    }

    return (
        <>
            <Head title="Email Verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <div className="flex">
                <div className="w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between">
                    <div>
                        <img src={`/app/Logo Title X.png`} alt="" width="180px" />
                    </div>
                    <div>
                        <img src={`/app/login.svg`} alt="" width="120%" className='mx-auto' />
                    </div>
                    <div>
                        <h6 className='text-xl font-semibold text-slate-700'>RANDA</h6>
                        <p className='text-slate-500'>Optimizing Business Processes with Point of Sales (POS) Application</p>
                    </div>
                </div>
                <div className="w-full sm:w-3/4">
                    <form onSubmit={submit} className='w-full sm:w-1/3 mx-auto h-screen flex flex-col justify-center'>
                        <div className='mb-8'>
                            <h6 className='text-3xl text-slate-700'>Verify Email</h6>
                            <p className='text-slate-500'>Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                                link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <PrimaryButton disabled={processing}>Resend Verification Email</PrimaryButton>

                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

VerifyEmail.layout = page => <Guest children={page} />
