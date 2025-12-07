import { Game } from "@/types";

const CATEGORY_WEIGHT = 3;
const TITLE_WORD_WEIGHT = 1;

// Common words to ignore when comparing titles
const STOP_WORDS = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "of",
    "to",
    "in",
    "on",
    "for",
    "with",
    "is",
    "it",
    "at",
    "by",
    "from",
    "as",
    "be",
    "this",
    "that",
    "game",
    "games",
    "3d",
    "2d",
]);

function getSignificantWords(title: string): Set<string> {
    return new Set(
        title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .split(/\s+/)
            .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
    );
}

function calculateSimilarityScore(currentGame: Game, otherGame: Game): number {
    let score = 0;

    // Same category: +3 points
    if (currentGame.category === otherGame.category) {
        score += CATEGORY_WEIGHT;
    }

    // Similar words in title: +1 point each
    const currentWords = getSignificantWords(currentGame.title);
    const otherWords = getSignificantWords(otherGame.title);

    for (const word of currentWords) {
        if (otherWords.has(word)) {
            score += TITLE_WORD_WEIGHT;
        }
    }

    return score;
}

export function getRelatedGames(
    currentGame: Game,
    allGames: Game[],
    limit: number = 4
): Game[] {
    // Exclude the current game
    const otherGames = allGames.filter((g) => g.id !== currentGame.id);

    // 1. Get scored games
    const scored = otherGames.map((game) => ({
        game,
        score: calculateSimilarityScore(currentGame, game),
    }));

    // 2. Sort by score DESC
    const sorted = scored.sort((a, b) => b.score - a.score);

    // 3. Pick top related (score > 0)
    const related = sorted.filter((g) => g.score > 0).map((g) => g.game);

    // 4. If enough, return exactly `limit`
    if (related.length >= limit) return related.slice(0, limit);

    // 5. If NOT enough, fill with the next highest (even score = 0)
    const fallbackGames = sorted
        .filter((g) => !related.includes(g.game)) // avoid duplicates
        .map((g) => g.game);

    return [...related, ...fallbackGames].slice(0, limit);
}
