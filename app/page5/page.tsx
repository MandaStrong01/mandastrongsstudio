"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"

const PRODUCTION_TOOLS = [
  "Camera Control",
  "Live Monitor",
  "Record Start",
  "Record Stop",
  "Director Mode",
  "Actor Cues",
  "Scene Markers",
  "Take Counter",
  "Slate Board",
  "Clapper Sync",
  "Video Quality",
  "Audio Levels",
  "Microphone Setup",
  "Boom Position",
  "Lavalier Check",
  "Wireless Audio",
  "Background Noise",
  "Echo Reduction",
  "Voice Clarity",
  "Sound Balance",
  "Lighting Setup",
  "Key Light",
  "Fill Light",
  "Back Light",
  "Practical Lights",
  "Natural Light",
  "Shadow Control",
  "Exposure",
  "White Balance",
  "Color Temp",
  "ISO Settings",
  "Aperture",
  "Shutter Speed",
  "Focus Pulling",
  "Depth of Field",
  "Zoom Control",
  "Pan Movement",
  "Tilt Control",
  "Dolly Track",
  "Crane Shot",
  "Handheld Stabilizer",
  "Gimbal Control",
  "Steadicam",
  "Drone Camera",
  "Multi-Cam Sync",
  "Camera Switch",
  "Angle Select",
  "Shot Coverage",
  "Master Shot",
  "Close Up",
  "Medium Shot",
  "Wide Shot",
  "Over Shoulder",
  "POV Camera",
  "Dutch Angle",
  "Bird's Eye",
  "Low Angle",
  "High Angle",
  "Eye Level",
  "Insert Shot",
  "Cutaway",
  "Establishing",
  "Reaction Shot",
  "Two Shot",
  "Performance Monitor",
  "Actor Energy",
  "Emotion Track",
  "Line Delivery",
  "Blocking Guide",
  "Mark Positions",
  "Movement Path",
  "Action Cues",
  "Script Supervisor",
  "Continuity Check",
  "Wardrobe Match",
  "Prop Track",
  "Hair & Makeup",
  "Set Dressing",
  "Location Status",
  "Weather Check",
  "Time of Day",
  "Golden Hour",
  "Blue Hour",
  "Magic Hour",
  "Scene Timing",
  "Shot Duration",
  "Coverage Plan",
  "B-Roll List",
  "Safety Monitor",
  "Stunt Coordinator",
  "Special FX",
  "Practical FX",
  "Green Screen",
  "Blue Screen",
  "Chroma Key",
  "Background Plate",
  "Motion Tracking",
  "Marker Setup",
  "Reference Take",
  "Clean Plate",
  "Data Wrangling",
  "File Backup",
  "Card Management",
  "Storage Check",
  "Proxy Files",
  "LUT Preview",
  "Color Space",
  "Codec Settings",
  "Frame Rate Lock",
  "Timecode Sync",
  "Audio Sync",
  "Scratch Track",
  "Playback Monitor",
  "Client Review",
  "Director's Cut",
  "Producer Notes",
  "Script Notes",
  "Performance Notes",
  "Technical Notes",
  "Creative Notes",
]

export default function Page5() {
  const handleToolClick = (tool: string) => {
    console.log("[v0] Production tool clicked:", tool)
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
          <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Production</h2>
          <Button onClick={() => (window.location.href = "/page6")} className="bg-black text-white hover:bg-black/90">
            Next Phase <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCTION_TOOLS.map((tool, index) => (
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
            onClick={() => (window.location.href = "/page4")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Back
          </Button>
          <Button
            onClick={() => (window.location.href = "/page6")}
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
