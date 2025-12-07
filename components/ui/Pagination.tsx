"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const delta = 1;
        const range = [];
        const rangeWithDots = [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...");
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push("...", totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 pt-6 sm:pt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_8px_var(--primary)]"
            >
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
            </button>

            <div className="flex justify-center items-center gap-1 sm:gap-2">
                {getVisiblePages().map((page, index) => (
                    <div key={index}>
                        {page === "..." ? (
                            <span className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-foreground/60 text-xs sm:text-sm">
                                ...
                            </span>
                        ) : (
                            <button
                                onClick={() => onPageChange(page as number)}
                                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    currentPage === page
                                        ? "bg-highlight/20 shadow-[0_0_12px_var(--highlight)] border border-highlight/30"
                                        : "text-foreground hover:bg-highlight/10 hover:shadow-[0_0_8px_var(--highlight)]"
                                }`}
                            >
                                {page}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cursor-pointer px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_8px_var(--primary)]"
            >
                Next
            </button>
        </div>
    );
}
