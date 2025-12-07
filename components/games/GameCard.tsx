import Link from "next/link";
import Image from "next/image";
import { Game } from "@/types";

export default function GameCard({ game }: { game: Game }) {
    return (
        <Link
            href={`/games/${game.id}`}
            className="relative w-full h-60 sm:h-48 rounded-xl overflow-hidden cursor-pointer group"
        >
            <Image
                src={game.thumbnail}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            <h3 className="absolute bottom-3 left-3 text-white font-bold text-lg drop-shadow-md">
                {game.title}
            </h3>
        </Link>
    );
}
