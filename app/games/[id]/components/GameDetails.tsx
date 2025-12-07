import { Game } from "@/types";

interface Props {
    game: Game;
}

export default function GameDetails({ game }: Props) {
    return (
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h1 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-sm">
                {game.title}
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {game.description}
            </p>

            <p className="text-highlight text-xs sm:text-sm tracking-wide uppercase">
                {game.category}
            </p>
        </div>
    );
}
