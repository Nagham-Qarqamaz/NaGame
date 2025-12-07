"use client";

import { useState } from "react";
import { useGameStore } from "@/stores/gameStore";
import GameFilters from "@/components/games/GameFilters";
import GamesHeader from "@/components/games/GamesHeader";
import GameGrid from "@/components/games/GameGrid";
import GameEmptyState from "@/components/games/GameEmptyState";
import GameResultsInfo from "@/components/games/GameResultsInfo";
import Pagination from "@/components/ui/Pagination";
import Loading from "@/components/ui/Loading";

const GAMES_PER_PAGE = 12;

export default function GamesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const games = useGameStore((state) => state.games);
    const isLoading = useGameStore((state) => state.isLoading);
    const search = useGameStore((state) => state.search);
    const categoriesSelected = useGameStore(
        (state) => state.categoriesSelected ?? []
    );
    const setSearch = useGameStore((state) => state.setSearch);
    const setCategoriesSelected = useGameStore(
        (state) => state.setCategoriesSelected
    );

    // Filter games by search and multi-category
    const filteredGames = games.filter((game) => {
        const matchesSearch = game.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            categoriesSelected.length === 0 ||
            categoriesSelected.includes(game.category);

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
        setCategoriesSelected([]);
        setCurrentPage(1);
    };

    if (isLoading) return <Loading />;

    return (
        <div className="space-y-8 w-full">
            <GamesHeader />
            <GameFilters onClearFilters={handleClearFilters} />

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
