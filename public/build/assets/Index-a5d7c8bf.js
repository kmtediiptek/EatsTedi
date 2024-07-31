import {
    q as H,
    j as a,
    F as x,
    a as e,
    r as c,
    W as J,
    b as K,
    y as R,
} from "./app-50127253.js";
import { A as N } from "./Actionbutton-61e1fa01.js";
import { C as X } from "./Container-58708669.js";
import { M as Z } from "./Modal-ca85eed3.js";
import { P as ee } from "./Pagination-a95b02de.js";
import { P as I } from "./PrimaryButton-56a0c82f.js";
import { S as M } from "./SecondaryButton-bc962aa5.js";
import { T as s } from "./Table-e4273544.js";
import { E as T, I as te, a as ae, M as se } from "./Toast-5e3f78b2.js";
import { A as le } from "./App-f48d50a9.js";
import { _ as v } from "./index-f4d5d2b2.js";
import { T as p } from "./TextInput-01542f12.js";
import { I as g } from "./InputLabel-cc2f457d.js";
import { A as ne } from "./ActionLink-e34be557.js";
import { I as oe } from "./IconEdit-fda570f0.js";
import "./transition-42c9a528.js";
import "./keyboard-038d4531.js";
import "./createReactComponent-f77338bd.js";
function ce({ data: o, setData: f }) {
    const { errors: l } = H().props,
        r = (i) => {
            f(i.target.name, i.target.value);
        };
    return a(x, {
        children: [
            a("div", {
                className: "mb-6",
                children: [
                    e(g, { htmlFor: "day", value: "Day" }),
                    e(p, {
                        name: "day",
                        id: "day",
                        className: "w-full",
                        onChange: r,
                        value: o.day,
                    }),
                    l.day ? e(T, { className: "", value: l.day }) : null,
                ],
            }),
            a("div", {
                className: "mb-6",
                children: [
                    e(g, { htmlFor: "open", value: "Open" }),
                    e(p, {
                        name: "open",
                        type: "time",
                        id: "open",
                        className: "w-full",
                        onChange: r,
                        value: o.open,
                    }),
                    l.open ? e(T, { className: "", value: l.open }) : null,
                ],
            }),
            a("div", {
                className: "mb-6",
                children: [
                    e(g, { htmlFor: "close", value: "Close" }),
                    e(p, {
                        name: "close",
                        id: "close",
                        type: "time",
                        className: "w-full",
                        onChange: r,
                        value: o.close,
                    }),
                    l.close ? e(T, { className: "", value: l.close }) : null,
                ],
            }),
        ],
    });
}
function re({ total_payments: o, ...f }) {
    const { data: l, meta: r, links: i } = f.schedules,
        [j, k] = c.useState(""),
        {
            delete: A,
            post: D,
            put: F,
            data: y,
            setData: m,
        } = J({ day: "", open: "", close: "" });
    let [P, d] = c.useState(!1),
        [z, u] = c.useState(!1);
    const [E, B] = c.useState(""),
        [O, L] = c.useState(""),
        [S, Q] = c.useState(""),
        [w, h] = c.useState("");
    function C(t, n) {
        if ((d(!0), B("Schedule"), Q(n), h(t), t)) {
            const b = l.find((G) => G.id === t);
            h(t), m({ day: b.day, open: b.open, close: b.close });
        } else h(""), m({ day: "", open: "", close: "" });
    }
    function U(t, n) {
        u(!0), L(n), h(t);
    }
    function _() {
        d(!1);
    }
    function q() {
        u(!1);
    }
    const V = (t) => {
            t.preventDefault(),
                D(route("admin.schedule.index"), {
                    data: y,
                    onSuccess: () => {
                        v.success("Schedule has been created!"),
                            d(!1),
                            m({ day: "", open: "", close: "" });
                    },
                });
        },
        W = (t) => (n) => {
            n.preventDefault(),
                F(route("admin.schedule.update", t), {
                    ...y,
                    onSuccess: () => {
                        v.success("Schedule has been updated!"), d(!1);
                    },
                });
        },
        Y = (t) => {
            A(route("admin.schedule.destroy", t), {
                onSuccess: () => {
                    v.success("Schedule has been deleted!"), u(!1);
                },
            });
        },
        $ = (t) => {
            t.preventDefault(),
                k(t.target.value),
                R.get(
                    "/admin/setting/schedule",
                    { search: t.target.value },
                    { preserveState: !0 }
                );
        };
    return a(x, {
        children: [
            e(K, { title: "Setting" }),
            a(X, {
                children: [
                    e("h3", {
                        className:
                            "text-2xl mt-10 mb-4 font-semibold text-fourth",
                        children: "Schedules",
                    }),
                    a("div", {
                        className:
                            "flex justify-between gap-2 w-full item-center my-2",
                        children: [
                            a("div", {
                                className: "flex gap-2",
                                children: [
                                    e(ne, { href: route("admin.dashboard") }),
                                    e(N, {
                                        onClick: () => C("", "create"),
                                        type: "button",
                                        children: e(te, { size: 18 }),
                                    }),
                                ],
                            }),
                            e(p, {
                                type: "search",
                                className: "w-3/4 md:w-1/4",
                                placeholder: "Search schedule..",
                                defaultValue: j,
                                onChange: $,
                            }),
                        ],
                    }),
                    a(s, {
                        children: [
                            e(s.Thead, {
                                children: a("tr", {
                                    children: [
                                        e(s.Th, { children: "#" }),
                                        e(s.Th, { children: "Day" }),
                                        e(s.Th, { children: "Schedule" }),
                                        e(s.Th, { children: "Action" }),
                                    ],
                                }),
                            }),
                            e(s.Tbody, {
                                children:
                                    l.length > 0
                                        ? e(x, {
                                              children: l.map((t, n) =>
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
                                                                      r.from +
                                                                      n,
                                                              }),
                                                              e(s.Td, {
                                                                  children:
                                                                      t.day,
                                                              }),
                                                              a(s.Td, {
                                                                  children: [
                                                                      t.open,
                                                                      " - ",
                                                                      t.close,
                                                                  ],
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
                                                                                      N,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-yellow-400",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  C(
                                                                                                      t.id,
                                                                                                      "edit"
                                                                                                  ),
                                                                                          children:
                                                                                              e(
                                                                                                  oe,
                                                                                                  {
                                                                                                      size: 18,
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  e(
                                                                                      N,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-red-500",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  U(
                                                                                                      t.id,
                                                                                                      "Schedule " +
                                                                                                          t.day
                                                                                                  ),
                                                                                          children:
                                                                                              e(
                                                                                                  ae,
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
                                                      n
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
                    l.length > 0 &&
                        a("div", {
                            className:
                                "flex w-full justify-between items-center",
                            children: [
                                e(ee, { meta: r, links: i }),
                                a("p", {
                                    className: "text-sm text-third mt-10",
                                    children: [
                                        "Total Schedules: ",
                                        e("span", {
                                            className: "font-bold",
                                            children: o,
                                        }),
                                        " ",
                                    ],
                                }),
                            ],
                        }),
                    e(Z, {
                        isOpen: P,
                        onClose: () => d(!1),
                        size: "1/3",
                        type: S,
                        title: E,
                        children: a("form", {
                            onSubmit: S == "create" ? V : W(w),
                            className: "mt-6",
                            children: [
                                e(ce, { data: y, setData: m }),
                                a("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        e(M, {
                                            onClick: () => _(),
                                            children: "Cancel",
                                        }),
                                        e(I, {
                                            type: "submit",
                                            children:
                                                S == "create"
                                                    ? "Create"
                                                    : "Update",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    e(se, {
                        isToast: z,
                        onClose: () => u(!1),
                        title: O,
                        children: a("div", {
                            className: "flex justify-end gap-2 justify-center",
                            children: [
                                e(M, { onClick: () => q(), children: "No" }),
                                e(I, { onClick: () => Y(w), children: "Yes" }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
re.layout = (o) => e(le, { children: o });
export { re as default };
