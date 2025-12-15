"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export default function Page17() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Final Preview</h2>
            <p className="text-white/60">Watch your completed movie before final export</p>
          </div>

          <div className="overflow-hidden rounded-lg border-2 border-[#00ff41] bg-black">
            <div className="aspect-video w-full bg-black/50">
              <div className="flex h-full items-center justify-center">
                <p className="text-2xl text-white/60">Your Movie Preview</p>
              </div>
            </div>

            <div className="border-t border-[#00ff41] bg-black p-4">
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-12 w-12 bg-[#00ff41] text-black hover:bg-[#00ff41]/90"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setIsMuted(!isMuted)}
                  className="border-[#00ff41] bg-black text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>

                <Button size="icon" variant="outline" className="border-[#00ff41] bg-black text-white">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            <Button
              onClick={() => (window.location.href = "/page16")}
              variant="outline"
              className="border-[#00ff41] bg-black text-white hover:bg-white/10"
            >
              Previous
            </Button>
            <Button
              onClick={() => (window.location.href = "/page18")}
              className="ml-auto bg-black text-white hover:bg-black/90"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
