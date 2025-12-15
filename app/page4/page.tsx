"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const AI_TOOLS = [
  "Script Writing AI",
  "Story Generator Pro",
  "Character Builder Studio",
  "Plot Assistant AI",
  "Dialogue Writer",
  "Scene Planner Pro",
  "Storyboard Creator",
  "Beat Sheet Generator",
  "Theme Analyzer AI",
  "Genre Selector Tool",
  "Tone Adjuster Pro",
  "Pacing Calculator",
  "3-Act Structure",
  "Character Arc Builder",
  "World Builder AI",
  "Location Scout Virtual",
  "Prop Generator AI",
  "Costume Designer Tool",
  "Lighting Planner Pro",
  "Camera Angle Advisor",
  "Shot List Creator",
  "Schedule Builder Pro",
  "Budget Calculator AI",
  "Casting Assistant Tool",
  "Voice Generator AI",
  "Sound Effects Library",
  "Music Composer AI",
  "Foley Artist Tool",
  "Ambient Sound Designer",
  "Dialogue Mix Studio",
  "Score Writer AI",
  "Theme Music Creator",
  "Opening Credits Designer",
  "Title Sequence Maker",
  "Logo Designer AI",
  "Poster Maker Pro",
  "Trailer Editor AI",
  "Synopsis Writer Tool",
  "Logline Creator AI",
  "Pitch Deck Builder",
  "Mood Board Creator",
  "Color Palette Generator",
  "Visual Style Guide",
  "Production Notes AI",
  "Script Formatter Pro",
  "Scene Number Generator",
  "Action Line Writer",
  "Parenthetical Helper",
  "Transition Suggester",
  "Montage Builder AI",
  "Flashback Sequence Tool",
  "Time Jump Creator",
  "Parallel Story Weaver",
  "B-Plot Generator",
  "Subplot Integration",
  "Character Voice Tool",
  "Accent Coach AI",
  "Emotion Guide Pro",
  "Motivation Analyzer",
  "Conflict Builder AI",
  "Resolution Tool Pro",
  "Climax Planner AI",
  "Inciting Incident Maker",
  "Rising Action Builder",
  "Falling Action Tool",
  "Denouement Creator",
  "Hook Generator AI",
  "Cliffhanger Builder",
  "Plot Twist Maker",
  "Foreshadowing Tool",
  "Symbolism Generator",
  "Metaphor Creator AI",
  "Theme Identifier Pro",
  "Message Crafter Tool",
  "Moral Selector AI",
  "Ending Options Generator",
  "Character Name Generator",
  "Location Name Creator",
  "Object Name Tool",
  "Company Name Generator",
  "Title Generator Pro",
  "Tagline Writer AI",
  "Quote Finder Tool",
  "Reference Library AI",
  "Research Assistant Pro",
  "Fact Checker AI",
  "Historical Data Tool",
  "Cultural Advisor AI",
  "Language Translation",
  "Multi-Language Support",
  "Subtitle Maker Pro",
  "Caption Writer AI",
  "Description Generator",
  "Alt Text Creator",
  "Metadata Tag Tool",
  "Keyword Generator AI",
  "SEO Optimizer Pro",
  "Category Tag Maker",
  "Genre Tag Tool",
  "Audience Targeting AI",
  "Rating Guide Pro",
  "Content Warning Tool",
  "Trigger Alert System",
  "Age Appropriateness",
  "Accessibility Checker",
  "Closed Caption Tool",
  "Audio Description AI",
  "Visual Aid Creator",
  "Screen Reader Support",
  "Font Size Adjuster",
  "Contrast Checker Pro",
  "Color Blind Simulator",
  "Motion Reducer Tool",
  "Auto Play Manager",
  "Pause Control System",
  "Speed Control Tool",
  "Volume Control AI",
  "Mute Option Manager",
  "Loop Toggle Tool",
  "Quality Selector Pro",
  "Resolution Optimizer",
]

export default function Page4() {
  const handleToolClick = (tool: string) => {
    const toolSlug = tool.toLowerCase().replace(/\s+/g, "-")
    window.location.href = `/tool/${toolSlug}`
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

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Pre-Production</h2>
            <p className="mt-2 text-white/80">Explore your AI Tools — 120 tools per page. Click any tool to begin.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {AI_TOOLS.map((tool, index) => (
              <Button
                key={index}
                onClick={() => handleToolClick(tool)}
                className="h-20 border-2 border-[#00ff41] bg-black text-sm font-semibold text-white hover:bg-[#00ff41]/10"
              >
                {tool}
              </Button>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button
              onClick={() => (window.location.href = "/page3")}
              className="bg-black px-8 py-3 text-white hover:bg-black/90"
            >
              Back
            </Button>
            <Button
              onClick={() => (window.location.href = "/page5")}
              className="bg-black px-8 py-3 text-white hover:bg-black/90"
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
    </div>
  )
}
