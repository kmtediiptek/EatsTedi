import React from "react";

export default function Textarea({ ...props }) {
    return (
        <textarea
            className="border-gray-300 focus:border-secondary focus:ring-secondary rounded-md shadow-sm w-full"
            {...props}
        />
    );
}
