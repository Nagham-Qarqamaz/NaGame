"use client";

import { useState } from "react";
import { useGameStore } from "@/stores/gameStore";
import GameFilters from "@/components/games/GameFilters";
import GamesHeader from "@/components/games/GamesHeader";
import GameGrid from "@/components/games/GameGrid";
import GameEmptyState from "@/components/games/GameEmptyState";
import GameResultsInfo from "@/components/games/GameResultsInfo";
import Pagination from "@/components/ui/Pagination";

const GAMES_PER_PAGE = 12;

export default function GamesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const games = useGameStore((state) => state.games);
    const search = useGameStore((state) => state.search);
    const category = useGameStore((state) => state.category);
    const setSearch = useGameStore((state) => state.setSearch);
    const setCategory = useGameStore((state) => state.setCategory);

    const filteredGames = games.filter((game) => {
        const matchesSearch = game.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesCategory =
            category === "All" || game.category === category;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE);

    // Reset to page 1 if current page exceeds total pages
    const safePage =
        currentPage > totalPages && totalPages > 0 ? 1 : currentPage;
    const startIndex = (safePage - 1) * GAMES_PER_PAGE;
    const endIndex = startIndex + GAMES_PER_PAGE;
    const currentGames = filteredGames.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleClearFilters = () => {
        setSearch("");
        setCategory("All");
        setCurrentPage(1);
    };

    return (
        <div className="space-y-8 w-full">
            <GamesHeader />
            <GameFilters />

            <GameResultsInfo
                startIndex={startIndex}
                endIndex={endIndex}
                totalGames={filteredGames.length}
                currentPage={safePage}
                totalPages={totalPages}
            />

            {currentGames.length > 0 ? (
                <>
                    <GameGrid games={currentGames} />
                    <Pagination
                        currentPage={safePage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <GameEmptyState onClearFilters={handleClearFilters} />
            )}
        </div>
    );
}
