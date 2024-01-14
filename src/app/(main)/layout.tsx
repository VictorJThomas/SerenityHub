"use client";

import { Sidebar } from "@/components/sidebar";

export default function ScenarioLayout({
    children
}: {children: React.ReactNode}) {
    return (
        <main className="h-full flex bg-[F0F0F0] dark:bg-[1F1F1F]">
            <Sidebar />
            {children}
        </main>
    )
} 