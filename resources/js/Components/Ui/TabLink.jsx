import { Link } from "@inertiajs/react";
import clsx from "clsx";

export default function TabLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={clsx(
                "rounded py-2 px-3 text-base transition duration-150 ease-in-out",
                {
                    "bg-primary text-white hover:text-white": active,
                    "border border-primary hover:bg-primary hover:text-white text-base text-primary":
                        !active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
