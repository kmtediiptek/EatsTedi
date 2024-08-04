import { r as k, j as r, F as g, a as e, b as F } from "./app-50127253.js";
import { A as S } from "./App-f48d50a9.js";
import C from "./DeleteUserForm-8c772cb5.js";
import E from "./UpdatePasswordForm-15837163.js";
import P from "./UpdateProfileInformationForm-f4c8990d.js";
import { C as T } from "./Container-58708669.js";
import { S as p } from "./SecondaryButton-bc962aa5.js";
import { n as M } from "./Helper-f0b8910d.js";
import { A as R } from "./ActionLink-e34be557.js";
import { c as y } from "./createReactComponent-f77338bd.js";
import { I as j } from "./IconMail-755f3598.js";
import { I as z } from "./IconCategory-615c528c.js";
import "./index-f4d5d2b2.js";
import "./transition-42c9a528.js";
import "./TextInput-01542f12.js";
import "./InputError-2b9a135c.js";
import "./InputLabel-cc2f457d.js";
import "./Modal-ca85eed3.js";
import "./keyboard-038d4531.js";
import "./PrimaryButton-56a0c82f.js";
import "./Select-4bbdf47a.js";
import "./listbox-64a6e69d.js";
import "./Textarea-7764c47a.js";
var L = y("location", "IconLocation", [
        [
            "path",
            {
                d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",
                key: "svg-0",
            },
        ],
    ]),
    U = y("phone", "IconPhone", [
        [
            "path",
            {
                d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
                key: "svg-0",
            },
        ],
    ]);
const J = (a) => {
    const l = [];
    return (
        a.forEach((o) => {
            const s = parseInt(o.date.split("-")[1]) - 1,
                i = parseInt(o.date.split("-")[2]);
            l[s] || (l[s] = { month: o.date.split("-")[1], days: [] }),
                (l[s].days[i - 1] = { day: i, total: o.total });
        }),
        l
    );
};
function $({
    auth: a,
    mustVerifyEmail: l,
    status: o,
    picture: s,
    dailySalary: i,
    total_salary: b,
}) {
    const w = [
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
        ],
        N = J(i),
        [t, h] = k.useState("Information"),
        c = (n) => {
            h(n);
        },
        f = () => {
            h("Information");
        },
        v = (n) => {
            const d = { year: "numeric", month: "long", day: "numeric" };
            return new Date(n).toLocaleDateString(void 0, d);
        };
    return r(g, {
        children: [
            e(F, { title: "Profile" }),
            e(T, {
                className: "py-12 pb-0 w-full flex",
                children: r("div", {
                    className: "md:flex w-full lg:w-3/4 mx-auto gap-4",
                    children: [
                        r("div", {
                            className:
                                "w-full sm:w-1/3 flex flex-wrap flex-col gap-4 justify-start mb-6",
                            children: [
                                e(R, { href: route("admin.dashboard") }),
                                e("img", {
                                    src: a.user.picture
                                        ? s
                                        : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png",
                                    alt: a.user.picture,
                                    className:
                                        "w-[100%] bg-white aspect-square rounded-xl mx-auto",
                                }),
                                r("div", {
                                    className: "px-4",
                                    children: [
                                        e("h3", {
                                            className:
                                                "text-2xl font-semibold mt-8 text-fourth",
                                            children: a.user.name,
                                        }),
                                        e("p", {
                                            className:
                                                "text-lg mt-0 text-third",
                                            children: a.user.username,
                                        }),
                                    ],
                                }),
                                e("div", {
                                    className: "flex px-4 gap-2",
                                    children: r("div", {
                                        className: "flex w-full gap-2",
                                        children: [
                                            e(p, {
                                                className: `w-full my-2 text-secondary border rounded border-gray-300 hover:bg-primary hover:text-white ${
                                                    t === "Edit"
                                                        ? "bg-primary border-none text-white"
                                                        : ""
                                                }`,
                                                onClick: () => c("Edit"),
                                                children: "Edit",
                                            }),
                                            e(p, {
                                                className: `w-full my-2 text-secondary border rounded border-gray-300 hover:bg-primary hover:text-white ${
                                                    t === "Account"
                                                        ? "bg-primary border-none text-white"
                                                        : ""
                                                }`,
                                                onClick: () => c("Account"),
                                                children: "Account",
                                            }),
                                            a.user.status === "employee"
                                                ? ""
                                                : e(p, {
                                                      className: `w-full my-2 text-secondary border rounded border-gray-300 hover:bg-primary hover:text-white ${
                                                          t === "Delete"
                                                              ? "bg-primary border-none text-white"
                                                              : ""
                                                      }`,
                                                      onClick: () =>
                                                          c("Delete"),
                                                      children: "Delete",
                                                  }),
                                        ],
                                    }),
                                }),
                                r("div", {
                                    className: "gap-2 px-4 space-y-2 mt-4",
                                    children: [
                                        r("div", {
                                            className:
                                                "flex gap-2 items-center",
                                            children: [
                                                e(L, {
                                                    color: "gray",
                                                    size: 20,
                                                }),
                                                e("p", {
                                                    className:
                                                        "text-base mt-0 text-third",
                                                    children: a.user.address,
                                                }),
                                            ],
                                        }),
                                        r("div", {
                                            className:
                                                "flex gap-2 items-center",
                                            children: [
                                                e(j, {
                                                    color: "gray",
                                                    size: 20,
                                                }),
                                                e("p", {
                                                    className:
                                                        "text-base mt-0 text-third",
                                                    children: a.user.email,
                                                }),
                                            ],
                                        }),
                                        r("div", {
                                            className:
                                                "flex gap-2 items-center",
                                            children: [
                                                e(U, {
                                                    color: "gray",
                                                    size: 20,
                                                }),
                                                e("p", {
                                                    className:
                                                        "text-base mt-0 text-third",
                                                    children:
                                                        a.user.number_phone,
                                                }),
                                            ],
                                        }),
                                        r("div", {
                                            className:
                                                "flex gap-2 items-center",
                                            children: [
                                                e(z, {
                                                    color: "gray",
                                                    size: 20,
                                                }),
                                                e("p", {
                                                    className:
                                                        "text-base mt-0 text-third",
                                                    children: a.user.status,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r("div", {
                            className:
                                "w-full mt-14 sm:w-2/3 mx-auto items-center",
                            children: [
                                t === "Edit" &&
                                    e("div", {
                                        className:
                                            "p-4 w-full rounded border border-1 border-gray-300",
                                        children: e(P, {
                                            mustVerifyEmail: l,
                                            status: o,
                                            className: "w-full",
                                            onHandleTab: f,
                                            picture: s,
                                        }),
                                    }),
                                t === "Account" &&
                                    e("div", {
                                        className:
                                            "p-4 w-full rounded border border-1 border-gray-300",
                                        children: e(E, {
                                            className: "w-full",
                                            onHandleTab: f,
                                        }),
                                    }),
                                a.user.status == "employee"
                                    ? ""
                                    : t === "Delete" &&
                                      e("div", {
                                          className:
                                              "p-4 w-full rounded border border-1 border-gray-300",
                                          children: e(C, {
                                              className: "w-full",
                                          }),
                                      }),
                                t === "Information" &&
                                    r(g, {
                                        children: [
                                            r("div", {
                                                className:
                                                    "p-4 w-full space-y-8 rounded border border-1 border-gray-300",
                                                children: [
                                                    r("div", {
                                                        children: [
                                                            e("h2", {
                                                                className:
                                                                    "text-lg font-medium text-fourth",
                                                                children:
                                                                    "Information System",
                                                            }),
                                                            e("p", {
                                                                className:
                                                                    "mt-1 text-sm text-secondary",
                                                                children:
                                                                    "Randa is a point of sales application that is flexible in ordering. Randa itself has sales statistical data. Randa can record finances, orders and even print sales results. The following are promotional materials that can be used for marketing",
                                                            }),
                                                        ],
                                                    }),
                                                    r("div", {
                                                        children: [
                                                            e("h2", {
                                                                className:
                                                                    "text-lg font-medium text-fourth",
                                                                children:
                                                                    "Profile Information",
                                                            }),
                                                            r("p", {
                                                                className:
                                                                    "mt-1 text-sm text-secondary",
                                                                children: [
                                                                    "So far I have worked from",
                                                                    " ",
                                                                    v(
                                                                        a.user
                                                                            .created_at
                                                                    ),
                                                                    " ",
                                                                    "till now",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            a.user && a.user.status !== "owner"
                                                ? r("div", {
                                                      className:
                                                          "p-4 rounded mt-4 border border-1 border-gray-300",
                                                      children: [
                                                          r("div", {
                                                              children: [
                                                                  e("h2", {
                                                                      className:
                                                                          "text-lg font-medium text-fourth",
                                                                      children:
                                                                          "Salary Information",
                                                                  }),
                                                                  e("p", {
                                                                      className:
                                                                          "mt-1 text-sm text-secondary",
                                                                      children:
                                                                          "The following is a list of your attendance",
                                                                  }),
                                                              ],
                                                          }),
                                                          e("div", {
                                                              className:
                                                                  "w-full py-2 gap-4 flex flex-row-reverse block scrolling-wrapper overflow-x-scroll overflow-y-hidden",
                                                              children: N.map(
                                                                  (n, d) => {
                                                                      const I =
                                                                              new Date().getFullYear(),
                                                                          u =
                                                                              parseInt(
                                                                                  n.month
                                                                              ) -
                                                                              1,
                                                                          D =
                                                                              new Date(
                                                                                  I,
                                                                                  u +
                                                                                      1,
                                                                                  0
                                                                              ).getDate(),
                                                                          x =
                                                                              Array(
                                                                                  D
                                                                              ).fill(
                                                                                  !1
                                                                              );
                                                                      return (
                                                                          n.days.forEach(
                                                                              (
                                                                                  m
                                                                              ) => {
                                                                                  x[
                                                                                      m.day -
                                                                                          1
                                                                                  ] =
                                                                                      !0;
                                                                              }
                                                                          ),
                                                                          e(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex h-48 w-min",
                                                                                  children:
                                                                                      r(
                                                                                          "div",
                                                                                          {
                                                                                              className:
                                                                                                  "flex flex-col w-32 h-48",
                                                                                              children:
                                                                                                  [
                                                                                                      e(
                                                                                                          "p",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "text-center text-sm text-fourth mb-1",
                                                                                                              children:
                                                                                                                  w[
                                                                                                                      u
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                      e(
                                                                                                          "div",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "grid grid-cols-5 w-32 h-48",
                                                                                                              children:
                                                                                                                  x.map(
                                                                                                                      (
                                                                                                                          m,
                                                                                                                          A
                                                                                                                      ) =>
                                                                                                                          e(
                                                                                                                              "span",
                                                                                                                              {
                                                                                                                                  children:
                                                                                                                                      e(
                                                                                                                                          "input",
                                                                                                                                          {
                                                                                                                                              className:
                                                                                                                                                  "rounded w-6 border border-gray-400 h-6 text-green-600",
                                                                                                                                              type: "checkbox",
                                                                                                                                              checked:
                                                                                                                                                  m,
                                                                                                                                              readOnly:
                                                                                                                                                  !0,
                                                                                                                                          }
                                                                                                                                      ),
                                                                                                                              },
                                                                                                                              A
                                                                                                                          )
                                                                                                                  ),
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          }
                                                                                      ),
                                                                              },
                                                                              d
                                                                          )
                                                                      );
                                                                  }
                                                              ),
                                                          }),
                                                      ],
                                                  })
                                                : null,
                                            e("div", {
                                                className:
                                                    "p-4 w-full mt-4 mb-12 space-y-8 rounded border border-1 border-gray-300",
                                                children: r("div", {
                                                    children: [
                                                        r("h2", {
                                                            className:
                                                                "text-lg font-medium text-fourth",
                                                            children: [
                                                                "Total Salary",
                                                                " ",
                                                            ],
                                                        }),
                                                        r("p", {
                                                            className:
                                                                "mt-1 text-sm text-secondary",
                                                            children: [
                                                                "Total",
                                                                " ",
                                                                a.user.status ==
                                                                "owner"
                                                                    ? "income"
                                                                    : "salary",
                                                                " ",
                                                                "this month",
                                                            ],
                                                        }),
                                                        r("h1", {
                                                            className:
                                                                "mt-5 text-3xl text-red-500 font-bold text-fourth",
                                                            children: [
                                                                e("sup", {
                                                                    children:
                                                                        "Rp.",
                                                                }),
                                                                " ",
                                                                M(b),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
$.layout = (a) => e(S, { children: a });
export { $ as default };
