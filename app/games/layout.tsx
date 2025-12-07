import Container from "@/components/layout/Container";

export default function GamesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Container>{children}</Container>;
}
