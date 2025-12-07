"use client";

import Image from "next/image";
import GameDetails from "./GameDetails";
import Button from "@/components/ui/Button";
import { Game } from "@/types";

interface Props {
    game: Game;
}

export default function GameSidebar({ game }: Props) {
    function scrollToGame() {
        document.getElementById("game-iframe")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_0_16px_var(--primary)]">
            <Image
                src={game.thumbnail}
                alt={game.title}
                width={512}
                height={384}
                className="rounded-lg sm:rounded-xl shadow-lg w-full h-auto"
            />

            <div className="flex flex-col justify-between mt-4 sm:mt-6 lg:mt-8">
                <GameDetails game={game} />

                <div className="mt-4 sm:mt-6">
                    <Button text="Play Now!" onClick={scrollToGame} />
                </div>
            </div>
        </div>
    );
}
