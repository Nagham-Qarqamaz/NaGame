import { create } from "zustand";
import { Game } from "@/types";
import { featuredGames, games as allGames } from "@/utils/constants";

interface GameState {
    games: Game[];
    featuredGames: Game[];
    search: string;
    categoriesSelected: string[];
    categories: string[];
    isLoading: boolean;

    setGames: (games: Game[]) => void;
    fetchFeaturedGames: () => void;
    setSearch: (value: string) => void;
    setCategoriesSelected: (value: string[]) => void;
    setLoading: (loading: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
    games: [],
    featuredGames: [],
    search: "",
    categoriesSelected: [],
    categories: [],
    isLoading: true,
    error: null,

    setGames: (games) =>
        set({
            games,
            categories: Array.from(new Set(games.map((g) => g.category))),
            isLoading: false,
        }),
    fetchFeaturedGames: () => {
        const featured = allGames.filter((game) =>
            featuredGames.includes(game.id)
        );
        set({ featuredGames: featured });
    },
    setSearch: (value) => set({ search: value }),
    setCategoriesSelected: (value) => set({ categoriesSelected: value }),
    setLoading: (loading) => set({ isLoading: loading }),
}));
