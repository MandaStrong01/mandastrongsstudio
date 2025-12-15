"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export function QuickMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  return (
    <div className="fixed right-6 top-6 z-50">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      {showMenu && (
        <div className="absolute right-0 top-14 w-56 rounded-lg bg-black/95 p-2 shadow-2xl backdrop-blur-sm">
          <button
            onClick={() => {
              setShowMenu(false)
              router.push("/page3")
            }}
            className="w-full rounded px-4 py-3 text-left text-white transition-colors hover:bg-purple-600"
          >
            Login / Register
          </button>
          <button
            onClick={() => {
              setShowMenu(false)
              router.push("/page4")
            }}
            className="w-full rounded px-4 py-3 text-left text-white transition-colors hover:bg-purple-600"
          >
            AI Tool Boards
          </button>
          <button
            onClick={() => {
              setShowMenu(false)
              router.push("/page11")
            }}
            className="w-full rounded px-4 py-3 text-left text-white transition-colors hover:bg-purple-600"
          >
            Editor Suite
          </button>
          <button
            onClick={() => {
              setShowMenu(false)
              router.push("/page16")
            }}
            className="w-full rounded px-4 py-3 text-left text-white transition-colors hover:bg-purple-600"
          >
            Export Options
          </button>
          <button
            onClick={() => {
              setShowMenu(false)
              router.push("/page19")
            }}
            className="w-full rounded px-4 py-3 text-left text-white transition-colors hover:bg-purple-600"
          >
            Support
          </button>
        </div>
      )}
    </div>
  )
}
