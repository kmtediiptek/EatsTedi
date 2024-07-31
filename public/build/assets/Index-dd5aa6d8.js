import {
    r as p,
    j as r,
    F as u,
    a as e,
    b as f,
    y as x,
} from "./app-50127253.js";
import { C as b } from "./Container-58708669.js";
import { P as g } from "./Pagination-a95b02de.js";
import { T as t } from "./Table-e4273544.js";
import { A as w } from "./App-f48d50a9.js";
import { T } from "./TextInput-01542f12.js";
import { A as y } from "./ActionLink-e34be557.js";
import { I as N, a as A } from "./IconMoodSmile-f8e9c224.js";
import "./index-f4d5d2b2.js";
import "./transition-42c9a528.js";
import "./createReactComponent-f77338bd.js";
const S = ({ total_presences: s, qrCodes: v, ...c }) => {
    const { data: l, meta: n, links: i } = c.attendaces,
        [o, h] = p.useState(""),
        m = (a) => {
            a.preventDefault(),
                h(a.target.value),
                x.get(
                    "/admin/attendace",
                    { search: a.target.value },
                    { preserveState: !0 }
                );
        };
    return r(u, {
        children: [
            e(f, { title: "Attendace" }),
            e(b, {
                children: r("div", {
                    className: "flex flex-wrap w-full mt-10 mb-4",
                    children: [
                        e("h3", {
                            className:
                                "text-2xl mb-4 font-semibold text-fourth",
                            children: "Attendace",
                        }),
                        r("div", {
                            className:
                                "flex flex-wrap justify-between gap-2 w-full my-2",
                            children: [
                                e(y, { href: route("admin.dashboard") }),
                                e(T, {
                                    type: "search",
                                    className: "w-3/4 sm:w-1/4",
                                    placeholder: "Search attendace..",
                                    defaultValue: o,
                                    onChange: m,
                                }),
                            ],
                        }),
                        e("div", {
                            className: "w-full",
                            children: r(t, {
                                children: [
                                    e(t.Thead, {
                                        children: r("tr", {
                                            children: [
                                                e(t.Th, { children: "#" }),
                                                e(t.Th, { children: "Name" }),
                                                e(t.Th, { children: "Status" }),
                                                e(t.Th, {
                                                    children: "Attendace Date",
                                                }),
                                                e(t.Th, {
                                                    children: "Is Attendace",
                                                }),
                                            ],
                                        }),
                                    }),
                                    e(t.Tbody, {
                                        children:
                                            l.length > 0
                                                ? l.map((a, d) =>
                                                      r(
                                                          "tr",
                                                          {
                                                              className:
                                                                  "bg-white border-b text-secondary",
                                                              children: [
                                                                  e(t.Td, {
                                                                      className:
                                                                          "w-5",
                                                                      children:
                                                                          n.from +
                                                                          d,
                                                                  }),
                                                                  e(t.Td, {
                                                                      children:
                                                                          a.user
                                                                              .name,
                                                                  }),
                                                                  e(t.Td, {
                                                                      children:
                                                                          e(
                                                                              "span",
                                                                              {
                                                                                  classNamgite: `text-xs p-2 ${
                                                                                      a
                                                                                          .user
                                                                                          .status ==
                                                                                      "employee"
                                                                                          ? "bg-green-500 text-white rounded"
                                                                                          : a
                                                                                                .user
                                                                                                .status ==
                                                                                            "admin"
                                                                                          ? "bg-yellow-400 text-white rounded"
                                                                                          : "bg-red-500 text-white rounded"
                                                                                  }`,
                                                                                  children:
                                                                                      a.user.status.toUpperCase(),
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e(t.Td, {
                                                                      children:
                                                                          a.presence_date,
                                                                  }),
                                                                  e(t.Td, {
                                                                      className:
                                                                          "w-32 text-center",
                                                                      children:
                                                                          a.is_presence ==
                                                                          1
                                                                              ? e(
                                                                                    N,
                                                                                    {
                                                                                        color: "green",
                                                                                    }
                                                                                )
                                                                              : e(
                                                                                    A,
                                                                                    {
                                                                                        color: "red",
                                                                                    }
                                                                                ),
                                                                  }),
                                                              ],
                                                          },
                                                          d
                                                      )
                                                  )
                                                : e("tr", {
                                                      className:
                                                          "bg-white border-b text-secondary text-center",
                                                      children: e(t.Td, {
                                                          colSpan: "5",
                                                          children: "No data",
                                                      }),
                                                  }),
                                    }),
                                ],
                            }),
                        }),
                        l.length > 0 &&
                            r("div", {
                                className:
                                    "flex w-full justify-between items-center",
                                children: [
                                    e(g, { meta: n, links: i }),
                                    r("p", {
                                        className: "text-sm text-third mt-10",
                                        children: [
                                            "Total Attendace: ",
                                            e("span", {
                                                className: "font-bold",
                                                children: s,
                                            }),
                                            " ",
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        ],
    });
};
S.layout = (s) => e(w, { children: s });
export { S as default };
