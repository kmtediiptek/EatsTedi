import {
    q as G,
    j as a,
    F as x,
    a as e,
    r as o,
    W as H,
    b as J,
    y as K,
} from "./app-50127253.js";
import { A as g } from "./Actionbutton-61e1fa01.js";
import { I as R } from "./InputLabel-cc2f457d.js";
import { E as S, I as X, a as Z, M as ee } from "./Toast-5e3f78b2.js";
import { T as p } from "./TextInput-01542f12.js";
import { C as te } from "./Container-58708669.js";
import { M as ae } from "./Modal-ca85eed3.js";
import { P as se } from "./Pagination-a95b02de.js";
import { P as C } from "./PrimaryButton-56a0c82f.js";
import { S as P } from "./SecondaryButton-bc962aa5.js";
import { T as s } from "./Table-e4273544.js";
import { A as re } from "./App-f48d50a9.js";
import { _ as N } from "./index-f4d5d2b2.js";
import { A as ne } from "./ActionLink-e34be557.js";
import { I as le } from "./IconEdit-fda570f0.js";
import "./createReactComponent-f77338bd.js";
import "./transition-42c9a528.js";
import "./keyboard-038d4531.js";
function oe({ data: r, setData: f }) {
    const { errors: n } = G().props,
        c = (d) => {
            f(d.target.name, d.target.value);
        };
    return a(x, {
        children: [
            a("div", {
                className: "mb-4",
                children: [
                    e(R, { htmlFor: "name", value: "Name" }),
                    e(p, {
                        name: "name",
                        id: "name",
                        className: "w-full",
                        onChange: c,
                        value: r.name,
                    }),
                    n.name ? e(S, { className: "", value: n.name }) : null,
                ],
            }),
            e("div", {
                className: "mb-4",
                children: a("div", {
                    className: "flex items-center gap-4",
                    children: [
                        a("div", {
                            className: `w-1/2 flex items-center pl-4 border ${
                                r.status === "1"
                                    ? "border-primary"
                                    : "border-gray-300"
                            } rounded`,
                            children: [
                                e(p, {
                                    id: "bordered-radio-1",
                                    type: "radio",
                                    onChange: c,
                                    checked: r.status === "1",
                                    value: "1",
                                    name: "status",
                                    className:
                                        "w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary",
                                }),
                                e("label", {
                                    htmlFor: "bordered-radio-1",
                                    className:
                                        "w-full py-2 ml-2 font-medium text-third",
                                    children: "Active",
                                }),
                            ],
                        }),
                        a("div", {
                            className: `w-1/2 flex items-center pl-4 border ${
                                r.status === "0"
                                    ? "border-primary"
                                    : "border-gray-300"
                            } rounded`,
                            children: [
                                e(p, {
                                    id: "bordered-radio-2",
                                    type: "radio",
                                    onChange: c,
                                    checked: r.status === "0",
                                    value: "0",
                                    name: "status",
                                    className:
                                        "w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary",
                                }),
                                e("label", {
                                    htmlFor: "bordered-radio-2",
                                    className:
                                        "w-full py-2 ml-2 font-medium text-third",
                                    children: "Non Active",
                                }),
                            ],
                        }),
                        n.name ? e(S, { className: "", value: n.name }) : null,
                    ],
                }),
            }),
        ],
    });
}
function ce({ total_payments: r, ...f }) {
    const { data: n, meta: c, links: d } = f.payments,
        [k, A] = o.useState(""),
        { delete: I, post: M, put: j, data: y, setData: m } = H({ name: "" });
    let [F, i] = o.useState(!1),
        [D, u] = o.useState(!1);
    const [z, E] = o.useState(""),
        [$, B] = o.useState(""),
        [b, U] = o.useState(""),
        [v, h] = o.useState("");
    function T(t, l) {
        if ((i(!0), E("Payment"), U(l), h(t), t)) {
            const w = n.find((Y) => Y.slug === t);
            h(t), m({ name: w.name, status: w.status });
        } else h(""), m({ name: "", status: "" });
    }
    function L(t, l) {
        u(!0), B(l), h(t);
    }
    function O() {
        i(!1);
    }
    function Q() {
        u(!1);
    }
    const _ = (t) => {
            t.preventDefault(),
                M(route("admin.payment.index"), {
                    data: y,
                    onSuccess: () => {
                        N.success("Payment has been created!"),
                            i(!1),
                            m({ name: "" });
                    },
                });
        },
        q = (t) => (l) => {
            l.preventDefault(),
                j(route("admin.payment.update", t), {
                    ...y,
                    onSuccess: () => {
                        N.success("Payment has been updated!"), i(!1);
                    },
                });
        },
        V = (t) => {
            I(route("admin.payment.destroy", t), {
                onSuccess: () => {
                    N.success("Payment has been deleted!"), u(!1);
                },
            });
        },
        W = (t) => {
            t.preventDefault(),
                A(t.target.value),
                K.get(
                    "/admin/setting/payment",
                    { search: t.target.value },
                    { preserveState: !0 }
                );
        };
    return a(x, {
        children: [
            e(J, { title: "Setting" }),
            a(te, {
                children: [
                    e("h3", {
                        className:
                            "text-2xl mt-10 mb-4 font-semibold text-fourth",
                        children: "Payments",
                    }),
                    a("div", {
                        className:
                            "flex justify-between gap-2 w-full item-center my-2",
                        children: [
                            a("div", {
                                className: "flex gap-2",
                                children: [
                                    e(ne, { href: route("admin.dashboard") }),
                                    e(g, {
                                        onClick: () => T("", "create"),
                                        type: "button",
                                        children: e(X, { size: 18 }),
                                    }),
                                ],
                            }),
                            e(p, {
                                type: "search",
                                className: "w-3/4 md:w-1/4",
                                placeholder: "Search payment..",
                                defaultValue: k,
                                onChange: W,
                            }),
                        ],
                    }),
                    a(s, {
                        children: [
                            e(s.Thead, {
                                children: a("tr", {
                                    children: [
                                        e(s.Th, { children: "#" }),
                                        e(s.Th, { children: "Name" }),
                                        e(s.Th, { children: "Status" }),
                                        e(s.Th, { children: "Action" }),
                                    ],
                                }),
                            }),
                            e(s.Tbody, {
                                children:
                                    n.length > 0
                                        ? e(x, {
                                              children: n.map((t, l) =>
                                                  a(
                                                      "tr",
                                                      {
                                                          className:
                                                              "bg-white border-b text-secondary",
                                                          children: [
                                                              e(s.Td, {
                                                                  className:
                                                                      "w-5",
                                                                  children:
                                                                      c.from +
                                                                      l,
                                                              }),
                                                              e(s.Td, {
                                                                  children:
                                                                      t.name.toUpperCase(),
                                                              }),
                                                              e(s.Td, {
                                                                  className:
                                                                      "text-left",
                                                                  children: e(
                                                                      "span",
                                                                      {
                                                                          className: `text-xs p-2 ${
                                                                              t.status ==
                                                                              1
                                                                                  ? "bg-sky text-white rounded"
                                                                                  : "bg-emerald text-white rounded"
                                                                          }`,
                                                                          children:
                                                                              t.status ==
                                                                              1
                                                                                  ? "Active"
                                                                                  : "Non Active",
                                                                      }
                                                                  ),
                                                              }),
                                                              e(s.Td, {
                                                                  className:
                                                                      "w-10",
                                                                  children: a(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "flex flex-nowrap gap-2",
                                                                          children:
                                                                              [
                                                                                  e(
                                                                                      g,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-yellow-400",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  T(
                                                                                                      t.slug,
                                                                                                      "edit"
                                                                                                  ),
                                                                                          children:
                                                                                              e(
                                                                                                  le,
                                                                                                  {
                                                                                                      size: 18,
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  e(
                                                                                      g,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-red-500",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  L(
                                                                                                      t.slug,
                                                                                                      "Payment " +
                                                                                                          t.name
                                                                                                  ),
                                                                                          children:
                                                                                              e(
                                                                                                  Z,
                                                                                                  {
                                                                                                      size: 18,
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }
                                                                  ),
                                                              }),
                                                          ],
                                                      },
                                                      l
                                                  )
                                              ),
                                          })
                                        : e("tr", {
                                              className:
                                                  "bg-white border-b text-secondary text-center",
                                              children: e(s.Td, {
                                                  colSpan: "4",
                                                  children: "No data",
                                              }),
                                          }),
                            }),
                        ],
                    }),
                    n.length > 0 &&
                        a("div", {
                            className:
                                "flex w-full justify-between items-center",
                            children: [
                                e(se, { meta: c, links: d }),
                                a("p", {
                                    className: "text-sm text-third mt-10",
                                    children: [
                                        "Total Payments: ",
                                        e("span", {
                                            className: "font-bold",
                                            children: r,
                                        }),
                                        " ",
                                    ],
                                }),
                            ],
                        }),
                    e(ae, {
                        isOpen: F,
                        onClose: () => i(!1),
                        size: "1/3",
                        type: b,
                        title: z,
                        children: a("form", {
                            onSubmit: b == "create" ? _ : q(v),
                            className: "mt-6",
                            children: [
                                e(oe, { data: y, setData: m }),
                                a("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        e(P, {
                                            onClick: () => O(),
                                            children: "Cancel",
                                        }),
                                        e(C, {
                                            type: "submit",
                                            children:
                                                b == "create"
                                                    ? "Create"
                                                    : "Update",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    e(ee, {
                        isToast: D,
                        onClose: () => u(!1),
                        title: $,
                        children: a("div", {
                            className: "flex justify-end gap-2 justify-center",
                            children: [
                                e(P, { onClick: () => Q(), children: "No" }),
                                e(C, { onClick: () => V(v), children: "Yes" }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
ce.layout = (r) => e(re, { children: r });
export { ce as default };
