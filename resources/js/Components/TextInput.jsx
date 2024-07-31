import clsx from "clsx";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        value,
        inputMode = "",
        type = "text",
        placeholder = "",
        className = "",
        isFocused = false,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={clsx(
                "border-gray-300 text-third focus:border-indigo-500 border-1 focus:ring-indigo-200 focus:bg-white rounded-md shadow-sm bg-white",
                className
            )}
            ref={input}
            placeholder={placeholder}
            value={value}
        />
    );
});
