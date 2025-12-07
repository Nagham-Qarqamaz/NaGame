"use client";

import Image from "next/image";

interface Props {
    iframeUrl: string;
}

export default function GameIframe({ iframeUrl }: Props) {
    function fullscreen() {
        const iframe = document.getElementById("game-iframe");
        if (iframe?.requestFullscreen) iframe.requestFullscreen();
    }

    return (
        <div className="w-full lg:flex-1 lg:min-w-0">
            <div className="relative w-full group">
                <iframe
                    id="game-iframe"
                    src={iframeUrl}
                    width="100%"
                    height="100%"
                    className="rounded-xl sm:rounded-2xl aspect-[4/3]"
                ></iframe>

                <div
                    className="absolute bottom-0 left-0 w-full bg-black/60 text-white
                                flex justify-end px-3 sm:px-4 py-2 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 rounded-b-xl sm:rounded-b-2xl"
                >
                    <button onClick={fullscreen} className="cursor-pointer">
                        <Image
                            src="/full-screen.svg"
                            alt="full screen"
                            width={30}
                            height={30}
                            className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
