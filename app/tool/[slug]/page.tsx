"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useParams } from "next/navigation"

export default function ToolPage() {
  const params = useParams()
  const slug = params.slug as string
  const [asset, setAsset] = useState<File | null>(null)
  const [processing, setProcessing] = useState(false)

  const toolName = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const handleAssetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAsset(e.target.files[0])
    }
  }

  const handleCreateAsset = async () => {
    if (!asset) return

    setProcessing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const savedAssets = JSON.parse(localStorage.getItem("mediaAssets") || "[]")
    savedAssets.push({
      name: asset.name,
      tool: toolName,
      timestamp: new Date().toISOString(),
      type: asset.type,
    })
    localStorage.setItem("mediaAssets", JSON.stringify(savedAssets))

    setProcessing(false)
    alert(`Asset created and saved to Media Library!`)
    window.location.href = "/page11"
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

        <main className="container mx-auto min-h-[calc(100vh-200px)] px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-4xl font-bold italic text-white">{toolName}</h2>
            <p className="mt-2 text-white/80">Create and customize your asset</p>
          </div>

          <div className="mx-auto max-w-2xl rounded-lg border-2 border-[#00ff41] bg-black/80 p-8">
            <div className="mb-6">
              <label className="mb-2 block text-white">Upload Media</label>
              <input
                type="file"
                onChange={handleAssetUpload}
                accept="image/*,video/*,audio/*"
                className="w-full rounded bg-white/10 p-2 text-white"
              />
            </div>

            {asset && (
              <div className="mb-6 rounded border border-[#00ff41] bg-black/50 p-4">
                <p className="text-white">Selected: {asset.name}</p>
                <p className="text-sm text-white/60">Type: {asset.type}</p>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={handleCreateAsset}
                disabled={!asset || processing}
                className="flex-1 bg-[#00ff41] text-black hover:bg-[#00ff41]/90"
              >
                {processing ? "Processing..." : "Create & Save to Media"}
              </Button>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button onClick={() => window.history.back()} className="bg-black px-8 py-3 text-white hover:bg-black/90">
              Back
            </Button>
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
