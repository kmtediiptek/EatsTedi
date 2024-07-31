import clsx from "clsx";
import React from "react";

const Table = ({ children, className }) => {
    return (
        <div className={clsx(className, "w-full relative overflow-x-auto")}>
            <table
                className={clsx(
                    "w-full text-sm text-left",
                    className
                )}
            >
                {children}
            </table>
        </div>
    );
};

const Thead = ({ children, className }) => {
    return (
        <thead
            className={clsx(
                "text-xs text-fourth uppercase bg-secondary/50",
                className
            )}
        >
            {children}
        </thead>
    );
};

const Tbody = ({ children, className }) => {
    return <tbody className={clsx("px-6 py-3 text-fourth", className)}>{children}</tbody>;
};

const Th = ({ children, className }) => {
    return (
        <th scope="col" className={clsx("px-6 py-3", className)}>
            {children}
        </th>
    );
};

const Td = ({ children, className, colSpan }) => {
    return (
        <td className={clsx("px-6 py-3", className)} colSpan={colSpan}>
            {children}
        </td>
    );
};

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Th = Th;
Table.Td = Td;

export default Table;
