export default function MarketingLayout({
    children
}: {children: React.ReactNode}) {
    return (
        <main className="flex items-center justify-center bg-[F0F0F0] dark:bg-[1F1F1F]">
            {children}
        </main>
    )
} 