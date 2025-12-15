"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Heart, MessageSquare, Share2, Play } from "lucide-react"

export default function Page20() {
  const [movies] = useState([
    { id: 1, title: "Summer Adventure", author: "John Doe", likes: 245, comments: 12 },
    { id: 2, title: "Mystery Night", author: "Jane Smith", likes: 189, comments: 8 },
    { id: 3, title: "Comedy Hour", author: "Mike Johnson", likes: 432, comments: 23 },
    { id: 4, title: "Action Packed", author: "Sarah Williams", likes: 567, comments: 45 },
    { id: 5, title: "Drama Story", author: "Tom Brown", likes: 321, comments: 18 },
    { id: 6, title: "Sci-Fi Journey", author: "Emma Davis", likes: 678, comments: 34 },
  ])

  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Community Hub</h2>
            <p className="text-white/60">Share your movies and engage with the community</p>
          </div>
          <Button className="bg-black text-white hover:bg-black/90">Upload Movie</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <div key={movie.id} className="overflow-hidden rounded-lg border-2 border-[#00ff41] bg-black">
              <div className="relative aspect-video bg-black/50">
                <div className="flex h-full items-center justify-center">
                  <Play className="h-16 w-16 text-white/60" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-white">{movie.title}</h3>
                <p className="mb-4 text-sm text-white/60">by {movie.author}</p>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-white/80 transition-colors hover:text-[#00ff41]">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm">{movie.likes}</span>
                  </button>

                  <button className="flex items-center gap-1 text-white/80 transition-colors hover:text-[#00ff41]">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-sm">{movie.comments}</span>
                  </button>

                  <button className="ml-auto flex items-center gap-1 text-white/80 transition-colors hover:text-[#00ff41]">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page19")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page21")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Thank You Page
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
