"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"

const FINISHING_TOOLS = [
  "Final Mix",
  "Master Track",
  "Stems Export",
  "Surround Sound",
  "5.1 Mix",
  "7.1 Mix",
  "Atmos",
  "Binaural",
  "Loudness Meter",
  "LUFS Target",
  "True Peak",
  "Dynamic Range",
  "Master Limiter",
  "Ceiling Control",
  "Reference Track",
  "A/B Compare",
  "Version Control",
  "Revision History",
  "Auto Save",
  "Backup Project",
  "Archive Project",
  "Consolidate Media",
  "Collect Files",
  "Package Project",
  "Offline Files",
  "Relink Media",
  "Reconnect",
  "Conform",
  "Lock Picture",
  "Change Lock",
  "Sequence Lock",
  "Track Lock",
  "Quality Check",
  "Technical Review",
  "Content Review",
  "Client Review",
  "Note System",
  "Annotation",
  "Markup Tool",
  "Comment Thread",
  "Approval System",
  "Sign Off",
  "Version Stamp",
  "Watermark",
  "Burn In TC",
  "Visible Timecode",
  "Safe Margins",
  "Title Safe",
  "Action Safe",
  "Broadcast Safe",
  "Limiter Check",
  "Legal Range",
  "Standards Check",
  "Delivery Specs",
  "Format Check",
  "Resolution Check",
  "Frame Rate Check",
  "Aspect Ratio Check",
  "Color Space Check",
  "Bit Depth",
  "Codec Check",
  "Container Format",
  "File Size",
  "Duration Check",
  "Audio Check",
  "Channel Check",
  "Sample Rate",
  "Bit Rate",
  "Metadata Embed",
  "Title Info",
  "Credit Info",
  "Copyright",
  "Rating Info",
  "Keywords Embed",
  "Description Embed",
  "Tags Embed",
  "Thumbnail Create",
  "Poster Frame",
  "Cover Art",
  "Preview Clip",
  "Trailer Cut",
  "Teaser Cut",
  "Promo Cut",
  "Highlight Reel",
  "Behind Scenes",
  "Making Of",
  "Blooper Reel",
  "Director's Cut",
  "Extended Cut",
  "Theatrical Cut",
  "TV Version",
  "Airline Version",
  "Censored Version",
  "Unrated Version",
  "International",
  "Regional",
  "Dubbed Version",
  "Subtitle Track",
  "Multiple Audio",
  "Commentary Track",
  "Bonus Features",
  "Easter Eggs",
  "Interactive Menu",
  "Chapter Markers",
  "Scene Selection",
  "Play All",
  "Special Features",
  "Credits Roll",
]

export default function Page8() {
  const handleToolClick = (tool: string) => {
    console.log("[v0] Finishing tool clicked:", tool)
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
          <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Finishing</h2>
          <Button onClick={() => (window.location.href = "/page9")} className="bg-black text-white hover:bg-black/90">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FINISHING_TOOLS.map((tool, index) => (
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
