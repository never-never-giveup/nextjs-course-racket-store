"use client"

import { usePathname } from "next/navigation";
import { Link } from "@/components/link";
import { FC } from "react";

export const Header: FC = () => {
    const pathname = usePathname();
    return (
        <header className="w-full border-b bg-white py-4 px-4 md:px-8">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">

                {/* 1. LEFT SIDE (Empty placeholder on desktop to balance the layout) */}
                <div className="hidden md:block md:flex-1" />

                {/* 2. LOGO */}
                <div className="font-bold tracking-wider text-sm md:flex-1 md:text-center">
                    TENNIS STORE
                </div>

                {/* 3. NAVIGATION LINKS */}
                <nav className="flex gap-4 md:gap-6 text-sm text-muted-foreground md:flex-1 md:justify-end">
                    <Link href="/" active={pathname === '/'}>Главная</Link>
                    <Link href="/rackets" active={pathname === '/rackets'}>Ракетки</Link>
                </nav>

            </div>
        </header>
    );
}