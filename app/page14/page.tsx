"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Page14() {
  const [brightness, setBrightness] = useState(50)
  const [contrast, setContrast] = useState(50)
  const [saturation, setSaturation] = useState(50)

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
          <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Color Grading</h2>
          <p className="text-white/60">Adjust colors and enhance your visuals</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg border-2 border-[#00ff41] bg-black/50">
            <div className="flex h-full items-center justify-center">
              <p className="text-xl text-white/60">Preview Window</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-[#00ff41] bg-black p-4">
              <span className="mb-2 block text-sm font-semibold text-white">Brightness: {brightness}%</span>
              <input
                type="range"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                max={100}
                min={0}
                step={1}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
              />
            </div>

            <div className="rounded-lg border border-[#00ff41] bg-black p-4">
              <span className="mb-2 block text-sm font-semibold text-white">Contrast: {contrast}%</span>
              <input
                type="range"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                max={100}
                min={0}
                step={1}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
              />
            </div>

            <div className="rounded-lg border border-[#00ff41] bg-black p-4">
              <span className="mb-2 block text-sm font-semibold text-white">Saturation: {saturation}%</span>
              <input
                type="range"
                value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
                max={100}
                min={0}
                step={1}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-black text-white hover:bg-black/90">Reset</Button>
              <Button className="bg-black text-white hover:bg-black/90">Apply Preset</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page13")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page15")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Next Screen
          </Button>
        </div>
      </main>
    </div>
  )
}
