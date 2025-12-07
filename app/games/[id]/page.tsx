"use client";

import { useParams } from "next/navigation";
import GameNotFound from "./components/GameNotFound";
import GameContainer from "./components/GameContainer";
import { useGameStore } from "@/stores/gameStore";
import Loading from "@/components/ui/Loading";

export default function GamePage() {
    const { id: gameId } = useParams<{ id: string }>();
    const games = useGameStore((state) => state.games);
    const isLoading = useGameStore((state) => state.isLoading);

    if (isLoading) return <Loading />;

    const game = games.find((g) => g.id === gameId);

    if (!game) return <GameNotFound gameId={gameId} />;

    return <GameContainer game={game} allGames={games} />;
}
