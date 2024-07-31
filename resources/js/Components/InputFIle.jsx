import React, { useState } from "react";

export default function InputFile({
    picture,
    onChange,
    accept = ".jpg, .png, .jpeg",
}) {
    const [imagePreview, setImagePreview] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        onChange(event);
    };

    const renderImage = () => {
        if (imagePreview) {
            return (
                <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover  border border-1 border-gray-300 rounded mb-2"
                />
            );
        } else {
            const placeholderImageUrl = picture
                ? picture
                : "https://via.placeholder.com/150";
            return (
                <img
                    src={placeholderImageUrl}
                    alt="Placeholder"
                    className="w-32 h-32 object-cover rounded border border-1 border-gray-300 mb-2"
                />
            );
        }
    };

    return (
        <div className="flex flex-col items-center relative">
            {renderImage()}
            <label
                className={`border border-gray-300 ${
                    imagePreview
                        ? "bg-primary hover:bg-orange-400 text-white active:bg-primary"
                        : "file:text-fourth hover:bg-primary active:bg-primary hover:text-white"
                } transition duration-200 text-sm font-medium px-3 py-2 rounded text-fourth cursor-pointer`}
            >
                Choose File
                <input
                    accept={accept}
                    onChange={handleFileChange}
                    type="file"
                    className="hidden"
                />
            </label>
            <span className="text-xs text-third mt-1">
                The maximum image size is 2MB
            </span>
        </div>
    );
}

// import React from 'react';

// export default function InputFile({ onChange, accept = '.jpg, .png, .jpeg' }) {
//     return (
//         <input
//             accept={accept}
//             onChange={onChange}
//             type="file"
//             className="file:bg-third file:hover:bg-gray-300 file:transition file:duration-200  file:mr-3 file:text-primary file:text-sm file:font-medium file:px-2 file:py-2 file:rounded-lg file:border-0 text-third"
//         />
//     );
// }
