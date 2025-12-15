"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Scissors, Copy, Trash2, Split } from "lucide-react"

export default function Page13() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const editTools = [
    { name: "Cut", icon: Scissors, action: "cut" },
    { name: "Copy", icon: Copy, action: "copy" },
    { name: "Split", icon: Split, action: "split" },
    { name: "Delete", icon: Trash2, action: "delete" },
  ]

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
          <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Editing Tools</h2>
          <p className="text-white/60">Cut, trim, and arrange your footage</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {editTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Button
                key={tool.action}
                onClick={() => setSelectedTool(tool.action)}
                className={`h-32 flex-col gap-2 border-2 ${
                  selectedTool === tool.action ? "border-[#00ff41] bg-[#00ff41]/10" : "border-[#00ff41]/50"
                } bg-black text-white hover:border-[#00ff41] hover:bg-[#00ff41]/5`}
              >
                <Icon className="h-8 w-8" />
                <span className="text-lg font-semibold">{tool.name}</span>
              </Button>
            )
          })}
        </div>

        <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
          <h3 className="mb-4 text-xl font-bold text-white">Timeline Editor</h3>
          <div className="h-64 rounded bg-black/50 p-4">
            <div className="grid h-full grid-rows-3 gap-2">
              {["Video Track 1", "Audio Track 1", "Music Track"].map((track, i) => (
                <div key={i} className="rounded border border-[#00ff41]/30 bg-black/30 p-2">
                  <span className="text-sm text-white/60">{track}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page12")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page14")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Next Screen
          </Button>
        </div>
      </main>
    </div>
  )
}
