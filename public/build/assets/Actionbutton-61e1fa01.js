import { a as u } from "./app-50127253.js";
function c({
    className: e = "w-10 h-10 ",
    disabled: t,
    children: n,
    type: o = button,
    ...r
}) {
    return u("button", {
        ...r,
        type: o,
        className:
            `flex justify-center items-center bg-primary text-white rounded ${
                t && "opacity-25"
            } ` + e,
        disabled: t,
        children: n,
    });
}
export { c as A };
