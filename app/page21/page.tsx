"use client"

import { Button } from "@/components/ui/button"
import { Menu, Heart, Star } from "lucide-react"

export default function Page21() {
  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center gap-2">
            <Heart className="h-12 w-12 text-[#00ff41]" fill="currentColor" />
            <Star className="h-12 w-12 text-[#00ff41]" fill="currentColor" />
            <Heart className="h-12 w-12 text-[#00ff41]" fill="currentColor" />
          </div>

          <h2 className="mb-4 font-serif text-5xl font-bold italic text-white">Thank You!</h2>
          <p className="mb-12 text-xl text-white/80">
            Your movie creation journey is complete. We're excited to see what you've created!
          </p>

          {/* Video Placeholder */}
          <div className="mb-8 overflow-hidden rounded-lg border-2 border-[#00ff41] bg-black">
            <div className="aspect-video w-full bg-black/50">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <p className="text-2xl font-bold text-white">Your Video Placeholder</p>
                <p className="text-white/60">Drop your MP4 file here later</p>
                <Button className="bg-black text-white hover:bg-black/90">Upload Video</Button>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-lg border border-[#00ff41] bg-black p-6">
            <h3 className="mb-4 text-2xl font-bold text-white">Share Your Experience</h3>
            <p className="mb-4 text-white/60">
              Help us improve by sharing your feedback or posting your movie to the community!
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => (window.location.href = "/page20")}
                className="bg-black text-white hover:bg-black/90"
              >
                Share to Community
              </Button>
              <Button
                onClick={() => (window.location.href = "/page19")}
                variant="outline"
                className="border-[#00ff41] bg-black text-white hover:bg-white/10"
              >
                Contact Support
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-[#00ff41]/10 p-6">
            <p className="text-lg text-white">Want to create another masterpiece?</p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="mt-4 bg-black px-8 py-4 text-lg text-white hover:bg-black/90"
            >
              Start New Project
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
  )
}
