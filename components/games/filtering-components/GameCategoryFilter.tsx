"use client";

import { useGameStore } from "@/stores/gameStore";
import Dropdown from "@/components/ui/Dropdown";

export default function GameCategoryFilter() {
    const categories = useGameStore((state) => state.categories);
    const selectedCategories = useGameStore(
        (state) => state.categoriesSelected ?? []
    );
    const setSelectedCategories = useGameStore(
        (state) => state.setCategoriesSelected
    );

    const availableCategories = categories.filter(
        (cat) => !selectedCategories.includes(cat)
    );

    const handleSelect = (value: string) => {
        setSelectedCategories([...selectedCategories, value]);
    };

    return (
        <div className="flex flex-col gap-3">
            <Dropdown
                label="Categories"
                options={availableCategories}
                value=""
                onChange={handleSelect}
            />
        </div>
    );
}
