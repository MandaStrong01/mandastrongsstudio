"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Wand2, Mic, Music } from "lucide-react"

export default function Page15() {
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null)

  const effects = [
    { name: "AI Enhance", icon: Wand2, category: "Video" },
    { name: "Voice Cleanup", icon: Mic, category: "Audio" },
    { name: "Music Mix", icon: Music, category: "Audio" },
    { name: "Auto Color", icon: Wand2, category: "Video" },
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
          <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">AI Effects & Enhancement</h2>
          <p className="text-white/60">Apply AI-powered effects to your project</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {effects.map((effect) => {
            const Icon = effect.icon
            return (
              <Button
                key={effect.name}
                onClick={() => setSelectedEffect(effect.name)}
                className={`h-32 flex-col gap-2 border-2 ${
                  selectedEffect === effect.name ? "border-[#00ff41] bg-[#00ff41]/10" : "border-[#00ff41]/50"
                } bg-black text-white hover:border-[#00ff41] hover:bg-[#00ff41]/5`}
              >
                <Icon className="h-8 w-8" />
                <span className="text-lg font-semibold">{effect.name}</span>
                <span className="text-xs text-white/60">{effect.category}</span>
              </Button>
            )
          })}
        </div>

        <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
          <h3 className="mb-4 text-xl font-bold text-white">Effect Preview</h3>
          <div className="aspect-video rounded bg-black/50 p-4">
            <div className="flex h-full items-center justify-center">
              <p className="text-white/60">
                {selectedEffect ? `Previewing: ${selectedEffect}` : "Select an effect to preview"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page14")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page16")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Export Options
          </Button>
        </div>
      </main>
    </div>
  )
}
