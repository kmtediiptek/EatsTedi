import {
    j as t,
    a as e,
    q as S,
    r as o,
    F as I,
    b as D,
    e as T,
    y as u,
} from "./app-50127253.js";
import { C as n } from "./Container-58708669.js";
import { P as j } from "./Pagination-a95b02de.js";
import { G as C } from "./Guest-6478bd00.js";
import { n as F } from "./Helper-f0b8910d.js";
import { T as M } from "./TextInput-01542f12.js";
import { I as k } from "./IconCalendarTime-92c6693e.js";
import { I as A } from "./IconCategory-615c528c.js";
import "./index-f4d5d2b2.js";
import "./createReactComponent-f77338bd.js";
function H({ product: r }) {
    return t("div", {
        className:
            "max-h-[420px] mb-4 relative flex flex-1 justify-between flex-col",
        children: [
            e("span", {
                className:
                    "bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4",
                children: r.category.name,
            }),
            e("div", {
                children: e("img", {
                    src: r.picture
                        ? r.picture
                        : "https://via.placeholder.com/400",
                    alt: r.name,
                    className: "rounded h-[200px] sm:h-[300px] w-full",
                }),
            }),
            t("div", {
                className: "py-2",
                children: [
                    e("p", {
                        className: "text-third py-4 text-base sm:text-lg",
                        children: r.name,
                    }),
                    t("h6", {
                        className: "text-xl sm:text-3xl font-bold text-fourth",
                        children: [
                            " ",
                            e("sup", {
                                className: "font-light",
                                children: " Rp.",
                            }),
                            " ",
                            F(r.price),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function J() {
    return e("div", {
        className: "border-t border-violet-800 bg-violet py-10 mt-8 md:mt-16",
        children: e(n, {
            children: t("div", {
                className: "max-w-2xl mx-auto text-center",
                children: [
                    e("img", {
                        src: "/app/Logo.png",
                        alt: "",
                        width: "80",
                        className: "mx-auto",
                    }),
                    e("p", {
                        className: "mt-5 text-gray-300",
                        children:
                            "Thank you for choosing RANDA as your place to enjoy delicious dishes and an unforgettable cafe experience. We really appreciate your support and our commitment is to provide the best quality and invaluable customer satisfaction.",
                    }),
                    t("p", {
                        className: "mt-8 text-slate-200 font-mono text-xs",
                        children: [
                            "Copyright ",
                            new Date().getFullYear(),
                            " All right reserved.",
                        ],
                    }),
                ],
            }),
        }),
    });
}
function O({
    categories: r,
    total_categories: P,
    payments: _,
    schedules: h,
    ...p
}) {
    const { url: c } = S(),
        { data: d, meta: x, links: f } = p.products,
        [m, g] = o.useState(""),
        y = (a) => {
            a.preventDefault(),
                g(a.target.value),
                u.get(c, { search: m }, { preserveState: !0 });
        },
        N = (a) => {
            u.get(c, { category: a }, {});
        },
        [l, b] = o.useState({
            dayName: "",
            day: "",
            month: "",
            year: "",
            hours: "",
            minutes: "",
            seconds: "",
        });
    return (
        o.useEffect(() => {
            const i = setInterval(() => {
                const s = new Date(),
                    v = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                    ],
                    w = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ];
                b({
                    dayName: v[s.getDay()],
                    day: s.getDate(),
                    month: w[s.getMonth()],
                    year: s.getFullYear(),
                    hours: s.getHours().toString().padStart(2, "0"),
                    minutes: s.getMinutes().toString().padStart(2, "0"),
                    seconds: s.getSeconds().toString().padStart(2, "0"),
                });
            }, 1e3);
            return () => clearInterval(i);
        }, []),
        t(I, {
            children: [
                e(D, { title: "Our Menus" }),
                t(n, {
                    className: "w-full text-center pt- p4b-0",
                    children: [
                        t("div", {
                            className: "w-full mt-4",
                            children: [
                                e("div", {
                                    children: e("h3", {
                                        className:
                                            "text-fourth text-3xl font-semibold",
                                        children: "Our Menus",
                                    }),
                                }),
                                e("div", {
                                    className: "w-full mt-4",
                                    children: e("h5", {
                                        className: "text-slate-600 text-xl",
                                        children:
                                            " Here are some of the products we present to you",
                                    }),
                                }),
                            ],
                        }),
                        t("div", {
                            className: "w-full mt-4",
                            children: [
                                e("p", {
                                    className: "text-third",
                                    children:
                                        "In our diverse menu, there are various choices of mouth-watering food and drinks.",
                                }),
                                e("p", {
                                    className: "text-third",
                                    children:
                                        "Starting from fresh and aromatic specialty coffee, delicious light dishes, to indulgent main dishes, we offer a variety of choices that can satisfy every customer's desires and tastes.",
                                }),
                            ],
                        }),
                    ],
                }),
                e(n, {
                    children: t("div", {
                        className: "flex flex-wrap md:flex-nowrap w-full gap-4",
                        children: [
                            e("div", {
                                className:
                                    "w-full md:w-3/4 flex block rounded scrolling-wrapper relative gap-4 overflow-x-scroll flex-nowrap",
                                children: h.map((a, i) =>
                                    t(
                                        "div",
                                        {
                                            className:
                                                "flex w-full py-4 items-center gap-2 text-center border border-gray-300 p-3 rounded",
                                            children: [
                                                e(k, {
                                                    size: 50,
                                                    className: "text-violet/70",
                                                }),
                                                t("div", {
                                                    className:
                                                        "flex flex-col items-start",
                                                    children: [
                                                        e("div", {
                                                            className:
                                                                "flex gap-2 ",
                                                            children: e("h6", {
                                                                className:
                                                                    "text-third font-semibold",
                                                                children: a.day,
                                                            }),
                                                        }),
                                                        e("div", {
                                                            className:
                                                                "flex gap-2 w-32",
                                                            children: t(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-third ",
                                                                    children: [
                                                                        a.open,
                                                                        "-",
                                                                        a.close,
                                                                    ],
                                                                }
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        i
                                    )
                                ),
                            }),
                            e("div", {
                                className: "w-full md:w-1/4",
                                children: t("div", {
                                    className:
                                        "flex flex-col py-4 rounded border border-gray-300",
                                    children: [
                                        t("h6", {
                                            className:
                                                "text-center w-full text-xl text-slate-600",
                                            children: [
                                                l.dayName,
                                                ", ",
                                                l.month,
                                                " ",
                                                l.day,
                                                " ",
                                                l.year,
                                            ],
                                        }),
                                        t("h1", {
                                            className:
                                                "text-center w-full text-4xl font-bold text-fourth",
                                            children: [
                                                l.hours,
                                                ":",
                                                l.minutes,
                                                ":",
                                                l.seconds,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                e(n, {
                    className: "",
                    children: t("div", {
                        className:
                            "w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-start",
                        children: [
                            e("div", {
                                className: "w-full",
                                children: e(M, {
                                    type: "search",
                                    className:
                                        "w-full border-r border-b-none border-r ",
                                    placeholder: "Search menu..",
                                    defaultValue: m,
                                    onChange: y,
                                }),
                            }),
                            t("div", {
                                className:
                                    "w-full flex relative rounded scrolling-wrapper border border-gray-300 relative gap-x-4 overflow-x-scroll flex-nowrap",
                                children: [
                                    t(T, {
                                        href: route("home.index"),
                                        className:
                                            "px-2 gap-x-2 flex text-white text-slate-600 border-gray-300 border-r",
                                        children: [
                                            e(A, {
                                                className: "my-2 text-primary",
                                                size: 20,
                                            }),
                                            e("div", {
                                                className:
                                                    "flex h-10 items-center justify-center",
                                                children: e("p", {
                                                    className:
                                                        "text-third font-semibold pr-2",
                                                    children: "All",
                                                }),
                                            }),
                                        ],
                                    }),
                                    r.map((a, i) =>
                                        t(
                                            "button",
                                            {
                                                onClick: () => N(a.slug),
                                                className:
                                                    "justify-between gap-x-2 flex items-center text-white border-gray-300 text-slate-600 border-r",
                                                children: [
                                                    e("div", {
                                                        className:
                                                            "my-2 text-primary",
                                                        dangerouslySetInnerHTML:
                                                            { __html: a.icon },
                                                    }),
                                                    e("div", {
                                                        className:
                                                            "flex h-10 items-center justify-center",
                                                        children: e("p", {
                                                            className:
                                                                "text-third font-semibold pr-2",
                                                            children: a.name,
                                                        }),
                                                    }),
                                                ],
                                            },
                                            i
                                        )
                                    ),
                                ],
                            }),
                        ],
                    }),
                }),
                t(n, {
                    children: [
                        e("h3", {
                            className:
                                "text-2xl mb-4 font-semibold text-fourth",
                            children: "Special menu for you",
                        }),
                        d.length
                            ? e("div", {
                                  className:
                                      "grid grid-cols-2 sm:grid-cols-3 w-full md:grid-cols-4 lg:grid-cols-5 sm:gap-10 gap-4",
                                  children: d.map((a) =>
                                      e(H, { product: a }, a.slug)
                                  ),
                              })
                            : null,
                    ],
                }),
                e(n, {
                    className: "flex justify-center",
                    children: e(j, { meta: x, links: f }),
                }),
                e(J, {}),
            ],
        })
    );
}
O.layout = (r) => e(C, { children: r });
export { O as default };
