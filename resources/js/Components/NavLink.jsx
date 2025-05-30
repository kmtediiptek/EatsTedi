import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-primary text-fourth focus:border-primary "
                    : "border-transparent text-third hover:text-fourth hover:border-secondary focus:text-fourth focus:border-secondary ") +
                className
            }
        >
            {children}
        </Link>
    );
}
