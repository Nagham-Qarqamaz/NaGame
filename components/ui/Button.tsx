interface ButtonInterface {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonInterface) {
    return (
        <button
            className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-background bg-primary hover:bg-highlight rounded-lg sm:rounded-xl transition-colors duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
