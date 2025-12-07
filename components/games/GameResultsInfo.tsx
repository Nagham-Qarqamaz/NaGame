interface GameResultsInfoProps {
    startIndex: number;
    endIndex: number;
    totalGames: number;
    currentPage: number;
    totalPages: number;
}

export default function GameResultsInfo({ 
    startIndex, 
    endIndex, 
    totalGames, 
    currentPage, 
    totalPages 
}: GameResultsInfoProps) {
    if (totalPages <= 1) {
        return (
            <p className="text-foreground/60">
                Showing {totalGames} {totalGames === 1 ? 'game' : 'games'}
            </p>
        );
    }

    return (
        <div className="flex justify-between items-center">
            <p className="text-foreground/60">
                Showing {startIndex + 1}-{Math.min(endIndex, totalGames)} of {totalGames} games
            </p>
            <div className="text-sm text-foreground/60">
                Page {currentPage} of {totalPages}
            </div>
        </div>
    );
}