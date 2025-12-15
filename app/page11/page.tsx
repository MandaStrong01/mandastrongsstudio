"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Play, Pause, SkipBack, SkipForward, Volume2, Upload, Trash2 } from "lucide-react"

interface MediaAsset {
  name: string
  tool: string
  timestamp: string
  type: string
}

export default function Page11() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180)
  const [volume, setVolume] = useState(75)
  const [speed, setSpeed] = useState(1)
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([])

  useEffect(() => {
    // Load saved media assets
    const saved = JSON.parse(localStorage.getItem("mediaAssets") || "[]")
    setMediaAssets(saved)
  }, [])

  const handleDeleteAsset = (index: number) => {
    const updated = mediaAssets.filter((_, i) => i !== index)
    setMediaAssets(updated)
    localStorage.setItem("mediaAssets", JSON.stringify(updated))
  }

  return (
    <div className="relative min-h-screen bg-black">
      <video
        className="fixed inset-0 h-full w-full object-cover opacity-20"
        src="/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />

      <div className="relative z-10">
        <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
          <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
          <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
            <Menu className="h-6 w-6" />
          </Button>
        </header>

        <main className="flex min-h-[calc(100vh-88px)] flex-col">
          <div className="flex flex-1 gap-4 p-4">
            {/* Preview Window */}
            <div className="flex-1 bg-black/50 p-4">
              <div className="mx-auto h-full max-w-6xl overflow-hidden rounded-lg border-2 border-[#00ff41]">
                <div className="flex h-full items-center justify-center">
                  <p className="text-xl text-white/60">Video Preview</p>
                </div>
              </div>
            </div>

            <div className="w-80 overflow-y-auto rounded-lg border-2 border-[#00ff41] bg-black/80 p-4">
              <h3 className="mb-4 text-lg font-bold text-white">Media Library</h3>
              {mediaAssets.length === 0 ? (
                <p className="text-sm text-white/60">No assets yet. Create assets using AI tools!</p>
              ) : (
                <div className="space-y-2">
                  {mediaAssets.map((asset, index) => (
                    <div key={index} className="rounded border border-[#00ff41] bg-black p-3">
                      <p className="text-sm font-semibold text-white">{asset.name}</p>
                      <p className="text-xs text-white/60">{asset.tool}</p>
                      <div className="mt-2 flex justify-end">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteAsset(index)}
                          className="h-6 text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t-2 border-[#00ff41] bg-black p-4">
            <div className="mb-4">
              <input
                type="range"
                value={currentTime}
                onChange={(e) => setCurrentTime(Number(e.target.value))}
                max={duration * 60}
                min={0}
                step={1}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
              />
              <div className="mt-2 flex justify-between text-sm text-white">
                <span>
                  {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, "0")}
                </span>
                <span>{duration}:00</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="mb-4 flex items-center justify-center gap-4">
              <Button size="icon" variant="outline" className="border-[#00ff41] bg-black text-white">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-12 w-12 bg-[#00ff41] text-black hover:bg-[#00ff41]/90"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button size="icon" variant="outline" className="border-[#00ff41] bg-black text-white">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Controls Grid */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* Volume Control */}
              <div className="rounded-lg border border-[#00ff41] bg-black p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Volume: {volume}%</span>
                </div>
                <input
                  type="range"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  max={100}
                  min={0}
                  step={1}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
                />
              </div>

              {/* Duration Control */}
              <div className="rounded-lg border border-[#00ff41] bg-black p-4">
                <span className="mb-2 block text-sm text-white">Duration: {duration} min</span>
                <input
                  type="range"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  max={180}
                  min={1}
                  step={1}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
                />
              </div>

              {/* Speed Control */}
              <div className="rounded-lg border border-[#00ff41] bg-black p-4">
                <span className="mb-2 block text-sm text-white">Speed: {speed}x</span>
                <input
                  type="range"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  max={3}
                  min={0.25}
                  step={0.25}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#00ff41]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2">
              <Button className="bg-black text-white hover:bg-black/90">
                <Upload className="mr-2 h-4 w-4" />
                Upload Media
              </Button>
              <Button className="bg-black text-white hover:bg-black/90">AI Sound</Button>
              <Button
                onClick={() => (window.location.href = "/page10")}
                className="ml-auto bg-black text-white hover:bg-black/90"
              >
                Back
              </Button>
              <Button
                onClick={() => (window.location.href = "/page12")}
                className="bg-black text-white hover:bg-black/90"
              >
                Next
              </Button>
            </div>
          </div>
        </main>

        <footer className="border-t border-[#00ff41] bg-black py-6 text-center text-white">
          <p className="text-sm">
            MandaStrongStudios 2025 ~ Author Of Doxy The School Bully ~ Also Find Me On{" "}
            <a
              href="https://MandaStrong1.Etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff41] underline hover:text-[#00ff41]/80"
            >
              MandaStrong1.Etsy.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
