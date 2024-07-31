import {
    a as e,
    W as f,
    r as g,
    j as s,
    F as x,
    b as w,
    e as b,
} from "./app-50127253.js";
import { I as o } from "./InputError-2b9a135c.js";
import { I as n } from "./InputLabel-cc2f457d.js";
import { P as N } from "./PrimaryButton-56a0c82f.js";
import { T as c } from "./TextInput-01542f12.js";
import { G as v } from "./Guest-6478bd00.js";
import "./index-f4d5d2b2.js";
function y({ className: a = "", ...r }) {
    return e("input", {
        ...r,
        type: "checkbox",
        className:
            "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
            a,
    });
}
function j({ status: a, canResetPassword: r }) {
    const {
        data: l,
        setData: d,
        post: u,
        processing: p,
        errors: m,
        reset: h,
    } = f({ email: "", password: "", remember: "" });
    g.useEffect(
        () => () => {
            h("password");
        },
        []
    );
    const i = (t) => {
        d(
            t.target.name,
            t.target.type === "checkbox" ? t.target.checked : t.target.value
        );
    };
    return s(x, {
        children: [
            e(w, { title: "Log in" }),
            a &&
                e("div", {
                    className: "mb-4 font-medium text-sm text-green-600",
                    children: a,
                }),
            s("div", {
                className: "flex",
                children: [
                    s("div", {
                        className:
                            "w-full sm:w-1/2 md:w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between",
                        children: [
                            e("div", {
                                children: e("img", {
                                    src: "/app/Logo Title X.png",
                                    alt: "",
                                    width: "180px",
                                }),
                            }),
                            e("div", {
                                children: e("img", {
                                    src: "/app/login.svg",
                                    alt: "",
                                    width: "120%",
                                    className: "mx-auto",
                                }),
                            }),
                            s("div", {
                                children: [
                                    e("h6", {
                                        className:
                                            "text-xl font-semibold text-fourth",
                                        children: "RANDA",
                                    }),
                                    e("p", {
                                        className: "text-third",
                                        children:
                                            "Optimizing Business Processes with Point of Sales (POS) Application",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e("div", {
                        className: "w-full sm:w-3/4",
                        children: s("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), u(route("login"));
                            },
                            className:
                                "w-full px-4 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-screen flex flex-col justify-center",
                            children: [
                                s("div", {
                                    className: "mb-8",
                                    children: [
                                        e("h6", {
                                            className: "text-3xl text-fourth",
                                            children: "Welcome Back",
                                        }),
                                        e("p", {
                                            className: "text-third",
                                            children:
                                                "Please enter your login credentials",
                                        }),
                                    ],
                                }),
                                s("div", {
                                    children: [
                                        e(n, {
                                            htmlFor: "email",
                                            value: "Email",
                                        }),
                                        e(c, {
                                            id: "email",
                                            type: "email",
                                            name: "email",
                                            value: l.email,
                                            className: "mt-1 block w-full",
                                            autoComplete: "username",
                                            isFocused: !0,
                                            onChange: i,
                                        }),
                                        e(o, {
                                            message: m.email,
                                            className: "mt-2",
                                        }),
                                    ],
                                }),
                                s("div", {
                                    className: "mt-4",
                                    children: [
                                        e(n, {
                                            htmlFor: "password",
                                            value: "Password",
                                        }),
                                        e(c, {
                                            id: "password",
                                            type: "password",
                                            name: "password",
                                            value: l.password,
                                            className: "mt-1 block w-full",
                                            autoComplete: "current-password",
                                            onChange: i,
                                        }),
                                        e(o, {
                                            message: m.password,
                                            className: "mt-2",
                                        }),
                                    ],
                                }),
                                s("div", {
                                    className: "flex justify-between mt-4 mb-8",
                                    children: [
                                        s("label", {
                                            className: "flex items-center",
                                            children: [
                                                e(y, {
                                                    name: "remember",
                                                    value: l.remember,
                                                    onChange: i,
                                                }),
                                                e("span", {
                                                    className:
                                                        "ml-2 text-sm text-gray-600",
                                                    children: "Remember me",
                                                }),
                                            ],
                                        }),
                                        r &&
                                            e(b, {
                                                href: route("password.request"),
                                                className:
                                                    "text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                children:
                                                    "Forgot your password?",
                                            }),
                                    ],
                                }),
                                e("div", {
                                    className: "flex items-center justify-end",
                                    children: e(N, {
                                        disabled: p,
                                        children: "Sign In",
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
j.layout = (a) => e(v, { children: a });
export { j as default };
