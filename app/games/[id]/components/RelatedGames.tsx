import { Game } from "@/types";
import { getRelatedGames } from "@/utils/getRelatedGames";
import GameCard from "@/components/games/GameCard";

interface Props {
    currentGame: Game;
    allGames: Game[];
}

export default function RelatedGames({ currentGame, allGames }: Props) {
    const relatedGames = getRelatedGames(currentGame, allGames);

    if (relatedGames.length === 0) return null;

    return (
        <section className="w-full mt-8 lg:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Similar Games
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {relatedGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    );
}
