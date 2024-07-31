import {
    j as a,
    F as x,
    a as e,
    y as w,
    r as u,
    q as L,
    W,
    b as U,
    e as X,
} from "./app-50127253.js";
import { c as q, T as j } from "./TextInput-01542f12.js";
import { _ as $, n as V } from "./index-f4d5d2b2.js";
import { n as E } from "./Helper-f0b8910d.js";
import { a as H, I as Q, E as P, M as Y } from "./Toast-5e3f78b2.js";
import { c as f } from "./createReactComponent-f77338bd.js";
import { C as G } from "./Container-58708669.js";
import { N as I } from "./listbox-64a6e69d.js";
import { t as D } from "./transition-42c9a528.js";
import { P as z } from "./PrimaryButton-56a0c82f.js";
import { M as J, I as K } from "./Modal-ca85eed3.js";
import { S as A } from "./SecondaryButton-bc962aa5.js";
import { I as Z } from "./IconMail-755f3598.js";
import { P as ee } from "./Pagination-a95b02de.js";
import { A as le } from "./App-f48d50a9.js";
import { I as ae } from "./IconCategory-615c528c.js";
import "./keyboard-038d4531.js";
var te = f("arrows-maximize", "IconArrowsMaximize", [
        ["path", { d: "M16 4l4 0l0 4", key: "svg-0" }],
        ["path", { d: "M14 10l6 -6", key: "svg-1" }],
        ["path", { d: "M8 20l-4 0l0 -4", key: "svg-2" }],
        ["path", { d: "M4 20l6 -6", key: "svg-3" }],
        ["path", { d: "M16 20l4 0l0 -4", key: "svg-4" }],
        ["path", { d: "M14 14l6 6", key: "svg-5" }],
        ["path", { d: "M8 4l-4 0l0 4", key: "svg-6" }],
        ["path", { d: "M4 4l6 6", key: "svg-7" }],
    ]),
    se = f("arrows-minimize", "IconArrowsMinimize", [
        ["path", { d: "M5 9l4 0l0 -4", key: "svg-0" }],
        ["path", { d: "M3 3l6 6", key: "svg-1" }],
        ["path", { d: "M5 15l4 0l0 4", key: "svg-2" }],
        ["path", { d: "M3 21l6 -6", key: "svg-3" }],
        ["path", { d: "M19 9l-4 0l0 -4", key: "svg-4" }],
        ["path", { d: "M15 9l6 -6", key: "svg-5" }],
        ["path", { d: "M19 15l-4 0l0 4", key: "svg-6" }],
        ["path", { d: "M15 15l6 6", key: "svg-7" }],
    ]),
    re = f("bell", "IconBell", [
        [
            "path",
            {
                d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
                key: "svg-0",
            },
        ],
        ["path", { d: "M9 17v1a3 3 0 0 0 6 0v-1", key: "svg-1" }],
    ]),
    ne = f("cash", "IconCash", [
        [
            "path",
            {
                d: "M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",
                key: "svg-0",
            },
        ],
        [
            "path",
            { d: "M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" },
        ],
        [
            "path",
            {
                d: "M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2",
                key: "svg-2",
            },
        ],
    ]),
    R = f("checks", "IconChecks", [
        ["path", { d: "M7 12l5 5l10 -10", key: "svg-0" }],
        ["path", { d: "M2 12l5 5m5 -5l5 -5", key: "svg-1" }],
    ]),
    ie = f("circle-filled", "IconCircleFilled", [
        [
            "path",
            {
                d: "M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z",
                fill: "currentColor",
                key: "svg-0",
                strokeWidth: "0",
            },
        ],
    ]),
    de = f("click", "IconClick", [
        ["path", { d: "M3 12l3 0", key: "svg-0" }],
        ["path", { d: "M12 3l0 3", key: "svg-1" }],
        ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
        ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
        ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
        ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }],
    ]),
    ce = f("exchange", "IconExchange", [
        [
            "path",
            { d: "M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" },
        ],
        [
            "path",
            { d: "M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" },
        ],
        [
            "path",
            { d: "M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3", key: "svg-2" },
        ],
        [
            "path",
            { d: "M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3", key: "svg-3" },
        ],
    ]),
    oe = f("minus", "IconMinus", [["path", { d: "M5 12l14 0", key: "svg-0" }]]),
    me = f("progress", "IconProgress", [
        [
            "path",
            { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969", key: "svg-0" },
        ],
        ["path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554", key: "svg-1" }],
        [
            "path",
            {
                d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592",
                key: "svg-2",
            },
        ],
        [
            "path",
            {
                d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305",
                key: "svg-3",
            },
        ],
        [
            "path",
            { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356", key: "svg-4" },
        ],
    ]),
    he = f("send", "IconSend", [
        ["path", { d: "M10 14l11 -11", key: "svg-0" }],
        [
            "path",
            {
                d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",
                key: "svg-1",
            },
        ],
    ]),
    pe = f("shopping-bag-plus", "IconShoppingBagPlus", [
        [
            "path",
            {
                d: "M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708",
                key: "svg-0",
            },
        ],
        ["path", { d: "M16 19h6", key: "svg-1" }],
        ["path", { d: "M19 16v6", key: "svg-2" }],
        ["path", { d: "M9 11v-5a3 3 0 0 1 6 0v5", key: "svg-3" }],
    ]),
    B = f("trash-x", "IconTrashX", [
        ["path", { d: "M4 7h16", key: "svg-0" }],
        [
            "path",
            {
                d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",
                key: "svg-1",
            },
        ],
        [
            "path",
            { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" },
        ],
        ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }],
    ]);
function ue({ cart: l }) {
    const s = () => {
            w.post(`/admin/cart/increment/${l.product_slug}`, {
                order_id: l.order_id,
            });
        },
        n = () => {
            w.post(`/admin/cart/decrement/${l.product_slug}`, {
                order_id: l.order_id,
            });
        },
        d = () => {
            w.delete(`/admin/cart/${l.id}`, {
                onSuccess: () => $.success("Delete Item!"),
            });
        },
        c = `/storage/${l.product_picture}`;
    return a(x, {
        children: [
            a("div", {
                className: "flex order py-4 flex-flex-column gap-4",
                children: [
                    a("div", {
                        className: "flex gap-2 w-1/2 sm:w-2/3 overflow-hidden",
                        children: [
                            e("img", {
                                src: l.product_picture
                                    ? c
                                    : "https://via.placeholder.com/80",
                                alt: "",
                                className: "rounded h-16 w-16 hidden md:block",
                            }),
                            a("div", {
                                className: "flex flex flex-col justify-between",
                                children: [
                                    e("h6", {
                                        className: "text-base text-fourth",
                                        children: l.product_name,
                                    }),
                                    a("h5", {
                                        className:
                                            "text-lg font-semibold text-fourth",
                                        children: ["Rp. ", E(l.product_price)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    a("div", {
                        className:
                            "w-1/2 sm:w-1/3 text-end flex flex-col flex-1 justify-between",
                        children: [
                            e(H, {
                                size: 16,
                                color: "red",
                                className: "ml-auto rounded border",
                                onClick: d,
                            }),
                            a("div", {
                                className:
                                    "flex justify-between align-center  mt-5 ",
                                children: [
                                    e(Q, {
                                        size: 32,
                                        className:
                                            "text-white bg-primary border p-1 rounded cursor-pointer",
                                        onClick: s,
                                    }),
                                    e("span", {
                                        className:
                                            "border-0 w-12 px-0 h-8 text-lg text-center mx-auto text-lg",
                                        children: l.quantity,
                                    }),
                                    e(oe, {
                                        size: 32,
                                        className:
                                            l.quantity == 1
                                                ? "bg-gray-400 text-white border p-1 rounded"
                                                : "text-red-500 border p-1 rounded cursor-pointer",
                                        onClick: l.quantity == 1 ? null : n,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e("hr", {}),
        ],
    });
}
function fe({
    className: l = "",
    value: s,
    onChange: n,
    placeholder: d = "Table",
    ...c
}) {
    const [y, i] = u.useState(!1),
        { data: m } = c.data,
        h = m.filter((r) => r.id !== s.id);
    return a(I, {
        as: "div",
        className: "relative rounded",
        value: s,
        onChange: (r) => {
            n(r), i(!0);
        },
        open: y,
        children: [
            a(I.Button, {
                className:
                    "flex h-11 w-full items-center justify-between gap-x-2 rounded border border-gray-300 px-3 focus:outline-none",
                children: [
                    a("span", {
                        className: "capitalize line-clamp-1",
                        children: ["Table ", s.name || s],
                    }),
                    e("div", {
                        onClick: () => i(!y),
                        children: e("svg", {
                            className: "h-5 w-5 text-gray-400",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            stroke: "currentColor",
                            children: e("path", {
                                d: "M7 7l3-3 3 3m0 6l-3 3-3-3",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        }),
                    }),
                ],
            }),
            e(D, {
                as: u.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: e(I.Options, {
                    className:
                        "z-50 absolute right-0 bottom-10 mt-1 max-h-[10rem] w-full overflow-y-auto rounded border border-gray-300 bg-white py-1 shadow-sm",
                    children: h.map((r) =>
                        e(
                            I.Option,
                            {
                                value: r,
                                children: ({ selected: b, active: g }) =>
                                    e("div", {
                                        className: q(
                                            "flex cursor-pointer text-sm items-center py-1.5 px-4",
                                            g && "bg-gray-100",
                                            b &&
                                                "bg-primary-50 font-semibold text-primary-600 hover:bg-primary-100"
                                        ),
                                        children: e("span", {
                                            className:
                                                "capitalize line-clamp-1",
                                            children: "Table " + r.name,
                                        }),
                                    }),
                            },
                            r.id
                        )
                    ),
                }),
            }),
        ],
    });
}
function ge({
    className: l = "",
    value: s,
    onChange: n,
    placeholder: d = "Payment",
    ...c
}) {
    const [y, i] = u.useState(!1),
        { data: m } = c.data,
        h = m.filter((r) => r.id !== s.id);
    return a(I, {
        as: "div",
        className: "relative rounded",
        value: s,
        onChange: (r) => {
            n(r), i(!0);
        },
        open: y,
        children: [
            a(I.Button, {
                className:
                    "flex h-11 w-full items-center justify-between gap-x-2 rounded border border-gray-300 px-3 focus:outline-none",
                children: [
                    e("span", {
                        className: "capitalize line-clamp-1",
                        children: name || s.name || d,
                    }),
                    e("div", {
                        onClick: () => i(!y),
                        children: e("svg", {
                            className: "h-5 w-5 text-gray-400",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            stroke: "currentColor",
                            children: e("path", {
                                d: "M7 7l3-3 3 3m0 6l-3 3-3-3",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        }),
                    }),
                ],
            }),
            e(D, {
                as: u.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: e(I.Options, {
                    className:
                        "z-50 absolute right-0 bottom-10 mt-1 max-h-[10rem] w-full overflow-y-auto rounded border border-gray-300 bg-white py-1 shadow-sm",
                    children: h.map((r) =>
                        e(
                            I.Option,
                            {
                                value: r,
                                children: ({ selected: b, active: g }) =>
                                    e("div", {
                                        className: q(
                                            "flex cursor-pointer text-sm items-center py-1.5 px-4",
                                            g && "bg-gray-100",
                                            b &&
                                                "bg-primary-50 font-semibold text-primary-600 hover:bg-primary-100"
                                        ),
                                        children: a("span", {
                                            className:
                                                "capitalize line-clamp-1",
                                            children: [
                                                "   ",
                                                r.id === s.id ? s.name : r.name,
                                            ],
                                        }),
                                    }),
                            },
                            r.id
                        )
                    ),
                }),
            }),
        ],
    });
}
function xe({ data: l, setData: s, onSubmit: n, carts: d, total_price: c }) {
    let [y, i] = u.useState(!1);
    const [m, h] = u.useState(""),
        [r, b] = u.useState("");
    function g(t) {
        i(!0), b("Invoice"), h(t);
    }
    function N() {
        i(!1);
    }
    const { errors: o, tables: v, payments: _ } = L().props,
        k = (t) => {
            s(t.target.name, t.target.value);
        },
        [M, S] = u.useState(!1),
        O = (t) => {
            const p = t.target.value === 1;
            S(p);
        },
        C = parseFloat(l.charge) || 0,
        T = C - c,
        F = async () => {
            try {
                await w.post(
                    "/admin/send-email",
                    { ...l, carts: d, total_price: c },
                    {
                        onSuccess: () => {
                            i(!1), $.success("Invoice has been send Email");
                        },
                    }
                );
            } catch (t) {
                console.error("Error sending email:", t);
            }
        };
    return a(x, {
        children: [
            e(j, {
                name: "name",
                id: "name",
                className: "w-full",
                onChange: k,
                value: l.name,
                placeholder: "Customer name..",
            }),
            o.name ? e(P, { className: "", value: o.name }) : null,
            a("div", {
                className: "flex items-center gap-4",
                children: [
                    a("div", {
                        className: `w-1/2 ${
                            l.charge != "" ? "w-full" : ""
                        } flex items-center pl-4 border border-gray-300 rounded`,
                        children: [
                            e(j, {
                                id: "bordered-radio-1",
                                type: "radio",
                                checked: l.paid == 1,
                                onChange: (t) => {
                                    k(t), O(t);
                                },
                                value: "1",
                                name: "paid",
                                className:
                                    "w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary",
                            }),
                            e("label", {
                                htmlFor: "bordered-radio-1",
                                className:
                                    "w-full py-2 ml-2 font-medium text-third",
                                children: "Paid Now",
                            }),
                        ],
                    }),
                    a("div", {
                        className: `${
                            l.charge != "" ? "hidden" : ""
                        } w-1/2 flex items-center pl-4 border border-gray-300 rounded`,
                        children: [
                            e(j, {
                                id: "bordered-radio-2",
                                type: "radio",
                                disabled: l.charge != 0 && l.payment_id !== "",
                                checked: l.paid == 2,
                                onChange: (t) => {
                                    k(t), O(t);
                                },
                                value: "2",
                                name: "paid",
                                className:
                                    " w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary",
                            }),
                            e("label", {
                                htmlFor: "bordered-radio-2",
                                className:
                                    "w-full py-2 ml-2 font-medium text-third",
                                children: "Paid Later",
                            }),
                        ],
                    }),
                ],
            }),
            a("div", {
                className: "flex justify-between w-full gap-x-4",
                children: [
                    a("div", {
                        className: "flex flex-col w-full",
                        children: [
                            e(fe, {
                                value: l.table_id,
                                data: v,
                                className: "w-full",
                                placeholder: "Tables",
                                onChange: (t) => s("table_id", t),
                            }),
                            o.table_id
                                ? e(P, { className: "", value: o.table_id })
                                : null,
                        ],
                    }),
                    M || l.paid == 1
                        ? a("div", {
                              className: "flex flex-col w-full",
                              children: [
                                  e(ge, {
                                      value: l.payment_id,
                                      data: _,
                                      className: "w-full",
                                      placeholder: "Payment",
                                      onChange: (t) => s("payment_id", t),
                                  }),
                                  o.payment_id
                                      ? e(P, {
                                            className: "",
                                            value: o.payment_id,
                                        })
                                      : null,
                              ],
                          })
                        : "",
                ],
            }),
            M || l.paid == 1
                ? a(x, {
                      children: [
                          e(j, {
                              type: "number",
                              min: l.paid == 1 ? 1 : "",
                              name: "charge",
                              id: "charge",
                              className: "w-full",
                              value: l.charge,
                              onChange: k,
                              placeholder: "Charge..",
                          }),
                          o.charge
                              ? e(P, { className: "", value: o.charge })
                              : null,
                      ],
                  })
                : "",
            e("div", {
                className: "pb-4 flex items-end flex-1 justify-end",
                children:
                    l.charge != 0 || l.paid == 1
                        ? e(x, {
                              children: e(z, {
                                  type: "button",
                                  onClick: () => g("create"),
                                  disabled:
                                      C < c ||
                                      l.payment_id == "" ||
                                      l.name == "" ||
                                      l.table_id == "",
                                  className:
                                      "bg-violet-600 text-white px-3 py-4 w-full rounded",
                                  children: "Buy",
                              }),
                          })
                        : e(x, {
                              children: e(z, {
                                  className:
                                      "bg-violet-600 text-white px-3 py-4 w-full rounded",
                                  disabled:
                                      v.length == 0 ||
                                      l.name == "" ||
                                      l.table_id == "" ||
                                      l.paid == "",
                                  children: "Confirm",
                              }),
                          }),
            }),
            a(J, {
                isOpen: y,
                onClose: () => i(!1),
                size: "1/3",
                type: m,
                title: r,
                children: [
                    a("div", {
                        className: "mb-6 relative",
                        children: [
                            a("div", {
                                className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none",
                                children: [
                                    e(ne, { color: "green" }),
                                    " ",
                                    e("sup", {
                                        className: "ml-1",
                                        children: "Rp.",
                                    }),
                                ],
                            }),
                            e(j, {
                                type: "number",
                                name: "charge",
                                id: "charge",
                                className: "w-full pl-16",
                                value: l.charge,
                                onChange: k,
                                placeholder: "Charge..",
                            }),
                        ],
                    }),
                    a("div", {
                        className: "mb-6 relative",
                        children: [
                            a("div", {
                                className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none",
                                children: [
                                    e(ce, { color: "orange" }),
                                    " ",
                                    e("sup", {
                                        className: "ml-1",
                                        children: "Rp.",
                                    }),
                                ],
                            }),
                            e("input", {
                                type: "number",
                                readOnly: !0,
                                disabled: !0,
                                name: "change",
                                id: "change",
                                className: "w-full pl-16",
                                value: T,
                                placeholder: "Change..",
                            }),
                        ],
                    }),
                    a("div", {
                        className: "mb-6 relative",
                        children: [
                            e("div", {
                                className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none",
                                children: e(Z, { color: "red" }),
                            }),
                            e("input", {
                                type: "email",
                                name: "email",
                                id: "email",
                                className: "w-full pl-16",
                                onChange: k,
                                value: l.email || "",
                                placeholder: "Email..",
                            }),
                        ],
                    }),
                    a("div", {
                        className: "flex gap-4",
                        children: [
                            e(A, { onClick: () => N(), children: e(K, {}) }),
                            e(z, {
                                onClick: (t) => {
                                    t.preventDefault(), F(), n(t), i(!1);
                                },
                                className:
                                    "bg-orange-600 text-white px-3 py-4 w-full rounded",
                                disabled:
                                    C < c || l.email == null || l.email == "",
                                children: e(he, {}),
                            }),
                            e(z, {
                                onClick: (t) => {
                                    t.preventDefault(), n(t), i(!1);
                                },
                                className:
                                    "bg-violet-600 text-white px-3 py-4 w-full rounded",
                                disabled: C < c,
                                children: e(R, {}),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ye({ invoice: l, onClick: s }) {
    let [n, d] = u.useState(!1);
    const [c, y] = u.useState(""),
        [i, m] = u.useState(""),
        h = (N, o) => {
            const v = new SpeechSynthesisUtterance(
                `Pesanan atas Nama ${N} di Meja ${o}`
            );
            (v.lang = "id-ID"), window.speechSynthesis.speak(v);
        };
    function r(N, o) {
        d(!0), y(o), m(N);
    }
    function b() {
        d(!1);
    }
    const g = (N) => {
        w.post(
            `/admin/invoice/${N}`,
            { _method: "put" },
            {
                onSuccess: () => {
                    d(!1), $.success("Invoice has been added!");
                },
            }
        );
    };
    return a("div", {
        className: "flex gap-x-4 p-2 border border-gray-300 rounded text-white",
        children: [
            e("div", {
                className:
                    "w-20 h-20 bg-sky rounded p-2 flex justify-center items-center",
                children: a("h3", {
                    className: "text-4xl font-semibold text-center",
                    children: ["T", l.table_id],
                }),
            }),
            a("div", {
                className: "flex",
                children: [
                    a("div", {
                        className:
                            "h-16 w-32 text-fourth flex flex-col flex-1 justify-between",
                        children: [
                            e("h5", {
                                className:
                                    "font-semibold text-xl text-fourth truncate",
                                children: l.name,
                            }),
                            a("span", {
                                className: "text-third text-left",
                                children: [l.total_quantity, " Item"],
                            }),
                        ],
                    }),
                    a("div", {
                        className:
                            "flex items-end flex-col flex-1 gap-y-2 h-full justify-between h-16 w-32 text-fourth",
                        children: [
                            e("button", {
                                onClick: () => {
                                    l.charge !== 0 && r(l.order_id, l.name);
                                },
                                className: `font-semibold text-sm flex items-center gap-x-2 py-1 h-full px-2 rounded text-white ${
                                    l.status == 1
                                        ? "bg-green-500"
                                        : "bg-yellow-400"
                                } ${
                                    l.charge == 0 || l.status == 1
                                        ? "cursor-not-allowed"
                                        : ""
                                }`,
                                disabled: l.charge == 0 || l.status == 1,
                                children:
                                    l.charge == 0
                                        ? "In Progress"
                                        : a(x, {
                                              children: [
                                                  l.status == 1
                                                      ? e(R, { size: 26 })
                                                      : e(me, { size: 26 }),
                                                  l.status == 1
                                                      ? "Done"
                                                      : "In Progress",
                                              ],
                                          }),
                            }),
                            a("div", {
                                className:
                                    "text-third h-full flex items-center gap-x-2",
                                children: [
                                    " ",
                                    e(ie, {
                                        size: 16,
                                        className: `${
                                            l.charge !== 0
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`,
                                    }),
                                    l.charge !== 0 ? "Paid" : "Unpaid",
                                ],
                            }),
                        ],
                    }),
                    l.status == 1
                        ? e(x, { children: '""' })
                        : e(x, {
                              children: a("div", {
                                  className:
                                      "flex flex-col justify-between item-center w-8 gap-y-2 ml-2",
                                  children: [
                                      e("button", {
                                          type: "button",
                                          onClick: () => h(l.name, l.table_id),
                                          className:
                                              "flex justify-center items-center rounded bg-primary w-full h-full",
                                          children: e(re, {
                                              size: 26,
                                              className: "p-0 m-0 font-bold",
                                          }),
                                      }),
                                      a("button", {
                                          onClick: s,
                                          className:
                                              "flex justify-center items-center rounded bg-violet w-full h-full",
                                          children: [e(de, {}), "  "],
                                      }),
                                  ],
                              }),
                          }),
                ],
            }),
            e(Y, {
                isToast: n,
                name: "Confirm",
                onClose: () => d(!1),
                title: c,
                children: a("div", {
                    className: "flex justify-end gap-2 justify-center",
                    children: [
                        e(A, { onClick: () => b(), children: "No" }),
                        e(z, { onClick: () => g(i), children: "Yes" }),
                    ],
                }),
            }),
        ],
    });
}
function be({ product: l, setIsOrderListOpen: s }) {
    const n = () => {
        w.post(
            `/admin/cart/${l.slug}`,
            { order_id: l.order_id },
            {
                onSuccess: () => {
                    s(!0), V.success("Add to Cart!");
                },
            }
        );
    };
    return a("div", {
        className:
            "max-h-[420px] mb-4 relative flex flex-1 justify-between flex-col",
        children: [
            e("span", {
                className:
                    "bg-white opacity-50 text-sm text-black absolute p-1 px-1.5 rounded opacity-[0.8] shadow right-4 top-4",
                children: l.category.name,
            }),
            a("div", {
                children: [
                    a("button", {
                        className:
                            "rounded text-center hover:bg-primary hover:text-white flex items-center justify-center bg-white w-16 text-violet h-16 absolute right-4 bottom-32",
                        onClick: n,
                        children: [e(pe, { size: 32 }), "  "],
                    }),
                    e("img", {
                        src: l.picture
                            ? l.picture
                            : "https://via.placeholder.com/400",
                        alt: l.name,
                        className: "rounded h-[300px] w-full",
                    }),
                ],
            }),
            a("div", {
                className: "py-2",
                children: [
                    e("p", {
                        className: "text-third py-4 text-lg",
                        children: l.name,
                    }),
                    a("h6", {
                        className: "text-3xl font-bold text-fourth",
                        children: [
                            " ",
                            e("sup", {
                                className: "font-light",
                                children: " Rp.",
                            }),
                            " ",
                            E(l.price),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ve({
    categories: l,
    total_categories: s,
    carts: n,
    invoices: d,
    tables: c,
    payments: y,
    ...i
}) {
    const [m, h] = u.useState(!0),
        [r, b] = u.useState(null),
        { data: g, meta: N, links: o } = i.products,
        v = n.reduce((t, p) => t + p.price, 0),
        _ = n.reduce((t, p) => t + p.quantity, 0),
        { url: k } = L(),
        { data: M, setData: S } = W({
            id: "",
            name: "",
            table_id: "",
            payment_id: "",
            charge: "",
            order_id: "",
            total_price: "",
            paid: "",
        }),
        O = () => {
            h(!m);
        },
        C = (t) => {
            t
                ? (S({
                      id: t.order_id,
                      name: t.name,
                      charge: t.charge,
                      table_id: t.table_id,
                      paid: t.paid,
                      payment_id: t.payment_id,
                      carts: n,
                      total_price: v,
                      quantity: _,
                  }),
                  w.get(
                      "/admin/transaction",
                      { order_id: t.order_id },
                      { preserveState: !0 }
                  ),
                  b(t),
                  h(!0))
                : (h(!0), b(null));
        },
        T = (t) => {
            t.preventDefault(),
                w.post(
                    "/admin/invoice",
                    {
                        ...M,
                        carts: n,
                        total: v,
                        quantity: _,
                        order_id: M.order_id,
                        table_id: M.table_id.id,
                        payment_id: M.payment_id.id,
                    },
                    {
                        onSuccess: () => {
                            S({
                                id: "",
                                name: "",
                                carts: "",
                                total: "",
                                table_id: "",
                                payment_id: "",
                                charge: "",
                            }),
                                $.success("Invoice has been added!"),
                                h(!1);
                        },
                    }
                );
        },
        F = (t) => {
            w.get(k, { category: t }, {});
        };
    return a(x, {
        children: [
            e(U, { title: "Menu" }),
            e(G, {
                children: a("div", {
                    className: "flex w-full",
                    children: [
                        e("button", {
                            className:
                                "block fixed z-[100] bg-white rounded right-4 top-18 mt-1  p-4 text-primary",
                            onClick: O,
                            children: m ? e(se, {}) : e(te, {}),
                        }),
                        a("div", {
                            className: `bg-white ${m ? "w-3/4" : "w-full"}`,
                            children: [
                                e("h3", {
                                    className:
                                        "text-2xl mt-10 mb-4 font-semibold text-fourth",
                                    children: "Order List",
                                }),
                                e("div", {
                                    className:
                                        "flex w-full scrolling-wrapper overflow-x-scroll overflow-y-hidden pb-1 flex-nowrap gap-x-4",
                                    children:
                                        d.length > 0
                                            ? e(x, {
                                                  children: d.map((t, p) =>
                                                      e(
                                                          ye,
                                                          {
                                                              invoice: t,
                                                              onClick: () =>
                                                                  C(t),
                                                          },
                                                          p
                                                      )
                                                  ),
                                              })
                                            : a("div", {
                                                  className:
                                                      "flex justify-start items-center flex-1",
                                                  children: [
                                                      a("h1", {
                                                          className:
                                                              "text-slate-300 mr-2",
                                                          children: [
                                                              e(B, {
                                                                  size: 32,
                                                              }),
                                                              "  ",
                                                          ],
                                                      }),
                                                      e("p", {
                                                          className:
                                                              "text-third text-lg",
                                                          children:
                                                              "Empty Order List",
                                                      }),
                                                  ],
                                              }),
                                }),
                                e("h3", {
                                    className:
                                        "text-2xl mt-10 mb-4 font-semibold text-fourth",
                                    children: "Categories",
                                }),
                                a("div", {
                                    className:
                                        "flex w-full scrolling-wrapper overflow-x-scroll pb-1 flex-nowrap gap-x-4",
                                    children: [
                                        e(X, {
                                            href: route("admin.transaction"),
                                            className: "flex text-white",
                                            children: a("div", {
                                                className:
                                                    "w-32 h-32 bg-primary rounded p-2 shadow",
                                                children: [
                                                    e(ae, {
                                                        className: "my-2",
                                                    }),
                                                    e("p", {
                                                        className: "block",
                                                        children: "All Menu",
                                                    }),
                                                    a("h6", {
                                                        className:
                                                            "text-lg font-semibold",
                                                        children: [s, " items"],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        l.map((t, p) =>
                                            e(
                                                "button",
                                                {
                                                    onClick: () => F(t.slug),
                                                    className:
                                                        "flex rounded text-white",
                                                    children: a("div", {
                                                        className:
                                                            "w-32 h-32  rounded border border-gray-300 text-slate-600 p-2",
                                                        children: [
                                                            e("div", {
                                                                className:
                                                                    "w-8 h-8 mb-2",
                                                                dangerouslySetInnerHTML:
                                                                    {
                                                                        __html: t.icon,
                                                                    },
                                                            }),
                                                            e("p", {
                                                                className:
                                                                    "text-third",
                                                                children:
                                                                    t.name,
                                                            }),
                                                            a("h6", {
                                                                className:
                                                                    "text-lg font-semibold",
                                                                children: [
                                                                    t.products_count,
                                                                    " items",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                p
                                            )
                                        ),
                                    ],
                                }),
                                a("div", {
                                    className: "w-full",
                                    children: [
                                        e("h3", {
                                            className:
                                                "text-2xl mt-10 mb-4 font-semibold text-fourth",
                                            children: "Special menu for you",
                                        }),
                                        g.length > 0
                                            ? e("div", {
                                                  className: `grid grid-cols-1 sm:grid-cols-2 ${
                                                      m
                                                          ? "md:grid-cols-3"
                                                          : "md:grid-cols-4"
                                                  }  lg:grid-cols-lg-4 gap-4 gap-y-8 w-full flex-wrap`,
                                                  children: g.map((t, p) =>
                                                      e(
                                                          be,
                                                          {
                                                              product: t,
                                                              setIsOrderListOpen:
                                                                  h,
                                                          },
                                                          p
                                                      )
                                                  ),
                                              })
                                            : a("div", {
                                                  className:
                                                      "flex justify-center items-center flex-col flex-1 h-[280px]",
                                                  children: [
                                                      a("h1", {
                                                          className:
                                                              "text-slate-300",
                                                          children: [
                                                              e(B, {
                                                                  size: 64,
                                                              }),
                                                              "  ",
                                                          ],
                                                      }),
                                                      e("p", {
                                                          className:
                                                              "text-third mt-4 text-lg",
                                                          children:
                                                              "Empty Menu",
                                                      }),
                                                  ],
                                              }),
                                        g.length > 0 &&
                                            e(ee, { meta: N, links: o }),
                                    ],
                                }),
                            ],
                        }),
                        a("div", {
                            className: `w-3/4 sm:w-2/5 md:w-1/4 flex flex-col bg-white top-16 right-0 bottom-0 fixed max-h-screen border-l border-b rounded-bl border-gray-300 ml-2 ${
                                m ? "block" : "hidden"
                            }`,
                            children: [
                                a("div", {
                                    className:
                                        "fixed bg top-16 w-full flex flex-col justify-end",
                                    children: [
                                        e("h3", {
                                            className:
                                                "text-xl pl-4 bg-white font-semibold text-fourth py-5",
                                            children: "Order Details",
                                        }),
                                        e("hr", {}),
                                    ],
                                }),
                                e("div", {
                                    className:
                                        "px-4 h-3/6 flex flex-col h-full justify-start bg-white flex-1 pt-16 scrolling-wrapper overflow-y-scroll",
                                    children: e("div", {
                                        className: "flex flex-col flex-1",
                                        children:
                                            n.length > 0
                                                ? e(x, {
                                                      children: n.map((t, p) =>
                                                          e(
                                                              ue,
                                                              {
                                                                  cart: t,
                                                                  selectedOrder:
                                                                      r,
                                                              },
                                                              p
                                                          )
                                                      ),
                                                  })
                                                : a("div", {
                                                      className:
                                                          "flex justify-center items-center flex-col flex-1 h-[280px]",
                                                      children: [
                                                          a("h1", {
                                                              className:
                                                                  "text-slate-300",
                                                              children: [
                                                                  e(B, {
                                                                      size: 64,
                                                                  }),
                                                                  "  ",
                                                              ],
                                                          }),
                                                          e("p", {
                                                              className:
                                                                  "text-third mt-4 text-lg",
                                                              children:
                                                                  "Empty Order",
                                                          }),
                                                      ],
                                                  }),
                                    }),
                                }),
                                e("div", {
                                    className:
                                        "h-max w-full px-4 pb-0 bg-white",
                                    children: a("div", {
                                        className:
                                            "space-y-3 flex flex-col justify-start mb-4",
                                        children: [
                                            e("hr", {}),
                                            a("div", {
                                                className:
                                                    "flex justify-between",
                                                children: [
                                                    e("p", {
                                                        className:
                                                            "text-lg text-third",
                                                        children: "Quantity",
                                                    }),
                                                    e("p", {
                                                        className:
                                                            "text-lg font-bold text-slate-600",
                                                        children: _,
                                                    }),
                                                ],
                                            }),
                                            a("div", {
                                                className:
                                                    "flex justify-between",
                                                children: [
                                                    e("p", {
                                                        className:
                                                            "text-lg font-semibold text-third",
                                                        children: "Total",
                                                    }),
                                                    a("p", {
                                                        className:
                                                            "text-lg font-bold text-slate-600",
                                                        children: [
                                                            "Rp. ",
                                                            E(v),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            a("form", {
                                                onSubmit: T,
                                                className: "w-full space-y-4",
                                                children: [
                                                    e(xe, {
                                                        onSubmit: T,
                                                        total_price: v,
                                                        carts: n,
                                                        data: M,
                                                        setData: S,
                                                    }),
                                                    e("hr", {}),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
ve.layout = (l) => e(le, { children: l });
export { ve as default };
