import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, useForm } from '@inertiajs/react'
import Guest from '@/Layouts/Guest'
import toast from 'react-hot-toast'

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    })

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('password.email'))
    }

    return (
        <>
            <Head title="Forgot Password" />
            {status && toast.success(status)}
            <div className="flex">
                <div className="w-1/4 border-r p-8 py-16 flex flex-col justify-between">
                    <div>
                        <img src={`/app/Logo Title X.png`} alt="" width="180px" />
                    </div>
                    <div>
                        <img src={`/app/forgot.svg`} alt="" width="120%" className='mx-auto' />
                    </div>
                    <div>
                        <h6 className='text-xl font-semibold text-slate-700'>RANDA</h6>
                        <p className='text-slate-500'>Optimizing Business Processes with Point of Sales (POS) Application</p>
                    </div>
                </div>
                <div className="w-3/4">
                    <form onSubmit={submit} className='w-1/3 mx-auto h-screen flex flex-col justify-center'>
                        <div className='mb-8'>
                            <h6 className='text-3xl text-slate-700'>Forgot Password</h6>
                            <p className='text-slate-500'> Forgot your password? No problem. Just let us know your email address and we will email you a password
                                reset link that will allow you to choose a new one.</p>
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={onHandleChange}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

ForgotPassword.layout = page => <Guest children={page} />
