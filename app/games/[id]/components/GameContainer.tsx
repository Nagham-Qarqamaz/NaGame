import GameIframe from "./GameIframe";
import GameSidebar from "./GameSidebar";
import RelatedGames from "./RelatedGames";
import { Game } from "@/types";

interface Props {
    game: Game;
    allGames: Game[];
}

export default function GameContainer({ game, allGames }: Props) {

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="w-full">
                    <GameIframe iframeUrl={game.iframeUrl} />
                    <div className="hidden lg:block">
                        <RelatedGames currentGame={game} allGames={allGames} />
                    </div>
                </div>
                <div className="lg:w-[40%]">
                    <div className="hidden lg:block">
                        <GameSidebar game={game} />
                    </div>
                    <div className="hidden sm:flex lg:hidden gap-8">
                        <RelatedGames currentGame={game} allGames={allGames} />
                        <div className="w-[100%] mt-[5.5rem]">
                            <GameSidebar game={game} />
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <GameSidebar game={game} />
                        <RelatedGames currentGame={game} allGames={allGames} />
                    </div>
                </div>
            </div>
        </div>
    );
}
