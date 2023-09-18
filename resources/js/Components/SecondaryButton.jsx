export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2.5 justify-center bg-white border border-orange-300 rounded font-semibold text-xs text-orange-700 uppercase tracking-widest shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
