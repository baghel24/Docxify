import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next";

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'Docxify',
  description: 'Your go-to collaborative editor',
}

export default function RootLayout({ children }: {children : ReactNode}) {
  return (
    <ClerkProvider
    
    appearance={
      {
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          fontSize:'16px'
        },
      }
    }>

    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
        >
        {children}
      </body>
    </html>
        </ClerkProvider>
  )
}

