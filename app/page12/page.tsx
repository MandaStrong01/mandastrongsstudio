"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Page12() {
  const [selectedClip, setSelectedClip] = useState<number | null>(null)

  const clips = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Clip ${i + 1}`,
    duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0")}`,
  }))

  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Media Library</h2>
          <p className="text-white/60">Organize and manage your video clips</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clips.map((clip) => (
            <button
              key={clip.id}
              onClick={() => setSelectedClip(clip.id)}
              className={`rounded-lg border-2 p-4 text-left transition-all ${
                selectedClip === clip.id
                  ? "border-[#00ff41] bg-[#00ff41]/10"
                  : "border-[#00ff41]/50 bg-black hover:border-[#00ff41]"
              }`}
            >
              <div className="mb-2 aspect-video rounded bg-black/50"></div>
              <p className="font-semibold text-white">{clip.name}</p>
              <p className="text-sm text-white/60">{clip.duration}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page11")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page13")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Next Screen
          </Button>
        </div>
      </main>
    </div>
  )
}
