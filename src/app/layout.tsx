import type { Metadata } from 'next'
import { Geist, Geist_Mono, Open_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const openSans = Open_Sans({
    weight: '500',
    variable: '--font-open-sans',
    subsets: ['latin'],
    style: 'normal'
})

export const metadata: Metadata = {
    title: 'Portfolio - Ionut Daniel Ene'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${openSans.variable} antialiased dark bg-background text-foreground`}>
                <Providers>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </Providers>
            </body>
        </html>
    )
}
