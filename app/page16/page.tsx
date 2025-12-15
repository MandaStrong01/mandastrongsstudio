"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, Download } from "lucide-react"

export default function Page16() {
  const [platform, setPlatform] = useState("")
  const [quality, setQuality] = useState("")
  const [format, setFormat] = useState("")

  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Export Options</h2>
            <p className="text-white/60">Choose your export settings and destination</p>
          </div>

          <div className="space-y-6 rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Export Platform</label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger className="border-[#00ff41] bg-black text-white">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="drive">Google Drive</SelectItem>
                  <SelectItem value="x">X (Twitter)</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="local">Local Download</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Quality</label>
              <Select value={quality} onValueChange={setQuality}>
                <SelectTrigger className="border-[#00ff41] bg-black text-white">
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4k">4K (3840x2160)</SelectItem>
                  <SelectItem value="1080p">Full HD (1920x1080)</SelectItem>
                  <SelectItem value="720p">HD (1280x720)</SelectItem>
                  <SelectItem value="480p">SD (854x480)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Format</label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger className="border-[#00ff41] bg-black text-white">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4 (H.264)</SelectItem>
                  <SelectItem value="mov">MOV (ProRes)</SelectItem>
                  <SelectItem value="avi">AVI</SelectItem>
                  <SelectItem value="webm">WebM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-black py-6 text-lg text-white hover:bg-black/90">
              <Download className="mr-2 h-5 w-5" />
              Start Export
            </Button>
          </div>

          <div className="mt-8 flex gap-2">
            <Button
              onClick={() => (window.location.href = "/page15")}
              variant="outline"
              className="border-[#00ff41] bg-black text-white hover:bg-white/10"
            >
              Previous
            </Button>
            <Button
              onClick={() => (window.location.href = "/page17")}
              className="ml-auto bg-black text-white hover:bg-black/90"
            >
              Preview
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
