import { Inter } from "next/font/google"
import "./globals.css"
import { NextThemesProvider } from "@/components/providers/NextThemesProvider"
import { CodeIcon, HeartIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "@/components/ui/ModeToggle"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}, container mx-auto flex min-h-screen flex-col px-[1rem] antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <nav className="flex w-full items-center justify-between py-4">
        </nav>
        <ModeToggle />
          <main className="flex-grow">{children}</main>
          <footer className="py-4">
            <div
              className="group flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
              aria-hidden={true}
            >
              <CodeIcon className="h-5 w-5" />
              <span>Justxd22</span>
            </div>
          </footer>
        </NextThemesProvider>

      </body>
    </html>
  )
}
