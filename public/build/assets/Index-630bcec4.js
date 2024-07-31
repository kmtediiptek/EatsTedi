import {
    q as G,
    j as a,
    F as N,
    a as e,
    r as o,
    W as J,
    b as K,
    y as R,
} from "./app-50127253.js";
import { A as X, I as Z } from "./ActionLink-e34be557.js";
import { A as y } from "./Actionbutton-61e1fa01.js";
import { I as S } from "./InputLabel-cc2f457d.js";
import { E as w, I as ee, a as te, M as ae } from "./Toast-5e3f78b2.js";
import { T as C } from "./TextInput-01542f12.js";
import { C as se } from "./Container-58708669.js";
import { M as ne } from "./Modal-ca85eed3.js";
import { P as re } from "./Pagination-a95b02de.js";
import { P as I } from "./PrimaryButton-56a0c82f.js";
import { S as M } from "./SecondaryButton-bc962aa5.js";
import { T as s } from "./Table-e4273544.js";
import { A as oe } from "./App-f48d50a9.js";
import { _ as b } from "./index-f4d5d2b2.js";
import { I as le } from "./IconEdit-fda570f0.js";
import "./createReactComponent-f77338bd.js";
import "./transition-42c9a528.js";
import "./keyboard-038d4531.js";
function ce({ data: l, setData: f }) {
    const { errors: n } = G().props,
        c = (d) => {
            f(d.target.name, d.target.value);
        };
    return a(N, {
        children: [
            a("div", {
                className: "mb-4",
                children: [
                    e(S, { htmlFor: "name", value: "Name" }),
                    e(C, {
                        name: "name",
                        id: "name",
                        className: "w-full",
                        onChange: c,
                        value: l.name,
                    }),
                    n.name ? e(w, { className: "", value: n.name }) : null,
                ],
            }),
            a("div", {
                className: "mb-4",
                children: [
                    e(S, { htmlFor: "icon", value: "Icon" }),
                    e(C, {
                        name: "icon",
                        id: "icon",
                        className: "w-full",
                        onChange: c,
                        value: l.icon,
                    }),
                    n.icon ? e(w, { className: "", value: n.icon }) : null,
                ],
            }),
        ],
    });
}
function ie({ total_categories: l, ...f }) {
    const { data: n, meta: c, links: d } = f.categories,
        [j, k] = o.useState(""),
        {
            delete: A,
            post: z,
            put: D,
            data: p,
            setData: m,
        } = J({ name: "", icon: "" });
    let [F, i] = o.useState(!1),
        [P, u] = o.useState(!1);
    const [E, L] = o.useState(""),
        [_, B] = o.useState(""),
        [g, O] = o.useState(""),
        [T, h] = o.useState("");
    function v(t, r) {
        if ((i(!0), L("Category"), O(r), h(t), t)) {
            const x = n.find(($) => $.slug === t);
            h(t), m({ name: x.name, icon: x.icon });
        } else h(""), m({ name: "", icon: "" });
    }
    function Q(t, r) {
        u(!0), B(r), h(t);
    }
    function U() {
        i(!1);
    }
    function q() {
        u(!1);
    }
    const H = (t) => {
            t.preventDefault(),
                z(route("admin.category.index"), {
                    data: p,
                    onSuccess: () => {
                        b.success("Category has been created!"),
                            i(!1),
                            m({ name: "", icon: "" });
                    },
                });
        },
        V = (t) => (r) => {
            r.preventDefault(),
                D(route("admin.category.update", t), {
                    ...p,
                    onSuccess: () => {
                        b.success("Category has been updated!"), i(!1);
                    },
                });
        },
        W = (t) => {
            A(route("admin.category.destroy", t), {
                onSuccess: () => {
                    b.success("Category has been deleted!"), u(!1);
                },
            });
        },
        Y = (t) => {
            t.preventDefault(),
                k(t.target.value),
                R.get(
                    "/admin/setting/category",
                    { search: t.target.value },
                    { preserveState: !0 }
                );
        };
    return a(N, {
        children: [
            e(K, { title: "Setting" }),
            a(se, {
                children: [
                    e("h3", {
                        className:
                            "text-2xl mt-10 mb-4 font-semibold text-fourth",
                        children: "Categories",
                    }),
                    a("div", {
                        className:
                            "flex justify-between gap-2 w-full item-center my-2",
                        children: [
                            a("div", {
                                className: "flex gap-2",
                                children: [
                                    e(X, {
                                        href: route("admin.dashboard"),
                                        children: e(Z, { size: 18 }),
                                    }),
                                    e(y, {
                                        onClick: () => v("", "create"),
                                        type: "button",
                                        children: e(ee, { size: 18 }),
                                    }),
                                ],
                            }),
                            e(C, {
                                type: "search",
                                className: "w-3/4 md:w-1/4",
                                placeholder: "Search category..",
                                defaultValue: j,
                                onChange: Y,
                            }),
                        ],
                    }),
                    e("div", { className: "w-full" }),
                    a(s, {
                        children: [
                            e(s.Thead, {
                                children: a("tr", {
                                    children: [
                                        e(s.Th, { children: "#" }),
                                        e(s.Th, { children: "Name" }),
                                        e(s.Th, { children: "Icon" }),
                                        e(s.Th, { children: "Action" }),
                                    ],
                                }),
                            }),
                            e(s.Tbody, {
                                children:
                                    n.length > 0
                                        ? e(N, {
                                              children: n.map((t, r) =>
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
                                                                      r,
                                                              }),
                                                              e(s.Td, {
                                                                  children:
                                                                      t.name,
                                                              }),
                                                              a(s.Td, {
                                                                  children: [
                                                                      " ",
                                                                      e("div", {
                                                                          className:
                                                                              "w-10 h-10 p-2 border border-gray rounded",
                                                                          dangerouslySetInnerHTML:
                                                                              {
                                                                                  __html: t.icon,
                                                                              },
                                                                      }),
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
                                                                                      y,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-yellow-400",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  v(
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
                                                                                      y,
                                                                                      {
                                                                                          className:
                                                                                              "w-8 h-8 bg-red-500",
                                                                                          type: "button",
                                                                                          onClick:
                                                                                              () =>
                                                                                                  Q(
                                                                                                      t.slug,
                                                                                                      t.name
                                                                                                  ),
                                                                                          children:
                                                                                              e(
                                                                                                  te,
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
                                                      r
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
                                e(re, { meta: c, links: d }),
                                a("p", {
                                    className: "text-sm text-third mt-10",
                                    children: [
                                        "Total Categories: ",
                                        e("span", {
                                            className: "font-bold",
                                            children: l,
                                        }),
                                        " ",
                                    ],
                                }),
                            ],
                        }),
                    e(ne, {
                        isOpen: F,
                        onClose: () => i(!1),
                        size: "1/3",
                        type: g,
                        title: E,
                        children: a("form", {
                            onSubmit: g == "create" ? H : V(T),
                            className: "mt-6",
                            children: [
                                e(ce, { data: p, setData: m }),
                                a("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        e(M, {
                                            onClick: () => U(),
                                            children: "Cancel",
                                        }),
                                        e(I, {
                                            type: "submit",
                                            children:
                                                g == "create"
                                                    ? "Create"
                                                    : "Update",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    e(ae, {
                        isToast: P,
                        onClose: () => u(!1),
                        title: _,
                        children: a("div", {
                            className: "flex justify-end gap-2 justify-center",
                            children: [
                                e(M, { onClick: () => q(), children: "No" }),
                                e(I, { onClick: () => W(T), children: "Yes" }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
ie.layout = (l) => e(oe, { children: l });
export { ie as default };
