"use client";

interface DropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export default function Dropdown({
    options,
    value,
    onChange,
    label,
}: DropdownProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <span className="mb-2 text-sm font-bold text-secondary">
                    {label}
                </span>
            )}
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="px-4 py-3 pr-10 border border-secondary/30 rounded-xl bg-black text-foreground font-medium focus:border-secondary focus:shadow-[0_0_12px_var(--secondary)] transition-all duration-300 outline-none cursor-pointer appearance-none w-full"
                >
                    <option value="All" className="hidden">
                        Choose Category
                    </option>
                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}
                            className="bg-black text-foreground"
                        >
                            {option}
                        </option>
                    ))}
                </select>
                <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/60 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
}
