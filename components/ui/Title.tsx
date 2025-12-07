export default function Title({ text }: { text: string }) {
    return (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow-[0_0_12px_var(--primary)]">
            {text}
        </h2>
    );
}
