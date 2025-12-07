"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Container from "./Container";

export default function MainContent({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    if (isHomepage) {
        return <>{children}</>;
    }

    return <Container>{children}</Container>;
}
