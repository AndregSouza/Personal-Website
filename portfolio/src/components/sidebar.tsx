"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LineChart, Package, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-gray-200 overflow-y-auto">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:pl-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">Andre Souza</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start pl-2 text-sm font-medium lg:pl-4">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

            <Link
              href="/projects"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/projects" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
            >
              <Package className="h-4 w-4" />
              Projects
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/about" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
            >
              <Users className="h-4 w-4" />
              About
            </Link>

            <Link
              href="/writing"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/writing" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
            >
              <LineChart className="h-4 w-4" />
              Writing
            </Link>

            <Link
              href="/photography"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/photography" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
            >
              <LineChart className="h-4 w-4" />
              Photography
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
