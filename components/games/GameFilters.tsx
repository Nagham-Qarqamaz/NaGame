import GamesSearchBar from "./filtering-components/GamesSearchBar";
import GameCategoryFilter from "./filtering-components/GameCategoryFilter";
import { useGameStore } from "@/stores/gameStore";
import Button from "../ui/Button";

interface GameFiltersProps {
    onClearFilters: () => void;
}

export default function GameFilters({ onClearFilters }: GameFiltersProps) {
    const selectedCategories = useGameStore(
        (state) => state.categoriesSelected ?? []
    );
    const setSelectedCategories = useGameStore(
        (state) => state.setCategoriesSelected
    );

    const handleRemove = (category: string) => {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
    };

    return (
        <div className="bg-black/30 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-end">
                <div className="w-full sm:w-48">
                    <GameCategoryFilter />
                </div>
                <div className="flex-1 min-w-0">
                    <GamesSearchBar />
                </div>
                <div>
                    <Button
                        text="Clear Filters"
                        onClick={onClearFilters}
                        className="w-full"
                    />
                </div>
            </div>
            {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {selectedCategories.map((cat) => (
                        <div
                            key={cat}
                            className="flex items-center gap-2 bg-secondary/20 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-secondary/30"
                            onClick={() => handleRemove(cat)}
                        >
                            <span>{cat}</span>
                            <span className="font-bold">×</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
