import { create } from "zustand";
import { Game } from "@/types";
import { featuredGames, games } from "@/utils/constants";

interface GameState {
    games: Game[];
    featuredGames: Game[];
    search: string;
    categoriesSelected: string[];
    categories: string[];

    setGames: (games: Game[]) => void;
    fetchFeaturedGames: () => void;
    setSearch: (value: string) => void;
    setCategoriesSelected: (value: string[]) => void;
}

export const useGameStore = create<GameState>((set) => ({
    games: [],
    featuredGames: [],
    search: "",
    categoriesSelected: [],
    categories: [],

    setGames: (games) =>
        set({
            games,
            categories: Array.from(new Set(games.map((g) => g.category))),
        }),
    fetchFeaturedGames: () => {
        const featured = games.filter((game) =>
            featuredGames.includes(game.id)
        );
        set({ featuredGames: featured });
    },
    setSearch: (value) => set({ search: value }),
    setCategoriesSelected: (value) => set({ categoriesSelected: value }),
}));
