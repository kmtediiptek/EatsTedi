import clsx from 'clsx';
import React from 'react';

function Header({ className = '', children }) {
    return (
        <div
            className={clsx(
                className,
                'max-w-8xl mx-auto mb-4 lg:px-8 grid grid-cols-2 items-center mb-16 md:mb-12 bg-purple-500 py-12 lg:py-48 sm:pb-32 pb-12 gap-4'
            )}
        >
            <div className="col-span-10 col-start-1">
                <div className="max-w-4xl">{children}</div>
            </div>
        </div>
    );
}

function Title({ children }) {
    return (
        <h1 className="text-2xl font-bold text-white lg:text-6xl">
            {children}
        </h1>
    );
}

function Subtitle({ children }) {
    return (
        <h4 className="mt-2 lg:mt-6 leading-relaxed text-slate-50 lg:text-2xl">
            {children}
        </h4>
    );
}

function Content({ children }) {
    return (
        <div className="mt-6 leading-relaxed text-slate-200 lg:text-xl">
            {children}
        </div>
    );
}

Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Content = Content;

export default Header;
