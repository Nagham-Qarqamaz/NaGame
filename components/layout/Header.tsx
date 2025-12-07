"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative bg-black border-b border-gray-800 shadow-[0_4px_12px_rgba(0,255,255,0.1)] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <h1 className="text-xl sm:text-2xl font-bold text-primary drop-shadow-[0_0_8px_var(--primary)]">
                                NaGame
                            </h1>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 text-foreground hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden sm:flex space-x-4 md:space-x-8">
                        <Link
                            href="/"
                            className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                pathname === "/"
                                    ? "text-primary bg-primary/10 shadow-[0_0_12px_var(--primary)] border border-primary/30"
                                    : "text-foreground hover:text-primary hover:shadow-[0_0_8px_var(--primary)] hover:bg-primary/5"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/games"
                            className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                pathname.startsWith("/games")
                                    ? "text-secondary bg-secondary/10 shadow-[0_0_12px_var(--secondary)] border border-secondary/30"
                                    : "text-foreground hover:text-secondary hover:shadow-[0_0_8px_var(--secondary)] hover:bg-secondary/5"
                            }`}
                        >
                            Games
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile navigation - absolute overlay */}
            <nav
                className={`sm:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800 shadow-[0_4px_12px_rgba(0,255,255,0.1)] overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 py-4 flex flex-col space-y-2">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            pathname === "/"
                                ? "text-primary bg-primary/10 shadow-[0_0_12px_var(--primary)] border border-primary/30"
                                : "text-foreground hover:text-primary hover:shadow-[0_0_8px_var(--primary)] hover:bg-primary/5"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/games"
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            pathname.startsWith("/games")
                                ? "text-secondary bg-secondary/10 shadow-[0_0_12px_var(--secondary)] border border-secondary/30"
                                : "text-foreground hover:text-secondary hover:shadow-[0_0_8px_var(--secondary)] hover:bg-secondary/5"
                        }`}
                    >
                        Games
                    </Link>
                </div>
            </nav>
        </header>
    );
}