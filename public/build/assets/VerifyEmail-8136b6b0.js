import {
    W as n,
    j as i,
    F as r,
    a as e,
    b as o,
    e as d,
} from "./app-50127253.js";
import { P as m } from "./PrimaryButton-56a0c82f.js";
import { G as c } from "./Guest-6478bd00.js";
import "./index-f4d5d2b2.js";
function u({ status: t }) {
    const { post: s, processing: l } = n({});
    return i(r, {
        children: [
            e(o, { title: "Email Verification" }),
            t === "verification-link-sent" &&
                e("div", {
                    className: "mb-4 font-medium text-sm text-green-600",
                    children:
                        "A new verification link has been sent to the email address you provided during registration.",
                }),
            i("div", {
                className: "flex",
                children: [
                    i("div", {
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
                            i("div", {
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
                        children: i("form", {
                            onSubmit: (a) => {
                                a.preventDefault(),
                                    s(route("verification.send"));
                            },
                            className:
                                "w-full px-4 sm:w-3/4 md:w-1/3 mx-auto h-screen flex flex-col justify-center",
                            children: [
                                i("div", {
                                    className: "mb-8",
                                    children: [
                                        e("h6", {
                                            className: "text-3xl text-fourth",
                                            children: "Verify Email",
                                        }),
                                        e("p", {
                                            className: "text-third",
                                            children:
                                                "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.",
                                        }),
                                    ],
                                }),
                                i("div", {
                                    className:
                                        "mt-4 flex items-center justify-between",
                                    children: [
                                        e(m, {
                                            disabled: l,
                                            children:
                                                "Resend Verification Email",
                                        }),
                                        e(d, {
                                            href: route("logout"),
                                            method: "post",
                                            as: "button",
                                            className:
                                                "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary",
                                            children: "Log Out",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
u.layout = (t) => e(c, { children: t });
export { u as default };
