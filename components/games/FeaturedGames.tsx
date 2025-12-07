"use client";

import { useEffect } from "react";
import { useGameStore } from "@/stores/gameStore";
import GameCard from "./GameCard";
import Title from "../ui/Title";

export default function FeaturedGames() {
    const { featuredGames, fetchFeaturedGames } = useGameStore();

    useEffect(() => {
        fetchFeaturedGames();
    }, [fetchFeaturedGames]);

    return (
        <section className="w-full py-4 sm:py-8 flex flex-col items-center">
            <Title text="Featured Games" />
            <div className="w-full mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {featuredGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    );
}
