import { Link } from "@inertiajs/react";
import { IconArrowLeft } from "@tabler/icons-react";
import clsx from "clsx";

export default function ActionLink({ className, href, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
                "flex w-10 h-10 border border-primary rounded justify-center items-center text-primary",
                className
            )}
        >
            <IconArrowLeft size={18} />
        </Link>
    );
}
