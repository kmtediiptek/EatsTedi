export default function ActionButton({ className = '', disabled, children, type = button, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
