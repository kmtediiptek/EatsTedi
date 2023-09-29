export default function ActionButton({ className = 'w-8 h-8 ', disabled, children, type = button, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `flex justify-center items-center bg-orange-500 text-white rounded ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
