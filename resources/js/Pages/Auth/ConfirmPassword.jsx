import { useEffect } from 'react'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, useForm } from '@inertiajs/react'

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('password.confirm'))
    }

    return (
        <>
            <Head title="Confirm Password" />
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
                    <form onSubmit={submit} className='w-full px-4 sm:w-1/3 mx-auto h-screen flex flex-col justify-center'>
                    <div className='mb-8'>
                            <h6 className='text-3xl text-slate-700'>Confirm Password</h6>
                            <p className='text-slate-500'>This is a secure area of the application. Please confirm your password before continuing.</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Confirm
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

ConfirmPassword.layout = page => <Guest children={page} />
