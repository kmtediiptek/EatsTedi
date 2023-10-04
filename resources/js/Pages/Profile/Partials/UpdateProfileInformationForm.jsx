import InputError from '@/Components/InputError'
import InputFile from '@/Components/InputFIle'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { Link, useForm, usePage } from '@inertiajs/react'

export default function UpdateProfileInformation({ mustVerifyEmail, status, className, onHandleTab }) {
    const user = usePage().props.auth.user

    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        number_phone: user.number_phone,
        address: user.address
    })

    const submit = (e) => {
        e.preventDefault()

        patch(route('profile.update'))
    }

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
                    <InputFile name='picture' id='picture' className="text-third" onChange={(e) => setData('picture', e.target.files[0])} />
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
