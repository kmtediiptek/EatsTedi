import { j as d, F as c, a as e, b as i } from "./app-50127253.js";
import { C as s } from "./Container-58708669.js";
import { T as r } from "./Table-e4273544.js";
import { A as m } from "./App-f48d50a9.js";
import { n as a } from "./Helper-f0b8910d.js";
import "./TextInput-01542f12.js";
import "./jspdf.plugin.autotable-3d752e56.js";
import "./index-f4d5d2b2.js";
import "./transition-42c9a528.js";
import "./typeof-7fd5df1e.js";
function o(l) {
    const { data: h } = l.invoices;
    return d(c, {
        children: [
            e(i, { title: "Setting" }),
            d(s, {
                children: [
                    e("h3", {
                        className:
                            "text-2xl mt-10 mb-4 font-semibold text-fourth",
                        children: "Invoices",
                    }),
                    e("div", { className: "w-full" }),
                    d(r, {
                        children: [
                            e(r.Thead, {
                                children: d("tr", {
                                    children: [
                                        e(r.Th, { children: "#" }),
                                        e(r.Th, { children: "Order ID" }),
                                        e(r.Th, { children: "Name" }),
                                        e(r.Th, { children: "Charge" }),
                                        e(r.Th, { children: "Change" }),
                                        e(r.Th, { children: "Table" }),
                                        e(r.Th, { children: "Total Quantity" }),
                                        e(r.Th, { children: "Total Price" }),
                                        e(r.Th, { children: "Succeeded at" }),
                                        e(r.Th, { children: "Status" }),
                                    ],
                                }),
                            }),
                            e(r.Tbody, {
                                children:
                                    h.length > 0
                                        ? e(c, {
                                              children: h.map((t, n) =>
                                                  d(
                                                      "tr",
                                                      {
                                                          className:
                                                              "bg-white border-b text-secondary",
                                                          children: [
                                                              e(r.Td, {
                                                                  className:
                                                                      "w-5",
                                                                  children:
                                                                      meta.from +
                                                                      n,
                                                              }),
                                                              d(r.Td, {
                                                                  children: [
                                                                      "#",
                                                                      t.order_id,
                                                                  ],
                                                              }),
                                                              e(r.Td, {
                                                                  children:
                                                                      t.name,
                                                              }),
                                                              d(r.Td, {
                                                                  children: [
                                                                      e("sup", {
                                                                          children:
                                                                              " Rp.",
                                                                      }),
                                                                      " ",
                                                                      a(
                                                                          t
                                                                              .money
                                                                              .charge
                                                                      ),
                                                                  ],
                                                              }),
                                                              d(r.Td, {
                                                                  children: [
                                                                      e("sup", {
                                                                          children:
                                                                              " Rp.",
                                                                      }),
                                                                      " ",
                                                                      a(
                                                                          t
                                                                              .money
                                                                              .change
                                                                      ),
                                                                  ],
                                                              }),
                                                              e(r.Td, {
                                                                  children:
                                                                      t.table_id,
                                                              }),
                                                              e(r.Td, {
                                                                  children:
                                                                      t.total_quantity,
                                                              }),
                                                              d(r.Td, {
                                                                  children: [
                                                                      e("sup", {
                                                                          children:
                                                                              " Rp.",
                                                                      }),
                                                                      " ",
                                                                      a(
                                                                          t.total_price
                                                                      ),
                                                                  ],
                                                              }),
                                                              e(r.Td, {
                                                                  children:
                                                                      t.succeeded_at,
                                                              }),
                                                              e(r.Td, {
                                                                  children: e(
                                                                      "span",
                                                                      {
                                                                          className: `text-xs p-2 ${
                                                                              t.status ==
                                                                              1
                                                                                  ? "bg-emerald-500 text-white rounded"
                                                                                  : "bg-yellow-400 text-white rounded"
                                                                          }`,
                                                                          children:
                                                                              t.status ==
                                                                              1
                                                                                  ? "Done"
                                                                                  : "In Progress",
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
                                              children: e(r.Td, {
                                                  colSpan: "10",
                                                  children: "No data",
                                              }),
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
o.layout = (l) => e(m, { children: l });
export { o as default };
