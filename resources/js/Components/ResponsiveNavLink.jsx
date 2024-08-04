import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-primary text-primary bg-indigo-50 focus:text-primary focus:bg-secondary focus:border-primary'
                    : 'border-transparent text-fourth hover:text-fourth hover:bg-secondary hover:border-secondary focus:text-fourth focus:bg-secondary focus:border-secondary'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
