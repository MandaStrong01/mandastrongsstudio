"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"

const POST_TOOLS_2 = [
  "VFX Compositing",
  "Green Screen Key",
  "Rotoscoping",
  "Masking",
  "Track Matte",
  "Alpha Channel",
  "Luma Key",
  "Chroma Key",
  "Motion Graphics",
  "Text Animation",
  "Title Cards",
  "Lower Thirds",
  "Logo Reveal",
  "Transition Effects",
  "Wipe",
  "Dissolve",
  "Cross Dissolve",
  "Fade Through",
  "Dip to Black",
  "Dip to White",
  "Push",
  "Slide",
  "Split",
  "Iris",
  "Page Turn",
  "Cube Spin",
  "Flip",
  "Zoom",
  "Morph",
  "Light Leak",
  "Lens Flare",
  "Bokeh",
  "Particle System",
  "Smoke",
  "Fire",
  "Water",
  "Snow",
  "Rain",
  "Lightning",
  "Clouds",
  "Fog",
  "Dust",
  "Sparks",
  "Explosions",
  "Muzzle Flash",
  "Blood Splatter",
  "Bullet Hits",
  "Glass Break",
  "3D Text",
  "Extrude",
  "Bevel",
  "Material",
  "Lighting 3D",
  "Shadow 3D",
  "Reflection",
  "Refraction",
  "Camera 3D",
  "Null Object",
  "Parent Link",
  "Expression",
  "Time Remap 3D",
  "Wiggle",
  "Loop",
  "Bounce",
  "Ease In",
  "Ease Out",
  "Smooth",
  "Linear",
  "Bezier Curve",
  "Graph Editor",
  "Keyframe",
  "Hold Keyframe",
  "Auto Orient",
  "Motion Blur",
  "Frame Blend",
  "Pixel Motion",
  "Optical Flow",
  "Time Stretch",
  "Preserve Pitch",
  "Pitch Shift",
  "Audio Spectrum",
  "Waveform",
  "Beat Detect",
  "Music Sync",
  "Effect Preset",
  "Animation Preset",
  "Save Preset",
  "Load Preset",
  "Project Export",
  "Media Export",
  "XML Export",
  "EDL Export",
  "AAF Export",
  "OMF Export",
  "Proxy Export",
  "Master Export",
  "Web Optimize",
  "Mobile Format",
  "Social Media",
  "YouTube",
  "Instagram",
  "TikTok",
  "Twitter",
  "Facebook",
  "LinkedIn",
  "Vimeo",
  "Twitch",
  "Snapchat",
]

export default function Page7() {
  const handleToolClick = (tool: string) => {
    console.log("[v0] Post tool 2 clicked:", tool)
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
          <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Post-Production (Part 2)</h2>
          <Button onClick={() => (window.location.href = "/page8")} className="bg-black text-white hover:bg-black/90">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {POST_TOOLS_2.map((tool, index) => (
            <Button
              key={index}
              onClick={() => handleToolClick(tool)}
              className="h-24 border-2 border-[#00ff41] bg-black text-sm font-semibold text-white hover:bg-[#00ff41]/10"
            >
              {tool}
            </Button>
          ))}
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
