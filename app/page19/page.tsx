"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, MessageCircle, Mail, Phone, Clock } from "lucide-react"

export default function Page19() {
  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-serif text-4xl font-bold italic text-white">Social & Help Hub</h2>
          <p className="text-white/60">Get help or connect with our community</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Help & Support */}
          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <div className="mb-6 flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-[#00ff41]" />
              <h3 className="text-2xl font-bold text-white">24/7 Support</h3>
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#00ff41]" />
                <div>
                  <p className="font-semibold text-white">Email Support</p>
                  <p className="text-sm text-white/60">support@mandastrong.studio</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#00ff41]" />
                <div>
                  <p className="font-semibold text-white">Phone Support</p>
                  <p className="text-sm text-white/60">1-800-MANDA-STUDIO</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-[#00ff41]" />
                <div>
                  <p className="font-semibold text-white">Availability</p>
                  <p className="text-sm text-white/60">24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <Input placeholder="Your Name" className="border-[#00ff41] bg-black text-white" />
              <Input type="email" placeholder="Your Email" className="border-[#00ff41] bg-black text-white" />
              <Textarea placeholder="How can we help you?" className="border-[#00ff41] bg-black text-white" rows={4} />
              <Button className="w-full bg-black text-white hover:bg-black/90">Send Message</Button>
            </form>
          </div>

          {/* Social Links & Resources */}
          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">Connect With Us</h3>

            <div className="space-y-4">
              <Button
                className="w-full justify-start bg-black text-left text-white hover:bg-white/10"
                variant="outline"
              >
                YouTube - Tutorials & Updates
              </Button>
              <Button
                className="w-full justify-start bg-black text-left text-white hover:bg-white/10"
                variant="outline"
              >
                Discord - Join Our Community
              </Button>
              <Button
                className="w-full justify-start bg-black text-left text-white hover:bg-white/10"
                variant="outline"
              >
                Instagram - Behind The Scenes
              </Button>
              <Button
                className="w-full justify-start bg-black text-left text-white hover:bg-white/10"
                variant="outline"
              >
                X (Twitter) - Latest News
              </Button>
              <Button
                className="w-full justify-start bg-black text-left text-white hover:bg-white/10"
                variant="outline"
              >
                Facebook - Community Group
              </Button>
            </div>

            <div className="mt-8 rounded border border-[#00ff41] bg-black/50 p-4">
              <h4 className="mb-2 font-semibold text-white">Quick Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Getting Started Guide</li>
                <li>• Video Tutorials</li>
                <li>• FAQs & Troubleshooting</li>
                <li>• Feature Requests</li>
                <li>• Community Forums</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <Button
            onClick={() => (window.location.href = "/page18")}
            variant="outline"
            className="border-[#00ff41] bg-black text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => (window.location.href = "/page20")}
            className="ml-auto bg-black text-white hover:bg-black/90"
          >
            Community Hub
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
