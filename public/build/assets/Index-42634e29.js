import {
    c as yn,
    d as Vi,
    r as Sn,
    a as $,
    q as zi,
    j as _t,
    F as ur,
    b as ji,
    y as hr,
} from "./app-50127253.js";
import { A as fr } from "./Actionbutton-61e1fa01.js";
import { C as Ur } from "./Container-58708669.js";
import { P as Gi } from "./Pagination-a95b02de.js";
import { T as ut } from "./Table-e4273544.js";
import { A as Wi } from "./App-f48d50a9.js";
import { T as Yi } from "./TextInput-01542f12.js";
import { _ as dr } from "./index-f4d5d2b2.js";
import { A as Xi } from "./ActionLink-e34be557.js";
import { c as Vn } from "./createReactComponent-f77338bd.js";
import { I as Zi, a as Qi } from "./IconMoodSmile-f8e9c224.js";
import "./transition-42c9a528.js";
function Ki(h, u) {
    for (var l = 0; l < u.length; l++) {
        const w = u[l];
        if (typeof w != "string" && !Array.isArray(w)) {
            for (const E in w)
                if (E !== "default" && !(E in h)) {
                    const d = Object.getOwnPropertyDescriptor(w, E);
                    d &&
                        Object.defineProperty(
                            h,
                            E,
                            d.get ? d : { enumerable: !0, get: () => w[E] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(h, Symbol.toStringTag, { value: "Module" })
    );
}
var qi = Vn("camera-x", "IconCameraX", [
        [
            "path",
            {
                d: "M13.5 20h-8.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4",
                key: "svg-0",
            },
        ],
        ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }],
        ["path", { d: "M22 22l-5 -5", key: "svg-2" }],
        ["path", { d: "M17 22l5 -5", key: "svg-3" }],
    ]),
    Hr = Vn("lock-exclamation", "IconLockExclamation", [
        [
            "path",
            {
                d: "M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.734 1.002",
                key: "svg-0",
            },
        ],
        ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }],
        ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }],
        ["path", { d: "M19 16v3", key: "svg-3" }],
        ["path", { d: "M19 22v.01", key: "svg-4" }],
    ]),
    Ji = Vn("qrcode", "IconQrcode", [
        [
            "path",
            {
                d: "M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
                key: "svg-0",
            },
        ],
        ["path", { d: "M7 17l0 .01", key: "svg-1" }],
        [
            "path",
            {
                d: "M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
                key: "svg-2",
            },
        ],
        ["path", { d: "M7 7l0 .01", key: "svg-3" }],
        [
            "path",
            {
                d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
                key: "svg-4",
            },
        ],
        ["path", { d: "M17 7l0 .01", key: "svg-5" }],
        ["path", { d: "M14 14l3 0", key: "svg-6" }],
        ["path", { d: "M20 14l0 .01", key: "svg-7" }],
        ["path", { d: "M14 14l0 3", key: "svg-8" }],
        ["path", { d: "M14 20l3 0", key: "svg-9" }],
        ["path", { d: "M17 17l3 0", key: "svg-10" }],
        ["path", { d: "M20 17l0 3", key: "svg-11" }],
    ]),
    $i = Vn("scan", "IconScan", [
        ["path", { d: "M4 7v-1a2 2 0 0 1 2 -2h2", key: "svg-0" }],
        ["path", { d: "M4 17v1a2 2 0 0 0 2 2h2", key: "svg-1" }],
        ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1", key: "svg-2" }],
        ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-1", key: "svg-3" }],
        ["path", { d: "M5 12l14 0", key: "svg-4" }],
    ]),
    z;
(function (h) {
    (h[(h.QR_CODE = 0)] = "QR_CODE"),
        (h[(h.AZTEC = 1)] = "AZTEC"),
        (h[(h.CODABAR = 2)] = "CODABAR"),
        (h[(h.CODE_39 = 3)] = "CODE_39"),
        (h[(h.CODE_93 = 4)] = "CODE_93"),
        (h[(h.CODE_128 = 5)] = "CODE_128"),
        (h[(h.DATA_MATRIX = 6)] = "DATA_MATRIX"),
        (h[(h.MAXICODE = 7)] = "MAXICODE"),
        (h[(h.ITF = 8)] = "ITF"),
        (h[(h.EAN_13 = 9)] = "EAN_13"),
        (h[(h.EAN_8 = 10)] = "EAN_8"),
        (h[(h.PDF_417 = 11)] = "PDF_417"),
        (h[(h.RSS_14 = 12)] = "RSS_14"),
        (h[(h.RSS_EXPANDED = 13)] = "RSS_EXPANDED"),
        (h[(h.UPC_A = 14)] = "UPC_A"),
        (h[(h.UPC_E = 15)] = "UPC_E"),
        (h[(h.UPC_EAN_EXTENSION = 16)] = "UPC_EAN_EXTENSION");
})(z || (z = {}));
var Vr = new Map([
        [z.QR_CODE, "QR_CODE"],
        [z.AZTEC, "AZTEC"],
        [z.CODABAR, "CODABAR"],
        [z.CODE_39, "CODE_39"],
        [z.CODE_93, "CODE_93"],
        [z.CODE_128, "CODE_128"],
        [z.DATA_MATRIX, "DATA_MATRIX"],
        [z.MAXICODE, "MAXICODE"],
        [z.ITF, "ITF"],
        [z.EAN_13, "EAN_13"],
        [z.EAN_8, "EAN_8"],
        [z.PDF_417, "PDF_417"],
        [z.RSS_14, "RSS_14"],
        [z.RSS_EXPANDED, "RSS_EXPANDED"],
        [z.UPC_A, "UPC_A"],
        [z.UPC_E, "UPC_E"],
        [z.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"],
    ]),
    zr;
(function (h) {
    (h[(h.UNKNOWN = 0)] = "UNKNOWN"), (h[(h.URL = 1)] = "URL");
})(zr || (zr = {}));
function es(h) {
    return Object.values(z).includes(h);
}
var Wt;
(function (h) {
    (h[(h.SCAN_TYPE_CAMERA = 0)] = "SCAN_TYPE_CAMERA"),
        (h[(h.SCAN_TYPE_FILE = 1)] = "SCAN_TYPE_FILE");
})(Wt || (Wt = {}));
var It = (function () {
        function h() {}
        return (
            (h.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode"),
            (h.SCAN_DEFAULT_FPS = 2),
            (h.DEFAULT_DISABLE_FLIP = !1),
            (h.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0),
            (h.DEFAULT_SUPPORTED_SCAN_TYPE = [
                Wt.SCAN_TYPE_CAMERA,
                Wt.SCAN_TYPE_FILE,
            ]),
            h
        );
    })(),
    ri = (function () {
        function h(u, l) {
            (this.format = u), (this.formatName = l);
        }
        return (
            (h.prototype.toString = function () {
                return this.formatName;
            }),
            (h.create = function (u) {
                if (!Vr.has(u))
                    throw "".concat(
                        u,
                        " not in html5QrcodeSupportedFormatsTextMap"
                    );
                return new h(u, Vr.get(u));
            }),
            h
        );
    })(),
    jr = (function () {
        function h() {}
        return (
            (h.createFromText = function (u) {
                var l = { text: u };
                return { decodedText: u, result: l };
            }),
            (h.createFromQrcodeResult = function (u) {
                return { decodedText: u.text, result: u };
            }),
            h
        );
    })(),
    gr;
(function (h) {
    (h[(h.UNKWOWN_ERROR = 0)] = "UNKWOWN_ERROR"),
        (h[(h.IMPLEMENTATION_ERROR = 1)] = "IMPLEMENTATION_ERROR"),
        (h[(h.NO_CODE_FOUND_ERROR = 2)] = "NO_CODE_FOUND_ERROR");
})(gr || (gr = {}));
var ii = (function () {
        function h() {}
        return (
            (h.createFrom = function (u) {
                return { errorMessage: u, type: gr.UNKWOWN_ERROR };
            }),
            h
        );
    })(),
    si = (function () {
        function h(u) {
            this.verbose = u;
        }
        return (
            (h.prototype.log = function (u) {
                this.verbose && console.log(u);
            }),
            (h.prototype.warn = function (u) {
                this.verbose && console.warn(u);
            }),
            (h.prototype.logError = function (u, l) {
                (this.verbose || l === !0) && console.error(u);
            }),
            (h.prototype.logErrors = function (u) {
                if (u.length === 0)
                    throw "Logger#logError called without arguments";
                this.verbose && console.error(u);
            }),
            h
        );
    })();
function Dt(h) {
    return typeof h > "u" || h === null;
}
function ts(h, u, l) {
    return h > l ? l : h < u ? u : h;
}
var un = (function () {
        function h() {}
        return (
            (h.codeParseError = function (u) {
                return "QR code parse error, error = ".concat(u);
            }),
            (h.errorGettingUserMedia = function (u) {
                return "Error getting userMedia, error = ".concat(u);
            }),
            (h.onlyDeviceSupportedError = function () {
                return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string).";
            }),
            (h.cameraStreamingNotSupported = function () {
                return "Camera streaming not supported by the browser.";
            }),
            (h.unableToQuerySupportedDevices = function () {
                return "Unable to query supported devices, unknown error.";
            }),
            (h.insecureContextCameraQueryError = function () {
                return "Camera access is only supported in secure context like https or localhost.";
            }),
            (h.scannerPaused = function () {
                return "Scanner paused";
            }),
            h
        );
    })(),
    Ce = (function () {
        function h() {}
        return (
            (h.scanningStatus = function () {
                return "Scanning";
            }),
            (h.idleStatus = function () {
                return "Idle";
            }),
            (h.errorStatus = function () {
                return "Error";
            }),
            (h.permissionStatus = function () {
                return "Permission";
            }),
            (h.noCameraFoundErrorStatus = function () {
                return "No Cameras";
            }),
            (h.lastMatch = function (u) {
                return "Last Match: ".concat(u);
            }),
            (h.codeScannerTitle = function () {
                return "Code Scanner";
            }),
            (h.cameraPermissionTitle = function () {
                return "Request Camera Permissions";
            }),
            (h.cameraPermissionRequesting = function () {
                return "Requesting camera permissions...";
            }),
            (h.noCameraFound = function () {
                return "No camera found";
            }),
            (h.scanButtonStopScanningText = function () {
                return "Stop Scanning";
            }),
            (h.scanButtonStartScanningText = function () {
                return "Start Scanning";
            }),
            (h.torchOnButton = function () {
                return "Switch On Torch";
            }),
            (h.torchOffButton = function () {
                return "Switch Off Torch";
            }),
            (h.torchOnFailedMessage = function () {
                return "Failed to turn on torch";
            }),
            (h.torchOffFailedMessage = function () {
                return "Failed to turn off torch";
            }),
            (h.scanButtonScanningStarting = function () {
                return "Launching Camera...";
            }),
            (h.textIfCameraScanSelected = function () {
                return "Scan an Image File";
            }),
            (h.textIfFileScanSelected = function () {
                return "Scan using camera directly";
            }),
            (h.selectCamera = function () {
                return "Select Camera";
            }),
            (h.fileSelectionChooseImage = function () {
                return "Choose Image";
            }),
            (h.fileSelectionChooseAnother = function () {
                return "Choose Another";
            }),
            (h.fileSelectionNoImageSelected = function () {
                return "No image choosen";
            }),
            (h.anonymousCameraPrefix = function () {
                return "Anonymous Camera";
            }),
            (h.dragAndDropMessage = function () {
                return "Or drop an image to scan";
            }),
            (h.dragAndDropMessageOnlyImages = function () {
                return "Or drop an image to scan (other files not supported)";
            }),
            (h.zoom = function () {
                return "zoom";
            }),
            (h.loadingImage = function () {
                return "Loading image...";
            }),
            (h.cameraScanAltText = function () {
                return "Camera based scan";
            }),
            (h.fileScanAltText = function () {
                return "Fule based scan";
            }),
            h
        );
    })(),
    Gr = (function () {
        function h() {}
        return (
            (h.poweredBy = function () {
                return "Powered by ";
            }),
            (h.reportIssues = function () {
                return "Report issues";
            }),
            h
        );
    })(),
    oi = (function () {
        function h() {}
        return (
            (h.isMediaStreamConstraintsValid = function (u, l) {
                if (typeof u != "object") {
                    var w = typeof u;
                    return (
                        l.logError(
                            "videoConstraints should be of type object, the " +
                                "object passed is of type ".concat(w, "."),
                            !0
                        ),
                        !1
                    );
                }
                for (
                    var E = [
                            "autoGainControl",
                            "channelCount",
                            "echoCancellation",
                            "latency",
                            "noiseSuppression",
                            "sampleRate",
                            "sampleSize",
                            "volume",
                        ],
                        d = new Set(E),
                        y = Object.keys(u),
                        D = 0,
                        v = y;
                    D < v.length;
                    D++
                ) {
                    var C = v[D];
                    if (d.has(C))
                        return (
                            l.logError(
                                "".concat(
                                    C,
                                    " is not supported videoConstaints."
                                ),
                                !0
                            ),
                            !1
                        );
                }
                return !0;
            }),
            h
        );
    })(),
    xr = { exports: {} };
(function (h, u) {
    (function (l, w) {
        w(u);
    })(yn, function (l) {
        function w(g) {
            return g == null;
        }
        var E =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (g, e) {
                    g.__proto__ = e;
                }) ||
            function (g, e) {
                for (var t in e) e.hasOwnProperty(t) && (g[t] = e[t]);
            };
        function d(g, e) {
            E(g, e);
            function t() {
                this.constructor = g;
            }
            g.prototype =
                e === null
                    ? Object.create(e)
                    : ((t.prototype = e.prototype), new t());
        }
        function y(g, e) {
            var t = Object.setPrototypeOf;
            t ? t(g, e) : (g.__proto__ = e);
        }
        function D(g, e) {
            e === void 0 && (e = g.constructor);
            var t = Error.captureStackTrace;
            t && t(g, e);
        }
        var v = (function (g) {
            d(e, g);
            function e(t) {
                var n = this.constructor,
                    r = g.call(this, t) || this;
                return (
                    Object.defineProperty(r, "name", {
                        value: n.name,
                        enumerable: !1,
                    }),
                    y(r, n.prototype),
                    D(r),
                    r
                );
            }
            return e;
        })(Error);
        class C extends v {
            constructor(e = void 0) {
                super(e), (this.message = e);
            }
            getKind() {
                return this.constructor.kind;
            }
        }
        C.kind = "Exception";
        class O extends C {}
        O.kind = "ArgumentException";
        class _ extends C {}
        _.kind = "IllegalArgumentException";
        class ie {
            constructor(e) {
                if (((this.binarizer = e), e === null))
                    throw new _("Binarizer must be non-null.");
            }
            getWidth() {
                return this.binarizer.getWidth();
            }
            getHeight() {
                return this.binarizer.getHeight();
            }
            getBlackRow(e, t) {
                return this.binarizer.getBlackRow(e, t);
            }
            getBlackMatrix() {
                return (
                    (this.matrix === null || this.matrix === void 0) &&
                        (this.matrix = this.binarizer.getBlackMatrix()),
                    this.matrix
                );
            }
            isCropSupported() {
                return this.binarizer.getLuminanceSource().isCropSupported();
            }
            crop(e, t, n, r) {
                const i = this.binarizer.getLuminanceSource().crop(e, t, n, r);
                return new ie(this.binarizer.createBinarizer(i));
            }
            isRotateSupported() {
                return this.binarizer.getLuminanceSource().isRotateSupported();
            }
            rotateCounterClockwise() {
                const e = this.binarizer
                    .getLuminanceSource()
                    .rotateCounterClockwise();
                return new ie(this.binarizer.createBinarizer(e));
            }
            rotateCounterClockwise45() {
                const e = this.binarizer
                    .getLuminanceSource()
                    .rotateCounterClockwise45();
                return new ie(this.binarizer.createBinarizer(e));
            }
            toString() {
                try {
                    return this.getBlackMatrix().toString();
                } catch {
                    return "";
                }
            }
        }
        class J extends C {
            static getChecksumInstance() {
                return new J();
            }
        }
        J.kind = "ChecksumException";
        class De {
            constructor(e) {
                this.source = e;
            }
            getLuminanceSource() {
                return this.source;
            }
            getWidth() {
                return this.source.getWidth();
            }
            getHeight() {
                return this.source.getHeight();
            }
        }
        class K {
            static arraycopy(e, t, n, r, i) {
                for (; i--; ) n[r++] = e[t++];
            }
            static currentTimeMillis() {
                return Date.now();
            }
        }
        class Ee extends C {}
        Ee.kind = "IndexOutOfBoundsException";
        class ze extends Ee {
            constructor(e = void 0, t = void 0) {
                super(t), (this.index = e), (this.message = t);
            }
        }
        ze.kind = "ArrayIndexOutOfBoundsException";
        class ce {
            static fill(e, t) {
                for (let n = 0, r = e.length; n < r; n++) e[n] = t;
            }
            static fillWithin(e, t, n, r) {
                ce.rangeCheck(e.length, t, n);
                for (let i = t; i < n; i++) e[i] = r;
            }
            static rangeCheck(e, t, n) {
                if (t > n)
                    throw new _("fromIndex(" + t + ") > toIndex(" + n + ")");
                if (t < 0) throw new ze(t);
                if (n > e) throw new ze(n);
            }
            static asList(...e) {
                return e;
            }
            static create(e, t, n) {
                return Array.from({ length: e }).map((i) =>
                    Array.from({ length: t }).fill(n)
                );
            }
            static createInt32Array(e, t, n) {
                return Array.from({ length: e }).map((i) =>
                    Int32Array.from({ length: t }).fill(n)
                );
            }
            static equals(e, t) {
                if (!e || !t || !e.length || !t.length || e.length !== t.length)
                    return !1;
                for (let n = 0, r = e.length; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0;
            }
            static hashCode(e) {
                if (e === null) return 0;
                let t = 1;
                for (const n of e) t = 31 * t + n;
                return t;
            }
            static fillUint8Array(e, t) {
                for (let n = 0; n !== e.length; n++) e[n] = t;
            }
            static copyOf(e, t) {
                return e.slice(0, t);
            }
            static copyOfUint8Array(e, t) {
                if (e.length <= t) {
                    const n = new Uint8Array(t);
                    return n.set(e), n;
                }
                return e.slice(0, t);
            }
            static copyOfRange(e, t, n) {
                const r = n - t,
                    i = new Int32Array(r);
                return K.arraycopy(e, t, i, 0, r), i;
            }
            static binarySearch(e, t, n) {
                n === void 0 && (n = ce.numberComparator);
                let r = 0,
                    i = e.length - 1;
                for (; r <= i; ) {
                    const s = (i + r) >> 1,
                        o = n(t, e[s]);
                    if (o > 0) r = s + 1;
                    else if (o < 0) i = s - 1;
                    else return s;
                }
                return -r - 1;
            }
            static numberComparator(e, t) {
                return e - t;
            }
        }
        class Z {
            static numberOfTrailingZeros(e) {
                let t;
                if (e === 0) return 32;
                let n = 31;
                return (
                    (t = e << 16),
                    t !== 0 && ((n -= 16), (e = t)),
                    (t = e << 8),
                    t !== 0 && ((n -= 8), (e = t)),
                    (t = e << 4),
                    t !== 0 && ((n -= 4), (e = t)),
                    (t = e << 2),
                    t !== 0 && ((n -= 2), (e = t)),
                    n - ((e << 1) >>> 31)
                );
            }
            static numberOfLeadingZeros(e) {
                if (e === 0) return 32;
                let t = 1;
                return (
                    e >>> 16 || ((t += 16), (e <<= 16)),
                    e >>> 24 || ((t += 8), (e <<= 8)),
                    e >>> 28 || ((t += 4), (e <<= 4)),
                    e >>> 30 || ((t += 2), (e <<= 2)),
                    (t -= e >>> 31),
                    t
                );
            }
            static toHexString(e) {
                return e.toString(16);
            }
            static toBinaryString(e) {
                return String(parseInt(String(e), 2));
            }
            static bitCount(e) {
                return (
                    (e = e - ((e >>> 1) & 1431655765)),
                    (e = (e & 858993459) + ((e >>> 2) & 858993459)),
                    (e = (e + (e >>> 4)) & 252645135),
                    (e = e + (e >>> 8)),
                    (e = e + (e >>> 16)),
                    e & 63
                );
            }
            static truncDivision(e, t) {
                return Math.trunc(e / t);
            }
            static parseInt(e, t = void 0) {
                return parseInt(e, t);
            }
        }
        (Z.MIN_VALUE_32_BITS = -2147483648),
            (Z.MAX_VALUE = Number.MAX_SAFE_INTEGER);
        class ae {
            constructor(e, t) {
                e === void 0
                    ? ((this.size = 0), (this.bits = new Int32Array(1)))
                    : ((this.size = e),
                      t == null
                          ? (this.bits = ae.makeArray(e))
                          : (this.bits = t));
            }
            getSize() {
                return this.size;
            }
            getSizeInBytes() {
                return Math.floor((this.size + 7) / 8);
            }
            ensureCapacity(e) {
                if (e > this.bits.length * 32) {
                    const t = ae.makeArray(e);
                    K.arraycopy(this.bits, 0, t, 0, this.bits.length),
                        (this.bits = t);
                }
            }
            get(e) {
                return (this.bits[Math.floor(e / 32)] & (1 << (e & 31))) !== 0;
            }
            set(e) {
                this.bits[Math.floor(e / 32)] |= 1 << (e & 31);
            }
            flip(e) {
                this.bits[Math.floor(e / 32)] ^= 1 << (e & 31);
            }
            getNextSet(e) {
                const t = this.size;
                if (e >= t) return t;
                const n = this.bits;
                let r = Math.floor(e / 32),
                    i = n[r];
                i &= ~((1 << (e & 31)) - 1);
                const s = n.length;
                for (; i === 0; ) {
                    if (++r === s) return t;
                    i = n[r];
                }
                const o = r * 32 + Z.numberOfTrailingZeros(i);
                return o > t ? t : o;
            }
            getNextUnset(e) {
                const t = this.size;
                if (e >= t) return t;
                const n = this.bits;
                let r = Math.floor(e / 32),
                    i = ~n[r];
                i &= ~((1 << (e & 31)) - 1);
                const s = n.length;
                for (; i === 0; ) {
                    if (++r === s) return t;
                    i = ~n[r];
                }
                const o = r * 32 + Z.numberOfTrailingZeros(i);
                return o > t ? t : o;
            }
            setBulk(e, t) {
                this.bits[Math.floor(e / 32)] = t;
            }
            setRange(e, t) {
                if (t < e || e < 0 || t > this.size) throw new _();
                if (t === e) return;
                t--;
                const n = Math.floor(e / 32),
                    r = Math.floor(t / 32),
                    i = this.bits;
                for (let s = n; s <= r; s++) {
                    const o = s > n ? 0 : e & 31,
                        c = (2 << (s < r ? 31 : t & 31)) - (1 << o);
                    i[s] |= c;
                }
            }
            clear() {
                const e = this.bits.length,
                    t = this.bits;
                for (let n = 0; n < e; n++) t[n] = 0;
            }
            isRange(e, t, n) {
                if (t < e || e < 0 || t > this.size) throw new _();
                if (t === e) return !0;
                t--;
                const r = Math.floor(e / 32),
                    i = Math.floor(t / 32),
                    s = this.bits;
                for (let o = r; o <= i; o++) {
                    const a = o > r ? 0 : e & 31,
                        f =
                            ((2 << (o < i ? 31 : t & 31)) - (1 << a)) &
                            4294967295;
                    if ((s[o] & f) !== (n ? f : 0)) return !1;
                }
                return !0;
            }
            appendBit(e) {
                this.ensureCapacity(this.size + 1),
                    e &&
                        (this.bits[Math.floor(this.size / 32)] |=
                            1 << (this.size & 31)),
                    this.size++;
            }
            appendBits(e, t) {
                if (t < 0 || t > 32)
                    throw new _("Num bits must be between 0 and 32");
                this.ensureCapacity(this.size + t);
                for (let n = t; n > 0; n--)
                    this.appendBit(((e >> (n - 1)) & 1) === 1);
            }
            appendBitArray(e) {
                const t = e.size;
                this.ensureCapacity(this.size + t);
                for (let n = 0; n < t; n++) this.appendBit(e.get(n));
            }
            xor(e) {
                if (this.size !== e.size) throw new _("Sizes don't match");
                const t = this.bits;
                for (let n = 0, r = t.length; n < r; n++) t[n] ^= e.bits[n];
            }
            toBytes(e, t, n, r) {
                for (let i = 0; i < r; i++) {
                    let s = 0;
                    for (let o = 0; o < 8; o++)
                        this.get(e) && (s |= 1 << (7 - o)), e++;
                    t[n + i] = s;
                }
            }
            getBitArray() {
                return this.bits;
            }
            reverse() {
                const e = new Int32Array(this.bits.length),
                    t = Math.floor((this.size - 1) / 32),
                    n = t + 1,
                    r = this.bits;
                for (let i = 0; i < n; i++) {
                    let s = r[i];
                    (s = ((s >> 1) & 1431655765) | ((s & 1431655765) << 1)),
                        (s = ((s >> 2) & 858993459) | ((s & 858993459) << 2)),
                        (s = ((s >> 4) & 252645135) | ((s & 252645135) << 4)),
                        (s = ((s >> 8) & 16711935) | ((s & 16711935) << 8)),
                        (s = ((s >> 16) & 65535) | ((s & 65535) << 16)),
                        (e[t - i] = s);
                }
                if (this.size !== n * 32) {
                    const i = n * 32 - this.size;
                    let s = e[0] >>> i;
                    for (let o = 1; o < n; o++) {
                        const a = e[o];
                        (s |= a << (32 - i)), (e[o - 1] = s), (s = a >>> i);
                    }
                    e[n - 1] = s;
                }
                this.bits = e;
            }
            static makeArray(e) {
                return new Int32Array(Math.floor((e + 31) / 32));
            }
            equals(e) {
                if (!(e instanceof ae)) return !1;
                const t = e;
                return this.size === t.size && ce.equals(this.bits, t.bits);
            }
            hashCode() {
                return 31 * this.size + ce.hashCode(this.bits);
            }
            toString() {
                let e = "";
                for (let t = 0, n = this.size; t < n; t++)
                    t & 7 || (e += " "), (e += this.get(t) ? "X" : ".");
                return e;
            }
            clone() {
                return new ae(this.size, this.bits.slice());
            }
        }
        var Me;
        (function (g) {
            (g[(g.OTHER = 0)] = "OTHER"),
                (g[(g.PURE_BARCODE = 1)] = "PURE_BARCODE"),
                (g[(g.POSSIBLE_FORMATS = 2)] = "POSSIBLE_FORMATS"),
                (g[(g.TRY_HARDER = 3)] = "TRY_HARDER"),
                (g[(g.CHARACTER_SET = 4)] = "CHARACTER_SET"),
                (g[(g.ALLOWED_LENGTHS = 5)] = "ALLOWED_LENGTHS"),
                (g[(g.ASSUME_CODE_39_CHECK_DIGIT = 6)] =
                    "ASSUME_CODE_39_CHECK_DIGIT"),
                (g[(g.ASSUME_GS1 = 7)] = "ASSUME_GS1"),
                (g[(g.RETURN_CODABAR_START_END = 8)] =
                    "RETURN_CODABAR_START_END"),
                (g[(g.NEED_RESULT_POINT_CALLBACK = 9)] =
                    "NEED_RESULT_POINT_CALLBACK"),
                (g[(g.ALLOWED_EAN_EXTENSIONS = 10)] = "ALLOWED_EAN_EXTENSIONS");
        })(Me || (Me = {}));
        var fe = Me;
        class U extends C {
            static getFormatInstance() {
                return new U();
            }
        }
        U.kind = "FormatException";
        var le;
        (function (g) {
            (g[(g.Cp437 = 0)] = "Cp437"),
                (g[(g.ISO8859_1 = 1)] = "ISO8859_1"),
                (g[(g.ISO8859_2 = 2)] = "ISO8859_2"),
                (g[(g.ISO8859_3 = 3)] = "ISO8859_3"),
                (g[(g.ISO8859_4 = 4)] = "ISO8859_4"),
                (g[(g.ISO8859_5 = 5)] = "ISO8859_5"),
                (g[(g.ISO8859_6 = 6)] = "ISO8859_6"),
                (g[(g.ISO8859_7 = 7)] = "ISO8859_7"),
                (g[(g.ISO8859_8 = 8)] = "ISO8859_8"),
                (g[(g.ISO8859_9 = 9)] = "ISO8859_9"),
                (g[(g.ISO8859_10 = 10)] = "ISO8859_10"),
                (g[(g.ISO8859_11 = 11)] = "ISO8859_11"),
                (g[(g.ISO8859_13 = 12)] = "ISO8859_13"),
                (g[(g.ISO8859_14 = 13)] = "ISO8859_14"),
                (g[(g.ISO8859_15 = 14)] = "ISO8859_15"),
                (g[(g.ISO8859_16 = 15)] = "ISO8859_16"),
                (g[(g.SJIS = 16)] = "SJIS"),
                (g[(g.Cp1250 = 17)] = "Cp1250"),
                (g[(g.Cp1251 = 18)] = "Cp1251"),
                (g[(g.Cp1252 = 19)] = "Cp1252"),
                (g[(g.Cp1256 = 20)] = "Cp1256"),
                (g[(g.UnicodeBigUnmarked = 21)] = "UnicodeBigUnmarked"),
                (g[(g.UTF8 = 22)] = "UTF8"),
                (g[(g.ASCII = 23)] = "ASCII"),
                (g[(g.Big5 = 24)] = "Big5"),
                (g[(g.GB18030 = 25)] = "GB18030"),
                (g[(g.EUC_KR = 26)] = "EUC_KR");
        })(le || (le = {}));
        class k {
            constructor(e, t, n, ...r) {
                (this.valueIdentifier = e),
                    (this.name = n),
                    typeof t == "number"
                        ? (this.values = Int32Array.from([t]))
                        : (this.values = t),
                    (this.otherEncodingNames = r),
                    k.VALUE_IDENTIFIER_TO_ECI.set(e, this),
                    k.NAME_TO_ECI.set(n, this);
                const i = this.values;
                for (let s = 0, o = i.length; s !== o; s++) {
                    const a = i[s];
                    k.VALUES_TO_ECI.set(a, this);
                }
                for (const s of r) k.NAME_TO_ECI.set(s, this);
            }
            getValueIdentifier() {
                return this.valueIdentifier;
            }
            getName() {
                return this.name;
            }
            getValue() {
                return this.values[0];
            }
            static getCharacterSetECIByValue(e) {
                if (e < 0 || e >= 900) throw new U("incorect value");
                const t = k.VALUES_TO_ECI.get(e);
                if (t === void 0) throw new U("incorect value");
                return t;
            }
            static getCharacterSetECIByName(e) {
                const t = k.NAME_TO_ECI.get(e);
                if (t === void 0) throw new U("incorect value");
                return t;
            }
            equals(e) {
                if (!(e instanceof k)) return !1;
                const t = e;
                return this.getName() === t.getName();
            }
        }
        (k.VALUE_IDENTIFIER_TO_ECI = new Map()),
            (k.VALUES_TO_ECI = new Map()),
            (k.NAME_TO_ECI = new Map()),
            (k.Cp437 = new k(le.Cp437, Int32Array.from([0, 2]), "Cp437")),
            (k.ISO8859_1 = new k(
                le.ISO8859_1,
                Int32Array.from([1, 3]),
                "ISO-8859-1",
                "ISO88591",
                "ISO8859_1"
            )),
            (k.ISO8859_2 = new k(
                le.ISO8859_2,
                4,
                "ISO-8859-2",
                "ISO88592",
                "ISO8859_2"
            )),
            (k.ISO8859_3 = new k(
                le.ISO8859_3,
                5,
                "ISO-8859-3",
                "ISO88593",
                "ISO8859_3"
            )),
            (k.ISO8859_4 = new k(
                le.ISO8859_4,
                6,
                "ISO-8859-4",
                "ISO88594",
                "ISO8859_4"
            )),
            (k.ISO8859_5 = new k(
                le.ISO8859_5,
                7,
                "ISO-8859-5",
                "ISO88595",
                "ISO8859_5"
            )),
            (k.ISO8859_6 = new k(
                le.ISO8859_6,
                8,
                "ISO-8859-6",
                "ISO88596",
                "ISO8859_6"
            )),
            (k.ISO8859_7 = new k(
                le.ISO8859_7,
                9,
                "ISO-8859-7",
                "ISO88597",
                "ISO8859_7"
            )),
            (k.ISO8859_8 = new k(
                le.ISO8859_8,
                10,
                "ISO-8859-8",
                "ISO88598",
                "ISO8859_8"
            )),
            (k.ISO8859_9 = new k(
                le.ISO8859_9,
                11,
                "ISO-8859-9",
                "ISO88599",
                "ISO8859_9"
            )),
            (k.ISO8859_10 = new k(
                le.ISO8859_10,
                12,
                "ISO-8859-10",
                "ISO885910",
                "ISO8859_10"
            )),
            (k.ISO8859_11 = new k(
                le.ISO8859_11,
                13,
                "ISO-8859-11",
                "ISO885911",
                "ISO8859_11"
            )),
            (k.ISO8859_13 = new k(
                le.ISO8859_13,
                15,
                "ISO-8859-13",
                "ISO885913",
                "ISO8859_13"
            )),
            (k.ISO8859_14 = new k(
                le.ISO8859_14,
                16,
                "ISO-8859-14",
                "ISO885914",
                "ISO8859_14"
            )),
            (k.ISO8859_15 = new k(
                le.ISO8859_15,
                17,
                "ISO-8859-15",
                "ISO885915",
                "ISO8859_15"
            )),
            (k.ISO8859_16 = new k(
                le.ISO8859_16,
                18,
                "ISO-8859-16",
                "ISO885916",
                "ISO8859_16"
            )),
            (k.SJIS = new k(le.SJIS, 20, "SJIS", "Shift_JIS")),
            (k.Cp1250 = new k(le.Cp1250, 21, "Cp1250", "windows-1250")),
            (k.Cp1251 = new k(le.Cp1251, 22, "Cp1251", "windows-1251")),
            (k.Cp1252 = new k(le.Cp1252, 23, "Cp1252", "windows-1252")),
            (k.Cp1256 = new k(le.Cp1256, 24, "Cp1256", "windows-1256")),
            (k.UnicodeBigUnmarked = new k(
                le.UnicodeBigUnmarked,
                25,
                "UnicodeBigUnmarked",
                "UTF-16BE",
                "UnicodeBig"
            )),
            (k.UTF8 = new k(le.UTF8, 26, "UTF8", "UTF-8")),
            (k.ASCII = new k(
                le.ASCII,
                Int32Array.from([27, 170]),
                "ASCII",
                "US-ASCII"
            )),
            (k.Big5 = new k(le.Big5, 28, "Big5")),
            (k.GB18030 = new k(
                le.GB18030,
                29,
                "GB18030",
                "GB2312",
                "EUC_CN",
                "GBK"
            )),
            (k.EUC_KR = new k(le.EUC_KR, 30, "EUC_KR", "EUC-KR"));
        class Lt extends C {}
        Lt.kind = "UnsupportedOperationException";
        class qe {
            static decode(e, t) {
                const n = this.encodingName(t);
                return this.customDecoder
                    ? this.customDecoder(e, n)
                    : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(n)
                    ? this.decodeFallback(e, n)
                    : new TextDecoder(n).decode(e);
            }
            static shouldDecodeOnFallback(e) {
                return !qe.isBrowser() && e === "ISO-8859-1";
            }
            static encode(e, t) {
                const n = this.encodingName(t);
                return this.customEncoder
                    ? this.customEncoder(e, n)
                    : typeof TextEncoder > "u"
                    ? this.encodeFallback(e)
                    : new TextEncoder().encode(e);
            }
            static isBrowser() {
                return (
                    typeof window < "u" &&
                    {}.toString.call(window) === "[object Window]"
                );
            }
            static encodingName(e) {
                return typeof e == "string" ? e : e.getName();
            }
            static encodingCharacterSet(e) {
                return e instanceof k ? e : k.getCharacterSetECIByName(e);
            }
            static decodeFallback(e, t) {
                const n = this.encodingCharacterSet(t);
                if (qe.isDecodeFallbackSupported(n)) {
                    let r = "";
                    for (let i = 0, s = e.length; i < s; i++) {
                        let o = e[i].toString(16);
                        o.length < 2 && (o = "0" + o), (r += "%" + o);
                    }
                    return decodeURIComponent(r);
                }
                if (n.equals(k.UnicodeBigUnmarked))
                    return String.fromCharCode.apply(
                        null,
                        new Uint16Array(e.buffer)
                    );
                throw new Lt(
                    `Encoding ${this.encodingName(
                        t
                    )} not supported by fallback.`
                );
            }
            static isDecodeFallbackSupported(e) {
                return (
                    e.equals(k.UTF8) ||
                    e.equals(k.ISO8859_1) ||
                    e.equals(k.ASCII)
                );
            }
            static encodeFallback(e) {
                const n = btoa(unescape(encodeURIComponent(e))).split(""),
                    r = [];
                for (let i = 0; i < n.length; i++) r.push(n[i].charCodeAt(0));
                return new Uint8Array(r);
            }
        }
        class q {
            static castAsNonUtf8Char(e, t = null) {
                const n = t ? t.getName() : this.ISO88591;
                return qe.decode(new Uint8Array([e]), n);
            }
            static guessEncoding(e, t) {
                if (t != null && t.get(fe.CHARACTER_SET) !== void 0)
                    return t.get(fe.CHARACTER_SET).toString();
                const n = e.length;
                let r = !0,
                    i = !0,
                    s = !0,
                    o = 0,
                    a = 0,
                    c = 0,
                    f = 0,
                    x = 0,
                    A = 0,
                    m = 0,
                    I = 0,
                    T = 0,
                    S = 0,
                    M = 0;
                const P =
                    e.length > 3 &&
                    e[0] === 239 &&
                    e[1] === 187 &&
                    e[2] === 191;
                for (let F = 0; F < n && (r || i || s); F++) {
                    const B = e[F] & 255;
                    s &&
                        (o > 0
                            ? B & 128
                                ? o--
                                : (s = !1)
                            : B & 128 &&
                              (B & 64
                                  ? (o++,
                                    B & 32
                                        ? (o++,
                                          B & 16
                                              ? (o++, B & 8 ? (s = !1) : f++)
                                              : c++)
                                        : a++)
                                  : (s = !1))),
                        r &&
                            (B > 127 && B < 160
                                ? (r = !1)
                                : B > 159 &&
                                  (B < 192 || B === 215 || B === 247) &&
                                  M++),
                        i &&
                            (x > 0
                                ? B < 64 || B === 127 || B > 252
                                    ? (i = !1)
                                    : x--
                                : B === 128 || B === 160 || B > 239
                                ? (i = !1)
                                : B > 160 && B < 224
                                ? (A++, (I = 0), m++, m > T && (T = m))
                                : B > 127
                                ? (x++, (m = 0), I++, I > S && (S = I))
                                : ((m = 0), (I = 0)));
                }
                return (
                    s && o > 0 && (s = !1),
                    i && x > 0 && (i = !1),
                    s && (P || a + c + f > 0)
                        ? q.UTF8
                        : i && (q.ASSUME_SHIFT_JIS || T >= 3 || S >= 3)
                        ? q.SHIFT_JIS
                        : r && i
                        ? (T === 2 && A === 2) || M * 10 >= n
                            ? q.SHIFT_JIS
                            : q.ISO88591
                        : r
                        ? q.ISO88591
                        : i
                        ? q.SHIFT_JIS
                        : s
                        ? q.UTF8
                        : q.PLATFORM_DEFAULT_ENCODING
                );
            }
            static format(e, ...t) {
                let n = -1;
                function r(s, o, a, c, f, x) {
                    if (s === "%%") return "%";
                    if (t[++n] === void 0) return;
                    s = c ? parseInt(c.substr(1)) : void 0;
                    let A = f ? parseInt(f.substr(1)) : void 0,
                        m;
                    switch (x) {
                        case "s":
                            m = t[n];
                            break;
                        case "c":
                            m = t[n][0];
                            break;
                        case "f":
                            m = parseFloat(t[n]).toFixed(s);
                            break;
                        case "p":
                            m = parseFloat(t[n]).toPrecision(s);
                            break;
                        case "e":
                            m = parseFloat(t[n]).toExponential(s);
                            break;
                        case "x":
                            m = parseInt(t[n]).toString(A || 16);
                            break;
                        case "d":
                            m = parseFloat(
                                parseInt(t[n], A || 10).toPrecision(s)
                            ).toFixed(0);
                            break;
                    }
                    m =
                        typeof m == "object"
                            ? JSON.stringify(m)
                            : (+m).toString(A);
                    let I = parseInt(a),
                        T = a && a[0] + "" == "0" ? "0" : " ";
                    for (; m.length < I; ) m = o !== void 0 ? m + T : T + m;
                    return m;
                }
                let i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
                return e.replace(i, r);
            }
            static getBytes(e, t) {
                return qe.encode(e, t);
            }
            static getCharCode(e, t = 0) {
                return e.charCodeAt(t);
            }
            static getCharAt(e) {
                return String.fromCharCode(e);
            }
        }
        (q.SHIFT_JIS = k.SJIS.getName()),
            (q.GB2312 = "GB2312"),
            (q.ISO88591 = k.ISO8859_1.getName()),
            (q.EUC_JP = "EUC_JP"),
            (q.UTF8 = k.UTF8.getName()),
            (q.PLATFORM_DEFAULT_ENCODING = q.UTF8),
            (q.ASSUME_SHIFT_JIS = !1);
        class we {
            constructor(e = "") {
                this.value = e;
            }
            enableDecoding(e) {
                return (this.encoding = e), this;
            }
            append(e) {
                return (
                    typeof e == "string"
                        ? (this.value += e.toString())
                        : this.encoding
                        ? (this.value += q.castAsNonUtf8Char(e, this.encoding))
                        : (this.value += String.fromCharCode(e)),
                    this
                );
            }
            appendChars(e, t, n) {
                for (let r = t; t < t + n; r++) this.append(e[r]);
                return this;
            }
            length() {
                return this.value.length;
            }
            charAt(e) {
                return this.value.charAt(e);
            }
            deleteCharAt(e) {
                this.value =
                    this.value.substr(0, e) + this.value.substring(e + 1);
            }
            setCharAt(e, t) {
                this.value =
                    this.value.substr(0, e) + t + this.value.substr(e + 1);
            }
            substring(e, t) {
                return this.value.substring(e, t);
            }
            setLengthToZero() {
                this.value = "";
            }
            toString() {
                return this.value;
            }
            insert(e, t) {
                this.value =
                    this.value.substr(0, e) +
                    t +
                    this.value.substr(e + t.length);
            }
        }
        class Pe {
            constructor(e, t, n, r) {
                if (
                    ((this.width = e),
                    (this.height = t),
                    (this.rowSize = n),
                    (this.bits = r),
                    t == null && (t = e),
                    (this.height = t),
                    e < 1 || t < 1)
                )
                    throw new _("Both dimensions must be greater than 0");
                n == null && (n = Math.floor((e + 31) / 32)),
                    (this.rowSize = n),
                    r == null &&
                        (this.bits = new Int32Array(
                            this.rowSize * this.height
                        ));
            }
            static parseFromBooleanArray(e) {
                const t = e.length,
                    n = e[0].length,
                    r = new Pe(n, t);
                for (let i = 0; i < t; i++) {
                    const s = e[i];
                    for (let o = 0; o < n; o++) s[o] && r.set(o, i);
                }
                return r;
            }
            static parseFromString(e, t, n) {
                if (e === null)
                    throw new _("stringRepresentation cannot be null");
                const r = new Array(e.length);
                let i = 0,
                    s = 0,
                    o = -1,
                    a = 0,
                    c = 0;
                for (; c < e.length; )
                    if (
                        e.charAt(c) ===
                            `
` ||
                        e.charAt(c) === "\r"
                    ) {
                        if (i > s) {
                            if (o === -1) o = i - s;
                            else if (i - s !== o)
                                throw new _("row lengths do not match");
                            (s = i), a++;
                        }
                        c++;
                    } else if (e.substring(c, c + t.length) === t)
                        (c += t.length), (r[i] = !0), i++;
                    else if (e.substring(c, c + n.length) === n)
                        (c += n.length), (r[i] = !1), i++;
                    else
                        throw new _(
                            "illegal character encountered: " + e.substring(c)
                        );
                if (i > s) {
                    if (o === -1) o = i - s;
                    else if (i - s !== o)
                        throw new _("row lengths do not match");
                    a++;
                }
                const f = new Pe(o, a);
                for (let x = 0; x < i; x++)
                    r[x] && f.set(Math.floor(x % o), Math.floor(x / o));
                return f;
            }
            get(e, t) {
                const n = t * this.rowSize + Math.floor(e / 32);
                return ((this.bits[n] >>> (e & 31)) & 1) !== 0;
            }
            set(e, t) {
                const n = t * this.rowSize + Math.floor(e / 32);
                this.bits[n] |= (1 << (e & 31)) & 4294967295;
            }
            unset(e, t) {
                const n = t * this.rowSize + Math.floor(e / 32);
                this.bits[n] &= ~((1 << (e & 31)) & 4294967295);
            }
            flip(e, t) {
                const n = t * this.rowSize + Math.floor(e / 32);
                this.bits[n] ^= (1 << (e & 31)) & 4294967295;
            }
            xor(e) {
                if (
                    this.width !== e.getWidth() ||
                    this.height !== e.getHeight() ||
                    this.rowSize !== e.getRowSize()
                )
                    throw new _("input matrix dimensions do not match");
                const t = new ae(Math.floor(this.width / 32) + 1),
                    n = this.rowSize,
                    r = this.bits;
                for (let i = 0, s = this.height; i < s; i++) {
                    const o = i * n,
                        a = e.getRow(i, t).getBitArray();
                    for (let c = 0; c < n; c++) r[o + c] ^= a[c];
                }
            }
            clear() {
                const e = this.bits,
                    t = e.length;
                for (let n = 0; n < t; n++) e[n] = 0;
            }
            setRegion(e, t, n, r) {
                if (t < 0 || e < 0)
                    throw new _("Left and top must be nonnegative");
                if (r < 1 || n < 1)
                    throw new _("Height and width must be at least 1");
                const i = e + n,
                    s = t + r;
                if (s > this.height || i > this.width)
                    throw new _("The region must fit inside the matrix");
                const o = this.rowSize,
                    a = this.bits;
                for (let c = t; c < s; c++) {
                    const f = c * o;
                    for (let x = e; x < i; x++)
                        a[f + Math.floor(x / 32)] |=
                            (1 << (x & 31)) & 4294967295;
                }
            }
            getRow(e, t) {
                t == null || t.getSize() < this.width
                    ? (t = new ae(this.width))
                    : t.clear();
                const n = this.rowSize,
                    r = this.bits,
                    i = e * n;
                for (let s = 0; s < n; s++) t.setBulk(s * 32, r[i + s]);
                return t;
            }
            setRow(e, t) {
                K.arraycopy(
                    t.getBitArray(),
                    0,
                    this.bits,
                    e * this.rowSize,
                    this.rowSize
                );
            }
            rotate180() {
                const e = this.getWidth(),
                    t = this.getHeight();
                let n = new ae(e),
                    r = new ae(e);
                for (let i = 0, s = Math.floor((t + 1) / 2); i < s; i++)
                    (n = this.getRow(i, n)),
                        (r = this.getRow(t - 1 - i, r)),
                        n.reverse(),
                        r.reverse(),
                        this.setRow(i, r),
                        this.setRow(t - 1 - i, n);
            }
            getEnclosingRectangle() {
                const e = this.width,
                    t = this.height,
                    n = this.rowSize,
                    r = this.bits;
                let i = e,
                    s = t,
                    o = -1,
                    a = -1;
                for (let c = 0; c < t; c++)
                    for (let f = 0; f < n; f++) {
                        const x = r[c * n + f];
                        if (x !== 0) {
                            if (
                                (c < s && (s = c), c > a && (a = c), f * 32 < i)
                            ) {
                                let A = 0;
                                for (; !((x << (31 - A)) & 4294967295); ) A++;
                                f * 32 + A < i && (i = f * 32 + A);
                            }
                            if (f * 32 + 31 > o) {
                                let A = 31;
                                for (; !(x >>> A); ) A--;
                                f * 32 + A > o && (o = f * 32 + A);
                            }
                        }
                    }
                return o < i || a < s
                    ? null
                    : Int32Array.from([i, s, o - i + 1, a - s + 1]);
            }
            getTopLeftOnBit() {
                const e = this.rowSize,
                    t = this.bits;
                let n = 0;
                for (; n < t.length && t[n] === 0; ) n++;
                if (n === t.length) return null;
                const r = n / e;
                let i = (n % e) * 32;
                const s = t[n];
                let o = 0;
                for (; !((s << (31 - o)) & 4294967295); ) o++;
                return (i += o), Int32Array.from([i, r]);
            }
            getBottomRightOnBit() {
                const e = this.rowSize,
                    t = this.bits;
                let n = t.length - 1;
                for (; n >= 0 && t[n] === 0; ) n--;
                if (n < 0) return null;
                const r = Math.floor(n / e);
                let i = Math.floor(n % e) * 32;
                const s = t[n];
                let o = 31;
                for (; !(s >>> o); ) o--;
                return (i += o), Int32Array.from([i, r]);
            }
            getWidth() {
                return this.width;
            }
            getHeight() {
                return this.height;
            }
            getRowSize() {
                return this.rowSize;
            }
            equals(e) {
                if (!(e instanceof Pe)) return !1;
                const t = e;
                return (
                    this.width === t.width &&
                    this.height === t.height &&
                    this.rowSize === t.rowSize &&
                    ce.equals(this.bits, t.bits)
                );
            }
            hashCode() {
                let e = this.width;
                return (
                    (e = 31 * e + this.width),
                    (e = 31 * e + this.height),
                    (e = 31 * e + this.rowSize),
                    (e = 31 * e + ce.hashCode(this.bits)),
                    e
                );
            }
            toString(
                e = "X ",
                t = "  ",
                n = `
`
            ) {
                return this.buildToString(e, t, n);
            }
            buildToString(e, t, n) {
                let r = new we();
                for (let i = 0, s = this.height; i < s; i++) {
                    for (let o = 0, a = this.width; o < a; o++)
                        r.append(this.get(o, i) ? e : t);
                    r.append(n);
                }
                return r.toString();
            }
            clone() {
                return new Pe(
                    this.width,
                    this.height,
                    this.rowSize,
                    this.bits.slice()
                );
            }
        }
        class R extends C {
            static getNotFoundInstance() {
                return new R();
            }
        }
        R.kind = "NotFoundException";
        class je extends De {
            constructor(e) {
                super(e),
                    (this.luminances = je.EMPTY),
                    (this.buckets = new Int32Array(je.LUMINANCE_BUCKETS));
            }
            getBlackRow(e, t) {
                const n = this.getLuminanceSource(),
                    r = n.getWidth();
                t == null || t.getSize() < r ? (t = new ae(r)) : t.clear(),
                    this.initArrays(r);
                const i = n.getRow(e, this.luminances),
                    s = this.buckets;
                for (let a = 0; a < r; a++)
                    s[(i[a] & 255) >> je.LUMINANCE_SHIFT]++;
                const o = je.estimateBlackPoint(s);
                if (r < 3)
                    for (let a = 0; a < r; a++) (i[a] & 255) < o && t.set(a);
                else {
                    let a = i[0] & 255,
                        c = i[1] & 255;
                    for (let f = 1; f < r - 1; f++) {
                        const x = i[f + 1] & 255;
                        (c * 4 - a - x) / 2 < o && t.set(f), (a = c), (c = x);
                    }
                }
                return t;
            }
            getBlackMatrix() {
                const e = this.getLuminanceSource(),
                    t = e.getWidth(),
                    n = e.getHeight(),
                    r = new Pe(t, n);
                this.initArrays(t);
                const i = this.buckets;
                for (let a = 1; a < 5; a++) {
                    const c = Math.floor((n * a) / 5),
                        f = e.getRow(c, this.luminances),
                        x = Math.floor((t * 4) / 5);
                    for (let A = Math.floor(t / 5); A < x; A++) {
                        const m = f[A] & 255;
                        i[m >> je.LUMINANCE_SHIFT]++;
                    }
                }
                const s = je.estimateBlackPoint(i),
                    o = e.getMatrix();
                for (let a = 0; a < n; a++) {
                    const c = a * t;
                    for (let f = 0; f < t; f++)
                        (o[c + f] & 255) < s && r.set(f, a);
                }
                return r;
            }
            createBinarizer(e) {
                return new je(e);
            }
            initArrays(e) {
                this.luminances.length < e &&
                    (this.luminances = new Uint8ClampedArray(e));
                const t = this.buckets;
                for (let n = 0; n < je.LUMINANCE_BUCKETS; n++) t[n] = 0;
            }
            static estimateBlackPoint(e) {
                const t = e.length;
                let n = 0,
                    r = 0,
                    i = 0;
                for (let f = 0; f < t; f++)
                    e[f] > i && ((r = f), (i = e[f])), e[f] > n && (n = e[f]);
                let s = 0,
                    o = 0;
                for (let f = 0; f < t; f++) {
                    const x = f - r,
                        A = e[f] * x * x;
                    A > o && ((s = f), (o = A));
                }
                if (r > s) {
                    const f = r;
                    (r = s), (s = f);
                }
                if (s - r <= t / 16) throw new R();
                let a = s - 1,
                    c = -1;
                for (let f = s - 1; f > r; f--) {
                    const x = f - r,
                        A = x * x * (s - f) * (n - e[f]);
                    A > c && ((a = f), (c = A));
                }
                return a << je.LUMINANCE_SHIFT;
            }
        }
        (je.LUMINANCE_BITS = 5),
            (je.LUMINANCE_SHIFT = 8 - je.LUMINANCE_BITS),
            (je.LUMINANCE_BUCKETS = 1 << je.LUMINANCE_BITS),
            (je.EMPTY = Uint8ClampedArray.from([0]));
        class te extends je {
            constructor(e) {
                super(e), (this.matrix = null);
            }
            getBlackMatrix() {
                if (this.matrix !== null) return this.matrix;
                const e = this.getLuminanceSource(),
                    t = e.getWidth(),
                    n = e.getHeight();
                if (t >= te.MINIMUM_DIMENSION && n >= te.MINIMUM_DIMENSION) {
                    const r = e.getMatrix();
                    let i = t >> te.BLOCK_SIZE_POWER;
                    t & te.BLOCK_SIZE_MASK && i++;
                    let s = n >> te.BLOCK_SIZE_POWER;
                    n & te.BLOCK_SIZE_MASK && s++;
                    const o = te.calculateBlackPoints(r, i, s, t, n),
                        a = new Pe(t, n);
                    te.calculateThresholdForBlock(r, i, s, t, n, o, a),
                        (this.matrix = a);
                } else this.matrix = super.getBlackMatrix();
                return this.matrix;
            }
            createBinarizer(e) {
                return new te(e);
            }
            static calculateThresholdForBlock(e, t, n, r, i, s, o) {
                const a = i - te.BLOCK_SIZE,
                    c = r - te.BLOCK_SIZE;
                for (let f = 0; f < n; f++) {
                    let x = f << te.BLOCK_SIZE_POWER;
                    x > a && (x = a);
                    const A = te.cap(f, 2, n - 3);
                    for (let m = 0; m < t; m++) {
                        let I = m << te.BLOCK_SIZE_POWER;
                        I > c && (I = c);
                        const T = te.cap(m, 2, t - 3);
                        let S = 0;
                        for (let P = -2; P <= 2; P++) {
                            const F = s[A + P];
                            S +=
                                F[T - 2] +
                                F[T - 1] +
                                F[T] +
                                F[T + 1] +
                                F[T + 2];
                        }
                        const M = S / 25;
                        te.thresholdBlock(e, I, x, M, r, o);
                    }
                }
            }
            static cap(e, t, n) {
                return e < t ? t : e > n ? n : e;
            }
            static thresholdBlock(e, t, n, r, i, s) {
                for (let o = 0, a = n * i + t; o < te.BLOCK_SIZE; o++, a += i)
                    for (let c = 0; c < te.BLOCK_SIZE; c++)
                        (e[a + c] & 255) <= r && s.set(t + c, n + o);
            }
            static calculateBlackPoints(e, t, n, r, i) {
                const s = i - te.BLOCK_SIZE,
                    o = r - te.BLOCK_SIZE,
                    a = new Array(n);
                for (let c = 0; c < n; c++) {
                    a[c] = new Int32Array(t);
                    let f = c << te.BLOCK_SIZE_POWER;
                    f > s && (f = s);
                    for (let x = 0; x < t; x++) {
                        let A = x << te.BLOCK_SIZE_POWER;
                        A > o && (A = o);
                        let m = 0,
                            I = 255,
                            T = 0;
                        for (
                            let M = 0, P = f * r + A;
                            M < te.BLOCK_SIZE;
                            M++, P += r
                        ) {
                            for (let F = 0; F < te.BLOCK_SIZE; F++) {
                                const B = e[P + F] & 255;
                                (m += B), B < I && (I = B), B > T && (T = B);
                            }
                            if (T - I > te.MIN_DYNAMIC_RANGE)
                                for (
                                    M++, P += r;
                                    M < te.BLOCK_SIZE;
                                    M++, P += r
                                )
                                    for (let F = 0; F < te.BLOCK_SIZE; F++)
                                        m += e[P + F] & 255;
                        }
                        let S = m >> (te.BLOCK_SIZE_POWER * 2);
                        if (
                            T - I <= te.MIN_DYNAMIC_RANGE &&
                            ((S = I / 2), c > 0 && x > 0)
                        ) {
                            const M =
                                (a[c - 1][x] +
                                    2 * a[c][x - 1] +
                                    a[c - 1][x - 1]) /
                                4;
                            I < M && (S = M);
                        }
                        a[c][x] = S;
                    }
                }
                return a;
            }
        }
        (te.BLOCK_SIZE_POWER = 3),
            (te.BLOCK_SIZE = 1 << te.BLOCK_SIZE_POWER),
            (te.BLOCK_SIZE_MASK = te.BLOCK_SIZE - 1),
            (te.MINIMUM_DIMENSION = te.BLOCK_SIZE * 5),
            (te.MIN_DYNAMIC_RANGE = 24);
        class hn {
            constructor(e, t) {
                (this.width = e), (this.height = t);
            }
            getWidth() {
                return this.width;
            }
            getHeight() {
                return this.height;
            }
            isCropSupported() {
                return !1;
            }
            crop(e, t, n, r) {
                throw new Lt(
                    "This luminance source does not support cropping."
                );
            }
            isRotateSupported() {
                return !1;
            }
            rotateCounterClockwise() {
                throw new Lt(
                    "This luminance source does not support rotation by 90 degrees."
                );
            }
            rotateCounterClockwise45() {
                throw new Lt(
                    "This luminance source does not support rotation by 45 degrees."
                );
            }
            toString() {
                const e = new Uint8ClampedArray(this.width);
                let t = new we();
                for (let n = 0; n < this.height; n++) {
                    const r = this.getRow(n, e);
                    for (let i = 0; i < this.width; i++) {
                        const s = r[i] & 255;
                        let o;
                        s < 64
                            ? (o = "#")
                            : s < 128
                            ? (o = "+")
                            : s < 192
                            ? (o = ".")
                            : (o = " "),
                            t.append(o);
                    }
                    t.append(`
`);
                }
                return t.toString();
            }
        }
        class Bt extends hn {
            constructor(e) {
                super(e.getWidth(), e.getHeight()), (this.delegate = e);
            }
            getRow(e, t) {
                const n = this.delegate.getRow(e, t),
                    r = this.getWidth();
                for (let i = 0; i < r; i++) n[i] = 255 - (n[i] & 255);
                return n;
            }
            getMatrix() {
                const e = this.delegate.getMatrix(),
                    t = this.getWidth() * this.getHeight(),
                    n = new Uint8ClampedArray(t);
                for (let r = 0; r < t; r++) n[r] = 255 - (e[r] & 255);
                return n;
            }
            isCropSupported() {
                return this.delegate.isCropSupported();
            }
            crop(e, t, n, r) {
                return new Bt(this.delegate.crop(e, t, n, r));
            }
            isRotateSupported() {
                return this.delegate.isRotateSupported();
            }
            invert() {
                return this.delegate;
            }
            rotateCounterClockwise() {
                return new Bt(this.delegate.rotateCounterClockwise());
            }
            rotateCounterClockwise45() {
                return new Bt(this.delegate.rotateCounterClockwise45());
            }
        }
        class Pt extends hn {
            constructor(e) {
                super(e.width, e.height),
                    (this.canvas = e),
                    (this.tempCanvasElement = null),
                    (this.buffer = Pt.makeBufferFromCanvasImageData(e));
            }
            static makeBufferFromCanvasImageData(e) {
                const t = e
                    .getContext("2d")
                    .getImageData(0, 0, e.width, e.height);
                return Pt.toGrayscaleBuffer(t.data, e.width, e.height);
            }
            static toGrayscaleBuffer(e, t, n) {
                const r = new Uint8ClampedArray(t * n);
                for (let i = 0, s = 0, o = e.length; i < o; i += 4, s++) {
                    let a;
                    if (e[i + 3] === 0) a = 255;
                    else {
                        const f = e[i],
                            x = e[i + 1],
                            A = e[i + 2];
                        a = (306 * f + 601 * x + 117 * A + 512) >> 10;
                    }
                    r[s] = a;
                }
                return r;
            }
            getRow(e, t) {
                if (e < 0 || e >= this.getHeight())
                    throw new _("Requested row is outside the image: " + e);
                const n = this.getWidth(),
                    r = e * n;
                return (
                    t === null
                        ? (t = this.buffer.slice(r, r + n))
                        : (t.length < n && (t = new Uint8ClampedArray(n)),
                          t.set(this.buffer.slice(r, r + n))),
                    t
                );
            }
            getMatrix() {
                return this.buffer;
            }
            isCropSupported() {
                return !0;
            }
            crop(e, t, n, r) {
                return super.crop(e, t, n, r), this;
            }
            isRotateSupported() {
                return !0;
            }
            rotateCounterClockwise() {
                return this.rotate(-90), this;
            }
            rotateCounterClockwise45() {
                return this.rotate(-45), this;
            }
            getTempCanvasElement() {
                if (this.tempCanvasElement === null) {
                    const e = this.canvas.ownerDocument.createElement("canvas");
                    (e.width = this.canvas.width),
                        (e.height = this.canvas.height),
                        (this.tempCanvasElement = e);
                }
                return this.tempCanvasElement;
            }
            rotate(e) {
                const t = this.getTempCanvasElement(),
                    n = t.getContext("2d"),
                    r = e * Pt.DEGREE_TO_RADIANS,
                    i = this.canvas.width,
                    s = this.canvas.height,
                    o = Math.ceil(
                        Math.abs(Math.cos(r)) * i + Math.abs(Math.sin(r)) * s
                    ),
                    a = Math.ceil(
                        Math.abs(Math.sin(r)) * i + Math.abs(Math.cos(r)) * s
                    );
                return (
                    (t.width = o),
                    (t.height = a),
                    n.translate(o / 2, a / 2),
                    n.rotate(r),
                    n.drawImage(this.canvas, i / -2, s / -2),
                    (this.buffer = Pt.makeBufferFromCanvasImageData(t)),
                    this
                );
            }
            invert() {
                return new Bt(this);
            }
        }
        Pt.DEGREE_TO_RADIANS = Math.PI / 180;
        class Cr {
            constructor(e, t, n) {
                (this.deviceId = e),
                    (this.label = t),
                    (this.kind = "videoinput"),
                    (this.groupId = n || void 0);
            }
            toJSON() {
                return {
                    kind: this.kind,
                    groupId: this.groupId,
                    deviceId: this.deviceId,
                    label: this.label,
                };
            }
        }
        var et =
            ((globalThis || yn || self || window || void 0) &&
                (globalThis || yn || self || window || void 0).__awaiter) ||
            function (g, e, t, n) {
                function r(i) {
                    return i instanceof t
                        ? i
                        : new t(function (s) {
                              s(i);
                          });
                }
                return new (t || (t = Promise))(function (i, s) {
                    function o(f) {
                        try {
                            c(n.next(f));
                        } catch (x) {
                            s(x);
                        }
                    }
                    function a(f) {
                        try {
                            c(n.throw(f));
                        } catch (x) {
                            s(x);
                        }
                    }
                    function c(f) {
                        f.done ? i(f.value) : r(f.value).then(o, a);
                    }
                    c((n = n.apply(g, e || [])).next());
                });
            };
        class Yt {
            constructor(e, t = 500, n) {
                (this.reader = e),
                    (this.timeBetweenScansMillis = t),
                    (this._hints = n),
                    (this._stopContinuousDecode = !1),
                    (this._stopAsyncDecode = !1),
                    (this._timeBetweenDecodingAttempts = 0);
            }
            get hasNavigator() {
                return typeof navigator < "u";
            }
            get isMediaDevicesSuported() {
                return this.hasNavigator && !!navigator.mediaDevices;
            }
            get canEnumerateDevices() {
                return !!(
                    this.isMediaDevicesSuported &&
                    navigator.mediaDevices.enumerateDevices
                );
            }
            get timeBetweenDecodingAttempts() {
                return this._timeBetweenDecodingAttempts;
            }
            set timeBetweenDecodingAttempts(e) {
                this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
            }
            set hints(e) {
                this._hints = e || null;
            }
            get hints() {
                return this._hints;
            }
            listVideoInputDevices() {
                return et(this, void 0, void 0, function* () {
                    if (!this.hasNavigator)
                        throw new Error(
                            "Can't enumerate devices, navigator is not present."
                        );
                    if (!this.canEnumerateDevices)
                        throw new Error(
                            "Can't enumerate devices, method not supported."
                        );
                    const e = yield navigator.mediaDevices.enumerateDevices(),
                        t = [];
                    for (const n of e) {
                        const r = n.kind === "video" ? "videoinput" : n.kind;
                        if (r !== "videoinput") continue;
                        const i = n.deviceId || n.id,
                            s = n.label || `Video device ${t.length + 1}`,
                            o = n.groupId,
                            a = { deviceId: i, label: s, kind: r, groupId: o };
                        t.push(a);
                    }
                    return t;
                });
            }
            getVideoInputDevices() {
                return et(this, void 0, void 0, function* () {
                    return (yield this.listVideoInputDevices()).map(
                        (t) => new Cr(t.deviceId, t.label)
                    );
                });
            }
            findDeviceById(e) {
                return et(this, void 0, void 0, function* () {
                    const t = yield this.listVideoInputDevices();
                    return t ? t.find((n) => n.deviceId === e) : null;
                });
            }
            decodeFromInputVideoDevice(e, t) {
                return et(this, void 0, void 0, function* () {
                    return yield this.decodeOnceFromVideoDevice(e, t);
                });
            }
            decodeOnceFromVideoDevice(e, t) {
                return et(this, void 0, void 0, function* () {
                    this.reset();
                    let n;
                    e
                        ? (n = { deviceId: { exact: e } })
                        : (n = { facingMode: "environment" });
                    const r = { video: n };
                    return yield this.decodeOnceFromConstraints(r, t);
                });
            }
            decodeOnceFromConstraints(e, t) {
                return et(this, void 0, void 0, function* () {
                    const n = yield navigator.mediaDevices.getUserMedia(e);
                    return yield this.decodeOnceFromStream(n, t);
                });
            }
            decodeOnceFromStream(e, t) {
                return et(this, void 0, void 0, function* () {
                    this.reset();
                    const n = yield this.attachStreamToVideo(e, t);
                    return yield this.decodeOnce(n);
                });
            }
            decodeFromInputVideoDeviceContinuously(e, t, n) {
                return et(this, void 0, void 0, function* () {
                    return yield this.decodeFromVideoDevice(e, t, n);
                });
            }
            decodeFromVideoDevice(e, t, n) {
                return et(this, void 0, void 0, function* () {
                    let r;
                    e
                        ? (r = { deviceId: { exact: e } })
                        : (r = { facingMode: "environment" });
                    const i = { video: r };
                    return yield this.decodeFromConstraints(i, t, n);
                });
            }
            decodeFromConstraints(e, t, n) {
                return et(this, void 0, void 0, function* () {
                    const r = yield navigator.mediaDevices.getUserMedia(e);
                    return yield this.decodeFromStream(r, t, n);
                });
            }
            decodeFromStream(e, t, n) {
                return et(this, void 0, void 0, function* () {
                    this.reset();
                    const r = yield this.attachStreamToVideo(e, t);
                    return yield this.decodeContinuously(r, n);
                });
            }
            stopAsyncDecode() {
                this._stopAsyncDecode = !0;
            }
            stopContinuousDecode() {
                this._stopContinuousDecode = !0;
            }
            attachStreamToVideo(e, t) {
                return et(this, void 0, void 0, function* () {
                    const n = this.prepareVideoElement(t);
                    return (
                        this.addVideoSource(n, e),
                        (this.videoElement = n),
                        (this.stream = e),
                        yield this.playVideoOnLoadAsync(n),
                        n
                    );
                });
            }
            playVideoOnLoadAsync(e) {
                return new Promise((t, n) =>
                    this.playVideoOnLoad(e, () => t())
                );
            }
            playVideoOnLoad(e, t) {
                (this.videoEndedListener = () => this.stopStreams()),
                    (this.videoCanPlayListener = () => this.tryPlayVideo(e)),
                    e.addEventListener("ended", this.videoEndedListener),
                    e.addEventListener("canplay", this.videoCanPlayListener),
                    e.addEventListener("playing", t),
                    this.tryPlayVideo(e);
            }
            isVideoPlaying(e) {
                return (
                    e.currentTime > 0 &&
                    !e.paused &&
                    !e.ended &&
                    e.readyState > 2
                );
            }
            tryPlayVideo(e) {
                return et(this, void 0, void 0, function* () {
                    if (this.isVideoPlaying(e)) {
                        console.warn(
                            "Trying to play video that is already playing."
                        );
                        return;
                    }
                    try {
                        yield e.play();
                    } catch {
                        console.warn("It was not possible to play the video.");
                    }
                });
            }
            getMediaElement(e, t) {
                const n = document.getElementById(e);
                if (!n) throw new O(`element with id '${e}' not found`);
                if (n.nodeName.toLowerCase() !== t.toLowerCase())
                    throw new O(
                        `element with id '${e}' must be an ${t} element`
                    );
                return n;
            }
            decodeFromImage(e, t) {
                if (!e && !t)
                    throw new O(
                        "either imageElement with a src set or an url must be provided"
                    );
                return t && !e
                    ? this.decodeFromImageUrl(t)
                    : this.decodeFromImageElement(e);
            }
            decodeFromVideo(e, t) {
                if (!e && !t)
                    throw new O(
                        "Either an element with a src set or an URL must be provided"
                    );
                return t && !e
                    ? this.decodeFromVideoUrl(t)
                    : this.decodeFromVideoElement(e);
            }
            decodeFromVideoContinuously(e, t, n) {
                if (e === void 0 && t === void 0)
                    throw new O(
                        "Either an element with a src set or an URL must be provided"
                    );
                return t && !e
                    ? this.decodeFromVideoUrlContinuously(t, n)
                    : this.decodeFromVideoElementContinuously(e, n);
            }
            decodeFromImageElement(e) {
                if (!e) throw new O("An image element must be provided.");
                this.reset();
                const t = this.prepareImageElement(e);
                this.imageElement = t;
                let n;
                return (
                    this.isImageLoaded(t)
                        ? (n = this.decodeOnce(t, !1, !0))
                        : (n = this._decodeOnLoadImage(t)),
                    n
                );
            }
            decodeFromVideoElement(e) {
                const t = this._decodeFromVideoElementSetup(e);
                return this._decodeOnLoadVideo(t);
            }
            decodeFromVideoElementContinuously(e, t) {
                const n = this._decodeFromVideoElementSetup(e);
                return this._decodeOnLoadVideoContinuously(n, t);
            }
            _decodeFromVideoElementSetup(e) {
                if (!e) throw new O("A video element must be provided.");
                this.reset();
                const t = this.prepareVideoElement(e);
                return (this.videoElement = t), t;
            }
            decodeFromImageUrl(e) {
                if (!e) throw new O("An URL must be provided.");
                this.reset();
                const t = this.prepareImageElement();
                this.imageElement = t;
                const n = this._decodeOnLoadImage(t);
                return (t.src = e), n;
            }
            decodeFromVideoUrl(e) {
                if (!e) throw new O("An URL must be provided.");
                this.reset();
                const t = this.prepareVideoElement(),
                    n = this.decodeFromVideoElement(t);
                return (t.src = e), n;
            }
            decodeFromVideoUrlContinuously(e, t) {
                if (!e) throw new O("An URL must be provided.");
                this.reset();
                const n = this.prepareVideoElement(),
                    r = this.decodeFromVideoElementContinuously(n, t);
                return (n.src = e), r;
            }
            _decodeOnLoadImage(e) {
                return new Promise((t, n) => {
                    (this.imageLoadedListener = () =>
                        this.decodeOnce(e, !1, !0).then(t, n)),
                        e.addEventListener("load", this.imageLoadedListener);
                });
            }
            _decodeOnLoadVideo(e) {
                return et(this, void 0, void 0, function* () {
                    return (
                        yield this.playVideoOnLoadAsync(e),
                        yield this.decodeOnce(e)
                    );
                });
            }
            _decodeOnLoadVideoContinuously(e, t) {
                return et(this, void 0, void 0, function* () {
                    yield this.playVideoOnLoadAsync(e),
                        this.decodeContinuously(e, t);
                });
            }
            isImageLoaded(e) {
                return !(!e.complete || e.naturalWidth === 0);
            }
            prepareImageElement(e) {
                let t;
                return (
                    typeof e > "u" &&
                        ((t = document.createElement("img")),
                        (t.width = 200),
                        (t.height = 200)),
                    typeof e == "string" &&
                        (t = this.getMediaElement(e, "img")),
                    e instanceof HTMLImageElement && (t = e),
                    t
                );
            }
            prepareVideoElement(e) {
                let t;
                return (
                    !e &&
                        typeof document < "u" &&
                        ((t = document.createElement("video")),
                        (t.width = 200),
                        (t.height = 200)),
                    typeof e == "string" &&
                        (t = this.getMediaElement(e, "video")),
                    e instanceof HTMLVideoElement && (t = e),
                    t.setAttribute("autoplay", "true"),
                    t.setAttribute("muted", "true"),
                    t.setAttribute("playsinline", "true"),
                    t
                );
            }
            decodeOnce(e, t = !0, n = !0) {
                this._stopAsyncDecode = !1;
                const r = (i, s) => {
                    if (this._stopAsyncDecode) {
                        s(
                            new R(
                                "Video stream has ended before any code could be detected."
                            )
                        ),
                            (this._stopAsyncDecode = void 0);
                        return;
                    }
                    try {
                        const o = this.decode(e);
                        i(o);
                    } catch (o) {
                        const a = t && o instanceof R,
                            f = (o instanceof J || o instanceof U) && n;
                        if (a || f)
                            return setTimeout(
                                r,
                                this._timeBetweenDecodingAttempts,
                                i,
                                s
                            );
                        s(o);
                    }
                };
                return new Promise((i, s) => r(i, s));
            }
            decodeContinuously(e, t) {
                this._stopContinuousDecode = !1;
                const n = () => {
                    if (this._stopContinuousDecode) {
                        this._stopContinuousDecode = void 0;
                        return;
                    }
                    try {
                        const r = this.decode(e);
                        t(r, null), setTimeout(n, this.timeBetweenScansMillis);
                    } catch (r) {
                        t(null, r);
                        const i = r instanceof J || r instanceof U,
                            s = r instanceof R;
                        (i || s) &&
                            setTimeout(n, this._timeBetweenDecodingAttempts);
                    }
                };
                n();
            }
            decode(e) {
                const t = this.createBinaryBitmap(e);
                return this.decodeBitmap(t);
            }
            _isHTMLVideoElement(e) {
                return e.videoWidth !== 0;
            }
            drawFrameOnCanvas(e, t, n) {
                t ||
                    (t = {
                        sx: 0,
                        sy: 0,
                        sWidth: e.videoWidth,
                        sHeight: e.videoHeight,
                        dx: 0,
                        dy: 0,
                        dWidth: e.videoWidth,
                        dHeight: e.videoHeight,
                    }),
                    n || (n = this.captureCanvasContext),
                    n.drawImage(
                        e,
                        t.sx,
                        t.sy,
                        t.sWidth,
                        t.sHeight,
                        t.dx,
                        t.dy,
                        t.dWidth,
                        t.dHeight
                    );
            }
            drawImageOnCanvas(e, t, n = this.captureCanvasContext) {
                t ||
                    (t = {
                        sx: 0,
                        sy: 0,
                        sWidth: e.naturalWidth,
                        sHeight: e.naturalHeight,
                        dx: 0,
                        dy: 0,
                        dWidth: e.naturalWidth,
                        dHeight: e.naturalHeight,
                    }),
                    n || (n = this.captureCanvasContext),
                    n.drawImage(
                        e,
                        t.sx,
                        t.sy,
                        t.sWidth,
                        t.sHeight,
                        t.dx,
                        t.dy,
                        t.dWidth,
                        t.dHeight
                    );
            }
            createBinaryBitmap(e) {
                this.getCaptureCanvasContext(e),
                    this._isHTMLVideoElement(e)
                        ? this.drawFrameOnCanvas(e)
                        : this.drawImageOnCanvas(e);
                const t = this.getCaptureCanvas(e),
                    n = new Pt(t),
                    r = new te(n);
                return new ie(r);
            }
            getCaptureCanvasContext(e) {
                if (!this.captureCanvasContext) {
                    const n = this.getCaptureCanvas(e).getContext("2d");
                    this.captureCanvasContext = n;
                }
                return this.captureCanvasContext;
            }
            getCaptureCanvas(e) {
                if (!this.captureCanvas) {
                    const t = this.createCaptureCanvas(e);
                    this.captureCanvas = t;
                }
                return this.captureCanvas;
            }
            decodeBitmap(e) {
                return this.reader.decode(e, this._hints);
            }
            createCaptureCanvas(e) {
                if (typeof document > "u")
                    return this._destroyCaptureCanvas(), null;
                const t = document.createElement("canvas");
                let n, r;
                return (
                    typeof e < "u" &&
                        (e instanceof HTMLVideoElement
                            ? ((n = e.videoWidth), (r = e.videoHeight))
                            : e instanceof HTMLImageElement &&
                              ((n = e.naturalWidth || e.width),
                              (r = e.naturalHeight || e.height))),
                    (t.style.width = n + "px"),
                    (t.style.height = r + "px"),
                    (t.width = n),
                    (t.height = r),
                    t
                );
            }
            stopStreams() {
                this.stream &&
                    (this.stream.getVideoTracks().forEach((e) => e.stop()),
                    (this.stream = void 0)),
                    this._stopAsyncDecode === !1 && this.stopAsyncDecode(),
                    this._stopContinuousDecode === !1 &&
                        this.stopContinuousDecode();
            }
            reset() {
                this.stopStreams(),
                    this._destroyVideoElement(),
                    this._destroyImageElement(),
                    this._destroyCaptureCanvas();
            }
            _destroyVideoElement() {
                this.videoElement &&
                    (typeof this.videoEndedListener < "u" &&
                        this.videoElement.removeEventListener(
                            "ended",
                            this.videoEndedListener
                        ),
                    typeof this.videoPlayingEventListener < "u" &&
                        this.videoElement.removeEventListener(
                            "playing",
                            this.videoPlayingEventListener
                        ),
                    typeof this.videoCanPlayListener < "u" &&
                        this.videoElement.removeEventListener(
                            "loadedmetadata",
                            this.videoCanPlayListener
                        ),
                    this.cleanVideoSource(this.videoElement),
                    (this.videoElement = void 0));
            }
            _destroyImageElement() {
                this.imageElement &&
                    (this.imageLoadedListener !== void 0 &&
                        this.imageElement.removeEventListener(
                            "load",
                            this.imageLoadedListener
                        ),
                    (this.imageElement.src = void 0),
                    this.imageElement.removeAttribute("src"),
                    (this.imageElement = void 0));
            }
            _destroyCaptureCanvas() {
                (this.captureCanvasContext = void 0),
                    (this.captureCanvas = void 0);
            }
            addVideoSource(e, t) {
                try {
                    e.srcObject = t;
                } catch {
                    e.src = URL.createObjectURL(t);
                }
            }
            cleanVideoSource(e) {
                try {
                    e.srcObject = null;
                } catch {
                    e.src = "";
                }
                this.videoElement.removeAttribute("src");
            }
        }
        class tt {
            constructor(
                e,
                t,
                n = t == null ? 0 : 8 * t.length,
                r,
                i,
                s = K.currentTimeMillis()
            ) {
                (this.text = e),
                    (this.rawBytes = t),
                    (this.numBits = n),
                    (this.resultPoints = r),
                    (this.format = i),
                    (this.timestamp = s),
                    (this.text = e),
                    (this.rawBytes = t),
                    n == null
                        ? (this.numBits = t == null ? 0 : 8 * t.length)
                        : (this.numBits = n),
                    (this.resultPoints = r),
                    (this.format = i),
                    (this.resultMetadata = null),
                    s == null
                        ? (this.timestamp = K.currentTimeMillis())
                        : (this.timestamp = s);
            }
            getText() {
                return this.text;
            }
            getRawBytes() {
                return this.rawBytes;
            }
            getNumBits() {
                return this.numBits;
            }
            getResultPoints() {
                return this.resultPoints;
            }
            getBarcodeFormat() {
                return this.format;
            }
            getResultMetadata() {
                return this.resultMetadata;
            }
            putMetadata(e, t) {
                this.resultMetadata === null &&
                    (this.resultMetadata = new Map()),
                    this.resultMetadata.set(e, t);
            }
            putAllMetadata(e) {
                e !== null &&
                    (this.resultMetadata === null
                        ? (this.resultMetadata = e)
                        : (this.resultMetadata = new Map(e)));
            }
            addResultPoints(e) {
                const t = this.resultPoints;
                if (t === null) this.resultPoints = e;
                else if (e !== null && e.length > 0) {
                    const n = new Array(t.length + e.length);
                    K.arraycopy(t, 0, n, 0, t.length),
                        K.arraycopy(e, 0, n, t.length, e.length),
                        (this.resultPoints = n);
                }
            }
            getTimestamp() {
                return this.timestamp;
            }
            toString() {
                return this.text;
            }
        }
        var zn;
        (function (g) {
            (g[(g.AZTEC = 0)] = "AZTEC"),
                (g[(g.CODABAR = 1)] = "CODABAR"),
                (g[(g.CODE_39 = 2)] = "CODE_39"),
                (g[(g.CODE_93 = 3)] = "CODE_93"),
                (g[(g.CODE_128 = 4)] = "CODE_128"),
                (g[(g.DATA_MATRIX = 5)] = "DATA_MATRIX"),
                (g[(g.EAN_8 = 6)] = "EAN_8"),
                (g[(g.EAN_13 = 7)] = "EAN_13"),
                (g[(g.ITF = 8)] = "ITF"),
                (g[(g.MAXICODE = 9)] = "MAXICODE"),
                (g[(g.PDF_417 = 10)] = "PDF_417"),
                (g[(g.QR_CODE = 11)] = "QR_CODE"),
                (g[(g.RSS_14 = 12)] = "RSS_14"),
                (g[(g.RSS_EXPANDED = 13)] = "RSS_EXPANDED"),
                (g[(g.UPC_A = 14)] = "UPC_A"),
                (g[(g.UPC_E = 15)] = "UPC_E"),
                (g[(g.UPC_EAN_EXTENSION = 16)] = "UPC_EAN_EXTENSION");
        })(zn || (zn = {}));
        var Y = zn,
            jn;
        (function (g) {
            (g[(g.OTHER = 0)] = "OTHER"),
                (g[(g.ORIENTATION = 1)] = "ORIENTATION"),
                (g[(g.BYTE_SEGMENTS = 2)] = "BYTE_SEGMENTS"),
                (g[(g.ERROR_CORRECTION_LEVEL = 3)] = "ERROR_CORRECTION_LEVEL"),
                (g[(g.ISSUE_NUMBER = 4)] = "ISSUE_NUMBER"),
                (g[(g.SUGGESTED_PRICE = 5)] = "SUGGESTED_PRICE"),
                (g[(g.POSSIBLE_COUNTRY = 6)] = "POSSIBLE_COUNTRY"),
                (g[(g.UPC_EAN_EXTENSION = 7)] = "UPC_EAN_EXTENSION"),
                (g[(g.PDF417_EXTRA_METADATA = 8)] = "PDF417_EXTRA_METADATA"),
                (g[(g.STRUCTURED_APPEND_SEQUENCE = 9)] =
                    "STRUCTURED_APPEND_SEQUENCE"),
                (g[(g.STRUCTURED_APPEND_PARITY = 10)] =
                    "STRUCTURED_APPEND_PARITY");
        })(jn || (jn = {}));
        var Ge = jn;
        class fn {
            constructor(e, t, n, r, i = -1, s = -1) {
                (this.rawBytes = e),
                    (this.text = t),
                    (this.byteSegments = n),
                    (this.ecLevel = r),
                    (this.structuredAppendSequenceNumber = i),
                    (this.structuredAppendParity = s),
                    (this.numBits = e == null ? 0 : 8 * e.length);
            }
            getRawBytes() {
                return this.rawBytes;
            }
            getNumBits() {
                return this.numBits;
            }
            setNumBits(e) {
                this.numBits = e;
            }
            getText() {
                return this.text;
            }
            getByteSegments() {
                return this.byteSegments;
            }
            getECLevel() {
                return this.ecLevel;
            }
            getErrorsCorrected() {
                return this.errorsCorrected;
            }
            setErrorsCorrected(e) {
                this.errorsCorrected = e;
            }
            getErasures() {
                return this.erasures;
            }
            setErasures(e) {
                this.erasures = e;
            }
            getOther() {
                return this.other;
            }
            setOther(e) {
                this.other = e;
            }
            hasStructuredAppend() {
                return (
                    this.structuredAppendParity >= 0 &&
                    this.structuredAppendSequenceNumber >= 0
                );
            }
            getStructuredAppendParity() {
                return this.structuredAppendParity;
            }
            getStructuredAppendSequenceNumber() {
                return this.structuredAppendSequenceNumber;
            }
        }
        class dn {
            exp(e) {
                return this.expTable[e];
            }
            log(e) {
                if (e === 0) throw new _();
                return this.logTable[e];
            }
            static addOrSubtract(e, t) {
                return e ^ t;
            }
        }
        class it {
            constructor(e, t) {
                if (t.length === 0) throw new _();
                this.field = e;
                const n = t.length;
                if (n > 1 && t[0] === 0) {
                    let r = 1;
                    for (; r < n && t[r] === 0; ) r++;
                    r === n
                        ? (this.coefficients = Int32Array.from([0]))
                        : ((this.coefficients = new Int32Array(n - r)),
                          K.arraycopy(
                              t,
                              r,
                              this.coefficients,
                              0,
                              this.coefficients.length
                          ));
                } else this.coefficients = t;
            }
            getCoefficients() {
                return this.coefficients;
            }
            getDegree() {
                return this.coefficients.length - 1;
            }
            isZero() {
                return this.coefficients[0] === 0;
            }
            getCoefficient(e) {
                return this.coefficients[this.coefficients.length - 1 - e];
            }
            evaluateAt(e) {
                if (e === 0) return this.getCoefficient(0);
                const t = this.coefficients;
                let n;
                if (e === 1) {
                    n = 0;
                    for (let s = 0, o = t.length; s !== o; s++) {
                        const a = t[s];
                        n = dn.addOrSubtract(n, a);
                    }
                    return n;
                }
                n = t[0];
                const r = t.length,
                    i = this.field;
                for (let s = 1; s < r; s++)
                    n = dn.addOrSubtract(i.multiply(e, n), t[s]);
                return n;
            }
            addOrSubtract(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "GenericGFPolys do not have same GenericGF field"
                    );
                if (this.isZero()) return e;
                if (e.isZero()) return this;
                let t = this.coefficients,
                    n = e.coefficients;
                if (t.length > n.length) {
                    const s = t;
                    (t = n), (n = s);
                }
                let r = new Int32Array(n.length);
                const i = n.length - t.length;
                K.arraycopy(n, 0, r, 0, i);
                for (let s = i; s < n.length; s++)
                    r[s] = dn.addOrSubtract(t[s - i], n[s]);
                return new it(this.field, r);
            }
            multiply(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "GenericGFPolys do not have same GenericGF field"
                    );
                if (this.isZero() || e.isZero()) return this.field.getZero();
                const t = this.coefficients,
                    n = t.length,
                    r = e.coefficients,
                    i = r.length,
                    s = new Int32Array(n + i - 1),
                    o = this.field;
                for (let a = 0; a < n; a++) {
                    const c = t[a];
                    for (let f = 0; f < i; f++)
                        s[a + f] = dn.addOrSubtract(
                            s[a + f],
                            o.multiply(c, r[f])
                        );
                }
                return new it(o, s);
            }
            multiplyScalar(e) {
                if (e === 0) return this.field.getZero();
                if (e === 1) return this;
                const t = this.coefficients.length,
                    n = this.field,
                    r = new Int32Array(t),
                    i = this.coefficients;
                for (let s = 0; s < t; s++) r[s] = n.multiply(i[s], e);
                return new it(n, r);
            }
            multiplyByMonomial(e, t) {
                if (e < 0) throw new _();
                if (t === 0) return this.field.getZero();
                const n = this.coefficients,
                    r = n.length,
                    i = new Int32Array(r + e),
                    s = this.field;
                for (let o = 0; o < r; o++) i[o] = s.multiply(n[o], t);
                return new it(s, i);
            }
            divide(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "GenericGFPolys do not have same GenericGF field"
                    );
                if (e.isZero()) throw new _("Divide by 0");
                const t = this.field;
                let n = t.getZero(),
                    r = this;
                const i = e.getCoefficient(e.getDegree()),
                    s = t.inverse(i);
                for (; r.getDegree() >= e.getDegree() && !r.isZero(); ) {
                    const o = r.getDegree() - e.getDegree(),
                        a = t.multiply(r.getCoefficient(r.getDegree()), s),
                        c = e.multiplyByMonomial(o, a),
                        f = t.buildMonomial(o, a);
                    (n = n.addOrSubtract(f)), (r = r.addOrSubtract(c));
                }
                return [n, r];
            }
            toString() {
                let e = "";
                for (let t = this.getDegree(); t >= 0; t--) {
                    let n = this.getCoefficient(t);
                    if (n !== 0) {
                        if (
                            (n < 0
                                ? ((e += " - "), (n = -n))
                                : e.length > 0 && (e += " + "),
                            t === 0 || n !== 1)
                        ) {
                            const r = this.field.log(n);
                            r === 0
                                ? (e += "1")
                                : r === 1
                                ? (e += "a")
                                : ((e += "a^"), (e += r));
                        }
                        t !== 0 &&
                            (t === 1 ? (e += "x") : ((e += "x^"), (e += t)));
                    }
                }
                return e;
            }
        }
        class bn extends C {}
        bn.kind = "ArithmeticException";
        class de extends dn {
            constructor(e, t, n) {
                super(),
                    (this.primitive = e),
                    (this.size = t),
                    (this.generatorBase = n);
                const r = new Int32Array(t);
                let i = 1;
                for (let o = 0; o < t; o++)
                    (r[o] = i), (i *= 2), i >= t && ((i ^= e), (i &= t - 1));
                this.expTable = r;
                const s = new Int32Array(t);
                for (let o = 0; o < t - 1; o++) s[r[o]] = o;
                (this.logTable = s),
                    (this.zero = new it(this, Int32Array.from([0]))),
                    (this.one = new it(this, Int32Array.from([1])));
            }
            getZero() {
                return this.zero;
            }
            getOne() {
                return this.one;
            }
            buildMonomial(e, t) {
                if (e < 0) throw new _();
                if (t === 0) return this.zero;
                const n = new Int32Array(e + 1);
                return (n[0] = t), new it(this, n);
            }
            inverse(e) {
                if (e === 0) throw new bn();
                return this.expTable[this.size - this.logTable[e] - 1];
            }
            multiply(e, t) {
                return e === 0 || t === 0
                    ? 0
                    : this.expTable[
                          (this.logTable[e] + this.logTable[t]) %
                              (this.size - 1)
                      ];
            }
            getSize() {
                return this.size;
            }
            getGeneratorBase() {
                return this.generatorBase;
            }
            toString() {
                return (
                    "GF(0x" +
                    Z.toHexString(this.primitive) +
                    "," +
                    this.size +
                    ")"
                );
            }
            equals(e) {
                return e === this;
            }
        }
        (de.AZTEC_DATA_12 = new de(4201, 4096, 1)),
            (de.AZTEC_DATA_10 = new de(1033, 1024, 1)),
            (de.AZTEC_DATA_6 = new de(67, 64, 1)),
            (de.AZTEC_PARAM = new de(19, 16, 1)),
            (de.QR_CODE_FIELD_256 = new de(285, 256, 0)),
            (de.DATA_MATRIX_FIELD_256 = new de(301, 256, 1)),
            (de.AZTEC_DATA_8 = de.DATA_MATRIX_FIELD_256),
            (de.MAXICODE_FIELD_64 = de.AZTEC_DATA_6);
        class $t extends C {}
        $t.kind = "ReedSolomonException";
        class Tt extends C {}
        Tt.kind = "IllegalStateException";
        class gn {
            constructor(e) {
                this.field = e;
            }
            decode(e, t) {
                const n = this.field,
                    r = new it(n, e),
                    i = new Int32Array(t);
                let s = !0;
                for (let m = 0; m < t; m++) {
                    const I = r.evaluateAt(n.exp(m + n.getGeneratorBase()));
                    (i[i.length - 1 - m] = I), I !== 0 && (s = !1);
                }
                if (s) return;
                const o = new it(n, i),
                    a = this.runEuclideanAlgorithm(n.buildMonomial(t, 1), o, t),
                    c = a[0],
                    f = a[1],
                    x = this.findErrorLocations(c),
                    A = this.findErrorMagnitudes(f, x);
                for (let m = 0; m < x.length; m++) {
                    const I = e.length - 1 - n.log(x[m]);
                    if (I < 0) throw new $t("Bad error location");
                    e[I] = de.addOrSubtract(e[I], A[m]);
                }
            }
            runEuclideanAlgorithm(e, t, n) {
                if (e.getDegree() < t.getDegree()) {
                    const m = e;
                    (e = t), (t = m);
                }
                const r = this.field;
                let i = e,
                    s = t,
                    o = r.getZero(),
                    a = r.getOne();
                for (; s.getDegree() >= ((n / 2) | 0); ) {
                    let m = i,
                        I = o;
                    if (((i = s), (o = a), i.isZero()))
                        throw new $t("r_{i-1} was zero");
                    s = m;
                    let T = r.getZero();
                    const S = i.getCoefficient(i.getDegree()),
                        M = r.inverse(S);
                    for (; s.getDegree() >= i.getDegree() && !s.isZero(); ) {
                        const P = s.getDegree() - i.getDegree(),
                            F = r.multiply(s.getCoefficient(s.getDegree()), M);
                        (T = T.addOrSubtract(r.buildMonomial(P, F))),
                            (s = s.addOrSubtract(i.multiplyByMonomial(P, F)));
                    }
                    if (
                        ((a = T.multiply(o).addOrSubtract(I)),
                        s.getDegree() >= i.getDegree())
                    )
                        throw new Tt(
                            "Division algorithm failed to reduce polynomial?"
                        );
                }
                const c = a.getCoefficient(0);
                if (c === 0) throw new $t("sigmaTilde(0) was zero");
                const f = r.inverse(c),
                    x = a.multiplyScalar(f),
                    A = s.multiplyScalar(f);
                return [x, A];
            }
            findErrorLocations(e) {
                const t = e.getDegree();
                if (t === 1) return Int32Array.from([e.getCoefficient(1)]);
                const n = new Int32Array(t);
                let r = 0;
                const i = this.field;
                for (let s = 1; s < i.getSize() && r < t; s++)
                    e.evaluateAt(s) === 0 && ((n[r] = i.inverse(s)), r++);
                if (r !== t)
                    throw new $t(
                        "Error locator degree does not match number of roots"
                    );
                return n;
            }
            findErrorMagnitudes(e, t) {
                const n = t.length,
                    r = new Int32Array(n),
                    i = this.field;
                for (let s = 0; s < n; s++) {
                    const o = i.inverse(t[s]);
                    let a = 1;
                    for (let c = 0; c < n; c++)
                        if (s !== c) {
                            const f = i.multiply(t[c], o),
                                x = f & 1 ? f & -2 : f | 1;
                            a = i.multiply(a, x);
                        }
                    (r[s] = i.multiply(e.evaluateAt(o), i.inverse(a))),
                        i.getGeneratorBase() !== 0 &&
                            (r[s] = i.multiply(r[s], o));
                }
                return r;
            }
        }
        var Xe;
        (function (g) {
            (g[(g.UPPER = 0)] = "UPPER"),
                (g[(g.LOWER = 1)] = "LOWER"),
                (g[(g.MIXED = 2)] = "MIXED"),
                (g[(g.DIGIT = 3)] = "DIGIT"),
                (g[(g.PUNCT = 4)] = "PUNCT"),
                (g[(g.BINARY = 5)] = "BINARY");
        })(Xe || (Xe = {}));
        class ye {
            decode(e) {
                this.ddata = e;
                let t = e.getBits(),
                    n = this.extractBits(t),
                    r = this.correctBits(n),
                    i = ye.convertBoolArrayToByteArray(r),
                    s = ye.getEncodedData(r),
                    o = new fn(i, s, null, null);
                return o.setNumBits(r.length), o;
            }
            static highLevelDecode(e) {
                return this.getEncodedData(e);
            }
            static getEncodedData(e) {
                let t = e.length,
                    n = Xe.UPPER,
                    r = Xe.UPPER,
                    i = "",
                    s = 0;
                for (; s < t; )
                    if (r === Xe.BINARY) {
                        if (t - s < 5) break;
                        let o = ye.readCode(e, s, 5);
                        if (((s += 5), o === 0)) {
                            if (t - s < 11) break;
                            (o = ye.readCode(e, s, 11) + 31), (s += 11);
                        }
                        for (let a = 0; a < o; a++) {
                            if (t - s < 8) {
                                s = t;
                                break;
                            }
                            const c = ye.readCode(e, s, 8);
                            (i += q.castAsNonUtf8Char(c)), (s += 8);
                        }
                        r = n;
                    } else {
                        let o = r === Xe.DIGIT ? 4 : 5;
                        if (t - s < o) break;
                        let a = ye.readCode(e, s, o);
                        s += o;
                        let c = ye.getCharacter(r, a);
                        c.startsWith("CTRL_")
                            ? ((n = r),
                              (r = ye.getTable(c.charAt(5))),
                              c.charAt(6) === "L" && (n = r))
                            : ((i += c), (r = n));
                    }
                return i;
            }
            static getTable(e) {
                switch (e) {
                    case "L":
                        return Xe.LOWER;
                    case "P":
                        return Xe.PUNCT;
                    case "M":
                        return Xe.MIXED;
                    case "D":
                        return Xe.DIGIT;
                    case "B":
                        return Xe.BINARY;
                    case "U":
                    default:
                        return Xe.UPPER;
                }
            }
            static getCharacter(e, t) {
                switch (e) {
                    case Xe.UPPER:
                        return ye.UPPER_TABLE[t];
                    case Xe.LOWER:
                        return ye.LOWER_TABLE[t];
                    case Xe.MIXED:
                        return ye.MIXED_TABLE[t];
                    case Xe.PUNCT:
                        return ye.PUNCT_TABLE[t];
                    case Xe.DIGIT:
                        return ye.DIGIT_TABLE[t];
                    default:
                        throw new Tt("Bad table");
                }
            }
            correctBits(e) {
                let t, n;
                this.ddata.getNbLayers() <= 2
                    ? ((n = 6), (t = de.AZTEC_DATA_6))
                    : this.ddata.getNbLayers() <= 8
                    ? ((n = 8), (t = de.AZTEC_DATA_8))
                    : this.ddata.getNbLayers() <= 22
                    ? ((n = 10), (t = de.AZTEC_DATA_10))
                    : ((n = 12), (t = de.AZTEC_DATA_12));
                let r = this.ddata.getNbDatablocks(),
                    i = e.length / n;
                if (i < r) throw new U();
                let s = e.length % n,
                    o = new Int32Array(i);
                for (let A = 0; A < i; A++, s += n) o[A] = ye.readCode(e, s, n);
                try {
                    new gn(t).decode(o, i - r);
                } catch (A) {
                    throw new U(A);
                }
                let a = (1 << n) - 1,
                    c = 0;
                for (let A = 0; A < r; A++) {
                    let m = o[A];
                    if (m === 0 || m === a) throw new U();
                    (m === 1 || m === a - 1) && c++;
                }
                let f = new Array(r * n - c),
                    x = 0;
                for (let A = 0; A < r; A++) {
                    let m = o[A];
                    if (m === 1 || m === a - 1)
                        f.fill(m > 1, x, x + n - 1), (x += n - 1);
                    else
                        for (let I = n - 1; I >= 0; --I)
                            f[x++] = (m & (1 << I)) !== 0;
                }
                return f;
            }
            extractBits(e) {
                let t = this.ddata.isCompact(),
                    n = this.ddata.getNbLayers(),
                    r = (t ? 11 : 14) + n * 4,
                    i = new Int32Array(r),
                    s = new Array(this.totalBitsInLayer(n, t));
                if (t) for (let o = 0; o < i.length; o++) i[o] = o;
                else {
                    let o =
                            r +
                            1 +
                            2 * Z.truncDivision(Z.truncDivision(r, 2) - 1, 15),
                        a = r / 2,
                        c = Z.truncDivision(o, 2);
                    for (let f = 0; f < a; f++) {
                        let x = f + Z.truncDivision(f, 15);
                        (i[a - f - 1] = c - x - 1), (i[a + f] = c + x + 1);
                    }
                }
                for (let o = 0, a = 0; o < n; o++) {
                    let c = (n - o) * 4 + (t ? 9 : 12),
                        f = o * 2,
                        x = r - 1 - f;
                    for (let A = 0; A < c; A++) {
                        let m = A * 2;
                        for (let I = 0; I < 2; I++)
                            (s[a + m + I] = e.get(i[f + I], i[f + A])),
                                (s[a + 2 * c + m + I] = e.get(
                                    i[f + A],
                                    i[x - I]
                                )),
                                (s[a + 4 * c + m + I] = e.get(
                                    i[x - I],
                                    i[x - A]
                                )),
                                (s[a + 6 * c + m + I] = e.get(
                                    i[x - A],
                                    i[f + I]
                                ));
                    }
                    a += c * 8;
                }
                return s;
            }
            static readCode(e, t, n) {
                let r = 0;
                for (let i = t; i < t + n; i++) (r <<= 1), e[i] && (r |= 1);
                return r;
            }
            static readByte(e, t) {
                let n = e.length - t;
                return n >= 8
                    ? ye.readCode(e, t, 8)
                    : ye.readCode(e, t, n) << (8 - n);
            }
            static convertBoolArrayToByteArray(e) {
                let t = new Uint8Array((e.length + 7) / 8);
                for (let n = 0; n < t.length; n++) t[n] = ye.readByte(e, 8 * n);
                return t;
            }
            totalBitsInLayer(e, t) {
                return ((t ? 88 : 112) + 16 * e) * e;
            }
        }
        (ye.UPPER_TABLE = [
            "CTRL_PS",
            " ",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "CTRL_LL",
            "CTRL_ML",
            "CTRL_DL",
            "CTRL_BS",
        ]),
            (ye.LOWER_TABLE = [
                "CTRL_PS",
                " ",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "CTRL_US",
                "CTRL_ML",
                "CTRL_DL",
                "CTRL_BS",
            ]),
            (ye.MIXED_TABLE = [
                "CTRL_PS",
                " ",
                "\\1",
                "\\2",
                "\\3",
                "\\4",
                "\\5",
                "\\6",
                "\\7",
                "\b",
                "	",
                `
`,
                "\\13",
                "\f",
                "\r",
                "\\33",
                "\\34",
                "\\35",
                "\\36",
                "\\37",
                "@",
                "\\",
                "^",
                "_",
                "`",
                "|",
                "~",
                "\\177",
                "CTRL_LL",
                "CTRL_UL",
                "CTRL_PL",
                "CTRL_BS",
            ]),
            (ye.PUNCT_TABLE = [
                "",
                "\r",
                `\r
`,
                ". ",
                ", ",
                ": ",
                "!",
                '"',
                "#",
                "$",
                "%",
                "&",
                "'",
                "(",
                ")",
                "*",
                "+",
                ",",
                "-",
                ".",
                "/",
                ":",
                ";",
                "<",
                "=",
                ">",
                "?",
                "[",
                "]",
                "{",
                "}",
                "CTRL_UL",
            ]),
            (ye.DIGIT_TABLE = [
                "CTRL_PS",
                " ",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                ",",
                ".",
                "CTRL_UL",
                "CTRL_US",
            ]);
        class ue {
            constructor() {}
            static round(e) {
                return e === NaN
                    ? 0
                    : e <= Number.MIN_SAFE_INTEGER
                    ? Number.MIN_SAFE_INTEGER
                    : e >= Number.MAX_SAFE_INTEGER
                    ? Number.MAX_SAFE_INTEGER
                    : (e + (e < 0 ? -0.5 : 0.5)) | 0;
            }
            static distance(e, t, n, r) {
                const i = e - n,
                    s = t - r;
                return Math.sqrt(i * i + s * s);
            }
            static sum(e) {
                let t = 0;
                for (let n = 0, r = e.length; n !== r; n++) {
                    const i = e[n];
                    t += i;
                }
                return t;
            }
        }
        class Nn {
            static floatToIntBits(e) {
                return e;
            }
        }
        Nn.MAX_VALUE = Number.MAX_SAFE_INTEGER;
        class j {
            constructor(e, t) {
                (this.x = e), (this.y = t);
            }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
            equals(e) {
                if (e instanceof j) {
                    const t = e;
                    return this.x === t.x && this.y === t.y;
                }
                return !1;
            }
            hashCode() {
                return (
                    31 * Nn.floatToIntBits(this.x) + Nn.floatToIntBits(this.y)
                );
            }
            toString() {
                return "(" + this.x + "," + this.y + ")";
            }
            static orderBestPatterns(e) {
                const t = this.distance(e[0], e[1]),
                    n = this.distance(e[1], e[2]),
                    r = this.distance(e[0], e[2]);
                let i, s, o;
                if (
                    (n >= t && n >= r
                        ? ((s = e[0]), (i = e[1]), (o = e[2]))
                        : r >= n && r >= t
                        ? ((s = e[1]), (i = e[0]), (o = e[2]))
                        : ((s = e[2]), (i = e[0]), (o = e[1])),
                    this.crossProductZ(i, s, o) < 0)
                ) {
                    const a = i;
                    (i = o), (o = a);
                }
                (e[0] = i), (e[1] = s), (e[2] = o);
            }
            static distance(e, t) {
                return ue.distance(e.x, e.y, t.x, t.y);
            }
            static crossProductZ(e, t, n) {
                const r = t.x,
                    i = t.y;
                return (n.x - r) * (e.y - i) - (n.y - i) * (e.x - r);
            }
        }
        class Mn {
            constructor(e, t) {
                (this.bits = e), (this.points = t);
            }
            getBits() {
                return this.bits;
            }
            getPoints() {
                return this.points;
            }
        }
        class Er extends Mn {
            constructor(e, t, n, r, i) {
                super(e, t),
                    (this.compact = n),
                    (this.nbDatablocks = r),
                    (this.nbLayers = i);
            }
            getNbLayers() {
                return this.nbLayers;
            }
            getNbDatablocks() {
                return this.nbDatablocks;
            }
            isCompact() {
                return this.compact;
            }
        }
        class Rt {
            constructor(e, t, n, r) {
                (this.image = e),
                    (this.height = e.getHeight()),
                    (this.width = e.getWidth()),
                    t == null && (t = Rt.INIT_SIZE),
                    n == null && (n = (e.getWidth() / 2) | 0),
                    r == null && (r = (e.getHeight() / 2) | 0);
                const i = (t / 2) | 0;
                if (
                    ((this.leftInit = n - i),
                    (this.rightInit = n + i),
                    (this.upInit = r - i),
                    (this.downInit = r + i),
                    this.upInit < 0 ||
                        this.leftInit < 0 ||
                        this.downInit >= this.height ||
                        this.rightInit >= this.width)
                )
                    throw new R();
            }
            detect() {
                let e = this.leftInit,
                    t = this.rightInit,
                    n = this.upInit,
                    r = this.downInit,
                    i = !1,
                    s = !0,
                    o = !1,
                    a = !1,
                    c = !1,
                    f = !1,
                    x = !1;
                const A = this.width,
                    m = this.height;
                for (; s; ) {
                    s = !1;
                    let I = !0;
                    for (; (I || !a) && t < A; )
                        (I = this.containsBlackPoint(n, r, t, !1)),
                            I ? (t++, (s = !0), (a = !0)) : a || t++;
                    if (t >= A) {
                        i = !0;
                        break;
                    }
                    let T = !0;
                    for (; (T || !c) && r < m; )
                        (T = this.containsBlackPoint(e, t, r, !0)),
                            T ? (r++, (s = !0), (c = !0)) : c || r++;
                    if (r >= m) {
                        i = !0;
                        break;
                    }
                    let S = !0;
                    for (; (S || !f) && e >= 0; )
                        (S = this.containsBlackPoint(n, r, e, !1)),
                            S ? (e--, (s = !0), (f = !0)) : f || e--;
                    if (e < 0) {
                        i = !0;
                        break;
                    }
                    let M = !0;
                    for (; (M || !x) && n >= 0; )
                        (M = this.containsBlackPoint(e, t, n, !0)),
                            M ? (n--, (s = !0), (x = !0)) : x || n--;
                    if (n < 0) {
                        i = !0;
                        break;
                    }
                    s && (o = !0);
                }
                if (!i && o) {
                    const I = t - e;
                    let T = null;
                    for (let F = 1; T === null && F < I; F++)
                        T = this.getBlackPointOnSegment(e, r - F, e + F, r);
                    if (T == null) throw new R();
                    let S = null;
                    for (let F = 1; S === null && F < I; F++)
                        S = this.getBlackPointOnSegment(e, n + F, e + F, n);
                    if (S == null) throw new R();
                    let M = null;
                    for (let F = 1; M === null && F < I; F++)
                        M = this.getBlackPointOnSegment(t, n + F, t - F, n);
                    if (M == null) throw new R();
                    let P = null;
                    for (let F = 1; P === null && F < I; F++)
                        P = this.getBlackPointOnSegment(t, r - F, t - F, r);
                    if (P == null) throw new R();
                    return this.centerEdges(P, T, M, S);
                } else throw new R();
            }
            getBlackPointOnSegment(e, t, n, r) {
                const i = ue.round(ue.distance(e, t, n, r)),
                    s = (n - e) / i,
                    o = (r - t) / i,
                    a = this.image;
                for (let c = 0; c < i; c++) {
                    const f = ue.round(e + c * s),
                        x = ue.round(t + c * o);
                    if (a.get(f, x)) return new j(f, x);
                }
                return null;
            }
            centerEdges(e, t, n, r) {
                const i = e.getX(),
                    s = e.getY(),
                    o = t.getX(),
                    a = t.getY(),
                    c = n.getX(),
                    f = n.getY(),
                    x = r.getX(),
                    A = r.getY(),
                    m = Rt.CORR;
                return i < this.width / 2
                    ? [
                          new j(x - m, A + m),
                          new j(o + m, a + m),
                          new j(c - m, f - m),
                          new j(i + m, s - m),
                      ]
                    : [
                          new j(x + m, A + m),
                          new j(o + m, a - m),
                          new j(c - m, f + m),
                          new j(i - m, s - m),
                      ];
            }
            containsBlackPoint(e, t, n, r) {
                const i = this.image;
                if (r) {
                    for (let s = e; s <= t; s++) if (i.get(s, n)) return !0;
                } else for (let s = e; s <= t; s++) if (i.get(n, s)) return !0;
                return !1;
            }
        }
        (Rt.INIT_SIZE = 10), (Rt.CORR = 1);
        class Gn {
            static checkAndNudgePoints(e, t) {
                const n = e.getWidth(),
                    r = e.getHeight();
                let i = !0;
                for (let s = 0; s < t.length && i; s += 2) {
                    const o = Math.floor(t[s]),
                        a = Math.floor(t[s + 1]);
                    if (o < -1 || o > n || a < -1 || a > r) throw new R();
                    (i = !1),
                        o === -1
                            ? ((t[s] = 0), (i = !0))
                            : o === n && ((t[s] = n - 1), (i = !0)),
                        a === -1
                            ? ((t[s + 1] = 0), (i = !0))
                            : a === r && ((t[s + 1] = r - 1), (i = !0));
                }
                i = !0;
                for (let s = t.length - 2; s >= 0 && i; s -= 2) {
                    const o = Math.floor(t[s]),
                        a = Math.floor(t[s + 1]);
                    if (o < -1 || o > n || a < -1 || a > r) throw new R();
                    (i = !1),
                        o === -1
                            ? ((t[s] = 0), (i = !0))
                            : o === n && ((t[s] = n - 1), (i = !0)),
                        a === -1
                            ? ((t[s + 1] = 0), (i = !0))
                            : a === r && ((t[s + 1] = r - 1), (i = !0));
                }
            }
        }
        class Et {
            constructor(e, t, n, r, i, s, o, a, c) {
                (this.a11 = e),
                    (this.a21 = t),
                    (this.a31 = n),
                    (this.a12 = r),
                    (this.a22 = i),
                    (this.a32 = s),
                    (this.a13 = o),
                    (this.a23 = a),
                    (this.a33 = c);
            }
            static quadrilateralToQuadrilateral(
                e,
                t,
                n,
                r,
                i,
                s,
                o,
                a,
                c,
                f,
                x,
                A,
                m,
                I,
                T,
                S
            ) {
                const M = Et.quadrilateralToSquare(e, t, n, r, i, s, o, a);
                return Et.squareToQuadrilateral(c, f, x, A, m, I, T, S).times(
                    M
                );
            }
            transformPoints(e) {
                const t = e.length,
                    n = this.a11,
                    r = this.a12,
                    i = this.a13,
                    s = this.a21,
                    o = this.a22,
                    a = this.a23,
                    c = this.a31,
                    f = this.a32,
                    x = this.a33;
                for (let A = 0; A < t; A += 2) {
                    const m = e[A],
                        I = e[A + 1],
                        T = i * m + a * I + x;
                    (e[A] = (n * m + s * I + c) / T),
                        (e[A + 1] = (r * m + o * I + f) / T);
                }
            }
            transformPointsWithValues(e, t) {
                const n = this.a11,
                    r = this.a12,
                    i = this.a13,
                    s = this.a21,
                    o = this.a22,
                    a = this.a23,
                    c = this.a31,
                    f = this.a32,
                    x = this.a33,
                    A = e.length;
                for (let m = 0; m < A; m++) {
                    const I = e[m],
                        T = t[m],
                        S = i * I + a * T + x;
                    (e[m] = (n * I + s * T + c) / S),
                        (t[m] = (r * I + o * T + f) / S);
                }
            }
            static squareToQuadrilateral(e, t, n, r, i, s, o, a) {
                const c = e - n + i - o,
                    f = t - r + s - a;
                if (c === 0 && f === 0)
                    return new Et(n - e, i - n, e, r - t, s - r, t, 0, 0, 1);
                {
                    const x = n - i,
                        A = o - i,
                        m = r - s,
                        I = a - s,
                        T = x * I - A * m,
                        S = (c * I - A * f) / T,
                        M = (x * f - c * m) / T;
                    return new Et(
                        n - e + S * n,
                        o - e + M * o,
                        e,
                        r - t + S * r,
                        a - t + M * a,
                        t,
                        S,
                        M,
                        1
                    );
                }
            }
            static quadrilateralToSquare(e, t, n, r, i, s, o, a) {
                return Et.squareToQuadrilateral(
                    e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    a
                ).buildAdjoint();
            }
            buildAdjoint() {
                return new Et(
                    this.a22 * this.a33 - this.a23 * this.a32,
                    this.a23 * this.a31 - this.a21 * this.a33,
                    this.a21 * this.a32 - this.a22 * this.a31,
                    this.a13 * this.a32 - this.a12 * this.a33,
                    this.a11 * this.a33 - this.a13 * this.a31,
                    this.a12 * this.a31 - this.a11 * this.a32,
                    this.a12 * this.a23 - this.a13 * this.a22,
                    this.a13 * this.a21 - this.a11 * this.a23,
                    this.a11 * this.a22 - this.a12 * this.a21
                );
            }
            times(e) {
                return new Et(
                    this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13,
                    this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23,
                    this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33,
                    this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13,
                    this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23,
                    this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33,
                    this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13,
                    this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23,
                    this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33
                );
            }
        }
        class pr extends Gn {
            sampleGrid(
                e,
                t,
                n,
                r,
                i,
                s,
                o,
                a,
                c,
                f,
                x,
                A,
                m,
                I,
                T,
                S,
                M,
                P,
                F
            ) {
                const B = Et.quadrilateralToQuadrilateral(
                    r,
                    i,
                    s,
                    o,
                    a,
                    c,
                    f,
                    x,
                    A,
                    m,
                    I,
                    T,
                    S,
                    M,
                    P,
                    F
                );
                return this.sampleGridWithTransform(e, t, n, B);
            }
            sampleGridWithTransform(e, t, n, r) {
                if (t <= 0 || n <= 0) throw new R();
                const i = new Pe(t, n),
                    s = new Float32Array(2 * t);
                for (let o = 0; o < n; o++) {
                    const a = s.length,
                        c = o + 0.5;
                    for (let f = 0; f < a; f += 2)
                        (s[f] = f / 2 + 0.5), (s[f + 1] = c);
                    r.transformPoints(s), Gn.checkAndNudgePoints(e, s);
                    try {
                        for (let f = 0; f < a; f += 2)
                            e.get(Math.floor(s[f]), Math.floor(s[f + 1])) &&
                                i.set(f / 2, o);
                    } catch {
                        throw new R();
                    }
                }
                return i;
            }
        }
        class Ft {
            static setGridSampler(e) {
                Ft.gridSampler = e;
            }
            static getInstance() {
                return Ft.gridSampler;
            }
        }
        Ft.gridSampler = new pr();
        class nt {
            constructor(e, t) {
                (this.x = e), (this.y = t);
            }
            toResultPoint() {
                return new j(this.getX(), this.getY());
            }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
        }
        class mr {
            constructor(e) {
                (this.EXPECTED_CORNER_BITS = new Int32Array([
                    3808, 476, 2107, 1799,
                ])),
                    (this.image = e);
            }
            detect() {
                return this.detectMirror(!1);
            }
            detectMirror(e) {
                let t = this.getMatrixCenter(),
                    n = this.getBullsEyeCorners(t);
                if (e) {
                    let s = n[0];
                    (n[0] = n[2]), (n[2] = s);
                }
                this.extractParameters(n);
                let r = this.sampleGrid(
                        this.image,
                        n[this.shift % 4],
                        n[(this.shift + 1) % 4],
                        n[(this.shift + 2) % 4],
                        n[(this.shift + 3) % 4]
                    ),
                    i = this.getMatrixCornerPoints(n);
                return new Er(
                    r,
                    i,
                    this.compact,
                    this.nbDataBlocks,
                    this.nbLayers
                );
            }
            extractParameters(e) {
                if (
                    !this.isValidPoint(e[0]) ||
                    !this.isValidPoint(e[1]) ||
                    !this.isValidPoint(e[2]) ||
                    !this.isValidPoint(e[3])
                )
                    throw new R();
                let t = 2 * this.nbCenterLayers,
                    n = new Int32Array([
                        this.sampleLine(e[0], e[1], t),
                        this.sampleLine(e[1], e[2], t),
                        this.sampleLine(e[2], e[3], t),
                        this.sampleLine(e[3], e[0], t),
                    ]);
                this.shift = this.getRotation(n, t);
                let r = 0;
                for (let s = 0; s < 4; s++) {
                    let o = n[(this.shift + s) % 4];
                    this.compact
                        ? ((r <<= 7), (r += (o >> 1) & 127))
                        : ((r <<= 10),
                          (r += ((o >> 2) & 992) + ((o >> 1) & 31)));
                }
                let i = this.getCorrectedParameterData(r, this.compact);
                this.compact
                    ? ((this.nbLayers = (i >> 6) + 1),
                      (this.nbDataBlocks = (i & 63) + 1))
                    : ((this.nbLayers = (i >> 11) + 1),
                      (this.nbDataBlocks = (i & 2047) + 1));
            }
            getRotation(e, t) {
                let n = 0;
                e.forEach((r, i, s) => {
                    let o = ((r >> (t - 2)) << 1) + (r & 1);
                    n = (n << 3) + o;
                }),
                    (n = ((n & 1) << 11) + (n >> 1));
                for (let r = 0; r < 4; r++)
                    if (Z.bitCount(n ^ this.EXPECTED_CORNER_BITS[r]) <= 2)
                        return r;
                throw new R();
            }
            getCorrectedParameterData(e, t) {
                let n, r;
                t ? ((n = 7), (r = 2)) : ((n = 10), (r = 4));
                let i = n - r,
                    s = new Int32Array(n);
                for (let a = n - 1; a >= 0; --a) (s[a] = e & 15), (e >>= 4);
                try {
                    new gn(de.AZTEC_PARAM).decode(s, i);
                } catch {
                    throw new R();
                }
                let o = 0;
                for (let a = 0; a < r; a++) o = (o << 4) + s[a];
                return o;
            }
            getBullsEyeCorners(e) {
                let t = e,
                    n = e,
                    r = e,
                    i = e,
                    s = !0;
                for (
                    this.nbCenterLayers = 1;
                    this.nbCenterLayers < 9;
                    this.nbCenterLayers++
                ) {
                    let x = this.getFirstDifferent(t, s, 1, -1),
                        A = this.getFirstDifferent(n, s, 1, 1),
                        m = this.getFirstDifferent(r, s, -1, 1),
                        I = this.getFirstDifferent(i, s, -1, -1);
                    if (this.nbCenterLayers > 2) {
                        let T =
                            (this.distancePoint(I, x) * this.nbCenterLayers) /
                            (this.distancePoint(i, t) *
                                (this.nbCenterLayers + 2));
                        if (
                            T < 0.75 ||
                            T > 1.25 ||
                            !this.isWhiteOrBlackRectangle(x, A, m, I)
                        )
                            break;
                    }
                    (t = x), (n = A), (r = m), (i = I), (s = !s);
                }
                if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7)
                    throw new R();
                this.compact = this.nbCenterLayers === 5;
                let o = new j(t.getX() + 0.5, t.getY() - 0.5),
                    a = new j(n.getX() + 0.5, n.getY() + 0.5),
                    c = new j(r.getX() - 0.5, r.getY() + 0.5),
                    f = new j(i.getX() - 0.5, i.getY() - 0.5);
                return this.expandSquare(
                    [o, a, c, f],
                    2 * this.nbCenterLayers - 3,
                    2 * this.nbCenterLayers
                );
            }
            getMatrixCenter() {
                let e, t, n, r;
                try {
                    let o = new Rt(this.image).detect();
                    (e = o[0]), (t = o[1]), (n = o[2]), (r = o[3]);
                } catch {
                    let a = this.image.getWidth() / 2,
                        c = this.image.getHeight() / 2;
                    (e = this.getFirstDifferent(
                        new nt(a + 7, c - 7),
                        !1,
                        1,
                        -1
                    ).toResultPoint()),
                        (t = this.getFirstDifferent(
                            new nt(a + 7, c + 7),
                            !1,
                            1,
                            1
                        ).toResultPoint()),
                        (n = this.getFirstDifferent(
                            new nt(a - 7, c + 7),
                            !1,
                            -1,
                            1
                        ).toResultPoint()),
                        (r = this.getFirstDifferent(
                            new nt(a - 7, c - 7),
                            !1,
                            -1,
                            -1
                        ).toResultPoint());
                }
                let i = ue.round(
                        (e.getX() + r.getX() + t.getX() + n.getX()) / 4
                    ),
                    s = ue.round(
                        (e.getY() + r.getY() + t.getY() + n.getY()) / 4
                    );
                try {
                    let o = new Rt(this.image, 15, i, s).detect();
                    (e = o[0]), (t = o[1]), (n = o[2]), (r = o[3]);
                } catch {
                    (e = this.getFirstDifferent(
                        new nt(i + 7, s - 7),
                        !1,
                        1,
                        -1
                    ).toResultPoint()),
                        (t = this.getFirstDifferent(
                            new nt(i + 7, s + 7),
                            !1,
                            1,
                            1
                        ).toResultPoint()),
                        (n = this.getFirstDifferent(
                            new nt(i - 7, s + 7),
                            !1,
                            -1,
                            1
                        ).toResultPoint()),
                        (r = this.getFirstDifferent(
                            new nt(i - 7, s - 7),
                            !1,
                            -1,
                            -1
                        ).toResultPoint());
                }
                return (
                    (i = ue.round(
                        (e.getX() + r.getX() + t.getX() + n.getX()) / 4
                    )),
                    (s = ue.round(
                        (e.getY() + r.getY() + t.getY() + n.getY()) / 4
                    )),
                    new nt(i, s)
                );
            }
            getMatrixCornerPoints(e) {
                return this.expandSquare(
                    e,
                    2 * this.nbCenterLayers,
                    this.getDimension()
                );
            }
            sampleGrid(e, t, n, r, i) {
                let s = Ft.getInstance(),
                    o = this.getDimension(),
                    a = o / 2 - this.nbCenterLayers,
                    c = o / 2 + this.nbCenterLayers;
                return s.sampleGrid(
                    e,
                    o,
                    o,
                    a,
                    a,
                    c,
                    a,
                    c,
                    c,
                    a,
                    c,
                    t.getX(),
                    t.getY(),
                    n.getX(),
                    n.getY(),
                    r.getX(),
                    r.getY(),
                    i.getX(),
                    i.getY()
                );
            }
            sampleLine(e, t, n) {
                let r = 0,
                    i = this.distanceResultPoint(e, t),
                    s = i / n,
                    o = e.getX(),
                    a = e.getY(),
                    c = (s * (t.getX() - e.getX())) / i,
                    f = (s * (t.getY() - e.getY())) / i;
                for (let x = 0; x < n; x++)
                    this.image.get(ue.round(o + x * c), ue.round(a + x * f)) &&
                        (r |= 1 << (n - x - 1));
                return r;
            }
            isWhiteOrBlackRectangle(e, t, n, r) {
                let i = 3;
                (e = new nt(e.getX() - i, e.getY() + i)),
                    (t = new nt(t.getX() - i, t.getY() - i)),
                    (n = new nt(n.getX() + i, n.getY() - i)),
                    (r = new nt(r.getX() + i, r.getY() + i));
                let s = this.getColor(r, e);
                if (s === 0) return !1;
                let o = this.getColor(e, t);
                return o !== s || ((o = this.getColor(t, n)), o !== s)
                    ? !1
                    : ((o = this.getColor(n, r)), o === s);
            }
            getColor(e, t) {
                let n = this.distancePoint(e, t),
                    r = (t.getX() - e.getX()) / n,
                    i = (t.getY() - e.getY()) / n,
                    s = 0,
                    o = e.getX(),
                    a = e.getY(),
                    c = this.image.get(e.getX(), e.getY()),
                    f = Math.ceil(n);
                for (let A = 0; A < f; A++)
                    (o += r),
                        (a += i),
                        this.image.get(ue.round(o), ue.round(a)) !== c && s++;
                let x = s / n;
                return x > 0.1 && x < 0.9 ? 0 : x <= 0.1 === c ? 1 : -1;
            }
            getFirstDifferent(e, t, n, r) {
                let i = e.getX() + n,
                    s = e.getY() + r;
                for (; this.isValid(i, s) && this.image.get(i, s) === t; )
                    (i += n), (s += r);
                for (
                    i -= n, s -= r;
                    this.isValid(i, s) && this.image.get(i, s) === t;

                )
                    i += n;
                for (i -= n; this.isValid(i, s) && this.image.get(i, s) === t; )
                    s += r;
                return (s -= r), new nt(i, s);
            }
            expandSquare(e, t, n) {
                let r = n / (2 * t),
                    i = e[0].getX() - e[2].getX(),
                    s = e[0].getY() - e[2].getY(),
                    o = (e[0].getX() + e[2].getX()) / 2,
                    a = (e[0].getY() + e[2].getY()) / 2,
                    c = new j(o + r * i, a + r * s),
                    f = new j(o - r * i, a - r * s);
                (i = e[1].getX() - e[3].getX()),
                    (s = e[1].getY() - e[3].getY()),
                    (o = (e[1].getX() + e[3].getX()) / 2),
                    (a = (e[1].getY() + e[3].getY()) / 2);
                let x = new j(o + r * i, a + r * s),
                    A = new j(o - r * i, a - r * s);
                return [c, x, f, A];
            }
            isValid(e, t) {
                return (
                    e >= 0 &&
                    e < this.image.getWidth() &&
                    t > 0 &&
                    t < this.image.getHeight()
                );
            }
            isValidPoint(e) {
                let t = ue.round(e.getX()),
                    n = ue.round(e.getY());
                return this.isValid(t, n);
            }
            distancePoint(e, t) {
                return ue.distance(e.getX(), e.getY(), t.getX(), t.getY());
            }
            distanceResultPoint(e, t) {
                return ue.distance(e.getX(), e.getY(), t.getX(), t.getY());
            }
            getDimension() {
                return this.compact
                    ? 4 * this.nbLayers + 11
                    : this.nbLayers <= 4
                    ? 4 * this.nbLayers + 15
                    : 4 * this.nbLayers +
                      2 * (Z.truncDivision(this.nbLayers - 4, 8) + 1) +
                      15;
            }
        }
        class On {
            decode(e, t = null) {
                let n = null,
                    r = new mr(e.getBlackMatrix()),
                    i = null,
                    s = null;
                try {
                    let f = r.detectMirror(!1);
                    (i = f.getPoints()),
                        this.reportFoundResultPoints(t, i),
                        (s = new ye().decode(f));
                } catch (f) {
                    n = f;
                }
                if (s == null)
                    try {
                        let f = r.detectMirror(!0);
                        (i = f.getPoints()),
                            this.reportFoundResultPoints(t, i),
                            (s = new ye().decode(f));
                    } catch (f) {
                        throw n ?? f;
                    }
                let o = new tt(
                        s.getText(),
                        s.getRawBytes(),
                        s.getNumBits(),
                        i,
                        Y.AZTEC,
                        K.currentTimeMillis()
                    ),
                    a = s.getByteSegments();
                a != null && o.putMetadata(Ge.BYTE_SEGMENTS, a);
                let c = s.getECLevel();
                return (
                    c != null && o.putMetadata(Ge.ERROR_CORRECTION_LEVEL, c), o
                );
            }
            reportFoundResultPoints(e, t) {
                if (e != null) {
                    let n = e.get(fe.NEED_RESULT_POINT_CALLBACK);
                    n != null &&
                        t.forEach((r, i, s) => {
                            n.foundPossibleResultPoint(r);
                        });
                }
            }
            reset() {}
        }
        class ui extends Yt {
            constructor(e = 500) {
                super(new On(), e);
            }
        }
        class ke {
            decode(e, t) {
                try {
                    return this.doDecode(e, t);
                } catch {
                    if (
                        t &&
                        t.get(fe.TRY_HARDER) === !0 &&
                        e.isRotateSupported()
                    ) {
                        const i = e.rotateCounterClockwise(),
                            s = this.doDecode(i, t),
                            o = s.getResultMetadata();
                        let a = 270;
                        o !== null &&
                            o.get(Ge.ORIENTATION) === !0 &&
                            (a = a + (o.get(Ge.ORIENTATION) % 360)),
                            s.putMetadata(Ge.ORIENTATION, a);
                        const c = s.getResultPoints();
                        if (c !== null) {
                            const f = i.getHeight();
                            for (let x = 0; x < c.length; x++)
                                c[x] = new j(f - c[x].getY() - 1, c[x].getX());
                        }
                        return s;
                    } else throw new R();
                }
            }
            reset() {}
            doDecode(e, t) {
                const n = e.getWidth(),
                    r = e.getHeight();
                let i = new ae(n);
                const s = t && t.get(fe.TRY_HARDER) === !0,
                    o = Math.max(1, r >> (s ? 8 : 5));
                let a;
                s ? (a = r) : (a = 15);
                const c = Math.trunc(r / 2);
                for (let f = 0; f < a; f++) {
                    const x = Math.trunc((f + 1) / 2),
                        A = (f & 1) === 0,
                        m = c + o * (A ? x : -x);
                    if (m < 0 || m >= r) break;
                    try {
                        i = e.getBlackRow(m, i);
                    } catch {
                        continue;
                    }
                    for (let I = 0; I < 2; I++) {
                        if (
                            I === 1 &&
                            (i.reverse(),
                            t && t.get(fe.NEED_RESULT_POINT_CALLBACK) === !0)
                        ) {
                            const T = new Map();
                            t.forEach((S, M) => T.set(M, S)),
                                T.delete(fe.NEED_RESULT_POINT_CALLBACK),
                                (t = T);
                        }
                        try {
                            const T = this.decodeRow(m, i, t);
                            if (I === 1) {
                                T.putMetadata(Ge.ORIENTATION, 180);
                                const S = T.getResultPoints();
                                S !== null &&
                                    ((S[0] = new j(
                                        n - S[0].getX() - 1,
                                        S[0].getY()
                                    )),
                                    (S[1] = new j(
                                        n - S[1].getX() - 1,
                                        S[1].getY()
                                    )));
                            }
                            return T;
                        } catch {}
                    }
                }
                throw new R();
            }
            static recordPattern(e, t, n) {
                const r = n.length;
                for (let c = 0; c < r; c++) n[c] = 0;
                const i = e.getSize();
                if (t >= i) throw new R();
                let s = !e.get(t),
                    o = 0,
                    a = t;
                for (; a < i; ) {
                    if (e.get(a) !== s) n[o]++;
                    else {
                        if (++o === r) break;
                        (n[o] = 1), (s = !s);
                    }
                    a++;
                }
                if (!(o === r || (o === r - 1 && a === i))) throw new R();
            }
            static recordPatternInReverse(e, t, n) {
                let r = n.length,
                    i = e.get(t);
                for (; t > 0 && r >= 0; ) e.get(--t) !== i && (r--, (i = !i));
                if (r >= 0) throw new R();
                ke.recordPattern(e, t + 1, n);
            }
            static patternMatchVariance(e, t, n) {
                const r = e.length;
                let i = 0,
                    s = 0;
                for (let c = 0; c < r; c++) (i += e[c]), (s += t[c]);
                if (i < s) return Number.POSITIVE_INFINITY;
                const o = i / s;
                n *= o;
                let a = 0;
                for (let c = 0; c < r; c++) {
                    const f = e[c],
                        x = t[c] * o,
                        A = f > x ? f - x : x - f;
                    if (A > n) return Number.POSITIVE_INFINITY;
                    a += A;
                }
                return a / i;
            }
        }
        class H extends ke {
            static findStartPattern(e) {
                const t = e.getSize(),
                    n = e.getNextSet(0);
                let r = 0,
                    i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                    s = n,
                    o = !1;
                const a = 6;
                for (let c = n; c < t; c++)
                    if (e.get(c) !== o) i[r]++;
                    else {
                        if (r === a - 1) {
                            let f = H.MAX_AVG_VARIANCE,
                                x = -1;
                            for (
                                let A = H.CODE_START_A;
                                A <= H.CODE_START_C;
                                A++
                            ) {
                                const m = ke.patternMatchVariance(
                                    i,
                                    H.CODE_PATTERNS[A],
                                    H.MAX_INDIVIDUAL_VARIANCE
                                );
                                m < f && ((f = m), (x = A));
                            }
                            if (
                                x >= 0 &&
                                e.isRange(Math.max(0, s - (c - s) / 2), s, !1)
                            )
                                return Int32Array.from([s, c, x]);
                            (s += i[0] + i[1]),
                                (i = i.slice(2, i.length - 1)),
                                (i[r - 1] = 0),
                                (i[r] = 0),
                                r--;
                        } else r++;
                        (i[r] = 1), (o = !o);
                    }
                throw new R();
            }
            static decodeCode(e, t, n) {
                ke.recordPattern(e, n, t);
                let r = H.MAX_AVG_VARIANCE,
                    i = -1;
                for (let s = 0; s < H.CODE_PATTERNS.length; s++) {
                    const o = H.CODE_PATTERNS[s],
                        a = this.patternMatchVariance(
                            t,
                            o,
                            H.MAX_INDIVIDUAL_VARIANCE
                        );
                    a < r && ((r = a), (i = s));
                }
                if (i >= 0) return i;
                throw new R();
            }
            decodeRow(e, t, n) {
                const r = n && n.get(fe.ASSUME_GS1) === !0,
                    i = H.findStartPattern(t),
                    s = i[2];
                let o = 0;
                const a = new Uint8Array(20);
                a[o++] = s;
                let c;
                switch (s) {
                    case H.CODE_START_A:
                        c = H.CODE_CODE_A;
                        break;
                    case H.CODE_START_B:
                        c = H.CODE_CODE_B;
                        break;
                    case H.CODE_START_C:
                        c = H.CODE_CODE_C;
                        break;
                    default:
                        throw new U();
                }
                let f = !1,
                    x = !1,
                    A = "",
                    m = i[0],
                    I = i[1];
                const T = Int32Array.from([0, 0, 0, 0, 0, 0]);
                let S = 0,
                    M = 0,
                    P = s,
                    F = 0,
                    B = !0,
                    se = !1,
                    ee = !1;
                for (; !f; ) {
                    const ln = x;
                    switch (
                        ((x = !1),
                        (S = M),
                        (M = H.decodeCode(t, T, I)),
                        (a[o++] = M),
                        M !== H.CODE_STOP && (B = !0),
                        M !== H.CODE_STOP && (F++, (P += F * M)),
                        (m = I),
                        (I += T.reduce((Ui, Hi) => Ui + Hi, 0)),
                        M)
                    ) {
                        case H.CODE_START_A:
                        case H.CODE_START_B:
                        case H.CODE_START_C:
                            throw new U();
                    }
                    switch (c) {
                        case H.CODE_CODE_A:
                            if (M < 64)
                                ee === se
                                    ? (A += String.fromCharCode(
                                          " ".charCodeAt(0) + M
                                      ))
                                    : (A += String.fromCharCode(
                                          " ".charCodeAt(0) + M + 128
                                      )),
                                    (ee = !1);
                            else if (M < 96)
                                ee === se
                                    ? (A += String.fromCharCode(M - 64))
                                    : (A += String.fromCharCode(M + 64)),
                                    (ee = !1);
                            else
                                switch ((M !== H.CODE_STOP && (B = !1), M)) {
                                    case H.CODE_FNC_1:
                                        r &&
                                            (A.length === 0
                                                ? (A += "]C1")
                                                : (A +=
                                                      String.fromCharCode(29)));
                                        break;
                                    case H.CODE_FNC_2:
                                    case H.CODE_FNC_3:
                                        break;
                                    case H.CODE_FNC_4_A:
                                        !se && ee
                                            ? ((se = !0), (ee = !1))
                                            : se && ee
                                            ? ((se = !1), (ee = !1))
                                            : (ee = !0);
                                        break;
                                    case H.CODE_SHIFT:
                                        (x = !0), (c = H.CODE_CODE_B);
                                        break;
                                    case H.CODE_CODE_B:
                                        c = H.CODE_CODE_B;
                                        break;
                                    case H.CODE_CODE_C:
                                        c = H.CODE_CODE_C;
                                        break;
                                    case H.CODE_STOP:
                                        f = !0;
                                        break;
                                }
                            break;
                        case H.CODE_CODE_B:
                            if (M < 96)
                                ee === se
                                    ? (A += String.fromCharCode(
                                          " ".charCodeAt(0) + M
                                      ))
                                    : (A += String.fromCharCode(
                                          " ".charCodeAt(0) + M + 128
                                      )),
                                    (ee = !1);
                            else
                                switch ((M !== H.CODE_STOP && (B = !1), M)) {
                                    case H.CODE_FNC_1:
                                        r &&
                                            (A.length === 0
                                                ? (A += "]C1")
                                                : (A +=
                                                      String.fromCharCode(29)));
                                        break;
                                    case H.CODE_FNC_2:
                                    case H.CODE_FNC_3:
                                        break;
                                    case H.CODE_FNC_4_B:
                                        !se && ee
                                            ? ((se = !0), (ee = !1))
                                            : se && ee
                                            ? ((se = !1), (ee = !1))
                                            : (ee = !0);
                                        break;
                                    case H.CODE_SHIFT:
                                        (x = !0), (c = H.CODE_CODE_A);
                                        break;
                                    case H.CODE_CODE_A:
                                        c = H.CODE_CODE_A;
                                        break;
                                    case H.CODE_CODE_C:
                                        c = H.CODE_CODE_C;
                                        break;
                                    case H.CODE_STOP:
                                        f = !0;
                                        break;
                                }
                            break;
                        case H.CODE_CODE_C:
                            if (M < 100) M < 10 && (A += "0"), (A += M);
                            else
                                switch ((M !== H.CODE_STOP && (B = !1), M)) {
                                    case H.CODE_FNC_1:
                                        r &&
                                            (A.length === 0
                                                ? (A += "]C1")
                                                : (A +=
                                                      String.fromCharCode(29)));
                                        break;
                                    case H.CODE_CODE_A:
                                        c = H.CODE_CODE_A;
                                        break;
                                    case H.CODE_CODE_B:
                                        c = H.CODE_CODE_B;
                                        break;
                                    case H.CODE_STOP:
                                        f = !0;
                                        break;
                                }
                            break;
                    }
                    ln &&
                        (c =
                            c === H.CODE_CODE_A
                                ? H.CODE_CODE_B
                                : H.CODE_CODE_A);
                }
                const ct = I - m;
                if (
                    ((I = t.getNextUnset(I)),
                    !t.isRange(I, Math.min(t.getSize(), I + (I - m) / 2), !1))
                )
                    throw new R();
                if (((P -= F * S), P % 103 !== S)) throw new J();
                const mt = A.length;
                if (mt === 0) throw new R();
                mt > 0 &&
                    B &&
                    (c === H.CODE_CODE_C
                        ? (A = A.substring(0, mt - 2))
                        : (A = A.substring(0, mt - 1)));
                const lt = (i[1] + i[0]) / 2,
                    Te = m + ct / 2,
                    Ke = a.length,
                    ht = new Uint8Array(Ke);
                for (let ln = 0; ln < Ke; ln++) ht[ln] = a[ln];
                const cn = [new j(lt, e), new j(Te, e)];
                return new tt(A, ht, 0, cn, Y.CODE_128, new Date().getTime());
            }
        }
        (H.CODE_PATTERNS = [
            Int32Array.from([2, 1, 2, 2, 2, 2]),
            Int32Array.from([2, 2, 2, 1, 2, 2]),
            Int32Array.from([2, 2, 2, 2, 2, 1]),
            Int32Array.from([1, 2, 1, 2, 2, 3]),
            Int32Array.from([1, 2, 1, 3, 2, 2]),
            Int32Array.from([1, 3, 1, 2, 2, 2]),
            Int32Array.from([1, 2, 2, 2, 1, 3]),
            Int32Array.from([1, 2, 2, 3, 1, 2]),
            Int32Array.from([1, 3, 2, 2, 1, 2]),
            Int32Array.from([2, 2, 1, 2, 1, 3]),
            Int32Array.from([2, 2, 1, 3, 1, 2]),
            Int32Array.from([2, 3, 1, 2, 1, 2]),
            Int32Array.from([1, 1, 2, 2, 3, 2]),
            Int32Array.from([1, 2, 2, 1, 3, 2]),
            Int32Array.from([1, 2, 2, 2, 3, 1]),
            Int32Array.from([1, 1, 3, 2, 2, 2]),
            Int32Array.from([1, 2, 3, 1, 2, 2]),
            Int32Array.from([1, 2, 3, 2, 2, 1]),
            Int32Array.from([2, 2, 3, 2, 1, 1]),
            Int32Array.from([2, 2, 1, 1, 3, 2]),
            Int32Array.from([2, 2, 1, 2, 3, 1]),
            Int32Array.from([2, 1, 3, 2, 1, 2]),
            Int32Array.from([2, 2, 3, 1, 1, 2]),
            Int32Array.from([3, 1, 2, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 2, 2, 2]),
            Int32Array.from([3, 2, 1, 1, 2, 2]),
            Int32Array.from([3, 2, 1, 2, 2, 1]),
            Int32Array.from([3, 1, 2, 2, 1, 2]),
            Int32Array.from([3, 2, 2, 1, 1, 2]),
            Int32Array.from([3, 2, 2, 2, 1, 1]),
            Int32Array.from([2, 1, 2, 1, 2, 3]),
            Int32Array.from([2, 1, 2, 3, 2, 1]),
            Int32Array.from([2, 3, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 1, 3, 2, 3]),
            Int32Array.from([1, 3, 1, 1, 2, 3]),
            Int32Array.from([1, 3, 1, 3, 2, 1]),
            Int32Array.from([1, 1, 2, 3, 1, 3]),
            Int32Array.from([1, 3, 2, 1, 1, 3]),
            Int32Array.from([1, 3, 2, 3, 1, 1]),
            Int32Array.from([2, 1, 1, 3, 1, 3]),
            Int32Array.from([2, 3, 1, 1, 1, 3]),
            Int32Array.from([2, 3, 1, 3, 1, 1]),
            Int32Array.from([1, 1, 2, 1, 3, 3]),
            Int32Array.from([1, 1, 2, 3, 3, 1]),
            Int32Array.from([1, 3, 2, 1, 3, 1]),
            Int32Array.from([1, 1, 3, 1, 2, 3]),
            Int32Array.from([1, 1, 3, 3, 2, 1]),
            Int32Array.from([1, 3, 3, 1, 2, 1]),
            Int32Array.from([3, 1, 3, 1, 2, 1]),
            Int32Array.from([2, 1, 1, 3, 3, 1]),
            Int32Array.from([2, 3, 1, 1, 3, 1]),
            Int32Array.from([2, 1, 3, 1, 1, 3]),
            Int32Array.from([2, 1, 3, 3, 1, 1]),
            Int32Array.from([2, 1, 3, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 2, 3]),
            Int32Array.from([3, 1, 1, 3, 2, 1]),
            Int32Array.from([3, 3, 1, 1, 2, 1]),
            Int32Array.from([3, 1, 2, 1, 1, 3]),
            Int32Array.from([3, 1, 2, 3, 1, 1]),
            Int32Array.from([3, 3, 2, 1, 1, 1]),
            Int32Array.from([3, 1, 4, 1, 1, 1]),
            Int32Array.from([2, 2, 1, 4, 1, 1]),
            Int32Array.from([4, 3, 1, 1, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 2, 4]),
            Int32Array.from([1, 1, 1, 4, 2, 2]),
            Int32Array.from([1, 2, 1, 1, 2, 4]),
            Int32Array.from([1, 2, 1, 4, 2, 1]),
            Int32Array.from([1, 4, 1, 1, 2, 2]),
            Int32Array.from([1, 4, 1, 2, 2, 1]),
            Int32Array.from([1, 1, 2, 2, 1, 4]),
            Int32Array.from([1, 1, 2, 4, 1, 2]),
            Int32Array.from([1, 2, 2, 1, 1, 4]),
            Int32Array.from([1, 2, 2, 4, 1, 1]),
            Int32Array.from([1, 4, 2, 1, 1, 2]),
            Int32Array.from([1, 4, 2, 2, 1, 1]),
            Int32Array.from([2, 4, 1, 2, 1, 1]),
            Int32Array.from([2, 2, 1, 1, 1, 4]),
            Int32Array.from([4, 1, 3, 1, 1, 1]),
            Int32Array.from([2, 4, 1, 1, 1, 2]),
            Int32Array.from([1, 3, 4, 1, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 4, 2]),
            Int32Array.from([1, 2, 1, 1, 4, 2]),
            Int32Array.from([1, 2, 1, 2, 4, 1]),
            Int32Array.from([1, 1, 4, 2, 1, 2]),
            Int32Array.from([1, 2, 4, 1, 1, 2]),
            Int32Array.from([1, 2, 4, 2, 1, 1]),
            Int32Array.from([4, 1, 1, 2, 1, 2]),
            Int32Array.from([4, 2, 1, 1, 1, 2]),
            Int32Array.from([4, 2, 1, 2, 1, 1]),
            Int32Array.from([2, 1, 2, 1, 4, 1]),
            Int32Array.from([2, 1, 4, 1, 2, 1]),
            Int32Array.from([4, 1, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 1, 1, 4, 3]),
            Int32Array.from([1, 1, 1, 3, 4, 1]),
            Int32Array.from([1, 3, 1, 1, 4, 1]),
            Int32Array.from([1, 1, 4, 1, 1, 3]),
            Int32Array.from([1, 1, 4, 3, 1, 1]),
            Int32Array.from([4, 1, 1, 1, 1, 3]),
            Int32Array.from([4, 1, 1, 3, 1, 1]),
            Int32Array.from([1, 1, 3, 1, 4, 1]),
            Int32Array.from([1, 1, 4, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 4, 1]),
            Int32Array.from([4, 1, 1, 1, 3, 1]),
            Int32Array.from([2, 1, 1, 4, 1, 2]),
            Int32Array.from([2, 1, 1, 2, 1, 4]),
            Int32Array.from([2, 1, 1, 2, 3, 2]),
            Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
        ]),
            (H.MAX_AVG_VARIANCE = 0.25),
            (H.MAX_INDIVIDUAL_VARIANCE = 0.7),
            (H.CODE_SHIFT = 98),
            (H.CODE_CODE_C = 99),
            (H.CODE_CODE_B = 100),
            (H.CODE_CODE_A = 101),
            (H.CODE_FNC_1 = 102),
            (H.CODE_FNC_2 = 97),
            (H.CODE_FNC_3 = 96),
            (H.CODE_FNC_4_A = 101),
            (H.CODE_FNC_4_B = 100),
            (H.CODE_START_A = 103),
            (H.CODE_START_B = 104),
            (H.CODE_START_C = 105),
            (H.CODE_STOP = 106);
        class Ue extends ke {
            constructor(e = !1, t = !1) {
                super(),
                    (this.usingCheckDigit = e),
                    (this.extendedMode = t),
                    (this.decodeRowResult = ""),
                    (this.counters = new Int32Array(9));
            }
            decodeRow(e, t, n) {
                let r = this.counters;
                r.fill(0), (this.decodeRowResult = "");
                let i = Ue.findAsteriskPattern(t, r),
                    s = t.getNextSet(i[1]),
                    o = t.getSize(),
                    a,
                    c;
                do {
                    Ue.recordPattern(t, s, r);
                    let T = Ue.toNarrowWidePattern(r);
                    if (T < 0) throw new R();
                    (a = Ue.patternToChar(T)),
                        (this.decodeRowResult += a),
                        (c = s);
                    for (let S of r) s += S;
                    s = t.getNextSet(s);
                } while (a !== "*");
                this.decodeRowResult = this.decodeRowResult.substring(
                    0,
                    this.decodeRowResult.length - 1
                );
                let f = 0;
                for (let T of r) f += T;
                let x = s - c - f;
                if (s !== o && x * 2 < f) throw new R();
                if (this.usingCheckDigit) {
                    let T = this.decodeRowResult.length - 1,
                        S = 0;
                    for (let M = 0; M < T; M++)
                        S += Ue.ALPHABET_STRING.indexOf(
                            this.decodeRowResult.charAt(M)
                        );
                    if (
                        this.decodeRowResult.charAt(T) !==
                        Ue.ALPHABET_STRING.charAt(S % 43)
                    )
                        throw new J();
                    this.decodeRowResult = this.decodeRowResult.substring(0, T);
                }
                if (this.decodeRowResult.length === 0) throw new R();
                let A;
                this.extendedMode
                    ? (A = Ue.decodeExtended(this.decodeRowResult))
                    : (A = this.decodeRowResult);
                let m = (i[1] + i[0]) / 2,
                    I = c + f / 2;
                return new tt(
                    A,
                    null,
                    0,
                    [new j(m, e), new j(I, e)],
                    Y.CODE_39,
                    new Date().getTime()
                );
            }
            static findAsteriskPattern(e, t) {
                let n = e.getSize(),
                    r = e.getNextSet(0),
                    i = 0,
                    s = r,
                    o = !1,
                    a = t.length;
                for (let c = r; c < n; c++)
                    if (e.get(c) !== o) t[i]++;
                    else {
                        if (i === a - 1) {
                            if (
                                this.toNarrowWidePattern(t) ===
                                    Ue.ASTERISK_ENCODING &&
                                e.isRange(
                                    Math.max(0, s - Math.floor((c - s) / 2)),
                                    s,
                                    !1
                                )
                            )
                                return [s, c];
                            (s += t[0] + t[1]),
                                t.copyWithin(0, 2, 2 + i - 1),
                                (t[i - 1] = 0),
                                (t[i] = 0),
                                i--;
                        } else i++;
                        (t[i] = 1), (o = !o);
                    }
                throw new R();
            }
            static toNarrowWidePattern(e) {
                let t = e.length,
                    n = 0,
                    r;
                do {
                    let i = 2147483647;
                    for (let a of e) a < i && a > n && (i = a);
                    (n = i), (r = 0);
                    let s = 0,
                        o = 0;
                    for (let a = 0; a < t; a++) {
                        let c = e[a];
                        c > n && ((o |= 1 << (t - 1 - a)), r++, (s += c));
                    }
                    if (r === 3) {
                        for (let a = 0; a < t && r > 0; a++) {
                            let c = e[a];
                            if (c > n && (r--, c * 2 >= s)) return -1;
                        }
                        return o;
                    }
                } while (r > 3);
                return -1;
            }
            static patternToChar(e) {
                for (let t = 0; t < Ue.CHARACTER_ENCODINGS.length; t++)
                    if (Ue.CHARACTER_ENCODINGS[t] === e)
                        return Ue.ALPHABET_STRING.charAt(t);
                if (e === Ue.ASTERISK_ENCODING) return "*";
                throw new R();
            }
            static decodeExtended(e) {
                let t = e.length,
                    n = "";
                for (let r = 0; r < t; r++) {
                    let i = e.charAt(r);
                    if (i === "+" || i === "$" || i === "%" || i === "/") {
                        let s = e.charAt(r + 1),
                            o = "\0";
                        switch (i) {
                            case "+":
                                if (s >= "A" && s <= "Z")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) + 32
                                    );
                                else throw new U();
                                break;
                            case "$":
                                if (s >= "A" && s <= "Z")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) - 64
                                    );
                                else throw new U();
                                break;
                            case "%":
                                if (s >= "A" && s <= "E")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) - 38
                                    );
                                else if (s >= "F" && s <= "J")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) - 11
                                    );
                                else if (s >= "K" && s <= "O")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) + 16
                                    );
                                else if (s >= "P" && s <= "T")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) + 43
                                    );
                                else if (s === "U") o = "\0";
                                else if (s === "V") o = "@";
                                else if (s === "W") o = "`";
                                else if (s === "X" || s === "Y" || s === "Z")
                                    o = "";
                                else throw new U();
                                break;
                            case "/":
                                if (s >= "A" && s <= "O")
                                    o = String.fromCharCode(
                                        s.charCodeAt(0) - 32
                                    );
                                else if (s === "Z") o = ":";
                                else throw new U();
                                break;
                        }
                        (n += o), r++;
                    } else n += i;
                }
                return n;
            }
        }
        (Ue.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%"),
            (Ue.CHARACTER_ENCODINGS = [
                52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25,
                280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70,
                22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138,
                42,
            ]),
            (Ue.ASTERISK_ENCODING = 148);
        class me extends ke {
            constructor() {
                super(...arguments), (this.narrowLineWidth = -1);
            }
            decodeRow(e, t, n) {
                let r = this.decodeStart(t),
                    i = this.decodeEnd(t),
                    s = new we();
                me.decodeMiddle(t, r[1], i[0], s);
                let o = s.toString(),
                    a = null;
                n != null && (a = n.get(fe.ALLOWED_LENGTHS)),
                    a == null && (a = me.DEFAULT_ALLOWED_LENGTHS);
                let c = o.length,
                    f = !1,
                    x = 0;
                for (let I of a) {
                    if (c === I) {
                        f = !0;
                        break;
                    }
                    I > x && (x = I);
                }
                if ((!f && c > x && (f = !0), !f)) throw new U();
                const A = [new j(r[1], e), new j(i[0], e)];
                return new tt(o, null, 0, A, Y.ITF, new Date().getTime());
            }
            static decodeMiddle(e, t, n, r) {
                let i = new Int32Array(10),
                    s = new Int32Array(5),
                    o = new Int32Array(5);
                for (i.fill(0), s.fill(0), o.fill(0); t < n; ) {
                    ke.recordPattern(e, t, i);
                    for (let c = 0; c < 5; c++) {
                        let f = 2 * c;
                        (s[c] = i[f]), (o[c] = i[f + 1]);
                    }
                    let a = me.decodeDigit(s);
                    r.append(a.toString()),
                        (a = this.decodeDigit(o)),
                        r.append(a.toString()),
                        i.forEach(function (c) {
                            t += c;
                        });
                }
            }
            decodeStart(e) {
                let t = me.skipWhiteSpace(e),
                    n = me.findGuardPattern(e, t, me.START_PATTERN);
                return (
                    (this.narrowLineWidth = (n[1] - n[0]) / 4),
                    this.validateQuietZone(e, n[0]),
                    n
                );
            }
            validateQuietZone(e, t) {
                let n = this.narrowLineWidth * 10;
                n = n < t ? n : t;
                for (let r = t - 1; n > 0 && r >= 0 && !e.get(r); r--) n--;
                if (n !== 0) throw new R();
            }
            static skipWhiteSpace(e) {
                const t = e.getSize(),
                    n = e.getNextSet(0);
                if (n === t) throw new R();
                return n;
            }
            decodeEnd(e) {
                e.reverse();
                try {
                    let t = me.skipWhiteSpace(e),
                        n;
                    try {
                        n = me.findGuardPattern(
                            e,
                            t,
                            me.END_PATTERN_REVERSED[0]
                        );
                    } catch (i) {
                        i instanceof R &&
                            (n = me.findGuardPattern(
                                e,
                                t,
                                me.END_PATTERN_REVERSED[1]
                            ));
                    }
                    this.validateQuietZone(e, n[0]);
                    let r = n[0];
                    return (
                        (n[0] = e.getSize() - n[1]), (n[1] = e.getSize() - r), n
                    );
                } finally {
                    e.reverse();
                }
            }
            static findGuardPattern(e, t, n) {
                let r = n.length,
                    i = new Int32Array(r),
                    s = e.getSize(),
                    o = !1,
                    a = 0,
                    c = t;
                i.fill(0);
                for (let f = t; f < s; f++)
                    if (e.get(f) !== o) i[a]++;
                    else {
                        if (a === r - 1) {
                            if (
                                ke.patternMatchVariance(
                                    i,
                                    n,
                                    me.MAX_INDIVIDUAL_VARIANCE
                                ) < me.MAX_AVG_VARIANCE
                            )
                                return [c, f];
                            (c += i[0] + i[1]),
                                K.arraycopy(i, 2, i, 0, a - 1),
                                (i[a - 1] = 0),
                                (i[a] = 0),
                                a--;
                        } else a++;
                        (i[a] = 1), (o = !o);
                    }
                throw new R();
            }
            static decodeDigit(e) {
                let t = me.MAX_AVG_VARIANCE,
                    n = -1,
                    r = me.PATTERNS.length;
                for (let i = 0; i < r; i++) {
                    let s = me.PATTERNS[i],
                        o = ke.patternMatchVariance(
                            e,
                            s,
                            me.MAX_INDIVIDUAL_VARIANCE
                        );
                    o < t ? ((t = o), (n = i)) : o === t && (n = -1);
                }
                if (n >= 0) return n % 10;
                throw new R();
            }
        }
        (me.PATTERNS = [
            Int32Array.from([1, 1, 2, 2, 1]),
            Int32Array.from([2, 1, 1, 1, 2]),
            Int32Array.from([1, 2, 1, 1, 2]),
            Int32Array.from([2, 2, 1, 1, 1]),
            Int32Array.from([1, 1, 2, 1, 2]),
            Int32Array.from([2, 1, 2, 1, 1]),
            Int32Array.from([1, 2, 2, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 2]),
            Int32Array.from([2, 1, 1, 2, 1]),
            Int32Array.from([1, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 3, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 3]),
            Int32Array.from([1, 3, 1, 1, 3]),
            Int32Array.from([3, 3, 1, 1, 1]),
            Int32Array.from([1, 1, 3, 1, 3]),
            Int32Array.from([3, 1, 3, 1, 1]),
            Int32Array.from([1, 3, 3, 1, 1]),
            Int32Array.from([1, 1, 1, 3, 3]),
            Int32Array.from([3, 1, 1, 3, 1]),
            Int32Array.from([1, 3, 1, 3, 1]),
        ]),
            (me.MAX_AVG_VARIANCE = 0.38),
            (me.MAX_INDIVIDUAL_VARIANCE = 0.5),
            (me.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
            (me.START_PATTERN = Int32Array.from([1, 1, 1, 1])),
            (me.END_PATTERN_REVERSED = [
                Int32Array.from([1, 1, 2]),
                Int32Array.from([1, 1, 3]),
            ]);
        class Re extends ke {
            constructor() {
                super(...arguments), (this.decodeRowStringBuffer = "");
            }
            static findStartGuardPattern(e) {
                let t = !1,
                    n,
                    r = 0,
                    i = Int32Array.from([0, 0, 0]);
                for (; !t; ) {
                    (i = Int32Array.from([0, 0, 0])),
                        (n = Re.findGuardPattern(
                            e,
                            r,
                            !1,
                            this.START_END_PATTERN,
                            i
                        ));
                    let s = n[0];
                    r = n[1];
                    let o = s - (r - s);
                    o >= 0 && (t = e.isRange(o, s, !1));
                }
                return n;
            }
            static checkChecksum(e) {
                return Re.checkStandardUPCEANChecksum(e);
            }
            static checkStandardUPCEANChecksum(e) {
                let t = e.length;
                if (t === 0) return !1;
                let n = parseInt(e.charAt(t - 1), 10);
                return (
                    Re.getStandardUPCEANChecksum(e.substring(0, t - 1)) === n
                );
            }
            static getStandardUPCEANChecksum(e) {
                let t = e.length,
                    n = 0;
                for (let r = t - 1; r >= 0; r -= 2) {
                    let i = e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                    if (i < 0 || i > 9) throw new U();
                    n += i;
                }
                n *= 3;
                for (let r = t - 2; r >= 0; r -= 2) {
                    let i = e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                    if (i < 0 || i > 9) throw new U();
                    n += i;
                }
                return (1e3 - n) % 10;
            }
            static decodeEnd(e, t) {
                return Re.findGuardPattern(
                    e,
                    t,
                    !1,
                    Re.START_END_PATTERN,
                    new Int32Array(Re.START_END_PATTERN.length).fill(0)
                );
            }
            static findGuardPatternWithoutCounters(e, t, n, r) {
                return this.findGuardPattern(
                    e,
                    t,
                    n,
                    r,
                    new Int32Array(r.length)
                );
            }
            static findGuardPattern(e, t, n, r, i) {
                let s = e.getSize();
                t = n ? e.getNextUnset(t) : e.getNextSet(t);
                let o = 0,
                    a = t,
                    c = r.length,
                    f = n;
                for (let x = t; x < s; x++)
                    if (e.get(x) !== f) i[o]++;
                    else {
                        if (o === c - 1) {
                            if (
                                ke.patternMatchVariance(
                                    i,
                                    r,
                                    Re.MAX_INDIVIDUAL_VARIANCE
                                ) < Re.MAX_AVG_VARIANCE
                            )
                                return Int32Array.from([a, x]);
                            a += i[0] + i[1];
                            let A = i.slice(2, i.length - 1);
                            for (let m = 0; m < o - 1; m++) i[m] = A[m];
                            (i[o - 1] = 0), (i[o] = 0), o--;
                        } else o++;
                        (i[o] = 1), (f = !f);
                    }
                throw new R();
            }
            static decodeDigit(e, t, n, r) {
                this.recordPattern(e, n, t);
                let i = this.MAX_AVG_VARIANCE,
                    s = -1,
                    o = r.length;
                for (let a = 0; a < o; a++) {
                    let c = r[a],
                        f = ke.patternMatchVariance(
                            t,
                            c,
                            Re.MAX_INDIVIDUAL_VARIANCE
                        );
                    f < i && ((i = f), (s = a));
                }
                if (s >= 0) return s;
                throw new R();
            }
        }
        (Re.MAX_AVG_VARIANCE = 0.48),
            (Re.MAX_INDIVIDUAL_VARIANCE = 0.7),
            (Re.START_END_PATTERN = Int32Array.from([1, 1, 1])),
            (Re.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1])),
            (Re.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
            (Re.L_PATTERNS = [
                Int32Array.from([3, 2, 1, 1]),
                Int32Array.from([2, 2, 2, 1]),
                Int32Array.from([2, 1, 2, 2]),
                Int32Array.from([1, 4, 1, 1]),
                Int32Array.from([1, 1, 3, 2]),
                Int32Array.from([1, 2, 3, 1]),
                Int32Array.from([1, 1, 1, 4]),
                Int32Array.from([1, 3, 1, 2]),
                Int32Array.from([1, 2, 1, 3]),
                Int32Array.from([3, 1, 1, 2]),
            ]);
        class xn {
            constructor() {
                (this.CHECK_DIGIT_ENCODINGS = [
                    24, 20, 18, 17, 12, 6, 3, 10, 9, 5,
                ]),
                    (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
                    (this.decodeRowStringBuffer = "");
            }
            decodeRow(e, t, n) {
                let r = this.decodeRowStringBuffer,
                    i = this.decodeMiddle(t, n, r),
                    s = r.toString(),
                    o = xn.parseExtensionString(s),
                    a = [new j((n[0] + n[1]) / 2, e), new j(i, e)],
                    c = new tt(
                        s,
                        null,
                        0,
                        a,
                        Y.UPC_EAN_EXTENSION,
                        new Date().getTime()
                    );
                return o != null && c.putAllMetadata(o), c;
            }
            decodeMiddle(e, t, n) {
                let r = this.decodeMiddleCounters;
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                let i = e.getSize(),
                    s = t[1],
                    o = 0;
                for (let c = 0; c < 5 && s < i; c++) {
                    let f = Re.decodeDigit(e, r, s, Re.L_AND_G_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + (f % 10));
                    for (let x of r) s += x;
                    f >= 10 && (o |= 1 << (4 - c)),
                        c !== 4 &&
                            ((s = e.getNextSet(s)), (s = e.getNextUnset(s)));
                }
                if (n.length !== 5) throw new R();
                let a = this.determineCheckDigit(o);
                if (xn.extensionChecksum(n.toString()) !== a) throw new R();
                return s;
            }
            static extensionChecksum(e) {
                let t = e.length,
                    n = 0;
                for (let r = t - 2; r >= 0; r -= 2)
                    n += e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                n *= 3;
                for (let r = t - 1; r >= 0; r -= 2)
                    n += e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                return (n *= 3), n % 10;
            }
            determineCheckDigit(e) {
                for (let t = 0; t < 10; t++)
                    if (e === this.CHECK_DIGIT_ENCODINGS[t]) return t;
                throw new R();
            }
            static parseExtensionString(e) {
                if (e.length !== 5) return null;
                let t = xn.parseExtension5String(e);
                return t == null ? null : new Map([[Ge.SUGGESTED_PRICE, t]]);
            }
            static parseExtension5String(e) {
                let t;
                switch (e.charAt(0)) {
                    case "0":
                        t = "£";
                        break;
                    case "5":
                        t = "$";
                        break;
                    case "9":
                        switch (e) {
                            case "90000":
                                return null;
                            case "99991":
                                return "0.00";
                            case "99990":
                                return "Used";
                        }
                        t = "";
                        break;
                    default:
                        t = "";
                        break;
                }
                let n = parseInt(e.substring(1)),
                    r = (n / 100).toString(),
                    i = n % 100,
                    s = i < 10 ? "0" + i : i.toString();
                return t + r + "." + s;
            }
        }
        class Wn {
            constructor() {
                (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
                    (this.decodeRowStringBuffer = "");
            }
            decodeRow(e, t, n) {
                let r = this.decodeRowStringBuffer,
                    i = this.decodeMiddle(t, n, r),
                    s = r.toString(),
                    o = Wn.parseExtensionString(s),
                    a = [new j((n[0] + n[1]) / 2, e), new j(i, e)],
                    c = new tt(
                        s,
                        null,
                        0,
                        a,
                        Y.UPC_EAN_EXTENSION,
                        new Date().getTime()
                    );
                return o != null && c.putAllMetadata(o), c;
            }
            decodeMiddle(e, t, n) {
                let r = this.decodeMiddleCounters;
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                let i = e.getSize(),
                    s = t[1],
                    o = 0;
                for (let a = 0; a < 2 && s < i; a++) {
                    let c = Re.decodeDigit(e, r, s, Re.L_AND_G_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + (c % 10));
                    for (let f of r) s += f;
                    c >= 10 && (o |= 1 << (1 - a)),
                        a !== 1 &&
                            ((s = e.getNextSet(s)), (s = e.getNextUnset(s)));
                }
                if (n.length !== 2) throw new R();
                if (parseInt(n.toString()) % 4 !== o) throw new R();
                return s;
            }
            static parseExtensionString(e) {
                return e.length !== 2
                    ? null
                    : new Map([[Ge.ISSUE_NUMBER, parseInt(e)]]);
            }
        }
        class Ir {
            static decodeRow(e, t, n) {
                let r = Re.findGuardPattern(
                    t,
                    n,
                    !1,
                    this.EXTENSION_START_PATTERN,
                    new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0)
                );
                try {
                    return new xn().decodeRow(e, t, r);
                } catch {
                    return new Wn().decodeRow(e, t, r);
                }
            }
        }
        Ir.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
        class ge extends Re {
            constructor() {
                super(),
                    (this.decodeRowStringBuffer = ""),
                    (ge.L_AND_G_PATTERNS = ge.L_PATTERNS.map((e) =>
                        Int32Array.from(e)
                    ));
                for (let e = 10; e < 20; e++) {
                    let t = ge.L_PATTERNS[e - 10],
                        n = new Int32Array(t.length);
                    for (let r = 0; r < t.length; r++)
                        n[r] = t[t.length - r - 1];
                    ge.L_AND_G_PATTERNS[e] = n;
                }
            }
            decodeRow(e, t, n) {
                let r = ge.findStartGuardPattern(t),
                    i = n == null ? null : n.get(fe.NEED_RESULT_POINT_CALLBACK);
                if (i != null) {
                    const B = new j((r[0] + r[1]) / 2, e);
                    i.foundPossibleResultPoint(B);
                }
                let s = this.decodeMiddle(t, r, this.decodeRowStringBuffer),
                    o = s.rowOffset,
                    a = s.resultString;
                if (i != null) {
                    const B = new j(o, e);
                    i.foundPossibleResultPoint(B);
                }
                let c = this.decodeEnd(t, o);
                if (i != null) {
                    const B = new j((c[0] + c[1]) / 2, e);
                    i.foundPossibleResultPoint(B);
                }
                let f = c[1],
                    x = f + (f - c[0]);
                if (x >= t.getSize() || !t.isRange(f, x, !1)) throw new R();
                let A = a.toString();
                if (A.length < 8) throw new U();
                if (!ge.checkChecksum(A)) throw new J();
                let m = (r[1] + r[0]) / 2,
                    I = (c[1] + c[0]) / 2,
                    T = this.getBarcodeFormat(),
                    S = [new j(m, e), new j(I, e)],
                    M = new tt(A, null, 0, S, T, new Date().getTime()),
                    P = 0;
                try {
                    let B = Ir.decodeRow(e, t, c[1]);
                    M.putMetadata(Ge.UPC_EAN_EXTENSION, B.getText()),
                        M.putAllMetadata(B.getResultMetadata()),
                        M.addResultPoints(B.getResultPoints()),
                        (P = B.getText().length);
                } catch {}
                let F = n == null ? null : n.get(fe.ALLOWED_EAN_EXTENSIONS);
                if (F != null) {
                    let B = !1;
                    for (let se in F)
                        if (P.toString() === se) {
                            B = !0;
                            break;
                        }
                    if (!B) throw new R();
                }
                return M;
            }
            decodeEnd(e, t) {
                return ge.findGuardPattern(
                    e,
                    t,
                    !1,
                    ge.START_END_PATTERN,
                    new Int32Array(ge.START_END_PATTERN.length).fill(0)
                );
            }
            static checkChecksum(e) {
                return ge.checkStandardUPCEANChecksum(e);
            }
            static checkStandardUPCEANChecksum(e) {
                let t = e.length;
                if (t === 0) return !1;
                let n = parseInt(e.charAt(t - 1), 10);
                return (
                    ge.getStandardUPCEANChecksum(e.substring(0, t - 1)) === n
                );
            }
            static getStandardUPCEANChecksum(e) {
                let t = e.length,
                    n = 0;
                for (let r = t - 1; r >= 0; r -= 2) {
                    let i = e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                    if (i < 0 || i > 9) throw new U();
                    n += i;
                }
                n *= 3;
                for (let r = t - 2; r >= 0; r -= 2) {
                    let i = e.charAt(r).charCodeAt(0) - "0".charCodeAt(0);
                    if (i < 0 || i > 9) throw new U();
                    n += i;
                }
                return (1e3 - n) % 10;
            }
        }
        class Xt extends ge {
            constructor() {
                super(),
                    (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
            }
            decodeMiddle(e, t, n) {
                let r = this.decodeMiddleCounters;
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                let i = e.getSize(),
                    s = t[1],
                    o = 0;
                for (let c = 0; c < 6 && s < i; c++) {
                    let f = ge.decodeDigit(e, r, s, ge.L_AND_G_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + (f % 10));
                    for (let x of r) s += x;
                    f >= 10 && (o |= 1 << (5 - c));
                }
                (n = Xt.determineFirstDigit(n, o)),
                    (s = ge.findGuardPattern(
                        e,
                        s,
                        !0,
                        ge.MIDDLE_PATTERN,
                        new Int32Array(ge.MIDDLE_PATTERN.length).fill(0)
                    )[1]);
                for (let c = 0; c < 6 && s < i; c++) {
                    let f = ge.decodeDigit(e, r, s, ge.L_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + f);
                    for (let x of r) s += x;
                }
                return { rowOffset: s, resultString: n };
            }
            getBarcodeFormat() {
                return Y.EAN_13;
            }
            static determineFirstDigit(e, t) {
                for (let n = 0; n < 10; n++)
                    if (t === this.FIRST_DIGIT_ENCODINGS[n])
                        return (
                            (e =
                                String.fromCharCode("0".charCodeAt(0) + n) + e),
                            e
                        );
                throw new R();
            }
        }
        Xt.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
        class Tr extends ge {
            constructor() {
                super(),
                    (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
            }
            decodeMiddle(e, t, n) {
                const r = this.decodeMiddleCounters;
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                let i = e.getSize(),
                    s = t[1];
                for (let a = 0; a < 4 && s < i; a++) {
                    let c = ge.decodeDigit(e, r, s, ge.L_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + c);
                    for (let f of r) s += f;
                }
                s = ge.findGuardPattern(
                    e,
                    s,
                    !0,
                    ge.MIDDLE_PATTERN,
                    new Int32Array(ge.MIDDLE_PATTERN.length).fill(0)
                )[1];
                for (let a = 0; a < 4 && s < i; a++) {
                    let c = ge.decodeDigit(e, r, s, ge.L_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + c);
                    for (let f of r) s += f;
                }
                return { rowOffset: s, resultString: n };
            }
            getBarcodeFormat() {
                return Y.EAN_8;
            }
        }
        class yr extends ge {
            constructor() {
                super(...arguments), (this.ean13Reader = new Xt());
            }
            getBarcodeFormat() {
                return Y.UPC_A;
            }
            decode(e, t) {
                return this.maybeReturnResult(this.ean13Reader.decode(e));
            }
            decodeRow(e, t, n) {
                return this.maybeReturnResult(
                    this.ean13Reader.decodeRow(e, t, n)
                );
            }
            decodeMiddle(e, t, n) {
                return this.ean13Reader.decodeMiddle(e, t, n);
            }
            maybeReturnResult(e) {
                let t = e.getText();
                if (t.charAt(0) === "0") {
                    let n = new tt(
                        t.substring(1),
                        null,
                        null,
                        e.getResultPoints(),
                        Y.UPC_A
                    );
                    return (
                        e.getResultMetadata() != null &&
                            n.putAllMetadata(e.getResultMetadata()),
                        n
                    );
                } else throw new R();
            }
            reset() {
                this.ean13Reader.reset();
            }
        }
        class pt extends ge {
            constructor() {
                super(), (this.decodeMiddleCounters = new Int32Array(4));
            }
            decodeMiddle(e, t, n) {
                const r = this.decodeMiddleCounters.map((c) => c);
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                const i = e.getSize();
                let s = t[1],
                    o = 0;
                for (let c = 0; c < 6 && s < i; c++) {
                    const f = pt.decodeDigit(e, r, s, pt.L_AND_G_PATTERNS);
                    n += String.fromCharCode("0".charCodeAt(0) + (f % 10));
                    for (let x of r) s += x;
                    f >= 10 && (o |= 1 << (5 - c));
                }
                let a = pt.determineNumSysAndCheckDigit(n, o);
                return { rowOffset: s, resultString: a };
            }
            decodeEnd(e, t) {
                return pt.findGuardPatternWithoutCounters(
                    e,
                    t,
                    !0,
                    pt.MIDDLE_END_PATTERN
                );
            }
            checkChecksum(e) {
                return ge.checkChecksum(pt.convertUPCEtoUPCA(e));
            }
            static determineNumSysAndCheckDigit(e, t) {
                for (let n = 0; n <= 1; n++)
                    for (let r = 0; r < 10; r++)
                        if (t === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[n][r]) {
                            let i = String.fromCharCode("0".charCodeAt(0) + n),
                                s = String.fromCharCode("0".charCodeAt(0) + r);
                            return i + e + s;
                        }
                throw R.getNotFoundInstance();
            }
            getBarcodeFormat() {
                return Y.UPC_E;
            }
            static convertUPCEtoUPCA(e) {
                const t = e
                        .slice(1, 7)
                        .split("")
                        .map((i) => i.charCodeAt(0)),
                    n = new we();
                n.append(e.charAt(0));
                let r = t[5];
                switch (r) {
                    case 0:
                    case 1:
                    case 2:
                        n.appendChars(t, 0, 2),
                            n.append(r),
                            n.append("0000"),
                            n.appendChars(t, 2, 3);
                        break;
                    case 3:
                        n.appendChars(t, 0, 3),
                            n.append("00000"),
                            n.appendChars(t, 3, 2);
                        break;
                    case 4:
                        n.appendChars(t, 0, 4),
                            n.append("00000"),
                            n.append(t[4]);
                        break;
                    default:
                        n.appendChars(t, 0, 5), n.append("0000"), n.append(r);
                        break;
                }
                return e.length >= 8 && n.append(e.charAt(7)), n.toString();
            }
        }
        (pt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
            (pt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
                Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
                Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 26]),
            ]);
        class Yn extends ke {
            constructor(e) {
                super();
                let t = e == null ? null : e.get(fe.POSSIBLE_FORMATS),
                    n = [];
                w(t)
                    ? (n.push(new Xt()),
                      n.push(new yr()),
                      n.push(new Tr()),
                      n.push(new pt()))
                    : (t.indexOf(Y.EAN_13) > -1 && n.push(new Xt()),
                      t.indexOf(Y.UPC_A) > -1 && n.push(new yr()),
                      t.indexOf(Y.EAN_8) > -1 && n.push(new Tr()),
                      t.indexOf(Y.UPC_E) > -1 && n.push(new pt())),
                    (this.readers = n);
            }
            decodeRow(e, t, n) {
                for (let r of this.readers)
                    try {
                        const i = r.decodeRow(e, t, n),
                            s =
                                i.getBarcodeFormat() === Y.EAN_13 &&
                                i.getText().charAt(0) === "0",
                            o = n == null ? null : n.get(fe.POSSIBLE_FORMATS),
                            a = o == null || o.includes(Y.UPC_A);
                        if (s && a) {
                            const c = i.getRawBytes(),
                                f = new tt(
                                    i.getText().substring(1),
                                    c,
                                    c ? c.length : null,
                                    i.getResultPoints(),
                                    Y.UPC_A
                                );
                            return f.putAllMetadata(i.getResultMetadata()), f;
                        }
                        return i;
                    } catch {}
                throw new R();
            }
            reset() {
                for (let e of this.readers) e.reset();
            }
        }
        class Je extends ke {
            constructor() {
                super(),
                    (this.decodeFinderCounters = new Int32Array(4)),
                    (this.dataCharacterCounters = new Int32Array(8)),
                    (this.oddRoundingErrors = new Array(4)),
                    (this.evenRoundingErrors = new Array(4)),
                    (this.oddCounts = new Array(
                        this.dataCharacterCounters.length / 2
                    )),
                    (this.evenCounts = new Array(
                        this.dataCharacterCounters.length / 2
                    ));
            }
            getDecodeFinderCounters() {
                return this.decodeFinderCounters;
            }
            getDataCharacterCounters() {
                return this.dataCharacterCounters;
            }
            getOddRoundingErrors() {
                return this.oddRoundingErrors;
            }
            getEvenRoundingErrors() {
                return this.evenRoundingErrors;
            }
            getOddCounts() {
                return this.oddCounts;
            }
            getEvenCounts() {
                return this.evenCounts;
            }
            parseFinderValue(e, t) {
                for (let n = 0; n < t.length; n++)
                    if (
                        ke.patternMatchVariance(
                            e,
                            t[n],
                            Je.MAX_INDIVIDUAL_VARIANCE
                        ) < Je.MAX_AVG_VARIANCE
                    )
                        return n;
                throw new R();
            }
            static count(e) {
                return ue.sum(new Int32Array(e));
            }
            static increment(e, t) {
                let n = 0,
                    r = t[0];
                for (let i = 1; i < e.length; i++)
                    t[i] > r && ((r = t[i]), (n = i));
                e[n]++;
            }
            static decrement(e, t) {
                let n = 0,
                    r = t[0];
                for (let i = 1; i < e.length; i++)
                    t[i] < r && ((r = t[i]), (n = i));
                e[n]--;
            }
            static isFinderPattern(e) {
                let t = e[0] + e[1],
                    n = t + e[2] + e[3],
                    r = t / n;
                if (
                    r >= Je.MIN_FINDER_PATTERN_RATIO &&
                    r <= Je.MAX_FINDER_PATTERN_RATIO
                ) {
                    let i = Number.MAX_SAFE_INTEGER,
                        s = Number.MIN_SAFE_INTEGER;
                    for (let o of e) o > s && (s = o), o < i && (i = o);
                    return s < 10 * i;
                }
                return !1;
            }
        }
        (Je.MAX_AVG_VARIANCE = 0.2),
            (Je.MAX_INDIVIDUAL_VARIANCE = 0.45),
            (Je.MIN_FINDER_PATTERN_RATIO = 9.5 / 12),
            (Je.MAX_FINDER_PATTERN_RATIO = 12.5 / 14);
        class en {
            constructor(e, t) {
                (this.value = e), (this.checksumPortion = t);
            }
            getValue() {
                return this.value;
            }
            getChecksumPortion() {
                return this.checksumPortion;
            }
            toString() {
                return this.value + "(" + this.checksumPortion + ")";
            }
            equals(e) {
                if (!(e instanceof en)) return !1;
                const t = e;
                return (
                    this.value === t.value &&
                    this.checksumPortion === t.checksumPortion
                );
            }
            hashCode() {
                return this.value ^ this.checksumPortion;
            }
        }
        class _n {
            constructor(e, t, n, r, i) {
                (this.value = e),
                    (this.startEnd = t),
                    (this.value = e),
                    (this.startEnd = t),
                    (this.resultPoints = new Array()),
                    this.resultPoints.push(new j(n, i)),
                    this.resultPoints.push(new j(r, i));
            }
            getValue() {
                return this.value;
            }
            getStartEnd() {
                return this.startEnd;
            }
            getResultPoints() {
                return this.resultPoints;
            }
            equals(e) {
                if (!(e instanceof _n)) return !1;
                const t = e;
                return this.value === t.value;
            }
            hashCode() {
                return this.value;
            }
        }
        class yt {
            constructor() {}
            static getRSSvalue(e, t, n) {
                let r = 0;
                for (let a of e) r += a;
                let i = 0,
                    s = 0,
                    o = e.length;
                for (let a = 0; a < o - 1; a++) {
                    let c;
                    for (c = 1, s |= 1 << a; c < e[a]; c++, s &= ~(1 << a)) {
                        let f = yt.combins(r - c - 1, o - a - 2);
                        if (
                            (n &&
                                s === 0 &&
                                r - c - (o - a - 1) >= o - a - 1 &&
                                (f -= yt.combins(r - c - (o - a), o - a - 2)),
                            o - a - 1 > 1)
                        ) {
                            let x = 0;
                            for (let A = r - c - (o - a - 2); A > t; A--)
                                x += yt.combins(r - c - A - 1, o - a - 3);
                            f -= x * (o - 1 - a);
                        } else r - c > t && f--;
                        i += f;
                    }
                    r -= c;
                }
                return i;
            }
            static combins(e, t) {
                let n, r;
                e - t > t ? ((r = t), (n = e - t)) : ((r = e - t), (n = t));
                let i = 1,
                    s = 1;
                for (let o = e; o > n; o--) (i *= o), s <= r && ((i /= s), s++);
                for (; s <= r; ) (i /= s), s++;
                return i;
            }
        }
        class hi {
            static buildBitArray(e) {
                let t = e.length * 2 - 1;
                e[e.length - 1].getRightChar() == null && (t -= 1);
                let n = 12 * t,
                    r = new ae(n),
                    i = 0,
                    o = e[0].getRightChar().getValue();
                for (let a = 11; a >= 0; --a) o & (1 << a) && r.set(i), i++;
                for (let a = 1; a < e.length; ++a) {
                    let c = e[a],
                        f = c.getLeftChar().getValue();
                    for (let x = 11; x >= 0; --x) f & (1 << x) && r.set(i), i++;
                    if (c.getRightChar() != null) {
                        let x = c.getRightChar().getValue();
                        for (let A = 11; A >= 0; --A)
                            x & (1 << A) && r.set(i), i++;
                    }
                }
                return r;
            }
        }
        class Zt {
            constructor(e, t) {
                t
                    ? (this.decodedInformation = null)
                    : ((this.finished = e), (this.decodedInformation = t));
            }
            getDecodedInformation() {
                return this.decodedInformation;
            }
            isFinished() {
                return this.finished;
            }
        }
        class Xn {
            constructor(e) {
                this.newPosition = e;
            }
            getNewPosition() {
                return this.newPosition;
            }
        }
        class st extends Xn {
            constructor(e, t) {
                super(e), (this.value = t);
            }
            getValue() {
                return this.value;
            }
            isFNC1() {
                return this.value === st.FNC1;
            }
        }
        st.FNC1 = "$";
        class Qt extends Xn {
            constructor(e, t, n) {
                super(e),
                    n
                        ? ((this.remaining = !0),
                          (this.remainingValue = this.remainingValue))
                        : ((this.remaining = !1), (this.remainingValue = 0)),
                    (this.newString = t);
            }
            getNewString() {
                return this.newString;
            }
            isRemaining() {
                return this.remaining;
            }
            getRemainingValue() {
                return this.remainingValue;
            }
        }
        class xt extends Xn {
            constructor(e, t, n) {
                if ((super(e), t < 0 || t > 10 || n < 0 || n > 10))
                    throw new U();
                (this.firstDigit = t), (this.secondDigit = n);
            }
            getFirstDigit() {
                return this.firstDigit;
            }
            getSecondDigit() {
                return this.secondDigit;
            }
            getValue() {
                return this.firstDigit * 10 + this.secondDigit;
            }
            isFirstDigitFNC1() {
                return this.firstDigit === xt.FNC1;
            }
            isSecondDigitFNC1() {
                return this.secondDigit === xt.FNC1;
            }
            isAnyFNC1() {
                return (
                    this.firstDigit === xt.FNC1 || this.secondDigit === xt.FNC1
                );
            }
        }
        xt.FNC1 = 10;
        class V {
            constructor() {}
            static parseFieldsInGeneralPurpose(e) {
                if (!e) return null;
                if (e.length < 2) throw new R();
                let t = e.substring(0, 2);
                for (let i of V.TWO_DIGIT_DATA_LENGTH)
                    if (i[0] === t)
                        return i[1] === V.VARIABLE_LENGTH
                            ? V.processVariableAI(2, i[2], e)
                            : V.processFixedAI(2, i[1], e);
                if (e.length < 3) throw new R();
                let n = e.substring(0, 3);
                for (let i of V.THREE_DIGIT_DATA_LENGTH)
                    if (i[0] === n)
                        return i[1] === V.VARIABLE_LENGTH
                            ? V.processVariableAI(3, i[2], e)
                            : V.processFixedAI(3, i[1], e);
                for (let i of V.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
                    if (i[0] === n)
                        return i[1] === V.VARIABLE_LENGTH
                            ? V.processVariableAI(4, i[2], e)
                            : V.processFixedAI(4, i[1], e);
                if (e.length < 4) throw new R();
                let r = e.substring(0, 4);
                for (let i of V.FOUR_DIGIT_DATA_LENGTH)
                    if (i[0] === r)
                        return i[1] === V.VARIABLE_LENGTH
                            ? V.processVariableAI(4, i[2], e)
                            : V.processFixedAI(4, i[1], e);
                throw new R();
            }
            static processFixedAI(e, t, n) {
                if (n.length < e) throw new R();
                let r = n.substring(0, e);
                if (n.length < e + t) throw new R();
                let i = n.substring(e, e + t),
                    s = n.substring(e + t),
                    o = "(" + r + ")" + i,
                    a = V.parseFieldsInGeneralPurpose(s);
                return a == null ? o : o + a;
            }
            static processVariableAI(e, t, n) {
                let r = n.substring(0, e),
                    i;
                n.length < e + t ? (i = n.length) : (i = e + t);
                let s = n.substring(e, i),
                    o = n.substring(i),
                    a = "(" + r + ")" + s,
                    c = V.parseFieldsInGeneralPurpose(o);
                return c == null ? a : a + c;
            }
        }
        (V.VARIABLE_LENGTH = []),
            (V.TWO_DIGIT_DATA_LENGTH = [
                ["00", 18],
                ["01", 14],
                ["02", 14],
                ["10", V.VARIABLE_LENGTH, 20],
                ["11", 6],
                ["12", 6],
                ["13", 6],
                ["15", 6],
                ["17", 6],
                ["20", 2],
                ["21", V.VARIABLE_LENGTH, 20],
                ["22", V.VARIABLE_LENGTH, 29],
                ["30", V.VARIABLE_LENGTH, 8],
                ["37", V.VARIABLE_LENGTH, 8],
                ["90", V.VARIABLE_LENGTH, 30],
                ["91", V.VARIABLE_LENGTH, 30],
                ["92", V.VARIABLE_LENGTH, 30],
                ["93", V.VARIABLE_LENGTH, 30],
                ["94", V.VARIABLE_LENGTH, 30],
                ["95", V.VARIABLE_LENGTH, 30],
                ["96", V.VARIABLE_LENGTH, 30],
                ["97", V.VARIABLE_LENGTH, 3],
                ["98", V.VARIABLE_LENGTH, 30],
                ["99", V.VARIABLE_LENGTH, 30],
            ]),
            (V.THREE_DIGIT_DATA_LENGTH = [
                ["240", V.VARIABLE_LENGTH, 30],
                ["241", V.VARIABLE_LENGTH, 30],
                ["242", V.VARIABLE_LENGTH, 6],
                ["250", V.VARIABLE_LENGTH, 30],
                ["251", V.VARIABLE_LENGTH, 30],
                ["253", V.VARIABLE_LENGTH, 17],
                ["254", V.VARIABLE_LENGTH, 20],
                ["400", V.VARIABLE_LENGTH, 30],
                ["401", V.VARIABLE_LENGTH, 30],
                ["402", 17],
                ["403", V.VARIABLE_LENGTH, 30],
                ["410", 13],
                ["411", 13],
                ["412", 13],
                ["413", 13],
                ["414", 13],
                ["420", V.VARIABLE_LENGTH, 20],
                ["421", V.VARIABLE_LENGTH, 15],
                ["422", 3],
                ["423", V.VARIABLE_LENGTH, 15],
                ["424", 3],
                ["425", 3],
                ["426", 3],
            ]),
            (V.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
                ["310", 6],
                ["311", 6],
                ["312", 6],
                ["313", 6],
                ["314", 6],
                ["315", 6],
                ["316", 6],
                ["320", 6],
                ["321", 6],
                ["322", 6],
                ["323", 6],
                ["324", 6],
                ["325", 6],
                ["326", 6],
                ["327", 6],
                ["328", 6],
                ["329", 6],
                ["330", 6],
                ["331", 6],
                ["332", 6],
                ["333", 6],
                ["334", 6],
                ["335", 6],
                ["336", 6],
                ["340", 6],
                ["341", 6],
                ["342", 6],
                ["343", 6],
                ["344", 6],
                ["345", 6],
                ["346", 6],
                ["347", 6],
                ["348", 6],
                ["349", 6],
                ["350", 6],
                ["351", 6],
                ["352", 6],
                ["353", 6],
                ["354", 6],
                ["355", 6],
                ["356", 6],
                ["357", 6],
                ["360", 6],
                ["361", 6],
                ["362", 6],
                ["363", 6],
                ["364", 6],
                ["365", 6],
                ["366", 6],
                ["367", 6],
                ["368", 6],
                ["369", 6],
                ["390", V.VARIABLE_LENGTH, 15],
                ["391", V.VARIABLE_LENGTH, 18],
                ["392", V.VARIABLE_LENGTH, 15],
                ["393", V.VARIABLE_LENGTH, 18],
                ["703", V.VARIABLE_LENGTH, 30],
            ]),
            (V.FOUR_DIGIT_DATA_LENGTH = [
                ["7001", 13],
                ["7002", V.VARIABLE_LENGTH, 30],
                ["7003", 10],
                ["8001", 14],
                ["8002", V.VARIABLE_LENGTH, 20],
                ["8003", V.VARIABLE_LENGTH, 30],
                ["8004", V.VARIABLE_LENGTH, 30],
                ["8005", 6],
                ["8006", 18],
                ["8007", V.VARIABLE_LENGTH, 30],
                ["8008", V.VARIABLE_LENGTH, 12],
                ["8018", 18],
                ["8020", V.VARIABLE_LENGTH, 25],
                ["8100", 6],
                ["8101", 10],
                ["8102", 2],
                ["8110", V.VARIABLE_LENGTH, 70],
                ["8200", V.VARIABLE_LENGTH, 70],
            ]);
        class tn {
            constructor(e) {
                (this.buffer = new we()), (this.information = e);
            }
            decodeAllCodes(e, t) {
                let n = t,
                    r = null;
                do {
                    let i = this.decodeGeneralPurposeField(n, r),
                        s = V.parseFieldsInGeneralPurpose(i.getNewString());
                    if (
                        (s != null && e.append(s),
                        i.isRemaining()
                            ? (r = "" + i.getRemainingValue())
                            : (r = null),
                        n === i.getNewPosition())
                    )
                        break;
                    n = i.getNewPosition();
                } while (!0);
                return e.toString();
            }
            isStillNumeric(e) {
                if (e + 7 > this.information.getSize())
                    return e + 4 <= this.information.getSize();
                for (let t = e; t < e + 3; ++t)
                    if (this.information.get(t)) return !0;
                return this.information.get(e + 3);
            }
            decodeNumeric(e) {
                if (e + 7 > this.information.getSize()) {
                    let i = this.extractNumericValueFromBitArray(e, 4);
                    return i === 0
                        ? new xt(this.information.getSize(), xt.FNC1, xt.FNC1)
                        : new xt(this.information.getSize(), i - 1, xt.FNC1);
                }
                let t = this.extractNumericValueFromBitArray(e, 7),
                    n = (t - 8) / 11,
                    r = (t - 8) % 11;
                return new xt(e + 7, n, r);
            }
            extractNumericValueFromBitArray(e, t) {
                return tn.extractNumericValueFromBitArray(
                    this.information,
                    e,
                    t
                );
            }
            static extractNumericValueFromBitArray(e, t, n) {
                let r = 0;
                for (let i = 0; i < n; ++i)
                    e.get(t + i) && (r |= 1 << (n - i - 1));
                return r;
            }
            decodeGeneralPurposeField(e, t) {
                this.buffer.setLengthToZero(),
                    t != null && this.buffer.append(t),
                    this.current.setPosition(e);
                let n = this.parseBlocks();
                return n != null && n.isRemaining()
                    ? new Qt(
                          this.current.getPosition(),
                          this.buffer.toString(),
                          n.getRemainingValue()
                      )
                    : new Qt(
                          this.current.getPosition(),
                          this.buffer.toString()
                      );
            }
            parseBlocks() {
                let e, t;
                do {
                    let n = this.current.getPosition();
                    if (
                        (this.current.isAlpha()
                            ? ((t = this.parseAlphaBlock()),
                              (e = t.isFinished()))
                            : this.current.isIsoIec646()
                            ? ((t = this.parseIsoIec646Block()),
                              (e = t.isFinished()))
                            : ((t = this.parseNumericBlock()),
                              (e = t.isFinished())),
                        !(n !== this.current.getPosition()) && !e)
                    )
                        break;
                } while (!e);
                return t.getDecodedInformation();
            }
            parseNumericBlock() {
                for (; this.isStillNumeric(this.current.getPosition()); ) {
                    let e = this.decodeNumeric(this.current.getPosition());
                    if (
                        (this.current.setPosition(e.getNewPosition()),
                        e.isFirstDigitFNC1())
                    ) {
                        let t;
                        return (
                            e.isSecondDigitFNC1()
                                ? (t = new Qt(
                                      this.current.getPosition(),
                                      this.buffer.toString()
                                  ))
                                : (t = new Qt(
                                      this.current.getPosition(),
                                      this.buffer.toString(),
                                      e.getSecondDigit()
                                  )),
                            new Zt(!0, t)
                        );
                    }
                    if (
                        (this.buffer.append(e.getFirstDigit()),
                        e.isSecondDigitFNC1())
                    ) {
                        let t = new Qt(
                            this.current.getPosition(),
                            this.buffer.toString()
                        );
                        return new Zt(!0, t);
                    }
                    this.buffer.append(e.getSecondDigit());
                }
                return (
                    this.isNumericToAlphaNumericLatch(
                        this.current.getPosition()
                    ) &&
                        (this.current.setAlpha(),
                        this.current.incrementPosition(4)),
                    new Zt(!1)
                );
            }
            parseIsoIec646Block() {
                for (; this.isStillIsoIec646(this.current.getPosition()); ) {
                    let e = this.decodeIsoIec646(this.current.getPosition());
                    if (
                        (this.current.setPosition(e.getNewPosition()),
                        e.isFNC1())
                    ) {
                        let t = new Qt(
                            this.current.getPosition(),
                            this.buffer.toString()
                        );
                        return new Zt(!0, t);
                    }
                    this.buffer.append(e.getValue());
                }
                return (
                    this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                        ? (this.current.incrementPosition(3),
                          this.current.setNumeric())
                        : this.isAlphaTo646ToAlphaLatch(
                              this.current.getPosition()
                          ) &&
                          (this.current.getPosition() + 5 <
                          this.information.getSize()
                              ? this.current.incrementPosition(5)
                              : this.current.setPosition(
                                    this.information.getSize()
                                ),
                          this.current.setAlpha()),
                    new Zt(!1)
                );
            }
            parseAlphaBlock() {
                for (; this.isStillAlpha(this.current.getPosition()); ) {
                    let e = this.decodeAlphanumeric(this.current.getPosition());
                    if (
                        (this.current.setPosition(e.getNewPosition()),
                        e.isFNC1())
                    ) {
                        let t = new Qt(
                            this.current.getPosition(),
                            this.buffer.toString()
                        );
                        return new Zt(!0, t);
                    }
                    this.buffer.append(e.getValue());
                }
                return (
                    this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                        ? (this.current.incrementPosition(3),
                          this.current.setNumeric())
                        : this.isAlphaTo646ToAlphaLatch(
                              this.current.getPosition()
                          ) &&
                          (this.current.getPosition() + 5 <
                          this.information.getSize()
                              ? this.current.incrementPosition(5)
                              : this.current.setPosition(
                                    this.information.getSize()
                                ),
                          this.current.setIsoIec646()),
                    new Zt(!1)
                );
            }
            isStillIsoIec646(e) {
                if (e + 5 > this.information.getSize()) return !1;
                let t = this.extractNumericValueFromBitArray(e, 5);
                if (t >= 5 && t < 16) return !0;
                if (e + 7 > this.information.getSize()) return !1;
                let n = this.extractNumericValueFromBitArray(e, 7);
                if (n >= 64 && n < 116) return !0;
                if (e + 8 > this.information.getSize()) return !1;
                let r = this.extractNumericValueFromBitArray(e, 8);
                return r >= 232 && r < 253;
            }
            decodeIsoIec646(e) {
                let t = this.extractNumericValueFromBitArray(e, 5);
                if (t === 15) return new st(e + 5, st.FNC1);
                if (t >= 5 && t < 15) return new st(e + 5, "0" + (t - 5));
                let n = this.extractNumericValueFromBitArray(e, 7);
                if (n >= 64 && n < 90) return new st(e + 7, "" + (n + 1));
                if (n >= 90 && n < 116) return new st(e + 7, "" + (n + 7));
                let r = this.extractNumericValueFromBitArray(e, 8),
                    i;
                switch (r) {
                    case 232:
                        i = "!";
                        break;
                    case 233:
                        i = '"';
                        break;
                    case 234:
                        i = "%";
                        break;
                    case 235:
                        i = "&";
                        break;
                    case 236:
                        i = "'";
                        break;
                    case 237:
                        i = "(";
                        break;
                    case 238:
                        i = ")";
                        break;
                    case 239:
                        i = "*";
                        break;
                    case 240:
                        i = "+";
                        break;
                    case 241:
                        i = ",";
                        break;
                    case 242:
                        i = "-";
                        break;
                    case 243:
                        i = ".";
                        break;
                    case 244:
                        i = "/";
                        break;
                    case 245:
                        i = ":";
                        break;
                    case 246:
                        i = ";";
                        break;
                    case 247:
                        i = "<";
                        break;
                    case 248:
                        i = "=";
                        break;
                    case 249:
                        i = ">";
                        break;
                    case 250:
                        i = "?";
                        break;
                    case 251:
                        i = "_";
                        break;
                    case 252:
                        i = " ";
                        break;
                    default:
                        throw new U();
                }
                return new st(e + 8, i);
            }
            isStillAlpha(e) {
                if (e + 5 > this.information.getSize()) return !1;
                let t = this.extractNumericValueFromBitArray(e, 5);
                if (t >= 5 && t < 16) return !0;
                if (e + 6 > this.information.getSize()) return !1;
                let n = this.extractNumericValueFromBitArray(e, 6);
                return n >= 16 && n < 63;
            }
            decodeAlphanumeric(e) {
                let t = this.extractNumericValueFromBitArray(e, 5);
                if (t === 15) return new st(e + 5, st.FNC1);
                if (t >= 5 && t < 15) return new st(e + 5, "0" + (t - 5));
                let n = this.extractNumericValueFromBitArray(e, 6);
                if (n >= 32 && n < 58) return new st(e + 6, "" + (n + 33));
                let r;
                switch (n) {
                    case 58:
                        r = "*";
                        break;
                    case 59:
                        r = ",";
                        break;
                    case 60:
                        r = "-";
                        break;
                    case 61:
                        r = ".";
                        break;
                    case 62:
                        r = "/";
                        break;
                    default:
                        throw new Tt(
                            "Decoding invalid alphanumeric value: " + n
                        );
                }
                return new st(e + 6, r);
            }
            isAlphaTo646ToAlphaLatch(e) {
                if (e + 1 > this.information.getSize()) return !1;
                for (
                    let t = 0;
                    t < 5 && t + e < this.information.getSize();
                    ++t
                )
                    if (t === 2) {
                        if (!this.information.get(e + 2)) return !1;
                    } else if (this.information.get(e + t)) return !1;
                return !0;
            }
            isAlphaOr646ToNumericLatch(e) {
                if (e + 3 > this.information.getSize()) return !1;
                for (let t = e; t < e + 3; ++t)
                    if (this.information.get(t)) return !1;
                return !0;
            }
            isNumericToAlphaNumericLatch(e) {
                if (e + 1 > this.information.getSize()) return !1;
                for (
                    let t = 0;
                    t < 4 && t + e < this.information.getSize();
                    ++t
                )
                    if (this.information.get(e + t)) return !1;
                return !0;
            }
        }
        class Zn {
            constructor(e) {
                (this.information = e), (this.generalDecoder = new tn(e));
            }
            getInformation() {
                return this.information;
            }
            getGeneralDecoder() {
                return this.generalDecoder;
            }
        }
        class ot extends Zn {
            constructor(e) {
                super(e);
            }
            encodeCompressedGtin(e, t) {
                e.append("(01)");
                let n = e.length();
                e.append("9"), this.encodeCompressedGtinWithoutAI(e, t, n);
            }
            encodeCompressedGtinWithoutAI(e, t, n) {
                for (let r = 0; r < 4; ++r) {
                    let i =
                        this.getGeneralDecoder().extractNumericValueFromBitArray(
                            t + 10 * r,
                            10
                        );
                    i / 100 === 0 && e.append("0"),
                        i / 10 === 0 && e.append("0"),
                        e.append(i);
                }
                ot.appendCheckDigit(e, n);
            }
            static appendCheckDigit(e, t) {
                let n = 0;
                for (let r = 0; r < 13; r++) {
                    let i = e.charAt(r + t).charCodeAt(0) - "0".charCodeAt(0);
                    n += r & 1 ? i : 3 * i;
                }
                (n = 10 - (n % 10)), n === 10 && (n = 0), e.append(n);
            }
        }
        ot.GTIN_SIZE = 40;
        class nn extends ot {
            constructor(e) {
                super(e);
            }
            parseInformation() {
                let e = new we();
                e.append("(01)");
                let t = e.length(),
                    n =
                        this.getGeneralDecoder().extractNumericValueFromBitArray(
                            nn.HEADER_SIZE,
                            4
                        );
                return (
                    e.append(n),
                    this.encodeCompressedGtinWithoutAI(
                        e,
                        nn.HEADER_SIZE + 4,
                        t
                    ),
                    this.getGeneralDecoder().decodeAllCodes(
                        e,
                        nn.HEADER_SIZE + 44
                    )
                );
            }
        }
        nn.HEADER_SIZE = 1 + 1 + 2;
        class Dn extends Zn {
            constructor(e) {
                super(e);
            }
            parseInformation() {
                let e = new we();
                return this.getGeneralDecoder().decodeAllCodes(
                    e,
                    Dn.HEADER_SIZE
                );
            }
        }
        Dn.HEADER_SIZE = 2 + 1 + 2;
        class Rn extends ot {
            constructor(e) {
                super(e);
            }
            encodeCompressedWeight(e, t, n) {
                let r =
                    this.getGeneralDecoder().extractNumericValueFromBitArray(
                        t,
                        n
                    );
                this.addWeightCode(e, r);
                let i = this.checkWeight(r),
                    s = 1e5;
                for (let o = 0; o < 5; ++o)
                    i / s === 0 && e.append("0"), (s /= 10);
                e.append(i);
            }
        }
        class St extends Rn {
            constructor(e) {
                super(e);
            }
            parseInformation() {
                if (
                    this.getInformation().getSize() !=
                    St.HEADER_SIZE + Rn.GTIN_SIZE + St.WEIGHT_SIZE
                )
                    throw new R();
                let e = new we();
                return (
                    this.encodeCompressedGtin(e, St.HEADER_SIZE),
                    this.encodeCompressedWeight(
                        e,
                        St.HEADER_SIZE + Rn.GTIN_SIZE,
                        St.WEIGHT_SIZE
                    ),
                    e.toString()
                );
            }
        }
        (St.HEADER_SIZE = 4 + 1), (St.WEIGHT_SIZE = 15);
        class fi extends St {
            constructor(e) {
                super(e);
            }
            addWeightCode(e, t) {
                e.append("(3103)");
            }
            checkWeight(e) {
                return e;
            }
        }
        class di extends St {
            constructor(e) {
                super(e);
            }
            addWeightCode(e, t) {
                t < 1e4 ? e.append("(3202)") : e.append("(3203)");
            }
            checkWeight(e) {
                return e < 1e4 ? e : e - 1e4;
            }
        }
        class bt extends ot {
            constructor(e) {
                super(e);
            }
            parseInformation() {
                if (
                    this.getInformation().getSize() <
                    bt.HEADER_SIZE + ot.GTIN_SIZE
                )
                    throw new R();
                let e = new we();
                this.encodeCompressedGtin(e, bt.HEADER_SIZE);
                let t =
                    this.getGeneralDecoder().extractNumericValueFromBitArray(
                        bt.HEADER_SIZE + ot.GTIN_SIZE,
                        bt.LAST_DIGIT_SIZE
                    );
                e.append("(392"), e.append(t), e.append(")");
                let n = this.getGeneralDecoder().decodeGeneralPurposeField(
                    bt.HEADER_SIZE + ot.GTIN_SIZE + bt.LAST_DIGIT_SIZE,
                    null
                );
                return e.append(n.getNewString()), e.toString();
            }
        }
        (bt.HEADER_SIZE = 5 + 1 + 2), (bt.LAST_DIGIT_SIZE = 2);
        class rt extends ot {
            constructor(e) {
                super(e);
            }
            parseInformation() {
                if (
                    this.getInformation().getSize() <
                    rt.HEADER_SIZE + ot.GTIN_SIZE
                )
                    throw new R();
                let e = new we();
                this.encodeCompressedGtin(e, rt.HEADER_SIZE);
                let t =
                    this.getGeneralDecoder().extractNumericValueFromBitArray(
                        rt.HEADER_SIZE + ot.GTIN_SIZE,
                        rt.LAST_DIGIT_SIZE
                    );
                e.append("(393"), e.append(t), e.append(")");
                let n =
                    this.getGeneralDecoder().extractNumericValueFromBitArray(
                        rt.HEADER_SIZE + ot.GTIN_SIZE + rt.LAST_DIGIT_SIZE,
                        rt.FIRST_THREE_DIGITS_SIZE
                    );
                n / 100 == 0 && e.append("0"),
                    n / 10 == 0 && e.append("0"),
                    e.append(n);
                let r = this.getGeneralDecoder().decodeGeneralPurposeField(
                    rt.HEADER_SIZE +
                        ot.GTIN_SIZE +
                        rt.LAST_DIGIT_SIZE +
                        rt.FIRST_THREE_DIGITS_SIZE,
                    null
                );
                return e.append(r.getNewString()), e.toString();
            }
        }
        (rt.HEADER_SIZE = 5 + 1 + 2),
            (rt.LAST_DIGIT_SIZE = 2),
            (rt.FIRST_THREE_DIGITS_SIZE = 10);
        class Oe extends Rn {
            constructor(e, t, n) {
                super(e), (this.dateCode = n), (this.firstAIdigits = t);
            }
            parseInformation() {
                if (
                    this.getInformation().getSize() !=
                    Oe.HEADER_SIZE +
                        Oe.GTIN_SIZE +
                        Oe.WEIGHT_SIZE +
                        Oe.DATE_SIZE
                )
                    throw new R();
                let e = new we();
                return (
                    this.encodeCompressedGtin(e, Oe.HEADER_SIZE),
                    this.encodeCompressedWeight(
                        e,
                        Oe.HEADER_SIZE + Oe.GTIN_SIZE,
                        Oe.WEIGHT_SIZE
                    ),
                    this.encodeCompressedDate(
                        e,
                        Oe.HEADER_SIZE + Oe.GTIN_SIZE + Oe.WEIGHT_SIZE
                    ),
                    e.toString()
                );
            }
            encodeCompressedDate(e, t) {
                let n =
                    this.getGeneralDecoder().extractNumericValueFromBitArray(
                        t,
                        Oe.DATE_SIZE
                    );
                if (n == 38400) return;
                e.append("("), e.append(this.dateCode), e.append(")");
                let r = n % 32;
                n /= 32;
                let i = (n % 12) + 1;
                n /= 12;
                let s = n;
                s / 10 == 0 && e.append("0"),
                    e.append(s),
                    i / 10 == 0 && e.append("0"),
                    e.append(i),
                    r / 10 == 0 && e.append("0"),
                    e.append(r);
            }
            addWeightCode(e, t) {
                e.append("("),
                    e.append(this.firstAIdigits),
                    e.append(t / 1e5),
                    e.append(")");
            }
            checkWeight(e) {
                return e % 1e5;
            }
        }
        (Oe.HEADER_SIZE = 7 + 1), (Oe.WEIGHT_SIZE = 20), (Oe.DATE_SIZE = 16);
        function Sr(g) {
            try {
                if (g.get(1)) return new nn(g);
                if (!g.get(2)) return new Dn(g);
                switch (tn.extractNumericValueFromBitArray(g, 1, 4)) {
                    case 4:
                        return new fi(g);
                    case 5:
                        return new di(g);
                }
                switch (tn.extractNumericValueFromBitArray(g, 1, 5)) {
                    case 12:
                        return new bt(g);
                    case 13:
                        return new rt(g);
                }
                switch (tn.extractNumericValueFromBitArray(g, 1, 7)) {
                    case 56:
                        return new Oe(g, "310", "11");
                    case 57:
                        return new Oe(g, "320", "11");
                    case 58:
                        return new Oe(g, "310", "13");
                    case 59:
                        return new Oe(g, "320", "13");
                    case 60:
                        return new Oe(g, "310", "15");
                    case 61:
                        return new Oe(g, "320", "15");
                    case 62:
                        return new Oe(g, "310", "17");
                    case 63:
                        return new Oe(g, "320", "17");
                }
            } catch (e) {
                throw (console.log(e), new Tt("unknown decoder: " + g));
            }
        }
        class kt {
            constructor(e, t, n, r) {
                (this.leftchar = e),
                    (this.rightchar = t),
                    (this.finderpattern = n),
                    (this.maybeLast = r);
            }
            mayBeLast() {
                return this.maybeLast;
            }
            getLeftChar() {
                return this.leftchar;
            }
            getRightChar() {
                return this.rightchar;
            }
            getFinderPattern() {
                return this.finderpattern;
            }
            mustBeLast() {
                return this.rightchar == null;
            }
            toString() {
                return (
                    "[ " +
                    this.leftchar +
                    ", " +
                    this.rightchar +
                    " : " +
                    (this.finderpattern == null
                        ? "null"
                        : this.finderpattern.getValue()) +
                    " ]"
                );
            }
            static equals(e, t) {
                return e instanceof kt
                    ? kt.equalsOrNull(e.leftchar, t.leftchar) &&
                          kt.equalsOrNull(e.rightchar, t.rightchar) &&
                          kt.equalsOrNull(e.finderpattern, t.finderpattern)
                    : !1;
            }
            static equalsOrNull(e, t) {
                return e === null ? t === null : kt.equals(e, t);
            }
            hashCode() {
                return (
                    this.leftchar.getValue() ^
                    this.rightchar.getValue() ^
                    this.finderpattern.getValue()
                );
            }
        }
        class Qn {
            constructor(e, t, n) {
                (this.pairs = e), (this.rowNumber = t), (this.wasReversed = n);
            }
            getPairs() {
                return this.pairs;
            }
            getRowNumber() {
                return this.rowNumber;
            }
            isReversed() {
                return this.wasReversed;
            }
            isEquivalent(e) {
                return this.checkEqualitity(this, e);
            }
            toString() {
                return "{ " + this.pairs + " }";
            }
            equals(e, t) {
                return e instanceof Qn
                    ? this.checkEqualitity(e, t) &&
                          e.wasReversed === t.wasReversed
                    : !1;
            }
            checkEqualitity(e, t) {
                if (!e || !t) return;
                let n;
                return (
                    e.forEach((r, i) => {
                        t.forEach((s) => {
                            r.getLeftChar().getValue() ===
                                s.getLeftChar().getValue() &&
                                r.getRightChar().getValue() ===
                                    s.getRightChar().getValue() &&
                                r.getFinderPatter().getValue() ===
                                    s.getFinderPatter().getValue() &&
                                (n = !0);
                        });
                    }),
                    n
                );
            }
        }
        class L extends Je {
            constructor(e) {
                super(...arguments),
                    (this.pairs = new Array(L.MAX_PAIRS)),
                    (this.rows = new Array()),
                    (this.startEnd = [2]),
                    (this.verbose = e === !0);
            }
            decodeRow(e, t, n) {
                (this.pairs.length = 0), (this.startFromEven = !1);
                try {
                    return L.constructResult(this.decodeRow2pairs(e, t));
                } catch (r) {
                    this.verbose && console.log(r);
                }
                return (
                    (this.pairs.length = 0),
                    (this.startFromEven = !0),
                    L.constructResult(this.decodeRow2pairs(e, t))
                );
            }
            reset() {
                (this.pairs.length = 0), (this.rows.length = 0);
            }
            decodeRow2pairs(e, t) {
                let n = !1;
                for (; !n; )
                    try {
                        this.pairs.push(
                            this.retrieveNextPair(t, this.pairs, e)
                        );
                    } catch (i) {
                        if (i instanceof R) {
                            if (!this.pairs.length) throw new R();
                            n = !0;
                        }
                    }
                if (this.checkChecksum()) return this.pairs;
                let r;
                if (
                    (this.rows.length ? (r = !0) : (r = !1),
                    this.storeRow(e, !1),
                    r)
                ) {
                    let i = this.checkRowsBoolean(!1);
                    if (
                        i != null ||
                        ((i = this.checkRowsBoolean(!0)), i != null)
                    )
                        return i;
                }
                throw new R();
            }
            checkRowsBoolean(e) {
                if (this.rows.length > 25) return (this.rows.length = 0), null;
                (this.pairs.length = 0), e && (this.rows = this.rows.reverse());
                let t = null;
                try {
                    t = this.checkRows(new Array(), 0);
                } catch (n) {
                    this.verbose && console.log(n);
                }
                return e && (this.rows = this.rows.reverse()), t;
            }
            checkRows(e, t) {
                for (let n = t; n < this.rows.length; n++) {
                    let r = this.rows[n];
                    this.pairs.length = 0;
                    for (let s of e) this.pairs.push(s.getPairs());
                    if (
                        (this.pairs.push(r.getPairs()),
                        !L.isValidSequence(this.pairs))
                    )
                        continue;
                    if (this.checkChecksum()) return this.pairs;
                    let i = new Array(e);
                    i.push(r);
                    try {
                        return this.checkRows(i, n + 1);
                    } catch (s) {
                        this.verbose && console.log(s);
                    }
                }
                throw new R();
            }
            static isValidSequence(e) {
                for (let t of L.FINDER_PATTERN_SEQUENCES) {
                    if (e.length > t.length) continue;
                    let n = !0;
                    for (let r = 0; r < e.length; r++)
                        if (e[r].getFinderPattern().getValue() != t[r]) {
                            n = !1;
                            break;
                        }
                    if (n) return !0;
                }
                return !1;
            }
            storeRow(e, t) {
                let n = 0,
                    r = !1,
                    i = !1;
                for (; n < this.rows.length; ) {
                    let s = this.rows[n];
                    if (s.getRowNumber() > e) {
                        i = s.isEquivalent(this.pairs);
                        break;
                    }
                    (r = s.isEquivalent(this.pairs)), n++;
                }
                i ||
                    r ||
                    L.isPartialRow(this.pairs, this.rows) ||
                    (this.rows.push(n, new Qn(this.pairs, e, t)),
                    this.removePartialRows(this.pairs, this.rows));
            }
            removePartialRows(e, t) {
                for (let n of t)
                    if (n.getPairs().length !== e.length) {
                        for (let r of n.getPairs())
                            for (let i of e) if (kt.equals(r, i)) break;
                    }
            }
            static isPartialRow(e, t) {
                for (let n of t) {
                    let r = !0;
                    for (let i of e) {
                        let s = !1;
                        for (let o of n.getPairs())
                            if (i.equals(o)) {
                                s = !0;
                                break;
                            }
                        if (!s) {
                            r = !1;
                            break;
                        }
                    }
                    if (r) return !0;
                }
                return !1;
            }
            getRows() {
                return this.rows;
            }
            static constructResult(e) {
                let t = hi.buildBitArray(e),
                    r = Sr(t).parseInformation(),
                    i = e[0].getFinderPattern().getResultPoints(),
                    s = e[e.length - 1].getFinderPattern().getResultPoints(),
                    o = [i[0], i[1], s[0], s[1]];
                return new tt(r, null, null, o, Y.RSS_EXPANDED, null);
            }
            checkChecksum() {
                let e = this.pairs.get(0),
                    t = e.getLeftChar(),
                    n = e.getRightChar();
                if (n == null) return !1;
                let r = n.getChecksumPortion(),
                    i = 2;
                for (let o = 1; o < this.pairs.size(); ++o) {
                    let a = this.pairs.get(o);
                    (r += a.getLeftChar().getChecksumPortion()), i++;
                    let c = a.getRightChar();
                    c != null && ((r += c.getChecksumPortion()), i++);
                }
                return (r %= 211), 211 * (i - 4) + r == t.getValue();
            }
            static getNextSecondBar(e, t) {
                let n;
                return (
                    e.get(t)
                        ? ((n = e.getNextUnset(t)), (n = e.getNextSet(n)))
                        : ((n = e.getNextSet(t)), (n = e.getNextUnset(n))),
                    n
                );
            }
            retrieveNextPair(e, t, n) {
                let r = t.length % 2 == 0;
                this.startFromEven && (r = !r);
                let i,
                    s = !0,
                    o = -1;
                do
                    this.findNextPair(e, t, o),
                        (i = this.parseFoundFinderPattern(e, n, r)),
                        i == null
                            ? (o = L.getNextSecondBar(e, this.startEnd[0]))
                            : (s = !1);
                while (s);
                let a = this.decodeDataCharacter(e, i, r, !0);
                if (!this.isEmptyPair(t) && t[t.length - 1].mustBeLast())
                    throw new R();
                let c;
                try {
                    c = this.decodeDataCharacter(e, i, r, !1);
                } catch (f) {
                    (c = null), this.verbose && console.log(f);
                }
                return new kt(a, c, i, !0);
            }
            isEmptyPair(e) {
                return e.length === 0;
            }
            findNextPair(e, t, n) {
                let r = this.getDecodeFinderCounters();
                (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
                let i = e.getSize(),
                    s;
                n >= 0
                    ? (s = n)
                    : this.isEmptyPair(t)
                    ? (s = 0)
                    : (s = t[t.length - 1].getFinderPattern().getStartEnd()[1]);
                let o = t.length % 2 != 0;
                this.startFromEven && (o = !o);
                let a = !1;
                for (; s < i && ((a = !e.get(s)), !!a); ) s++;
                let c = 0,
                    f = s;
                for (let x = s; x < i; x++)
                    if (e.get(x) != a) r[c]++;
                    else {
                        if (c == 3) {
                            if (
                                (o && L.reverseCounters(r),
                                L.isFinderPattern(r))
                            ) {
                                (this.startEnd[0] = f), (this.startEnd[1] = x);
                                return;
                            }
                            o && L.reverseCounters(r),
                                (f += r[0] + r[1]),
                                (r[0] = r[2]),
                                (r[1] = r[3]),
                                (r[2] = 0),
                                (r[3] = 0),
                                c--;
                        } else c++;
                        (r[c] = 1), (a = !a);
                    }
                throw new R();
            }
            static reverseCounters(e) {
                let t = e.length;
                for (let n = 0; n < t / 2; ++n) {
                    let r = e[n];
                    (e[n] = e[t - n - 1]), (e[t - n - 1] = r);
                }
            }
            parseFoundFinderPattern(e, t, n) {
                let r, i, s;
                if (n) {
                    let c = this.startEnd[0] - 1;
                    for (; c >= 0 && !e.get(c); ) c--;
                    c++,
                        (r = this.startEnd[0] - c),
                        (i = c),
                        (s = this.startEnd[1]);
                } else (i = this.startEnd[0]), (s = e.getNextUnset(this.startEnd[1] + 1)), (r = s - this.startEnd[1]);
                let o = this.getDecodeFinderCounters();
                K.arraycopy(o, 0, o, 1, o.length - 1), (o[0] = r);
                let a;
                try {
                    a = this.parseFinderValue(o, L.FINDER_PATTERNS);
                } catch {
                    return null;
                }
                return new _n(a, [i, s], i, s, t);
            }
            decodeDataCharacter(e, t, n, r) {
                let i = this.getDataCharacterCounters();
                for (let Te = 0; Te < i.length; Te++) i[Te] = 0;
                if (r) L.recordPatternInReverse(e, t.getStartEnd()[0], i);
                else {
                    L.recordPattern(e, t.getStartEnd()[1], i);
                    for (let Te = 0, Ke = i.length - 1; Te < Ke; Te++, Ke--) {
                        let ht = i[Te];
                        (i[Te] = i[Ke]), (i[Ke] = ht);
                    }
                }
                let s = 17,
                    o = ue.sum(new Int32Array(i)) / s,
                    a = (t.getStartEnd()[1] - t.getStartEnd()[0]) / 15;
                if (Math.abs(o - a) / a > 0.3) throw new R();
                let c = this.getOddCounts(),
                    f = this.getEvenCounts(),
                    x = this.getOddRoundingErrors(),
                    A = this.getEvenRoundingErrors();
                for (let Te = 0; Te < i.length; Te++) {
                    let Ke = (1 * i[Te]) / o,
                        ht = Ke + 0.5;
                    if (ht < 1) {
                        if (Ke < 0.3) throw new R();
                        ht = 1;
                    } else if (ht > 8) {
                        if (Ke > 8.7) throw new R();
                        ht = 8;
                    }
                    let cn = Te / 2;
                    Te & 1
                        ? ((f[cn] = ht), (A[cn] = Ke - ht))
                        : ((c[cn] = ht), (x[cn] = Ke - ht));
                }
                this.adjustOddEvenCounts(s);
                let m = 4 * t.getValue() + (n ? 0 : 2) + (r ? 0 : 1) - 1,
                    I = 0,
                    T = 0;
                for (let Te = c.length - 1; Te >= 0; Te--) {
                    if (L.isNotA1left(t, n, r)) {
                        let Ke = L.WEIGHTS[m][2 * Te];
                        T += c[Te] * Ke;
                    }
                    I += c[Te];
                }
                let S = 0;
                for (let Te = f.length - 1; Te >= 0; Te--)
                    if (L.isNotA1left(t, n, r)) {
                        let Ke = L.WEIGHTS[m][2 * Te + 1];
                        S += f[Te] * Ke;
                    }
                let M = T + S;
                if (I & 1 || I > 13 || I < 4) throw new R();
                let P = (13 - I) / 2,
                    F = L.SYMBOL_WIDEST[P],
                    B = 9 - F,
                    se = yt.getRSSvalue(c, F, !0),
                    ee = yt.getRSSvalue(f, B, !1),
                    ct = L.EVEN_TOTAL_SUBSET[P],
                    mt = L.GSUM[P],
                    lt = se * ct + ee + mt;
                return new en(lt, M);
            }
            static isNotA1left(e, t, n) {
                return !(e.getValue() == 0 && t && n);
            }
            adjustOddEvenCounts(e) {
                let t = ue.sum(new Int32Array(this.getOddCounts())),
                    n = ue.sum(new Int32Array(this.getEvenCounts())),
                    r = !1,
                    i = !1;
                t > 13 ? (i = !0) : t < 4 && (r = !0);
                let s = !1,
                    o = !1;
                n > 13 ? (o = !0) : n < 4 && (s = !0);
                let a = t + n - e,
                    c = (t & 1) == 1,
                    f = (n & 1) == 0;
                if (a == 1)
                    if (c) {
                        if (f) throw new R();
                        i = !0;
                    } else {
                        if (!f) throw new R();
                        o = !0;
                    }
                else if (a == -1)
                    if (c) {
                        if (f) throw new R();
                        r = !0;
                    } else {
                        if (!f) throw new R();
                        s = !0;
                    }
                else if (a == 0) {
                    if (c) {
                        if (!f) throw new R();
                        t < n ? ((r = !0), (o = !0)) : ((i = !0), (s = !0));
                    } else if (f) throw new R();
                } else throw new R();
                if (r) {
                    if (i) throw new R();
                    L.increment(
                        this.getOddCounts(),
                        this.getOddRoundingErrors()
                    );
                }
                if (
                    (i &&
                        L.decrement(
                            this.getOddCounts(),
                            this.getOddRoundingErrors()
                        ),
                    s)
                ) {
                    if (o) throw new R();
                    L.increment(
                        this.getEvenCounts(),
                        this.getOddRoundingErrors()
                    );
                }
                o &&
                    L.decrement(
                        this.getEvenCounts(),
                        this.getEvenRoundingErrors()
                    );
            }
        }
        (L.SYMBOL_WIDEST = [7, 5, 4, 3, 1]),
            (L.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]),
            (L.GSUM = [0, 348, 1388, 2948, 3988]),
            (L.FINDER_PATTERNS = [
                Int32Array.from([1, 8, 4, 1]),
                Int32Array.from([3, 6, 4, 1]),
                Int32Array.from([3, 4, 6, 1]),
                Int32Array.from([3, 2, 8, 1]),
                Int32Array.from([2, 6, 5, 1]),
                Int32Array.from([2, 2, 9, 1]),
            ]),
            (L.WEIGHTS = [
                [1, 3, 9, 27, 81, 32, 96, 77],
                [20, 60, 180, 118, 143, 7, 21, 63],
                [189, 145, 13, 39, 117, 140, 209, 205],
                [193, 157, 49, 147, 19, 57, 171, 91],
                [62, 186, 136, 197, 169, 85, 44, 132],
                [185, 133, 188, 142, 4, 12, 36, 108],
                [113, 128, 173, 97, 80, 29, 87, 50],
                [150, 28, 84, 41, 123, 158, 52, 156],
                [46, 138, 203, 187, 139, 206, 196, 166],
                [76, 17, 51, 153, 37, 111, 122, 155],
                [43, 129, 176, 106, 107, 110, 119, 146],
                [16, 48, 144, 10, 30, 90, 59, 177],
                [109, 116, 137, 200, 178, 112, 125, 164],
                [70, 210, 208, 202, 184, 130, 179, 115],
                [134, 191, 151, 31, 93, 68, 204, 190],
                [148, 22, 66, 198, 172, 94, 71, 2],
                [6, 18, 54, 162, 64, 192, 154, 40],
                [120, 149, 25, 75, 14, 42, 126, 167],
                [79, 26, 78, 23, 69, 207, 199, 175],
                [103, 98, 83, 38, 114, 131, 182, 124],
                [161, 61, 183, 127, 170, 88, 53, 159],
                [55, 165, 73, 8, 24, 72, 5, 15],
                [45, 135, 194, 160, 58, 174, 100, 89],
            ]),
            (L.FINDER_PAT_A = 0),
            (L.FINDER_PAT_B = 1),
            (L.FINDER_PAT_C = 2),
            (L.FINDER_PAT_D = 3),
            (L.FINDER_PAT_E = 4),
            (L.FINDER_PAT_F = 5),
            (L.FINDER_PATTERN_SEQUENCES = [
                [L.FINDER_PAT_A, L.FINDER_PAT_A],
                [L.FINDER_PAT_A, L.FINDER_PAT_B, L.FINDER_PAT_B],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_D,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_C,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_F,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_F,
                    L.FINDER_PAT_F,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_D,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_E,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_F,
                    L.FINDER_PAT_F,
                ],
                [
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_A,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_B,
                    L.FINDER_PAT_C,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_D,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_E,
                    L.FINDER_PAT_F,
                    L.FINDER_PAT_F,
                ],
            ]),
            (L.MAX_PAIRS = 11);
        class gi extends en {
            constructor(e, t, n) {
                super(e, t), (this.count = 0), (this.finderPattern = n);
            }
            getFinderPattern() {
                return this.finderPattern;
            }
            getCount() {
                return this.count;
            }
            incrementCount() {
                this.count++;
            }
        }
        class ve extends Je {
            constructor() {
                super(...arguments),
                    (this.possibleLeftPairs = []),
                    (this.possibleRightPairs = []);
            }
            decodeRow(e, t, n) {
                const r = this.decodePair(t, !1, e, n);
                ve.addOrTally(this.possibleLeftPairs, r), t.reverse();
                let i = this.decodePair(t, !0, e, n);
                ve.addOrTally(this.possibleRightPairs, i), t.reverse();
                for (let s of this.possibleLeftPairs)
                    if (s.getCount() > 1) {
                        for (let o of this.possibleRightPairs)
                            if (o.getCount() > 1 && ve.checkChecksum(s, o))
                                return ve.constructResult(s, o);
                    }
                throw new R();
            }
            static addOrTally(e, t) {
                if (t == null) return;
                let n = !1;
                for (let r of e)
                    if (r.getValue() === t.getValue()) {
                        r.incrementCount(), (n = !0);
                        break;
                    }
                n || e.push(t);
            }
            reset() {
                (this.possibleLeftPairs.length = 0),
                    (this.possibleRightPairs.length = 0);
            }
            static constructResult(e, t) {
                let n = 4537077 * e.getValue() + t.getValue(),
                    r = new String(n).toString(),
                    i = new we();
                for (let c = 13 - r.length; c > 0; c--) i.append("0");
                i.append(r);
                let s = 0;
                for (let c = 0; c < 13; c++) {
                    let f = i.charAt(c).charCodeAt(0) - "0".charCodeAt(0);
                    s += c & 1 ? f : 3 * f;
                }
                (s = 10 - (s % 10)),
                    s === 10 && (s = 0),
                    i.append(s.toString());
                let o = e.getFinderPattern().getResultPoints(),
                    a = t.getFinderPattern().getResultPoints();
                return new tt(
                    i.toString(),
                    null,
                    0,
                    [o[0], o[1], a[0], a[1]],
                    Y.RSS_14,
                    new Date().getTime()
                );
            }
            static checkChecksum(e, t) {
                let n =
                        (e.getChecksumPortion() + 16 * t.getChecksumPortion()) %
                        79,
                    r =
                        9 * e.getFinderPattern().getValue() +
                        t.getFinderPattern().getValue();
                return r > 72 && r--, r > 8 && r--, n === r;
            }
            decodePair(e, t, n, r) {
                try {
                    let i = this.findFinderPattern(e, t),
                        s = this.parseFoundFinderPattern(e, n, t, i),
                        o =
                            r == null
                                ? null
                                : r.get(fe.NEED_RESULT_POINT_CALLBACK);
                    if (o != null) {
                        let f = (i[0] + i[1]) / 2;
                        t && (f = e.getSize() - 1 - f),
                            o.foundPossibleResultPoint(new j(f, n));
                    }
                    let a = this.decodeDataCharacter(e, s, !0),
                        c = this.decodeDataCharacter(e, s, !1);
                    return new gi(
                        1597 * a.getValue() + c.getValue(),
                        a.getChecksumPortion() + 4 * c.getChecksumPortion(),
                        s
                    );
                } catch {
                    return null;
                }
            }
            decodeDataCharacter(e, t, n) {
                let r = this.getDataCharacterCounters();
                for (let S = 0; S < r.length; S++) r[S] = 0;
                if (n) ke.recordPatternInReverse(e, t.getStartEnd()[0], r);
                else {
                    ke.recordPattern(e, t.getStartEnd()[1] + 1, r);
                    for (let S = 0, M = r.length - 1; S < M; S++, M--) {
                        let P = r[S];
                        (r[S] = r[M]), (r[M] = P);
                    }
                }
                let i = n ? 16 : 15,
                    s = ue.sum(new Int32Array(r)) / i,
                    o = this.getOddCounts(),
                    a = this.getEvenCounts(),
                    c = this.getOddRoundingErrors(),
                    f = this.getEvenRoundingErrors();
                for (let S = 0; S < r.length; S++) {
                    let M = r[S] / s,
                        P = Math.floor(M + 0.5);
                    P < 1 ? (P = 1) : P > 8 && (P = 8);
                    let F = Math.floor(S / 2);
                    S & 1
                        ? ((a[F] = P), (f[F] = M - P))
                        : ((o[F] = P), (c[F] = M - P));
                }
                this.adjustOddEvenCounts(n, i);
                let x = 0,
                    A = 0;
                for (let S = o.length - 1; S >= 0; S--)
                    (A *= 9), (A += o[S]), (x += o[S]);
                let m = 0,
                    I = 0;
                for (let S = a.length - 1; S >= 0; S--)
                    (m *= 9), (m += a[S]), (I += a[S]);
                let T = A + 3 * m;
                if (n) {
                    if (x & 1 || x > 12 || x < 4) throw new R();
                    let S = (12 - x) / 2,
                        M = ve.OUTSIDE_ODD_WIDEST[S],
                        P = 9 - M,
                        F = yt.getRSSvalue(o, M, !1),
                        B = yt.getRSSvalue(a, P, !0),
                        se = ve.OUTSIDE_EVEN_TOTAL_SUBSET[S],
                        ee = ve.OUTSIDE_GSUM[S];
                    return new en(F * se + B + ee, T);
                } else {
                    if (I & 1 || I > 10 || I < 4) throw new R();
                    let S = (10 - I) / 2,
                        M = ve.INSIDE_ODD_WIDEST[S],
                        P = 9 - M,
                        F = yt.getRSSvalue(o, M, !0),
                        B = yt.getRSSvalue(a, P, !1),
                        se = ve.INSIDE_ODD_TOTAL_SUBSET[S],
                        ee = ve.INSIDE_GSUM[S];
                    return new en(B * se + F + ee, T);
                }
            }
            findFinderPattern(e, t) {
                let n = this.getDecodeFinderCounters();
                (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
                let r = e.getSize(),
                    i = !1,
                    s = 0;
                for (; s < r && ((i = !e.get(s)), t !== i); ) s++;
                let o = 0,
                    a = s;
                for (let c = s; c < r; c++)
                    if (e.get(c) !== i) n[o]++;
                    else {
                        if (o === 3) {
                            if (Je.isFinderPattern(n)) return [a, c];
                            (a += n[0] + n[1]),
                                (n[0] = n[2]),
                                (n[1] = n[3]),
                                (n[2] = 0),
                                (n[3] = 0),
                                o--;
                        } else o++;
                        (n[o] = 1), (i = !i);
                    }
                throw new R();
            }
            parseFoundFinderPattern(e, t, n, r) {
                let i = e.get(r[0]),
                    s = r[0] - 1;
                for (; s >= 0 && i !== e.get(s); ) s--;
                s++;
                const o = r[0] - s,
                    a = this.getDecodeFinderCounters(),
                    c = new Int32Array(a.length);
                K.arraycopy(a, 0, c, 1, a.length - 1), (c[0] = o);
                const f = this.parseFinderValue(c, ve.FINDER_PATTERNS);
                let x = s,
                    A = r[1];
                return (
                    n && ((x = e.getSize() - 1 - x), (A = e.getSize() - 1 - A)),
                    new _n(f, [s, r[1]], x, A, t)
                );
            }
            adjustOddEvenCounts(e, t) {
                let n = ue.sum(new Int32Array(this.getOddCounts())),
                    r = ue.sum(new Int32Array(this.getEvenCounts())),
                    i = !1,
                    s = !1,
                    o = !1,
                    a = !1;
                e
                    ? (n > 12 ? (s = !0) : n < 4 && (i = !0),
                      r > 12 ? (a = !0) : r < 4 && (o = !0))
                    : (n > 11 ? (s = !0) : n < 5 && (i = !0),
                      r > 10 ? (a = !0) : r < 4 && (o = !0));
                let c = n + r - t,
                    f = (n & 1) === (e ? 1 : 0),
                    x = (r & 1) === 1;
                if (c === 1)
                    if (f) {
                        if (x) throw new R();
                        s = !0;
                    } else {
                        if (!x) throw new R();
                        a = !0;
                    }
                else if (c === -1)
                    if (f) {
                        if (x) throw new R();
                        i = !0;
                    } else {
                        if (!x) throw new R();
                        o = !0;
                    }
                else if (c === 0) {
                    if (f) {
                        if (!x) throw new R();
                        n < r ? ((i = !0), (a = !0)) : ((s = !0), (o = !0));
                    } else if (x) throw new R();
                } else throw new R();
                if (i) {
                    if (s) throw new R();
                    Je.increment(
                        this.getOddCounts(),
                        this.getOddRoundingErrors()
                    );
                }
                if (
                    (s &&
                        Je.decrement(
                            this.getOddCounts(),
                            this.getOddRoundingErrors()
                        ),
                    o)
                ) {
                    if (a) throw new R();
                    Je.increment(
                        this.getEvenCounts(),
                        this.getOddRoundingErrors()
                    );
                }
                a &&
                    Je.decrement(
                        this.getEvenCounts(),
                        this.getEvenRoundingErrors()
                    );
            }
        }
        (ve.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]),
            (ve.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]),
            (ve.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]),
            (ve.INSIDE_GSUM = [0, 336, 1036, 1516]),
            (ve.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]),
            (ve.INSIDE_ODD_WIDEST = [2, 4, 6, 8]),
            (ve.FINDER_PATTERNS = [
                Int32Array.from([3, 8, 2, 1]),
                Int32Array.from([3, 5, 5, 1]),
                Int32Array.from([3, 3, 7, 1]),
                Int32Array.from([3, 1, 9, 1]),
                Int32Array.from([2, 7, 4, 1]),
                Int32Array.from([2, 5, 6, 1]),
                Int32Array.from([2, 3, 8, 1]),
                Int32Array.from([1, 5, 7, 1]),
                Int32Array.from([1, 3, 9, 1]),
            ]);
        class rn extends ke {
            constructor(e, t) {
                super(), (this.readers = []), (this.verbose = t === !0);
                const n = e ? e.get(fe.POSSIBLE_FORMATS) : null,
                    r = e && e.get(fe.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
                n
                    ? ((n.includes(Y.EAN_13) ||
                          n.includes(Y.UPC_A) ||
                          n.includes(Y.EAN_8) ||
                          n.includes(Y.UPC_E)) &&
                          this.readers.push(new Yn(e)),
                      n.includes(Y.CODE_39) && this.readers.push(new Ue(r)),
                      n.includes(Y.CODE_128) && this.readers.push(new H()),
                      n.includes(Y.ITF) && this.readers.push(new me()),
                      n.includes(Y.RSS_14) && this.readers.push(new ve()),
                      n.includes(Y.RSS_EXPANDED) &&
                          this.readers.push(new L(this.verbose)))
                    : (this.readers.push(new Yn(e)),
                      this.readers.push(new Ue()),
                      this.readers.push(new Yn(e)),
                      this.readers.push(new H()),
                      this.readers.push(new me()),
                      this.readers.push(new ve()),
                      this.readers.push(new L(this.verbose)));
            }
            decodeRow(e, t, n) {
                for (let r = 0; r < this.readers.length; r++)
                    try {
                        return this.readers[r].decodeRow(e, t, n);
                    } catch {}
                throw new R();
            }
            reset() {
                this.readers.forEach((e) => e.reset());
            }
        }
        class xi extends Yt {
            constructor(e = 500, t) {
                super(new rn(t), e, t);
            }
        }
        class Ae {
            constructor(e, t, n) {
                (this.ecCodewords = e),
                    (this.ecBlocks = [t]),
                    n && this.ecBlocks.push(n);
            }
            getECCodewords() {
                return this.ecCodewords;
            }
            getECBlocks() {
                return this.ecBlocks;
            }
        }
        class xe {
            constructor(e, t) {
                (this.count = e), (this.dataCodewords = t);
            }
            getCount() {
                return this.count;
            }
            getDataCodewords() {
                return this.dataCodewords;
            }
        }
        class oe {
            constructor(e, t, n, r, i, s) {
                (this.versionNumber = e),
                    (this.symbolSizeRows = t),
                    (this.symbolSizeColumns = n),
                    (this.dataRegionSizeRows = r),
                    (this.dataRegionSizeColumns = i),
                    (this.ecBlocks = s);
                let o = 0;
                const a = s.getECCodewords(),
                    c = s.getECBlocks();
                for (let f of c) o += f.getCount() * (f.getDataCodewords() + a);
                this.totalCodewords = o;
            }
            getVersionNumber() {
                return this.versionNumber;
            }
            getSymbolSizeRows() {
                return this.symbolSizeRows;
            }
            getSymbolSizeColumns() {
                return this.symbolSizeColumns;
            }
            getDataRegionSizeRows() {
                return this.dataRegionSizeRows;
            }
            getDataRegionSizeColumns() {
                return this.dataRegionSizeColumns;
            }
            getTotalCodewords() {
                return this.totalCodewords;
            }
            getECBlocks() {
                return this.ecBlocks;
            }
            static getVersionForDimensions(e, t) {
                if (e & 1 || t & 1) throw new U();
                for (let n of oe.VERSIONS)
                    if (n.symbolSizeRows === e && n.symbolSizeColumns === t)
                        return n;
                throw new U();
            }
            toString() {
                return "" + this.versionNumber;
            }
            static buildVersions() {
                return [
                    new oe(1, 10, 10, 8, 8, new Ae(5, new xe(1, 3))),
                    new oe(2, 12, 12, 10, 10, new Ae(7, new xe(1, 5))),
                    new oe(3, 14, 14, 12, 12, new Ae(10, new xe(1, 8))),
                    new oe(4, 16, 16, 14, 14, new Ae(12, new xe(1, 12))),
                    new oe(5, 18, 18, 16, 16, new Ae(14, new xe(1, 18))),
                    new oe(6, 20, 20, 18, 18, new Ae(18, new xe(1, 22))),
                    new oe(7, 22, 22, 20, 20, new Ae(20, new xe(1, 30))),
                    new oe(8, 24, 24, 22, 22, new Ae(24, new xe(1, 36))),
                    new oe(9, 26, 26, 24, 24, new Ae(28, new xe(1, 44))),
                    new oe(10, 32, 32, 14, 14, new Ae(36, new xe(1, 62))),
                    new oe(11, 36, 36, 16, 16, new Ae(42, new xe(1, 86))),
                    new oe(12, 40, 40, 18, 18, new Ae(48, new xe(1, 114))),
                    new oe(13, 44, 44, 20, 20, new Ae(56, new xe(1, 144))),
                    new oe(14, 48, 48, 22, 22, new Ae(68, new xe(1, 174))),
                    new oe(15, 52, 52, 24, 24, new Ae(42, new xe(2, 102))),
                    new oe(16, 64, 64, 14, 14, new Ae(56, new xe(2, 140))),
                    new oe(17, 72, 72, 16, 16, new Ae(36, new xe(4, 92))),
                    new oe(18, 80, 80, 18, 18, new Ae(48, new xe(4, 114))),
                    new oe(19, 88, 88, 20, 20, new Ae(56, new xe(4, 144))),
                    new oe(20, 96, 96, 22, 22, new Ae(68, new xe(4, 174))),
                    new oe(21, 104, 104, 24, 24, new Ae(56, new xe(6, 136))),
                    new oe(22, 120, 120, 18, 18, new Ae(68, new xe(6, 175))),
                    new oe(23, 132, 132, 20, 20, new Ae(62, new xe(8, 163))),
                    new oe(
                        24,
                        144,
                        144,
                        22,
                        22,
                        new Ae(62, new xe(8, 156), new xe(2, 155))
                    ),
                    new oe(25, 8, 18, 6, 16, new Ae(7, new xe(1, 5))),
                    new oe(26, 8, 32, 6, 14, new Ae(11, new xe(1, 10))),
                    new oe(27, 12, 26, 10, 24, new Ae(14, new xe(1, 16))),
                    new oe(28, 12, 36, 10, 16, new Ae(18, new xe(1, 22))),
                    new oe(29, 16, 36, 14, 16, new Ae(24, new xe(1, 32))),
                    new oe(30, 16, 48, 14, 22, new Ae(28, new xe(1, 49))),
                ];
            }
        }
        oe.VERSIONS = oe.buildVersions();
        class Kn {
            constructor(e) {
                const t = e.getHeight();
                if (t < 8 || t > 144 || t & 1) throw new U();
                (this.version = Kn.readVersion(e)),
                    (this.mappingBitMatrix = this.extractDataRegion(e)),
                    (this.readMappingMatrix = new Pe(
                        this.mappingBitMatrix.getWidth(),
                        this.mappingBitMatrix.getHeight()
                    ));
            }
            getVersion() {
                return this.version;
            }
            static readVersion(e) {
                const t = e.getHeight(),
                    n = e.getWidth();
                return oe.getVersionForDimensions(t, n);
            }
            readCodewords() {
                const e = new Int8Array(this.version.getTotalCodewords());
                let t = 0,
                    n = 4,
                    r = 0;
                const i = this.mappingBitMatrix.getHeight(),
                    s = this.mappingBitMatrix.getWidth();
                let o = !1,
                    a = !1,
                    c = !1,
                    f = !1;
                do
                    if (n === i && r === 0 && !o)
                        (e[t++] = this.readCorner1(i, s) & 255),
                            (n -= 2),
                            (r += 2),
                            (o = !0);
                    else if (n === i - 2 && r === 0 && s & 3 && !a)
                        (e[t++] = this.readCorner2(i, s) & 255),
                            (n -= 2),
                            (r += 2),
                            (a = !0);
                    else if (n === i + 4 && r === 2 && !(s & 7) && !c)
                        (e[t++] = this.readCorner3(i, s) & 255),
                            (n -= 2),
                            (r += 2),
                            (c = !0);
                    else if (n === i - 2 && r === 0 && (s & 7) === 4 && !f)
                        (e[t++] = this.readCorner4(i, s) & 255),
                            (n -= 2),
                            (r += 2),
                            (f = !0);
                    else {
                        do
                            n < i &&
                                r >= 0 &&
                                !this.readMappingMatrix.get(r, n) &&
                                (e[t++] = this.readUtah(n, r, i, s) & 255),
                                (n -= 2),
                                (r += 2);
                        while (n >= 0 && r < s);
                        (n += 1), (r += 3);
                        do
                            n >= 0 &&
                                r < s &&
                                !this.readMappingMatrix.get(r, n) &&
                                (e[t++] = this.readUtah(n, r, i, s) & 255),
                                (n += 2),
                                (r -= 2);
                        while (n < i && r >= 0);
                        (n += 3), (r += 1);
                    }
                while (n < i || r < s);
                if (t !== this.version.getTotalCodewords()) throw new U();
                return e;
            }
            readModule(e, t, n, r) {
                return (
                    e < 0 && ((e += n), (t += 4 - ((n + 4) & 7))),
                    t < 0 && ((t += r), (e += 4 - ((r + 4) & 7))),
                    this.readMappingMatrix.set(t, e),
                    this.mappingBitMatrix.get(t, e)
                );
            }
            readUtah(e, t, n, r) {
                let i = 0;
                return (
                    this.readModule(e - 2, t - 2, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e - 2, t - 1, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e - 1, t - 2, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e - 1, t - 1, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e - 1, t, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e, t - 2, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e, t - 1, n, r) && (i |= 1),
                    (i <<= 1),
                    this.readModule(e, t, n, r) && (i |= 1),
                    i
                );
            }
            readCorner1(e, t) {
                let n = 0;
                return (
                    this.readModule(e - 1, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 1, 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 1, 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(2, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(3, t - 1, e, t) && (n |= 1),
                    n
                );
            }
            readCorner2(e, t) {
                let n = 0;
                return (
                    this.readModule(e - 3, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 2, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 1, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 4, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 3, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 1, e, t) && (n |= 1),
                    n
                );
            }
            readCorner3(e, t) {
                let n = 0;
                return (
                    this.readModule(e - 1, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 1, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 3, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 3, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 1, e, t) && (n |= 1),
                    n
                );
            }
            readCorner4(e, t) {
                let n = 0;
                return (
                    this.readModule(e - 3, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 2, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(e - 1, 0, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 2, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(0, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(1, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(2, t - 1, e, t) && (n |= 1),
                    (n <<= 1),
                    this.readModule(3, t - 1, e, t) && (n |= 1),
                    n
                );
            }
            extractDataRegion(e) {
                const t = this.version.getSymbolSizeRows(),
                    n = this.version.getSymbolSizeColumns();
                if (e.getHeight() !== t)
                    throw new _(
                        "Dimension of bitMatrix must match the version size"
                    );
                const r = this.version.getDataRegionSizeRows(),
                    i = this.version.getDataRegionSizeColumns(),
                    s = (t / r) | 0,
                    o = (n / i) | 0,
                    a = s * r,
                    c = o * i,
                    f = new Pe(c, a);
                for (let x = 0; x < s; ++x) {
                    const A = x * r;
                    for (let m = 0; m < o; ++m) {
                        const I = m * i;
                        for (let T = 0; T < r; ++T) {
                            const S = x * (r + 2) + 1 + T,
                                M = A + T;
                            for (let P = 0; P < i; ++P) {
                                const F = m * (i + 2) + 1 + P;
                                if (e.get(F, S)) {
                                    const B = I + P;
                                    f.set(B, M);
                                }
                            }
                        }
                    }
                }
                return f;
            }
        }
        class qn {
            constructor(e, t) {
                (this.numDataCodewords = e), (this.codewords = t);
            }
            static getDataBlocks(e, t) {
                const n = t.getECBlocks();
                let r = 0;
                const i = n.getECBlocks();
                for (let T of i) r += T.getCount();
                const s = new Array(r);
                let o = 0;
                for (let T of i)
                    for (let S = 0; S < T.getCount(); S++) {
                        const M = T.getDataCodewords(),
                            P = n.getECCodewords() + M;
                        s[o++] = new qn(M, new Uint8Array(P));
                    }
                const c = s[0].codewords.length - n.getECCodewords(),
                    f = c - 1;
                let x = 0;
                for (let T = 0; T < f; T++)
                    for (let S = 0; S < o; S++) s[S].codewords[T] = e[x++];
                const A = t.getVersionNumber() === 24,
                    m = A ? 8 : o;
                for (let T = 0; T < m; T++) s[T].codewords[c - 1] = e[x++];
                const I = s[0].codewords.length;
                for (let T = c; T < I; T++)
                    for (let S = 0; S < o; S++) {
                        const M = A ? (S + 8) % o : S,
                            P = A && M > 7 ? T - 1 : T;
                        s[M].codewords[P] = e[x++];
                    }
                if (x !== e.length) throw new _();
                return s;
            }
            getNumDataCodewords() {
                return this.numDataCodewords;
            }
            getCodewords() {
                return this.codewords;
            }
        }
        class Jn {
            constructor(e) {
                (this.bytes = e), (this.byteOffset = 0), (this.bitOffset = 0);
            }
            getBitOffset() {
                return this.bitOffset;
            }
            getByteOffset() {
                return this.byteOffset;
            }
            readBits(e) {
                if (e < 1 || e > 32 || e > this.available())
                    throw new _("" + e);
                let t = 0,
                    n = this.bitOffset,
                    r = this.byteOffset;
                const i = this.bytes;
                if (n > 0) {
                    const s = 8 - n,
                        o = e < s ? e : s,
                        a = s - o,
                        c = (255 >> (8 - o)) << a;
                    (t = (i[r] & c) >> a),
                        (e -= o),
                        (n += o),
                        n === 8 && ((n = 0), r++);
                }
                if (e > 0) {
                    for (; e >= 8; )
                        (t = (t << 8) | (i[r] & 255)), r++, (e -= 8);
                    if (e > 0) {
                        const s = 8 - e,
                            o = (255 >> s) << s;
                        (t = (t << e) | ((i[r] & o) >> s)), (n += e);
                    }
                }
                return (this.bitOffset = n), (this.byteOffset = r), t;
            }
            available() {
                return (
                    8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                );
            }
        }
        var He;
        (function (g) {
            (g[(g.PAD_ENCODE = 0)] = "PAD_ENCODE"),
                (g[(g.ASCII_ENCODE = 1)] = "ASCII_ENCODE"),
                (g[(g.C40_ENCODE = 2)] = "C40_ENCODE"),
                (g[(g.TEXT_ENCODE = 3)] = "TEXT_ENCODE"),
                (g[(g.ANSIX12_ENCODE = 4)] = "ANSIX12_ENCODE"),
                (g[(g.EDIFACT_ENCODE = 5)] = "EDIFACT_ENCODE"),
                (g[(g.BASE256_ENCODE = 6)] = "BASE256_ENCODE");
        })(He || (He = {}));
        class Ut {
            static decode(e) {
                const t = new Jn(e),
                    n = new we(),
                    r = new we(),
                    i = new Array();
                let s = He.ASCII_ENCODE;
                do
                    if (s === He.ASCII_ENCODE)
                        s = this.decodeAsciiSegment(t, n, r);
                    else {
                        switch (s) {
                            case He.C40_ENCODE:
                                this.decodeC40Segment(t, n);
                                break;
                            case He.TEXT_ENCODE:
                                this.decodeTextSegment(t, n);
                                break;
                            case He.ANSIX12_ENCODE:
                                this.decodeAnsiX12Segment(t, n);
                                break;
                            case He.EDIFACT_ENCODE:
                                this.decodeEdifactSegment(t, n);
                                break;
                            case He.BASE256_ENCODE:
                                this.decodeBase256Segment(t, n, i);
                                break;
                            default:
                                throw new U();
                        }
                        s = He.ASCII_ENCODE;
                    }
                while (s !== He.PAD_ENCODE && t.available() > 0);
                return (
                    r.length() > 0 && n.append(r.toString()),
                    new fn(e, n.toString(), i.length === 0 ? null : i, null)
                );
            }
            static decodeAsciiSegment(e, t, n) {
                let r = !1;
                do {
                    let i = e.readBits(8);
                    if (i === 0) throw new U();
                    if (i <= 128)
                        return (
                            r && (i += 128),
                            t.append(String.fromCharCode(i - 1)),
                            He.ASCII_ENCODE
                        );
                    if (i === 129) return He.PAD_ENCODE;
                    if (i <= 229) {
                        const s = i - 130;
                        s < 10 && t.append("0"), t.append("" + s);
                    } else
                        switch (i) {
                            case 230:
                                return He.C40_ENCODE;
                            case 231:
                                return He.BASE256_ENCODE;
                            case 232:
                                t.append(String.fromCharCode(29));
                                break;
                            case 233:
                            case 234:
                                break;
                            case 235:
                                r = !0;
                                break;
                            case 236:
                                t.append("[)>05"), n.insert(0, "");
                                break;
                            case 237:
                                t.append("[)>06"), n.insert(0, "");
                                break;
                            case 238:
                                return He.ANSIX12_ENCODE;
                            case 239:
                                return He.TEXT_ENCODE;
                            case 240:
                                return He.EDIFACT_ENCODE;
                            case 241:
                                break;
                            default:
                                if (i !== 254 || e.available() !== 0)
                                    throw new U();
                                break;
                        }
                } while (e.available() > 0);
                return He.ASCII_ENCODE;
            }
            static decodeC40Segment(e, t) {
                let n = !1;
                const r = [];
                let i = 0;
                do {
                    if (e.available() === 8) return;
                    const s = e.readBits(8);
                    if (s === 254) return;
                    this.parseTwoBytes(s, e.readBits(8), r);
                    for (let o = 0; o < 3; o++) {
                        const a = r[o];
                        switch (i) {
                            case 0:
                                if (a < 3) i = a + 1;
                                else if (a < this.C40_BASIC_SET_CHARS.length) {
                                    const c = this.C40_BASIC_SET_CHARS[a];
                                    n
                                        ? (t.append(
                                              String.fromCharCode(
                                                  c.charCodeAt(0) + 128
                                              )
                                          ),
                                          (n = !1))
                                        : t.append(c);
                                } else throw new U();
                                break;
                            case 1:
                                n
                                    ? (t.append(String.fromCharCode(a + 128)),
                                      (n = !1))
                                    : t.append(String.fromCharCode(a)),
                                    (i = 0);
                                break;
                            case 2:
                                if (a < this.C40_SHIFT2_SET_CHARS.length) {
                                    const c = this.C40_SHIFT2_SET_CHARS[a];
                                    n
                                        ? (t.append(
                                              String.fromCharCode(
                                                  c.charCodeAt(0) + 128
                                              )
                                          ),
                                          (n = !1))
                                        : t.append(c);
                                } else
                                    switch (a) {
                                        case 27:
                                            t.append(String.fromCharCode(29));
                                            break;
                                        case 30:
                                            n = !0;
                                            break;
                                        default:
                                            throw new U();
                                    }
                                i = 0;
                                break;
                            case 3:
                                n
                                    ? (t.append(String.fromCharCode(a + 224)),
                                      (n = !1))
                                    : t.append(String.fromCharCode(a + 96)),
                                    (i = 0);
                                break;
                            default:
                                throw new U();
                        }
                    }
                } while (e.available() > 0);
            }
            static decodeTextSegment(e, t) {
                let n = !1,
                    r = [],
                    i = 0;
                do {
                    if (e.available() === 8) return;
                    const s = e.readBits(8);
                    if (s === 254) return;
                    this.parseTwoBytes(s, e.readBits(8), r);
                    for (let o = 0; o < 3; o++) {
                        const a = r[o];
                        switch (i) {
                            case 0:
                                if (a < 3) i = a + 1;
                                else if (a < this.TEXT_BASIC_SET_CHARS.length) {
                                    const c = this.TEXT_BASIC_SET_CHARS[a];
                                    n
                                        ? (t.append(
                                              String.fromCharCode(
                                                  c.charCodeAt(0) + 128
                                              )
                                          ),
                                          (n = !1))
                                        : t.append(c);
                                } else throw new U();
                                break;
                            case 1:
                                n
                                    ? (t.append(String.fromCharCode(a + 128)),
                                      (n = !1))
                                    : t.append(String.fromCharCode(a)),
                                    (i = 0);
                                break;
                            case 2:
                                if (a < this.TEXT_SHIFT2_SET_CHARS.length) {
                                    const c = this.TEXT_SHIFT2_SET_CHARS[a];
                                    n
                                        ? (t.append(
                                              String.fromCharCode(
                                                  c.charCodeAt(0) + 128
                                              )
                                          ),
                                          (n = !1))
                                        : t.append(c);
                                } else
                                    switch (a) {
                                        case 27:
                                            t.append(String.fromCharCode(29));
                                            break;
                                        case 30:
                                            n = !0;
                                            break;
                                        default:
                                            throw new U();
                                    }
                                i = 0;
                                break;
                            case 3:
                                if (a < this.TEXT_SHIFT3_SET_CHARS.length) {
                                    const c = this.TEXT_SHIFT3_SET_CHARS[a];
                                    n
                                        ? (t.append(
                                              String.fromCharCode(
                                                  c.charCodeAt(0) + 128
                                              )
                                          ),
                                          (n = !1))
                                        : t.append(c),
                                        (i = 0);
                                } else throw new U();
                                break;
                            default:
                                throw new U();
                        }
                    }
                } while (e.available() > 0);
            }
            static decodeAnsiX12Segment(e, t) {
                const n = [];
                do {
                    if (e.available() === 8) return;
                    const r = e.readBits(8);
                    if (r === 254) return;
                    this.parseTwoBytes(r, e.readBits(8), n);
                    for (let i = 0; i < 3; i++) {
                        const s = n[i];
                        switch (s) {
                            case 0:
                                t.append("\r");
                                break;
                            case 1:
                                t.append("*");
                                break;
                            case 2:
                                t.append(">");
                                break;
                            case 3:
                                t.append(" ");
                                break;
                            default:
                                if (s < 14)
                                    t.append(String.fromCharCode(s + 44));
                                else if (s < 40)
                                    t.append(String.fromCharCode(s + 51));
                                else throw new U();
                                break;
                        }
                    }
                } while (e.available() > 0);
            }
            static parseTwoBytes(e, t, n) {
                let r = (e << 8) + t - 1,
                    i = Math.floor(r / 1600);
                (n[0] = i),
                    (r -= i * 1600),
                    (i = Math.floor(r / 40)),
                    (n[1] = i),
                    (n[2] = r - i * 40);
            }
            static decodeEdifactSegment(e, t) {
                do {
                    if (e.available() <= 16) return;
                    for (let n = 0; n < 4; n++) {
                        let r = e.readBits(6);
                        if (r === 31) {
                            const i = 8 - e.getBitOffset();
                            i !== 8 && e.readBits(i);
                            return;
                        }
                        r & 32 || (r |= 64), t.append(String.fromCharCode(r));
                    }
                } while (e.available() > 0);
            }
            static decodeBase256Segment(e, t, n) {
                let r = 1 + e.getByteOffset();
                const i = this.unrandomize255State(e.readBits(8), r++);
                let s;
                if (
                    (i === 0
                        ? (s = (e.available() / 8) | 0)
                        : i < 250
                        ? (s = i)
                        : (s =
                              250 * (i - 249) +
                              this.unrandomize255State(e.readBits(8), r++)),
                    s < 0)
                )
                    throw new U();
                const o = new Uint8Array(s);
                for (let a = 0; a < s; a++) {
                    if (e.available() < 8) throw new U();
                    o[a] = this.unrandomize255State(e.readBits(8), r++);
                }
                n.push(o);
                try {
                    t.append(qe.decode(o, q.ISO88591));
                } catch (a) {
                    throw new Tt(
                        "Platform does not support required encoding: " +
                            a.message
                    );
                }
            }
            static unrandomize255State(e, t) {
                const n = ((149 * t) % 255) + 1,
                    r = e - n;
                return r >= 0 ? r : r + 256;
            }
        }
        (Ut.C40_BASIC_SET_CHARS = [
            "*",
            "*",
            "*",
            " ",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ]),
            (Ut.C40_SHIFT2_SET_CHARS = [
                "!",
                '"',
                "#",
                "$",
                "%",
                "&",
                "'",
                "(",
                ")",
                "*",
                "+",
                ",",
                "-",
                ".",
                "/",
                ":",
                ";",
                "<",
                "=",
                ">",
                "?",
                "@",
                "[",
                "\\",
                "]",
                "^",
                "_",
            ]),
            (Ut.TEXT_BASIC_SET_CHARS = [
                "*",
                "*",
                "*",
                " ",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
            ]),
            (Ut.TEXT_SHIFT2_SET_CHARS = Ut.C40_SHIFT2_SET_CHARS),
            (Ut.TEXT_SHIFT3_SET_CHARS = [
                "`",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "{",
                "|",
                "}",
                "~",
                String.fromCharCode(127),
            ]);
        class wi {
            constructor() {
                this.rsDecoder = new gn(de.DATA_MATRIX_FIELD_256);
            }
            decode(e) {
                const t = new Kn(e),
                    n = t.getVersion(),
                    r = t.readCodewords(),
                    i = qn.getDataBlocks(r, n);
                let s = 0;
                for (let c of i) s += c.getNumDataCodewords();
                const o = new Uint8Array(s),
                    a = i.length;
                for (let c = 0; c < a; c++) {
                    const f = i[c],
                        x = f.getCodewords(),
                        A = f.getNumDataCodewords();
                    this.correctErrors(x, A);
                    for (let m = 0; m < A; m++) o[m * a + c] = x[m];
                }
                return Ut.decode(o);
            }
            correctErrors(e, t) {
                const n = new Int32Array(e);
                try {
                    this.rsDecoder.decode(n, e.length - t);
                } catch {
                    throw new J();
                }
                for (let r = 0; r < t; r++) e[r] = n[r];
            }
        }
        class Fe {
            constructor(e) {
                (this.image = e), (this.rectangleDetector = new Rt(this.image));
            }
            detect() {
                const e = this.rectangleDetector.detect();
                let t = this.detectSolid1(e);
                if (
                    ((t = this.detectSolid2(t)),
                    (t[3] = this.correctTopRight(t)),
                    !t[3])
                )
                    throw new R();
                t = this.shiftToModuleCenter(t);
                const n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3];
                let o = this.transitionsBetween(n, s) + 1,
                    a = this.transitionsBetween(i, s) + 1;
                (o & 1) === 1 && (o += 1),
                    (a & 1) === 1 && (a += 1),
                    4 * o < 7 * a && 4 * a < 7 * o && (o = a = Math.max(o, a));
                let c = Fe.sampleGrid(this.image, n, r, i, s, o, a);
                return new Mn(c, [n, r, i, s]);
            }
            static shiftPoint(e, t, n) {
                let r = (t.getX() - e.getX()) / (n + 1),
                    i = (t.getY() - e.getY()) / (n + 1);
                return new j(e.getX() + r, e.getY() + i);
            }
            static moveAway(e, t, n) {
                let r = e.getX(),
                    i = e.getY();
                return (
                    r < t ? (r -= 1) : (r += 1),
                    i < n ? (i -= 1) : (i += 1),
                    new j(r, i)
                );
            }
            detectSolid1(e) {
                let t = e[0],
                    n = e[1],
                    r = e[3],
                    i = e[2],
                    s = this.transitionsBetween(t, n),
                    o = this.transitionsBetween(n, r),
                    a = this.transitionsBetween(r, i),
                    c = this.transitionsBetween(i, t),
                    f = s,
                    x = [i, t, n, r];
                return (
                    f > o &&
                        ((f = o),
                        (x[0] = t),
                        (x[1] = n),
                        (x[2] = r),
                        (x[3] = i)),
                    f > a &&
                        ((f = a),
                        (x[0] = n),
                        (x[1] = r),
                        (x[2] = i),
                        (x[3] = t)),
                    f > c && ((x[0] = r), (x[1] = i), (x[2] = t), (x[3] = n)),
                    x
                );
            }
            detectSolid2(e) {
                let t = e[0],
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    s = this.transitionsBetween(t, i),
                    o = Fe.shiftPoint(n, r, (s + 1) * 4),
                    a = Fe.shiftPoint(r, n, (s + 1) * 4),
                    c = this.transitionsBetween(o, t),
                    f = this.transitionsBetween(a, i);
                return (
                    c < f
                        ? ((e[0] = t), (e[1] = n), (e[2] = r), (e[3] = i))
                        : ((e[0] = n), (e[1] = r), (e[2] = i), (e[3] = t)),
                    e
                );
            }
            correctTopRight(e) {
                let t = e[0],
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    s = this.transitionsBetween(t, i),
                    o = this.transitionsBetween(n, i),
                    a = Fe.shiftPoint(t, n, (o + 1) * 4),
                    c = Fe.shiftPoint(r, n, (s + 1) * 4);
                (s = this.transitionsBetween(a, i)),
                    (o = this.transitionsBetween(c, i));
                let f = new j(
                        i.getX() + (r.getX() - n.getX()) / (s + 1),
                        i.getY() + (r.getY() - n.getY()) / (s + 1)
                    ),
                    x = new j(
                        i.getX() + (t.getX() - n.getX()) / (o + 1),
                        i.getY() + (t.getY() - n.getY()) / (o + 1)
                    );
                if (!this.isValid(f)) return this.isValid(x) ? x : null;
                if (!this.isValid(x)) return f;
                let A =
                        this.transitionsBetween(a, f) +
                        this.transitionsBetween(c, f),
                    m =
                        this.transitionsBetween(a, x) +
                        this.transitionsBetween(c, x);
                return A > m ? f : x;
            }
            shiftToModuleCenter(e) {
                let t = e[0],
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    s = this.transitionsBetween(t, i) + 1,
                    o = this.transitionsBetween(r, i) + 1,
                    a = Fe.shiftPoint(t, n, o * 4),
                    c = Fe.shiftPoint(r, n, s * 4);
                (s = this.transitionsBetween(a, i) + 1),
                    (o = this.transitionsBetween(c, i) + 1),
                    (s & 1) === 1 && (s += 1),
                    (o & 1) === 1 && (o += 1);
                let f = (t.getX() + n.getX() + r.getX() + i.getX()) / 4,
                    x = (t.getY() + n.getY() + r.getY() + i.getY()) / 4;
                (t = Fe.moveAway(t, f, x)),
                    (n = Fe.moveAway(n, f, x)),
                    (r = Fe.moveAway(r, f, x)),
                    (i = Fe.moveAway(i, f, x));
                let A, m;
                return (
                    (a = Fe.shiftPoint(t, n, o * 4)),
                    (a = Fe.shiftPoint(a, i, s * 4)),
                    (A = Fe.shiftPoint(n, t, o * 4)),
                    (A = Fe.shiftPoint(A, r, s * 4)),
                    (c = Fe.shiftPoint(r, i, o * 4)),
                    (c = Fe.shiftPoint(c, n, s * 4)),
                    (m = Fe.shiftPoint(i, r, o * 4)),
                    (m = Fe.shiftPoint(m, t, s * 4)),
                    [a, A, c, m]
                );
            }
            isValid(e) {
                return (
                    e.getX() >= 0 &&
                    e.getX() < this.image.getWidth() &&
                    e.getY() > 0 &&
                    e.getY() < this.image.getHeight()
                );
            }
            static sampleGrid(e, t, n, r, i, s, o) {
                return Ft.getInstance().sampleGrid(
                    e,
                    s,
                    o,
                    0.5,
                    0.5,
                    s - 0.5,
                    0.5,
                    s - 0.5,
                    o - 0.5,
                    0.5,
                    o - 0.5,
                    t.getX(),
                    t.getY(),
                    i.getX(),
                    i.getY(),
                    r.getX(),
                    r.getY(),
                    n.getX(),
                    n.getY()
                );
            }
            transitionsBetween(e, t) {
                let n = Math.trunc(e.getX()),
                    r = Math.trunc(e.getY()),
                    i = Math.trunc(t.getX()),
                    s = Math.trunc(t.getY()),
                    o = Math.abs(s - r) > Math.abs(i - n);
                if (o) {
                    let T = n;
                    (n = r), (r = T), (T = i), (i = s), (s = T);
                }
                let a = Math.abs(i - n),
                    c = Math.abs(s - r),
                    f = -a / 2,
                    x = r < s ? 1 : -1,
                    A = n < i ? 1 : -1,
                    m = 0,
                    I = this.image.get(o ? r : n, o ? n : r);
                for (let T = n, S = r; T !== i; T += A) {
                    let M = this.image.get(o ? S : T, o ? T : S);
                    if ((M !== I && (m++, (I = M)), (f += c), f > 0)) {
                        if (S === s) break;
                        (S += x), (f -= a);
                    }
                }
                return m;
            }
        }
        class Ht {
            constructor() {
                this.decoder = new wi();
            }
            decode(e, t = null) {
                let n, r;
                if (t != null && t.has(fe.PURE_BARCODE)) {
                    const c = Ht.extractPureBits(e.getBlackMatrix());
                    (n = this.decoder.decode(c)), (r = Ht.NO_POINTS);
                } else {
                    const c = new Fe(e.getBlackMatrix()).detect();
                    (n = this.decoder.decode(c.getBits())), (r = c.getPoints());
                }
                const i = n.getRawBytes(),
                    s = new tt(
                        n.getText(),
                        i,
                        8 * i.length,
                        r,
                        Y.DATA_MATRIX,
                        K.currentTimeMillis()
                    ),
                    o = n.getByteSegments();
                o != null && s.putMetadata(Ge.BYTE_SEGMENTS, o);
                const a = n.getECLevel();
                return (
                    a != null && s.putMetadata(Ge.ERROR_CORRECTION_LEVEL, a), s
                );
            }
            reset() {}
            static extractPureBits(e) {
                const t = e.getTopLeftOnBit(),
                    n = e.getBottomRightOnBit();
                if (t == null || n == null) throw new R();
                const r = this.moduleSize(t, e);
                let i = t[1];
                const s = n[1];
                let o = t[0];
                const c = (n[0] - o + 1) / r,
                    f = (s - i + 1) / r;
                if (c <= 0 || f <= 0) throw new R();
                const x = r / 2;
                (i += x), (o += x);
                const A = new Pe(c, f);
                for (let m = 0; m < f; m++) {
                    const I = i + m * r;
                    for (let T = 0; T < c; T++)
                        e.get(o + T * r, I) && A.set(T, m);
                }
                return A;
            }
            static moduleSize(e, t) {
                const n = t.getWidth();
                let r = e[0];
                const i = e[1];
                for (; r < n && t.get(r, i); ) r++;
                if (r === n) throw new R();
                const s = r - e[0];
                if (s === 0) throw new R();
                return s;
            }
        }
        Ht.NO_POINTS = [];
        class Ai extends Yt {
            constructor(e = 500) {
                super(new Ht(), e);
            }
        }
        var sn;
        (function (g) {
            (g[(g.L = 0)] = "L"),
                (g[(g.M = 1)] = "M"),
                (g[(g.Q = 2)] = "Q"),
                (g[(g.H = 3)] = "H");
        })(sn || (sn = {}));
        class Se {
            constructor(e, t, n) {
                (this.value = e),
                    (this.stringValue = t),
                    (this.bits = n),
                    Se.FOR_BITS.set(n, this),
                    Se.FOR_VALUE.set(e, this);
            }
            getValue() {
                return this.value;
            }
            getBits() {
                return this.bits;
            }
            static fromString(e) {
                switch (e) {
                    case "L":
                        return Se.L;
                    case "M":
                        return Se.M;
                    case "Q":
                        return Se.Q;
                    case "H":
                        return Se.H;
                    default:
                        throw new O(e + "not available");
                }
            }
            toString() {
                return this.stringValue;
            }
            equals(e) {
                if (!(e instanceof Se)) return !1;
                const t = e;
                return this.value === t.value;
            }
            static forBits(e) {
                if (e < 0 || e >= Se.FOR_BITS.size) throw new _();
                return Se.FOR_BITS.get(e);
            }
        }
        (Se.FOR_BITS = new Map()),
            (Se.FOR_VALUE = new Map()),
            (Se.L = new Se(sn.L, "L", 1)),
            (Se.M = new Se(sn.M, "M", 0)),
            (Se.Q = new Se(sn.Q, "Q", 3)),
            (Se.H = new Se(sn.H, "H", 2));
        class $e {
            constructor(e) {
                (this.errorCorrectionLevel = Se.forBits((e >> 3) & 3)),
                    (this.dataMask = e & 7);
            }
            static numBitsDiffering(e, t) {
                return Z.bitCount(e ^ t);
            }
            static decodeFormatInformation(e, t) {
                const n = $e.doDecodeFormatInformation(e, t);
                return n !== null
                    ? n
                    : $e.doDecodeFormatInformation(
                          e ^ $e.FORMAT_INFO_MASK_QR,
                          t ^ $e.FORMAT_INFO_MASK_QR
                      );
            }
            static doDecodeFormatInformation(e, t) {
                let n = Number.MAX_SAFE_INTEGER,
                    r = 0;
                for (const i of $e.FORMAT_INFO_DECODE_LOOKUP) {
                    const s = i[0];
                    if (s === e || s === t) return new $e(i[1]);
                    let o = $e.numBitsDiffering(e, s);
                    o < n && ((r = i[1]), (n = o)),
                        e !== t &&
                            ((o = $e.numBitsDiffering(t, s)),
                            o < n && ((r = i[1]), (n = o)));
                }
                return n <= 3 ? new $e(r) : null;
            }
            getErrorCorrectionLevel() {
                return this.errorCorrectionLevel;
            }
            getDataMask() {
                return this.dataMask;
            }
            hashCode() {
                return (
                    (this.errorCorrectionLevel.getBits() << 3) | this.dataMask
                );
            }
            equals(e) {
                if (!(e instanceof $e)) return !1;
                const t = e;
                return (
                    this.errorCorrectionLevel === t.errorCorrectionLevel &&
                    this.dataMask === t.dataMask
                );
            }
        }
        ($e.FORMAT_INFO_MASK_QR = 21522),
            ($e.FORMAT_INFO_DECODE_LOOKUP = [
                Int32Array.from([21522, 0]),
                Int32Array.from([20773, 1]),
                Int32Array.from([24188, 2]),
                Int32Array.from([23371, 3]),
                Int32Array.from([17913, 4]),
                Int32Array.from([16590, 5]),
                Int32Array.from([20375, 6]),
                Int32Array.from([19104, 7]),
                Int32Array.from([30660, 8]),
                Int32Array.from([29427, 9]),
                Int32Array.from([32170, 10]),
                Int32Array.from([30877, 11]),
                Int32Array.from([26159, 12]),
                Int32Array.from([25368, 13]),
                Int32Array.from([27713, 14]),
                Int32Array.from([26998, 15]),
                Int32Array.from([5769, 16]),
                Int32Array.from([5054, 17]),
                Int32Array.from([7399, 18]),
                Int32Array.from([6608, 19]),
                Int32Array.from([1890, 20]),
                Int32Array.from([597, 21]),
                Int32Array.from([3340, 22]),
                Int32Array.from([2107, 23]),
                Int32Array.from([13663, 24]),
                Int32Array.from([12392, 25]),
                Int32Array.from([16177, 26]),
                Int32Array.from([14854, 27]),
                Int32Array.from([9396, 28]),
                Int32Array.from([8579, 29]),
                Int32Array.from([11994, 30]),
                Int32Array.from([11245, 31]),
            ]);
        class b {
            constructor(e, ...t) {
                (this.ecCodewordsPerBlock = e), (this.ecBlocks = t);
            }
            getECCodewordsPerBlock() {
                return this.ecCodewordsPerBlock;
            }
            getNumBlocks() {
                let e = 0;
                const t = this.ecBlocks;
                for (const n of t) e += n.getCount();
                return e;
            }
            getTotalECCodewords() {
                return this.ecCodewordsPerBlock * this.getNumBlocks();
            }
            getECBlocks() {
                return this.ecBlocks;
            }
        }
        class p {
            constructor(e, t) {
                (this.count = e), (this.dataCodewords = t);
            }
            getCount() {
                return this.count;
            }
            getDataCodewords() {
                return this.dataCodewords;
            }
        }
        class G {
            constructor(e, t, ...n) {
                (this.versionNumber = e),
                    (this.alignmentPatternCenters = t),
                    (this.ecBlocks = n);
                let r = 0;
                const i = n[0].getECCodewordsPerBlock(),
                    s = n[0].getECBlocks();
                for (const o of s)
                    r += o.getCount() * (o.getDataCodewords() + i);
                this.totalCodewords = r;
            }
            getVersionNumber() {
                return this.versionNumber;
            }
            getAlignmentPatternCenters() {
                return this.alignmentPatternCenters;
            }
            getTotalCodewords() {
                return this.totalCodewords;
            }
            getDimensionForVersion() {
                return 17 + 4 * this.versionNumber;
            }
            getECBlocksForLevel(e) {
                return this.ecBlocks[e.getValue()];
            }
            static getProvisionalVersionForDimension(e) {
                if (e % 4 !== 1) throw new U();
                try {
                    return this.getVersionForNumber((e - 17) / 4);
                } catch {
                    throw new U();
                }
            }
            static getVersionForNumber(e) {
                if (e < 1 || e > 40) throw new _();
                return G.VERSIONS[e - 1];
            }
            static decodeVersionInformation(e) {
                let t = Number.MAX_SAFE_INTEGER,
                    n = 0;
                for (let r = 0; r < G.VERSION_DECODE_INFO.length; r++) {
                    const i = G.VERSION_DECODE_INFO[r];
                    if (i === e) return G.getVersionForNumber(r + 7);
                    const s = $e.numBitsDiffering(e, i);
                    s < t && ((n = r + 7), (t = s));
                }
                return t <= 3 ? G.getVersionForNumber(n) : null;
            }
            buildFunctionPattern() {
                const e = this.getDimensionForVersion(),
                    t = new Pe(e);
                t.setRegion(0, 0, 9, 9),
                    t.setRegion(e - 8, 0, 8, 9),
                    t.setRegion(0, e - 8, 9, 8);
                const n = this.alignmentPatternCenters.length;
                for (let r = 0; r < n; r++) {
                    const i = this.alignmentPatternCenters[r] - 2;
                    for (let s = 0; s < n; s++)
                        (r === 0 && (s === 0 || s === n - 1)) ||
                            (r === n - 1 && s === 0) ||
                            t.setRegion(
                                this.alignmentPatternCenters[s] - 2,
                                i,
                                5,
                                5
                            );
                }
                return (
                    t.setRegion(6, 9, 1, e - 17),
                    t.setRegion(9, 6, e - 17, 1),
                    this.versionNumber > 6 &&
                        (t.setRegion(e - 11, 0, 3, 6),
                        t.setRegion(0, e - 11, 6, 3)),
                    t
                );
            }
            toString() {
                return "" + this.versionNumber;
            }
        }
        (G.VERSION_DECODE_INFO = Int32Array.from([
            31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784,
            68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084,
            102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589,
            136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017,
        ])),
            (G.VERSIONS = [
                new G(
                    1,
                    new Int32Array(0),
                    new b(7, new p(1, 19)),
                    new b(10, new p(1, 16)),
                    new b(13, new p(1, 13)),
                    new b(17, new p(1, 9))
                ),
                new G(
                    2,
                    Int32Array.from([6, 18]),
                    new b(10, new p(1, 34)),
                    new b(16, new p(1, 28)),
                    new b(22, new p(1, 22)),
                    new b(28, new p(1, 16))
                ),
                new G(
                    3,
                    Int32Array.from([6, 22]),
                    new b(15, new p(1, 55)),
                    new b(26, new p(1, 44)),
                    new b(18, new p(2, 17)),
                    new b(22, new p(2, 13))
                ),
                new G(
                    4,
                    Int32Array.from([6, 26]),
                    new b(20, new p(1, 80)),
                    new b(18, new p(2, 32)),
                    new b(26, new p(2, 24)),
                    new b(16, new p(4, 9))
                ),
                new G(
                    5,
                    Int32Array.from([6, 30]),
                    new b(26, new p(1, 108)),
                    new b(24, new p(2, 43)),
                    new b(18, new p(2, 15), new p(2, 16)),
                    new b(22, new p(2, 11), new p(2, 12))
                ),
                new G(
                    6,
                    Int32Array.from([6, 34]),
                    new b(18, new p(2, 68)),
                    new b(16, new p(4, 27)),
                    new b(24, new p(4, 19)),
                    new b(28, new p(4, 15))
                ),
                new G(
                    7,
                    Int32Array.from([6, 22, 38]),
                    new b(20, new p(2, 78)),
                    new b(18, new p(4, 31)),
                    new b(18, new p(2, 14), new p(4, 15)),
                    new b(26, new p(4, 13), new p(1, 14))
                ),
                new G(
                    8,
                    Int32Array.from([6, 24, 42]),
                    new b(24, new p(2, 97)),
                    new b(22, new p(2, 38), new p(2, 39)),
                    new b(22, new p(4, 18), new p(2, 19)),
                    new b(26, new p(4, 14), new p(2, 15))
                ),
                new G(
                    9,
                    Int32Array.from([6, 26, 46]),
                    new b(30, new p(2, 116)),
                    new b(22, new p(3, 36), new p(2, 37)),
                    new b(20, new p(4, 16), new p(4, 17)),
                    new b(24, new p(4, 12), new p(4, 13))
                ),
                new G(
                    10,
                    Int32Array.from([6, 28, 50]),
                    new b(18, new p(2, 68), new p(2, 69)),
                    new b(26, new p(4, 43), new p(1, 44)),
                    new b(24, new p(6, 19), new p(2, 20)),
                    new b(28, new p(6, 15), new p(2, 16))
                ),
                new G(
                    11,
                    Int32Array.from([6, 30, 54]),
                    new b(20, new p(4, 81)),
                    new b(30, new p(1, 50), new p(4, 51)),
                    new b(28, new p(4, 22), new p(4, 23)),
                    new b(24, new p(3, 12), new p(8, 13))
                ),
                new G(
                    12,
                    Int32Array.from([6, 32, 58]),
                    new b(24, new p(2, 92), new p(2, 93)),
                    new b(22, new p(6, 36), new p(2, 37)),
                    new b(26, new p(4, 20), new p(6, 21)),
                    new b(28, new p(7, 14), new p(4, 15))
                ),
                new G(
                    13,
                    Int32Array.from([6, 34, 62]),
                    new b(26, new p(4, 107)),
                    new b(22, new p(8, 37), new p(1, 38)),
                    new b(24, new p(8, 20), new p(4, 21)),
                    new b(22, new p(12, 11), new p(4, 12))
                ),
                new G(
                    14,
                    Int32Array.from([6, 26, 46, 66]),
                    new b(30, new p(3, 115), new p(1, 116)),
                    new b(24, new p(4, 40), new p(5, 41)),
                    new b(20, new p(11, 16), new p(5, 17)),
                    new b(24, new p(11, 12), new p(5, 13))
                ),
                new G(
                    15,
                    Int32Array.from([6, 26, 48, 70]),
                    new b(22, new p(5, 87), new p(1, 88)),
                    new b(24, new p(5, 41), new p(5, 42)),
                    new b(30, new p(5, 24), new p(7, 25)),
                    new b(24, new p(11, 12), new p(7, 13))
                ),
                new G(
                    16,
                    Int32Array.from([6, 26, 50, 74]),
                    new b(24, new p(5, 98), new p(1, 99)),
                    new b(28, new p(7, 45), new p(3, 46)),
                    new b(24, new p(15, 19), new p(2, 20)),
                    new b(30, new p(3, 15), new p(13, 16))
                ),
                new G(
                    17,
                    Int32Array.from([6, 30, 54, 78]),
                    new b(28, new p(1, 107), new p(5, 108)),
                    new b(28, new p(10, 46), new p(1, 47)),
                    new b(28, new p(1, 22), new p(15, 23)),
                    new b(28, new p(2, 14), new p(17, 15))
                ),
                new G(
                    18,
                    Int32Array.from([6, 30, 56, 82]),
                    new b(30, new p(5, 120), new p(1, 121)),
                    new b(26, new p(9, 43), new p(4, 44)),
                    new b(28, new p(17, 22), new p(1, 23)),
                    new b(28, new p(2, 14), new p(19, 15))
                ),
                new G(
                    19,
                    Int32Array.from([6, 30, 58, 86]),
                    new b(28, new p(3, 113), new p(4, 114)),
                    new b(26, new p(3, 44), new p(11, 45)),
                    new b(26, new p(17, 21), new p(4, 22)),
                    new b(26, new p(9, 13), new p(16, 14))
                ),
                new G(
                    20,
                    Int32Array.from([6, 34, 62, 90]),
                    new b(28, new p(3, 107), new p(5, 108)),
                    new b(26, new p(3, 41), new p(13, 42)),
                    new b(30, new p(15, 24), new p(5, 25)),
                    new b(28, new p(15, 15), new p(10, 16))
                ),
                new G(
                    21,
                    Int32Array.from([6, 28, 50, 72, 94]),
                    new b(28, new p(4, 116), new p(4, 117)),
                    new b(26, new p(17, 42)),
                    new b(28, new p(17, 22), new p(6, 23)),
                    new b(30, new p(19, 16), new p(6, 17))
                ),
                new G(
                    22,
                    Int32Array.from([6, 26, 50, 74, 98]),
                    new b(28, new p(2, 111), new p(7, 112)),
                    new b(28, new p(17, 46)),
                    new b(30, new p(7, 24), new p(16, 25)),
                    new b(24, new p(34, 13))
                ),
                new G(
                    23,
                    Int32Array.from([6, 30, 54, 78, 102]),
                    new b(30, new p(4, 121), new p(5, 122)),
                    new b(28, new p(4, 47), new p(14, 48)),
                    new b(30, new p(11, 24), new p(14, 25)),
                    new b(30, new p(16, 15), new p(14, 16))
                ),
                new G(
                    24,
                    Int32Array.from([6, 28, 54, 80, 106]),
                    new b(30, new p(6, 117), new p(4, 118)),
                    new b(28, new p(6, 45), new p(14, 46)),
                    new b(30, new p(11, 24), new p(16, 25)),
                    new b(30, new p(30, 16), new p(2, 17))
                ),
                new G(
                    25,
                    Int32Array.from([6, 32, 58, 84, 110]),
                    new b(26, new p(8, 106), new p(4, 107)),
                    new b(28, new p(8, 47), new p(13, 48)),
                    new b(30, new p(7, 24), new p(22, 25)),
                    new b(30, new p(22, 15), new p(13, 16))
                ),
                new G(
                    26,
                    Int32Array.from([6, 30, 58, 86, 114]),
                    new b(28, new p(10, 114), new p(2, 115)),
                    new b(28, new p(19, 46), new p(4, 47)),
                    new b(28, new p(28, 22), new p(6, 23)),
                    new b(30, new p(33, 16), new p(4, 17))
                ),
                new G(
                    27,
                    Int32Array.from([6, 34, 62, 90, 118]),
                    new b(30, new p(8, 122), new p(4, 123)),
                    new b(28, new p(22, 45), new p(3, 46)),
                    new b(30, new p(8, 23), new p(26, 24)),
                    new b(30, new p(12, 15), new p(28, 16))
                ),
                new G(
                    28,
                    Int32Array.from([6, 26, 50, 74, 98, 122]),
                    new b(30, new p(3, 117), new p(10, 118)),
                    new b(28, new p(3, 45), new p(23, 46)),
                    new b(30, new p(4, 24), new p(31, 25)),
                    new b(30, new p(11, 15), new p(31, 16))
                ),
                new G(
                    29,
                    Int32Array.from([6, 30, 54, 78, 102, 126]),
                    new b(30, new p(7, 116), new p(7, 117)),
                    new b(28, new p(21, 45), new p(7, 46)),
                    new b(30, new p(1, 23), new p(37, 24)),
                    new b(30, new p(19, 15), new p(26, 16))
                ),
                new G(
                    30,
                    Int32Array.from([6, 26, 52, 78, 104, 130]),
                    new b(30, new p(5, 115), new p(10, 116)),
                    new b(28, new p(19, 47), new p(10, 48)),
                    new b(30, new p(15, 24), new p(25, 25)),
                    new b(30, new p(23, 15), new p(25, 16))
                ),
                new G(
                    31,
                    Int32Array.from([6, 30, 56, 82, 108, 134]),
                    new b(30, new p(13, 115), new p(3, 116)),
                    new b(28, new p(2, 46), new p(29, 47)),
                    new b(30, new p(42, 24), new p(1, 25)),
                    new b(30, new p(23, 15), new p(28, 16))
                ),
                new G(
                    32,
                    Int32Array.from([6, 34, 60, 86, 112, 138]),
                    new b(30, new p(17, 115)),
                    new b(28, new p(10, 46), new p(23, 47)),
                    new b(30, new p(10, 24), new p(35, 25)),
                    new b(30, new p(19, 15), new p(35, 16))
                ),
                new G(
                    33,
                    Int32Array.from([6, 30, 58, 86, 114, 142]),
                    new b(30, new p(17, 115), new p(1, 116)),
                    new b(28, new p(14, 46), new p(21, 47)),
                    new b(30, new p(29, 24), new p(19, 25)),
                    new b(30, new p(11, 15), new p(46, 16))
                ),
                new G(
                    34,
                    Int32Array.from([6, 34, 62, 90, 118, 146]),
                    new b(30, new p(13, 115), new p(6, 116)),
                    new b(28, new p(14, 46), new p(23, 47)),
                    new b(30, new p(44, 24), new p(7, 25)),
                    new b(30, new p(59, 16), new p(1, 17))
                ),
                new G(
                    35,
                    Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                    new b(30, new p(12, 121), new p(7, 122)),
                    new b(28, new p(12, 47), new p(26, 48)),
                    new b(30, new p(39, 24), new p(14, 25)),
                    new b(30, new p(22, 15), new p(41, 16))
                ),
                new G(
                    36,
                    Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                    new b(30, new p(6, 121), new p(14, 122)),
                    new b(28, new p(6, 47), new p(34, 48)),
                    new b(30, new p(46, 24), new p(10, 25)),
                    new b(30, new p(2, 15), new p(64, 16))
                ),
                new G(
                    37,
                    Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                    new b(30, new p(17, 122), new p(4, 123)),
                    new b(28, new p(29, 46), new p(14, 47)),
                    new b(30, new p(49, 24), new p(10, 25)),
                    new b(30, new p(24, 15), new p(46, 16))
                ),
                new G(
                    38,
                    Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                    new b(30, new p(4, 122), new p(18, 123)),
                    new b(28, new p(13, 46), new p(32, 47)),
                    new b(30, new p(48, 24), new p(14, 25)),
                    new b(30, new p(42, 15), new p(32, 16))
                ),
                new G(
                    39,
                    Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                    new b(30, new p(20, 117), new p(4, 118)),
                    new b(28, new p(40, 47), new p(7, 48)),
                    new b(30, new p(43, 24), new p(22, 25)),
                    new b(30, new p(10, 15), new p(67, 16))
                ),
                new G(
                    40,
                    Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
                    new b(30, new p(19, 118), new p(6, 119)),
                    new b(28, new p(18, 47), new p(31, 48)),
                    new b(30, new p(34, 24), new p(34, 25)),
                    new b(30, new p(20, 15), new p(61, 16))
                ),
            ]);
        var We;
        (function (g) {
            (g[(g.DATA_MASK_000 = 0)] = "DATA_MASK_000"),
                (g[(g.DATA_MASK_001 = 1)] = "DATA_MASK_001"),
                (g[(g.DATA_MASK_010 = 2)] = "DATA_MASK_010"),
                (g[(g.DATA_MASK_011 = 3)] = "DATA_MASK_011"),
                (g[(g.DATA_MASK_100 = 4)] = "DATA_MASK_100"),
                (g[(g.DATA_MASK_101 = 5)] = "DATA_MASK_101"),
                (g[(g.DATA_MASK_110 = 6)] = "DATA_MASK_110"),
                (g[(g.DATA_MASK_111 = 7)] = "DATA_MASK_111");
        })(We || (We = {}));
        class wt {
            constructor(e, t) {
                (this.value = e), (this.isMasked = t);
            }
            unmaskBitMatrix(e, t) {
                for (let n = 0; n < t; n++)
                    for (let r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n);
            }
        }
        wt.values = new Map([
            [
                We.DATA_MASK_000,
                new wt(We.DATA_MASK_000, (g, e) => ((g + e) & 1) === 0),
            ],
            [
                We.DATA_MASK_001,
                new wt(We.DATA_MASK_001, (g, e) => (g & 1) === 0),
            ],
            [We.DATA_MASK_010, new wt(We.DATA_MASK_010, (g, e) => e % 3 === 0)],
            [
                We.DATA_MASK_011,
                new wt(We.DATA_MASK_011, (g, e) => (g + e) % 3 === 0),
            ],
            [
                We.DATA_MASK_100,
                new wt(
                    We.DATA_MASK_100,
                    (g, e) =>
                        ((Math.floor(g / 2) + Math.floor(e / 3)) & 1) === 0
                ),
            ],
            [
                We.DATA_MASK_101,
                new wt(We.DATA_MASK_101, (g, e) => (g * e) % 6 === 0),
            ],
            [
                We.DATA_MASK_110,
                new wt(We.DATA_MASK_110, (g, e) => (g * e) % 6 < 3),
            ],
            [
                We.DATA_MASK_111,
                new wt(
                    We.DATA_MASK_111,
                    (g, e) => ((g + e + ((g * e) % 3)) & 1) === 0
                ),
            ],
        ]);
        class Ci {
            constructor(e) {
                const t = e.getHeight();
                if (t < 21 || (t & 3) !== 1) throw new U();
                this.bitMatrix = e;
            }
            readFormatInformation() {
                if (
                    this.parsedFormatInfo !== null &&
                    this.parsedFormatInfo !== void 0
                )
                    return this.parsedFormatInfo;
                let e = 0;
                for (let i = 0; i < 6; i++) e = this.copyBit(i, 8, e);
                (e = this.copyBit(7, 8, e)),
                    (e = this.copyBit(8, 8, e)),
                    (e = this.copyBit(8, 7, e));
                for (let i = 5; i >= 0; i--) e = this.copyBit(8, i, e);
                const t = this.bitMatrix.getHeight();
                let n = 0;
                const r = t - 7;
                for (let i = t - 1; i >= r; i--) n = this.copyBit(8, i, n);
                for (let i = t - 8; i < t; i++) n = this.copyBit(i, 8, n);
                if (
                    ((this.parsedFormatInfo = $e.decodeFormatInformation(e, n)),
                    this.parsedFormatInfo !== null)
                )
                    return this.parsedFormatInfo;
                throw new U();
            }
            readVersion() {
                if (
                    this.parsedVersion !== null &&
                    this.parsedVersion !== void 0
                )
                    return this.parsedVersion;
                const e = this.bitMatrix.getHeight(),
                    t = Math.floor((e - 17) / 4);
                if (t <= 6) return G.getVersionForNumber(t);
                let n = 0;
                const r = e - 11;
                for (let s = 5; s >= 0; s--)
                    for (let o = e - 9; o >= r; o--) n = this.copyBit(o, s, n);
                let i = G.decodeVersionInformation(n);
                if (i !== null && i.getDimensionForVersion() === e)
                    return (this.parsedVersion = i), i;
                n = 0;
                for (let s = 5; s >= 0; s--)
                    for (let o = e - 9; o >= r; o--) n = this.copyBit(s, o, n);
                if (
                    ((i = G.decodeVersionInformation(n)),
                    i !== null && i.getDimensionForVersion() === e)
                )
                    return (this.parsedVersion = i), i;
                throw new U();
            }
            copyBit(e, t, n) {
                return (
                    this.isMirror
                        ? this.bitMatrix.get(t, e)
                        : this.bitMatrix.get(e, t)
                )
                    ? (n << 1) | 1
                    : n << 1;
            }
            readCodewords() {
                const e = this.readFormatInformation(),
                    t = this.readVersion(),
                    n = wt.values.get(e.getDataMask()),
                    r = this.bitMatrix.getHeight();
                n.unmaskBitMatrix(this.bitMatrix, r);
                const i = t.buildFunctionPattern();
                let s = !0;
                const o = new Uint8Array(t.getTotalCodewords());
                let a = 0,
                    c = 0,
                    f = 0;
                for (let x = r - 1; x > 0; x -= 2) {
                    x === 6 && x--;
                    for (let A = 0; A < r; A++) {
                        const m = s ? r - 1 - A : A;
                        for (let I = 0; I < 2; I++)
                            i.get(x - I, m) ||
                                (f++,
                                (c <<= 1),
                                this.bitMatrix.get(x - I, m) && (c |= 1),
                                f === 8 && ((o[a++] = c), (f = 0), (c = 0)));
                    }
                    s = !s;
                }
                if (a !== t.getTotalCodewords()) throw new U();
                return o;
            }
            remask() {
                if (this.parsedFormatInfo === null) return;
                const e = wt.values[this.parsedFormatInfo.getDataMask()],
                    t = this.bitMatrix.getHeight();
                e.unmaskBitMatrix(this.bitMatrix, t);
            }
            setMirror(e) {
                (this.parsedVersion = null),
                    (this.parsedFormatInfo = null),
                    (this.isMirror = e);
            }
            mirror() {
                const e = this.bitMatrix;
                for (let t = 0, n = e.getWidth(); t < n; t++)
                    for (let r = t + 1, i = e.getHeight(); r < i; r++)
                        e.get(t, r) !== e.get(r, t) &&
                            (e.flip(r, t), e.flip(t, r));
            }
        }
        class $n {
            constructor(e, t) {
                (this.numDataCodewords = e), (this.codewords = t);
            }
            static getDataBlocks(e, t, n) {
                if (e.length !== t.getTotalCodewords()) throw new _();
                const r = t.getECBlocksForLevel(n);
                let i = 0;
                const s = r.getECBlocks();
                for (const I of s) i += I.getCount();
                const o = new Array(i);
                let a = 0;
                for (const I of s)
                    for (let T = 0; T < I.getCount(); T++) {
                        const S = I.getDataCodewords(),
                            M = r.getECCodewordsPerBlock() + S;
                        o[a++] = new $n(S, new Uint8Array(M));
                    }
                const c = o[0].codewords.length;
                let f = o.length - 1;
                for (; f >= 0 && o[f].codewords.length !== c; ) f--;
                f++;
                const x = c - r.getECCodewordsPerBlock();
                let A = 0;
                for (let I = 0; I < x; I++)
                    for (let T = 0; T < a; T++) o[T].codewords[I] = e[A++];
                for (let I = f; I < a; I++) o[I].codewords[x] = e[A++];
                const m = o[0].codewords.length;
                for (let I = x; I < m; I++)
                    for (let T = 0; T < a; T++) {
                        const S = T < f ? I : I + 1;
                        o[T].codewords[S] = e[A++];
                    }
                return o;
            }
            getNumDataCodewords() {
                return this.numDataCodewords;
            }
            getCodewords() {
                return this.codewords;
            }
        }
        var At;
        (function (g) {
            (g[(g.TERMINATOR = 0)] = "TERMINATOR"),
                (g[(g.NUMERIC = 1)] = "NUMERIC"),
                (g[(g.ALPHANUMERIC = 2)] = "ALPHANUMERIC"),
                (g[(g.STRUCTURED_APPEND = 3)] = "STRUCTURED_APPEND"),
                (g[(g.BYTE = 4)] = "BYTE"),
                (g[(g.ECI = 5)] = "ECI"),
                (g[(g.KANJI = 6)] = "KANJI"),
                (g[(g.FNC1_FIRST_POSITION = 7)] = "FNC1_FIRST_POSITION"),
                (g[(g.FNC1_SECOND_POSITION = 8)] = "FNC1_SECOND_POSITION"),
                (g[(g.HANZI = 9)] = "HANZI");
        })(At || (At = {}));
        class W {
            constructor(e, t, n, r) {
                (this.value = e),
                    (this.stringValue = t),
                    (this.characterCountBitsForVersions = n),
                    (this.bits = r),
                    W.FOR_BITS.set(r, this),
                    W.FOR_VALUE.set(e, this);
            }
            static forBits(e) {
                const t = W.FOR_BITS.get(e);
                if (t === void 0) throw new _();
                return t;
            }
            getCharacterCountBits(e) {
                const t = e.getVersionNumber();
                let n;
                return (
                    t <= 9 ? (n = 0) : t <= 26 ? (n = 1) : (n = 2),
                    this.characterCountBitsForVersions[n]
                );
            }
            getValue() {
                return this.value;
            }
            getBits() {
                return this.bits;
            }
            equals(e) {
                if (!(e instanceof W)) return !1;
                const t = e;
                return this.value === t.value;
            }
            toString() {
                return this.stringValue;
            }
        }
        (W.FOR_BITS = new Map()),
            (W.FOR_VALUE = new Map()),
            (W.TERMINATOR = new W(
                At.TERMINATOR,
                "TERMINATOR",
                Int32Array.from([0, 0, 0]),
                0
            )),
            (W.NUMERIC = new W(
                At.NUMERIC,
                "NUMERIC",
                Int32Array.from([10, 12, 14]),
                1
            )),
            (W.ALPHANUMERIC = new W(
                At.ALPHANUMERIC,
                "ALPHANUMERIC",
                Int32Array.from([9, 11, 13]),
                2
            )),
            (W.STRUCTURED_APPEND = new W(
                At.STRUCTURED_APPEND,
                "STRUCTURED_APPEND",
                Int32Array.from([0, 0, 0]),
                3
            )),
            (W.BYTE = new W(At.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4)),
            (W.ECI = new W(At.ECI, "ECI", Int32Array.from([0, 0, 0]), 7)),
            (W.KANJI = new W(
                At.KANJI,
                "KANJI",
                Int32Array.from([8, 10, 12]),
                8
            )),
            (W.FNC1_FIRST_POSITION = new W(
                At.FNC1_FIRST_POSITION,
                "FNC1_FIRST_POSITION",
                Int32Array.from([0, 0, 0]),
                5
            )),
            (W.FNC1_SECOND_POSITION = new W(
                At.FNC1_SECOND_POSITION,
                "FNC1_SECOND_POSITION",
                Int32Array.from([0, 0, 0]),
                9
            )),
            (W.HANZI = new W(
                At.HANZI,
                "HANZI",
                Int32Array.from([8, 10, 12]),
                13
            ));
        class _e {
            static decode(e, t, n, r) {
                const i = new Jn(e);
                let s = new we();
                const o = new Array();
                let a = -1,
                    c = -1;
                try {
                    let f = null,
                        x = !1,
                        A;
                    do {
                        if (i.available() < 4) A = W.TERMINATOR;
                        else {
                            const m = i.readBits(4);
                            A = W.forBits(m);
                        }
                        switch (A) {
                            case W.TERMINATOR:
                                break;
                            case W.FNC1_FIRST_POSITION:
                            case W.FNC1_SECOND_POSITION:
                                x = !0;
                                break;
                            case W.STRUCTURED_APPEND:
                                if (i.available() < 16) throw new U();
                                (a = i.readBits(8)), (c = i.readBits(8));
                                break;
                            case W.ECI:
                                const m = _e.parseECIValue(i);
                                if (
                                    ((f = k.getCharacterSetECIByValue(m)),
                                    f === null)
                                )
                                    throw new U();
                                break;
                            case W.HANZI:
                                const I = i.readBits(4),
                                    T = i.readBits(A.getCharacterCountBits(t));
                                I === _e.GB2312_SUBSET &&
                                    _e.decodeHanziSegment(i, s, T);
                                break;
                            default:
                                const S = i.readBits(
                                    A.getCharacterCountBits(t)
                                );
                                switch (A) {
                                    case W.NUMERIC:
                                        _e.decodeNumericSegment(i, s, S);
                                        break;
                                    case W.ALPHANUMERIC:
                                        _e.decodeAlphanumericSegment(
                                            i,
                                            s,
                                            S,
                                            x
                                        );
                                        break;
                                    case W.BYTE:
                                        _e.decodeByteSegment(i, s, S, f, o, r);
                                        break;
                                    case W.KANJI:
                                        _e.decodeKanjiSegment(i, s, S);
                                        break;
                                    default:
                                        throw new U();
                                }
                                break;
                        }
                    } while (A !== W.TERMINATOR);
                } catch {
                    throw new U();
                }
                return new fn(
                    e,
                    s.toString(),
                    o.length === 0 ? null : o,
                    n === null ? null : n.toString(),
                    a,
                    c
                );
            }
            static decodeHanziSegment(e, t, n) {
                if (n * 13 > e.available()) throw new U();
                const r = new Uint8Array(2 * n);
                let i = 0;
                for (; n > 0; ) {
                    const s = e.readBits(13);
                    let o = (((s / 96) << 8) & 4294967295) | s % 96;
                    o < 959 ? (o += 41377) : (o += 42657),
                        (r[i] = (o >> 8) & 255),
                        (r[i + 1] = o & 255),
                        (i += 2),
                        n--;
                }
                try {
                    t.append(qe.decode(r, q.GB2312));
                } catch (s) {
                    throw new U(s);
                }
            }
            static decodeKanjiSegment(e, t, n) {
                if (n * 13 > e.available()) throw new U();
                const r = new Uint8Array(2 * n);
                let i = 0;
                for (; n > 0; ) {
                    const s = e.readBits(13);
                    let o = (((s / 192) << 8) & 4294967295) | s % 192;
                    o < 7936 ? (o += 33088) : (o += 49472),
                        (r[i] = o >> 8),
                        (r[i + 1] = o),
                        (i += 2),
                        n--;
                }
                try {
                    t.append(qe.decode(r, q.SHIFT_JIS));
                } catch (s) {
                    throw new U(s);
                }
            }
            static decodeByteSegment(e, t, n, r, i, s) {
                if (8 * n > e.available()) throw new U();
                const o = new Uint8Array(n);
                for (let c = 0; c < n; c++) o[c] = e.readBits(8);
                let a;
                r === null ? (a = q.guessEncoding(o, s)) : (a = r.getName());
                try {
                    t.append(qe.decode(o, a));
                } catch (c) {
                    throw new U(c);
                }
                i.push(o);
            }
            static toAlphaNumericChar(e) {
                if (e >= _e.ALPHANUMERIC_CHARS.length) throw new U();
                return _e.ALPHANUMERIC_CHARS[e];
            }
            static decodeAlphanumericSegment(e, t, n, r) {
                const i = t.length();
                for (; n > 1; ) {
                    if (e.available() < 11) throw new U();
                    const s = e.readBits(11);
                    t.append(_e.toAlphaNumericChar(Math.floor(s / 45))),
                        t.append(_e.toAlphaNumericChar(s % 45)),
                        (n -= 2);
                }
                if (n === 1) {
                    if (e.available() < 6) throw new U();
                    t.append(_e.toAlphaNumericChar(e.readBits(6)));
                }
                if (r)
                    for (let s = i; s < t.length(); s++)
                        t.charAt(s) === "%" &&
                            (s < t.length() - 1 && t.charAt(s + 1) === "%"
                                ? t.deleteCharAt(s + 1)
                                : t.setCharAt(s, String.fromCharCode(29)));
            }
            static decodeNumericSegment(e, t, n) {
                for (; n >= 3; ) {
                    if (e.available() < 10) throw new U();
                    const r = e.readBits(10);
                    if (r >= 1e3) throw new U();
                    t.append(_e.toAlphaNumericChar(Math.floor(r / 100))),
                        t.append(
                            _e.toAlphaNumericChar(Math.floor(r / 10) % 10)
                        ),
                        t.append(_e.toAlphaNumericChar(r % 10)),
                        (n -= 3);
                }
                if (n === 2) {
                    if (e.available() < 7) throw new U();
                    const r = e.readBits(7);
                    if (r >= 100) throw new U();
                    t.append(_e.toAlphaNumericChar(Math.floor(r / 10))),
                        t.append(_e.toAlphaNumericChar(r % 10));
                } else if (n === 1) {
                    if (e.available() < 4) throw new U();
                    const r = e.readBits(4);
                    if (r >= 10) throw new U();
                    t.append(_e.toAlphaNumericChar(r));
                }
            }
            static parseECIValue(e) {
                const t = e.readBits(8);
                if (!(t & 128)) return t & 127;
                if ((t & 192) === 128) {
                    const n = e.readBits(8);
                    return (((t & 63) << 8) & 4294967295) | n;
                }
                if ((t & 224) === 192) {
                    const n = e.readBits(16);
                    return (((t & 31) << 16) & 4294967295) | n;
                }
                throw new U();
            }
        }
        (_e.ALPHANUMERIC_CHARS =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
            (_e.GB2312_SUBSET = 1);
        class br {
            constructor(e) {
                this.mirrored = e;
            }
            isMirrored() {
                return this.mirrored;
            }
            applyMirroredCorrection(e) {
                if (!this.mirrored || e === null || e.length < 3) return;
                const t = e[0];
                (e[0] = e[2]), (e[2] = t);
            }
        }
        class Ei {
            constructor() {
                this.rsDecoder = new gn(de.QR_CODE_FIELD_256);
            }
            decodeBooleanArray(e, t) {
                return this.decodeBitMatrix(Pe.parseFromBooleanArray(e), t);
            }
            decodeBitMatrix(e, t) {
                const n = new Ci(e);
                let r = null;
                try {
                    return this.decodeBitMatrixParser(n, t);
                } catch (i) {
                    r = i;
                }
                try {
                    n.remask(),
                        n.setMirror(!0),
                        n.readVersion(),
                        n.readFormatInformation(),
                        n.mirror();
                    const i = this.decodeBitMatrixParser(n, t);
                    return i.setOther(new br(!0)), i;
                } catch (i) {
                    throw r !== null ? r : i;
                }
            }
            decodeBitMatrixParser(e, t) {
                const n = e.readVersion(),
                    r = e.readFormatInformation().getErrorCorrectionLevel(),
                    i = e.readCodewords(),
                    s = $n.getDataBlocks(i, n, r);
                let o = 0;
                for (const f of s) o += f.getNumDataCodewords();
                const a = new Uint8Array(o);
                let c = 0;
                for (const f of s) {
                    const x = f.getCodewords(),
                        A = f.getNumDataCodewords();
                    this.correctErrors(x, A);
                    for (let m = 0; m < A; m++) a[c++] = x[m];
                }
                return _e.decode(a, n, r, t);
            }
            correctErrors(e, t) {
                const n = new Int32Array(e);
                try {
                    this.rsDecoder.decode(n, e.length - t);
                } catch {
                    throw new J();
                }
                for (let r = 0; r < t; r++) e[r] = n[r];
            }
        }
        class er extends j {
            constructor(e, t, n) {
                super(e, t), (this.estimatedModuleSize = n);
            }
            aboutEquals(e, t, n) {
                if (
                    Math.abs(t - this.getY()) <= e &&
                    Math.abs(n - this.getX()) <= e
                ) {
                    const r = Math.abs(e - this.estimatedModuleSize);
                    return r <= 1 || r <= this.estimatedModuleSize;
                }
                return !1;
            }
            combineEstimate(e, t, n) {
                const r = (this.getX() + t) / 2,
                    i = (this.getY() + e) / 2,
                    s = (this.estimatedModuleSize + n) / 2;
                return new er(r, i, s);
            }
        }
        class vn {
            constructor(e, t, n, r, i, s, o) {
                (this.image = e),
                    (this.startX = t),
                    (this.startY = n),
                    (this.width = r),
                    (this.height = i),
                    (this.moduleSize = s),
                    (this.resultPointCallback = o),
                    (this.possibleCenters = []),
                    (this.crossCheckStateCount = new Int32Array(3));
            }
            find() {
                const e = this.startX,
                    t = this.height,
                    n = this.width,
                    r = e + n,
                    i = this.startY + t / 2,
                    s = new Int32Array(3),
                    o = this.image;
                for (let a = 0; a < t; a++) {
                    const c =
                        i +
                        (a & 1
                            ? -Math.floor((a + 1) / 2)
                            : Math.floor((a + 1) / 2));
                    (s[0] = 0), (s[1] = 0), (s[2] = 0);
                    let f = e;
                    for (; f < r && !o.get(f, c); ) f++;
                    let x = 0;
                    for (; f < r; ) {
                        if (o.get(f, c))
                            if (x === 1) s[1]++;
                            else if (x === 2) {
                                if (this.foundPatternCross(s)) {
                                    const A = this.handlePossibleCenter(
                                        s,
                                        c,
                                        f
                                    );
                                    if (A !== null) return A;
                                }
                                (s[0] = s[2]), (s[1] = 1), (s[2] = 0), (x = 1);
                            } else s[++x]++;
                        else x === 1 && x++, s[x]++;
                        f++;
                    }
                    if (this.foundPatternCross(s)) {
                        const A = this.handlePossibleCenter(s, c, r);
                        if (A !== null) return A;
                    }
                }
                if (this.possibleCenters.length !== 0)
                    return this.possibleCenters[0];
                throw new R();
            }
            static centerFromEnd(e, t) {
                return t - e[2] - e[1] / 2;
            }
            foundPatternCross(e) {
                const t = this.moduleSize,
                    n = t / 2;
                for (let r = 0; r < 3; r++)
                    if (Math.abs(t - e[r]) >= n) return !1;
                return !0;
            }
            crossCheckVertical(e, t, n, r) {
                const i = this.image,
                    s = i.getHeight(),
                    o = this.crossCheckStateCount;
                (o[0] = 0), (o[1] = 0), (o[2] = 0);
                let a = e;
                for (; a >= 0 && i.get(t, a) && o[1] <= n; ) o[1]++, a--;
                if (a < 0 || o[1] > n) return NaN;
                for (; a >= 0 && !i.get(t, a) && o[0] <= n; ) o[0]++, a--;
                if (o[0] > n) return NaN;
                for (a = e + 1; a < s && i.get(t, a) && o[1] <= n; )
                    o[1]++, a++;
                if (a === s || o[1] > n) return NaN;
                for (; a < s && !i.get(t, a) && o[2] <= n; ) o[2]++, a++;
                if (o[2] > n) return NaN;
                const c = o[0] + o[1] + o[2];
                return 5 * Math.abs(c - r) >= 2 * r
                    ? NaN
                    : this.foundPatternCross(o)
                    ? vn.centerFromEnd(o, a)
                    : NaN;
            }
            handlePossibleCenter(e, t, n) {
                const r = e[0] + e[1] + e[2],
                    i = vn.centerFromEnd(e, n),
                    s = this.crossCheckVertical(t, i, 2 * e[1], r);
                if (!isNaN(s)) {
                    const o = (e[0] + e[1] + e[2]) / 3;
                    for (const c of this.possibleCenters)
                        if (c.aboutEquals(o, s, i))
                            return c.combineEstimate(s, i, o);
                    const a = new er(i, s, o);
                    this.possibleCenters.push(a),
                        this.resultPointCallback !== null &&
                            this.resultPointCallback !== void 0 &&
                            this.resultPointCallback.foundPossibleResultPoint(
                                a
                            );
                }
                return null;
            }
        }
        class tr extends j {
            constructor(e, t, n, r) {
                super(e, t),
                    (this.estimatedModuleSize = n),
                    (this.count = r),
                    r === void 0 && (this.count = 1);
            }
            getEstimatedModuleSize() {
                return this.estimatedModuleSize;
            }
            getCount() {
                return this.count;
            }
            aboutEquals(e, t, n) {
                if (
                    Math.abs(t - this.getY()) <= e &&
                    Math.abs(n - this.getX()) <= e
                ) {
                    const r = Math.abs(e - this.estimatedModuleSize);
                    return r <= 1 || r <= this.estimatedModuleSize;
                }
                return !1;
            }
            combineEstimate(e, t, n) {
                const r = this.count + 1,
                    i = (this.count * this.getX() + t) / r,
                    s = (this.count * this.getY() + e) / r,
                    o = (this.count * this.estimatedModuleSize + n) / r;
                return new tr(i, s, o, r);
            }
        }
        class pi {
            constructor(e) {
                (this.bottomLeft = e[0]),
                    (this.topLeft = e[1]),
                    (this.topRight = e[2]);
            }
            getBottomLeft() {
                return this.bottomLeft;
            }
            getTopLeft() {
                return this.topLeft;
            }
            getTopRight() {
                return this.topRight;
            }
        }
        class Ye {
            constructor(e, t) {
                (this.image = e),
                    (this.resultPointCallback = t),
                    (this.possibleCenters = []),
                    (this.crossCheckStateCount = new Int32Array(5)),
                    (this.resultPointCallback = t);
            }
            getImage() {
                return this.image;
            }
            getPossibleCenters() {
                return this.possibleCenters;
            }
            find(e) {
                const t = e != null && e.get(fe.TRY_HARDER) !== void 0,
                    n = e != null && e.get(fe.PURE_BARCODE) !== void 0,
                    r = this.image,
                    i = r.getHeight(),
                    s = r.getWidth();
                let o = Math.floor((3 * i) / (4 * Ye.MAX_MODULES));
                (o < Ye.MIN_SKIP || t) && (o = Ye.MIN_SKIP);
                let a = !1;
                const c = new Int32Array(5);
                for (let x = o - 1; x < i && !a; x += o) {
                    (c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0), (c[4] = 0);
                    let A = 0;
                    for (let m = 0; m < s; m++)
                        if (r.get(m, x)) (A & 1) === 1 && A++, c[A]++;
                        else if (A & 1) c[A]++;
                        else if (A === 4)
                            if (Ye.foundPatternCross(c)) {
                                if (
                                    this.handlePossibleCenter(c, x, m, n) === !0
                                )
                                    if (((o = 2), this.hasSkipped === !0))
                                        a = this.haveMultiplyConfirmedCenters();
                                    else {
                                        const T = this.findRowSkip();
                                        T > c[2] &&
                                            ((x += T - c[2] - o), (m = s - 1));
                                    }
                                else {
                                    (c[0] = c[2]),
                                        (c[1] = c[3]),
                                        (c[2] = c[4]),
                                        (c[3] = 1),
                                        (c[4] = 0),
                                        (A = 3);
                                    continue;
                                }
                                (A = 0),
                                    (c[0] = 0),
                                    (c[1] = 0),
                                    (c[2] = 0),
                                    (c[3] = 0),
                                    (c[4] = 0);
                            } else
                                (c[0] = c[2]),
                                    (c[1] = c[3]),
                                    (c[2] = c[4]),
                                    (c[3] = 1),
                                    (c[4] = 0),
                                    (A = 3);
                        else c[++A]++;
                    Ye.foundPatternCross(c) &&
                        this.handlePossibleCenter(c, x, s, n) === !0 &&
                        ((o = c[0]),
                        this.hasSkipped &&
                            (a = this.haveMultiplyConfirmedCenters()));
                }
                const f = this.selectBestPatterns();
                return j.orderBestPatterns(f), new pi(f);
            }
            static centerFromEnd(e, t) {
                return t - e[4] - e[3] - e[2] / 2;
            }
            static foundPatternCross(e) {
                let t = 0;
                for (let i = 0; i < 5; i++) {
                    const s = e[i];
                    if (s === 0) return !1;
                    t += s;
                }
                if (t < 7) return !1;
                const n = t / 7,
                    r = n / 2;
                return (
                    Math.abs(n - e[0]) < r &&
                    Math.abs(n - e[1]) < r &&
                    Math.abs(3 * n - e[2]) < 3 * r &&
                    Math.abs(n - e[3]) < r &&
                    Math.abs(n - e[4]) < r
                );
            }
            getCrossCheckStateCount() {
                const e = this.crossCheckStateCount;
                return (
                    (e[0] = 0),
                    (e[1] = 0),
                    (e[2] = 0),
                    (e[3] = 0),
                    (e[4] = 0),
                    e
                );
            }
            crossCheckDiagonal(e, t, n, r) {
                const i = this.getCrossCheckStateCount();
                let s = 0;
                const o = this.image;
                for (; e >= s && t >= s && o.get(t - s, e - s); ) i[2]++, s++;
                if (e < s || t < s) return !1;
                for (; e >= s && t >= s && !o.get(t - s, e - s) && i[1] <= n; )
                    i[1]++, s++;
                if (e < s || t < s || i[1] > n) return !1;
                for (; e >= s && t >= s && o.get(t - s, e - s) && i[0] <= n; )
                    i[0]++, s++;
                if (i[0] > n) return !1;
                const a = o.getHeight(),
                    c = o.getWidth();
                for (s = 1; e + s < a && t + s < c && o.get(t + s, e + s); )
                    i[2]++, s++;
                if (e + s >= a || t + s >= c) return !1;
                for (
                    ;
                    e + s < a && t + s < c && !o.get(t + s, e + s) && i[3] < n;

                )
                    i[3]++, s++;
                if (e + s >= a || t + s >= c || i[3] >= n) return !1;
                for (
                    ;
                    e + s < a && t + s < c && o.get(t + s, e + s) && i[4] < n;

                )
                    i[4]++, s++;
                if (i[4] >= n) return !1;
                const f = i[0] + i[1] + i[2] + i[3] + i[4];
                return Math.abs(f - r) < 2 * r && Ye.foundPatternCross(i);
            }
            crossCheckVertical(e, t, n, r) {
                const i = this.image,
                    s = i.getHeight(),
                    o = this.getCrossCheckStateCount();
                let a = e;
                for (; a >= 0 && i.get(t, a); ) o[2]++, a--;
                if (a < 0) return NaN;
                for (; a >= 0 && !i.get(t, a) && o[1] <= n; ) o[1]++, a--;
                if (a < 0 || o[1] > n) return NaN;
                for (; a >= 0 && i.get(t, a) && o[0] <= n; ) o[0]++, a--;
                if (o[0] > n) return NaN;
                for (a = e + 1; a < s && i.get(t, a); ) o[2]++, a++;
                if (a === s) return NaN;
                for (; a < s && !i.get(t, a) && o[3] < n; ) o[3]++, a++;
                if (a === s || o[3] >= n) return NaN;
                for (; a < s && i.get(t, a) && o[4] < n; ) o[4]++, a++;
                if (o[4] >= n) return NaN;
                const c = o[0] + o[1] + o[2] + o[3] + o[4];
                return 5 * Math.abs(c - r) >= 2 * r
                    ? NaN
                    : Ye.foundPatternCross(o)
                    ? Ye.centerFromEnd(o, a)
                    : NaN;
            }
            crossCheckHorizontal(e, t, n, r) {
                const i = this.image,
                    s = i.getWidth(),
                    o = this.getCrossCheckStateCount();
                let a = e;
                for (; a >= 0 && i.get(a, t); ) o[2]++, a--;
                if (a < 0) return NaN;
                for (; a >= 0 && !i.get(a, t) && o[1] <= n; ) o[1]++, a--;
                if (a < 0 || o[1] > n) return NaN;
                for (; a >= 0 && i.get(a, t) && o[0] <= n; ) o[0]++, a--;
                if (o[0] > n) return NaN;
                for (a = e + 1; a < s && i.get(a, t); ) o[2]++, a++;
                if (a === s) return NaN;
                for (; a < s && !i.get(a, t) && o[3] < n; ) o[3]++, a++;
                if (a === s || o[3] >= n) return NaN;
                for (; a < s && i.get(a, t) && o[4] < n; ) o[4]++, a++;
                if (o[4] >= n) return NaN;
                const c = o[0] + o[1] + o[2] + o[3] + o[4];
                return 5 * Math.abs(c - r) >= r
                    ? NaN
                    : Ye.foundPatternCross(o)
                    ? Ye.centerFromEnd(o, a)
                    : NaN;
            }
            handlePossibleCenter(e, t, n, r) {
                const i = e[0] + e[1] + e[2] + e[3] + e[4];
                let s = Ye.centerFromEnd(e, n),
                    o = this.crossCheckVertical(t, Math.floor(s), e[2], i);
                if (
                    !isNaN(o) &&
                    ((s = this.crossCheckHorizontal(
                        Math.floor(s),
                        Math.floor(o),
                        e[2],
                        i
                    )),
                    !isNaN(s) &&
                        (!r ||
                            this.crossCheckDiagonal(
                                Math.floor(o),
                                Math.floor(s),
                                e[2],
                                i
                            )))
                ) {
                    const a = i / 7;
                    let c = !1;
                    const f = this.possibleCenters;
                    for (let x = 0, A = f.length; x < A; x++) {
                        const m = f[x];
                        if (m.aboutEquals(a, o, s)) {
                            (f[x] = m.combineEstimate(o, s, a)), (c = !0);
                            break;
                        }
                    }
                    if (!c) {
                        const x = new tr(s, o, a);
                        f.push(x),
                            this.resultPointCallback !== null &&
                                this.resultPointCallback !== void 0 &&
                                this.resultPointCallback.foundPossibleResultPoint(
                                    x
                                );
                    }
                    return !0;
                }
                return !1;
            }
            findRowSkip() {
                if (this.possibleCenters.length <= 1) return 0;
                let t = null;
                for (const n of this.possibleCenters)
                    if (n.getCount() >= Ye.CENTER_QUORUM)
                        if (t == null) t = n;
                        else
                            return (
                                (this.hasSkipped = !0),
                                Math.floor(
                                    (Math.abs(t.getX() - n.getX()) -
                                        Math.abs(t.getY() - n.getY())) /
                                        2
                                )
                            );
                return 0;
            }
            haveMultiplyConfirmedCenters() {
                let e = 0,
                    t = 0;
                const n = this.possibleCenters.length;
                for (const s of this.possibleCenters)
                    s.getCount() >= Ye.CENTER_QUORUM &&
                        (e++, (t += s.getEstimatedModuleSize()));
                if (e < 3) return !1;
                const r = t / n;
                let i = 0;
                for (const s of this.possibleCenters)
                    i += Math.abs(s.getEstimatedModuleSize() - r);
                return i <= 0.05 * t;
            }
            selectBestPatterns() {
                const e = this.possibleCenters.length;
                if (e < 3) throw new R();
                const t = this.possibleCenters;
                let n;
                if (e > 3) {
                    let r = 0,
                        i = 0;
                    for (const a of this.possibleCenters) {
                        const c = a.getEstimatedModuleSize();
                        (r += c), (i += c * c);
                    }
                    n = r / e;
                    let s = Math.sqrt(i / e - n * n);
                    t.sort((a, c) => {
                        const f = Math.abs(c.getEstimatedModuleSize() - n),
                            x = Math.abs(a.getEstimatedModuleSize() - n);
                        return f < x ? -1 : f > x ? 1 : 0;
                    });
                    const o = Math.max(0.2 * n, s);
                    for (let a = 0; a < t.length && t.length > 3; a++) {
                        const c = t[a];
                        Math.abs(c.getEstimatedModuleSize() - n) > o &&
                            (t.splice(a, 1), a--);
                    }
                }
                if (t.length > 3) {
                    let r = 0;
                    for (const i of t) r += i.getEstimatedModuleSize();
                    (n = r / t.length),
                        t.sort((i, s) => {
                            if (s.getCount() === i.getCount()) {
                                const o = Math.abs(
                                        s.getEstimatedModuleSize() - n
                                    ),
                                    a = Math.abs(
                                        i.getEstimatedModuleSize() - n
                                    );
                                return o < a ? 1 : o > a ? -1 : 0;
                            } else return s.getCount() - i.getCount();
                        }),
                        t.splice(3);
                }
                return [t[0], t[1], t[2]];
            }
        }
        (Ye.CENTER_QUORUM = 2), (Ye.MIN_SKIP = 3), (Ye.MAX_MODULES = 57);
        class wn {
            constructor(e) {
                this.image = e;
            }
            getImage() {
                return this.image;
            }
            getResultPointCallback() {
                return this.resultPointCallback;
            }
            detect(e) {
                this.resultPointCallback =
                    e == null ? null : e.get(fe.NEED_RESULT_POINT_CALLBACK);
                const n = new Ye(this.image, this.resultPointCallback).find(e);
                return this.processFinderPatternInfo(n);
            }
            processFinderPatternInfo(e) {
                const t = e.getTopLeft(),
                    n = e.getTopRight(),
                    r = e.getBottomLeft(),
                    i = this.calculateModuleSize(t, n, r);
                if (i < 1) throw new R("No pattern found in proccess finder.");
                const s = wn.computeDimension(t, n, r, i),
                    o = G.getProvisionalVersionForDimension(s),
                    a = o.getDimensionForVersion() - 7;
                let c = null;
                if (o.getAlignmentPatternCenters().length > 0) {
                    const m = n.getX() - t.getX() + r.getX(),
                        I = n.getY() - t.getY() + r.getY(),
                        T = 1 - 3 / a,
                        S = Math.floor(t.getX() + T * (m - t.getX())),
                        M = Math.floor(t.getY() + T * (I - t.getY()));
                    for (let P = 4; P <= 16; P <<= 1)
                        try {
                            c = this.findAlignmentInRegion(i, S, M, P);
                            break;
                        } catch (F) {
                            if (!(F instanceof R)) throw F;
                        }
                }
                const f = wn.createTransform(t, n, r, c, s),
                    x = wn.sampleGrid(this.image, f, s);
                let A;
                return (
                    c === null ? (A = [r, t, n]) : (A = [r, t, n, c]),
                    new Mn(x, A)
                );
            }
            static createTransform(e, t, n, r, i) {
                const s = i - 3.5;
                let o, a, c, f;
                return (
                    r !== null
                        ? ((o = r.getX()), (a = r.getY()), (c = s - 3), (f = c))
                        : ((o = t.getX() - e.getX() + n.getX()),
                          (a = t.getY() - e.getY() + n.getY()),
                          (c = s),
                          (f = s)),
                    Et.quadrilateralToQuadrilateral(
                        3.5,
                        3.5,
                        s,
                        3.5,
                        c,
                        f,
                        3.5,
                        s,
                        e.getX(),
                        e.getY(),
                        t.getX(),
                        t.getY(),
                        o,
                        a,
                        n.getX(),
                        n.getY()
                    )
                );
            }
            static sampleGrid(e, t, n) {
                return Ft.getInstance().sampleGridWithTransform(e, n, n, t);
            }
            static computeDimension(e, t, n, r) {
                const i = ue.round(j.distance(e, t) / r),
                    s = ue.round(j.distance(e, n) / r);
                let o = Math.floor((i + s) / 2) + 7;
                switch (o & 3) {
                    case 0:
                        o++;
                        break;
                    case 2:
                        o--;
                        break;
                    case 3:
                        throw new R("Dimensions could be not found.");
                }
                return o;
            }
            calculateModuleSize(e, t, n) {
                return (
                    (this.calculateModuleSizeOneWay(e, t) +
                        this.calculateModuleSizeOneWay(e, n)) /
                    2
                );
            }
            calculateModuleSizeOneWay(e, t) {
                const n = this.sizeOfBlackWhiteBlackRunBothWays(
                        Math.floor(e.getX()),
                        Math.floor(e.getY()),
                        Math.floor(t.getX()),
                        Math.floor(t.getY())
                    ),
                    r = this.sizeOfBlackWhiteBlackRunBothWays(
                        Math.floor(t.getX()),
                        Math.floor(t.getY()),
                        Math.floor(e.getX()),
                        Math.floor(e.getY())
                    );
                return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14;
            }
            sizeOfBlackWhiteBlackRunBothWays(e, t, n, r) {
                let i = this.sizeOfBlackWhiteBlackRun(e, t, n, r),
                    s = 1,
                    o = e - (n - e);
                o < 0
                    ? ((s = e / (e - o)), (o = 0))
                    : o >= this.image.getWidth() &&
                      ((s = (this.image.getWidth() - 1 - e) / (o - e)),
                      (o = this.image.getWidth() - 1));
                let a = Math.floor(t - (r - t) * s);
                return (
                    (s = 1),
                    a < 0
                        ? ((s = t / (t - a)), (a = 0))
                        : a >= this.image.getHeight() &&
                          ((s = (this.image.getHeight() - 1 - t) / (a - t)),
                          (a = this.image.getHeight() - 1)),
                    (o = Math.floor(e + (o - e) * s)),
                    (i += this.sizeOfBlackWhiteBlackRun(e, t, o, a)),
                    i - 1
                );
            }
            sizeOfBlackWhiteBlackRun(e, t, n, r) {
                const i = Math.abs(r - t) > Math.abs(n - e);
                if (i) {
                    let m = e;
                    (e = t), (t = m), (m = n), (n = r), (r = m);
                }
                const s = Math.abs(n - e),
                    o = Math.abs(r - t);
                let a = -s / 2;
                const c = e < n ? 1 : -1,
                    f = t < r ? 1 : -1;
                let x = 0;
                const A = n + c;
                for (let m = e, I = t; m !== A; m += c) {
                    const T = i ? I : m,
                        S = i ? m : I;
                    if ((x === 1) === this.image.get(T, S)) {
                        if (x === 2) return ue.distance(m, I, e, t);
                        x++;
                    }
                    if (((a += o), a > 0)) {
                        if (I === r) break;
                        (I += f), (a -= s);
                    }
                }
                return x === 2 ? ue.distance(n + c, r, e, t) : NaN;
            }
            findAlignmentInRegion(e, t, n, r) {
                const i = Math.floor(r * e),
                    s = Math.max(0, t - i),
                    o = Math.min(this.image.getWidth() - 1, t + i);
                if (o - s < e * 3)
                    throw new R("Alignment top exceeds estimated module size.");
                const a = Math.max(0, n - i),
                    c = Math.min(this.image.getHeight() - 1, n + i);
                if (c - a < e * 3)
                    throw new R(
                        "Alignment bottom exceeds estimated module size."
                    );
                return new vn(
                    this.image,
                    s,
                    a,
                    o - s,
                    c - a,
                    e,
                    this.resultPointCallback
                ).find();
            }
        }
        class Vt {
            constructor() {
                this.decoder = new Ei();
            }
            getDecoder() {
                return this.decoder;
            }
            decode(e, t) {
                let n, r;
                if (t != null && t.get(fe.PURE_BARCODE) !== void 0) {
                    const a = Vt.extractPureBits(e.getBlackMatrix());
                    (n = this.decoder.decodeBitMatrix(a, t)),
                        (r = Vt.NO_POINTS);
                } else {
                    const a = new wn(e.getBlackMatrix()).detect(t);
                    (n = this.decoder.decodeBitMatrix(a.getBits(), t)),
                        (r = a.getPoints());
                }
                n.getOther() instanceof br &&
                    n.getOther().applyMirroredCorrection(r);
                const i = new tt(
                        n.getText(),
                        n.getRawBytes(),
                        void 0,
                        r,
                        Y.QR_CODE,
                        void 0
                    ),
                    s = n.getByteSegments();
                s !== null && i.putMetadata(Ge.BYTE_SEGMENTS, s);
                const o = n.getECLevel();
                return (
                    o !== null && i.putMetadata(Ge.ERROR_CORRECTION_LEVEL, o),
                    n.hasStructuredAppend() &&
                        (i.putMetadata(
                            Ge.STRUCTURED_APPEND_SEQUENCE,
                            n.getStructuredAppendSequenceNumber()
                        ),
                        i.putMetadata(
                            Ge.STRUCTURED_APPEND_PARITY,
                            n.getStructuredAppendParity()
                        )),
                    i
                );
            }
            reset() {}
            static extractPureBits(e) {
                const t = e.getTopLeftOnBit(),
                    n = e.getBottomRightOnBit();
                if (t === null || n === null) throw new R();
                const r = this.moduleSize(t, e);
                let i = t[1],
                    s = n[1],
                    o = t[0],
                    a = n[0];
                if (o >= a || i >= s) throw new R();
                if (s - i !== a - o && ((a = o + (s - i)), a >= e.getWidth()))
                    throw new R();
                const c = Math.round((a - o + 1) / r),
                    f = Math.round((s - i + 1) / r);
                if (c <= 0 || f <= 0) throw new R();
                if (f !== c) throw new R();
                const x = Math.floor(r / 2);
                (i += x), (o += x);
                const A = o + Math.floor((c - 1) * r) - a;
                if (A > 0) {
                    if (A > x) throw new R();
                    o -= A;
                }
                const m = i + Math.floor((f - 1) * r) - s;
                if (m > 0) {
                    if (m > x) throw new R();
                    i -= m;
                }
                const I = new Pe(c, f);
                for (let T = 0; T < f; T++) {
                    const S = i + Math.floor(T * r);
                    for (let M = 0; M < c; M++)
                        e.get(o + Math.floor(M * r), S) && I.set(M, T);
                }
                return I;
            }
            static moduleSize(e, t) {
                const n = t.getHeight(),
                    r = t.getWidth();
                let i = e[0],
                    s = e[1],
                    o = !0,
                    a = 0;
                for (; i < r && s < n; ) {
                    if (o !== t.get(i, s)) {
                        if (++a === 5) break;
                        o = !o;
                    }
                    i++, s++;
                }
                if (i === r || s === n) throw new R();
                return (i - e[0]) / 7;
            }
        }
        Vt.NO_POINTS = new Array();
        class Q {
            PDF417Common() {}
            static getBitCountSum(e) {
                return ue.sum(e);
            }
            static toIntArray(e) {
                if (e == null || !e.length) return Q.EMPTY_INT_ARRAY;
                const t = new Int32Array(e.length);
                let n = 0;
                for (const r of e) t[n++] = r;
                return t;
            }
            static getCodeword(e) {
                const t = ce.binarySearch(Q.SYMBOL_TABLE, e & 262143);
                return t < 0
                    ? -1
                    : (Q.CODEWORD_TABLE[t] - 1) % Q.NUMBER_OF_CODEWORDS;
            }
        }
        (Q.NUMBER_OF_CODEWORDS = 929),
            (Q.MAX_CODEWORDS_IN_BARCODE = Q.NUMBER_OF_CODEWORDS - 1),
            (Q.MIN_ROWS_IN_BARCODE = 3),
            (Q.MAX_ROWS_IN_BARCODE = 90),
            (Q.MODULES_IN_CODEWORD = 17),
            (Q.MODULES_IN_STOP_PATTERN = 18),
            (Q.BARS_IN_MODULE = 8),
            (Q.EMPTY_INT_ARRAY = new Int32Array([])),
            (Q.SYMBOL_TABLE = Int32Array.from([
                66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396,
                66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632,
                66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748,
                66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846,
                66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006,
                67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164,
                67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398,
                67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510,
                67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706,
                67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800,
                67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904,
                67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068,
                68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216,
                68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494,
                68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588,
                68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764,
                68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858,
                68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008,
                69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108,
                69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272,
                69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416,
                69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554,
                69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762,
                69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870,
                69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022,
                70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134,
                70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496,
                70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630,
                70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896,
                71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416,
                71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582,
                71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758,
                71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874,
                71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992,
                72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134,
                72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304,
                72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512,
                72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676,
                72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814,
                72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936,
                72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102,
                73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210,
                73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284,
                73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374,
                73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522,
                73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822,
                73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972,
                73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160,
                74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272,
                74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638,
                74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784,
                74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512,
                75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708,
                75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016,
                76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048,
                77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576,
                77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744,
                77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966,
                77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094,
                78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268,
                78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462,
                78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726,
                78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838,
                78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352,
                79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628,
                79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812,
                79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942,
                79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078,
                80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224,
                80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364,
                80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576,
                80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798,
                80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916,
                80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998,
                81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100,
                81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212,
                81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372,
                81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500,
                81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604,
                81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734,
                81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108,
                82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316,
                82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462,
                82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736,
                82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918,
                82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184,
                83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704,
                83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872,
                83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032,
                84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184,
                85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768,
                85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912,
                85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976,
                88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312,
                89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840,
                89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190,
                90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382,
                90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528,
                90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680,
                90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912,
                90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086,
                91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248,
                91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708,
                91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046,
                92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140,
                92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200,
                93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744,
                93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078,
                94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168,
                94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360,
                94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512,
                94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664,
                94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768,
                94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088,
                95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214,
                95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424,
                95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996,
                96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176,
                96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310,
                96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388,
                96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494,
                96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572,
                96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732,
                96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800,
                96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086,
                97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246,
                97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380,
                97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488,
                97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668,
                97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774,
                97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908,
                97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024,
                98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904,
                98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062,
                99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398,
                99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548,
                99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646,
                99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792,
                99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894,
                99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998,
                1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084,
                100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308,
                100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466,
                100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578,
                100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732,
                100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844,
                100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112,
                101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264,
                101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362,
                101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456,
                101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536,
                101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662,
                101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858,
                101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986,
                101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088,
                102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232,
                102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326,
                102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534,
                102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646,
                102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812,
                102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906,
                102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280,
                103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366,
                103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520,
                103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160,
                104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256,
                104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412,
                104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528,
                104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608,
                104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736,
                104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932,
                104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080,
                105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416,
                105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572,
                105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702,
                105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860,
                105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022,
                106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136,
                106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258,
                106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320,
                106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572,
                106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722,
                106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814,
                106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952,
                106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104,
                107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394,
                107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468,
                107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616,
                107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158,
                108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320,
                108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478,
                108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668,
                108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820,
                110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144,
                110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432,
                110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558,
                110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750,
                110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856,
                110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3,
                111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134,
                111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456,
                111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646,
                111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224,
                112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542,
                112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824,
                112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924,
                112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054,
                113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264,
                113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472,
                113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708,
                113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816,
                113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932,
                113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116,
                114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212,
                114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306,
                114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420,
                114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532,
                114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042,
                115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278,
                115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396,
                115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494,
                115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762,
                115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854,
                115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948,
                115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104,
                116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206,
                116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300,
                116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400,
                116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500,
                116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574,
                116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782,
                116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854,
                116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966,
                116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124,
                117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230,
                117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506,
                117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638,
                117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732,
                117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848,
                117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988,
                117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140,
                118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266,
                118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402,
                118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514,
                118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628,
                118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830,
                118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902,
                118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006,
                119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170,
                119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244,
                119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422,
                119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584,
                119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742,
                119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934,
                120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352,
                120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638,
                120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776,
                120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902,
                120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008,
                121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112,
                121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288,
                121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440,
                121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744,
                121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924,
                121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992,
                122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116,
                122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246,
                122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420,
                122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552,
                122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662,
                122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770,
                122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042,
                123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170,
                123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238,
                123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412,
                123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486,
                123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552,
                123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674,
                123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914,
                123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984,
                123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062,
                124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148,
                124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224,
                124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380,
                124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468,
                124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610,
                124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716,
                124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820,
                124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964,
                124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030,
                125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088,
                125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186,
                125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318,
                125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412,
                125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560,
                125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820,
                125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918,
                125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044,
                126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148,
                126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320,
                126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412,
                126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540,
                126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640,
                126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754,
                126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814,
                126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126,
                127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270,
                127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348,
                127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510,
                127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604,
                127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714,
                127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784,
                127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898,
                127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070,
                128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152,
                128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246,
                128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398,
                128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486,
                128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552,
                128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634,
                128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716,
                128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860,
                128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954,
                128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258,
                129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380,
                129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490,
                129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634,
                129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732,
                129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836,
                129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930,
                129938, 129940, 129954, 129956, 129960, 129974, 130010,
            ])),
            (Q.CODEWORD_TABLE = Int32Array.from([
                2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779,
                2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871,
                1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810,
                809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817,
                816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623,
                2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785,
                2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413,
                754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694,
                703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646,
                643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322,
                596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323,
                615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575,
                2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864,
                860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836,
                834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763,
                2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629,
                1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736,
                2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576,
                569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542,
                539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485,
                482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406,
                2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472,
                1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362,
                2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162,
                383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384,
                1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783,
                794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720,
                2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370,
                702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624,
                2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645,
                2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571,
                2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904,
                900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508,
                2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711,
                2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675,
                2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650,
                2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747,
                2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375,
                1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132,
                1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274,
                273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308,
                1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060,
                208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229,
                1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988,
                165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012,
                166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191,
                1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294,
                2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264,
                1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571,
                2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465,
                2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539,
                2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412,
                2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418,
                2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478,
                2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726,
                2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699,
                2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357,
                2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364,
                2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691,
                1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585,
                1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573,
                2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785,
                2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903,
                911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703,
                1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677,
                1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987,
                139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137,
                136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104,
                1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115,
                1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950,
                1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95,
                1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091,
                49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925,
                53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71,
                1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10,
                1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28,
                1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989,
                987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356,
                355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338,
                2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121,
                2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298,
                2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351,
                1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259,
                2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106,
                281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039,
                2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051,
                201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059,
                228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267,
                1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303,
                2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578,
                2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582,
                581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541,
                2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546,
                543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214,
                1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477,
                2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535,
                1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730,
                2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460,
                2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420,
                1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793,
                791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694,
                1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410,
                2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806,
                1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592,
                2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564,
                2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578,
                1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835,
                1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817,
                1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808,
                2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740,
                737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644,
                1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318,
                609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328,
                926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821,
                819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649,
                2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531,
                527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524,
                1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462,
                1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156,
                357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382,
                1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771,
                784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665,
                2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617,
                2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530,
                2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779,
                2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757,
                2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369,
                307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250,
                2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312,
                1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056,
                1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080,
                2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004,
                156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185,
                1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586,
                564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265,
                530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471,
                489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180,
                2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455,
                799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724,
                746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670,
                667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927,
                2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709,
                2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667,
                2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129,
                126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972,
                101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113,
                1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077,
                1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968,
                1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923,
                50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041,
                1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868,
                7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968,
                966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990,
                988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328,
                326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122,
                286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244,
                242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270,
                1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033,
                2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240,
                227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563,
                561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519,
                517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215,
                1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527,
                1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426,
                2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382,
                2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718,
                2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800,
                2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719,
                1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809,
                1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711,
                1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604,
                1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820,
                1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508,
                1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208,
                364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371,
                1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672,
                669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632,
                1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846,
                2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365,
                301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291,
                1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230,
                1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151,
                148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152,
                157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018,
                2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227,
                472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407,
                1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712,
                2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679,
                1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661,
                2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124,
                1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107,
                1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060,
                87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36,
                1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029,
                1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8,
                1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969,
                967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898,
                1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368,
                1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345,
                243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290,
                1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199,
                1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555,
                554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499,
                2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435,
                2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422,
                2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731,
                1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706,
                2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731,
                1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599,
                1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581,
                1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448,
                1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394,
                1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773,
                1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292,
                1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221,
                1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140,
                145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014,
                2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391,
                387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709,
                662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135,
                1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101,
                1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064,
                1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996,
                37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933,
                1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18,
                943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897,
                1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238,
                234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178,
                2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583,
                553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439,
                436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767,
                711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681,
                1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435,
                2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662,
                1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207,
                1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013,
                2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431,
                1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095,
                1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3,
                997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933,
                6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893,
                1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275,
                1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195,
                179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497,
                1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386,
                2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142,
                2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659,
                1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928,
                937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323,
                1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576,
                1543, 1540, 1484, 1481, 1478, 1491, 1700,
            ]));
        class mi {
            constructor(e, t) {
                (this.bits = e), (this.points = t);
            }
            getBits() {
                return this.bits;
            }
            getPoints() {
                return this.points;
            }
        }
        class ne {
            static detectMultiple(e, t, n) {
                let r = e.getBlackMatrix(),
                    i = ne.detect(n, r);
                return (
                    i.length ||
                        ((r = r.clone()), r.rotate180(), (i = ne.detect(n, r))),
                    new mi(r, i)
                );
            }
            static detect(e, t) {
                const n = new Array();
                let r = 0,
                    i = 0,
                    s = !1;
                for (; r < t.getHeight(); ) {
                    const o = ne.findVertices(t, r, i);
                    if (o[0] == null && o[3] == null) {
                        if (!s) break;
                        (s = !1), (i = 0);
                        for (const a of n)
                            a[1] != null &&
                                (r = Math.trunc(Math.max(r, a[1].getY()))),
                                a[3] != null &&
                                    (r = Math.max(r, Math.trunc(a[3].getY())));
                        r += ne.ROW_STEP;
                        continue;
                    }
                    if (((s = !0), n.push(o), !e)) break;
                    o[2] != null
                        ? ((i = Math.trunc(o[2].getX())),
                          (r = Math.trunc(o[2].getY())))
                        : ((i = Math.trunc(o[4].getX())),
                          (r = Math.trunc(o[4].getY())));
                }
                return n;
            }
            static findVertices(e, t, n) {
                const r = e.getHeight(),
                    i = e.getWidth(),
                    s = new Array(8);
                return (
                    ne.copyToResult(
                        s,
                        ne.findRowsWithPattern(e, r, i, t, n, ne.START_PATTERN),
                        ne.INDEXES_START_PATTERN
                    ),
                    s[4] != null &&
                        ((n = Math.trunc(s[4].getX())),
                        (t = Math.trunc(s[4].getY()))),
                    ne.copyToResult(
                        s,
                        ne.findRowsWithPattern(e, r, i, t, n, ne.STOP_PATTERN),
                        ne.INDEXES_STOP_PATTERN
                    ),
                    s
                );
            }
            static copyToResult(e, t, n) {
                for (let r = 0; r < n.length; r++) e[n[r]] = t[r];
            }
            static findRowsWithPattern(e, t, n, r, i, s) {
                const o = new Array(4);
                let a = !1;
                const c = new Int32Array(s.length);
                for (; r < t; r += ne.ROW_STEP) {
                    let x = ne.findGuardPattern(e, i, r, n, !1, s, c);
                    if (x != null) {
                        for (; r > 0; ) {
                            const A = ne.findGuardPattern(
                                e,
                                i,
                                --r,
                                n,
                                !1,
                                s,
                                c
                            );
                            if (A != null) x = A;
                            else {
                                r++;
                                break;
                            }
                        }
                        (o[0] = new j(x[0], r)),
                            (o[1] = new j(x[1], r)),
                            (a = !0);
                        break;
                    }
                }
                let f = r + 1;
                if (a) {
                    let x = 0,
                        A = Int32Array.from([
                            Math.trunc(o[0].getX()),
                            Math.trunc(o[1].getX()),
                        ]);
                    for (; f < t; f++) {
                        const m = ne.findGuardPattern(e, A[0], f, n, !1, s, c);
                        if (
                            m != null &&
                            Math.abs(A[0] - m[0]) < ne.MAX_PATTERN_DRIFT &&
                            Math.abs(A[1] - m[1]) < ne.MAX_PATTERN_DRIFT
                        )
                            (A = m), (x = 0);
                        else {
                            if (x > ne.SKIPPED_ROW_COUNT_MAX) break;
                            x++;
                        }
                    }
                    (f -= x + 1),
                        (o[2] = new j(A[0], f)),
                        (o[3] = new j(A[1], f));
                }
                return f - r < ne.BARCODE_MIN_HEIGHT && ce.fill(o, null), o;
            }
            static findGuardPattern(e, t, n, r, i, s, o) {
                ce.fillWithin(o, 0, o.length, 0);
                let a = t,
                    c = 0;
                for (; e.get(a, n) && a > 0 && c++ < ne.MAX_PIXEL_DRIFT; ) a--;
                let f = a,
                    x = 0,
                    A = s.length;
                for (let m = i; f < r; f++)
                    if (e.get(f, n) !== m) o[x]++;
                    else {
                        if (x === A - 1) {
                            if (
                                ne.patternMatchVariance(
                                    o,
                                    s,
                                    ne.MAX_INDIVIDUAL_VARIANCE
                                ) < ne.MAX_AVG_VARIANCE
                            )
                                return new Int32Array([a, f]);
                            (a += o[0] + o[1]),
                                K.arraycopy(o, 2, o, 0, x - 1),
                                (o[x - 1] = 0),
                                (o[x] = 0),
                                x--;
                        } else x++;
                        (o[x] = 1), (m = !m);
                    }
                return x === A - 1 &&
                    ne.patternMatchVariance(o, s, ne.MAX_INDIVIDUAL_VARIANCE) <
                        ne.MAX_AVG_VARIANCE
                    ? new Int32Array([a, f - 1])
                    : null;
            }
            static patternMatchVariance(e, t, n) {
                let r = e.length,
                    i = 0,
                    s = 0;
                for (let c = 0; c < r; c++) (i += e[c]), (s += t[c]);
                if (i < s) return 1 / 0;
                let o = i / s;
                n *= o;
                let a = 0;
                for (let c = 0; c < r; c++) {
                    let f = e[c],
                        x = t[c] * o,
                        A = f > x ? f - x : x - f;
                    if (A > n) return 1 / 0;
                    a += A;
                }
                return a / i;
            }
        }
        (ne.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])),
            (ne.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])),
            (ne.MAX_AVG_VARIANCE = 0.42),
            (ne.MAX_INDIVIDUAL_VARIANCE = 0.8),
            (ne.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])),
            (ne.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])),
            (ne.MAX_PIXEL_DRIFT = 3),
            (ne.MAX_PATTERN_DRIFT = 5),
            (ne.SKIPPED_ROW_COUNT_MAX = 25),
            (ne.ROW_STEP = 5),
            (ne.BARCODE_MIN_HEIGHT = 10);
        class Ze {
            constructor(e, t) {
                if (t.length === 0) throw new _();
                this.field = e;
                let n = t.length;
                if (n > 1 && t[0] === 0) {
                    let r = 1;
                    for (; r < n && t[r] === 0; ) r++;
                    r === n
                        ? (this.coefficients = new Int32Array([0]))
                        : ((this.coefficients = new Int32Array(n - r)),
                          K.arraycopy(
                              t,
                              r,
                              this.coefficients,
                              0,
                              this.coefficients.length
                          ));
                } else this.coefficients = t;
            }
            getCoefficients() {
                return this.coefficients;
            }
            getDegree() {
                return this.coefficients.length - 1;
            }
            isZero() {
                return this.coefficients[0] === 0;
            }
            getCoefficient(e) {
                return this.coefficients[this.coefficients.length - 1 - e];
            }
            evaluateAt(e) {
                if (e === 0) return this.getCoefficient(0);
                if (e === 1) {
                    let r = 0;
                    for (let i of this.coefficients) r = this.field.add(r, i);
                    return r;
                }
                let t = this.coefficients[0],
                    n = this.coefficients.length;
                for (let r = 1; r < n; r++)
                    t = this.field.add(
                        this.field.multiply(e, t),
                        this.coefficients[r]
                    );
                return t;
            }
            add(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "ModulusPolys do not have same ModulusGF field"
                    );
                if (this.isZero()) return e;
                if (e.isZero()) return this;
                let t = this.coefficients,
                    n = e.coefficients;
                if (t.length > n.length) {
                    let s = t;
                    (t = n), (n = s);
                }
                let r = new Int32Array(n.length),
                    i = n.length - t.length;
                K.arraycopy(n, 0, r, 0, i);
                for (let s = i; s < n.length; s++)
                    r[s] = this.field.add(t[s - i], n[s]);
                return new Ze(this.field, r);
            }
            subtract(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "ModulusPolys do not have same ModulusGF field"
                    );
                return e.isZero() ? this : this.add(e.negative());
            }
            multiply(e) {
                return e instanceof Ze
                    ? this.multiplyOther(e)
                    : this.multiplyScalar(e);
            }
            multiplyOther(e) {
                if (!this.field.equals(e.field))
                    throw new _(
                        "ModulusPolys do not have same ModulusGF field"
                    );
                if (this.isZero() || e.isZero())
                    return new Ze(this.field, new Int32Array([0]));
                let t = this.coefficients,
                    n = t.length,
                    r = e.coefficients,
                    i = r.length,
                    s = new Int32Array(n + i - 1);
                for (let o = 0; o < n; o++) {
                    let a = t[o];
                    for (let c = 0; c < i; c++)
                        s[o + c] = this.field.add(
                            s[o + c],
                            this.field.multiply(a, r[c])
                        );
                }
                return new Ze(this.field, s);
            }
            negative() {
                let e = this.coefficients.length,
                    t = new Int32Array(e);
                for (let n = 0; n < e; n++)
                    t[n] = this.field.subtract(0, this.coefficients[n]);
                return new Ze(this.field, t);
            }
            multiplyScalar(e) {
                if (e === 0) return new Ze(this.field, new Int32Array([0]));
                if (e === 1) return this;
                let t = this.coefficients.length,
                    n = new Int32Array(t);
                for (let r = 0; r < t; r++)
                    n[r] = this.field.multiply(this.coefficients[r], e);
                return new Ze(this.field, n);
            }
            multiplyByMonomial(e, t) {
                if (e < 0) throw new _();
                if (t === 0) return new Ze(this.field, new Int32Array([0]));
                let n = this.coefficients.length,
                    r = new Int32Array(n + e);
                for (let i = 0; i < n; i++)
                    r[i] = this.field.multiply(this.coefficients[i], t);
                return new Ze(this.field, r);
            }
            toString() {
                let e = new we();
                for (let t = this.getDegree(); t >= 0; t--) {
                    let n = this.getCoefficient(t);
                    n !== 0 &&
                        (n < 0
                            ? (e.append(" - "), (n = -n))
                            : e.length() > 0 && e.append(" + "),
                        (t === 0 || n !== 1) && e.append(n),
                        t !== 0 &&
                            (t === 1
                                ? e.append("x")
                                : (e.append("x^"), e.append(t))));
                }
                return e.toString();
            }
        }
        class Ii {
            add(e, t) {
                return (e + t) % this.modulus;
            }
            subtract(e, t) {
                return (this.modulus + e - t) % this.modulus;
            }
            exp(e) {
                return this.expTable[e];
            }
            log(e) {
                if (e === 0) throw new _();
                return this.logTable[e];
            }
            inverse(e) {
                if (e === 0) throw new bn();
                return this.expTable[this.modulus - this.logTable[e] - 1];
            }
            multiply(e, t) {
                return e === 0 || t === 0
                    ? 0
                    : this.expTable[
                          (this.logTable[e] + this.logTable[t]) %
                              (this.modulus - 1)
                      ];
            }
            getSize() {
                return this.modulus;
            }
            equals(e) {
                return e === this;
            }
        }
        class nr extends Ii {
            constructor(e, t) {
                super(),
                    (this.modulus = e),
                    (this.expTable = new Int32Array(e)),
                    (this.logTable = new Int32Array(e));
                let n = 1;
                for (let r = 0; r < e; r++)
                    (this.expTable[r] = n), (n = (n * t) % e);
                for (let r = 0; r < e - 1; r++)
                    this.logTable[this.expTable[r]] = r;
                (this.zero = new Ze(this, new Int32Array([0]))),
                    (this.one = new Ze(this, new Int32Array([1])));
            }
            getZero() {
                return this.zero;
            }
            getOne() {
                return this.one;
            }
            buildMonomial(e, t) {
                if (e < 0) throw new _();
                if (t === 0) return this.zero;
                let n = new Int32Array(e + 1);
                return (n[0] = t), new Ze(this, n);
            }
        }
        nr.PDF417_GF = new nr(Q.NUMBER_OF_CODEWORDS, 3);
        class Nr {
            constructor() {
                this.field = nr.PDF417_GF;
            }
            decode(e, t, n) {
                let r = new Ze(this.field, e),
                    i = new Int32Array(t),
                    s = !1;
                for (let I = t; I > 0; I--) {
                    let T = r.evaluateAt(this.field.exp(I));
                    (i[t - I] = T), T !== 0 && (s = !0);
                }
                if (!s) return 0;
                let o = this.field.getOne();
                if (n != null)
                    for (const I of n) {
                        let T = this.field.exp(e.length - 1 - I),
                            S = new Ze(
                                this.field,
                                new Int32Array([this.field.subtract(0, T), 1])
                            );
                        o = o.multiply(S);
                    }
                let a = new Ze(this.field, i),
                    c = this.runEuclideanAlgorithm(
                        this.field.buildMonomial(t, 1),
                        a,
                        t
                    ),
                    f = c[0],
                    x = c[1],
                    A = this.findErrorLocations(f),
                    m = this.findErrorMagnitudes(x, f, A);
                for (let I = 0; I < A.length; I++) {
                    let T = e.length - 1 - this.field.log(A[I]);
                    if (T < 0) throw J.getChecksumInstance();
                    e[T] = this.field.subtract(e[T], m[I]);
                }
                return A.length;
            }
            runEuclideanAlgorithm(e, t, n) {
                if (e.getDegree() < t.getDegree()) {
                    let A = e;
                    (e = t), (t = A);
                }
                let r = e,
                    i = t,
                    s = this.field.getZero(),
                    o = this.field.getOne();
                for (; i.getDegree() >= Math.round(n / 2); ) {
                    let A = r,
                        m = s;
                    if (((r = i), (s = o), r.isZero()))
                        throw J.getChecksumInstance();
                    i = A;
                    let I = this.field.getZero(),
                        T = r.getCoefficient(r.getDegree()),
                        S = this.field.inverse(T);
                    for (; i.getDegree() >= r.getDegree() && !i.isZero(); ) {
                        let M = i.getDegree() - r.getDegree(),
                            P = this.field.multiply(
                                i.getCoefficient(i.getDegree()),
                                S
                            );
                        (I = I.add(this.field.buildMonomial(M, P))),
                            (i = i.subtract(r.multiplyByMonomial(M, P)));
                    }
                    o = I.multiply(s).subtract(m).negative();
                }
                let a = o.getCoefficient(0);
                if (a === 0) throw J.getChecksumInstance();
                let c = this.field.inverse(a),
                    f = o.multiply(c),
                    x = i.multiply(c);
                return [f, x];
            }
            findErrorLocations(e) {
                let t = e.getDegree(),
                    n = new Int32Array(t),
                    r = 0;
                for (let i = 1; i < this.field.getSize() && r < t; i++)
                    e.evaluateAt(i) === 0 &&
                        ((n[r] = this.field.inverse(i)), r++);
                if (r !== t) throw J.getChecksumInstance();
                return n;
            }
            findErrorMagnitudes(e, t, n) {
                let r = t.getDegree(),
                    i = new Int32Array(r);
                for (let c = 1; c <= r; c++)
                    i[r - c] = this.field.multiply(c, t.getCoefficient(c));
                let s = new Ze(this.field, i),
                    o = n.length,
                    a = new Int32Array(o);
                for (let c = 0; c < o; c++) {
                    let f = this.field.inverse(n[c]),
                        x = this.field.subtract(0, e.evaluateAt(f)),
                        A = this.field.inverse(s.evaluateAt(f));
                    a[c] = this.field.multiply(x, A);
                }
                return a;
            }
        }
        class Kt {
            constructor(e, t, n, r, i) {
                e instanceof Kt
                    ? this.constructor_2(e)
                    : this.constructor_1(e, t, n, r, i);
            }
            constructor_1(e, t, n, r, i) {
                const s = t == null || n == null,
                    o = r == null || i == null;
                if (s && o) throw new R();
                s
                    ? ((t = new j(0, r.getY())), (n = new j(0, i.getY())))
                    : o &&
                      ((r = new j(e.getWidth() - 1, t.getY())),
                      (i = new j(e.getWidth() - 1, n.getY()))),
                    (this.image = e),
                    (this.topLeft = t),
                    (this.bottomLeft = n),
                    (this.topRight = r),
                    (this.bottomRight = i),
                    (this.minX = Math.trunc(Math.min(t.getX(), n.getX()))),
                    (this.maxX = Math.trunc(Math.max(r.getX(), i.getX()))),
                    (this.minY = Math.trunc(Math.min(t.getY(), r.getY()))),
                    (this.maxY = Math.trunc(Math.max(n.getY(), i.getY())));
            }
            constructor_2(e) {
                (this.image = e.image),
                    (this.topLeft = e.getTopLeft()),
                    (this.bottomLeft = e.getBottomLeft()),
                    (this.topRight = e.getTopRight()),
                    (this.bottomRight = e.getBottomRight()),
                    (this.minX = e.getMinX()),
                    (this.maxX = e.getMaxX()),
                    (this.minY = e.getMinY()),
                    (this.maxY = e.getMaxY());
            }
            static merge(e, t) {
                return e == null
                    ? t
                    : t == null
                    ? e
                    : new Kt(
                          e.image,
                          e.topLeft,
                          e.bottomLeft,
                          t.topRight,
                          t.bottomRight
                      );
            }
            addMissingRows(e, t, n) {
                let r = this.topLeft,
                    i = this.bottomLeft,
                    s = this.topRight,
                    o = this.bottomRight;
                if (e > 0) {
                    let a = n ? this.topLeft : this.topRight,
                        c = Math.trunc(a.getY() - e);
                    c < 0 && (c = 0);
                    let f = new j(a.getX(), c);
                    n ? (r = f) : (s = f);
                }
                if (t > 0) {
                    let a = n ? this.bottomLeft : this.bottomRight,
                        c = Math.trunc(a.getY() + t);
                    c >= this.image.getHeight() &&
                        (c = this.image.getHeight() - 1);
                    let f = new j(a.getX(), c);
                    n ? (i = f) : (o = f);
                }
                return new Kt(this.image, r, i, s, o);
            }
            getMinX() {
                return this.minX;
            }
            getMaxX() {
                return this.maxX;
            }
            getMinY() {
                return this.minY;
            }
            getMaxY() {
                return this.maxY;
            }
            getTopLeft() {
                return this.topLeft;
            }
            getTopRight() {
                return this.topRight;
            }
            getBottomLeft() {
                return this.bottomLeft;
            }
            getBottomRight() {
                return this.bottomRight;
            }
        }
        class Ti {
            constructor(e, t, n, r) {
                (this.columnCount = e),
                    (this.errorCorrectionLevel = r),
                    (this.rowCountUpperPart = t),
                    (this.rowCountLowerPart = n),
                    (this.rowCount = t + n);
            }
            getColumnCount() {
                return this.columnCount;
            }
            getErrorCorrectionLevel() {
                return this.errorCorrectionLevel;
            }
            getRowCount() {
                return this.rowCount;
            }
            getRowCountUpperPart() {
                return this.rowCountUpperPart;
            }
            getRowCountLowerPart() {
                return this.rowCountLowerPart;
            }
        }
        class An {
            constructor() {
                this.buffer = "";
            }
            static form(e, t) {
                let n = -1;
                function r(s, o, a, c, f, x) {
                    if (s === "%%") return "%";
                    if (t[++n] === void 0) return;
                    s = c ? parseInt(c.substr(1)) : void 0;
                    let A = f ? parseInt(f.substr(1)) : void 0,
                        m;
                    switch (x) {
                        case "s":
                            m = t[n];
                            break;
                        case "c":
                            m = t[n][0];
                            break;
                        case "f":
                            m = parseFloat(t[n]).toFixed(s);
                            break;
                        case "p":
                            m = parseFloat(t[n]).toPrecision(s);
                            break;
                        case "e":
                            m = parseFloat(t[n]).toExponential(s);
                            break;
                        case "x":
                            m = parseInt(t[n]).toString(A || 16);
                            break;
                        case "d":
                            m = parseFloat(
                                parseInt(t[n], A || 10).toPrecision(s)
                            ).toFixed(0);
                            break;
                    }
                    m =
                        typeof m == "object"
                            ? JSON.stringify(m)
                            : (+m).toString(A);
                    let I = parseInt(a),
                        T = a && a[0] + "" == "0" ? "0" : " ";
                    for (; m.length < I; ) m = o !== void 0 ? m + T : T + m;
                    return m;
                }
                let i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
                return e.replace(i, r);
            }
            format(e, ...t) {
                this.buffer += An.form(e, t);
            }
            toString() {
                return this.buffer;
            }
        }
        class Cn {
            constructor(e) {
                (this.boundingBox = new Kt(e)),
                    (this.codewords = new Array(e.getMaxY() - e.getMinY() + 1));
            }
            getCodewordNearby(e) {
                let t = this.getCodeword(e);
                if (t != null) return t;
                for (let n = 1; n < Cn.MAX_NEARBY_DISTANCE; n++) {
                    let r = this.imageRowToCodewordIndex(e) - n;
                    if (
                        (r >= 0 && ((t = this.codewords[r]), t != null)) ||
                        ((r = this.imageRowToCodewordIndex(e) + n),
                        r < this.codewords.length &&
                            ((t = this.codewords[r]), t != null))
                    )
                        return t;
                }
                return null;
            }
            imageRowToCodewordIndex(e) {
                return e - this.boundingBox.getMinY();
            }
            setCodeword(e, t) {
                this.codewords[this.imageRowToCodewordIndex(e)] = t;
            }
            getCodeword(e) {
                return this.codewords[this.imageRowToCodewordIndex(e)];
            }
            getBoundingBox() {
                return this.boundingBox;
            }
            getCodewords() {
                return this.codewords;
            }
            toString() {
                const e = new An();
                let t = 0;
                for (const n of this.codewords) {
                    if (n == null) {
                        e.format("%3d:    |   %n", t++);
                        continue;
                    }
                    e.format(
                        "%3d: %3d|%3d%n",
                        t++,
                        n.getRowNumber(),
                        n.getValue()
                    );
                }
                return e.toString();
            }
        }
        Cn.MAX_NEARBY_DISTANCE = 5;
        class En {
            constructor() {
                this.values = new Map();
            }
            setValue(e) {
                e = Math.trunc(e);
                let t = this.values.get(e);
                t == null && (t = 0), t++, this.values.set(e, t);
            }
            getValue() {
                let e = -1,
                    t = new Array();
                for (const [n, r] of this.values.entries()) {
                    const i = { getKey: () => n, getValue: () => r };
                    i.getValue() > e
                        ? ((e = i.getValue()), (t = []), t.push(i.getKey()))
                        : i.getValue() === e && t.push(i.getKey());
                }
                return Q.toIntArray(t);
            }
            getConfidence(e) {
                return this.values.get(e);
            }
        }
        class Mr extends Cn {
            constructor(e, t) {
                super(e), (this._isLeft = t);
            }
            setRowNumbers() {
                for (let e of this.getCodewords())
                    e != null && e.setRowNumberAsRowIndicatorColumn();
            }
            adjustCompleteIndicatorColumnRowNumbers(e) {
                let t = this.getCodewords();
                this.setRowNumbers(), this.removeIncorrectCodewords(t, e);
                let n = this.getBoundingBox(),
                    r = this._isLeft ? n.getTopLeft() : n.getTopRight(),
                    i = this._isLeft ? n.getBottomLeft() : n.getBottomRight(),
                    s = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                    o = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
                    a = -1,
                    c = 1,
                    f = 0;
                for (let x = s; x < o; x++) {
                    if (t[x] == null) continue;
                    let A = t[x],
                        m = A.getRowNumber() - a;
                    if (m === 0) f++;
                    else if (m === 1)
                        (c = Math.max(c, f)), (f = 1), (a = A.getRowNumber());
                    else if (
                        m < 0 ||
                        A.getRowNumber() >= e.getRowCount() ||
                        m > x
                    )
                        t[x] = null;
                    else {
                        let I;
                        c > 2 ? (I = (c - 2) * m) : (I = m);
                        let T = I >= x;
                        for (let S = 1; S <= I && !T; S++) T = t[x - S] != null;
                        T ? (t[x] = null) : ((a = A.getRowNumber()), (f = 1));
                    }
                }
            }
            getRowHeights() {
                let e = this.getBarcodeMetadata();
                if (e == null) return null;
                this.adjustIncompleteIndicatorColumnRowNumbers(e);
                let t = new Int32Array(e.getRowCount());
                for (let n of this.getCodewords())
                    if (n != null) {
                        let r = n.getRowNumber();
                        if (r >= t.length) continue;
                        t[r]++;
                    }
                return t;
            }
            adjustIncompleteIndicatorColumnRowNumbers(e) {
                let t = this.getBoundingBox(),
                    n = this._isLeft ? t.getTopLeft() : t.getTopRight(),
                    r = this._isLeft ? t.getBottomLeft() : t.getBottomRight(),
                    i = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                    s = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                    o = this.getCodewords(),
                    a = -1;
                for (let c = i; c < s; c++) {
                    if (o[c] == null) continue;
                    let f = o[c];
                    f.setRowNumberAsRowIndicatorColumn();
                    let x = f.getRowNumber() - a;
                    x === 0 ||
                        (x === 1
                            ? (a = f.getRowNumber())
                            : f.getRowNumber() >= e.getRowCount()
                            ? (o[c] = null)
                            : (a = f.getRowNumber()));
                }
            }
            getBarcodeMetadata() {
                let e = this.getCodewords(),
                    t = new En(),
                    n = new En(),
                    r = new En(),
                    i = new En();
                for (let o of e) {
                    if (o == null) continue;
                    o.setRowNumberAsRowIndicatorColumn();
                    let a = o.getValue() % 30,
                        c = o.getRowNumber();
                    switch ((this._isLeft || (c += 2), c % 3)) {
                        case 0:
                            n.setValue(a * 3 + 1);
                            break;
                        case 1:
                            i.setValue(a / 3), r.setValue(a % 3);
                            break;
                        case 2:
                            t.setValue(a + 1);
                            break;
                    }
                }
                if (
                    t.getValue().length === 0 ||
                    n.getValue().length === 0 ||
                    r.getValue().length === 0 ||
                    i.getValue().length === 0 ||
                    t.getValue()[0] < 1 ||
                    n.getValue()[0] + r.getValue()[0] < Q.MIN_ROWS_IN_BARCODE ||
                    n.getValue()[0] + r.getValue()[0] > Q.MAX_ROWS_IN_BARCODE
                )
                    return null;
                let s = new Ti(
                    t.getValue()[0],
                    n.getValue()[0],
                    r.getValue()[0],
                    i.getValue()[0]
                );
                return this.removeIncorrectCodewords(e, s), s;
            }
            removeIncorrectCodewords(e, t) {
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    if (e[n] == null) continue;
                    let i = r.getValue() % 30,
                        s = r.getRowNumber();
                    if (s > t.getRowCount()) {
                        e[n] = null;
                        continue;
                    }
                    switch ((this._isLeft || (s += 2), s % 3)) {
                        case 0:
                            i * 3 + 1 !== t.getRowCountUpperPart() &&
                                (e[n] = null);
                            break;
                        case 1:
                            (Math.trunc(i / 3) !==
                                t.getErrorCorrectionLevel() ||
                                i % 3 !== t.getRowCountLowerPart()) &&
                                (e[n] = null);
                            break;
                        case 2:
                            i + 1 !== t.getColumnCount() && (e[n] = null);
                            break;
                    }
                }
            }
            isLeft() {
                return this._isLeft;
            }
            toString() {
                return (
                    "IsLeft: " +
                    this._isLeft +
                    `
` +
                    super.toString()
                );
            }
        }
        class pn {
            constructor(e, t) {
                (this.ADJUST_ROW_NUMBER_SKIP = 2),
                    (this.barcodeMetadata = e),
                    (this.barcodeColumnCount = e.getColumnCount()),
                    (this.boundingBox = t),
                    (this.detectionResultColumns = new Array(
                        this.barcodeColumnCount + 2
                    ));
            }
            getDetectionResultColumns() {
                this.adjustIndicatorColumnRowNumbers(
                    this.detectionResultColumns[0]
                ),
                    this.adjustIndicatorColumnRowNumbers(
                        this.detectionResultColumns[this.barcodeColumnCount + 1]
                    );
                let e = Q.MAX_CODEWORDS_IN_BARCODE,
                    t;
                do (t = e), (e = this.adjustRowNumbersAndGetCount());
                while (e > 0 && e < t);
                return this.detectionResultColumns;
            }
            adjustIndicatorColumnRowNumbers(e) {
                e != null &&
                    e.adjustCompleteIndicatorColumnRowNumbers(
                        this.barcodeMetadata
                    );
            }
            adjustRowNumbersAndGetCount() {
                let e = this.adjustRowNumbersByRow();
                if (e === 0) return 0;
                for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
                    let n = this.detectionResultColumns[t].getCodewords();
                    for (let r = 0; r < n.length; r++)
                        n[r] != null &&
                            (n[r].hasValidRowNumber() ||
                                this.adjustRowNumbers(t, r, n));
                }
                return e;
            }
            adjustRowNumbersByRow() {
                return (
                    this.adjustRowNumbersFromBothRI(),
                    this.adjustRowNumbersFromLRI() +
                        this.adjustRowNumbersFromRRI()
                );
            }
            adjustRowNumbersFromBothRI() {
                if (
                    this.detectionResultColumns[0] == null ||
                    this.detectionResultColumns[this.barcodeColumnCount + 1] ==
                        null
                )
                    return;
                let e = this.detectionResultColumns[0].getCodewords(),
                    t =
                        this.detectionResultColumns[
                            this.barcodeColumnCount + 1
                        ].getCodewords();
                for (let n = 0; n < e.length; n++)
                    if (
                        e[n] != null &&
                        t[n] != null &&
                        e[n].getRowNumber() === t[n].getRowNumber()
                    )
                        for (let r = 1; r <= this.barcodeColumnCount; r++) {
                            let i =
                                this.detectionResultColumns[r].getCodewords()[
                                    n
                                ];
                            i != null &&
                                (i.setRowNumber(e[n].getRowNumber()),
                                i.hasValidRowNumber() ||
                                    (this.detectionResultColumns[
                                        r
                                    ].getCodewords()[n] = null));
                        }
            }
            adjustRowNumbersFromRRI() {
                if (
                    this.detectionResultColumns[this.barcodeColumnCount + 1] ==
                    null
                )
                    return 0;
                let e = 0,
                    t =
                        this.detectionResultColumns[
                            this.barcodeColumnCount + 1
                        ].getCodewords();
                for (let n = 0; n < t.length; n++) {
                    if (t[n] == null) continue;
                    let r = t[n].getRowNumber(),
                        i = 0;
                    for (
                        let s = this.barcodeColumnCount + 1;
                        s > 0 && i < this.ADJUST_ROW_NUMBER_SKIP;
                        s--
                    ) {
                        let o =
                            this.detectionResultColumns[s].getCodewords()[n];
                        o != null &&
                            ((i = pn.adjustRowNumberIfValid(r, i, o)),
                            o.hasValidRowNumber() || e++);
                    }
                }
                return e;
            }
            adjustRowNumbersFromLRI() {
                if (this.detectionResultColumns[0] == null) return 0;
                let e = 0,
                    t = this.detectionResultColumns[0].getCodewords();
                for (let n = 0; n < t.length; n++) {
                    if (t[n] == null) continue;
                    let r = t[n].getRowNumber(),
                        i = 0;
                    for (
                        let s = 1;
                        s < this.barcodeColumnCount + 1 &&
                        i < this.ADJUST_ROW_NUMBER_SKIP;
                        s++
                    ) {
                        let o =
                            this.detectionResultColumns[s].getCodewords()[n];
                        o != null &&
                            ((i = pn.adjustRowNumberIfValid(r, i, o)),
                            o.hasValidRowNumber() || e++);
                    }
                }
                return e;
            }
            static adjustRowNumberIfValid(e, t, n) {
                return (
                    n == null ||
                        n.hasValidRowNumber() ||
                        (n.isValidRowNumber(e)
                            ? (n.setRowNumber(e), (t = 0))
                            : ++t),
                    t
                );
            }
            adjustRowNumbers(e, t, n) {
                if (!this.detectionResultColumns[e - 1]) return;
                let r = n[t],
                    i = this.detectionResultColumns[e - 1].getCodewords(),
                    s = i;
                this.detectionResultColumns[e + 1] != null &&
                    (s = this.detectionResultColumns[e + 1].getCodewords());
                let o = new Array(14);
                (o[2] = i[t]),
                    (o[3] = s[t]),
                    t > 0 &&
                        ((o[0] = n[t - 1]),
                        (o[4] = i[t - 1]),
                        (o[5] = s[t - 1])),
                    t > 1 &&
                        ((o[8] = n[t - 2]),
                        (o[10] = i[t - 2]),
                        (o[11] = s[t - 2])),
                    t < n.length - 1 &&
                        ((o[1] = n[t + 1]),
                        (o[6] = i[t + 1]),
                        (o[7] = s[t + 1])),
                    t < n.length - 2 &&
                        ((o[9] = n[t + 2]),
                        (o[12] = i[t + 2]),
                        (o[13] = s[t + 2]));
                for (let a of o) if (pn.adjustRowNumber(r, a)) return;
            }
            static adjustRowNumber(e, t) {
                return t == null
                    ? !1
                    : t.hasValidRowNumber() && t.getBucket() === e.getBucket()
                    ? (e.setRowNumber(t.getRowNumber()), !0)
                    : !1;
            }
            getBarcodeColumnCount() {
                return this.barcodeColumnCount;
            }
            getBarcodeRowCount() {
                return this.barcodeMetadata.getRowCount();
            }
            getBarcodeECLevel() {
                return this.barcodeMetadata.getErrorCorrectionLevel();
            }
            setBoundingBox(e) {
                this.boundingBox = e;
            }
            getBoundingBox() {
                return this.boundingBox;
            }
            setDetectionResultColumn(e, t) {
                this.detectionResultColumns[e] = t;
            }
            getDetectionResultColumn(e) {
                return this.detectionResultColumns[e];
            }
            toString() {
                let e = this.detectionResultColumns[0];
                e == null &&
                    (e =
                        this.detectionResultColumns[
                            this.barcodeColumnCount + 1
                        ]);
                let t = new An();
                for (let n = 0; n < e.getCodewords().length; n++) {
                    t.format("CW %3d:", n);
                    for (let r = 0; r < this.barcodeColumnCount + 2; r++) {
                        if (this.detectionResultColumns[r] == null) {
                            t.format("    |   ");
                            continue;
                        }
                        let i =
                            this.detectionResultColumns[r].getCodewords()[n];
                        if (i == null) {
                            t.format("    |   ");
                            continue;
                        }
                        t.format(" %3d|%3d", i.getRowNumber(), i.getValue());
                    }
                    t.format("%n");
                }
                return t.toString();
            }
        }
        class mn {
            constructor(e, t, n, r) {
                (this.rowNumber = mn.BARCODE_ROW_UNKNOWN),
                    (this.startX = Math.trunc(e)),
                    (this.endX = Math.trunc(t)),
                    (this.bucket = Math.trunc(n)),
                    (this.value = Math.trunc(r));
            }
            hasValidRowNumber() {
                return this.isValidRowNumber(this.rowNumber);
            }
            isValidRowNumber(e) {
                return (
                    e !== mn.BARCODE_ROW_UNKNOWN && this.bucket === (e % 3) * 3
                );
            }
            setRowNumberAsRowIndicatorColumn() {
                this.rowNumber = Math.trunc(
                    Math.trunc(this.value / 30) * 3 +
                        Math.trunc(this.bucket / 3)
                );
            }
            getWidth() {
                return this.endX - this.startX;
            }
            getStartX() {
                return this.startX;
            }
            getEndX() {
                return this.endX;
            }
            getBucket() {
                return this.bucket;
            }
            getValue() {
                return this.value;
            }
            getRowNumber() {
                return this.rowNumber;
            }
            setRowNumber(e) {
                this.rowNumber = e;
            }
            toString() {
                return this.rowNumber + "|" + this.value;
            }
        }
        mn.BARCODE_ROW_UNKNOWN = -1;
        class at {
            static initialize() {
                for (let e = 0; e < Q.SYMBOL_TABLE.length; e++) {
                    let t = Q.SYMBOL_TABLE[e],
                        n = t & 1;
                    for (let r = 0; r < Q.BARS_IN_MODULE; r++) {
                        let i = 0;
                        for (; (t & 1) === n; ) (i += 1), (t >>= 1);
                        (n = t & 1),
                            at.RATIOS_TABLE[e] ||
                                (at.RATIOS_TABLE[e] = new Array(
                                    Q.BARS_IN_MODULE
                                )),
                            (at.RATIOS_TABLE[e][Q.BARS_IN_MODULE - r - 1] =
                                Math.fround(i / Q.MODULES_IN_CODEWORD));
                    }
                }
                this.bSymbolTableReady = !0;
            }
            static getDecodedValue(e) {
                let t = at.getDecodedCodewordValue(at.sampleBitCounts(e));
                return t !== -1 ? t : at.getClosestDecodedValue(e);
            }
            static sampleBitCounts(e) {
                let t = ue.sum(e),
                    n = new Int32Array(Q.BARS_IN_MODULE),
                    r = 0,
                    i = 0;
                for (let s = 0; s < Q.MODULES_IN_CODEWORD; s++) {
                    let o =
                        t / (2 * Q.MODULES_IN_CODEWORD) +
                        (s * t) / Q.MODULES_IN_CODEWORD;
                    i + e[r] <= o && ((i += e[r]), r++), n[r]++;
                }
                return n;
            }
            static getDecodedCodewordValue(e) {
                let t = at.getBitValue(e);
                return Q.getCodeword(t) === -1 ? -1 : t;
            }
            static getBitValue(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++)
                    for (let r = 0; r < e[n]; r++)
                        t = (t << 1) | (n % 2 === 0 ? 1 : 0);
                return Math.trunc(t);
            }
            static getClosestDecodedValue(e) {
                let t = ue.sum(e),
                    n = new Array(Q.BARS_IN_MODULE);
                if (t > 1)
                    for (let s = 0; s < n.length; s++)
                        n[s] = Math.fround(e[s] / t);
                let r = Nn.MAX_VALUE,
                    i = -1;
                this.bSymbolTableReady || at.initialize();
                for (let s = 0; s < at.RATIOS_TABLE.length; s++) {
                    let o = 0,
                        a = at.RATIOS_TABLE[s];
                    for (let c = 0; c < Q.BARS_IN_MODULE; c++) {
                        let f = Math.fround(a[c] - n[c]);
                        if (((o += Math.fround(f * f)), o >= r)) break;
                    }
                    o < r && ((r = o), (i = Q.SYMBOL_TABLE[s]));
                }
                return i;
            }
        }
        (at.bSymbolTableReady = !1),
            (at.RATIOS_TABLE = new Array(Q.SYMBOL_TABLE.length).map(
                (g) => new Array(Q.BARS_IN_MODULE)
            ));
        class Or {
            constructor() {
                (this.segmentCount = -1),
                    (this.fileSize = -1),
                    (this.timestamp = -1),
                    (this.checksum = -1);
            }
            getSegmentIndex() {
                return this.segmentIndex;
            }
            setSegmentIndex(e) {
                this.segmentIndex = e;
            }
            getFileId() {
                return this.fileId;
            }
            setFileId(e) {
                this.fileId = e;
            }
            getOptionalData() {
                return this.optionalData;
            }
            setOptionalData(e) {
                this.optionalData = e;
            }
            isLastSegment() {
                return this.lastSegment;
            }
            setLastSegment(e) {
                this.lastSegment = e;
            }
            getSegmentCount() {
                return this.segmentCount;
            }
            setSegmentCount(e) {
                this.segmentCount = e;
            }
            getSender() {
                return this.sender || null;
            }
            setSender(e) {
                this.sender = e;
            }
            getAddressee() {
                return this.addressee || null;
            }
            setAddressee(e) {
                this.addressee = e;
            }
            getFileName() {
                return this.fileName;
            }
            setFileName(e) {
                this.fileName = e;
            }
            getFileSize() {
                return this.fileSize;
            }
            setFileSize(e) {
                this.fileSize = e;
            }
            getChecksum() {
                return this.checksum;
            }
            setChecksum(e) {
                this.checksum = e;
            }
            getTimestamp() {
                return this.timestamp;
            }
            setTimestamp(e) {
                this.timestamp = e;
            }
        }
        class _r {
            static parseLong(e, t = void 0) {
                return parseInt(e, t);
            }
        }
        class Dr extends C {}
        Dr.kind = "NullPointerException";
        class yi {
            writeBytes(e) {
                this.writeBytesOffset(e, 0, e.length);
            }
            writeBytesOffset(e, t, n) {
                if (e == null) throw new Dr();
                if (
                    t < 0 ||
                    t > e.length ||
                    n < 0 ||
                    t + n > e.length ||
                    t + n < 0
                )
                    throw new Ee();
                if (n === 0) return;
                for (let r = 0; r < n; r++) this.write(e[t + r]);
            }
            flush() {}
            close() {}
        }
        class Si extends C {}
        class bi extends yi {
            constructor(e = 32) {
                if ((super(), (this.count = 0), e < 0))
                    throw new _("Negative initial size: " + e);
                this.buf = new Uint8Array(e);
            }
            ensureCapacity(e) {
                e - this.buf.length > 0 && this.grow(e);
            }
            grow(e) {
                let n = this.buf.length << 1;
                if ((n - e < 0 && (n = e), n < 0)) {
                    if (e < 0) throw new Si();
                    n = Z.MAX_VALUE;
                }
                this.buf = ce.copyOfUint8Array(this.buf, n);
            }
            write(e) {
                this.ensureCapacity(this.count + 1),
                    (this.buf[this.count] = e),
                    (this.count += 1);
            }
            writeBytesOffset(e, t, n) {
                if (t < 0 || t > e.length || n < 0 || t + n - e.length > 0)
                    throw new Ee();
                this.ensureCapacity(this.count + n),
                    K.arraycopy(e, t, this.buf, this.count, n),
                    (this.count += n);
            }
            writeTo(e) {
                e.writeBytesOffset(this.buf, 0, this.count);
            }
            reset() {
                this.count = 0;
            }
            toByteArray() {
                return ce.copyOfUint8Array(this.buf, this.count);
            }
            size() {
                return this.count;
            }
            toString(e) {
                return e
                    ? typeof e == "string"
                        ? this.toString_string(e)
                        : this.toString_number(e)
                    : this.toString_void();
            }
            toString_void() {
                return new String(this.buf).toString();
            }
            toString_string(e) {
                return new String(this.buf).toString();
            }
            toString_number(e) {
                return new String(this.buf).toString();
            }
            close() {}
        }
        var pe;
        (function (g) {
            (g[(g.ALPHA = 0)] = "ALPHA"),
                (g[(g.LOWER = 1)] = "LOWER"),
                (g[(g.MIXED = 2)] = "MIXED"),
                (g[(g.PUNCT = 3)] = "PUNCT"),
                (g[(g.ALPHA_SHIFT = 4)] = "ALPHA_SHIFT"),
                (g[(g.PUNCT_SHIFT = 5)] = "PUNCT_SHIFT");
        })(pe || (pe = {}));
        function Rr() {
            if (typeof window < "u") return window.BigInt || null;
            if (typeof yn < "u") return yn.BigInt || null;
            if (typeof self < "u") return self.BigInt || null;
            throw new Error("Can't search globals for BigInt!");
        }
        let Ln;
        function zt(g) {
            if ((typeof Ln > "u" && (Ln = Rr()), Ln === null))
                throw new Error("BigInt is not supported!");
            return Ln(g);
        }
        function Ni() {
            let g = [];
            g[0] = zt(1);
            let e = zt(900);
            g[1] = e;
            for (let t = 2; t < 16; t++) g[t] = g[t - 1] * e;
            return g;
        }
        class N {
            static decode(e, t) {
                let n = new we(""),
                    r = k.ISO8859_1;
                n.enableDecoding(r);
                let i = 1,
                    s = e[i++],
                    o = new Or();
                for (; i < e[0]; ) {
                    switch (s) {
                        case N.TEXT_COMPACTION_MODE_LATCH:
                            i = N.textCompaction(e, i, n);
                            break;
                        case N.BYTE_COMPACTION_MODE_LATCH:
                        case N.BYTE_COMPACTION_MODE_LATCH_6:
                            i = N.byteCompaction(s, e, r, i, n);
                            break;
                        case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                            n.append(e[i++]);
                            break;
                        case N.NUMERIC_COMPACTION_MODE_LATCH:
                            i = N.numericCompaction(e, i, n);
                            break;
                        case N.ECI_CHARSET:
                            k.getCharacterSetECIByValue(e[i++]);
                            break;
                        case N.ECI_GENERAL_PURPOSE:
                            i += 2;
                            break;
                        case N.ECI_USER_DEFINED:
                            i++;
                            break;
                        case N.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            i = N.decodeMacroBlock(e, i, o);
                            break;
                        case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case N.MACRO_PDF417_TERMINATOR:
                            throw new U();
                        default:
                            i--, (i = N.textCompaction(e, i, n));
                            break;
                    }
                    if (i < e.length) s = e[i++];
                    else throw U.getFormatInstance();
                }
                if (n.length() === 0) throw U.getFormatInstance();
                let a = new fn(null, n.toString(), null, t);
                return a.setOther(o), a;
            }
            static decodeMacroBlock(e, t, n) {
                if (t + N.NUMBER_OF_SEQUENCE_CODEWORDS > e[0])
                    throw U.getFormatInstance();
                let r = new Int32Array(N.NUMBER_OF_SEQUENCE_CODEWORDS);
                for (let o = 0; o < N.NUMBER_OF_SEQUENCE_CODEWORDS; o++, t++)
                    r[o] = e[t];
                n.setSegmentIndex(
                    Z.parseInt(
                        N.decodeBase900toBase10(
                            r,
                            N.NUMBER_OF_SEQUENCE_CODEWORDS
                        )
                    )
                );
                let i = new we();
                (t = N.textCompaction(e, t, i)), n.setFileId(i.toString());
                let s = -1;
                for (
                    e[t] === N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = t + 1);
                    t < e[0];

                )
                    switch (e[t]) {
                        case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                            switch ((t++, e[t])) {
                                case N.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                    let o = new we();
                                    (t = N.textCompaction(e, t + 1, o)),
                                        n.setFileName(o.toString());
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                    let a = new we();
                                    (t = N.textCompaction(e, t + 1, a)),
                                        n.setSender(a.toString());
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                    let c = new we();
                                    (t = N.textCompaction(e, t + 1, c)),
                                        n.setAddressee(c.toString());
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                    let f = new we();
                                    (t = N.numericCompaction(e, t + 1, f)),
                                        n.setSegmentCount(
                                            Z.parseInt(f.toString())
                                        );
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                    let x = new we();
                                    (t = N.numericCompaction(e, t + 1, x)),
                                        n.setTimestamp(
                                            _r.parseLong(x.toString())
                                        );
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                    let A = new we();
                                    (t = N.numericCompaction(e, t + 1, A)),
                                        n.setChecksum(Z.parseInt(A.toString()));
                                    break;
                                case N.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                    let m = new we();
                                    (t = N.numericCompaction(e, t + 1, m)),
                                        n.setFileSize(
                                            _r.parseLong(m.toString())
                                        );
                                    break;
                                default:
                                    throw U.getFormatInstance();
                            }
                            break;
                        case N.MACRO_PDF417_TERMINATOR:
                            t++, n.setLastSegment(!0);
                            break;
                        default:
                            throw U.getFormatInstance();
                    }
                if (s !== -1) {
                    let o = t - s;
                    n.isLastSegment() && o--,
                        n.setOptionalData(ce.copyOfRange(e, s, s + o));
                }
                return t;
            }
            static textCompaction(e, t, n) {
                let r = new Int32Array((e[0] - t) * 2),
                    i = new Int32Array((e[0] - t) * 2),
                    s = 0,
                    o = !1;
                for (; t < e[0] && !o; ) {
                    let a = e[t++];
                    if (a < N.TEXT_COMPACTION_MODE_LATCH)
                        (r[s] = a / 30), (r[s + 1] = a % 30), (s += 2);
                    else
                        switch (a) {
                            case N.TEXT_COMPACTION_MODE_LATCH:
                                r[s++] = N.TEXT_COMPACTION_MODE_LATCH;
                                break;
                            case N.BYTE_COMPACTION_MODE_LATCH:
                            case N.BYTE_COMPACTION_MODE_LATCH_6:
                            case N.NUMERIC_COMPACTION_MODE_LATCH:
                            case N.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                            case N.MACRO_PDF417_TERMINATOR:
                                t--, (o = !0);
                                break;
                            case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                (r[s] = N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE),
                                    (a = e[t++]),
                                    (i[s] = a),
                                    s++;
                                break;
                        }
                }
                return N.decodeTextCompaction(r, i, s, n), t;
            }
            static decodeTextCompaction(e, t, n, r) {
                let i = pe.ALPHA,
                    s = pe.ALPHA,
                    o = 0;
                for (; o < n; ) {
                    let a = e[o],
                        c = "";
                    switch (i) {
                        case pe.ALPHA:
                            if (a < 26) c = String.fromCharCode(65 + a);
                            else
                                switch (a) {
                                    case 26:
                                        c = " ";
                                        break;
                                    case N.LL:
                                        i = pe.LOWER;
                                        break;
                                    case N.ML:
                                        i = pe.MIXED;
                                        break;
                                    case N.PS:
                                        (s = i), (i = pe.PUNCT_SHIFT);
                                        break;
                                    case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[o]);
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                        case pe.LOWER:
                            if (a < 26) c = String.fromCharCode(97 + a);
                            else
                                switch (a) {
                                    case 26:
                                        c = " ";
                                        break;
                                    case N.AS:
                                        (s = i), (i = pe.ALPHA_SHIFT);
                                        break;
                                    case N.ML:
                                        i = pe.MIXED;
                                        break;
                                    case N.PS:
                                        (s = i), (i = pe.PUNCT_SHIFT);
                                        break;
                                    case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[o]);
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                        case pe.MIXED:
                            if (a < N.PL) c = N.MIXED_CHARS[a];
                            else
                                switch (a) {
                                    case N.PL:
                                        i = pe.PUNCT;
                                        break;
                                    case 26:
                                        c = " ";
                                        break;
                                    case N.LL:
                                        i = pe.LOWER;
                                        break;
                                    case N.AL:
                                        i = pe.ALPHA;
                                        break;
                                    case N.PS:
                                        (s = i), (i = pe.PUNCT_SHIFT);
                                        break;
                                    case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[o]);
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                        case pe.PUNCT:
                            if (a < N.PAL) c = N.PUNCT_CHARS[a];
                            else
                                switch (a) {
                                    case N.PAL:
                                        i = pe.ALPHA;
                                        break;
                                    case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[o]);
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                        case pe.ALPHA_SHIFT:
                            if (((i = s), a < 26))
                                c = String.fromCharCode(65 + a);
                            else
                                switch (a) {
                                    case 26:
                                        c = " ";
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                        case pe.PUNCT_SHIFT:
                            if (((i = s), a < N.PAL)) c = N.PUNCT_CHARS[a];
                            else
                                switch (a) {
                                    case N.PAL:
                                        i = pe.ALPHA;
                                        break;
                                    case N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[o]);
                                        break;
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                        i = pe.ALPHA;
                                        break;
                                }
                            break;
                    }
                    c !== "" && r.append(c), o++;
                }
            }
            static byteCompaction(e, t, n, r, i) {
                let s = new bi(),
                    o = 0,
                    a = 0,
                    c = !1;
                switch (e) {
                    case N.BYTE_COMPACTION_MODE_LATCH:
                        let f = new Int32Array(6),
                            x = t[r++];
                        for (; r < t[0] && !c; )
                            switch (
                                ((f[o++] = x),
                                (a = 900 * a + x),
                                (x = t[r++]),
                                x)
                            ) {
                                case N.TEXT_COMPACTION_MODE_LATCH:
                                case N.BYTE_COMPACTION_MODE_LATCH:
                                case N.NUMERIC_COMPACTION_MODE_LATCH:
                                case N.BYTE_COMPACTION_MODE_LATCH_6:
                                case N.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                case N.MACRO_PDF417_TERMINATOR:
                                    r--, (c = !0);
                                    break;
                                default:
                                    if (o % 5 === 0 && o > 0) {
                                        for (let A = 0; A < 6; ++A)
                                            s.write(
                                                Number(zt(a) >> zt(8 * (5 - A)))
                                            );
                                        (a = 0), (o = 0);
                                    }
                                    break;
                            }
                        r === t[0] &&
                            x < N.TEXT_COMPACTION_MODE_LATCH &&
                            (f[o++] = x);
                        for (let A = 0; A < o; A++) s.write(f[A]);
                        break;
                    case N.BYTE_COMPACTION_MODE_LATCH_6:
                        for (; r < t[0] && !c; ) {
                            let A = t[r++];
                            if (A < N.TEXT_COMPACTION_MODE_LATCH)
                                o++, (a = 900 * a + A);
                            else
                                switch (A) {
                                    case N.TEXT_COMPACTION_MODE_LATCH:
                                    case N.BYTE_COMPACTION_MODE_LATCH:
                                    case N.NUMERIC_COMPACTION_MODE_LATCH:
                                    case N.BYTE_COMPACTION_MODE_LATCH_6:
                                    case N.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case N.MACRO_PDF417_TERMINATOR:
                                        r--, (c = !0);
                                        break;
                                }
                            if (o % 5 === 0 && o > 0) {
                                for (let m = 0; m < 6; ++m)
                                    s.write(Number(zt(a) >> zt(8 * (5 - m))));
                                (a = 0), (o = 0);
                            }
                        }
                        break;
                }
                return i.append(qe.decode(s.toByteArray(), n)), r;
            }
            static numericCompaction(e, t, n) {
                let r = 0,
                    i = !1,
                    s = new Int32Array(N.MAX_NUMERIC_CODEWORDS);
                for (; t < e[0] && !i; ) {
                    let o = e[t++];
                    if (
                        (t === e[0] && (i = !0),
                        o < N.TEXT_COMPACTION_MODE_LATCH)
                    )
                        (s[r] = o), r++;
                    else
                        switch (o) {
                            case N.TEXT_COMPACTION_MODE_LATCH:
                            case N.BYTE_COMPACTION_MODE_LATCH:
                            case N.BYTE_COMPACTION_MODE_LATCH_6:
                            case N.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            case N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                            case N.MACRO_PDF417_TERMINATOR:
                                t--, (i = !0);
                                break;
                        }
                    (r % N.MAX_NUMERIC_CODEWORDS === 0 ||
                        o === N.NUMERIC_COMPACTION_MODE_LATCH ||
                        i) &&
                        r > 0 &&
                        (n.append(N.decodeBase900toBase10(s, r)), (r = 0));
                }
                return t;
            }
            static decodeBase900toBase10(e, t) {
                let n = zt(0);
                for (let i = 0; i < t; i++) n += N.EXP900[t - i - 1] * zt(e[i]);
                let r = n.toString();
                if (r.charAt(0) !== "1") throw new U();
                return r.substring(1);
            }
        }
        (N.TEXT_COMPACTION_MODE_LATCH = 900),
            (N.BYTE_COMPACTION_MODE_LATCH = 901),
            (N.NUMERIC_COMPACTION_MODE_LATCH = 902),
            (N.BYTE_COMPACTION_MODE_LATCH_6 = 924),
            (N.ECI_USER_DEFINED = 925),
            (N.ECI_GENERAL_PURPOSE = 926),
            (N.ECI_CHARSET = 927),
            (N.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928),
            (N.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923),
            (N.MACRO_PDF417_TERMINATOR = 922),
            (N.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913),
            (N.MAX_NUMERIC_CODEWORDS = 15),
            (N.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0),
            (N.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1),
            (N.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2),
            (N.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3),
            (N.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4),
            (N.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5),
            (N.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6),
            (N.PL = 25),
            (N.LL = 27),
            (N.AS = 27),
            (N.ML = 28),
            (N.AL = 28),
            (N.PS = 29),
            (N.PAL = 29),
            (N.PUNCT_CHARS = `;<>@[\\]_\`~!\r	,:
-.$/"|*()?{}'`),
            (N.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^"),
            (N.EXP900 = Rr() ? Ni() : []),
            (N.NUMBER_OF_SEQUENCE_CODEWORDS = 2);
        class re {
            constructor() {}
            static decode(e, t, n, r, i, s, o) {
                let a = new Kt(e, t, n, r, i),
                    c = null,
                    f = null,
                    x;
                for (let I = !0; ; I = !1) {
                    if (
                        (t != null &&
                            (c = re.getRowIndicatorColumn(e, a, t, !0, s, o)),
                        r != null &&
                            (f = re.getRowIndicatorColumn(e, a, r, !1, s, o)),
                        (x = re.merge(c, f)),
                        x == null)
                    )
                        throw R.getNotFoundInstance();
                    let T = x.getBoundingBox();
                    if (
                        I &&
                        T != null &&
                        (T.getMinY() < a.getMinY() || T.getMaxY() > a.getMaxY())
                    )
                        a = T;
                    else break;
                }
                x.setBoundingBox(a);
                let A = x.getBarcodeColumnCount() + 1;
                x.setDetectionResultColumn(0, c),
                    x.setDetectionResultColumn(A, f);
                let m = c != null;
                for (let I = 1; I <= A; I++) {
                    let T = m ? I : A - I;
                    if (x.getDetectionResultColumn(T) !== void 0) continue;
                    let S;
                    T === 0 || T === A
                        ? (S = new Mr(a, T === 0))
                        : (S = new Cn(a)),
                        x.setDetectionResultColumn(T, S);
                    let M = -1,
                        P = M;
                    for (let F = a.getMinY(); F <= a.getMaxY(); F++) {
                        if (
                            ((M = re.getStartColumn(x, T, F, m)),
                            M < 0 || M > a.getMaxX())
                        ) {
                            if (P === -1) continue;
                            M = P;
                        }
                        let B = re.detectCodeword(
                            e,
                            a.getMinX(),
                            a.getMaxX(),
                            m,
                            M,
                            F,
                            s,
                            o
                        );
                        B != null &&
                            (S.setCodeword(F, B),
                            (P = M),
                            (s = Math.min(s, B.getWidth())),
                            (o = Math.max(o, B.getWidth())));
                    }
                }
                return re.createDecoderResult(x);
            }
            static merge(e, t) {
                if (e == null && t == null) return null;
                let n = re.getBarcodeMetadata(e, t);
                if (n == null) return null;
                let r = Kt.merge(
                    re.adjustBoundingBox(e),
                    re.adjustBoundingBox(t)
                );
                return new pn(n, r);
            }
            static adjustBoundingBox(e) {
                if (e == null) return null;
                let t = e.getRowHeights();
                if (t == null) return null;
                let n = re.getMax(t),
                    r = 0;
                for (let o of t) if (((r += n - o), o > 0)) break;
                let i = e.getCodewords();
                for (let o = 0; r > 0 && i[o] == null; o++) r--;
                let s = 0;
                for (
                    let o = t.length - 1;
                    o >= 0 && ((s += n - t[o]), !(t[o] > 0));
                    o--
                );
                for (let o = i.length - 1; s > 0 && i[o] == null; o--) s--;
                return e.getBoundingBox().addMissingRows(r, s, e.isLeft());
            }
            static getMax(e) {
                let t = -1;
                for (let n of e) t = Math.max(t, n);
                return t;
            }
            static getBarcodeMetadata(e, t) {
                let n;
                if (e == null || (n = e.getBarcodeMetadata()) == null)
                    return t == null ? null : t.getBarcodeMetadata();
                let r;
                return t == null || (r = t.getBarcodeMetadata()) == null
                    ? n
                    : n.getColumnCount() !== r.getColumnCount() &&
                      n.getErrorCorrectionLevel() !==
                          r.getErrorCorrectionLevel() &&
                      n.getRowCount() !== r.getRowCount()
                    ? null
                    : n;
            }
            static getRowIndicatorColumn(e, t, n, r, i, s) {
                let o = new Mr(t, r);
                for (let a = 0; a < 2; a++) {
                    let c = a === 0 ? 1 : -1,
                        f = Math.trunc(Math.trunc(n.getX()));
                    for (
                        let x = Math.trunc(Math.trunc(n.getY()));
                        x <= t.getMaxY() && x >= t.getMinY();
                        x += c
                    ) {
                        let A = re.detectCodeword(
                            e,
                            0,
                            e.getWidth(),
                            r,
                            f,
                            x,
                            i,
                            s
                        );
                        A != null &&
                            (o.setCodeword(x, A),
                            r ? (f = A.getStartX()) : (f = A.getEndX()));
                    }
                }
                return o;
            }
            static adjustCodewordCount(e, t) {
                let n = t[0][1],
                    r = n.getValue(),
                    i =
                        e.getBarcodeColumnCount() * e.getBarcodeRowCount() -
                        re.getNumberOfECCodeWords(e.getBarcodeECLevel());
                if (r.length === 0) {
                    if (i < 1 || i > Q.MAX_CODEWORDS_IN_BARCODE)
                        throw R.getNotFoundInstance();
                    n.setValue(i);
                } else r[0] !== i && n.setValue(i);
            }
            static createDecoderResult(e) {
                let t = re.createBarcodeMatrix(e);
                re.adjustCodewordCount(e, t);
                let n = new Array(),
                    r = new Int32Array(
                        e.getBarcodeRowCount() * e.getBarcodeColumnCount()
                    ),
                    i = [],
                    s = new Array();
                for (let a = 0; a < e.getBarcodeRowCount(); a++)
                    for (let c = 0; c < e.getBarcodeColumnCount(); c++) {
                        let f = t[a][c + 1].getValue(),
                            x = a * e.getBarcodeColumnCount() + c;
                        f.length === 0
                            ? n.push(x)
                            : f.length === 1
                            ? (r[x] = f[0])
                            : (s.push(x), i.push(f));
                    }
                let o = new Array(i.length);
                for (let a = 0; a < o.length; a++) o[a] = i[a];
                return re.createDecoderResultFromAmbiguousValues(
                    e.getBarcodeECLevel(),
                    r,
                    Q.toIntArray(n),
                    Q.toIntArray(s),
                    o
                );
            }
            static createDecoderResultFromAmbiguousValues(e, t, n, r, i) {
                let s = new Int32Array(r.length),
                    o = 100;
                for (; o-- > 0; ) {
                    for (let a = 0; a < s.length; a++) t[r[a]] = i[a][s[a]];
                    try {
                        return re.decodeCodewords(t, e, n);
                    } catch (a) {
                        if (!(a instanceof J)) throw a;
                    }
                    if (s.length === 0) throw J.getChecksumInstance();
                    for (let a = 0; a < s.length; a++)
                        if (s[a] < i[a].length - 1) {
                            s[a]++;
                            break;
                        } else if (((s[a] = 0), a === s.length - 1))
                            throw J.getChecksumInstance();
                }
                throw J.getChecksumInstance();
            }
            static createBarcodeMatrix(e) {
                let t = Array.from(
                    { length: e.getBarcodeRowCount() },
                    () => new Array(e.getBarcodeColumnCount() + 2)
                );
                for (let r = 0; r < t.length; r++)
                    for (let i = 0; i < t[r].length; i++) t[r][i] = new En();
                let n = 0;
                for (let r of e.getDetectionResultColumns()) {
                    if (r != null) {
                        for (let i of r.getCodewords())
                            if (i != null) {
                                let s = i.getRowNumber();
                                if (s >= 0) {
                                    if (s >= t.length) continue;
                                    t[s][n].setValue(i.getValue());
                                }
                            }
                    }
                    n++;
                }
                return t;
            }
            static isValidBarcodeColumn(e, t) {
                return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
            }
            static getStartColumn(e, t, n, r) {
                let i = r ? 1 : -1,
                    s = null;
                if (
                    (re.isValidBarcodeColumn(e, t - i) &&
                        (s = e.getDetectionResultColumn(t - i).getCodeword(n)),
                    s != null)
                )
                    return r ? s.getEndX() : s.getStartX();
                if (
                    ((s = e.getDetectionResultColumn(t).getCodewordNearby(n)),
                    s != null)
                )
                    return r ? s.getStartX() : s.getEndX();
                if (
                    (re.isValidBarcodeColumn(e, t - i) &&
                        (s = e
                            .getDetectionResultColumn(t - i)
                            .getCodewordNearby(n)),
                    s != null)
                )
                    return r ? s.getEndX() : s.getStartX();
                let o = 0;
                for (; re.isValidBarcodeColumn(e, t - i); ) {
                    t -= i;
                    for (let a of e.getDetectionResultColumn(t).getCodewords())
                        if (a != null)
                            return (
                                (r ? a.getEndX() : a.getStartX()) +
                                i * o * (a.getEndX() - a.getStartX())
                            );
                    o++;
                }
                return r
                    ? e.getBoundingBox().getMinX()
                    : e.getBoundingBox().getMaxX();
            }
            static detectCodeword(e, t, n, r, i, s, o, a) {
                i = re.adjustCodewordStartColumn(e, t, n, r, i, s);
                let c = re.getModuleBitCount(e, t, n, r, i, s);
                if (c == null) return null;
                let f,
                    x = ue.sum(c);
                if (r) f = i + x;
                else {
                    for (let I = 0; I < c.length / 2; I++) {
                        let T = c[I];
                        (c[I] = c[c.length - 1 - I]), (c[c.length - 1 - I] = T);
                    }
                    (f = i), (i = f - x);
                }
                if (!re.checkCodewordSkew(x, o, a)) return null;
                let A = at.getDecodedValue(c),
                    m = Q.getCodeword(A);
                return m === -1
                    ? null
                    : new mn(i, f, re.getCodewordBucketNumber(A), m);
            }
            static getModuleBitCount(e, t, n, r, i, s) {
                let o = i,
                    a = new Int32Array(8),
                    c = 0,
                    f = r ? 1 : -1,
                    x = r;
                for (; (r ? o < n : o >= t) && c < a.length; )
                    e.get(o, s) === x ? (a[c]++, (o += f)) : (c++, (x = !x));
                return c === a.length ||
                    (o === (r ? n : t) && c === a.length - 1)
                    ? a
                    : null;
            }
            static getNumberOfECCodeWords(e) {
                return 2 << e;
            }
            static adjustCodewordStartColumn(e, t, n, r, i, s) {
                let o = i,
                    a = r ? -1 : 1;
                for (let c = 0; c < 2; c++) {
                    for (; (r ? o >= t : o < n) && r === e.get(o, s); ) {
                        if (Math.abs(i - o) > re.CODEWORD_SKEW_SIZE) return i;
                        o += a;
                    }
                    (a = -a), (r = !r);
                }
                return o;
            }
            static checkCodewordSkew(e, t, n) {
                return (
                    t - re.CODEWORD_SKEW_SIZE <= e &&
                    e <= n + re.CODEWORD_SKEW_SIZE
                );
            }
            static decodeCodewords(e, t, n) {
                if (e.length === 0) throw U.getFormatInstance();
                let r = 1 << (t + 1),
                    i = re.correctErrors(e, n, r);
                re.verifyCodewordCount(e, r);
                let s = N.decode(e, "" + t);
                return s.setErrorsCorrected(i), s.setErasures(n.length), s;
            }
            static correctErrors(e, t, n) {
                if (
                    (t != null && t.length > n / 2 + re.MAX_ERRORS) ||
                    n < 0 ||
                    n > re.MAX_EC_CODEWORDS
                )
                    throw J.getChecksumInstance();
                return re.errorCorrection.decode(e, n, t);
            }
            static verifyCodewordCount(e, t) {
                if (e.length < 4) throw U.getFormatInstance();
                let n = e[0];
                if (n > e.length) throw U.getFormatInstance();
                if (n === 0)
                    if (t < e.length) e[0] = e.length - t;
                    else throw U.getFormatInstance();
            }
            static getBitCountForCodeword(e) {
                let t = new Int32Array(8),
                    n = 0,
                    r = t.length - 1;
                for (; !((e & 1) !== n && ((n = e & 1), r--, r < 0)); )
                    t[r]++, (e >>= 1);
                return t;
            }
            static getCodewordBucketNumber(e) {
                return e instanceof Int32Array
                    ? this.getCodewordBucketNumber_Int32Array(e)
                    : this.getCodewordBucketNumber_number(e);
            }
            static getCodewordBucketNumber_number(e) {
                return re.getCodewordBucketNumber(re.getBitCountForCodeword(e));
            }
            static getCodewordBucketNumber_Int32Array(e) {
                return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
            }
            static toString(e) {
                let t = new An();
                for (let n = 0; n < e.length; n++) {
                    t.format("Row %2d: ", n);
                    for (let r = 0; r < e[n].length; r++) {
                        let i = e[n][r];
                        i.getValue().length === 0
                            ? t.format("        ", null)
                            : t.format(
                                  "%4d(%2d)",
                                  i.getValue()[0],
                                  i.getConfidence(i.getValue()[0])
                              );
                    }
                    t.format("%n");
                }
                return t.toString();
            }
        }
        (re.CODEWORD_SKEW_SIZE = 2),
            (re.MAX_ERRORS = 3),
            (re.MAX_EC_CODEWORDS = 512),
            (re.errorCorrection = new Nr());
        class Qe {
            decode(e, t = null) {
                let n = Qe.decode(e, t, !1);
                if (n == null || n.length === 0 || n[0] == null)
                    throw R.getNotFoundInstance();
                return n[0];
            }
            decodeMultiple(e, t = null) {
                try {
                    return Qe.decode(e, t, !0);
                } catch (n) {
                    throw n instanceof U || n instanceof J
                        ? R.getNotFoundInstance()
                        : n;
                }
            }
            static decode(e, t, n) {
                const r = new Array(),
                    i = ne.detectMultiple(e, t, n);
                for (const s of i.getPoints()) {
                    const o = re.decode(
                            i.getBits(),
                            s[4],
                            s[5],
                            s[6],
                            s[7],
                            Qe.getMinCodewordWidth(s),
                            Qe.getMaxCodewordWidth(s)
                        ),
                        a = new tt(
                            o.getText(),
                            o.getRawBytes(),
                            void 0,
                            s,
                            Y.PDF_417
                        );
                    a.putMetadata(Ge.ERROR_CORRECTION_LEVEL, o.getECLevel());
                    const c = o.getOther();
                    c != null && a.putMetadata(Ge.PDF417_EXTRA_METADATA, c),
                        r.push(a);
                }
                return r.map((s) => s);
            }
            static getMaxWidth(e, t) {
                return e == null || t == null
                    ? 0
                    : Math.trunc(Math.abs(e.getX() - t.getX()));
            }
            static getMinWidth(e, t) {
                return e == null || t == null
                    ? Z.MAX_VALUE
                    : Math.trunc(Math.abs(e.getX() - t.getX()));
            }
            static getMaxCodewordWidth(e) {
                return Math.floor(
                    Math.max(
                        Math.max(
                            Qe.getMaxWidth(e[0], e[4]),
                            (Qe.getMaxWidth(e[6], e[2]) *
                                Q.MODULES_IN_CODEWORD) /
                                Q.MODULES_IN_STOP_PATTERN
                        ),
                        Math.max(
                            Qe.getMaxWidth(e[1], e[5]),
                            (Qe.getMaxWidth(e[7], e[3]) *
                                Q.MODULES_IN_CODEWORD) /
                                Q.MODULES_IN_STOP_PATTERN
                        )
                    )
                );
            }
            static getMinCodewordWidth(e) {
                return Math.floor(
                    Math.min(
                        Math.min(
                            Qe.getMinWidth(e[0], e[4]),
                            (Qe.getMinWidth(e[6], e[2]) *
                                Q.MODULES_IN_CODEWORD) /
                                Q.MODULES_IN_STOP_PATTERN
                        ),
                        Math.min(
                            Qe.getMinWidth(e[1], e[5]),
                            (Qe.getMinWidth(e[7], e[3]) *
                                Q.MODULES_IN_CODEWORD) /
                                Q.MODULES_IN_STOP_PATTERN
                        )
                    )
                );
            }
            reset() {}
        }
        class Bn extends C {}
        Bn.kind = "ReaderException";
        class vr {
            constructor(e, t) {
                (this.verbose = e === !0), t && this.setHints(t);
            }
            decode(e, t) {
                return t && this.setHints(t), this.decodeInternal(e);
            }
            decodeWithState(e) {
                return (
                    (this.readers === null || this.readers === void 0) &&
                        this.setHints(null),
                    this.decodeInternal(e)
                );
            }
            setHints(e) {
                this.hints = e;
                const t = !w(e) && e.get(fe.TRY_HARDER) === !0,
                    n = w(e) ? null : e.get(fe.POSSIBLE_FORMATS),
                    r = new Array();
                if (!w(n)) {
                    const i = n.some(
                        (s) =>
                            s === Y.UPC_A ||
                            s === Y.UPC_E ||
                            s === Y.EAN_13 ||
                            s === Y.EAN_8 ||
                            s === Y.CODABAR ||
                            s === Y.CODE_39 ||
                            s === Y.CODE_93 ||
                            s === Y.CODE_128 ||
                            s === Y.ITF ||
                            s === Y.RSS_14 ||
                            s === Y.RSS_EXPANDED
                    );
                    i && !t && r.push(new rn(e, this.verbose)),
                        n.includes(Y.QR_CODE) && r.push(new Vt()),
                        n.includes(Y.DATA_MATRIX) && r.push(new Ht()),
                        n.includes(Y.AZTEC) && r.push(new On()),
                        n.includes(Y.PDF_417) && r.push(new Qe()),
                        i && t && r.push(new rn(e, this.verbose));
                }
                r.length === 0 &&
                    (t || r.push(new rn(e, this.verbose)),
                    r.push(new Vt()),
                    r.push(new Ht()),
                    r.push(new On()),
                    r.push(new Qe()),
                    t && r.push(new rn(e, this.verbose))),
                    (this.readers = r);
            }
            reset() {
                if (this.readers !== null)
                    for (const e of this.readers) e.reset();
            }
            decodeInternal(e) {
                if (this.readers === null)
                    throw new Bn(
                        "No readers where selected, nothing can be read."
                    );
                for (const t of this.readers)
                    try {
                        return t.decode(e, this.hints);
                    } catch (n) {
                        if (n instanceof Bn) continue;
                    }
                throw new R(
                    "No MultiFormat Readers were able to detect the code."
                );
            }
        }
        class Mi extends Yt {
            constructor(e = null, t = 500) {
                const n = new vr();
                n.setHints(e), super(n, t);
            }
            decodeBitmap(e) {
                return this.reader.decodeWithState(e);
            }
        }
        class Oi extends Yt {
            constructor(e = 500) {
                super(new Qe(), e);
            }
        }
        class _i extends Yt {
            constructor(e = 500) {
                super(new Vt(), e);
            }
        }
        var rr;
        (function (g) {
            (g[(g.ERROR_CORRECTION = 0)] = "ERROR_CORRECTION"),
                (g[(g.CHARACTER_SET = 1)] = "CHARACTER_SET"),
                (g[(g.DATA_MATRIX_SHAPE = 2)] = "DATA_MATRIX_SHAPE"),
                (g[(g.MIN_SIZE = 3)] = "MIN_SIZE"),
                (g[(g.MAX_SIZE = 4)] = "MAX_SIZE"),
                (g[(g.MARGIN = 5)] = "MARGIN"),
                (g[(g.PDF417_COMPACT = 6)] = "PDF417_COMPACT"),
                (g[(g.PDF417_COMPACTION = 7)] = "PDF417_COMPACTION"),
                (g[(g.PDF417_DIMENSIONS = 8)] = "PDF417_DIMENSIONS"),
                (g[(g.AZTEC_LAYERS = 9)] = "AZTEC_LAYERS"),
                (g[(g.QR_VERSION = 10)] = "QR_VERSION");
        })(rr || (rr = {}));
        var Ve = rr;
        class ir {
            constructor(e) {
                (this.field = e),
                    (this.cachedGenerators = []),
                    this.cachedGenerators.push(new it(e, Int32Array.from([1])));
            }
            buildGenerator(e) {
                const t = this.cachedGenerators;
                if (e >= t.length) {
                    let n = t[t.length - 1];
                    const r = this.field;
                    for (let i = t.length; i <= e; i++) {
                        const s = n.multiply(
                            new it(
                                r,
                                Int32Array.from([
                                    1,
                                    r.exp(i - 1 + r.getGeneratorBase()),
                                ])
                            )
                        );
                        t.push(s), (n = s);
                    }
                }
                return t[e];
            }
            encode(e, t) {
                if (t === 0) throw new _("No error correction bytes");
                const n = e.length - t;
                if (n <= 0) throw new _("No data bytes provided");
                const r = this.buildGenerator(t),
                    i = new Int32Array(n);
                K.arraycopy(e, 0, i, 0, n);
                let s = new it(this.field, i);
                s = s.multiplyByMonomial(t, 1);
                const a = s.divide(r)[1].getCoefficients(),
                    c = t - a.length;
                for (let f = 0; f < c; f++) e[n + f] = 0;
                K.arraycopy(a, 0, e, n + c, a.length);
            }
        }
        class Le {
            constructor() {}
            static applyMaskPenaltyRule1(e) {
                return (
                    Le.applyMaskPenaltyRule1Internal(e, !0) +
                    Le.applyMaskPenaltyRule1Internal(e, !1)
                );
            }
            static applyMaskPenaltyRule2(e) {
                let t = 0;
                const n = e.getArray(),
                    r = e.getWidth(),
                    i = e.getHeight();
                for (let s = 0; s < i - 1; s++) {
                    const o = n[s];
                    for (let a = 0; a < r - 1; a++) {
                        const c = o[a];
                        c === o[a + 1] &&
                            c === n[s + 1][a] &&
                            c === n[s + 1][a + 1] &&
                            t++;
                    }
                }
                return Le.N2 * t;
            }
            static applyMaskPenaltyRule3(e) {
                let t = 0;
                const n = e.getArray(),
                    r = e.getWidth(),
                    i = e.getHeight();
                for (let s = 0; s < i; s++)
                    for (let o = 0; o < r; o++) {
                        const a = n[s];
                        o + 6 < r &&
                            a[o] === 1 &&
                            a[o + 1] === 0 &&
                            a[o + 2] === 1 &&
                            a[o + 3] === 1 &&
                            a[o + 4] === 1 &&
                            a[o + 5] === 0 &&
                            a[o + 6] === 1 &&
                            (Le.isWhiteHorizontal(a, o - 4, o) ||
                                Le.isWhiteHorizontal(a, o + 7, o + 11)) &&
                            t++,
                            s + 6 < i &&
                                n[s][o] === 1 &&
                                n[s + 1][o] === 0 &&
                                n[s + 2][o] === 1 &&
                                n[s + 3][o] === 1 &&
                                n[s + 4][o] === 1 &&
                                n[s + 5][o] === 0 &&
                                n[s + 6][o] === 1 &&
                                (Le.isWhiteVertical(n, o, s - 4, s) ||
                                    Le.isWhiteVertical(n, o, s + 7, s + 11)) &&
                                t++;
                    }
                return t * Le.N3;
            }
            static isWhiteHorizontal(e, t, n) {
                (t = Math.max(t, 0)), (n = Math.min(n, e.length));
                for (let r = t; r < n; r++) if (e[r] === 1) return !1;
                return !0;
            }
            static isWhiteVertical(e, t, n, r) {
                (n = Math.max(n, 0)), (r = Math.min(r, e.length));
                for (let i = n; i < r; i++) if (e[i][t] === 1) return !1;
                return !0;
            }
            static applyMaskPenaltyRule4(e) {
                let t = 0;
                const n = e.getArray(),
                    r = e.getWidth(),
                    i = e.getHeight();
                for (let a = 0; a < i; a++) {
                    const c = n[a];
                    for (let f = 0; f < r; f++) c[f] === 1 && t++;
                }
                const s = e.getHeight() * e.getWidth();
                return Math.floor((Math.abs(t * 2 - s) * 10) / s) * Le.N4;
            }
            static getDataMaskBit(e, t, n) {
                let r, i;
                switch (e) {
                    case 0:
                        r = (n + t) & 1;
                        break;
                    case 1:
                        r = n & 1;
                        break;
                    case 2:
                        r = t % 3;
                        break;
                    case 3:
                        r = (n + t) % 3;
                        break;
                    case 4:
                        r = (Math.floor(n / 2) + Math.floor(t / 3)) & 1;
                        break;
                    case 5:
                        (i = n * t), (r = (i & 1) + (i % 3));
                        break;
                    case 6:
                        (i = n * t), (r = ((i & 1) + (i % 3)) & 1);
                        break;
                    case 7:
                        (i = n * t), (r = ((i % 3) + ((n + t) & 1)) & 1);
                        break;
                    default:
                        throw new _("Invalid mask pattern: " + e);
                }
                return r === 0;
            }
            static applyMaskPenaltyRule1Internal(e, t) {
                let n = 0;
                const r = t ? e.getHeight() : e.getWidth(),
                    i = t ? e.getWidth() : e.getHeight(),
                    s = e.getArray();
                for (let o = 0; o < r; o++) {
                    let a = 0,
                        c = -1;
                    for (let f = 0; f < i; f++) {
                        const x = t ? s[o][f] : s[f][o];
                        x === c
                            ? a++
                            : (a >= 5 && (n += Le.N1 + (a - 5)),
                              (a = 1),
                              (c = x));
                    }
                    a >= 5 && (n += Le.N1 + (a - 5));
                }
                return n;
            }
        }
        (Le.N1 = 3), (Le.N2 = 3), (Le.N3 = 40), (Le.N4 = 10);
        class Pn {
            constructor(e, t) {
                (this.width = e), (this.height = t);
                const n = new Array(t);
                for (let r = 0; r !== t; r++) n[r] = new Uint8Array(e);
                this.bytes = n;
            }
            getHeight() {
                return this.height;
            }
            getWidth() {
                return this.width;
            }
            get(e, t) {
                return this.bytes[t][e];
            }
            getArray() {
                return this.bytes;
            }
            setNumber(e, t, n) {
                this.bytes[t][e] = n;
            }
            setBoolean(e, t, n) {
                this.bytes[t][e] = n ? 1 : 0;
            }
            clear(e) {
                for (const t of this.bytes) ce.fill(t, e);
            }
            equals(e) {
                if (!(e instanceof Pn)) return !1;
                const t = e;
                if (this.width !== t.width || this.height !== t.height)
                    return !1;
                for (let n = 0, r = this.height; n < r; ++n) {
                    const i = this.bytes[n],
                        s = t.bytes[n];
                    for (let o = 0, a = this.width; o < a; ++o)
                        if (i[o] !== s[o]) return !1;
                }
                return !0;
            }
            toString() {
                const e = new we();
                for (let t = 0, n = this.height; t < n; ++t) {
                    const r = this.bytes[t];
                    for (let i = 0, s = this.width; i < s; ++i)
                        switch (r[i]) {
                            case 0:
                                e.append(" 0");
                                break;
                            case 1:
                                e.append(" 1");
                                break;
                            default:
                                e.append("  ");
                                break;
                        }
                    e.append(`
`);
                }
                return e.toString();
            }
        }
        class qt {
            constructor() {
                this.maskPattern = -1;
            }
            getMode() {
                return this.mode;
            }
            getECLevel() {
                return this.ecLevel;
            }
            getVersion() {
                return this.version;
            }
            getMaskPattern() {
                return this.maskPattern;
            }
            getMatrix() {
                return this.matrix;
            }
            toString() {
                const e = new we();
                return (
                    e.append(`<<
`),
                    e.append(" mode: "),
                    e.append(this.mode ? this.mode.toString() : "null"),
                    e.append(`
 ecLevel: `),
                    e.append(this.ecLevel ? this.ecLevel.toString() : "null"),
                    e.append(`
 version: `),
                    e.append(this.version ? this.version.toString() : "null"),
                    e.append(`
 maskPattern: `),
                    e.append(this.maskPattern.toString()),
                    this.matrix
                        ? (e.append(`
 matrix:
`),
                          e.append(this.matrix.toString()))
                        : e.append(`
 matrix: null
`),
                    e.append(`>>
`),
                    e.toString()
                );
            }
            setMode(e) {
                this.mode = e;
            }
            setECLevel(e) {
                this.ecLevel = e;
            }
            setVersion(e) {
                this.version = e;
            }
            setMaskPattern(e) {
                this.maskPattern = e;
            }
            setMatrix(e) {
                this.matrix = e;
            }
            static isValidMaskPattern(e) {
                return e >= 0 && e < qt.NUM_MASK_PATTERNS;
            }
        }
        qt.NUM_MASK_PATTERNS = 8;
        class Ie extends C {}
        Ie.kind = "WriterException";
        class X {
            constructor() {}
            static clearMatrix(e) {
                e.clear(255);
            }
            static buildMatrix(e, t, n, r, i) {
                X.clearMatrix(i),
                    X.embedBasicPatterns(n, i),
                    X.embedTypeInfo(t, r, i),
                    X.maybeEmbedVersionInfo(n, i),
                    X.embedDataBits(e, r, i);
            }
            static embedBasicPatterns(e, t) {
                X.embedPositionDetectionPatternsAndSeparators(t),
                    X.embedDarkDotAtLeftBottomCorner(t),
                    X.maybeEmbedPositionAdjustmentPatterns(e, t),
                    X.embedTimingPatterns(t);
            }
            static embedTypeInfo(e, t, n) {
                const r = new ae();
                X.makeTypeInfoBits(e, t, r);
                for (let i = 0, s = r.getSize(); i < s; ++i) {
                    const o = r.get(r.getSize() - 1 - i),
                        a = X.TYPE_INFO_COORDINATES[i],
                        c = a[0],
                        f = a[1];
                    if ((n.setBoolean(c, f, o), i < 8)) {
                        const x = n.getWidth() - i - 1,
                            A = 8;
                        n.setBoolean(x, A, o);
                    } else {
                        const A = n.getHeight() - 7 + (i - 8);
                        n.setBoolean(8, A, o);
                    }
                }
            }
            static maybeEmbedVersionInfo(e, t) {
                if (e.getVersionNumber() < 7) return;
                const n = new ae();
                X.makeVersionInfoBits(e, n);
                let r = 6 * 3 - 1;
                for (let i = 0; i < 6; ++i)
                    for (let s = 0; s < 3; ++s) {
                        const o = n.get(r);
                        r--,
                            t.setBoolean(i, t.getHeight() - 11 + s, o),
                            t.setBoolean(t.getHeight() - 11 + s, i, o);
                    }
            }
            static embedDataBits(e, t, n) {
                let r = 0,
                    i = -1,
                    s = n.getWidth() - 1,
                    o = n.getHeight() - 1;
                for (; s > 0; ) {
                    for (s === 6 && (s -= 1); o >= 0 && o < n.getHeight(); ) {
                        for (let a = 0; a < 2; ++a) {
                            const c = s - a;
                            if (!X.isEmpty(n.get(c, o))) continue;
                            let f;
                            r < e.getSize() ? ((f = e.get(r)), ++r) : (f = !1),
                                t !== 255 &&
                                    Le.getDataMaskBit(t, c, o) &&
                                    (f = !f),
                                n.setBoolean(c, o, f);
                        }
                        o += i;
                    }
                    (i = -i), (o += i), (s -= 2);
                }
                if (r !== e.getSize())
                    throw new Ie(
                        "Not all bits consumed: " + r + "/" + e.getSize()
                    );
            }
            static findMSBSet(e) {
                return 32 - Z.numberOfLeadingZeros(e);
            }
            static calculateBCHCode(e, t) {
                if (t === 0) throw new _("0 polynomial");
                const n = X.findMSBSet(t);
                for (e <<= n - 1; X.findMSBSet(e) >= n; )
                    e ^= t << (X.findMSBSet(e) - n);
                return e;
            }
            static makeTypeInfoBits(e, t, n) {
                if (!qt.isValidMaskPattern(t))
                    throw new Ie("Invalid mask pattern");
                const r = (e.getBits() << 3) | t;
                n.appendBits(r, 5);
                const i = X.calculateBCHCode(r, X.TYPE_INFO_POLY);
                n.appendBits(i, 10);
                const s = new ae();
                if (
                    (s.appendBits(X.TYPE_INFO_MASK_PATTERN, 15),
                    n.xor(s),
                    n.getSize() !== 15)
                )
                    throw new Ie(
                        "should not happen but we got: " + n.getSize()
                    );
            }
            static makeVersionInfoBits(e, t) {
                t.appendBits(e.getVersionNumber(), 6);
                const n = X.calculateBCHCode(
                    e.getVersionNumber(),
                    X.VERSION_INFO_POLY
                );
                if ((t.appendBits(n, 12), t.getSize() !== 18))
                    throw new Ie(
                        "should not happen but we got: " + t.getSize()
                    );
            }
            static isEmpty(e) {
                return e === 255;
            }
            static embedTimingPatterns(e) {
                for (let t = 8; t < e.getWidth() - 8; ++t) {
                    const n = (t + 1) % 2;
                    X.isEmpty(e.get(t, 6)) && e.setNumber(t, 6, n),
                        X.isEmpty(e.get(6, t)) && e.setNumber(6, t, n);
                }
            }
            static embedDarkDotAtLeftBottomCorner(e) {
                if (e.get(8, e.getHeight() - 8) === 0) throw new Ie();
                e.setNumber(8, e.getHeight() - 8, 1);
            }
            static embedHorizontalSeparationPattern(e, t, n) {
                for (let r = 0; r < 8; ++r) {
                    if (!X.isEmpty(n.get(e + r, t))) throw new Ie();
                    n.setNumber(e + r, t, 0);
                }
            }
            static embedVerticalSeparationPattern(e, t, n) {
                for (let r = 0; r < 7; ++r) {
                    if (!X.isEmpty(n.get(e, t + r))) throw new Ie();
                    n.setNumber(e, t + r, 0);
                }
            }
            static embedPositionAdjustmentPattern(e, t, n) {
                for (let r = 0; r < 5; ++r) {
                    const i = X.POSITION_ADJUSTMENT_PATTERN[r];
                    for (let s = 0; s < 5; ++s) n.setNumber(e + s, t + r, i[s]);
                }
            }
            static embedPositionDetectionPattern(e, t, n) {
                for (let r = 0; r < 7; ++r) {
                    const i = X.POSITION_DETECTION_PATTERN[r];
                    for (let s = 0; s < 7; ++s) n.setNumber(e + s, t + r, i[s]);
                }
            }
            static embedPositionDetectionPatternsAndSeparators(e) {
                const t = X.POSITION_DETECTION_PATTERN[0].length;
                X.embedPositionDetectionPattern(0, 0, e),
                    X.embedPositionDetectionPattern(e.getWidth() - t, 0, e),
                    X.embedPositionDetectionPattern(0, e.getWidth() - t, e);
                const n = 8;
                X.embedHorizontalSeparationPattern(0, n - 1, e),
                    X.embedHorizontalSeparationPattern(
                        e.getWidth() - n,
                        n - 1,
                        e
                    ),
                    X.embedHorizontalSeparationPattern(0, e.getWidth() - n, e);
                const r = 7;
                X.embedVerticalSeparationPattern(r, 0, e),
                    X.embedVerticalSeparationPattern(
                        e.getHeight() - r - 1,
                        0,
                        e
                    ),
                    X.embedVerticalSeparationPattern(r, e.getHeight() - r, e);
            }
            static maybeEmbedPositionAdjustmentPatterns(e, t) {
                if (e.getVersionNumber() < 2) return;
                const n = e.getVersionNumber() - 1,
                    r = X.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n];
                for (let i = 0, s = r.length; i !== s; i++) {
                    const o = r[i];
                    if (o >= 0)
                        for (let a = 0; a !== s; a++) {
                            const c = r[a];
                            c >= 0 &&
                                X.isEmpty(t.get(c, o)) &&
                                X.embedPositionAdjustmentPattern(
                                    c - 2,
                                    o - 2,
                                    t
                                );
                        }
                }
            }
        }
        (X.POSITION_DETECTION_PATTERN = Array.from([
            Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
            Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
            Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
        ])),
            (X.POSITION_ADJUSTMENT_PATTERN = Array.from([
                Int32Array.from([1, 1, 1, 1, 1]),
                Int32Array.from([1, 0, 0, 0, 1]),
                Int32Array.from([1, 0, 1, 0, 1]),
                Int32Array.from([1, 0, 0, 0, 1]),
                Int32Array.from([1, 1, 1, 1, 1]),
            ])),
            (X.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
                Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
                Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
                Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
                Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
                Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
                Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
                Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
                Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
                Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
                Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
                Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
                Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
                Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
                Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
                Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
                Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
                Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
                Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
                Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
                Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
                Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
                Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
                Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
                Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
                Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
                Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
                Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
                Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
                Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
                Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
            ])),
            (X.TYPE_INFO_COORDINATES = Array.from([
                Int32Array.from([8, 0]),
                Int32Array.from([8, 1]),
                Int32Array.from([8, 2]),
                Int32Array.from([8, 3]),
                Int32Array.from([8, 4]),
                Int32Array.from([8, 5]),
                Int32Array.from([8, 7]),
                Int32Array.from([8, 8]),
                Int32Array.from([7, 8]),
                Int32Array.from([5, 8]),
                Int32Array.from([4, 8]),
                Int32Array.from([3, 8]),
                Int32Array.from([2, 8]),
                Int32Array.from([1, 8]),
                Int32Array.from([0, 8]),
            ])),
            (X.VERSION_INFO_POLY = 7973),
            (X.TYPE_INFO_POLY = 1335),
            (X.TYPE_INFO_MASK_PATTERN = 21522);
        class Di {
            constructor(e, t) {
                (this.dataBytes = e), (this.errorCorrectionBytes = t);
            }
            getDataBytes() {
                return this.dataBytes;
            }
            getErrorCorrectionBytes() {
                return this.errorCorrectionBytes;
            }
        }
        class be {
            constructor() {}
            static calculateMaskPenalty(e) {
                return (
                    Le.applyMaskPenaltyRule1(e) +
                    Le.applyMaskPenaltyRule2(e) +
                    Le.applyMaskPenaltyRule3(e) +
                    Le.applyMaskPenaltyRule4(e)
                );
            }
            static encode(e, t, n = null) {
                let r = be.DEFAULT_BYTE_MODE_ENCODING;
                const i = n !== null && n.get(Ve.CHARACTER_SET) !== void 0;
                i && (r = n.get(Ve.CHARACTER_SET).toString());
                const s = this.chooseMode(e, r),
                    o = new ae();
                if (
                    s === W.BYTE &&
                    (i || be.DEFAULT_BYTE_MODE_ENCODING !== r)
                ) {
                    const F = k.getCharacterSetECIByName(r);
                    F !== void 0 && this.appendECI(F, o);
                }
                this.appendModeInfo(s, o);
                const a = new ae();
                this.appendBytes(e, s, a, r);
                let c;
                if (n !== null && n.get(Ve.QR_VERSION) !== void 0) {
                    const F = Number.parseInt(
                        n.get(Ve.QR_VERSION).toString(),
                        10
                    );
                    c = G.getVersionForNumber(F);
                    const B = this.calculateBitsNeeded(s, o, a, c);
                    if (!this.willFit(B, c, t))
                        throw new Ie("Data too big for requested version");
                } else c = this.recommendVersion(t, s, o, a);
                const f = new ae();
                f.appendBitArray(o);
                const x = s === W.BYTE ? a.getSizeInBytes() : e.length;
                this.appendLengthInfo(x, c, s, f), f.appendBitArray(a);
                const A = c.getECBlocksForLevel(t),
                    m = c.getTotalCodewords() - A.getTotalECCodewords();
                this.terminateBits(m, f);
                const I = this.interleaveWithECBytes(
                        f,
                        c.getTotalCodewords(),
                        m,
                        A.getNumBlocks()
                    ),
                    T = new qt();
                T.setECLevel(t), T.setMode(s), T.setVersion(c);
                const S = c.getDimensionForVersion(),
                    M = new Pn(S, S),
                    P = this.chooseMaskPattern(I, t, c, M);
                return (
                    T.setMaskPattern(P),
                    X.buildMatrix(I, t, c, P, M),
                    T.setMatrix(M),
                    T
                );
            }
            static recommendVersion(e, t, n, r) {
                const i = this.calculateBitsNeeded(
                        t,
                        n,
                        r,
                        G.getVersionForNumber(1)
                    ),
                    s = this.chooseVersion(i, e),
                    o = this.calculateBitsNeeded(t, n, r, s);
                return this.chooseVersion(o, e);
            }
            static calculateBitsNeeded(e, t, n, r) {
                return t.getSize() + e.getCharacterCountBits(r) + n.getSize();
            }
            static getAlphanumericCode(e) {
                return e < be.ALPHANUMERIC_TABLE.length
                    ? be.ALPHANUMERIC_TABLE[e]
                    : -1;
            }
            static chooseMode(e, t = null) {
                if (k.SJIS.getName() === t && this.isOnlyDoubleByteKanji(e))
                    return W.KANJI;
                let n = !1,
                    r = !1;
                for (let i = 0, s = e.length; i < s; ++i) {
                    const o = e.charAt(i);
                    if (be.isDigit(o)) n = !0;
                    else if (this.getAlphanumericCode(o.charCodeAt(0)) !== -1)
                        r = !0;
                    else return W.BYTE;
                }
                return r ? W.ALPHANUMERIC : n ? W.NUMERIC : W.BYTE;
            }
            static isOnlyDoubleByteKanji(e) {
                let t;
                try {
                    t = qe.encode(e, k.SJIS);
                } catch {
                    return !1;
                }
                const n = t.length;
                if (n % 2 !== 0) return !1;
                for (let r = 0; r < n; r += 2) {
                    const i = t[r] & 255;
                    if ((i < 129 || i > 159) && (i < 224 || i > 235)) return !1;
                }
                return !0;
            }
            static chooseMaskPattern(e, t, n, r) {
                let i = Number.MAX_SAFE_INTEGER,
                    s = -1;
                for (let o = 0; o < qt.NUM_MASK_PATTERNS; o++) {
                    X.buildMatrix(e, t, n, o, r);
                    let a = this.calculateMaskPenalty(r);
                    a < i && ((i = a), (s = o));
                }
                return s;
            }
            static chooseVersion(e, t) {
                for (let n = 1; n <= 40; n++) {
                    const r = G.getVersionForNumber(n);
                    if (be.willFit(e, r, t)) return r;
                }
                throw new Ie("Data too big");
            }
            static willFit(e, t, n) {
                const r = t.getTotalCodewords(),
                    s = t.getECBlocksForLevel(n).getTotalECCodewords(),
                    o = r - s,
                    a = (e + 7) / 8;
                return o >= a;
            }
            static terminateBits(e, t) {
                const n = e * 8;
                if (t.getSize() > n)
                    throw new Ie(
                        "data bits cannot fit in the QR Code" +
                            t.getSize() +
                            " > " +
                            n
                    );
                for (let s = 0; s < 4 && t.getSize() < n; ++s) t.appendBit(!1);
                const r = t.getSize() & 7;
                if (r > 0) for (let s = r; s < 8; s++) t.appendBit(!1);
                const i = e - t.getSizeInBytes();
                for (let s = 0; s < i; ++s) t.appendBits(s & 1 ? 17 : 236, 8);
                if (t.getSize() !== n)
                    throw new Ie("Bits size does not equal capacity");
            }
            static getNumDataBytesAndNumECBytesForBlockID(e, t, n, r, i, s) {
                if (r >= n) throw new Ie("Block ID too large");
                const o = e % n,
                    a = n - o,
                    c = Math.floor(e / n),
                    f = c + 1,
                    x = Math.floor(t / n),
                    A = x + 1,
                    m = c - x,
                    I = f - A;
                if (m !== I) throw new Ie("EC bytes mismatch");
                if (n !== a + o) throw new Ie("RS blocks mismatch");
                if (e !== (x + m) * a + (A + I) * o)
                    throw new Ie("Total bytes mismatch");
                r < a ? ((i[0] = x), (s[0] = m)) : ((i[0] = A), (s[0] = I));
            }
            static interleaveWithECBytes(e, t, n, r) {
                if (e.getSizeInBytes() !== n)
                    throw new Ie(
                        "Number of bits and data bytes does not match"
                    );
                let i = 0,
                    s = 0,
                    o = 0;
                const a = new Array();
                for (let f = 0; f < r; ++f) {
                    const x = new Int32Array(1),
                        A = new Int32Array(1);
                    be.getNumDataBytesAndNumECBytesForBlockID(t, n, r, f, x, A);
                    const m = x[0],
                        I = new Uint8Array(m);
                    e.toBytes(8 * i, I, 0, m);
                    const T = be.generateECBytes(I, A[0]);
                    a.push(new Di(I, T)),
                        (s = Math.max(s, m)),
                        (o = Math.max(o, T.length)),
                        (i += x[0]);
                }
                if (n !== i) throw new Ie("Data bytes does not match offset");
                const c = new ae();
                for (let f = 0; f < s; ++f)
                    for (const x of a) {
                        const A = x.getDataBytes();
                        f < A.length && c.appendBits(A[f], 8);
                    }
                for (let f = 0; f < o; ++f)
                    for (const x of a) {
                        const A = x.getErrorCorrectionBytes();
                        f < A.length && c.appendBits(A[f], 8);
                    }
                if (t !== c.getSizeInBytes())
                    throw new Ie(
                        "Interleaving error: " +
                            t +
                            " and " +
                            c.getSizeInBytes() +
                            " differ."
                    );
                return c;
            }
            static generateECBytes(e, t) {
                const n = e.length,
                    r = new Int32Array(n + t);
                for (let s = 0; s < n; s++) r[s] = e[s] & 255;
                new ir(de.QR_CODE_FIELD_256).encode(r, t);
                const i = new Uint8Array(t);
                for (let s = 0; s < t; s++) i[s] = r[n + s];
                return i;
            }
            static appendModeInfo(e, t) {
                t.appendBits(e.getBits(), 4);
            }
            static appendLengthInfo(e, t, n, r) {
                const i = n.getCharacterCountBits(t);
                if (e >= 1 << i)
                    throw new Ie(e + " is bigger than " + ((1 << i) - 1));
                r.appendBits(e, i);
            }
            static appendBytes(e, t, n, r) {
                switch (t) {
                    case W.NUMERIC:
                        be.appendNumericBytes(e, n);
                        break;
                    case W.ALPHANUMERIC:
                        be.appendAlphanumericBytes(e, n);
                        break;
                    case W.BYTE:
                        be.append8BitBytes(e, n, r);
                        break;
                    case W.KANJI:
                        be.appendKanjiBytes(e, n);
                        break;
                    default:
                        throw new Ie("Invalid mode: " + t);
                }
            }
            static getDigit(e) {
                return e.charCodeAt(0) - 48;
            }
            static isDigit(e) {
                const t = be.getDigit(e);
                return t >= 0 && t <= 9;
            }
            static appendNumericBytes(e, t) {
                const n = e.length;
                let r = 0;
                for (; r < n; ) {
                    const i = be.getDigit(e.charAt(r));
                    if (r + 2 < n) {
                        const s = be.getDigit(e.charAt(r + 1)),
                            o = be.getDigit(e.charAt(r + 2));
                        t.appendBits(i * 100 + s * 10 + o, 10), (r += 3);
                    } else if (r + 1 < n) {
                        const s = be.getDigit(e.charAt(r + 1));
                        t.appendBits(i * 10 + s, 7), (r += 2);
                    } else t.appendBits(i, 4), r++;
                }
            }
            static appendAlphanumericBytes(e, t) {
                const n = e.length;
                let r = 0;
                for (; r < n; ) {
                    const i = be.getAlphanumericCode(e.charCodeAt(r));
                    if (i === -1) throw new Ie();
                    if (r + 1 < n) {
                        const s = be.getAlphanumericCode(e.charCodeAt(r + 1));
                        if (s === -1) throw new Ie();
                        t.appendBits(i * 45 + s, 11), (r += 2);
                    } else t.appendBits(i, 6), r++;
                }
            }
            static append8BitBytes(e, t, n) {
                let r;
                try {
                    r = qe.encode(e, n);
                } catch (i) {
                    throw new Ie(i);
                }
                for (let i = 0, s = r.length; i !== s; i++) {
                    const o = r[i];
                    t.appendBits(o, 8);
                }
            }
            static appendKanjiBytes(e, t) {
                let n;
                try {
                    n = qe.encode(e, k.SJIS);
                } catch (i) {
                    throw new Ie(i);
                }
                const r = n.length;
                for (let i = 0; i < r; i += 2) {
                    const s = n[i] & 255,
                        o = n[i + 1] & 255,
                        a = ((s << 8) & 4294967295) | o;
                    let c = -1;
                    if (
                        (a >= 33088 && a <= 40956
                            ? (c = a - 33088)
                            : a >= 57408 && a <= 60351 && (c = a - 49472),
                        c === -1)
                    )
                        throw new Ie("Invalid byte sequence");
                    const f = (c >> 8) * 192 + (c & 255);
                    t.appendBits(f, 13);
                }
            }
            static appendECI(e, t) {
                t.appendBits(W.ECI.getBits(), 4), t.appendBits(e.getValue(), 8);
            }
        }
        (be.ALPHANUMERIC_TABLE = Int32Array.from([
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1,
            -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3,
            4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            32, 33, 34, 35, -1, -1, -1, -1, -1,
        ])),
            (be.DEFAULT_BYTE_MODE_ENCODING = k.UTF8.getName());
        class Jt {
            write(e, t, n, r = null) {
                if (e.length === 0) throw new _("Found empty contents");
                if (t < 0 || n < 0)
                    throw new _(
                        "Requested dimensions are too small: " + t + "x" + n
                    );
                let i = Se.L,
                    s = Jt.QUIET_ZONE_SIZE;
                r !== null &&
                    (r.get(Ve.ERROR_CORRECTION) !== void 0 &&
                        (i = Se.fromString(
                            r.get(Ve.ERROR_CORRECTION).toString()
                        )),
                    r.get(Ve.MARGIN) !== void 0 &&
                        (s = Number.parseInt(r.get(Ve.MARGIN).toString(), 10)));
                const o = be.encode(e, i, r);
                return this.renderResult(o, t, n, s);
            }
            writeToDom(e, t, n, r, i = null) {
                typeof e == "string" && (e = document.querySelector(e));
                const s = this.write(t, n, r, i);
                e && e.appendChild(s);
            }
            renderResult(e, t, n, r) {
                const i = e.getMatrix();
                if (i === null) throw new Tt();
                const s = i.getWidth(),
                    o = i.getHeight(),
                    a = s + r * 2,
                    c = o + r * 2,
                    f = Math.max(t, a),
                    x = Math.max(n, c),
                    A = Math.min(Math.floor(f / a), Math.floor(x / c)),
                    m = Math.floor((f - s * A) / 2),
                    I = Math.floor((x - o * A) / 2),
                    T = this.createSVGElement(f, x);
                for (let S = 0, M = I; S < o; S++, M += A)
                    for (let P = 0, F = m; P < s; P++, F += A)
                        if (i.get(P, S) === 1) {
                            const B = this.createSvgRectElement(F, M, A, A);
                            T.appendChild(B);
                        }
                return T;
            }
            createSVGElement(e, t) {
                const n = document.createElementNS(Jt.SVG_NS, "svg");
                return (
                    n.setAttributeNS(null, "height", e.toString()),
                    n.setAttributeNS(null, "width", t.toString()),
                    n
                );
            }
            createSvgRectElement(e, t, n, r) {
                const i = document.createElementNS(Jt.SVG_NS, "rect");
                return (
                    i.setAttributeNS(null, "x", e.toString()),
                    i.setAttributeNS(null, "y", t.toString()),
                    i.setAttributeNS(null, "height", n.toString()),
                    i.setAttributeNS(null, "width", r.toString()),
                    i.setAttributeNS(null, "fill", "#000000"),
                    i
                );
            }
        }
        (Jt.QUIET_ZONE_SIZE = 4), (Jt.SVG_NS = "http://www.w3.org/2000/svg");
        class on {
            encode(e, t, n, r, i) {
                if (e.length === 0) throw new _("Found empty contents");
                if (t !== Y.QR_CODE)
                    throw new _("Can only encode QR_CODE, but got " + t);
                if (n < 0 || r < 0)
                    throw new _(
                        `Requested dimensions are too small: ${n}x${r}`
                    );
                let s = Se.L,
                    o = on.QUIET_ZONE_SIZE;
                i !== null &&
                    (i.get(Ve.ERROR_CORRECTION) !== void 0 &&
                        (s = Se.fromString(
                            i.get(Ve.ERROR_CORRECTION).toString()
                        )),
                    i.get(Ve.MARGIN) !== void 0 &&
                        (o = Number.parseInt(i.get(Ve.MARGIN).toString(), 10)));
                const a = be.encode(e, s, i);
                return on.renderResult(a, n, r, o);
            }
            static renderResult(e, t, n, r) {
                const i = e.getMatrix();
                if (i === null) throw new Tt();
                const s = i.getWidth(),
                    o = i.getHeight(),
                    a = s + r * 2,
                    c = o + r * 2,
                    f = Math.max(t, a),
                    x = Math.max(n, c),
                    A = Math.min(Math.floor(f / a), Math.floor(x / c)),
                    m = Math.floor((f - s * A) / 2),
                    I = Math.floor((x - o * A) / 2),
                    T = new Pe(f, x);
                for (let S = 0, M = I; S < o; S++, M += A)
                    for (let P = 0, F = m; P < s; P++, F += A)
                        i.get(P, S) === 1 && T.setRegion(F, M, A, A);
                return T;
            }
        }
        on.QUIET_ZONE_SIZE = 4;
        class Ri {
            encode(e, t, n, r, i) {
                let s;
                switch (t) {
                    case Y.QR_CODE:
                        s = new on();
                        break;
                    default:
                        throw new _("No encoder available for format " + t);
                }
                return s.encode(e, t, n, r, i);
            }
        }
        class Nt extends hn {
            constructor(e, t, n, r, i, s, o, a) {
                if (
                    (super(s, o),
                    (this.yuvData = e),
                    (this.dataWidth = t),
                    (this.dataHeight = n),
                    (this.left = r),
                    (this.top = i),
                    r + s > t || i + o > n)
                )
                    throw new _(
                        "Crop rectangle does not fit within image data."
                    );
                a && this.reverseHorizontal(s, o);
            }
            getRow(e, t) {
                if (e < 0 || e >= this.getHeight())
                    throw new _("Requested row is outside the image: " + e);
                const n = this.getWidth();
                (t == null || t.length < n) && (t = new Uint8ClampedArray(n));
                const r = (e + this.top) * this.dataWidth + this.left;
                return K.arraycopy(this.yuvData, r, t, 0, n), t;
            }
            getMatrix() {
                const e = this.getWidth(),
                    t = this.getHeight();
                if (e === this.dataWidth && t === this.dataHeight)
                    return this.yuvData;
                const n = e * t,
                    r = new Uint8ClampedArray(n);
                let i = this.top * this.dataWidth + this.left;
                if (e === this.dataWidth)
                    return K.arraycopy(this.yuvData, i, r, 0, n), r;
                for (let s = 0; s < t; s++) {
                    const o = s * e;
                    K.arraycopy(this.yuvData, i, r, o, e),
                        (i += this.dataWidth);
                }
                return r;
            }
            isCropSupported() {
                return !0;
            }
            crop(e, t, n, r) {
                return new Nt(
                    this.yuvData,
                    this.dataWidth,
                    this.dataHeight,
                    this.left + e,
                    this.top + t,
                    n,
                    r,
                    !1
                );
            }
            renderThumbnail() {
                const e = this.getWidth() / Nt.THUMBNAIL_SCALE_FACTOR,
                    t = this.getHeight() / Nt.THUMBNAIL_SCALE_FACTOR,
                    n = new Int32Array(e * t),
                    r = this.yuvData;
                let i = this.top * this.dataWidth + this.left;
                for (let s = 0; s < t; s++) {
                    const o = s * e;
                    for (let a = 0; a < e; a++) {
                        const c = r[i + a * Nt.THUMBNAIL_SCALE_FACTOR] & 255;
                        n[o + a] = 4278190080 | (c * 65793);
                    }
                    i += this.dataWidth * Nt.THUMBNAIL_SCALE_FACTOR;
                }
                return n;
            }
            getThumbnailWidth() {
                return this.getWidth() / Nt.THUMBNAIL_SCALE_FACTOR;
            }
            getThumbnailHeight() {
                return this.getHeight() / Nt.THUMBNAIL_SCALE_FACTOR;
            }
            reverseHorizontal(e, t) {
                const n = this.yuvData;
                for (
                    let r = 0, i = this.top * this.dataWidth + this.left;
                    r < t;
                    r++, i += this.dataWidth
                ) {
                    const s = i + e / 2;
                    for (let o = i, a = i + e - 1; o < s; o++, a--) {
                        const c = n[o];
                        (n[o] = n[a]), (n[a] = c);
                    }
                }
            }
            invert() {
                return new Bt(this);
            }
        }
        Nt.THUMBNAIL_SCALE_FACTOR = 2;
        class sr extends hn {
            constructor(e, t, n, r, i, s, o) {
                if (
                    (super(t, n),
                    (this.dataWidth = r),
                    (this.dataHeight = i),
                    (this.left = s),
                    (this.top = o),
                    e.BYTES_PER_ELEMENT === 4)
                ) {
                    const a = t * n,
                        c = new Uint8ClampedArray(a);
                    for (let f = 0; f < a; f++) {
                        const x = e[f],
                            A = (x >> 16) & 255,
                            m = (x >> 7) & 510,
                            I = x & 255;
                        c[f] = ((A + m + I) / 4) & 255;
                    }
                    this.luminances = c;
                } else this.luminances = e;
                if (
                    (r === void 0 && (this.dataWidth = t),
                    i === void 0 && (this.dataHeight = n),
                    s === void 0 && (this.left = 0),
                    o === void 0 && (this.top = 0),
                    this.left + t > this.dataWidth ||
                        this.top + n > this.dataHeight)
                )
                    throw new _(
                        "Crop rectangle does not fit within image data."
                    );
            }
            getRow(e, t) {
                if (e < 0 || e >= this.getHeight())
                    throw new _("Requested row is outside the image: " + e);
                const n = this.getWidth();
                (t == null || t.length < n) && (t = new Uint8ClampedArray(n));
                const r = (e + this.top) * this.dataWidth + this.left;
                return K.arraycopy(this.luminances, r, t, 0, n), t;
            }
            getMatrix() {
                const e = this.getWidth(),
                    t = this.getHeight();
                if (e === this.dataWidth && t === this.dataHeight)
                    return this.luminances;
                const n = e * t,
                    r = new Uint8ClampedArray(n);
                let i = this.top * this.dataWidth + this.left;
                if (e === this.dataWidth)
                    return K.arraycopy(this.luminances, i, r, 0, n), r;
                for (let s = 0; s < t; s++) {
                    const o = s * e;
                    K.arraycopy(this.luminances, i, r, o, e),
                        (i += this.dataWidth);
                }
                return r;
            }
            isCropSupported() {
                return !0;
            }
            crop(e, t, n, r) {
                return new sr(
                    this.luminances,
                    n,
                    r,
                    this.dataWidth,
                    this.dataHeight,
                    this.left + e,
                    this.top + t
                );
            }
            invert() {
                return new Bt(this);
            }
        }
        class Lr extends k {
            static forName(e) {
                return this.getCharacterSetECIByName(e);
            }
        }
        class or {}
        or.ISO_8859_1 = k.ISO8859_1;
        class Br {
            isCompact() {
                return this.compact;
            }
            setCompact(e) {
                this.compact = e;
            }
            getSize() {
                return this.size;
            }
            setSize(e) {
                this.size = e;
            }
            getLayers() {
                return this.layers;
            }
            setLayers(e) {
                this.layers = e;
            }
            getCodeWords() {
                return this.codeWords;
            }
            setCodeWords(e) {
                this.codeWords = e;
            }
            getMatrix() {
                return this.matrix;
            }
            setMatrix(e) {
                this.matrix = e;
            }
        }
        class Pr {
            static singletonList(e) {
                return [e];
            }
            static min(e, t) {
                return e.sort(t)[0];
            }
        }
        class vi {
            constructor(e) {
                this.previous = e;
            }
            getPrevious() {
                return this.previous;
            }
        }
        class an extends vi {
            constructor(e, t, n) {
                super(e), (this.value = t), (this.bitCount = n);
            }
            appendTo(e, t) {
                e.appendBits(this.value, this.bitCount);
            }
            add(e, t) {
                return new an(this, e, t);
            }
            addBinaryShift(e, t) {
                return (
                    console.warn(
                        "addBinaryShift on SimpleToken, this simply returns a copy of this token"
                    ),
                    new an(this, e, t)
                );
            }
            toString() {
                let e = this.value & ((1 << this.bitCount) - 1);
                return (
                    (e |= 1 << this.bitCount),
                    "<" +
                        Z.toBinaryString(e | (1 << this.bitCount)).substring(
                            1
                        ) +
                        ">"
                );
            }
        }
        class ar extends an {
            constructor(e, t, n) {
                super(e, 0, 0),
                    (this.binaryShiftStart = t),
                    (this.binaryShiftByteCount = n);
            }
            appendTo(e, t) {
                for (let n = 0; n < this.binaryShiftByteCount; n++)
                    (n === 0 ||
                        (n === 31 && this.binaryShiftByteCount <= 62)) &&
                        (e.appendBits(31, 5),
                        this.binaryShiftByteCount > 62
                            ? e.appendBits(this.binaryShiftByteCount - 31, 16)
                            : n === 0
                            ? e.appendBits(
                                  Math.min(this.binaryShiftByteCount, 31),
                                  5
                              )
                            : e.appendBits(this.binaryShiftByteCount - 31, 5)),
                        e.appendBits(t[this.binaryShiftStart + n], 8);
            }
            addBinaryShift(e, t) {
                return new ar(this, e, t);
            }
            toString() {
                return (
                    "<" +
                    this.binaryShiftStart +
                    "::" +
                    (this.binaryShiftStart + this.binaryShiftByteCount - 1) +
                    ">"
                );
            }
        }
        function Li(g, e, t) {
            return new ar(g, e, t);
        }
        function In(g, e, t) {
            return new an(g, e, t);
        }
        const Bi = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
            jt = 0,
            Fn = 1,
            Ct = 2,
            Fr = 3,
            Mt = 4,
            Pi = new an(null, 0, 0),
            cr = [
                Int32Array.from([
                    0,
                    (5 << 16) + 28,
                    (5 << 16) + 30,
                    (5 << 16) + 29,
                    655360 + 928 + 30,
                ]),
                Int32Array.from([
                    (9 << 16) + 480 + 14,
                    0,
                    (5 << 16) + 30,
                    (5 << 16) + 29,
                    655360 + 928 + 30,
                ]),
                Int32Array.from([
                    (4 << 16) + 14,
                    (9 << 16) + 448 + 28,
                    0,
                    (9 << 16) + 448 + 29,
                    917504 + 14336 + 928 + 30,
                ]),
                Int32Array.from([
                    (5 << 16) + 29,
                    (5 << 16) + 28,
                    655360 + 928 + 30,
                    0,
                    (5 << 16) + 30,
                ]),
                Int32Array.from([
                    (5 << 16) + 31,
                    655360 + 992 + 28,
                    655360 + 992 + 30,
                    655360 + 992 + 29,
                    0,
                ]),
            ];
        function Fi(g) {
            for (let e of g) ce.fill(e, -1);
            return (
                (g[jt][Mt] = 0),
                (g[Fn][Mt] = 0),
                (g[Fn][jt] = 28),
                (g[Fr][Mt] = 0),
                (g[Ct][Mt] = 0),
                (g[Ct][jt] = 15),
                g
            );
        }
        const kr = Fi(ce.createInt32Array(6, 6));
        class Ot {
            constructor(e, t, n, r) {
                (this.token = e),
                    (this.mode = t),
                    (this.binaryShiftByteCount = n),
                    (this.bitCount = r);
            }
            getMode() {
                return this.mode;
            }
            getToken() {
                return this.token;
            }
            getBinaryShiftByteCount() {
                return this.binaryShiftByteCount;
            }
            getBitCount() {
                return this.bitCount;
            }
            latchAndAppend(e, t) {
                let n = this.bitCount,
                    r = this.token;
                if (e !== this.mode) {
                    let s = cr[this.mode][e];
                    (r = In(r, s & 65535, s >> 16)), (n += s >> 16);
                }
                let i = e === Ct ? 4 : 5;
                return (r = In(r, t, i)), new Ot(r, e, 0, n + i);
            }
            shiftAndAppend(e, t) {
                let n = this.token,
                    r = this.mode === Ct ? 4 : 5;
                return (
                    (n = In(n, kr[this.mode][e], r)),
                    (n = In(n, t, 5)),
                    new Ot(n, this.mode, 0, this.bitCount + r + 5)
                );
            }
            addBinaryShiftChar(e) {
                let t = this.token,
                    n = this.mode,
                    r = this.bitCount;
                if (this.mode === Mt || this.mode === Ct) {
                    let o = cr[n][jt];
                    (t = In(t, o & 65535, o >> 16)), (r += o >> 16), (n = jt);
                }
                let i =
                        this.binaryShiftByteCount === 0 ||
                        this.binaryShiftByteCount === 31
                            ? 18
                            : this.binaryShiftByteCount === 62
                            ? 9
                            : 8,
                    s = new Ot(t, n, this.binaryShiftByteCount + 1, r + i);
                return (
                    s.binaryShiftByteCount === 2047 + 31 &&
                        (s = s.endBinaryShift(e + 1)),
                    s
                );
            }
            endBinaryShift(e) {
                if (this.binaryShiftByteCount === 0) return this;
                let t = this.token;
                return (
                    (t = Li(
                        t,
                        e - this.binaryShiftByteCount,
                        this.binaryShiftByteCount
                    )),
                    new Ot(t, this.mode, 0, this.bitCount)
                );
            }
            isBetterThanOrEqualTo(e) {
                let t = this.bitCount + (cr[this.mode][e.mode] >> 16);
                return (
                    this.binaryShiftByteCount < e.binaryShiftByteCount
                        ? (t +=
                              Ot.calculateBinaryShiftCost(e) -
                              Ot.calculateBinaryShiftCost(this))
                        : this.binaryShiftByteCount > e.binaryShiftByteCount &&
                          e.binaryShiftByteCount > 0 &&
                          (t += 10),
                    t <= e.bitCount
                );
            }
            toBitArray(e) {
                let t = [];
                for (
                    let r = this.endBinaryShift(e.length).token;
                    r !== null;
                    r = r.getPrevious()
                )
                    t.unshift(r);
                let n = new ae();
                for (const r of t) r.appendTo(n, e);
                return n;
            }
            toString() {
                return q.format(
                    "%s bits=%d bytes=%d",
                    Bi[this.mode],
                    this.bitCount,
                    this.binaryShiftByteCount
                );
            }
            static calculateBinaryShiftCost(e) {
                return e.binaryShiftByteCount > 62
                    ? 21
                    : e.binaryShiftByteCount > 31
                    ? 20
                    : e.binaryShiftByteCount > 0
                    ? 10
                    : 0;
            }
        }
        Ot.INITIAL_STATE = new Ot(Pi, jt, 0, 0);
        function ki(g) {
            const e = q.getCharCode(" "),
                t = q.getCharCode("."),
                n = q.getCharCode(",");
            g[jt][e] = 1;
            const r = q.getCharCode("Z"),
                i = q.getCharCode("A");
            for (let A = i; A <= r; A++) g[jt][A] = A - i + 2;
            g[Fn][e] = 1;
            const s = q.getCharCode("z"),
                o = q.getCharCode("a");
            for (let A = o; A <= s; A++) g[Fn][A] = A - o + 2;
            g[Ct][e] = 1;
            const a = q.getCharCode("9"),
                c = q.getCharCode("0");
            for (let A = c; A <= a; A++) g[Ct][A] = A - c + 2;
            (g[Ct][n] = 12), (g[Ct][t] = 13);
            const f = [
                "\0",
                " ",
                "",
                "",
                "",
                "",
                "",
                "",
                "\x07",
                "\b",
                "	",
                `
`,
                "\v",
                "\f",
                "\r",
                "\x1B",
                "",
                "",
                "",
                "",
                "@",
                "\\",
                "^",
                "_",
                "`",
                "|",
                "~",
                "",
            ];
            for (let A = 0; A < f.length; A++) g[Fr][q.getCharCode(f[A])] = A;
            const x = [
                "\0",
                "\r",
                "\0",
                "\0",
                "\0",
                "\0",
                "!",
                "'",
                "#",
                "$",
                "%",
                "&",
                "'",
                "(",
                ")",
                "*",
                "+",
                ",",
                "-",
                ".",
                "/",
                ":",
                ";",
                "<",
                "=",
                ">",
                "?",
                "[",
                "]",
                "{",
                "}",
            ];
            for (let A = 0; A < x.length; A++)
                q.getCharCode(x[A]) > 0 && (g[Mt][q.getCharCode(x[A])] = A);
            return g;
        }
        const lr = ki(ce.createInt32Array(5, 256));
        class Tn {
            constructor(e) {
                this.text = e;
            }
            encode() {
                const e = q.getCharCode(" "),
                    t = q.getCharCode(`
`);
                let n = Pr.singletonList(Ot.INITIAL_STATE);
                for (let i = 0; i < this.text.length; i++) {
                    let s,
                        o = i + 1 < this.text.length ? this.text[i + 1] : 0;
                    switch (this.text[i]) {
                        case q.getCharCode("\r"):
                            s = o === t ? 2 : 0;
                            break;
                        case q.getCharCode("."):
                            s = o === e ? 3 : 0;
                            break;
                        case q.getCharCode(","):
                            s = o === e ? 4 : 0;
                            break;
                        case q.getCharCode(":"):
                            s = o === e ? 5 : 0;
                            break;
                        default:
                            s = 0;
                    }
                    s > 0
                        ? ((n = Tn.updateStateListForPair(n, i, s)), i++)
                        : (n = this.updateStateListForChar(n, i));
                }
                return Pr.min(
                    n,
                    (i, s) => i.getBitCount() - s.getBitCount()
                ).toBitArray(this.text);
            }
            updateStateListForChar(e, t) {
                const n = [];
                for (let r of e) this.updateStateForChar(r, t, n);
                return Tn.simplifyStates(n);
            }
            updateStateForChar(e, t, n) {
                let r = this.text[t] & 255,
                    i = lr[e.getMode()][r] > 0,
                    s = null;
                for (let o = 0; o <= Mt; o++) {
                    let a = lr[o][r];
                    if (a > 0) {
                        if (
                            (s == null && (s = e.endBinaryShift(t)),
                            !i || o === e.getMode() || o === Ct)
                        ) {
                            const c = s.latchAndAppend(o, a);
                            n.push(c);
                        }
                        if (!i && kr[e.getMode()][o] >= 0) {
                            const c = s.shiftAndAppend(o, a);
                            n.push(c);
                        }
                    }
                }
                if (
                    e.getBinaryShiftByteCount() > 0 ||
                    lr[e.getMode()][r] === 0
                ) {
                    let o = e.addBinaryShiftChar(t);
                    n.push(o);
                }
            }
            static updateStateListForPair(e, t, n) {
                const r = [];
                for (let i of e) this.updateStateForPair(i, t, n, r);
                return this.simplifyStates(r);
            }
            static updateStateForPair(e, t, n, r) {
                let i = e.endBinaryShift(t);
                if (
                    (r.push(i.latchAndAppend(Mt, n)),
                    e.getMode() !== Mt && r.push(i.shiftAndAppend(Mt, n)),
                    n === 3 || n === 4)
                ) {
                    let s = i.latchAndAppend(Ct, 16 - n).latchAndAppend(Ct, 1);
                    r.push(s);
                }
                if (e.getBinaryShiftByteCount() > 0) {
                    let s = e.addBinaryShiftChar(t).addBinaryShiftChar(t + 1);
                    r.push(s);
                }
            }
            static simplifyStates(e) {
                let t = [];
                for (const n of e) {
                    let r = !0;
                    for (const i of t) {
                        if (i.isBetterThanOrEqualTo(n)) {
                            r = !1;
                            break;
                        }
                        n.isBetterThanOrEqualTo(i) &&
                            (t = t.filter((s) => s !== i));
                    }
                    r && t.push(n);
                }
                return t;
            }
        }
        class he {
            constructor() {}
            static encodeBytes(e) {
                return he.encode(
                    e,
                    he.DEFAULT_EC_PERCENT,
                    he.DEFAULT_AZTEC_LAYERS
                );
            }
            static encode(e, t, n) {
                let r = new Tn(e).encode(),
                    i = Z.truncDivision(r.getSize() * t, 100) + 11,
                    s = r.getSize() + i,
                    o,
                    a,
                    c,
                    f,
                    x;
                if (n !== he.DEFAULT_AZTEC_LAYERS) {
                    if (
                        ((o = n < 0),
                        (a = Math.abs(n)),
                        a > (o ? he.MAX_NB_BITS_COMPACT : he.MAX_NB_BITS))
                    )
                        throw new _(q.format("Illegal value %s for layers", n));
                    (c = he.totalBitsInLayer(a, o)), (f = he.WORD_SIZE[a]);
                    let B = c - (c % f);
                    if (((x = he.stuffBits(r, f)), x.getSize() + i > B))
                        throw new _("Data to large for user specified layer");
                    if (o && x.getSize() > f * 64)
                        throw new _("Data to large for user specified layer");
                } else {
                    (f = 0), (x = null);
                    for (let B = 0; ; B++) {
                        if (B > he.MAX_NB_BITS)
                            throw new _("Data too large for an Aztec code");
                        if (
                            ((o = B <= 3),
                            (a = o ? B + 1 : B),
                            (c = he.totalBitsInLayer(a, o)),
                            s > c)
                        )
                            continue;
                        (x == null || f !== he.WORD_SIZE[a]) &&
                            ((f = he.WORD_SIZE[a]), (x = he.stuffBits(r, f)));
                        let se = c - (c % f);
                        if (
                            !(o && x.getSize() > f * 64) &&
                            x.getSize() + i <= se
                        )
                            break;
                    }
                }
                let A = he.generateCheckWords(x, c, f),
                    m = x.getSize() / f,
                    I = he.generateModeMessage(o, a, m),
                    T = (o ? 11 : 14) + a * 4,
                    S = new Int32Array(T),
                    M;
                if (o) {
                    M = T;
                    for (let B = 0; B < S.length; B++) S[B] = B;
                } else {
                    M =
                        T +
                        1 +
                        2 * Z.truncDivision(Z.truncDivision(T, 2) - 1, 15);
                    let B = Z.truncDivision(T, 2),
                        se = Z.truncDivision(M, 2);
                    for (let ee = 0; ee < B; ee++) {
                        let ct = ee + Z.truncDivision(ee, 15);
                        (S[B - ee - 1] = se - ct - 1),
                            (S[B + ee] = se + ct + 1);
                    }
                }
                let P = new Pe(M);
                for (let B = 0, se = 0; B < a; B++) {
                    let ee = (a - B) * 4 + (o ? 9 : 12);
                    for (let ct = 0; ct < ee; ct++) {
                        let mt = ct * 2;
                        for (let lt = 0; lt < 2; lt++)
                            A.get(se + mt + lt) &&
                                P.set(S[B * 2 + lt], S[B * 2 + ct]),
                                A.get(se + ee * 2 + mt + lt) &&
                                    P.set(S[B * 2 + ct], S[T - 1 - B * 2 - lt]),
                                A.get(se + ee * 4 + mt + lt) &&
                                    P.set(
                                        S[T - 1 - B * 2 - lt],
                                        S[T - 1 - B * 2 - ct]
                                    ),
                                A.get(se + ee * 6 + mt + lt) &&
                                    P.set(S[T - 1 - B * 2 - ct], S[B * 2 + lt]);
                    }
                    se += ee * 8;
                }
                if ((he.drawModeMessage(P, o, M, I), o))
                    he.drawBullsEye(P, Z.truncDivision(M, 2), 5);
                else {
                    he.drawBullsEye(P, Z.truncDivision(M, 2), 7);
                    for (
                        let B = 0, se = 0;
                        B < Z.truncDivision(T, 2) - 1;
                        B += 15, se += 16
                    )
                        for (
                            let ee = Z.truncDivision(M, 2) & 1;
                            ee < M;
                            ee += 2
                        )
                            P.set(Z.truncDivision(M, 2) - se, ee),
                                P.set(Z.truncDivision(M, 2) + se, ee),
                                P.set(ee, Z.truncDivision(M, 2) - se),
                                P.set(ee, Z.truncDivision(M, 2) + se);
                }
                let F = new Br();
                return (
                    F.setCompact(o),
                    F.setSize(M),
                    F.setLayers(a),
                    F.setCodeWords(m),
                    F.setMatrix(P),
                    F
                );
            }
            static drawBullsEye(e, t, n) {
                for (let r = 0; r < n; r += 2)
                    for (let i = t - r; i <= t + r; i++)
                        e.set(i, t - r),
                            e.set(i, t + r),
                            e.set(t - r, i),
                            e.set(t + r, i);
                e.set(t - n, t - n),
                    e.set(t - n + 1, t - n),
                    e.set(t - n, t - n + 1),
                    e.set(t + n, t - n),
                    e.set(t + n, t - n + 1),
                    e.set(t + n, t + n - 1);
            }
            static generateModeMessage(e, t, n) {
                let r = new ae();
                return (
                    e
                        ? (r.appendBits(t - 1, 2),
                          r.appendBits(n - 1, 6),
                          (r = he.generateCheckWords(r, 28, 4)))
                        : (r.appendBits(t - 1, 5),
                          r.appendBits(n - 1, 11),
                          (r = he.generateCheckWords(r, 40, 4))),
                    r
                );
            }
            static drawModeMessage(e, t, n, r) {
                let i = Z.truncDivision(n, 2);
                if (t)
                    for (let s = 0; s < 7; s++) {
                        let o = i - 3 + s;
                        r.get(s) && e.set(o, i - 5),
                            r.get(s + 7) && e.set(i + 5, o),
                            r.get(20 - s) && e.set(o, i + 5),
                            r.get(27 - s) && e.set(i - 5, o);
                    }
                else
                    for (let s = 0; s < 10; s++) {
                        let o = i - 5 + s + Z.truncDivision(s, 5);
                        r.get(s) && e.set(o, i - 7),
                            r.get(s + 10) && e.set(i + 7, o),
                            r.get(29 - s) && e.set(o, i + 7),
                            r.get(39 - s) && e.set(i - 7, o);
                    }
            }
            static generateCheckWords(e, t, n) {
                let r = e.getSize() / n,
                    i = new ir(he.getGF(n)),
                    s = Z.truncDivision(t, n),
                    o = he.bitsToWords(e, n, s);
                i.encode(o, s - r);
                let a = t % n,
                    c = new ae();
                c.appendBits(0, a);
                for (const f of Array.from(o)) c.appendBits(f, n);
                return c;
            }
            static bitsToWords(e, t, n) {
                let r = new Int32Array(n),
                    i,
                    s;
                for (i = 0, s = e.getSize() / t; i < s; i++) {
                    let o = 0;
                    for (let a = 0; a < t; a++)
                        o |= e.get(i * t + a) ? 1 << (t - a - 1) : 0;
                    r[i] = o;
                }
                return r;
            }
            static getGF(e) {
                switch (e) {
                    case 4:
                        return de.AZTEC_PARAM;
                    case 6:
                        return de.AZTEC_DATA_6;
                    case 8:
                        return de.AZTEC_DATA_8;
                    case 10:
                        return de.AZTEC_DATA_10;
                    case 12:
                        return de.AZTEC_DATA_12;
                    default:
                        throw new _("Unsupported word size " + e);
                }
            }
            static stuffBits(e, t) {
                let n = new ae(),
                    r = e.getSize(),
                    i = (1 << t) - 2;
                for (let s = 0; s < r; s += t) {
                    let o = 0;
                    for (let a = 0; a < t; a++)
                        (s + a >= r || e.get(s + a)) && (o |= 1 << (t - 1 - a));
                    (o & i) === i
                        ? (n.appendBits(o & i, t), s--)
                        : o & i
                        ? n.appendBits(o, t)
                        : (n.appendBits(o | 1, t), s--);
                }
                return n;
            }
            static totalBitsInLayer(e, t) {
                return ((t ? 88 : 112) + 16 * e) * e;
            }
        }
        (he.DEFAULT_EC_PERCENT = 33),
            (he.DEFAULT_AZTEC_LAYERS = 0),
            (he.MAX_NB_BITS = 32),
            (he.MAX_NB_BITS_COMPACT = 4),
            (he.WORD_SIZE = Int32Array.from([
                4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            ]));
        class kn {
            encode(e, t, n, r) {
                return this.encodeWithHints(e, t, n, r, null);
            }
            encodeWithHints(e, t, n, r, i) {
                let s = or.ISO_8859_1,
                    o = he.DEFAULT_EC_PERCENT,
                    a = he.DEFAULT_AZTEC_LAYERS;
                return (
                    i != null &&
                        (i.has(Ve.CHARACTER_SET) &&
                            (s = Lr.forName(
                                i.get(Ve.CHARACTER_SET).toString()
                            )),
                        i.has(Ve.ERROR_CORRECTION) &&
                            (o = Z.parseInt(
                                i.get(Ve.ERROR_CORRECTION).toString()
                            )),
                        i.has(Ve.AZTEC_LAYERS) &&
                            (a = Z.parseInt(
                                i.get(Ve.AZTEC_LAYERS).toString()
                            ))),
                    kn.encodeLayers(e, t, n, r, s, o, a)
                );
            }
            static encodeLayers(e, t, n, r, i, s, o) {
                if (t !== Y.AZTEC)
                    throw new _("Can only encode AZTEC, but got " + t);
                let a = he.encode(q.getBytes(e, i), s, o);
                return kn.renderResult(a, n, r);
            }
            static renderResult(e, t, n) {
                let r = e.getMatrix();
                if (r == null) throw new Tt();
                let i = r.getWidth(),
                    s = r.getHeight(),
                    o = Math.max(t, i),
                    a = Math.max(n, s),
                    c = Math.min(o / i, a / s),
                    f = (o - i * c) / 2,
                    x = (a - s * c) / 2,
                    A = new Pe(o, a);
                for (let m = 0, I = x; m < s; m++, I += c)
                    for (let T = 0, S = f; T < i; T++, S += c)
                        r.get(T, m) && A.setRegion(S, I, c, c);
                return A;
            }
        }
        (l.AbstractExpandedDecoder = Zn),
            (l.ArgumentException = O),
            (l.ArithmeticException = bn),
            (l.AztecCode = Br),
            (l.AztecCodeReader = On),
            (l.AztecCodeWriter = kn),
            (l.AztecDecoder = ye),
            (l.AztecDetector = mr),
            (l.AztecDetectorResult = Er),
            (l.AztecEncoder = he),
            (l.AztecHighLevelEncoder = Tn),
            (l.AztecPoint = nt),
            (l.BarcodeFormat = Y),
            (l.Binarizer = De),
            (l.BinaryBitmap = ie),
            (l.BitArray = ae),
            (l.BitMatrix = Pe),
            (l.BitSource = Jn),
            (l.BrowserAztecCodeReader = ui),
            (l.BrowserBarcodeReader = xi),
            (l.BrowserCodeReader = Yt),
            (l.BrowserDatamatrixCodeReader = Ai),
            (l.BrowserMultiFormatReader = Mi),
            (l.BrowserPDF417Reader = Oi),
            (l.BrowserQRCodeReader = _i),
            (l.BrowserQRCodeSvgWriter = Jt),
            (l.CharacterSetECI = k),
            (l.ChecksumException = J),
            (l.Code128Reader = H),
            (l.Code39Reader = Ue),
            (l.DataMatrixDecodedBitStreamParser = Ut),
            (l.DataMatrixReader = Ht),
            (l.DecodeHintType = fe),
            (l.DecoderResult = fn),
            (l.DefaultGridSampler = pr),
            (l.DetectorResult = Mn),
            (l.EAN13Reader = Xt),
            (l.EncodeHintType = Ve),
            (l.Exception = C),
            (l.FormatException = U),
            (l.GenericGF = de),
            (l.GenericGFPoly = it),
            (l.GlobalHistogramBinarizer = je),
            (l.GridSampler = Gn),
            (l.GridSamplerInstance = Ft),
            (l.HTMLCanvasElementLuminanceSource = Pt),
            (l.HybridBinarizer = te),
            (l.ITFReader = me),
            (l.IllegalArgumentException = _),
            (l.IllegalStateException = Tt),
            (l.InvertedLuminanceSource = Bt),
            (l.LuminanceSource = hn),
            (l.MathUtils = ue),
            (l.MultiFormatOneDReader = rn),
            (l.MultiFormatReader = vr),
            (l.MultiFormatWriter = Ri),
            (l.NotFoundException = R),
            (l.OneDReader = ke),
            (l.PDF417DecodedBitStreamParser = N),
            (l.PDF417DecoderErrorCorrection = Nr),
            (l.PDF417Reader = Qe),
            (l.PDF417ResultMetadata = Or),
            (l.PerspectiveTransform = Et),
            (l.PlanarYUVLuminanceSource = Nt),
            (l.QRCodeByteMatrix = Pn),
            (l.QRCodeDataMask = wt),
            (l.QRCodeDecodedBitStreamParser = _e),
            (l.QRCodeDecoderErrorCorrectionLevel = Se),
            (l.QRCodeDecoderFormatInformation = $e),
            (l.QRCodeEncoder = be),
            (l.QRCodeEncoderQRCode = qt),
            (l.QRCodeMaskUtil = Le),
            (l.QRCodeMatrixUtil = X),
            (l.QRCodeMode = W),
            (l.QRCodeReader = Vt),
            (l.QRCodeVersion = G),
            (l.QRCodeWriter = on),
            (l.RGBLuminanceSource = sr),
            (l.RSS14Reader = ve),
            (l.RSSExpandedReader = L),
            (l.ReaderException = Bn),
            (l.ReedSolomonDecoder = gn),
            (l.ReedSolomonEncoder = ir),
            (l.ReedSolomonException = $t),
            (l.Result = tt),
            (l.ResultMetadataType = Ge),
            (l.ResultPoint = j),
            (l.StringUtils = q),
            (l.UnsupportedOperationException = Lt),
            (l.VideoInputDevice = Cr),
            (l.WhiteRectangleDetector = Rt),
            (l.WriterException = Ie),
            (l.ZXingArrays = ce),
            (l.ZXingCharset = Lr),
            (l.ZXingInteger = Z),
            (l.ZXingStandardCharsets = or),
            (l.ZXingStringBuilder = we),
            (l.ZXingStringEncoding = qe),
            (l.ZXingSystem = K),
            (l.createAbstractExpandedDecoder = Sr),
            Object.defineProperty(l, "__esModule", { value: !0 });
    });
})(xr, xr.exports);
var Ne = xr.exports;
const ns = Vi(Ne),
    rs = Ki({ __proto__: null, default: ns }, [Ne]);
var Wr = (function () {
        function h(u, l, w) {
            if (
                ((this.formatMap = new Map([
                    [z.QR_CODE, Ne.BarcodeFormat.QR_CODE],
                    [z.AZTEC, Ne.BarcodeFormat.AZTEC],
                    [z.CODABAR, Ne.BarcodeFormat.CODABAR],
                    [z.CODE_39, Ne.BarcodeFormat.CODE_39],
                    [z.CODE_93, Ne.BarcodeFormat.CODE_93],
                    [z.CODE_128, Ne.BarcodeFormat.CODE_128],
                    [z.DATA_MATRIX, Ne.BarcodeFormat.DATA_MATRIX],
                    [z.MAXICODE, Ne.BarcodeFormat.MAXICODE],
                    [z.ITF, Ne.BarcodeFormat.ITF],
                    [z.EAN_13, Ne.BarcodeFormat.EAN_13],
                    [z.EAN_8, Ne.BarcodeFormat.EAN_8],
                    [z.PDF_417, Ne.BarcodeFormat.PDF_417],
                    [z.RSS_14, Ne.BarcodeFormat.RSS_14],
                    [z.RSS_EXPANDED, Ne.BarcodeFormat.RSS_EXPANDED],
                    [z.UPC_A, Ne.BarcodeFormat.UPC_A],
                    [z.UPC_E, Ne.BarcodeFormat.UPC_E],
                    [z.UPC_EAN_EXTENSION, Ne.BarcodeFormat.UPC_EAN_EXTENSION],
                ])),
                (this.reverseFormatMap = this.createReverseFormatMap()),
                !rs)
            )
                throw "Use html5qrcode.min.js without edit, ZXing not found.";
            (this.verbose = l), (this.logger = w);
            var E = this.createZXingFormats(u),
                d = new Map();
            d.set(Ne.DecodeHintType.POSSIBLE_FORMATS, E),
                d.set(Ne.DecodeHintType.TRY_HARDER, !1),
                (this.hints = d);
        }
        return (
            (h.prototype.decodeAsync = function (u) {
                var l = this;
                return new Promise(function (w, E) {
                    try {
                        w(l.decode(u));
                    } catch (d) {
                        E(d);
                    }
                });
            }),
            (h.prototype.decode = function (u) {
                var l = new Ne.MultiFormatReader(this.verbose, this.hints),
                    w = new Ne.HTMLCanvasElementLuminanceSource(u),
                    E = new Ne.BinaryBitmap(new Ne.HybridBinarizer(w)),
                    d = l.decode(E);
                return {
                    text: d.text,
                    format: ri.create(
                        this.toHtml5QrcodeSupportedFormats(d.format)
                    ),
                    debugData: this.createDebugData(),
                };
            }),
            (h.prototype.createReverseFormatMap = function () {
                var u = new Map();
                return (
                    this.formatMap.forEach(function (l, w, E) {
                        u.set(l, w);
                    }),
                    u
                );
            }),
            (h.prototype.toHtml5QrcodeSupportedFormats = function (u) {
                if (!this.reverseFormatMap.has(u))
                    throw "reverseFormatMap doesn't have ".concat(u);
                return this.reverseFormatMap.get(u);
            }),
            (h.prototype.createZXingFormats = function (u) {
                for (var l = [], w = 0, E = u; w < E.length; w++) {
                    var d = E[w];
                    this.formatMap.has(d)
                        ? l.push(this.formatMap.get(d))
                        : this.logger.logError(
                              "".concat(d, " is not supported by") +
                                  "ZXingHtml5QrcodeShim"
                          );
                }
                return l;
            }),
            (h.prototype.createDebugData = function () {
                return { decoderName: "zxing-js" };
            }),
            h
        );
    })(),
    is =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    ss =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    Yr = (function () {
        function h(u, l, w) {
            if (
                ((this.formatMap = new Map([
                    [z.QR_CODE, "qr_code"],
                    [z.AZTEC, "aztec"],
                    [z.CODABAR, "codabar"],
                    [z.CODE_39, "code_39"],
                    [z.CODE_93, "code_93"],
                    [z.CODE_128, "code_128"],
                    [z.DATA_MATRIX, "data_matrix"],
                    [z.ITF, "itf"],
                    [z.EAN_13, "ean_13"],
                    [z.EAN_8, "ean_8"],
                    [z.PDF_417, "pdf417"],
                    [z.UPC_A, "upc_a"],
                    [z.UPC_E, "upc_e"],
                ])),
                (this.reverseFormatMap = this.createReverseFormatMap()),
                !h.isSupported())
            )
                throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
            (this.verbose = l), (this.logger = w);
            var E = this.createBarcodeDetectorFormats(u);
            if (((this.detector = new BarcodeDetector(E)), !this.detector))
                throw "BarcodeDetector detector not supported";
        }
        return (
            (h.isSupported = function () {
                if (!("BarcodeDetector" in window)) return !1;
                var u = new BarcodeDetector({ formats: ["qr_code"] });
                return typeof u < "u";
            }),
            (h.prototype.decodeAsync = function (u) {
                return is(this, void 0, void 0, function () {
                    var l, w;
                    return ss(this, function (E) {
                        switch (E.label) {
                            case 0:
                                return [4, this.detector.detect(u)];
                            case 1:
                                if (((l = E.sent()), !l || l.length === 0))
                                    throw "No barcode or QR code detected.";
                                return (
                                    (w = this.selectLargestBarcode(l)),
                                    [
                                        2,
                                        {
                                            text: w.rawValue,
                                            format: ri.create(
                                                this.toHtml5QrcodeSupportedFormats(
                                                    w.format
                                                )
                                            ),
                                            debugData: this.createDebugData(),
                                        },
                                    ]
                                );
                        }
                    });
                });
            }),
            (h.prototype.selectLargestBarcode = function (u) {
                for (var l = null, w = 0, E = 0, d = u; E < d.length; E++) {
                    var y = d[E],
                        D = y.boundingBox.width * y.boundingBox.height;
                    D > w && ((w = D), (l = y));
                }
                if (!l) throw "No largest barcode found";
                return l;
            }),
            (h.prototype.createBarcodeDetectorFormats = function (u) {
                for (var l = [], w = 0, E = u; w < E.length; w++) {
                    var d = E[w];
                    this.formatMap.has(d)
                        ? l.push(this.formatMap.get(d))
                        : this.logger.warn(
                              "".concat(d, " is not supported by") +
                                  "BarcodeDetectorDelegate"
                          );
                }
                return { formats: l };
            }),
            (h.prototype.toHtml5QrcodeSupportedFormats = function (u) {
                if (!this.reverseFormatMap.has(u))
                    throw "reverseFormatMap doesn't have ".concat(u);
                return this.reverseFormatMap.get(u);
            }),
            (h.prototype.createReverseFormatMap = function () {
                var u = new Map();
                return (
                    this.formatMap.forEach(function (l, w, E) {
                        u.set(l, w);
                    }),
                    u
                );
            }),
            (h.prototype.createDebugData = function () {
                return { decoderName: "BarcodeDetector" };
            }),
            h
        );
    })(),
    Xr =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    Zr =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    os = (function () {
        function h(u, l, w, E) {
            (this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100),
                (this.executions = 0),
                (this.executionResults = []),
                (this.wasPrimaryDecoderUsedInLastDecode = !1),
                (this.verbose = w),
                l && Yr.isSupported()
                    ? ((this.primaryDecoder = new Yr(u, w, E)),
                      (this.secondaryDecoder = new Wr(u, w, E)))
                    : (this.primaryDecoder = new Wr(u, w, E));
        }
        return (
            (h.prototype.decodeAsync = function (u) {
                return Xr(this, void 0, void 0, function () {
                    var l;
                    return Zr(this, function (w) {
                        switch (w.label) {
                            case 0:
                                (l = performance.now()), (w.label = 1);
                            case 1:
                                return (
                                    w.trys.push([1, , 3, 4]),
                                    [4, this.getDecoder().decodeAsync(u)]
                                );
                            case 2:
                                return [2, w.sent()];
                            case 3:
                                return this.possiblyLogPerformance(l), [7];
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (h.prototype.decodeRobustlyAsync = function (u) {
                return Xr(this, void 0, void 0, function () {
                    var l, w;
                    return Zr(this, function (E) {
                        switch (E.label) {
                            case 0:
                                (l = performance.now()), (E.label = 1);
                            case 1:
                                return (
                                    E.trys.push([1, 3, 4, 5]),
                                    [4, this.primaryDecoder.decodeAsync(u)]
                                );
                            case 2:
                                return [2, E.sent()];
                            case 3:
                                if (((w = E.sent()), this.secondaryDecoder))
                                    return [
                                        2,
                                        this.secondaryDecoder.decodeAsync(u),
                                    ];
                                throw w;
                            case 4:
                                return this.possiblyLogPerformance(l), [7];
                            case 5:
                                return [2];
                        }
                    });
                });
            }),
            (h.prototype.getDecoder = function () {
                return this.secondaryDecoder
                    ? this.wasPrimaryDecoderUsedInLastDecode === !1
                        ? ((this.wasPrimaryDecoderUsedInLastDecode = !0),
                          this.primaryDecoder)
                        : ((this.wasPrimaryDecoderUsedInLastDecode = !1),
                          this.secondaryDecoder)
                    : this.primaryDecoder;
            }),
            (h.prototype.possiblyLogPerformance = function (u) {
                if (this.verbose) {
                    var l = performance.now() - u;
                    this.executionResults.push(l),
                        this.executions++,
                        this.possiblyFlushPerformanceReport();
                }
            }),
            (h.prototype.possiblyFlushPerformanceReport = function () {
                if (
                    !(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)
                ) {
                    for (
                        var u = 0, l = 0, w = this.executionResults;
                        l < w.length;
                        l++
                    ) {
                        var E = w[l];
                        u += E;
                    }
                    var d = u / this.executionResults.length;
                    console.log(
                        ""
                            .concat(d, " ms for ")
                            .concat(this.executionResults.length, " last runs.")
                    ),
                        (this.executions = 0),
                        (this.executionResults = []);
                }
            }),
            h
        );
    })(),
    wr =
        (globalThis && globalThis.__extends) ||
        (function () {
            var h = function (u, l) {
                return (
                    (h =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (w, E) {
                                w.__proto__ = E;
                            }) ||
                        function (w, E) {
                            for (var d in E)
                                Object.prototype.hasOwnProperty.call(E, d) &&
                                    (w[d] = E[d]);
                        }),
                    h(u, l)
                );
            };
            return function (u, l) {
                if (typeof l != "function" && l !== null)
                    throw new TypeError(
                        "Class extends value " +
                            String(l) +
                            " is not a constructor or null"
                    );
                h(u, l);
                function w() {
                    this.constructor = u;
                }
                u.prototype =
                    l === null
                        ? Object.create(l)
                        : ((w.prototype = l.prototype), new w());
            };
        })(),
    Un =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    Hn =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    ai = (function () {
        function h(u, l) {
            (this.name = u), (this.track = l);
        }
        return (
            (h.prototype.isSupported = function () {
                return this.track.getCapabilities
                    ? this.name in this.track.getCapabilities()
                    : !1;
            }),
            (h.prototype.apply = function (u) {
                var l = {};
                l[this.name] = u;
                var w = { advanced: [l] };
                return this.track.applyConstraints(w);
            }),
            (h.prototype.value = function () {
                var u = this.track.getSettings();
                if (this.name in u) {
                    var l = u[this.name];
                    return l;
                }
                return null;
            }),
            h
        );
    })(),
    as = (function (h) {
        wr(u, h);
        function u(l, w) {
            return h.call(this, l, w) || this;
        }
        return (
            (u.prototype.min = function () {
                return this.getCapabilities().min;
            }),
            (u.prototype.max = function () {
                return this.getCapabilities().max;
            }),
            (u.prototype.step = function () {
                return this.getCapabilities().step;
            }),
            (u.prototype.apply = function (l) {
                var w = {};
                w[this.name] = l;
                var E = { advanced: [w] };
                return this.track.applyConstraints(E);
            }),
            (u.prototype.getCapabilities = function () {
                this.failIfNotSupported();
                var l = this.track.getCapabilities(),
                    w = l[this.name];
                return { min: w.min, max: w.max, step: w.step };
            }),
            (u.prototype.failIfNotSupported = function () {
                if (!this.isSupported())
                    throw new Error(
                        "".concat(this.name, " capability not supported")
                    );
            }),
            u
        );
    })(ai),
    cs = (function (h) {
        wr(u, h);
        function u(l) {
            return h.call(this, "zoom", l) || this;
        }
        return u;
    })(as),
    ls = (function (h) {
        wr(u, h);
        function u(l) {
            return h.call(this, "torch", l) || this;
        }
        return u;
    })(ai),
    us = (function () {
        function h(u) {
            this.track = u;
        }
        return (
            (h.prototype.zoomFeature = function () {
                return new cs(this.track);
            }),
            (h.prototype.torchFeature = function () {
                return new ls(this.track);
            }),
            h
        );
    })(),
    hs = (function () {
        function h(u, l, w) {
            (this.isClosed = !1),
                (this.parentElement = u),
                (this.mediaStream = l),
                (this.callbacks = w),
                (this.surface = this.createVideoElement(
                    this.parentElement.clientWidth
                )),
                u.append(this.surface);
        }
        return (
            (h.prototype.createVideoElement = function (u) {
                var l = document.createElement("video");
                return (
                    (l.style.width = "".concat(u, "px")),
                    (l.style.display = "block"),
                    (l.muted = !0),
                    l.setAttribute("muted", "true"),
                    (l.playsInline = !0),
                    l
                );
            }),
            (h.prototype.setupSurface = function () {
                var u = this;
                (this.surface.onabort = function () {
                    throw "RenderedCameraImpl video surface onabort() called";
                }),
                    (this.surface.onerror = function () {
                        throw "RenderedCameraImpl video surface onerror() called";
                    });
                var l = function () {
                    var w = u.surface.clientWidth,
                        E = u.surface.clientHeight;
                    u.callbacks.onRenderSurfaceReady(w, E),
                        u.surface.removeEventListener("playing", l);
                };
                this.surface.addEventListener("playing", l),
                    (this.surface.srcObject = this.mediaStream),
                    this.surface.play();
            }),
            (h.create = function (u, l, w, E) {
                return Un(this, void 0, void 0, function () {
                    var d, y;
                    return Hn(this, function (D) {
                        switch (D.label) {
                            case 0:
                                return (
                                    (d = new h(u, l, E)),
                                    w.aspectRatio
                                        ? ((y = { aspectRatio: w.aspectRatio }),
                                          [
                                              4,
                                              d
                                                  .getFirstTrackOrFail()
                                                  .applyConstraints(y),
                                          ])
                                        : [3, 2]
                                );
                            case 1:
                                D.sent(), (D.label = 2);
                            case 2:
                                return d.setupSurface(), [2, d];
                        }
                    });
                });
            }),
            (h.prototype.failIfClosed = function () {
                if (this.isClosed)
                    throw "The RenderedCamera has already been closed.";
            }),
            (h.prototype.getFirstTrackOrFail = function () {
                if (
                    (this.failIfClosed(),
                    this.mediaStream.getVideoTracks().length === 0)
                )
                    throw "No video tracks found";
                return this.mediaStream.getVideoTracks()[0];
            }),
            (h.prototype.pause = function () {
                this.failIfClosed(), this.surface.pause();
            }),
            (h.prototype.resume = function (u) {
                this.failIfClosed();
                var l = this,
                    w = function () {
                        setTimeout(u, 200),
                            l.surface.removeEventListener("playing", w);
                    };
                this.surface.addEventListener("playing", w),
                    this.surface.play();
            }),
            (h.prototype.isPaused = function () {
                return this.failIfClosed(), this.surface.paused;
            }),
            (h.prototype.getSurface = function () {
                return this.failIfClosed(), this.surface;
            }),
            (h.prototype.getRunningTrackCapabilities = function () {
                return this.getFirstTrackOrFail().getCapabilities();
            }),
            (h.prototype.getRunningTrackSettings = function () {
                return this.getFirstTrackOrFail().getSettings();
            }),
            (h.prototype.applyVideoConstraints = function (u) {
                return Un(this, void 0, void 0, function () {
                    return Hn(this, function (l) {
                        if ("aspectRatio" in u)
                            throw "Changing 'aspectRatio' in run-time is not yet supported.";
                        return [
                            2,
                            this.getFirstTrackOrFail().applyConstraints(u),
                        ];
                    });
                });
            }),
            (h.prototype.close = function () {
                if (this.isClosed) return Promise.resolve();
                var u = this;
                return new Promise(function (l, w) {
                    var E = u.mediaStream.getVideoTracks(),
                        d = E.length,
                        y = 0;
                    u.mediaStream.getVideoTracks().forEach(function (D) {
                        u.mediaStream.removeTrack(D),
                            D.stop(),
                            ++y,
                            y >= d &&
                                ((u.isClosed = !0),
                                u.parentElement.removeChild(u.surface),
                                l());
                    });
                });
            }),
            (h.prototype.getCapabilities = function () {
                return new us(this.getFirstTrackOrFail());
            }),
            h
        );
    })(),
    fs = (function () {
        function h(u) {
            this.mediaStream = u;
        }
        return (
            (h.prototype.render = function (u, l, w) {
                return Un(this, void 0, void 0, function () {
                    return Hn(this, function (E) {
                        return [2, hs.create(u, this.mediaStream, l, w)];
                    });
                });
            }),
            (h.create = function (u) {
                return Un(this, void 0, void 0, function () {
                    var l, w;
                    return Hn(this, function (E) {
                        switch (E.label) {
                            case 0:
                                if (!navigator.mediaDevices)
                                    throw "navigator.mediaDevices not supported";
                                return (
                                    (l = { audio: !1, video: u }),
                                    [4, navigator.mediaDevices.getUserMedia(l)]
                                );
                            case 1:
                                return (w = E.sent()), [2, new h(w)];
                        }
                    });
                });
            }),
            h
        );
    })(),
    Qr =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    Kr =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    ds = (function () {
        function h() {}
        return (
            (h.failIfNotSupported = function () {
                return Qr(this, void 0, void 0, function () {
                    return Kr(this, function (u) {
                        if (!navigator.mediaDevices)
                            throw "navigator.mediaDevices not supported";
                        return [2, new h()];
                    });
                });
            }),
            (h.prototype.create = function (u) {
                return Qr(this, void 0, void 0, function () {
                    return Kr(this, function (l) {
                        return [2, fs.create(u)];
                    });
                });
            }),
            h
        );
    })(),
    gs =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    xs =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    ws = (function () {
        function h() {}
        return (
            (h.retrieve = function () {
                if (navigator.mediaDevices)
                    return h.getCamerasFromMediaDevices();
                var u = MediaStreamTrack;
                return MediaStreamTrack && u.getSources
                    ? h.getCamerasFromMediaStreamTrack()
                    : h.rejectWithError();
            }),
            (h.rejectWithError = function () {
                var u = un.unableToQuerySupportedDevices();
                return (
                    h.isHttpsOrLocalhost() ||
                        (u = un.insecureContextCameraQueryError()),
                    Promise.reject(u)
                );
            }),
            (h.isHttpsOrLocalhost = function () {
                if (location.protocol === "https:") return !0;
                var u = location.host.split(":")[0];
                return u === "127.0.0.1" || u === "localhost";
            }),
            (h.getCamerasFromMediaDevices = function () {
                return gs(this, void 0, void 0, function () {
                    var u, l, w, E, d, y, D;
                    return xs(this, function (v) {
                        switch (v.label) {
                            case 0:
                                return (
                                    (u = function (C) {
                                        for (
                                            var O = C.getVideoTracks(),
                                                _ = 0,
                                                ie = O;
                                            _ < ie.length;
                                            _++
                                        ) {
                                            var J = ie[_];
                                            (J.enabled = !1),
                                                J.stop(),
                                                C.removeTrack(J);
                                        }
                                    }),
                                    [
                                        4,
                                        navigator.mediaDevices.getUserMedia({
                                            audio: !1,
                                            video: !0,
                                        }),
                                    ]
                                );
                            case 1:
                                return (
                                    (l = v.sent()),
                                    [
                                        4,
                                        navigator.mediaDevices.enumerateDevices(),
                                    ]
                                );
                            case 2:
                                for (
                                    w = v.sent(), E = [], d = 0, y = w;
                                    d < y.length;
                                    d++
                                )
                                    (D = y[d]),
                                        D.kind === "videoinput" &&
                                            E.push({
                                                id: D.deviceId,
                                                label: D.label,
                                            });
                                return u(l), [2, E];
                        }
                    });
                });
            }),
            (h.getCamerasFromMediaStreamTrack = function () {
                return new Promise(function (u, l) {
                    var w = function (d) {
                            for (var y = [], D = 0, v = d; D < v.length; D++) {
                                var C = v[D];
                                C.kind === "video" &&
                                    y.push({ id: C.id, label: C.label });
                            }
                            u(y);
                        },
                        E = MediaStreamTrack;
                    E.getSources(w);
                });
            }),
            h
        );
    })(),
    Be;
(function (h) {
    (h[(h.UNKNOWN = 0)] = "UNKNOWN"),
        (h[(h.NOT_STARTED = 1)] = "NOT_STARTED"),
        (h[(h.SCANNING = 2)] = "SCANNING"),
        (h[(h.PAUSED = 3)] = "PAUSED");
})(Be || (Be = {}));
var As = (function () {
        function h() {
            (this.state = Be.NOT_STARTED),
                (this.onGoingTransactionNewState = Be.UNKNOWN);
        }
        return (
            (h.prototype.directTransition = function (u) {
                this.failIfTransitionOngoing(),
                    this.validateTransition(u),
                    (this.state = u);
            }),
            (h.prototype.startTransition = function (u) {
                return (
                    this.failIfTransitionOngoing(),
                    this.validateTransition(u),
                    (this.onGoingTransactionNewState = u),
                    this
                );
            }),
            (h.prototype.execute = function () {
                if (this.onGoingTransactionNewState === Be.UNKNOWN)
                    throw "Transaction is already cancelled, cannot execute().";
                var u = this.onGoingTransactionNewState;
                (this.onGoingTransactionNewState = Be.UNKNOWN),
                    this.directTransition(u);
            }),
            (h.prototype.cancel = function () {
                if (this.onGoingTransactionNewState === Be.UNKNOWN)
                    throw "Transaction is already cancelled, cannot cancel().";
                this.onGoingTransactionNewState = Be.UNKNOWN;
            }),
            (h.prototype.getState = function () {
                return this.state;
            }),
            (h.prototype.failIfTransitionOngoing = function () {
                if (this.onGoingTransactionNewState !== Be.UNKNOWN)
                    throw "Cannot transition to a new state, already under transition";
            }),
            (h.prototype.validateTransition = function (u) {
                switch (this.state) {
                    case Be.UNKNOWN:
                        throw "Transition from unknown is not allowed";
                    case Be.NOT_STARTED:
                        this.failIfNewStateIs(u, [Be.PAUSED]);
                        break;
                    case Be.SCANNING:
                        break;
                    case Be.PAUSED:
                        break;
                }
            }),
            (h.prototype.failIfNewStateIs = function (u, l) {
                for (var w = 0, E = l; w < E.length; w++) {
                    var d = E[w];
                    if (u === d)
                        throw "Cannot transition from "
                            .concat(this.state, " to ")
                            .concat(u);
                }
            }),
            h
        );
    })(),
    Cs = (function () {
        function h(u) {
            this.stateManager = u;
        }
        return (
            (h.prototype.startTransition = function (u) {
                return this.stateManager.startTransition(u);
            }),
            (h.prototype.directTransition = function (u) {
                this.stateManager.directTransition(u);
            }),
            (h.prototype.getState = function () {
                return this.stateManager.getState();
            }),
            (h.prototype.canScanFile = function () {
                return this.stateManager.getState() === Be.NOT_STARTED;
            }),
            (h.prototype.isScanning = function () {
                return this.stateManager.getState() !== Be.NOT_STARTED;
            }),
            (h.prototype.isStrictlyScanning = function () {
                return this.stateManager.getState() === Be.SCANNING;
            }),
            (h.prototype.isPaused = function () {
                return this.stateManager.getState() === Be.PAUSED;
            }),
            h
        );
    })(),
    Es = (function () {
        function h() {}
        return (
            (h.create = function () {
                return new Cs(new As());
            }),
            h
        );
    })(),
    ps =
        (globalThis && globalThis.__extends) ||
        (function () {
            var h = function (u, l) {
                return (
                    (h =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (w, E) {
                                w.__proto__ = E;
                            }) ||
                        function (w, E) {
                            for (var d in E)
                                Object.prototype.hasOwnProperty.call(E, d) &&
                                    (w[d] = E[d]);
                        }),
                    h(u, l)
                );
            };
            return function (u, l) {
                if (typeof l != "function" && l !== null)
                    throw new TypeError(
                        "Class extends value " +
                            String(l) +
                            " is not a constructor or null"
                    );
                h(u, l);
                function w() {
                    this.constructor = u;
                }
                u.prototype =
                    l === null
                        ? Object.create(l)
                        : ((w.prototype = l.prototype), new w());
            };
        })(),
    ft = (function (h) {
        ps(u, h);
        function u() {
            return (h !== null && h.apply(this, arguments)) || this;
        }
        return (
            (u.DEFAULT_WIDTH = 300),
            (u.DEFAULT_WIDTH_OFFSET = 2),
            (u.FILE_SCAN_MIN_HEIGHT = 300),
            (u.FILE_SCAN_HIDDEN_CANVAS_PADDING = 100),
            (u.MIN_QR_BOX_SIZE = 50),
            (u.SHADED_LEFT = 1),
            (u.SHADED_RIGHT = 2),
            (u.SHADED_TOP = 3),
            (u.SHADED_BOTTOM = 4),
            (u.SHADED_REGION_ELEMENT_ID = "qr-shaded-region"),
            (u.VERBOSE = !1),
            (u.BORDER_SHADER_DEFAULT_COLOR = "#ffffff"),
            (u.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)"),
            u
        );
    })(It),
    ms = (function () {
        function h(u, l) {
            (this.logger = l),
                (this.fps = ft.SCAN_DEFAULT_FPS),
                u
                    ? (u.fps && (this.fps = u.fps),
                      (this.disableFlip = u.disableFlip === !0),
                      (this.qrbox = u.qrbox),
                      (this.aspectRatio = u.aspectRatio),
                      (this.videoConstraints = u.videoConstraints))
                    : (this.disableFlip = ft.DEFAULT_DISABLE_FLIP);
        }
        return (
            (h.prototype.isMediaStreamConstraintsValid = function () {
                return this.videoConstraints
                    ? oi.isMediaStreamConstraintsValid(
                          this.videoConstraints,
                          this.logger
                      )
                    : (this.logger.logError("Empty videoConstraints", !0), !1);
            }),
            (h.prototype.isShadedBoxEnabled = function () {
                return !Dt(this.qrbox);
            }),
            (h.create = function (u, l) {
                return new h(u, l);
            }),
            h
        );
    })(),
    qr = (function () {
        function h(u, l) {
            if (
                ((this.element = null),
                (this.canvasElement = null),
                (this.scannerPausedUiElement = null),
                (this.hasBorderShaders = null),
                (this.borderShaders = null),
                (this.qrMatch = null),
                (this.renderedCamera = null),
                (this.qrRegion = null),
                (this.context = null),
                (this.lastScanImageFile = null),
                (this.isScanning = !1),
                !document.getElementById(u))
            )
                throw "HTML Element with id=".concat(u, " not found");
            (this.elementId = u), (this.verbose = !1);
            var w;
            typeof l == "boolean"
                ? (this.verbose = l === !0)
                : l &&
                  ((w = l),
                  (this.verbose = w.verbose === !0),
                  w.experimentalFeatures),
                (this.logger = new si(this.verbose)),
                (this.qrcode = new os(
                    this.getSupportedFormats(l),
                    this.getUseBarCodeDetectorIfSupported(w),
                    this.verbose,
                    this.logger
                )),
                this.foreverScanTimeout,
                (this.shouldScan = !0),
                (this.stateManagerProxy = Es.create());
        }
        return (
            (h.prototype.start = function (u, l, w, E) {
                var d = this;
                if (!u) throw "cameraIdOrConfig is required";
                if (!w || typeof w != "function")
                    throw "qrCodeSuccessCallback is required and should be a function.";
                var y;
                E
                    ? (y = E)
                    : (y = this.verbose ? this.logger.log : function () {});
                var D = ms.create(l, this.logger);
                this.clearElement();
                var v = !1;
                D.videoConstraints &&
                    (D.isMediaStreamConstraintsValid()
                        ? (v = !0)
                        : this.logger.logError(
                              "'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'",
                              !0
                          ));
                var C = v,
                    O = document.getElementById(this.elementId);
                O.clientWidth ? O.clientWidth : ft.DEFAULT_WIDTH,
                    (O.style.position = "relative"),
                    (this.shouldScan = !0),
                    (this.element = O);
                var _ = this,
                    ie = this.stateManagerProxy.startTransition(Be.SCANNING);
                return new Promise(function (J, De) {
                    var K = C
                        ? D.videoConstraints
                        : _.createVideoConstraints(u);
                    if (!K) {
                        ie.cancel(), De("videoConstraints should be defined");
                        return;
                    }
                    var Ee = {};
                    (!C || D.aspectRatio) && (Ee.aspectRatio = D.aspectRatio);
                    var ze = {
                        onRenderSurfaceReady: function (ce, Z) {
                            _.setupUi(ce, Z, D),
                                (_.isScanning = !0),
                                _.foreverScan(D, w, y);
                        },
                    };
                    ds.failIfNotSupported()
                        .then(function (ce) {
                            ce.create(K)
                                .then(function (Z) {
                                    return Z.render(d.element, Ee, ze)
                                        .then(function (ae) {
                                            (_.renderedCamera = ae),
                                                ie.execute(),
                                                J(null);
                                        })
                                        .catch(function (ae) {
                                            ie.cancel(), De(ae);
                                        });
                                })
                                .catch(function (Z) {
                                    ie.cancel(),
                                        De(un.errorGettingUserMedia(Z));
                                });
                        })
                        .catch(function (ce) {
                            ie.cancel(), De(un.cameraStreamingNotSupported());
                        });
                });
            }),
            (h.prototype.pause = function (u) {
                if (!this.stateManagerProxy.isStrictlyScanning())
                    throw "Cannot pause, scanner is not scanning.";
                this.stateManagerProxy.directTransition(Be.PAUSED),
                    this.showPausedState(),
                    (Dt(u) || u !== !0) && (u = !1),
                    u && this.renderedCamera && this.renderedCamera.pause();
            }),
            (h.prototype.resume = function () {
                if (!this.stateManagerProxy.isPaused())
                    throw "Cannot result, scanner is not paused.";
                if (!this.renderedCamera)
                    throw "renderedCamera doesn't exist while trying resume()";
                var u = this,
                    l = function () {
                        u.stateManagerProxy.directTransition(Be.SCANNING),
                            u.hidePausedState();
                    };
                if (!this.renderedCamera.isPaused()) {
                    l();
                    return;
                }
                this.renderedCamera.resume(function () {
                    l();
                });
            }),
            (h.prototype.getState = function () {
                return this.stateManagerProxy.getState();
            }),
            (h.prototype.stop = function () {
                var u = this;
                if (!this.stateManagerProxy.isScanning())
                    throw "Cannot stop, scanner is not running or paused.";
                var l = this.stateManagerProxy.startTransition(Be.NOT_STARTED);
                (this.shouldScan = !1),
                    this.foreverScanTimeout &&
                        clearTimeout(this.foreverScanTimeout);
                var w = function () {
                        if (u.element) {
                            var d = document.getElementById(
                                ft.SHADED_REGION_ELEMENT_ID
                            );
                            d && u.element.removeChild(d);
                        }
                    },
                    E = this;
                return this.renderedCamera.close().then(function () {
                    return (
                        (E.renderedCamera = null),
                        E.element &&
                            (E.element.removeChild(E.canvasElement),
                            (E.canvasElement = null)),
                        w(),
                        E.qrRegion && (E.qrRegion = null),
                        E.context && (E.context = null),
                        l.execute(),
                        E.hidePausedState(),
                        (E.isScanning = !1),
                        Promise.resolve()
                    );
                });
            }),
            (h.prototype.scanFile = function (u, l) {
                return this.scanFileV2(u, l).then(function (w) {
                    return w.decodedText;
                });
            }),
            (h.prototype.scanFileV2 = function (u, l) {
                var w = this;
                if (!u || !(u instanceof File))
                    throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
                if ((Dt(l) && (l = !0), !this.stateManagerProxy.canScanFile()))
                    throw "Cannot start file scan - ongoing camera scan";
                return new Promise(function (E, d) {
                    w.possiblyCloseLastScanImageFile(),
                        w.clearElement(),
                        (w.lastScanImageFile = URL.createObjectURL(u));
                    var y = new Image();
                    (y.onload = function () {
                        var D = y.width,
                            v = y.height,
                            C = document.getElementById(w.elementId),
                            O = C.clientWidth
                                ? C.clientWidth
                                : ft.DEFAULT_WIDTH,
                            _ = Math.max(
                                C.clientHeight ? C.clientHeight : v,
                                ft.FILE_SCAN_MIN_HEIGHT
                            ),
                            ie = w.computeCanvasDrawConfig(D, v, O, _);
                        if (l) {
                            var J = w.createCanvasElement(
                                O,
                                _,
                                "qr-canvas-visible"
                            );
                            (J.style.display = "inline-block"),
                                C.appendChild(J);
                            var De = J.getContext("2d");
                            if (!De)
                                throw "Unable to get 2d context from canvas";
                            (De.canvas.width = O),
                                (De.canvas.height = _),
                                De.drawImage(
                                    y,
                                    0,
                                    0,
                                    D,
                                    v,
                                    ie.x,
                                    ie.y,
                                    ie.width,
                                    ie.height
                                );
                        }
                        var K = ft.FILE_SCAN_HIDDEN_CANVAS_PADDING,
                            Ee = Math.max(y.width, ie.width),
                            ze = Math.max(y.height, ie.height),
                            ce = Ee + 2 * K,
                            Z = ze + 2 * K,
                            ae = w.createCanvasElement(ce, Z);
                        C.appendChild(ae);
                        var Me = ae.getContext("2d");
                        if (!Me) throw "Unable to get 2d context from canvas";
                        (Me.canvas.width = ce),
                            (Me.canvas.height = Z),
                            Me.drawImage(y, 0, 0, D, v, K, K, Ee, ze);
                        try {
                            w.qrcode
                                .decodeRobustlyAsync(ae)
                                .then(function (fe) {
                                    E(jr.createFromQrcodeResult(fe));
                                })
                                .catch(d);
                        } catch (fe) {
                            d("QR code parse error, error = ".concat(fe));
                        }
                    }),
                        (y.onerror = d),
                        (y.onabort = d),
                        (y.onstalled = d),
                        (y.onsuspend = d),
                        (y.src = URL.createObjectURL(u));
                });
            }),
            (h.prototype.clear = function () {
                this.clearElement();
            }),
            (h.getCameras = function () {
                return ws.retrieve();
            }),
            (h.prototype.getRunningTrackCapabilities = function () {
                return this.getRenderedCameraOrFail().getRunningTrackCapabilities();
            }),
            (h.prototype.getRunningTrackSettings = function () {
                return this.getRenderedCameraOrFail().getRunningTrackSettings();
            }),
            (h.prototype.getRunningTrackCameraCapabilities = function () {
                return this.getRenderedCameraOrFail().getCapabilities();
            }),
            (h.prototype.applyVideoConstraints = function (u) {
                if (u) {
                    if (!oi.isMediaStreamConstraintsValid(u, this.logger))
                        throw "invalid videoConstaints passed, check logs for more details";
                } else throw "videoConstaints is required argument.";
                return this.getRenderedCameraOrFail().applyVideoConstraints(u);
            }),
            (h.prototype.getRenderedCameraOrFail = function () {
                if (this.renderedCamera == null)
                    throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
                return this.renderedCamera;
            }),
            (h.prototype.getSupportedFormats = function (u) {
                var l = [
                    z.QR_CODE,
                    z.AZTEC,
                    z.CODABAR,
                    z.CODE_39,
                    z.CODE_93,
                    z.CODE_128,
                    z.DATA_MATRIX,
                    z.MAXICODE,
                    z.ITF,
                    z.EAN_13,
                    z.EAN_8,
                    z.PDF_417,
                    z.RSS_14,
                    z.RSS_EXPANDED,
                    z.UPC_A,
                    z.UPC_E,
                    z.UPC_EAN_EXTENSION,
                ];
                if (!u || typeof u == "boolean" || !u.formatsToSupport)
                    return l;
                if (!Array.isArray(u.formatsToSupport))
                    throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
                if (u.formatsToSupport.length === 0)
                    throw "Atleast 1 formatsToSupport is needed.";
                for (
                    var w = [], E = 0, d = u.formatsToSupport;
                    E < d.length;
                    E++
                ) {
                    var y = d[E];
                    es(y)
                        ? w.push(y)
                        : this.logger.warn(
                              "Invalid format: ".concat(
                                  y,
                                  " passed in config, ignoring."
                              )
                          );
                }
                if (w.length === 0)
                    throw "None of formatsToSupport match supported values.";
                return w;
            }),
            (h.prototype.getUseBarCodeDetectorIfSupported = function (u) {
                if (Dt(u)) return !0;
                if (!Dt(u.useBarCodeDetectorIfSupported))
                    return u.useBarCodeDetectorIfSupported !== !1;
                if (Dt(u.experimentalFeatures)) return !0;
                var l = u.experimentalFeatures;
                return Dt(l.useBarCodeDetectorIfSupported)
                    ? !0
                    : l.useBarCodeDetectorIfSupported !== !1;
            }),
            (h.prototype.validateQrboxSize = function (u, l, w) {
                var E = this,
                    d = w.qrbox;
                this.validateQrboxConfig(d);
                var y = this.toQrdimensions(u, l, d),
                    D = function (C) {
                        if (C < ft.MIN_QR_BOX_SIZE)
                            throw (
                                "minimum size of 'config.qrbox' dimension value is" +
                                " ".concat(ft.MIN_QR_BOX_SIZE, "px.")
                            );
                    },
                    v = function (C) {
                        return (
                            C > u &&
                                (E.logger.warn(
                                    "`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."
                                ),
                                (C = u)),
                            C
                        );
                    };
                D(y.width), D(y.height), (y.width = v(y.width));
            }),
            (h.prototype.validateQrboxConfig = function (u) {
                if (
                    typeof u != "number" &&
                    typeof u != "function" &&
                    (u.width === void 0 || u.height === void 0)
                )
                    throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set.";
            }),
            (h.prototype.toQrdimensions = function (u, l, w) {
                if (typeof w == "number") return { width: w, height: w };
                if (typeof w == "function")
                    try {
                        return w(u, l);
                    } catch (E) {
                        throw new Error(
                            "qrbox config was passed as a function but it failed with unknown error" +
                                E
                        );
                    }
                return w;
            }),
            (h.prototype.setupUi = function (u, l, w) {
                w.isShadedBoxEnabled() && this.validateQrboxSize(u, l, w);
                var E = Dt(w.qrbox) ? { width: u, height: l } : w.qrbox;
                this.validateQrboxConfig(E);
                var d = this.toQrdimensions(u, l, E);
                d.height > l &&
                    this.logger.warn(
                        "[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored"
                    );
                var y = w.isShadedBoxEnabled() && d.height <= l,
                    D = { x: 0, y: 0, width: u, height: l },
                    v = y ? this.getShadedRegionBounds(u, l, d) : D,
                    C = this.createCanvasElement(v.width, v.height),
                    O = { willReadFrequently: !0 },
                    _ = C.getContext("2d", O);
                (_.canvas.width = v.width),
                    (_.canvas.height = v.height),
                    this.element.append(C),
                    y &&
                        this.possiblyInsertShadingElement(
                            this.element,
                            u,
                            l,
                            d
                        ),
                    this.createScannerPausedUiElement(this.element),
                    (this.qrRegion = v),
                    (this.context = _),
                    (this.canvasElement = C);
            }),
            (h.prototype.createScannerPausedUiElement = function (u) {
                var l = document.createElement("div");
                (l.innerText = un.scannerPaused()),
                    (l.style.display = "none"),
                    (l.style.position = "absolute"),
                    (l.style.top = "0px"),
                    (l.style.zIndex = "1"),
                    (l.style.background = "rgba(9, 9, 9, 0.46)"),
                    (l.style.color = "#FFECEC"),
                    (l.style.textAlign = "center"),
                    (l.style.width = "100%"),
                    u.appendChild(l),
                    (this.scannerPausedUiElement = l);
            }),
            (h.prototype.scanContext = function (u, l) {
                var w = this;
                return this.stateManagerProxy.isPaused()
                    ? Promise.resolve(!1)
                    : this.qrcode
                          .decodeAsync(this.canvasElement)
                          .then(function (E) {
                              return (
                                  u(E.text, jr.createFromQrcodeResult(E)),
                                  w.possiblyUpdateShaders(!0),
                                  !0
                              );
                          })
                          .catch(function (E) {
                              w.possiblyUpdateShaders(!1);
                              var d = un.codeParseError(E);
                              return l(d, ii.createFrom(d)), !1;
                          });
            }),
            (h.prototype.foreverScan = function (u, l, w) {
                var E = this;
                if (this.shouldScan && this.renderedCamera) {
                    var d = this.renderedCamera.getSurface(),
                        y = d.videoWidth / d.clientWidth,
                        D = d.videoHeight / d.clientHeight;
                    if (!this.qrRegion)
                        throw "qrRegion undefined when localMediaStream is ready.";
                    var v = this.qrRegion.width * y,
                        C = this.qrRegion.height * D,
                        O = this.qrRegion.x * y,
                        _ = this.qrRegion.y * D;
                    this.context.drawImage(
                        d,
                        O,
                        _,
                        v,
                        C,
                        0,
                        0,
                        this.qrRegion.width,
                        this.qrRegion.height
                    );
                    var ie = function () {
                        E.foreverScanTimeout = setTimeout(function () {
                            E.foreverScan(u, l, w);
                        }, E.getTimeoutFps(u.fps));
                    };
                    this.scanContext(l, w)
                        .then(function (J) {
                            !J && u.disableFlip !== !0
                                ? (E.context.translate(
                                      E.context.canvas.width,
                                      0
                                  ),
                                  E.context.scale(-1, 1),
                                  E.scanContext(l, w).finally(function () {
                                      ie();
                                  }))
                                : ie();
                        })
                        .catch(function (J) {
                            E.logger.logError(
                                "Error happend while scanning context",
                                J
                            ),
                                ie();
                        });
                }
            }),
            (h.prototype.createVideoConstraints = function (u) {
                if (typeof u == "string") return { deviceId: { exact: u } };
                if (typeof u == "object") {
                    var l = "facingMode",
                        w = "deviceId",
                        E = { user: !0, environment: !0 },
                        d = "exact",
                        y = function (De) {
                            if (De in E) return !0;
                            throw (
                                "config has invalid 'facingMode' value = " +
                                "'".concat(De, "'")
                            );
                        },
                        D = Object.keys(u);
                    if (D.length !== 1)
                        throw (
                            "'cameraIdOrConfig' object should have exactly 1 key," +
                            " if passed as an object, found ".concat(
                                D.length,
                                " keys"
                            )
                        );
                    var v = Object.keys(u)[0];
                    if (v !== l && v !== w)
                        throw (
                            "Only '".concat(l, "' and '").concat(w, "' ") +
                            " are supported for 'cameraIdOrConfig'"
                        );
                    if (v === l) {
                        var C = u.facingMode;
                        if (typeof C == "string") {
                            if (y(C)) return { facingMode: C };
                        } else if (typeof C == "object")
                            if (d in C) {
                                if (y(C["".concat(d)]))
                                    return {
                                        facingMode: { exact: C["".concat(d)] },
                                    };
                            } else
                                throw (
                                    "'facingMode' should be string or object with" +
                                    " ".concat(d, " as key.")
                                );
                        else {
                            var O = typeof C;
                            throw "Invalid type of 'facingMode' = ".concat(O);
                        }
                    } else {
                        var _ = u.deviceId;
                        if (typeof _ == "string") return { deviceId: _ };
                        if (typeof _ == "object") {
                            if (d in _)
                                return { deviceId: { exact: _["".concat(d)] } };
                            throw (
                                "'deviceId' should be string or object with" +
                                " ".concat(d, " as key.")
                            );
                        } else {
                            var ie = typeof _;
                            throw "Invalid type of 'deviceId' = ".concat(ie);
                        }
                    }
                }
                var J = typeof u;
                throw "Invalid type of 'cameraIdOrConfig' = ".concat(J);
            }),
            (h.prototype.computeCanvasDrawConfig = function (u, l, w, E) {
                if (u <= w && l <= E) {
                    var d = (w - u) / 2,
                        y = (E - l) / 2;
                    return { x: d, y, width: u, height: l };
                } else {
                    var D = u,
                        v = l;
                    return (
                        u > w && ((l = (w / u) * l), (u = w)),
                        l > E && ((u = (E / l) * u), (l = E)),
                        this.logger.log(
                            "Image downsampled from " +
                                "".concat(D, "X").concat(v) +
                                " to ".concat(u, "X").concat(l, ".")
                        ),
                        this.computeCanvasDrawConfig(u, l, w, E)
                    );
                }
            }),
            (h.prototype.clearElement = function () {
                if (this.stateManagerProxy.isScanning())
                    throw "Cannot clear while scan is ongoing, close it first.";
                var u = document.getElementById(this.elementId);
                u && (u.innerHTML = "");
            }),
            (h.prototype.possiblyUpdateShaders = function (u) {
                this.qrMatch !== u &&
                    (this.hasBorderShaders &&
                        this.borderShaders &&
                        this.borderShaders.length &&
                        this.borderShaders.forEach(function (l) {
                            l.style.backgroundColor = u
                                ? ft.BORDER_SHADER_MATCH_COLOR
                                : ft.BORDER_SHADER_DEFAULT_COLOR;
                        }),
                    (this.qrMatch = u));
            }),
            (h.prototype.possiblyCloseLastScanImageFile = function () {
                this.lastScanImageFile &&
                    (URL.revokeObjectURL(this.lastScanImageFile),
                    (this.lastScanImageFile = null));
            }),
            (h.prototype.createCanvasElement = function (u, l, w) {
                var E = u,
                    d = l,
                    y = document.createElement("canvas");
                return (
                    (y.style.width = "".concat(E, "px")),
                    (y.style.height = "".concat(d, "px")),
                    (y.style.display = "none"),
                    (y.id = Dt(w) ? "qr-canvas" : w),
                    y
                );
            }),
            (h.prototype.getShadedRegionBounds = function (u, l, w) {
                if (w.width > u || w.height > l)
                    throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
                return {
                    x: (u - w.width) / 2,
                    y: (l - w.height) / 2,
                    width: w.width,
                    height: w.height,
                };
            }),
            (h.prototype.possiblyInsertShadingElement = function (u, l, w, E) {
                if (!(l - E.width < 1 || w - E.height < 1)) {
                    var d = document.createElement("div");
                    d.style.position = "absolute";
                    var y = (l - E.width) / 2,
                        D = (w - E.height) / 2;
                    if (
                        ((d.style.borderLeft = "".concat(
                            y,
                            "px solid rgba(0, 0, 0, 0.48)"
                        )),
                        (d.style.borderRight = "".concat(
                            y,
                            "px solid rgba(0, 0, 0, 0.48)"
                        )),
                        (d.style.borderTop = "".concat(
                            D,
                            "px solid rgba(0, 0, 0, 0.48)"
                        )),
                        (d.style.borderBottom = "".concat(
                            D,
                            "px solid rgba(0, 0, 0, 0.48)"
                        )),
                        (d.style.boxSizing = "border-box"),
                        (d.style.top = "0px"),
                        (d.style.bottom = "0px"),
                        (d.style.left = "0px"),
                        (d.style.right = "0px"),
                        (d.id = "".concat(ft.SHADED_REGION_ELEMENT_ID)),
                        l - E.width < 11 || w - E.height < 11)
                    )
                        this.hasBorderShaders = !1;
                    else {
                        var v = 5,
                            C = 40;
                        this.insertShaderBorders(d, C, v, -v, null, 0, !0),
                            this.insertShaderBorders(d, C, v, -v, null, 0, !1),
                            this.insertShaderBorders(d, C, v, null, -v, 0, !0),
                            this.insertShaderBorders(d, C, v, null, -v, 0, !1),
                            this.insertShaderBorders(
                                d,
                                v,
                                C + v,
                                -v,
                                null,
                                -v,
                                !0
                            ),
                            this.insertShaderBorders(
                                d,
                                v,
                                C + v,
                                null,
                                -v,
                                -v,
                                !0
                            ),
                            this.insertShaderBorders(
                                d,
                                v,
                                C + v,
                                -v,
                                null,
                                -v,
                                !1
                            ),
                            this.insertShaderBorders(
                                d,
                                v,
                                C + v,
                                null,
                                -v,
                                -v,
                                !1
                            ),
                            (this.hasBorderShaders = !0);
                    }
                    u.append(d);
                }
            }),
            (h.prototype.insertShaderBorders = function (u, l, w, E, d, y, D) {
                var v = document.createElement("div");
                (v.style.position = "absolute"),
                    (v.style.backgroundColor = ft.BORDER_SHADER_DEFAULT_COLOR),
                    (v.style.width = "".concat(l, "px")),
                    (v.style.height = "".concat(w, "px")),
                    E !== null && (v.style.top = "".concat(E, "px")),
                    d !== null && (v.style.bottom = "".concat(d, "px")),
                    D
                        ? (v.style.left = "".concat(y, "px"))
                        : (v.style.right = "".concat(y, "px")),
                    this.borderShaders || (this.borderShaders = []),
                    this.borderShaders.push(v),
                    u.appendChild(v);
            }),
            (h.prototype.showPausedState = function () {
                if (!this.scannerPausedUiElement)
                    throw "[internal error] scanner paused UI element not found";
                this.scannerPausedUiElement.style.display = "block";
            }),
            (h.prototype.hidePausedState = function () {
                if (!this.scannerPausedUiElement)
                    throw "[internal error] scanner paused UI element not found";
                this.scannerPausedUiElement.style.display = "none";
            }),
            (h.prototype.getTimeoutFps = function (u) {
                return 1e3 / u;
            }),
            h
        );
    })(),
    Ar = "data:image/svg+xml;base64,",
    Is =
        Ar +
        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg==",
    Ts =
        Ar +
        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4=",
    Jr =
        Ar +
        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+",
    ys =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=",
    $r = (function () {
        function h() {}
        return (
            (h.createDefault = function () {
                return { hasPermission: !1, lastUsedCameraId: null };
            }),
            h
        );
    })(),
    Ss = (function () {
        function h() {
            this.data = $r.createDefault();
            var u = localStorage.getItem(h.LOCAL_STORAGE_KEY);
            u ? (this.data = JSON.parse(u)) : this.reset();
        }
        return (
            (h.prototype.hasCameraPermissions = function () {
                return this.data.hasPermission;
            }),
            (h.prototype.getLastUsedCameraId = function () {
                return this.data.lastUsedCameraId;
            }),
            (h.prototype.setHasPermission = function (u) {
                (this.data.hasPermission = u), this.flush();
            }),
            (h.prototype.setLastUsedCameraId = function (u) {
                (this.data.lastUsedCameraId = u), this.flush();
            }),
            (h.prototype.resetLastUsedCameraId = function () {
                (this.data.lastUsedCameraId = null), this.flush();
            }),
            (h.prototype.reset = function () {
                (this.data = $r.createDefault()), this.flush();
            }),
            (h.prototype.flush = function () {
                localStorage.setItem(
                    h.LOCAL_STORAGE_KEY,
                    JSON.stringify(this.data)
                );
            }),
            (h.LOCAL_STORAGE_KEY = "HTML5_QRCODE_DATA"),
            h
        );
    })(),
    bs = (function () {
        function h() {
            this.infoDiv = document.createElement("div");
        }
        return (
            (h.prototype.renderInto = function (u) {
                (this.infoDiv.style.position = "absolute"),
                    (this.infoDiv.style.top = "10px"),
                    (this.infoDiv.style.right = "10px"),
                    (this.infoDiv.style.zIndex = "2"),
                    (this.infoDiv.style.display = "none"),
                    (this.infoDiv.style.padding = "5pt"),
                    (this.infoDiv.style.border = "1px solid #171717"),
                    (this.infoDiv.style.fontSize = "10pt"),
                    (this.infoDiv.style.background = "rgb(0 0 0 / 69%)"),
                    (this.infoDiv.style.borderRadius = "5px"),
                    (this.infoDiv.style.textAlign = "center"),
                    (this.infoDiv.style.fontWeight = "400"),
                    (this.infoDiv.style.color = "white"),
                    (this.infoDiv.innerText = Gr.poweredBy());
                var l = document.createElement("a");
                (l.innerText = "ScanApp"),
                    (l.href = "https://scanapp.org"),
                    (l.target = "new"),
                    (l.style.color = "white"),
                    this.infoDiv.appendChild(l);
                var w = document.createElement("br"),
                    E = document.createElement("br");
                this.infoDiv.appendChild(w), this.infoDiv.appendChild(E);
                var d = document.createElement("a");
                (d.innerText = Gr.reportIssues()),
                    (d.href = "https://github.com/mebjas/html5-qrcode/issues"),
                    (d.target = "new"),
                    (d.style.color = "white"),
                    this.infoDiv.appendChild(d),
                    u.appendChild(this.infoDiv);
            }),
            (h.prototype.show = function () {
                this.infoDiv.style.display = "block";
            }),
            (h.prototype.hide = function () {
                this.infoDiv.style.display = "none";
            }),
            h
        );
    })(),
    Ns = (function () {
        function h(u, l) {
            (this.isShowingInfoIcon = !0),
                (this.onTapIn = u),
                (this.onTapOut = l),
                (this.infoIcon = document.createElement("img"));
        }
        return (
            (h.prototype.renderInto = function (u) {
                var l = this;
                (this.infoIcon.alt = "Info icon"),
                    (this.infoIcon.src = Jr),
                    (this.infoIcon.style.position = "absolute"),
                    (this.infoIcon.style.top = "4px"),
                    (this.infoIcon.style.right = "4px"),
                    (this.infoIcon.style.opacity = "0.6"),
                    (this.infoIcon.style.cursor = "pointer"),
                    (this.infoIcon.style.zIndex = "2"),
                    (this.infoIcon.style.width = "16px"),
                    (this.infoIcon.style.height = "16px"),
                    (this.infoIcon.onmouseover = function (w) {
                        return l.onHoverIn();
                    }),
                    (this.infoIcon.onmouseout = function (w) {
                        return l.onHoverOut();
                    }),
                    (this.infoIcon.onclick = function (w) {
                        return l.onClick();
                    }),
                    u.appendChild(this.infoIcon);
            }),
            (h.prototype.onHoverIn = function () {
                this.isShowingInfoIcon && (this.infoIcon.style.opacity = "1");
            }),
            (h.prototype.onHoverOut = function () {
                this.isShowingInfoIcon && (this.infoIcon.style.opacity = "0.6");
            }),
            (h.prototype.onClick = function () {
                this.isShowingInfoIcon
                    ? ((this.isShowingInfoIcon = !1),
                      this.onTapIn(),
                      (this.infoIcon.src = ys),
                      (this.infoIcon.style.opacity = "1"))
                    : ((this.isShowingInfoIcon = !0),
                      this.onTapOut(),
                      (this.infoIcon.src = Jr),
                      (this.infoIcon.style.opacity = "0.6"));
            }),
            h
        );
    })(),
    Ms = (function () {
        function h() {
            var u = this;
            (this.infoDiv = new bs()),
                (this.infoIcon = new Ns(
                    function () {
                        u.infoDiv.show();
                    },
                    function () {
                        u.infoDiv.hide();
                    }
                ));
        }
        return (
            (h.prototype.renderInto = function (u) {
                this.infoDiv.renderInto(u), this.infoIcon.renderInto(u);
            }),
            h
        );
    })(),
    Os =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    _s =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    ei = (function () {
        function h() {}
        return (
            (h.hasPermissions = function () {
                return Os(this, void 0, void 0, function () {
                    var u, l, w, E;
                    return _s(this, function (d) {
                        switch (d.label) {
                            case 0:
                                return [
                                    4,
                                    navigator.mediaDevices.enumerateDevices(),
                                ];
                            case 1:
                                for (
                                    u = d.sent(), l = 0, w = u;
                                    l < w.length;
                                    l++
                                )
                                    if (
                                        ((E = w[l]),
                                        E.kind === "videoinput" && E.label)
                                    )
                                        return [2, !0];
                                return [2, !1];
                        }
                    });
                });
            }),
            h
        );
    })(),
    Gt = (function () {
        function h(u) {
            this.supportedScanTypes = this.validateAndReturnScanTypes(u);
        }
        return (
            (h.prototype.getDefaultScanType = function () {
                return this.supportedScanTypes[0];
            }),
            (h.prototype.hasMoreThanOneScanType = function () {
                return this.supportedScanTypes.length > 1;
            }),
            (h.prototype.isCameraScanRequired = function () {
                for (
                    var u = 0, l = this.supportedScanTypes;
                    u < l.length;
                    u++
                ) {
                    var w = l[u];
                    if (h.isCameraScanType(w)) return !0;
                }
                return !1;
            }),
            (h.isCameraScanType = function (u) {
                return u === Wt.SCAN_TYPE_CAMERA;
            }),
            (h.isFileScanType = function (u) {
                return u === Wt.SCAN_TYPE_FILE;
            }),
            (h.prototype.validateAndReturnScanTypes = function (u) {
                if (!u || u.length === 0) return It.DEFAULT_SUPPORTED_SCAN_TYPE;
                var l = It.DEFAULT_SUPPORTED_SCAN_TYPE.length;
                if (u.length > l)
                    throw (
                        "Max ".concat(l, " values expected for ") +
                        "supportedScanTypes"
                    );
                for (var w = 0, E = u; w < E.length; w++) {
                    var d = E[w];
                    if (!It.DEFAULT_SUPPORTED_SCAN_TYPE.includes(d))
                        throw "Unsupported scan type ".concat(d);
                }
                return u;
            }),
            h
        );
    })(),
    gt = (function () {
        function h() {}
        return (
            (h.ALL_ELEMENT_CLASS = "html5-qrcode-element"),
            (h.CAMERA_PERMISSION_BUTTON_ID =
                "html5-qrcode-button-camera-permission"),
            (h.CAMERA_START_BUTTON_ID = "html5-qrcode-button-camera-start"),
            (h.CAMERA_STOP_BUTTON_ID = "html5-qrcode-button-camera-stop"),
            (h.TORCH_BUTTON_ID = "html5-qrcode-button-torch"),
            (h.CAMERA_SELECTION_SELECT_ID = "html5-qrcode-select-camera"),
            (h.FILE_SELECTION_BUTTON_ID = "html5-qrcode-button-file-selection"),
            (h.ZOOM_SLIDER_ID = "html5-qrcode-input-range-zoom"),
            (h.SCAN_TYPE_CHANGE_ANCHOR_ID =
                "html5-qrcode-anchor-scan-type-change"),
            (h.TORCH_BUTTON_CLASS_TORCH_ON = "html5-qrcode-button-torch-on"),
            (h.TORCH_BUTTON_CLASS_TORCH_OFF = "html5-qrcode-button-torch-off"),
            h
        );
    })(),
    vt = (function () {
        function h() {}
        return (
            (h.createElement = function (u, l) {
                var w = document.createElement(u);
                return (
                    (w.id = l),
                    w.classList.add(gt.ALL_ELEMENT_CLASS),
                    u === "button" && w.setAttribute("type", "button"),
                    w
                );
            }),
            h
        );
    })(),
    ci =
        (globalThis && globalThis.__awaiter) ||
        function (h, u, l, w) {
            function E(d) {
                return d instanceof l
                    ? d
                    : new l(function (y) {
                          y(d);
                      });
            }
            return new (l || (l = Promise))(function (d, y) {
                function D(O) {
                    try {
                        C(w.next(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function v(O) {
                    try {
                        C(w.throw(O));
                    } catch (_) {
                        y(_);
                    }
                }
                function C(O) {
                    O.done ? d(O.value) : E(O.value).then(D, v);
                }
                C((w = w.apply(h, u || [])).next());
            });
        },
    li =
        (globalThis && globalThis.__generator) ||
        function (h, u) {
            var l = {
                    label: 0,
                    sent: function () {
                        if (d[0] & 1) throw d[1];
                        return d[1];
                    },
                    trys: [],
                    ops: [],
                },
                w,
                E,
                d,
                y;
            return (
                (y = { next: D(0), throw: D(1), return: D(2) }),
                typeof Symbol == "function" &&
                    (y[Symbol.iterator] = function () {
                        return this;
                    }),
                y
            );
            function D(C) {
                return function (O) {
                    return v([C, O]);
                };
            }
            function v(C) {
                if (w) throw new TypeError("Generator is already executing.");
                for (; y && ((y = 0), C[0] && (l = 0)), l; )
                    try {
                        if (
                            ((w = 1),
                            E &&
                                (d =
                                    C[0] & 2
                                        ? E.return
                                        : C[0]
                                        ? E.throw ||
                                          ((d = E.return) && d.call(E), 0)
                                        : E.next) &&
                                !(d = d.call(E, C[1])).done)
                        )
                            return d;
                        switch (
                            ((E = 0), d && (C = [C[0] & 2, d.value]), C[0])
                        ) {
                            case 0:
                            case 1:
                                d = C;
                                break;
                            case 4:
                                return l.label++, { value: C[1], done: !1 };
                            case 5:
                                l.label++, (E = C[1]), (C = [0]);
                                continue;
                            case 7:
                                (C = l.ops.pop()), l.trys.pop();
                                continue;
                            default:
                                if (
                                    ((d = l.trys),
                                    !(d = d.length > 0 && d[d.length - 1]) &&
                                        (C[0] === 6 || C[0] === 2))
                                ) {
                                    l = 0;
                                    continue;
                                }
                                if (
                                    C[0] === 3 &&
                                    (!d || (C[1] > d[0] && C[1] < d[3]))
                                ) {
                                    l.label = C[1];
                                    break;
                                }
                                if (C[0] === 6 && l.label < d[1]) {
                                    (l.label = d[1]), (d = C);
                                    break;
                                }
                                if (d && l.label < d[2]) {
                                    (l.label = d[2]), l.ops.push(C);
                                    break;
                                }
                                d[2] && l.ops.pop(), l.trys.pop();
                                continue;
                        }
                        C = u.call(h, l);
                    } catch (O) {
                        (C = [6, O]), (E = 0);
                    } finally {
                        w = d = 0;
                    }
                if (C[0] & 5) throw C[1];
                return { value: C[0] ? C[1] : void 0, done: !0 };
            }
        },
    ti = (function () {
        function h(u, l, w) {
            (this.isTorchOn = !1),
                (this.torchCapability = u),
                (this.buttonController = l),
                (this.onTorchActionFailureCallback = w);
        }
        return (
            (h.prototype.isTorchEnabled = function () {
                return this.isTorchOn;
            }),
            (h.prototype.flipState = function () {
                return ci(this, void 0, void 0, function () {
                    var u, l;
                    return li(this, function (w) {
                        switch (w.label) {
                            case 0:
                                this.buttonController.disable(),
                                    (u = !this.isTorchOn),
                                    (w.label = 1);
                            case 1:
                                return (
                                    w.trys.push([1, 3, , 4]),
                                    [4, this.torchCapability.apply(u)]
                                );
                            case 2:
                                return (
                                    w.sent(),
                                    this.updateUiBasedOnLatestSettings(
                                        this.torchCapability.value(),
                                        u
                                    ),
                                    [3, 4]
                                );
                            case 3:
                                return (
                                    (l = w.sent()),
                                    this.propagateFailure(u, l),
                                    this.buttonController.enable(),
                                    [3, 4]
                                );
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (h.prototype.updateUiBasedOnLatestSettings = function (u, l) {
                u === l
                    ? (this.buttonController.setText(
                          l ? Ce.torchOffButton() : Ce.torchOnButton()
                      ),
                      (this.isTorchOn = l))
                    : this.propagateFailure(l),
                    this.buttonController.enable();
            }),
            (h.prototype.propagateFailure = function (u, l) {
                var w = u
                    ? Ce.torchOnFailedMessage()
                    : Ce.torchOffFailedMessage();
                l && (w += "; Error = " + l),
                    this.onTorchActionFailureCallback(w);
            }),
            (h.prototype.reset = function () {
                this.isTorchOn = !1;
            }),
            h
        );
    })(),
    Ds = (function () {
        function h(u, l) {
            (this.onTorchActionFailureCallback = l),
                (this.torchButton = vt.createElement(
                    "button",
                    gt.TORCH_BUTTON_ID
                )),
                (this.torchController = new ti(u, this, l));
        }
        return (
            (h.prototype.render = function (u, l) {
                var w = this;
                (this.torchButton.innerText = Ce.torchOnButton()),
                    (this.torchButton.style.display = l.display),
                    (this.torchButton.style.marginLeft = l.marginLeft);
                var E = this;
                this.torchButton.addEventListener("click", function (d) {
                    return ci(w, void 0, void 0, function () {
                        return li(this, function (y) {
                            switch (y.label) {
                                case 0:
                                    return [4, E.torchController.flipState()];
                                case 1:
                                    return (
                                        y.sent(),
                                        E.torchController.isTorchEnabled()
                                            ? (E.torchButton.classList.remove(
                                                  gt.TORCH_BUTTON_CLASS_TORCH_OFF
                                              ),
                                              E.torchButton.classList.add(
                                                  gt.TORCH_BUTTON_CLASS_TORCH_ON
                                              ))
                                            : (E.torchButton.classList.remove(
                                                  gt.TORCH_BUTTON_CLASS_TORCH_ON
                                              ),
                                              E.torchButton.classList.add(
                                                  gt.TORCH_BUTTON_CLASS_TORCH_OFF
                                              )),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                    u.appendChild(this.torchButton);
            }),
            (h.prototype.updateTorchCapability = function (u) {
                this.torchController = new ti(
                    u,
                    this,
                    this.onTorchActionFailureCallback
                );
            }),
            (h.prototype.getTorchButton = function () {
                return this.torchButton;
            }),
            (h.prototype.hide = function () {
                this.torchButton.style.display = "none";
            }),
            (h.prototype.show = function () {
                this.torchButton.style.display = "inline-block";
            }),
            (h.prototype.disable = function () {
                this.torchButton.disabled = !0;
            }),
            (h.prototype.enable = function () {
                this.torchButton.disabled = !1;
            }),
            (h.prototype.setText = function (u) {
                this.torchButton.innerText = u;
            }),
            (h.prototype.reset = function () {
                (this.torchButton.innerText = Ce.torchOnButton()),
                    this.torchController.reset();
            }),
            (h.create = function (u, l, w, E) {
                var d = new h(l, E);
                return d.render(u, w), d;
            }),
            h
        );
    })(),
    Rs = (function () {
        function h(u, l, w) {
            (this.fileBasedScanRegion = this.createFileBasedScanRegion()),
                (this.fileBasedScanRegion.style.display = l ? "block" : "none"),
                u.appendChild(this.fileBasedScanRegion);
            var E = document.createElement("label");
            E.setAttribute("for", this.getFileScanInputId()),
                (E.style.display = "inline-block"),
                this.fileBasedScanRegion.appendChild(E),
                (this.fileSelectionButton = vt.createElement(
                    "button",
                    gt.FILE_SELECTION_BUTTON_ID
                )),
                this.setInitialValueToButton(),
                this.fileSelectionButton.addEventListener(
                    "click",
                    function (D) {
                        E.click();
                    }
                ),
                E.append(this.fileSelectionButton),
                (this.fileScanInput = vt.createElement(
                    "input",
                    this.getFileScanInputId()
                )),
                (this.fileScanInput.type = "file"),
                (this.fileScanInput.accept = "image/*"),
                (this.fileScanInput.style.display = "none"),
                E.appendChild(this.fileScanInput);
            var d = this;
            this.fileScanInput.addEventListener("change", function (D) {
                if (!(D == null || D.target == null)) {
                    var v = D.target;
                    if (!(v.files && v.files.length === 0)) {
                        var C = v.files,
                            O = C[0],
                            _ = O.name;
                        d.setImageNameToButton(_), w(O);
                    }
                }
            });
            var y = this.createDragAndDropMessage();
            this.fileBasedScanRegion.appendChild(y),
                this.fileBasedScanRegion.addEventListener(
                    "dragenter",
                    function (D) {
                        (d.fileBasedScanRegion.style.border =
                            d.fileBasedScanRegionActiveBorder()),
                            D.stopPropagation(),
                            D.preventDefault();
                    }
                ),
                this.fileBasedScanRegion.addEventListener(
                    "dragleave",
                    function (D) {
                        (d.fileBasedScanRegion.style.border =
                            d.fileBasedScanRegionDefaultBorder()),
                            D.stopPropagation(),
                            D.preventDefault();
                    }
                ),
                this.fileBasedScanRegion.addEventListener(
                    "dragover",
                    function (D) {
                        (d.fileBasedScanRegion.style.border =
                            d.fileBasedScanRegionActiveBorder()),
                            D.stopPropagation(),
                            D.preventDefault();
                    }
                ),
                this.fileBasedScanRegion.addEventListener("drop", function (D) {
                    D.stopPropagation(),
                        D.preventDefault(),
                        (d.fileBasedScanRegion.style.border =
                            d.fileBasedScanRegionDefaultBorder());
                    var v = D.dataTransfer;
                    if (v) {
                        var C = v.files;
                        if (!C || C.length === 0) return;
                        for (var O = !1, _ = 0; _ < C.length; ++_) {
                            var ie = C.item(_);
                            if (ie) {
                                var J = /image.*/;
                                if (ie.type.match(J)) {
                                    O = !0;
                                    var De = ie.name;
                                    d.setImageNameToButton(De),
                                        w(ie),
                                        (y.innerText = Ce.dragAndDropMessage());
                                    break;
                                }
                            }
                        }
                        O || (y.innerText = Ce.dragAndDropMessageOnlyImages());
                    }
                });
        }
        return (
            (h.prototype.hide = function () {
                (this.fileBasedScanRegion.style.display = "none"),
                    (this.fileScanInput.disabled = !0);
            }),
            (h.prototype.show = function () {
                (this.fileBasedScanRegion.style.display = "block"),
                    (this.fileScanInput.disabled = !1);
            }),
            (h.prototype.isShowing = function () {
                return this.fileBasedScanRegion.style.display === "block";
            }),
            (h.prototype.resetValue = function () {
                (this.fileScanInput.value = ""), this.setInitialValueToButton();
            }),
            (h.prototype.createFileBasedScanRegion = function () {
                var u = document.createElement("div");
                return (
                    (u.style.textAlign = "center"),
                    (u.style.margin = "auto"),
                    (u.style.width = "80%"),
                    (u.style.maxWidth = "600px"),
                    (u.style.border = this.fileBasedScanRegionDefaultBorder()),
                    (u.style.padding = "10px"),
                    (u.style.marginBottom = "10px"),
                    u
                );
            }),
            (h.prototype.fileBasedScanRegionDefaultBorder = function () {
                return "6px dashed #ebebeb";
            }),
            (h.prototype.fileBasedScanRegionActiveBorder = function () {
                return "6px dashed rgb(153 151 151)";
            }),
            (h.prototype.createDragAndDropMessage = function () {
                var u = document.createElement("div");
                return (
                    (u.innerText = Ce.dragAndDropMessage()),
                    (u.style.fontWeight = "400"),
                    u
                );
            }),
            (h.prototype.setImageNameToButton = function (u) {
                var l = 20;
                if (u.length > l) {
                    var w = u.substring(0, 8),
                        E = u.length,
                        d = u.substring(E - 8, E);
                    u = "".concat(w, "....").concat(d);
                }
                var y = Ce.fileSelectionChooseAnother() + " - " + u;
                this.fileSelectionButton.innerText = y;
            }),
            (h.prototype.setInitialValueToButton = function () {
                var u =
                    Ce.fileSelectionChooseImage() +
                    " - " +
                    Ce.fileSelectionNoImageSelected();
                this.fileSelectionButton.innerText = u;
            }),
            (h.prototype.getFileScanInputId = function () {
                return "html5-qrcode-private-filescan-input";
            }),
            (h.create = function (u, l, w) {
                var E = new h(u, l, w);
                return E;
            }),
            h
        );
    })(),
    vs = (function () {
        function h(u) {
            (this.selectElement = vt.createElement(
                "select",
                gt.CAMERA_SELECTION_SELECT_ID
            )),
                (this.cameras = u),
                (this.options = []);
        }
        return (
            (h.prototype.render = function (u) {
                var l = document.createElement("span");
                l.style.marginRight = "10px";
                var w = this.cameras.length;
                if (w === 0) throw new Error("No cameras found");
                if (w === 1) l.style.display = "none";
                else {
                    var E = Ce.selectCamera();
                    l.innerText = ""
                        .concat(E, " (")
                        .concat(this.cameras.length, ")  ");
                }
                for (var d = 1, y = 0, D = this.cameras; y < D.length; y++) {
                    var v = D[y],
                        C = v.id,
                        O = v.label == null ? C : v.label;
                    (!O || O === "") &&
                        (O = [Ce.anonymousCameraPrefix(), d++].join(" "));
                    var _ = document.createElement("option");
                    (_.value = C),
                        (_.innerText = O),
                        this.options.push(_),
                        this.selectElement.appendChild(_);
                }
                l.appendChild(this.selectElement), u.appendChild(l);
            }),
            (h.prototype.disable = function () {
                this.selectElement.disabled = !0;
            }),
            (h.prototype.isDisabled = function () {
                return this.selectElement.disabled === !0;
            }),
            (h.prototype.enable = function () {
                this.selectElement.disabled = !1;
            }),
            (h.prototype.getValue = function () {
                return this.selectElement.value;
            }),
            (h.prototype.hasValue = function (u) {
                for (var l = 0, w = this.options; l < w.length; l++) {
                    var E = w[l];
                    if (E.value === u) return !0;
                }
                return !1;
            }),
            (h.prototype.setValue = function (u) {
                if (!this.hasValue(u))
                    throw new Error(
                        "".concat(u, " is not present in the camera list.")
                    );
                this.selectElement.value = u;
            }),
            (h.prototype.hasSingleItem = function () {
                return this.cameras.length === 1;
            }),
            (h.prototype.numCameras = function () {
                return this.cameras.length;
            }),
            (h.create = function (u, l) {
                var w = new h(l);
                return w.render(u), w;
            }),
            h
        );
    })(),
    Ls = (function () {
        function h() {
            (this.onChangeCallback = null),
                (this.zoomElementContainer = document.createElement("div")),
                (this.rangeInput = vt.createElement(
                    "input",
                    gt.ZOOM_SLIDER_ID
                )),
                (this.rangeInput.type = "range"),
                (this.rangeText = document.createElement("span")),
                (this.rangeInput.min = "1"),
                (this.rangeInput.max = "5"),
                (this.rangeInput.value = "1"),
                (this.rangeInput.step = "0.1");
        }
        return (
            (h.prototype.render = function (u, l) {
                (this.zoomElementContainer.style.display = l
                    ? "block"
                    : "none"),
                    (this.zoomElementContainer.style.padding = "5px 10px"),
                    (this.zoomElementContainer.style.textAlign = "center"),
                    u.appendChild(this.zoomElementContainer),
                    (this.rangeInput.style.display = "inline-block"),
                    (this.rangeInput.style.width = "50%"),
                    (this.rangeInput.style.height = "5px"),
                    (this.rangeInput.style.background = "#d3d3d3"),
                    (this.rangeInput.style.outline = "none"),
                    (this.rangeInput.style.opacity = "0.7");
                var w = Ce.zoom();
                (this.rangeText.innerText = ""
                    .concat(this.rangeInput.value, "x ")
                    .concat(w)),
                    (this.rangeText.style.marginRight = "10px");
                var E = this;
                this.rangeInput.addEventListener("input", function () {
                    return E.onValueChange();
                }),
                    this.rangeInput.addEventListener("change", function () {
                        return E.onValueChange();
                    }),
                    this.zoomElementContainer.appendChild(this.rangeInput),
                    this.zoomElementContainer.appendChild(this.rangeText);
            }),
            (h.prototype.onValueChange = function () {
                var u = Ce.zoom();
                (this.rangeText.innerText = ""
                    .concat(this.rangeInput.value, "x ")
                    .concat(u)),
                    this.onChangeCallback &&
                        this.onChangeCallback(
                            parseFloat(this.rangeInput.value)
                        );
            }),
            (h.prototype.setValues = function (u, l, w, E) {
                (this.rangeInput.min = u.toString()),
                    (this.rangeInput.max = l.toString()),
                    (this.rangeInput.step = E.toString()),
                    (this.rangeInput.value = w.toString()),
                    this.onValueChange();
            }),
            (h.prototype.show = function () {
                this.zoomElementContainer.style.display = "block";
            }),
            (h.prototype.hide = function () {
                this.zoomElementContainer.style.display = "none";
            }),
            (h.prototype.setOnCameraZoomValueChangeCallback = function (u) {
                this.onChangeCallback = u;
            }),
            (h.prototype.removeOnCameraZoomValueChangeCallback = function () {
                this.onChangeCallback = null;
            }),
            (h.create = function (u, l) {
                var w = new h();
                return w.render(u, l), w;
            }),
            h
        );
    })(),
    dt;
(function (h) {
    (h[(h.STATUS_DEFAULT = 0)] = "STATUS_DEFAULT"),
        (h[(h.STATUS_SUCCESS = 1)] = "STATUS_SUCCESS"),
        (h[(h.STATUS_WARNING = 2)] = "STATUS_WARNING"),
        (h[(h.STATUS_REQUESTING_PERMISSION = 3)] =
            "STATUS_REQUESTING_PERMISSION");
})(dt || (dt = {}));
function Bs(h) {
    return {
        fps: h.fps,
        qrbox: h.qrbox,
        aspectRatio: h.aspectRatio,
        disableFlip: h.disableFlip,
        videoConstraints: h.videoConstraints,
    };
}
function Ps(h, u) {
    return {
        formatsToSupport: h.formatsToSupport,
        useBarCodeDetectorIfSupported: h.useBarCodeDetectorIfSupported,
        experimentalFeatures: h.experimentalFeatures,
        verbose: u,
    };
}
var Fs = (function () {
    function h(u, l, w) {
        if (
            ((this.lastMatchFound = null),
            (this.cameraScanImage = null),
            (this.fileScanImage = null),
            (this.fileSelectionUi = null),
            (this.elementId = u),
            (this.config = this.createConfig(l)),
            (this.verbose = w === !0),
            !document.getElementById(u))
        )
            throw "HTML Element with id=".concat(u, " not found");
        (this.scanTypeSelector = new Gt(this.config.supportedScanTypes)),
            (this.currentScanType = this.scanTypeSelector.getDefaultScanType()),
            (this.sectionSwapAllowed = !0),
            (this.logger = new si(this.verbose)),
            (this.persistedDataManager = new Ss()),
            l.rememberLastUsedCamera !== !0 &&
                this.persistedDataManager.reset();
    }
    return (
        (h.prototype.render = function (u, l) {
            var w = this;
            (this.lastMatchFound = null),
                (this.qrCodeSuccessCallback = function (d, y) {
                    if (u) u(d, y);
                    else {
                        if (w.lastMatchFound === d) return;
                        (w.lastMatchFound = d),
                            w.setHeaderMessage(
                                Ce.lastMatch(d),
                                dt.STATUS_SUCCESS
                            );
                    }
                }),
                (this.qrCodeErrorCallback = function (d, y) {
                    l && l(d, y);
                });
            var E = document.getElementById(this.elementId);
            if (!E)
                throw "HTML Element with id=".concat(
                    this.elementId,
                    " not found"
                );
            (E.innerHTML = ""),
                this.createBasicLayout(E),
                (this.html5Qrcode = new qr(
                    this.getScanRegionId(),
                    Ps(this.config, this.verbose)
                ));
        }),
        (h.prototype.pause = function (u) {
            (Dt(u) || u !== !0) && (u = !1),
                this.getHtml5QrcodeOrFail().pause(u);
        }),
        (h.prototype.resume = function () {
            this.getHtml5QrcodeOrFail().resume();
        }),
        (h.prototype.getState = function () {
            return this.getHtml5QrcodeOrFail().getState();
        }),
        (h.prototype.clear = function () {
            var u = this,
                l = function () {
                    var w = document.getElementById(u.elementId);
                    w && ((w.innerHTML = ""), u.resetBasicLayout(w));
                };
            return this.html5Qrcode
                ? new Promise(function (w, E) {
                      if (!u.html5Qrcode) {
                          w();
                          return;
                      }
                      u.html5Qrcode.isScanning
                          ? u.html5Qrcode
                                .stop()
                                .then(function (d) {
                                    if (!u.html5Qrcode) {
                                        w();
                                        return;
                                    }
                                    u.html5Qrcode.clear(), l(), w();
                                })
                                .catch(function (d) {
                                    u.verbose &&
                                        u.logger.logError(
                                            "Unable to stop qrcode scanner",
                                            d
                                        ),
                                        E(d);
                                })
                          : (u.html5Qrcode.clear(), l(), w());
                  })
                : Promise.resolve();
        }),
        (h.prototype.getRunningTrackCapabilities = function () {
            return this.getHtml5QrcodeOrFail().getRunningTrackCapabilities();
        }),
        (h.prototype.getRunningTrackSettings = function () {
            return this.getHtml5QrcodeOrFail().getRunningTrackSettings();
        }),
        (h.prototype.applyVideoConstraints = function (u) {
            return this.getHtml5QrcodeOrFail().applyVideoConstraints(u);
        }),
        (h.prototype.getHtml5QrcodeOrFail = function () {
            if (!this.html5Qrcode) throw "Code scanner not initialized.";
            return this.html5Qrcode;
        }),
        (h.prototype.createConfig = function (u) {
            return u
                ? (u.fps || (u.fps = It.SCAN_DEFAULT_FPS),
                  u.rememberLastUsedCamera !==
                      !It.DEFAULT_REMEMBER_LAST_CAMERA_USED &&
                      (u.rememberLastUsedCamera =
                          It.DEFAULT_REMEMBER_LAST_CAMERA_USED),
                  u.supportedScanTypes ||
                      (u.supportedScanTypes = It.DEFAULT_SUPPORTED_SCAN_TYPE),
                  u)
                : {
                      fps: It.SCAN_DEFAULT_FPS,
                      rememberLastUsedCamera:
                          It.DEFAULT_REMEMBER_LAST_CAMERA_USED,
                      supportedScanTypes: It.DEFAULT_SUPPORTED_SCAN_TYPE,
                  };
        }),
        (h.prototype.createBasicLayout = function (u) {
            (u.style.position = "relative"),
                (u.style.padding = "0px"),
                (u.style.border = "1px solid silver"),
                this.createHeader(u);
            var l = document.createElement("div"),
                w = this.getScanRegionId();
            (l.id = w),
                (l.style.width = "100%"),
                (l.style.minHeight = "100px"),
                (l.style.textAlign = "center"),
                u.appendChild(l),
                Gt.isCameraScanType(this.currentScanType)
                    ? this.insertCameraScanImageToScanRegion()
                    : this.insertFileScanImageToScanRegion();
            var E = document.createElement("div"),
                d = this.getDashboardId();
            (E.id = d),
                (E.style.width = "100%"),
                u.appendChild(E),
                this.setupInitialDashboard(E);
        }),
        (h.prototype.resetBasicLayout = function (u) {
            u.style.border = "none";
        }),
        (h.prototype.setupInitialDashboard = function (u) {
            this.createSection(u),
                this.createSectionControlPanel(),
                this.scanTypeSelector.hasMoreThanOneScanType() &&
                    this.createSectionSwap();
        }),
        (h.prototype.createHeader = function (u) {
            var l = document.createElement("div");
            (l.style.textAlign = "left"),
                (l.style.margin = "0px"),
                u.appendChild(l);
            var w = new Ms();
            w.renderInto(l);
            var E = document.createElement("div");
            (E.id = this.getHeaderMessageContainerId()),
                (E.style.display = "none"),
                (E.style.textAlign = "center"),
                (E.style.fontSize = "14px"),
                (E.style.padding = "2px 10px"),
                (E.style.margin = "4px"),
                (E.style.borderTop = "1px solid #f6f6f6"),
                l.appendChild(E);
        }),
        (h.prototype.createSection = function (u) {
            var l = document.createElement("div");
            (l.id = this.getDashboardSectionId()),
                (l.style.width = "100%"),
                (l.style.padding = "10px 0px 10px 0px"),
                (l.style.textAlign = "left"),
                u.appendChild(l);
        }),
        (h.prototype.createCameraListUi = function (u, l, w) {
            var E = this;
            E.showHideScanTypeSwapLink(!1),
                E.setHeaderMessage(Ce.cameraPermissionRequesting());
            var d = function () {
                w || E.createPermissionButton(u, l);
            };
            qr.getCameras()
                .then(function (y) {
                    E.persistedDataManager.setHasPermission(!0),
                        E.showHideScanTypeSwapLink(!0),
                        E.resetHeaderMessage(),
                        y && y.length > 0
                            ? (u.removeChild(l), E.renderCameraSelection(y))
                            : (E.setHeaderMessage(
                                  Ce.noCameraFound(),
                                  dt.STATUS_WARNING
                              ),
                              d());
                })
                .catch(function (y) {
                    E.persistedDataManager.setHasPermission(!1),
                        w ? (w.disabled = !1) : d(),
                        E.setHeaderMessage(y, dt.STATUS_WARNING),
                        E.showHideScanTypeSwapLink(!0);
                });
        }),
        (h.prototype.createPermissionButton = function (u, l) {
            var w = this,
                E = vt.createElement(
                    "button",
                    this.getCameraPermissionButtonId()
                );
            (E.innerText = Ce.cameraPermissionTitle()),
                E.addEventListener("click", function () {
                    (E.disabled = !0), w.createCameraListUi(u, l, E);
                }),
                l.appendChild(E);
        }),
        (h.prototype.createPermissionsUi = function (u, l) {
            var w = this;
            if (
                Gt.isCameraScanType(this.currentScanType) &&
                this.persistedDataManager.hasCameraPermissions()
            ) {
                ei.hasPermissions()
                    .then(function (E) {
                        E
                            ? w.createCameraListUi(u, l)
                            : (w.persistedDataManager.setHasPermission(!1),
                              w.createPermissionButton(u, l));
                    })
                    .catch(function (E) {
                        w.persistedDataManager.setHasPermission(!1),
                            w.createPermissionButton(u, l);
                    });
                return;
            }
            this.createPermissionButton(u, l);
        }),
        (h.prototype.createSectionControlPanel = function () {
            var u = document.getElementById(this.getDashboardSectionId()),
                l = document.createElement("div");
            u.appendChild(l);
            var w = document.createElement("div");
            (w.id = this.getDashboardSectionCameraScanRegionId()),
                (w.style.display = Gt.isCameraScanType(this.currentScanType)
                    ? "block"
                    : "none"),
                l.appendChild(w);
            var E = document.createElement("div");
            (E.style.textAlign = "center"),
                w.appendChild(E),
                this.scanTypeSelector.isCameraScanRequired() &&
                    this.createPermissionsUi(w, E),
                this.renderFileScanUi(l);
        }),
        (h.prototype.renderFileScanUi = function (u) {
            var l = Gt.isFileScanType(this.currentScanType),
                w = this,
                E = function (d) {
                    if (!w.html5Qrcode) throw "html5Qrcode not defined";
                    Gt.isFileScanType(w.currentScanType) &&
                        (w.setHeaderMessage(Ce.loadingImage()),
                        w.html5Qrcode
                            .scanFileV2(d, !0)
                            .then(function (y) {
                                w.resetHeaderMessage(),
                                    w.qrCodeSuccessCallback(y.decodedText, y);
                            })
                            .catch(function (y) {
                                w.setHeaderMessage(y, dt.STATUS_WARNING),
                                    w.qrCodeErrorCallback(y, ii.createFrom(y));
                            }));
                };
            this.fileSelectionUi = Rs.create(u, l, E);
        }),
        (h.prototype.renderCameraSelection = function (u) {
            var l = this,
                w = this,
                E = document.getElementById(
                    this.getDashboardSectionCameraScanRegionId()
                );
            E.style.textAlign = "center";
            var d = Ls.create(E, !1),
                y = function (K) {
                    var Ee = K.zoomFeature();
                    if (Ee.isSupported()) {
                        d.setOnCameraZoomValueChangeCallback(function (ce) {
                            Ee.apply(ce);
                        });
                        var ze = 1;
                        l.config.defaultZoomValueIfSupported &&
                            (ze = l.config.defaultZoomValueIfSupported),
                            (ze = ts(ze, Ee.min(), Ee.max())),
                            d.setValues(Ee.min(), Ee.max(), ze, Ee.step()),
                            d.show();
                    }
                },
                D = vs.create(E, u),
                v = document.createElement("span"),
                C = vt.createElement("button", gt.CAMERA_START_BUTTON_ID);
            (C.innerText = Ce.scanButtonStartScanningText()), v.appendChild(C);
            var O = vt.createElement("button", gt.CAMERA_STOP_BUTTON_ID);
            (O.innerText = Ce.scanButtonStopScanningText()),
                (O.style.display = "none"),
                (O.disabled = !0),
                v.appendChild(O);
            var _,
                ie = function (K) {
                    if (!K.torchFeature().isSupported()) {
                        _ && _.hide();
                        return;
                    }
                    _
                        ? _.updateTorchCapability(K.torchFeature())
                        : (_ = Ds.create(
                              v,
                              K.torchFeature(),
                              { display: "none", marginLeft: "5px" },
                              function (Ee) {
                                  w.setHeaderMessage(Ee, dt.STATUS_WARNING);
                              }
                          )),
                        _.show();
                };
            E.appendChild(v);
            var J = function (K) {
                K || (C.style.display = "none"),
                    (C.innerText = Ce.scanButtonStartScanningText()),
                    (C.style.opacity = "1"),
                    (C.disabled = !1),
                    K && (C.style.display = "inline-block");
            };
            if (
                (C.addEventListener("click", function (K) {
                    (C.innerText = Ce.scanButtonScanningStarting()),
                        D.disable(),
                        (C.disabled = !0),
                        (C.style.opacity = "0.5"),
                        l.scanTypeSelector.hasMoreThanOneScanType() &&
                            w.showHideScanTypeSwapLink(!1),
                        w.resetHeaderMessage();
                    var Ee = D.getValue();
                    w.persistedDataManager.setLastUsedCameraId(Ee),
                        w.html5Qrcode
                            .start(
                                Ee,
                                Bs(w.config),
                                w.qrCodeSuccessCallback,
                                w.qrCodeErrorCallback
                            )
                            .then(function (ze) {
                                (O.disabled = !1),
                                    (O.style.display = "inline-block"),
                                    J(!1);
                                var ce =
                                    w.html5Qrcode.getRunningTrackCameraCapabilities();
                                l.config.showTorchButtonIfSupported === !0 &&
                                    ie(ce),
                                    l.config.showZoomSliderIfSupported === !0 &&
                                        y(ce);
                            })
                            .catch(function (ze) {
                                w.showHideScanTypeSwapLink(!0),
                                    D.enable(),
                                    J(!0),
                                    w.setHeaderMessage(ze, dt.STATUS_WARNING);
                            });
                }),
                D.hasSingleItem() && C.click(),
                O.addEventListener("click", function (K) {
                    if (!w.html5Qrcode) throw "html5Qrcode not defined";
                    (O.disabled = !0),
                        w.html5Qrcode
                            .stop()
                            .then(function (Ee) {
                                l.scanTypeSelector.hasMoreThanOneScanType() &&
                                    w.showHideScanTypeSwapLink(!0),
                                    D.enable(),
                                    (C.disabled = !1),
                                    (O.style.display = "none"),
                                    (C.style.display = "inline-block"),
                                    _ && (_.reset(), _.hide()),
                                    d.removeOnCameraZoomValueChangeCallback(),
                                    d.hide(),
                                    w.insertCameraScanImageToScanRegion();
                            })
                            .catch(function (Ee) {
                                (O.disabled = !1),
                                    w.setHeaderMessage(Ee, dt.STATUS_WARNING);
                            });
                }),
                w.persistedDataManager.getLastUsedCameraId())
            ) {
                var De = w.persistedDataManager.getLastUsedCameraId();
                D.hasValue(De)
                    ? (D.setValue(De), C.click())
                    : w.persistedDataManager.resetLastUsedCameraId();
            }
        }),
        (h.prototype.createSectionSwap = function () {
            var u = this,
                l = Ce.textIfCameraScanSelected(),
                w = Ce.textIfFileScanSelected(),
                E = document.getElementById(this.getDashboardSectionId()),
                d = document.createElement("div");
            d.style.textAlign = "center";
            var y = vt.createElement(
                "span",
                this.getDashboardSectionSwapLinkId()
            );
            (y.style.textDecoration = "underline"),
                (y.style.cursor = "pointer"),
                (y.innerText = Gt.isCameraScanType(this.currentScanType)
                    ? l
                    : w),
                y.addEventListener("click", function () {
                    if (!u.sectionSwapAllowed) {
                        u.verbose &&
                            u.logger.logError(
                                "Section swap called when not allowed"
                            );
                        return;
                    }
                    u.resetHeaderMessage(),
                        u.fileSelectionUi.resetValue(),
                        (u.sectionSwapAllowed = !1),
                        Gt.isCameraScanType(u.currentScanType)
                            ? (u.clearScanRegion(),
                              (u.getCameraScanRegion().style.display = "none"),
                              u.fileSelectionUi.show(),
                              (y.innerText = w),
                              (u.currentScanType = Wt.SCAN_TYPE_FILE),
                              u.insertFileScanImageToScanRegion())
                            : (u.clearScanRegion(),
                              (u.getCameraScanRegion().style.display = "block"),
                              u.fileSelectionUi.hide(),
                              (y.innerText = l),
                              (u.currentScanType = Wt.SCAN_TYPE_CAMERA),
                              u.insertCameraScanImageToScanRegion(),
                              u.startCameraScanIfPermissionExistsOnSwap()),
                        (u.sectionSwapAllowed = !0);
                }),
                d.appendChild(y),
                E.appendChild(d);
        }),
        (h.prototype.startCameraScanIfPermissionExistsOnSwap = function () {
            var u = this,
                l = this;
            if (this.persistedDataManager.hasCameraPermissions()) {
                ei.hasPermissions()
                    .then(function (w) {
                        if (w) {
                            var E = document.getElementById(
                                l.getCameraPermissionButtonId()
                            );
                            if (!E)
                                throw (
                                    (u.logger.logError(
                                        "Permission button not found, fail;"
                                    ),
                                    "Permission button not found")
                                );
                            E.click();
                        } else l.persistedDataManager.setHasPermission(!1);
                    })
                    .catch(function (w) {
                        l.persistedDataManager.setHasPermission(!1);
                    });
                return;
            }
        }),
        (h.prototype.resetHeaderMessage = function () {
            var u = document.getElementById(this.getHeaderMessageContainerId());
            u.style.display = "none";
        }),
        (h.prototype.setHeaderMessage = function (u, l) {
            l || (l = dt.STATUS_DEFAULT);
            var w = this.getHeaderMessageDiv();
            switch (((w.innerText = u), (w.style.display = "block"), l)) {
                case dt.STATUS_SUCCESS:
                    (w.style.background = "rgba(106, 175, 80, 0.26)"),
                        (w.style.color = "#477735");
                    break;
                case dt.STATUS_WARNING:
                    (w.style.background = "rgba(203, 36, 49, 0.14)"),
                        (w.style.color = "#cb2431");
                    break;
                case dt.STATUS_DEFAULT:
                default:
                    (w.style.background = "rgba(0, 0, 0, 0)"),
                        (w.style.color = "rgb(17, 17, 17)");
                    break;
            }
        }),
        (h.prototype.showHideScanTypeSwapLink = function (u) {
            this.scanTypeSelector.hasMoreThanOneScanType() &&
                (u !== !0 && (u = !1),
                (this.sectionSwapAllowed = u),
                (this.getDashboardSectionSwapLink().style.display = u
                    ? "inline-block"
                    : "none"));
        }),
        (h.prototype.insertCameraScanImageToScanRegion = function () {
            var u = this,
                l = document.getElementById(this.getScanRegionId());
            if (this.cameraScanImage) {
                (l.innerHTML = "<br>"), l.appendChild(this.cameraScanImage);
                return;
            }
            (this.cameraScanImage = new Image()),
                (this.cameraScanImage.onload = function (w) {
                    (l.innerHTML = "<br>"), l.appendChild(u.cameraScanImage);
                }),
                (this.cameraScanImage.width = 64),
                (this.cameraScanImage.style.opacity = "0.8"),
                (this.cameraScanImage.src = Is),
                (this.cameraScanImage.alt = Ce.cameraScanAltText());
        }),
        (h.prototype.insertFileScanImageToScanRegion = function () {
            var u = this,
                l = document.getElementById(this.getScanRegionId());
            if (this.fileScanImage) {
                (l.innerHTML = "<br>"), l.appendChild(this.fileScanImage);
                return;
            }
            (this.fileScanImage = new Image()),
                (this.fileScanImage.onload = function (w) {
                    (l.innerHTML = "<br>"), l.appendChild(u.fileScanImage);
                }),
                (this.fileScanImage.width = 64),
                (this.fileScanImage.style.opacity = "0.8"),
                (this.fileScanImage.src = Ts),
                (this.fileScanImage.alt = Ce.fileScanAltText());
        }),
        (h.prototype.clearScanRegion = function () {
            var u = document.getElementById(this.getScanRegionId());
            u.innerHTML = "";
        }),
        (h.prototype.getDashboardSectionId = function () {
            return "".concat(this.elementId, "__dashboard_section");
        }),
        (h.prototype.getDashboardSectionCameraScanRegionId = function () {
            return "".concat(this.elementId, "__dashboard_section_csr");
        }),
        (h.prototype.getDashboardSectionSwapLinkId = function () {
            return gt.SCAN_TYPE_CHANGE_ANCHOR_ID;
        }),
        (h.prototype.getScanRegionId = function () {
            return "".concat(this.elementId, "__scan_region");
        }),
        (h.prototype.getDashboardId = function () {
            return "".concat(this.elementId, "__dashboard");
        }),
        (h.prototype.getHeaderMessageContainerId = function () {
            return "".concat(this.elementId, "__header_message");
        }),
        (h.prototype.getCameraPermissionButtonId = function () {
            return gt.CAMERA_PERMISSION_BUTTON_ID;
        }),
        (h.prototype.getCameraScanRegion = function () {
            return document.getElementById(
                this.getDashboardSectionCameraScanRegionId()
            );
        }),
        (h.prototype.getDashboardSectionSwapLink = function () {
            return document.getElementById(
                this.getDashboardSectionSwapLinkId()
            );
        }),
        (h.prototype.getHeaderMessageDiv = function () {
            return document.getElementById(this.getHeaderMessageContainerId());
        }),
        h
    );
})();
const ni = "html5qr-code-full-region",
    ks = (h) => {
        let u = {};
        return (
            h.fps && (u.fps = h.fps),
            h.qrbox ? (u.qrbox = h.qrbox) : (u.qrbox = 1200),
            h.aspectRatio && (u.aspectRatio = h.aspectRatio),
            h.disableFlip !== void 0 && (u.disableFlip = h.disableFlip),
            u
        );
    },
    Us = (h) => (
        Sn.useEffect(() => {
            const u = ks(h),
                l = h.verbose === !0;
            if (!h.qrCodeSuccessCallback)
                throw "qrCodeSuccessCallback is a required callback.";
            const w = new Fs(ni, u, l);
            return (
                w.render(h.qrCodeSuccessCallback, h.qrCodeErrorCallback),
                () => {
                    w.clear().catch((E) => {
                        console.error(
                            "Failed to clear html5QrcodeScanner. ",
                            E
                        );
                    });
                }
            );
        }, []),
        $("div", { id: ni, style: { width: "100%", height: "100%" } })
    ),
    Hs = ({ total_presences: h, qrCodes: u, ...l }) => {
        const { auth: w } = zi().props,
            { data: E, meta: d, links: y } = l.presences,
            [D, v] = Sn.useState(""),
            [C, O] = Sn.useState(!1),
            [_, ie] = Sn.useState(!1),
            J = (Me) => {
                Me.preventDefault(),
                    v(Me.target.value),
                    hr.get(
                        "/admin/presence",
                        { search: Me.target.value },
                        { preserveState: !0 }
                    );
            },
            [De, K] = Sn.useState([]),
            Ee = (Me, fe) => {
                const U = JSON.parse(Me),
                    le = new Date(U.date),
                    k = new Date(),
                    Lt = k.getDate(),
                    qe = k.getMonth() + 1,
                    q = k.getFullYear(),
                    we = `${Lt}-${qe}-${q}`,
                    Pe = `${le.getDate()}-${
                        le.getMonth() + 1
                    }-${le.getFullYear()}`;
                Pe !== we
                    ? dr.error("Presence Failed")
                    : (hr.post(
                          route("admin.presence.store"),
                          { date: Pe, user_id: w.user.id },
                          {
                              onSuccess: () => {
                                  dr.success("Presence");
                              },
                          }
                      ),
                      K((R) => [...R, De]));
            },
            ze = () => {
                O(!0);
            },
            ce = () => {
                O(!1);
            },
            Z = () => {
                ie(!0);
            },
            ae = (Me) => {
                hr.post(
                    route("admin.presence.store"),
                    { user_id: Me },
                    { onSuccess: () => dr.success("Presence") }
                );
            };
        return _t(ur, {
            children: [
                $(ji, { title: "Presence" }),
                C &&
                    $(Ur, {
                        className: "pt-12",
                        children: $("div", {
                            className:
                                "border mx-auto rounded border-gray-300 p-4",
                            children: $(Us, {
                                className: "rounded-lg bg-primary",
                                fps: 5,
                                qrbox: 800,
                                disableFlip: !1,
                                qrCodeSuccessCallback: Ee,
                            }),
                        }),
                    }),
                $(Ur, {
                    children: _t("div", {
                        className: "flex flex-wrap w-full mt-10 gap-4",
                        children: [
                            $("div", {
                                className:
                                    " mx-auto flex flex-1 mt-6 items-center justify-center rounded border border-gray-300 p-4 lg:w-1/3 ",
                                children:
                                    w.user.status == "admin" ||
                                    w.user.status == "owner"
                                        ? $(ur, {
                                              children: _
                                                  ? $("div", {
                                                        dangerouslySetInnerHTML:
                                                            { __html: u },
                                                    })
                                                  : $("div", {
                                                        className:
                                                            "h-full flex items-center justify-center",
                                                        children: $(Hr, {
                                                            size: 100,
                                                            color: "gray",
                                                        }),
                                                    }),
                                          })
                                        : $("div", {
                                              className:
                                                  "h-full flex items-center justify-center",
                                              children: $(Hr, {
                                                  size: 100,
                                                  color: "gray",
                                              }),
                                          }),
                            }),
                            _t("div", {
                                className: "p-4 w-full lg:w-2/3",
                                children: [
                                    $("h3", {
                                        className:
                                            "text-2xl mb-4 font-semibold text-fourth",
                                        children: "Presence",
                                    }),
                                    _t("div", {
                                        className:
                                            "flex flex-wrap justify-between w-full items-center my-2",
                                        children: [
                                            _t("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    $(Xi, {
                                                        href: route(
                                                            "admin.dashboard"
                                                        ),
                                                    }),
                                                    w.user.status == "admin"
                                                        ? $(fr, {
                                                              className:
                                                                  "w-10 h-10",
                                                              type: "button",
                                                              onClick: (Me) => {
                                                                  Z(),
                                                                      ae(
                                                                          w.user
                                                                              .id
                                                                      );
                                                              },
                                                              children: $(
                                                                  Ji,
                                                                  {}
                                                              ),
                                                          })
                                                        : $(ur, {
                                                              children: C
                                                                  ? $(fr, {
                                                                        className:
                                                                            "w-10 h-10",
                                                                        type: "button",
                                                                        onClick:
                                                                            ce,
                                                                        children:
                                                                            $(
                                                                                qi,
                                                                                {}
                                                                            ),
                                                                    })
                                                                  : $(fr, {
                                                                        className: `w-10 h-10 ${
                                                                            C
                                                                                ? "cursor-not-allowed"
                                                                                : ""
                                                                        } `,
                                                                        disabled:
                                                                            C,
                                                                        type: "button",
                                                                        onClick:
                                                                            ze,
                                                                        children:
                                                                            $(
                                                                                $i,
                                                                                {}
                                                                            ),
                                                                    }),
                                                          }),
                                                ],
                                            }),
                                            $(Yi, {
                                                type: "search",
                                                className: "w-3/4 sm:w-1/4",
                                                placeholder:
                                                    "Search presence..",
                                                defaultValue: D,
                                                onChange: J,
                                            }),
                                        ],
                                    }),
                                    $("div", {
                                        className: "w-full",
                                        children: _t(ut, {
                                            children: [
                                                $(ut.Thead, {
                                                    children: _t("tr", {
                                                        children: [
                                                            $(ut.Th, {
                                                                children: "#",
                                                            }),
                                                            $(ut.Th, {
                                                                children:
                                                                    "Name",
                                                            }),
                                                            $(ut.Th, {
                                                                children:
                                                                    "Status",
                                                            }),
                                                            $(ut.Th, {
                                                                children:
                                                                    "Presence Date",
                                                            }),
                                                            $(ut.Th, {
                                                                children:
                                                                    "Is Presence",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                $(ut.Tbody, {
                                                    children:
                                                        E.length > 0
                                                            ? E.map((Me, fe) =>
                                                                  _t(
                                                                      "tr",
                                                                      {
                                                                          className:
                                                                              "bg-white border-b text-secondary",
                                                                          children:
                                                                              [
                                                                                  $(
                                                                                      ut.Td,
                                                                                      {
                                                                                          className:
                                                                                              "w-5",
                                                                                          children:
                                                                                              d.from +
                                                                                              fe,
                                                                                      }
                                                                                  ),
                                                                                  $(
                                                                                      ut.Td,
                                                                                      {
                                                                                          children:
                                                                                              Me
                                                                                                  .user
                                                                                                  .name,
                                                                                      }
                                                                                  ),
                                                                                  $(
                                                                                      ut.Td,
                                                                                      {
                                                                                          children:
                                                                                              $(
                                                                                                  "span",
                                                                                                  {
                                                                                                      className: `text-xs p-2 ${
                                                                                                          Me
                                                                                                              .user
                                                                                                              .status ==
                                                                                                          "employee"
                                                                                                              ? "bg-green-500 text-white rounded"
                                                                                                              : Me
                                                                                                                    .user
                                                                                                                    .status ==
                                                                                                                "admin"
                                                                                                              ? "bg-yellow-400 text-white rounded"
                                                                                                              : "bg-red-500 text-white rounded"
                                                                                                      }`,
                                                                                                      children:
                                                                                                          Me.user.status.toUpperCase(),
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  $(
                                                                                      ut.Td,
                                                                                      {
                                                                                          children:
                                                                                              Me.presence_date,
                                                                                      }
                                                                                  ),
                                                                                  $(
                                                                                      ut.Td,
                                                                                      {
                                                                                          className:
                                                                                              "w-32 text-center",
                                                                                          children:
                                                                                              Me.is_presence ==
                                                                                              1
                                                                                                  ? $(
                                                                                                        Zi,
                                                                                                        {
                                                                                                            color: "green",
                                                                                                        }
                                                                                                    )
                                                                                                  : $(
                                                                                                        Qi,
                                                                                                        {
                                                                                                            color: "red",
                                                                                                        }
                                                                                                    ),
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      },
                                                                      fe
                                                                  )
                                                              )
                                                            : $("tr", {
                                                                  className:
                                                                      "bg-white border-b text-secondary text-center",
                                                                  children: $(
                                                                      ut.Td,
                                                                      {
                                                                          colSpan:
                                                                              "5",
                                                                          children:
                                                                              "No data",
                                                                      }
                                                                  ),
                                                              }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    E.length > 0 &&
                                        _t("div", {
                                            className:
                                                "flex w-full justify-between items-center",
                                            children: [
                                                $(Gi, { meta: d, links: y }),
                                                _t("p", {
                                                    className:
                                                        "text-sm text-third mt-10",
                                                    children: [
                                                        "Total Presence: ",
                                                        $("span", {
                                                            className:
                                                                "font-bold",
                                                            children: h,
                                                        }),
                                                        " ",
                                                    ],
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
    };
Hs.layout = (h) => $(Wi, { children: h });
export { Hs as default };
