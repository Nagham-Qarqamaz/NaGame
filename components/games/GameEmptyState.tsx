"use client";

interface EmptyStateProps {
    onClearFilters: () => void;
}

export default function GameEmptyState({ onClearFilters }: EmptyStateProps) {
    return (
        <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
                No games found
            </h3>
            <p className="text-foreground/60 mb-4">
                Try adjusting your search terms or category filter.
            </p>
            <button
                onClick={onClearFilters}
                className="px-6 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 hover:shadow-[0_0_12px_var(--primary)] transition-all duration-300 border border-primary/30"
            >
                Clear Filters
            </button>
        </div>
    );
}
