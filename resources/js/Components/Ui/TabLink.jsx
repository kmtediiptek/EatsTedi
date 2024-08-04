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
                    "md:bg-primary text-primary md:text-white hover:text-primary md:hover:text-white":
                        active,
                    "md:border md:border-primary md:hover:bg-primary hover:text-primary md:hover:text-white text-base text-fourth md:text-primary":
                        !active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
