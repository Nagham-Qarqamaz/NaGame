"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGameStore } from "@/stores/gameStore";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const games = useGameStore((state) => state.games);

    const getBreadcrumbs = () => {
        const segments = pathname.split("/").filter(Boolean);
        const breadcrumbs = [{ label: "Home", href: "/" }];

        if (segments.length === 0) {
            return breadcrumbs;
        }

        let currentPath = "";

        segments.forEach((segment, index) => {
            currentPath += `/${segment}`;

            if (segment === "games") {
                breadcrumbs.push({
                    label: "Games",
                    href: "/games",
                });
            } else if (index > 0 && segments[index - 1] === "games") {
                const game = games.find((g) => g.id === segment);
                breadcrumbs.push({
                    label: game ? game.title : segment,
                    href: currentPath,
                });
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    if (breadcrumbs.length <= 1) {
        return null;
    }

    return (
        <nav className="bg-black/50 border-b border-gray-800/50 py-2 sm:py-3 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm overflow-x-auto">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li key={breadcrumb.href} className="flex items-center">
                            {index > 0 && (
                                <svg
                                    className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mx-1 sm:mx-2 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-highlight font-medium whitespace-nowrap">
                                    {breadcrumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={breadcrumb.href}
                                    className="text-foreground/80 hover:text-primary transition-all duration-300 whitespace-nowrap"
                                >
                                    {breadcrumb.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}
