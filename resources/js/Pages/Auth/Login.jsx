import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Guest from "@/Layouts/Guest";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="flex">
                <div className="w-full sm:w-1/2 md:w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between">
                    <div>
                        <img
                            src={`/app/Logo Title X.png`}
                            alt=""
                            width="180px"
                        />
                    </div>
                    <div>
                        <img
                            src={`/app/login.svg`}
                            alt=""
                            width="120%"
                            className="mx-auto"
                        />
                    </div>
                    <div>
                        <h6 className="text-xl font-semibold text-fourth">
                            RANDA
                        </h6>
                        <p className="text-third">
                            Optimizing Business Processes with Point of Sales
                            (POS) Application
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={submit}
                    className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-screen flex flex-col justify-center"
                >
                    <div className="mb-8">
                        <h6 className="text-3xl text-fourth">Welcome Back</h6>
                        <p className="text-third">
                            Please enter your login credentials
                        </p>
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex justify-between mt-4 mb-8">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                value={data.remember}
                                onChange={handleOnChange}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center justify-end">
                        <PrimaryButton disabled={processing}>
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}

Login.layout = (page) => <Guest children={page} />;
