import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center justify-center font-sans">
            <main className="w-full 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] px-4 py-8 lg:px-16 lg:py-6 flex flex-col items-center gap-32">
                {children}
            </main>
        </div>
    );
}
