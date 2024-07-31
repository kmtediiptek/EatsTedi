const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        colors: {
            primary: "#f97316",
            secondary: "#d4d4d8",
            third: "#64748b",
            fourth: "#334155",
            white: "#FFFFFF",
            dark: "#666",
            danger: "#ef4444",
            violet: "#8b5cf6",
            emerald: "#34d399",
            sky: "#0ea5e9",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
