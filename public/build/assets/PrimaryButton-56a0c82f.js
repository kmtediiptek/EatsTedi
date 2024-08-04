import { a as i } from "./app-50127253.js";
function a({ type: t, className: n = "", disabled: e, children: o, ...r }) {
    return i("button", {
        ...r,
        type: t,
        className:
            `inline-flex items-center justify-center text-center px-4 py-2.5 bg-primary border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition ease-in-out duration-150 ${
                e && "opacity-25"
            } ` + n,
        disabled: e,
        children: o,
    });
}
export { a as P };
