"use client";

import { useEffect } from "react";
import { games } from "@/utils/constants";
import { useGameStore } from "@/stores/gameStore";

export default function GameInitializer() {
    const setGames = useGameStore((state) => state.setGames);

    useEffect(() => {
        setGames(games);
    }, [setGames]);

    return null;
}
