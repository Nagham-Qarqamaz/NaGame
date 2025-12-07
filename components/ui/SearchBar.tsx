"use client";

interface SearchBarProps {
    search: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ search, onChange }: SearchBarProps) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={onChange}
                className="w-full p-3 pl-10 rounded-xl bg-black border border-primary/30 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--primary)] transition-all duration-300"
            />
            <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
}
