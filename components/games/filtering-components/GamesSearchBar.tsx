"use client";

import SearchBar from "@/components/ui/SearchBar";
import { useGameStore } from "@/stores/gameStore";

export default function GamesSearchBar() {
    const search = useGameStore((state) => state.search);
    const setSearch = useGameStore((state) => state.setSearch);

    return (
        <SearchBar
            search={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}
