"use client";
import { useGameStore } from "@/stores/gameStore";
import Dropdown from "@/components/ui/Dropdown";

export default function GameCategoryFilter() {
    const category = useGameStore((state) => state.category);
    const setCategory = useGameStore((state) => state.setCategory);

    const categories = useGameStore((state) => state.categories);

    return (
        <Dropdown
            label="Category"
            options={categories}
            value={category}
            onChange={setCategory}
        />
    );
}
