import React from 'react';

export default function Textarea({ ...props }) {
    return (
        <textarea
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
            {...props}
        />
    );
}
