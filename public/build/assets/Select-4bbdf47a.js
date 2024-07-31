import { r as f, j as c, a as e } from "./app-50127253.js";
import { c as g } from "./TextInput-01542f12.js";
import { N as l } from "./listbox-64a6e69d.js";
import { t as b } from "./transition-42c9a528.js";
function N({ picture: a, onChange: d, accept: t = ".jpg, .png, .jpeg" }) {
    const [o, m] = f.useState(null),
        s = (n) => {
            const i = n.target.files[0];
            if (i) {
                const r = new FileReader();
                (r.onload = (h) => {
                    m(h.target.result);
                }),
                    r.readAsDataURL(i);
            }
            d(n);
        };
    return c("div", {
        className: "flex flex-col items-center relative",
        children: [
            (() =>
                o
                    ? e("img", {
                          src: o,
                          alt: "Preview",
                          className:
                              "w-32 h-32 object-cover  border border-1 border-gray-300 rounded mb-2",
                      })
                    : e("img", {
                          src: a || "https://via.placeholder.com/150",
                          alt: "Placeholder",
                          className:
                              "w-32 h-32 object-cover rounded border border-1 border-gray-300 mb-2",
                      }))(),
            c("label", {
                className: `border border-gray-300 ${
                    o
                        ? "bg-primary hover:bg-orange-400 text-white active:bg-primary"
                        : "file:text-fourth hover:bg-primary active:bg-primary hover:text-white"
                } transition duration-200 text-sm font-medium px-3 py-2 rounded text-fourth cursor-pointer`,
                children: [
                    "Choose File",
                    e("input", {
                        accept: t,
                        onChange: s,
                        type: "file",
                        className: "hidden",
                    }),
                ],
            }),
            e("span", {
                className: "text-xs text-third mt-1",
                children: "The maximum image size is 2MB",
            }),
        ],
    });
}
function j({
    className: a = "w-full",
    data: d,
    value: t,
    onChange: o,
    placeholder: m = "Select one",
}) {
    const [s, p] = f.useState(!1),
        n = (r) => {
            o(r), p(!1);
        },
        i = d.filter((r) => r.id !== (t == null ? void 0 : t.id));
    return c(l, {
        as: "div",
        className: g(" relative rounded", a),
        value: t,
        onChange: n,
        open: s,
        children: [
            c(l.Button, {
                className: g(
                    "flex h-11 w-full items-center justify-between rounded border border-gray-300 px-4 focus:outline-none",
                    a
                ),
                children: [
                    e("span", {
                        className: "capitalize line-clamp-1",
                        children: t.name || t || m,
                    }),
                    e("div", {
                        onClick: () => p(!s),
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
            e(b, {
                as: f.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: e(l.Options, {
                    className:
                        "z-50 absolute right-0 mt-1 max-h-[10rem] w-full overflow-y-auto rounded border border-gray-300 bg-white py-1 shadow-sm",
                    children: i.map((r) =>
                        e(
                            l.Option,
                            {
                                value: r,
                                children: ({ selected: h, active: u }) =>
                                    e("div", {
                                        className: g(
                                            "flex cursor-pointer items-center py-1.5 px-4",
                                            u && "bg-gray-100",
                                            h &&
                                                "bg-primary-50 font-semibold text-primary-600 hover:bg-primary-100"
                                        ),
                                        children: e("span", {
                                            className:
                                                "capitalize line-clamp-1",
                                            children: r.name,
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
export { N as I, j as S };
