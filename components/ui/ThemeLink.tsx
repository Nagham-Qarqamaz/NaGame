"use client";

import Link from "next/link";
import Button from "./Button";

interface ThemeLinkProps {
    text: string;
    href: string;
}

export default function ThemeLink({ text, href }: ThemeLinkProps) {
    return (
        <Link href={href}>
            <Button text={text} onClick={() => {}} />
        </Link>
    );
}
