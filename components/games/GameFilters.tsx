"use client";

import GamesSearchBar from "./filtering-components/GamesSearchBar";
import GameCategoryFilter from "./filtering-components/GameCategoryFilter";

export default function GameFilters() {
    return (
        <div className="bg-black/30 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-end">
                <div className="flex-1 min-w-0">
                    <GamesSearchBar />
                </div>
                <div className="w-full sm:w-48">
                    <GameCategoryFilter />
                </div>
            </div>
        </div>
    );
}
