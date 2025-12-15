"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"

const POST_TOOLS_1 = [
  "Video Import",
  "Clip Organizer",
  "Footage Browser",
  "Media Library",
  "Rough Cut",
  "Assembly Edit",
  "Scene Assembly",
  "Shot Selection",
  "Trim Tool",
  "Ripple Edit",
  "Roll Edit",
  "Slip Tool",
  "Slide Tool",
  "Rate Stretch",
  "Time Remap",
  "Speed Ramp",
  "Reverse Clip",
  "Freeze Frame",
  "Hold Frame",
  "Split Screen",
  "Picture in Picture",
  "Multi-Layer",
  "Track Stack",
  "Nest Sequence",
  "Multicam Edit",
  "Sync Clips",
  "Match Frame",
  "Replace Edit",
  "Insert Edit",
  "Overwrite",
  "Three Point",
  "Four Point",
  "Blade Cut",
  "Razor Tool",
  "Selection Tool",
  "Hand Tool",
  "Zoom Tool",
  "Audio Mixer",
  "Level Adjustment",
  "Pan Control",
  "Volume Keyframe",
  "Fade In",
  "Fade Out",
  "Crossfade",
  "Audio Transition",
  "Sound Effect",
  "Music Track",
  "Voice Over",
  "Noise Reduction",
  "De-Esser",
  "Compressor",
  "Limiter",
  "Equalizer",
  "High Pass",
  "Low Pass",
  "Band Pass",
  "Reverb",
  "Delay",
  "Echo",
  "Chorus",
  "Flanger",
  "Phaser",
  "Distortion",
  "Normalize",
  "Gain Control",
  "Ducking",
  "Sidechain",
  "Automation",
  "Color Correction",
  "Color Grade",
  "Primary Wheels",
  "Secondary Color",
  "Curves",
  "Levels",
  "Hue/Sat",
  "Brightness",
  "Contrast",
  "Exposure",
  "Highlights",
  "Shadows",
  "Midtones",
  "Whites",
  "Blacks",
  "Temperature",
  "Tint",
  "Vibrance",
  "Saturation",
  "Vignette",
  "Sharpen",
  "Blur",
  "Denoise",
  "Grain",
  "Film Look",
  "Vintage",
  "Cinematic",
  "Modern",
  "High Contrast",
  "Low Key",
  "High Key",
  "Muted",
  "Vibrant",
  "Desaturate",
  "Monochrome",
  "Sepia",
  "Cross Process",
  "Bleach Bypass",
  "Day for Night",
  "Night for Day",
  "LUT Apply",
  "LUT Create",
  "Color Match",
  "Shot Match",
  "Skin Tone",
  "Sky Replace",
  "Object Mask",
  "Tracking",
  "Stabilization",
  "Warp Stabilizer",
  "Smooth Motion",
  "Lock Shot",
]

export default function Page6() {
  const handleToolClick = (tool: string) => {
    console.log("[v0] Post tool clicked:", tool)
  }

  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Post-Production (Part 1)</h2>
          <Button onClick={() => (window.location.href = "/page7")} className="bg-black text-white hover:bg-black/90">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {POST_TOOLS_1.map((tool, index) => (
            <Button
              key={index}
              onClick={() => handleToolClick(tool)}
              className="h-24 border-2 border-[#00ff41] bg-black text-sm font-semibold text-white hover:bg-[#00ff41]/10"
            >
              {tool}
            </Button>
          ))}
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page5")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Back
          </Button>
          <Button
            onClick={() => (window.location.href = "/page7")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Next
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
  )
}
