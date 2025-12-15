"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"

const DISTRIBUTION_TOOLS = [
  "Platform Upload",
  "YouTube Upload",
  "Vimeo Upload",
  "Social Share",
  "Marketing Tools",
  "SEO Optimizer",
  "Title Optimize",
  "Description Write",
  "Tag Generator",
  "Hashtag Suggest",
  "Thumbnail Test",
  "A/B Testing",
  "Analytics Setup",
  "Tracking Pixel",
  "View Counter",
  "Engagement Track",
  "Audience Insights",
  "Demographics",
  "Geography",
  "Device Stats",
  "Traffic Source",
  "Referral Track",
  "Search Terms",
  "Discovery",
  "Retention Graph",
  "Drop Off Points",
  "Rewatch Value",
  "Share Count",
  "Like Ratio",
  "Comment Analysis",
  "Sentiment Track",
  "Feedback Loop",
  "Community Tab",
  "Post Scheduler",
  "Poll Creator",
  "Story Post",
  "Live Stream",
  "Premiere Setup",
  "Countdown",
  "Chat Moderation",
  "Monetization",
  "Ad Placement",
  "Mid Roll Ads",
  "Pre Roll Ads",
  "Post Roll Ads",
  "Sponsorship",
  "Brand Deal",
  "Affiliate Link",
  "Merchandise Link",
  "Donation Button",
  "Membership Tier",
  "Subscription",
  "Pay Per View",
  "Rental Option",
  "Purchase Option",
  "Bundle Deal",
  "Early Access",
  "Exclusive Content",
  "Patron Only",
  "VIP Access",
  "Press Kit",
  "Media Release",
  "Journalist Contact",
  "Interview Prep",
  "Festival Submit",
  "Awards Submit",
  "Contest Entry",
  "Competition",
  "Screening Event",
  "Premiere Event",
  "Red Carpet",
  "Q&A Setup",
  "Panel Discussion",
  "Workshop",
  "Masterclass",
  "Tutorial Series",
  "Behind Scenes Release",
  "Making Of Release",
  "Director Commentary",
  "Cast Interview",
  "Blooper Release",
  "Deleted Scenes",
  "Alternate Ending",
  "Extended Scenes",
  "Archive Copy",
  "Museum Donation",
  "Library Submit",
  "Historical Record",
  "Legacy Preserve",
  "Restoration",
  "Remaster",
  "4K Upgrade",
  "HDR Version",
  "Dolby Vision",
  "Enhanced Audio",
  "Immersive Sound",
  "VR Version",
  "360 Video",
  "Interactive Version",
  "Choose Your Path",
  "Multi Ending",
  "Branching Story",
  "Game Integration",
  "App Launch",
  "NFT Create",
  "Digital Collect",
  "Blockchain Verify",
  "Smart Contract",
  "Rights Manage",
  "License Deal",
  "Sync License",
  "Distribution Rights",
  "Territory Rights",
  "Exclusive Rights",
  "Non Exclusive",
  "Perpetual License",
]

export default function Page9() {
  const handleToolClick = (tool: string) => {
    console.log("[v0] Distribution tool clicked:", tool)
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
          <h2 className="font-serif text-4xl font-bold italic text-white">AI Tool Board - Distribution</h2>
          <Button onClick={() => (window.location.href = "/page10")} className="bg-black text-white hover:bg-black/90">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {DISTRIBUTION_TOOLS.map((tool, index) => (
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
