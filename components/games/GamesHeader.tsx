import Title from "../ui/Title";

export default function GamesHeader() {
    return (
        <div className="text-center space-y-2 sm:space-y-4 px-4 sm:px-0">
            <Title text="Game Library" />
            <p className="text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto">
                Discover and explore our collection of amazing games. Use the
                filters below to find your next adventure.
            </p>
        </div>
    );
}
