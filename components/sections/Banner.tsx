import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Banner() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary via-secondary/50 to-secondary relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
            <div className="absolute inset-0 bg-[#00000077]" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    Play Your Favorite Games
                </h1>
                <div className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto my-6 sm:my-8 text-white/90 px-4">
                    <div>
                        Discover hundreds of free online games. No downloads, no
                        sign-ups.
                    </div>
                    <div>just instant fun right in your browser.</div>
                </div>
                <Link href="/games">
                    <Button text="Browse All Games" onClick={() => {}} />
                </Link>
            </div>
        </section>
    );
}
