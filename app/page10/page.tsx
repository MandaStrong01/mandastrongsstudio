"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Page10() {
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
          <h2 className="mb-8 font-serif text-5xl font-bold italic text-white">Doxy The School Bully</h2>

          <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg border-2 border-[#00ff41] bg-black/50">
            <div className="flex h-full items-center justify-center">
              <p className="text-xl text-white/60">Preview Content - Unlock to View Full Movie</p>
            </div>
          </div>

          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <p className="mb-6 text-lg text-white">
              Unlock the complete "Doxy The School Bully" movie and gain access to exclusive content, behind-the-scenes
              footage, and director's commentary.
            </p>

            <div className="mb-6 text-4xl font-bold text-[#00ff41]">$5</div>

            <Button
              onClick={() => window.open("https://buy.stripe.com/doxybully5", "_blank")}
              className="mb-4 w-full bg-black py-6 text-lg text-white hover:bg-black/90"
            >
              Unlock Now
            </Button>

            <Button
              onClick={() => (window.location.href = "https://mandastrongstudio.bolt.host")}
              className="w-full border border-white/20 bg-black text-white hover:bg-white/10"
              variant="outline"
            >
              Return to App
            </Button>
          </div>

          <div className="mt-8 flex gap-2">
            <Button
              onClick={() => (window.location.href = "/page9")}
              variant="outline"
              className="border-[#00ff41] bg-black text-white hover:bg-white/10"
            >
              Back
            </Button>
            <Button
              onClick={() => (window.location.href = "/page11")}
              className="ml-auto bg-black px-8 py-4 text-white hover:bg-black/90"
            >
              Continue to Editor Suite
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
