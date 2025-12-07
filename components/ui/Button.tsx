"use client";

interface ButtonInterface {
    text: string;
    onClick: () => void;
    className?: string;
}

export default function Button({ text, onClick, className }: ButtonInterface) {
    return (
        <button
            className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-background bg-primary hover:bg-highlight rounded-lg sm:rounded-xl transition-colors duration-300 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
