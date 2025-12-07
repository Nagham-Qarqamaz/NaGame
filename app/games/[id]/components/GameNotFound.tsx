export default function GameNotFound({ gameId }: { gameId: string }) {
    return (
        <div className="text-center">
            <div className="text-secondary text-3xl mb-6">Game Not Found</div>
            <div className="text-primary text-xl">
                The game with ID{" "}
                <span className="text-highlight">{gameId}</span> could not be
                located.
            </div>
        </div>
    );
}
