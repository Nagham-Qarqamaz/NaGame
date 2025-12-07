import Title from "../ui/Title";

export default function Features() {
    return (
        <section className="text-center w-full">
            <Title text="Why Join NaGame?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 sm:mt-12">
                <div className="bg-black rounded-lg p-6 sm:p-8 shadow-[0_0_16px_var(--secondary)] hover:shadow-[0_0_24px_var(--secondary)] transition duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">
                        Epic Challenges
                    </h3>
                    <p className="text-sm sm:text-base">
                        Face thrilling missions and push your skills to the
                        limit.
                    </p>
                </div>

                <div className="bg-black rounded-lg p-6 sm:p-8 shadow-[0_0_16px_var(--primary)] hover:shadow-[0_0_24px_var(--primary)] transition duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                        Immersive Worlds
                    </h3>
                    <p className="text-sm sm:text-base">
                        Explore beautifully designed realms with stunning
                        visuals.
                    </p>
                </div>

                <div className="bg-black rounded-lg p-6 sm:p-8 shadow-[0_0_16px_var(--highlight)] hover:shadow-[0_0_24px_var(--highlight)] transition duration-300 md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-highlight mb-3 sm:mb-4">
                        Master Your Skills
                    </h3>
                    <p className="text-sm sm:text-base">
                        Level up, improve your strategies, and become the
                        ultimate solo player.
                    </p>
                </div>
            </div>
        </section>
    );
}
