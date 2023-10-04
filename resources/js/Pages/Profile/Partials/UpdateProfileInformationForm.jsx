import InputError from '@/Components/InputError'
import InputFile from '@/Components/InputFIle'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Select from '@/Components/Select'
import TextInput from '@/Components/TextInput'
import Textarea from '@/Components/Textarea'
import { Link, useForm, usePage, router } from '@inertiajs/react'
import toast from 'react-hot-toast'

export default function UpdateProfileInformation({ mustVerifyEmail, status, className, onHandleTab, picture }) {
    const user = usePage().props.auth.user

    const { data, setData, errors, processing } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        number_phone: user.number_phone,
        address: user.address,
        status: user.status,
        picture: ''
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(route('profile.update'), {
            _method: 'patch',
            ...data,
            status: data.status.na
        }, {
            onSuccess: () => {
                    toast.success('Profile has been updated!')
            }
        })
    }


    const statuses = [
        {
            id: 1,
            name: "owner"

        },
        {
            id: 2,
            name: "admin"
        },
        {
            id: 3,
            name: "employee"
        }
    ];

    return (
        <div className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">

                <div className="mb-6">
                    <InputLabel htmlFor="picture" value="Picture" />
                    <InputFile picture={picture} name='picture' id='picture' className="text-third" onChange={(e) => setData('picture', e.target.files[0])} />
                    {errors.picture ? <Error className='' value={errors.picture} /> : null}
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        className="mt-1 block w-full"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                        isFocused
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.username} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="number_phone" value="Number Phone" />

                    <TextInput
                        id="number_phone"
                        className="mt-1 block w-full"
                        value={data.number_phone}
                        onChange={(e) => setData('number_phone', e.target.value)}
                        required
                        isFocused
                        autoComplete="number_phone"
                    />

                    <InputError className="mt-2" message={errors.number_phone} />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />
                    <Select value={data.status} data={statuses} onChange={(e) => setData('status', e)} />
                {errors.status ? <Error className='' value={errors.status} /> : null}

                    <InputError className="mt-2" message={errors.status} />
                </div>
                <div>
                    <InputLabel htmlFor="address" value="Address" />

                    <Textarea rows="6" name='address' id='address' onChange={(e) => setData('address', e.target.value)} value={data.address} />
                    {errors.address ? <Error className='' value={errors.address} /> : null}

                    <InputError className="mt-2" message={errors.address} />
                </div>


                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <SecondaryButton type='button' onClick={onHandleTab} >Cancel</SecondaryButton>
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                </div>
            </form>
        </div>
    )
}
