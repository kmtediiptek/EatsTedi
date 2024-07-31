export default function ActionButton({
    className = "w-10 h-10 ",
    disabled,
    children,
    type = button,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `flex justify-center items-center bg-primary text-white rounded ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
