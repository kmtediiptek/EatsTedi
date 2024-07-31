import {
    r as u,
    m as f,
    f as qe,
    h as ne,
    a as w,
    F as Ge,
    j as K,
} from "./app-50127253.js";
import {
    o as g,
    s as ze,
    a as se,
    D as b,
    y as T,
    l as ce,
    u as B,
    p as Je,
    X as C,
    f as we,
    T as Ke,
    b as ye,
    c as F,
    d as $e,
    S as he,
    C as Qe,
    e as X,
    t as Q,
} from "./transition-42c9a528.js";
import {
    e as Ze,
    s as et,
    O as q,
    M as R,
    c as re,
    p as oe,
    y as M,
    N as tt,
    I as k,
    h as nt,
    o as rt,
    r as ot,
} from "./keyboard-038d4531.js";
import { c as lt } from "./createReactComponent-f77338bd.js";
function de(e, t) {
    let n = u.useRef([]),
        r = g(e);
    u.useEffect(() => {
        let a = [...n.current];
        for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
                let i = r(t, a);
                return (n.current = t), i;
            }
    }, [r, ...t]);
}
function at() {
    return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
    );
}
function H(...e) {
    return u.useMemo(() => Ze(...e), [...e]);
}
var I = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(I || {});
function it() {
    let e = u.useRef(0);
    return (
        et(
            "keydown",
            (t) => {
                t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
        ),
        e
    );
}
function be(e, t, n, r) {
    let a = ze(n);
    u.useEffect(() => {
        e = e ?? window;
        function o(l) {
            a.current(l);
        }
        return (
            e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r)
        );
    }, [e, t, r]);
}
function ut(e) {
    function t() {
        document.readyState !== "loading" &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
    }
    typeof window < "u" &&
        typeof document < "u" &&
        (document.addEventListener("DOMContentLoaded", t), t());
}
function Te(e) {
    let t = g(e),
        n = u.useRef(!1);
    u.useEffect(
        () => (
            (n.current = !1),
            () => {
                (n.current = !0),
                    se(() => {
                        n.current && t();
                    });
            }
        ),
        [t]
    );
}
function Ce(e) {
    if (!e) return new Set();
    if (typeof e == "function") return new Set(e());
    let t = new Set();
    for (let n of e.current)
        n.current instanceof HTMLElement && t.add(n.current);
    return t;
}
let st = "div";
var Se = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.InitialFocus = 2)] = "InitialFocus"),
    (e[(e.TabLock = 4)] = "TabLock"),
    (e[(e.FocusLock = 8)] = "FocusLock"),
    (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
    (e[(e.All = 30)] = "All"),
    e
))(Se || {});
function ct(e, t) {
    let n = u.useRef(null),
        r = T(n, t),
        { initialFocus: a, containers: o, features: l = 30, ...i } = e;
    ce() || (l = 1);
    let s = H(n);
    pt({ ownerDocument: s }, !!(l & 16));
    let c = mt({ ownerDocument: s, container: n, initialFocus: a }, !!(l & 2));
    gt(
        {
            ownerDocument: s,
            container: n,
            containers: o,
            previousActiveElement: c,
        },
        !!(l & 8)
    );
    let d = it(),
        O = g((p) => {
            let y = n.current;
            y &&
                ((S) => S())(() => {
                    B(d.current, {
                        [I.Forwards]: () => {
                            q(y, R.First, { skipElements: [p.relatedTarget] });
                        },
                        [I.Backwards]: () => {
                            q(y, R.Last, { skipElements: [p.relatedTarget] });
                        },
                    });
                });
        }),
        L = Je(),
        v = u.useRef(!1),
        z = {
            ref: r,
            onKeyDown(p) {
                p.key == "Tab" &&
                    ((v.current = !0),
                    L.requestAnimationFrame(() => {
                        v.current = !1;
                    }));
            },
            onBlur(p) {
                let y = Ce(o);
                n.current instanceof HTMLElement && y.add(n.current);
                let S = p.relatedTarget;
                S instanceof HTMLElement &&
                    S.dataset.headlessuiFocusGuard !== "true" &&
                    (Pe(y, S) ||
                        (v.current
                            ? q(
                                  n.current,
                                  B(d.current, {
                                      [I.Forwards]: () => R.Next,
                                      [I.Backwards]: () => R.Previous,
                                  }) | R.WrapAround,
                                  { relativeTo: p.target }
                              )
                            : p.target instanceof HTMLElement && M(p.target)));
            },
        };
    return f.createElement(
        f.Fragment,
        null,
        !!(l & 4) &&
            f.createElement(re, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: O,
                features: oe.Focusable,
            }),
        C({ ourProps: z, theirProps: i, defaultTag: st, name: "FocusTrap" }),
        !!(l & 4) &&
            f.createElement(re, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: O,
                features: oe.Focusable,
            })
    );
}
let dt = b(ct),
    N = Object.assign(dt, { features: Se }),
    P = [];
ut(() => {
    function e(t) {
        t.target instanceof HTMLElement &&
            t.target !== document.body &&
            P[0] !== t.target &&
            (P.unshift(t.target),
            (P = P.filter((n) => n != null && n.isConnected)),
            P.splice(10));
    }
    window.addEventListener("click", e, { capture: !0 }),
        window.addEventListener("mousedown", e, { capture: !0 }),
        window.addEventListener("focus", e, { capture: !0 }),
        document.body.addEventListener("click", e, { capture: !0 }),
        document.body.addEventListener("mousedown", e, { capture: !0 }),
        document.body.addEventListener("focus", e, { capture: !0 });
});
function ft(e = !0) {
    let t = u.useRef(P.slice());
    return (
        de(
            ([n], [r]) => {
                r === !0 &&
                    n === !1 &&
                    se(() => {
                        t.current.splice(0);
                    }),
                    r === !1 && n === !0 && (t.current = P.slice());
            },
            [e, P, t]
        ),
        g(() => {
            var n;
            return (n = t.current.find((r) => r != null && r.isConnected)) !=
                null
                ? n
                : null;
        })
    );
}
function pt({ ownerDocument: e }, t) {
    let n = ft(t);
    de(() => {
        t ||
            ((e == null ? void 0 : e.activeElement) ===
                (e == null ? void 0 : e.body) &&
                M(n()));
    }, [t]),
        Te(() => {
            t && M(n());
        });
}
function mt({ ownerDocument: e, container: t, initialFocus: n }, r) {
    let a = u.useRef(null),
        o = we();
    return (
        de(() => {
            if (!r) return;
            let l = t.current;
            l &&
                se(() => {
                    if (!o.current) return;
                    let i = e == null ? void 0 : e.activeElement;
                    if (n != null && n.current) {
                        if ((n == null ? void 0 : n.current) === i) {
                            a.current = i;
                            return;
                        }
                    } else if (l.contains(i)) {
                        a.current = i;
                        return;
                    }
                    n != null && n.current
                        ? M(n.current)
                        : q(l, R.First) === tt.Error &&
                          console.warn(
                              "There are no focusable elements inside the <FocusTrap />"
                          ),
                        (a.current = e == null ? void 0 : e.activeElement);
                });
        }, [r]),
        a
    );
}
function gt(
    { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
    a
) {
    let o = we();
    be(
        e == null ? void 0 : e.defaultView,
        "focus",
        (l) => {
            if (!a || !o.current) return;
            let i = Ce(n);
            t.current instanceof HTMLElement && i.add(t.current);
            let s = r.current;
            if (!s) return;
            let c = l.target;
            c && c instanceof HTMLElement
                ? Pe(i, c)
                    ? ((r.current = c), M(c))
                    : (l.preventDefault(), l.stopPropagation(), M(s))
                : M(r.current);
        },
        !0
    );
}
function Pe(e, t) {
    for (let n of e) if (n.contains(t)) return !0;
    return !1;
}
let Le = u.createContext(!1);
function vt() {
    return u.useContext(Le);
}
function le(e) {
    return f.createElement(Le.Provider, { value: e.force }, e.children);
}
function ht(e) {
    let t = vt(),
        n = u.useContext(De),
        r = H(e),
        [a, o] = u.useState(() => {
            if ((!t && n !== null) || ye.isServer) return null;
            let l =
                r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (l) return l;
            if (r === null) return null;
            let i = r.createElement("div");
            return (
                i.setAttribute("id", "headlessui-portal-root"),
                r.body.appendChild(i)
            );
        });
    return (
        u.useEffect(() => {
            a !== null &&
                ((r != null && r.body.contains(a)) ||
                    r == null ||
                    r.body.appendChild(a));
        }, [a, r]),
        u.useEffect(() => {
            t || (n !== null && o(n.current));
        }, [n, o, t]),
        a
    );
}
let Et = u.Fragment;
function wt(e, t) {
    let n = e,
        r = u.useRef(null),
        a = T(
            Ke((d) => {
                r.current = d;
            }),
            t
        ),
        o = H(r),
        l = ht(r),
        [i] = u.useState(() => {
            var d;
            return ye.isServer
                ? null
                : (d = o == null ? void 0 : o.createElement("div")) != null
                ? d
                : null;
        }),
        s = u.useContext(ae),
        c = ce();
    return (
        F(() => {
            !l ||
                !i ||
                l.contains(i) ||
                (i.setAttribute("data-headlessui-portal", ""),
                l.appendChild(i));
        }, [l, i]),
        F(() => {
            if (i && s) return s.register(i);
        }, [s, i]),
        Te(() => {
            var d;
            !l ||
                !i ||
                (i instanceof Node && l.contains(i) && l.removeChild(i),
                l.childNodes.length <= 0 &&
                    ((d = l.parentElement) == null || d.removeChild(l)));
        }),
        c
            ? !l || !i
                ? null
                : qe.createPortal(
                      C({
                          ourProps: { ref: a },
                          theirProps: n,
                          defaultTag: Et,
                          name: "Portal",
                      }),
                      i
                  )
            : null
    );
}
let yt = u.Fragment,
    De = u.createContext(null);
function $t(e, t) {
    let { target: n, ...r } = e,
        a = { ref: T(t) };
    return f.createElement(
        De.Provider,
        { value: n },
        C({ ourProps: a, theirProps: r, defaultTag: yt, name: "Popover.Group" })
    );
}
let ae = u.createContext(null);
function bt() {
    let e = u.useContext(ae),
        t = u.useRef([]),
        n = g((o) => (t.current.push(o), e && e.register(o), () => r(o))),
        r = g((o) => {
            let l = t.current.indexOf(o);
            l !== -1 && t.current.splice(l, 1), e && e.unregister(o);
        }),
        a = u.useMemo(
            () => ({ register: n, unregister: r, portals: t }),
            [n, r, t]
        );
    return [
        t,
        u.useMemo(
            () =>
                function ({ children: o }) {
                    return f.createElement(ae.Provider, { value: a }, o);
                },
            [a]
        ),
    ];
}
let Tt = b(wt),
    Ct = b($t),
    ie = Object.assign(Tt, { Group: Ct }),
    Me = u.createContext(null);
function xe() {
    let e = u.useContext(Me);
    if (e === null) {
        let t = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(t, xe), t);
    }
    return e;
}
function St() {
    let [e, t] = u.useState([]);
    return [
        e.length > 0 ? e.join(" ") : void 0,
        u.useMemo(
            () =>
                function (n) {
                    let r = g(
                            (o) => (
                                t((l) => [...l, o]),
                                () =>
                                    t((l) => {
                                        let i = l.slice(),
                                            s = i.indexOf(o);
                                        return s !== -1 && i.splice(s, 1), i;
                                    })
                            )
                        ),
                        a = u.useMemo(
                            () => ({
                                register: r,
                                slot: n.slot,
                                name: n.name,
                                props: n.props,
                            }),
                            [r, n.slot, n.name, n.props]
                        );
                    return f.createElement(
                        Me.Provider,
                        { value: a },
                        n.children
                    );
                },
            [t]
        ),
    ];
}
let Pt = "p";
function Lt(e, t) {
    let n = k(),
        { id: r = `headlessui-description-${n}`, ...a } = e,
        o = xe(),
        l = T(t);
    F(() => o.register(r), [r, o.register]);
    let i = { ref: l, ...o.props, id: r };
    return C({
        ourProps: i,
        theirProps: a,
        slot: o.slot || {},
        defaultTag: Pt,
        name: o.name || "Description",
    });
}
let Dt = b(Lt),
    Mt = Object.assign(Dt, {}),
    fe = u.createContext(() => {});
fe.displayName = "StackContext";
var ue = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
    ue || {}
);
function xt() {
    return u.useContext(fe);
}
function Rt({ children: e, onUpdate: t, type: n, element: r, enabled: a }) {
    let o = xt(),
        l = g((...i) => {
            t == null || t(...i), o(...i);
        });
    return (
        F(() => {
            let i = a === void 0 || a === !0;
            return (
                i && l(0, n, r),
                () => {
                    i && l(1, n, r);
                }
            );
        }, [l, n, r, a]),
        f.createElement(fe.Provider, { value: l }, e)
    );
}
function Ft(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const kt = typeof Object.is == "function" ? Object.is : Ft,
    {
        useState: Ot,
        useEffect: Nt,
        useLayoutEffect: At,
        useDebugValue: It,
    } = ne;
function Bt(e, t, n) {
    const r = t(),
        [{ inst: a }, o] = Ot({ inst: { value: r, getSnapshot: t } });
    return (
        At(() => {
            (a.value = r), (a.getSnapshot = t), Z(a) && o({ inst: a });
        }, [e, r, t]),
        Nt(
            () => (
                Z(a) && o({ inst: a }),
                e(() => {
                    Z(a) && o({ inst: a });
                })
            ),
            [e]
        ),
        It(r),
        r
    );
}
function Z(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !kt(n, r);
    } catch {
        return !0;
    }
}
function Ht(e, t, n) {
    return t();
}
const jt =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Wt = !jt,
    Yt = Wt ? Ht : Bt,
    _t =
        "useSyncExternalStore" in ne ? ((e) => e.useSyncExternalStore)(ne) : Yt;
function Ut(e) {
    return _t(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Vt(e, t) {
    let n = e(),
        r = new Set();
    return {
        getSnapshot() {
            return n;
        },
        subscribe(a) {
            return r.add(a), () => r.delete(a);
        },
        dispatch(a, ...o) {
            let l = t[a].call(n, ...o);
            l && ((n = l), r.forEach((i) => i()));
        },
    };
}
function Xt() {
    let e;
    return {
        before({ doc: t }) {
            var n;
            let r = t.documentElement;
            e =
                ((n = t.defaultView) != null ? n : window).innerWidth -
                r.clientWidth;
        },
        after({ doc: t, d: n }) {
            let r = t.documentElement,
                a = r.clientWidth - r.offsetWidth,
                o = e - a;
            n.style(r, "paddingRight", `${o}px`);
        },
    };
}
function qt() {
    if (!at()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset;
        },
        after({ doc: t, d: n, meta: r }) {
            function a(o) {
                return r.containers
                    .flatMap((l) => l())
                    .some((l) => l.contains(o));
            }
            n.microTask(() => {
                if (
                    window.getComputedStyle(t.documentElement)
                        .scrollBehavior !== "auto"
                ) {
                    let l = $e();
                    l.style(t.documentElement, "scroll-behavior", "auto"),
                        n.add(() => n.microTask(() => l.dispose()));
                }
                n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                let o = null;
                n.addEventListener(
                    t,
                    "click",
                    (l) => {
                        if (l.target instanceof HTMLElement)
                            try {
                                let i = l.target.closest("a");
                                if (!i) return;
                                let { hash: s } = new URL(i.href),
                                    c = t.querySelector(s);
                                c && !a(c) && (o = c);
                            } catch {}
                    },
                    !0
                ),
                    n.addEventListener(
                        t,
                        "touchmove",
                        (l) => {
                            l.target instanceof HTMLElement &&
                                !a(l.target) &&
                                l.preventDefault();
                        },
                        { passive: !1 }
                    ),
                    n.add(() => {
                        window.scrollTo(0, window.pageYOffset + e),
                            o &&
                                o.isConnected &&
                                (o.scrollIntoView({ block: "nearest" }),
                                (o = null));
                    });
            });
        },
    };
}
function Gt() {
    return {
        before({ doc: e, d: t }) {
            t.style(e.documentElement, "overflow", "hidden");
        },
    };
}
function zt(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t;
}
let D = Vt(() => new Map(), {
    PUSH(e, t) {
        var n;
        let r =
            (n = this.get(e)) != null
                ? n
                : { doc: e, count: 0, d: $e(), meta: new Set() };
        return r.count++, r.meta.add(t), this.set(e, r), this;
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this;
    },
    SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
        let r = { doc: e, d: t, meta: zt(n) },
            a = [qt(), Xt(), Gt()];
        a.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
            a.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
    },
    SCROLL_ALLOW({ d: e }) {
        e.dispose();
    },
    TEARDOWN({ doc: e }) {
        this.delete(e);
    },
});
D.subscribe(() => {
    let e = D.getSnapshot(),
        t = new Map();
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            a = n.count !== 0;
        ((a && !r) || (!a && r)) &&
            D.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            n.count === 0 && D.dispatch("TEARDOWN", n);
    }
});
function Jt(e, t, n) {
    let r = Ut(D),
        a = e ? r.get(e) : void 0,
        o = a ? a.count > 0 : !1;
    return (
        F(() => {
            if (!(!e || !t))
                return D.dispatch("PUSH", e, n), () => D.dispatch("POP", e, n);
        }, [t, e]),
        o
    );
}
let ee = new Map(),
    A = new Map();
function Ee(e, t = !0) {
    F(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;
        function a() {
            var l;
            if (!r) return;
            let i = (l = A.get(r)) != null ? l : 1;
            if ((i === 1 ? A.delete(r) : A.set(r, i - 1), i !== 1)) return;
            let s = ee.get(r);
            s &&
                (s["aria-hidden"] === null
                    ? r.removeAttribute("aria-hidden")
                    : r.setAttribute("aria-hidden", s["aria-hidden"]),
                (r.inert = s.inert),
                ee.delete(r));
        }
        let o = (n = A.get(r)) != null ? n : 0;
        return (
            A.set(r, o + 1),
            o !== 0 ||
                (ee.set(r, {
                    "aria-hidden": r.getAttribute("aria-hidden"),
                    inert: r.inert,
                }),
                r.setAttribute("aria-hidden", "true"),
                (r.inert = !0)),
            a
        );
    }, [e, t]);
}
function Kt({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n,
} = {}) {
    var r;
    let a = u.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        o = H(a),
        l = g(() => {
            var i;
            let s = [];
            for (let c of e)
                c !== null &&
                    (c instanceof HTMLElement
                        ? s.push(c)
                        : "current" in c &&
                          c.current instanceof HTMLElement &&
                          s.push(c.current));
            if (t != null && t.current) for (let c of t.current) s.push(c);
            for (let c of (i =
                o == null
                    ? void 0
                    : o.querySelectorAll("html > *, body > *")) != null
                ? i
                : [])
                c !== document.body &&
                    c !== document.head &&
                    c instanceof HTMLElement &&
                    c.id !== "headlessui-portal-root" &&
                    (c.contains(a.current) ||
                        s.some((d) => c.contains(d)) ||
                        s.push(c));
            return s;
        });
    return {
        resolveContainers: l,
        contains: g((i) => l().some((s) => s.contains(i))),
        mainTreeNodeRef: a,
        MainTreeNode: u.useMemo(
            () =>
                function () {
                    return n != null
                        ? null
                        : f.createElement(re, { features: oe.Hidden, ref: a });
                },
            [a, n]
        ),
    };
}
var Qt = ((e) => (
        (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
    ))(Qt || {}),
    Zt = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Zt || {});
let en = {
        0(e, t) {
            return e.titleId === t.id ? e : { ...e, titleId: t.id };
        },
    },
    G = u.createContext(null);
G.displayName = "DialogContext";
function j(e) {
    let t = u.useContext(G);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(n, j), n);
    }
    return t;
}
function tn(e, t, n = () => [document.body]) {
    Jt(e, t, (r) => {
        var a;
        return { containers: [...((a = r.containers) != null ? a : []), n] };
    });
}
function nn(e, t) {
    return B(t.type, en, e, t);
}
let rn = "div",
    on = he.RenderStrategy | he.Static;
function ln(e, t) {
    var n;
    let r = k(),
        {
            id: a = `headlessui-dialog-${r}`,
            open: o,
            onClose: l,
            initialFocus: i,
            __demoMode: s = !1,
            ...c
        } = e,
        [d, O] = u.useState(0),
        L = Qe();
    o === void 0 && L !== null && (o = (L & X.Open) === X.Open);
    let v = u.useRef(null),
        z = T(v, t),
        p = H(v),
        y = e.hasOwnProperty("open") || L !== null,
        S = e.hasOwnProperty("onClose");
    if (!y && !S)
        throw new Error(
            "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
        );
    if (!y)
        throw new Error(
            "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
        );
    if (!S)
        throw new Error(
            "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
        );
    if (typeof o != "boolean")
        throw new Error(
            `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`
        );
    if (typeof l != "function")
        throw new Error(
            `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`
        );
    let h = o ? 0 : 1,
        [W, Re] = u.useReducer(nn, {
            titleId: null,
            descriptionId: null,
            panelRef: u.createRef(),
        }),
        x = g(() => l(!1)),
        pe = g((m) => Re({ type: 0, id: m })),
        Y = ce() ? (s ? !1 : h === 0) : !1,
        _ = d > 1,
        me = u.useContext(G) !== null,
        [Fe, ke] = bt(),
        {
            resolveContainers: J,
            mainTreeNodeRef: U,
            MainTreeNode: Oe,
        } = Kt({
            portals: Fe,
            defaultContainers: [
                (n = W.panelRef.current) != null ? n : v.current,
            ],
        }),
        Ne = _ ? "parent" : "leaf",
        ge = L !== null ? (L & X.Closing) === X.Closing : !1,
        Ae = (() => (me || ge ? !1 : Y))(),
        Ie = u.useCallback(() => {
            var m, $;
            return ($ = Array.from(
                (m = p == null ? void 0 : p.querySelectorAll("body > *")) !=
                    null
                    ? m
                    : []
            ).find((E) =>
                E.id === "headlessui-portal-root"
                    ? !1
                    : E.contains(U.current) && E instanceof HTMLElement
            )) != null
                ? $
                : null;
        }, [U]);
    Ee(Ie, Ae);
    let Be = (() => (_ ? !0 : Y))(),
        He = u.useCallback(() => {
            var m, $;
            return ($ = Array.from(
                (m =
                    p == null
                        ? void 0
                        : p.querySelectorAll("[data-headlessui-portal]")) !=
                    null
                    ? m
                    : []
            ).find((E) => E.contains(U.current) && E instanceof HTMLElement)) !=
                null
                ? $
                : null;
        }, [U]);
    Ee(He, Be);
    let je = (() => !(!Y || _))();
    nt(J, x, je);
    let We = (() => !(_ || h !== 0))();
    be(p == null ? void 0 : p.defaultView, "keydown", (m) => {
        We &&
            (m.defaultPrevented ||
                (m.key === rt.Escape &&
                    (m.preventDefault(), m.stopPropagation(), x())));
    });
    let Ye = (() => !(ge || h !== 0 || me))();
    tn(p, Ye, J),
        u.useEffect(() => {
            if (h !== 0 || !v.current) return;
            let m = new ResizeObserver(($) => {
                for (let E of $) {
                    let V = E.target.getBoundingClientRect();
                    V.x === 0 &&
                        V.y === 0 &&
                        V.width === 0 &&
                        V.height === 0 &&
                        x();
                }
            });
            return m.observe(v.current), () => m.disconnect();
        }, [h, v, x]);
    let [_e, Ue] = St(),
        Ve = u.useMemo(
            () => [{ dialogState: h, close: x, setTitleId: pe }, W],
            [h, W, x, pe]
        ),
        ve = u.useMemo(() => ({ open: h === 0 }), [h]),
        Xe = {
            ref: z,
            id: a,
            role: "dialog",
            "aria-modal": h === 0 ? !0 : void 0,
            "aria-labelledby": W.titleId,
            "aria-describedby": _e,
        };
    return f.createElement(
        Rt,
        {
            type: "Dialog",
            enabled: h === 0,
            element: v,
            onUpdate: g((m, $) => {
                $ === "Dialog" &&
                    B(m, {
                        [ue.Add]: () => O((E) => E + 1),
                        [ue.Remove]: () => O((E) => E - 1),
                    });
            }),
        },
        f.createElement(
            le,
            { force: !0 },
            f.createElement(
                ie,
                null,
                f.createElement(
                    G.Provider,
                    { value: Ve },
                    f.createElement(
                        ie.Group,
                        { target: v },
                        f.createElement(
                            le,
                            { force: !1 },
                            f.createElement(
                                Ue,
                                { slot: ve, name: "Dialog.Description" },
                                f.createElement(
                                    N,
                                    {
                                        initialFocus: i,
                                        containers: J,
                                        features: Y
                                            ? B(Ne, {
                                                  parent: N.features
                                                      .RestoreFocus,
                                                  leaf:
                                                      N.features.All &
                                                      ~N.features.FocusLock,
                                              })
                                            : N.features.None,
                                    },
                                    f.createElement(
                                        ke,
                                        null,
                                        C({
                                            ourProps: Xe,
                                            theirProps: c,
                                            slot: ve,
                                            defaultTag: rn,
                                            features: on,
                                            visible: h === 0,
                                            name: "Dialog",
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        f.createElement(Oe, null)
    );
}
let an = "div";
function un(e, t) {
    let n = k(),
        { id: r = `headlessui-dialog-overlay-${n}`, ...a } = e,
        [{ dialogState: o, close: l }] = j("Dialog.Overlay"),
        i = T(t),
        s = g((d) => {
            if (d.target === d.currentTarget) {
                if (ot(d.currentTarget)) return d.preventDefault();
                d.preventDefault(), d.stopPropagation(), l();
            }
        }),
        c = u.useMemo(() => ({ open: o === 0 }), [o]);
    return C({
        ourProps: { ref: i, id: r, "aria-hidden": !0, onClick: s },
        theirProps: a,
        slot: c,
        defaultTag: an,
        name: "Dialog.Overlay",
    });
}
let sn = "div";
function cn(e, t) {
    let n = k(),
        { id: r = `headlessui-dialog-backdrop-${n}`, ...a } = e,
        [{ dialogState: o }, l] = j("Dialog.Backdrop"),
        i = T(t);
    u.useEffect(() => {
        if (l.panelRef.current === null)
            throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
            );
    }, [l.panelRef]);
    let s = u.useMemo(() => ({ open: o === 0 }), [o]);
    return f.createElement(
        le,
        { force: !0 },
        f.createElement(
            ie,
            null,
            C({
                ourProps: { ref: i, id: r, "aria-hidden": !0 },
                theirProps: a,
                slot: s,
                defaultTag: sn,
                name: "Dialog.Backdrop",
            })
        )
    );
}
let dn = "div";
function fn(e, t) {
    let n = k(),
        { id: r = `headlessui-dialog-panel-${n}`, ...a } = e,
        [{ dialogState: o }, l] = j("Dialog.Panel"),
        i = T(t, l.panelRef),
        s = u.useMemo(() => ({ open: o === 0 }), [o]),
        c = g((d) => {
            d.stopPropagation();
        });
    return C({
        ourProps: { ref: i, id: r, onClick: c },
        theirProps: a,
        slot: s,
        defaultTag: dn,
        name: "Dialog.Panel",
    });
}
let pn = "h2";
function mn(e, t) {
    let n = k(),
        { id: r = `headlessui-dialog-title-${n}`, ...a } = e,
        [{ dialogState: o, setTitleId: l }] = j("Dialog.Title"),
        i = T(t);
    u.useEffect(() => (l(r), () => l(null)), [r, l]);
    let s = u.useMemo(() => ({ open: o === 0 }), [o]);
    return C({
        ourProps: { ref: i, id: r },
        theirProps: a,
        slot: s,
        defaultTag: pn,
        name: "Dialog.Title",
    });
}
let gn = b(ln),
    vn = b(cn),
    hn = b(fn),
    En = b(un),
    wn = b(mn),
    te = Object.assign(gn, {
        Backdrop: vn,
        Panel: hn,
        Overlay: En,
        Title: wn,
        Description: Mt,
    });
var yn = lt("x", "IconX", [
    ["path", { d: "M18 6l-12 12", key: "svg-0" }],
    ["path", { d: "M6 6l12 12", key: "svg-1" }],
]);
function Sn({
    isOpen: e,
    onClose: t,
    size: n,
    title: r,
    children: a,
    type: o,
}) {
    return w(Ge, {
        children: w(Q, {
            appear: !0,
            show: e,
            as: u.Fragment,
            children: K(te, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [
                    w(Q.Child, {
                        as: u.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: w("div", {
                            className: "fixed inset-0 bg-black bg-opacity-25",
                        }),
                    }),
                    w("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: w("div", {
                            className:
                                "flex min-h-full items-center justify-center p-4 text-center",
                            children: w(Q.Child, {
                                as: u.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: K(te.Panel, {
                                    className: `w-full sm:w-${n} transform overflow-hidden rounded bg-white mt-16 p-6 text-left align-middle shadow-xl transition-all`,
                                    children: [
                                        K(te.Title, {
                                            as: "h3",
                                            className:
                                                "text-lg text-fourth font-medium leading-6 mt-4 text-gray-700",
                                            children: [
                                                "Form ",
                                                o == "create"
                                                    ? "Create"
                                                    : o === "delete"
                                                    ? "Delete"
                                                    : "Edit",
                                                " ",
                                                r,
                                            ],
                                        }),
                                        w("button", {
                                            className:
                                                "absolute right-2 top-2 py-2 px-2 bg-transparent text-third",
                                            onClick: t,
                                            children: w(yn, {}),
                                        }),
                                        w("div", {
                                            className: "mt-2",
                                            children: a,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
export { yn as I, Sn as M, te as _ };
