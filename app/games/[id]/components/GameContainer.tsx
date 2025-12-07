"use client";

import GameIframe from "./GameIframe";
import GameSidebar from "./GameSidebar";
import { Game } from "@/types";

interface Props {
    game: Game;
}

export default function GameContainer({ game }: Props) {
    return (
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
            <GameIframe iframeUrl={game.iframeUrl} />
            <GameSidebar game={game} />
        </div>
    );
}
