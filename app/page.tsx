"use client";

import FeaturedGames from "@/components/games/FeaturedGames";
import Features from "@/components/sections/Features";
import Banner from "@/components/sections/Banner";
import Container from "@/components/layout/Container";

export default function Home() {
    return (
        <>
            <Banner />
            <Container>
                <FeaturedGames />
                <Features />
            </Container>
        </>
    );
}
