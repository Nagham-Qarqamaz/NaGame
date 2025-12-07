"use client";

import Button from "../ui/Button";

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
            <Button text="Clear Filters" onClick={onClearFilters} />
        </div>
    );
}
