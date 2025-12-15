"use client"

import { Button } from "@/components/ui/button"
import { Menu, FileText } from "lucide-react"

export default function Page18() {
  return (
    <div className="relative min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-[#00ff41] p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
        <Button variant="ghost" size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3">
            <FileText className="h-10 w-10 text-[#00ff41]" />
            <h2 className="font-serif text-4xl font-bold italic text-white">Terms of Service & Disclaimer</h2>
          </div>

          <div className="space-y-6 rounded-lg border-2 border-[#00ff41] bg-black p-8 text-white">
            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">Disclaimer</h3>
              <p className="leading-relaxed text-white/80">
                MandaStrong Studio provides AI-powered movie creation tools "as is" without warranty of any kind. We are
                not responsible for the content created using our platform. Users must ensure their content complies
                with all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">User Responsibilities</h3>
              <p className="leading-relaxed text-white/80">
                You are solely responsible for all content you create, upload, or distribute through our platform. You
                must own or have proper licenses for all media used in your projects. Any copyright infringement is
                strictly prohibited and may result in account termination.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">Content Guidelines</h3>
              <p className="leading-relaxed text-white/80">
                Content containing hate speech, violence, explicit material, or illegal activities is strictly
                forbidden. We reserve the right to remove content and terminate accounts that violate these guidelines
                without notice.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">Payment & Refunds</h3>
              <p className="leading-relaxed text-white/80">
                All subscription payments are processed securely through Stripe. Refunds are handled on a case-by-case
                basis within 14 days of purchase. Subscription cancellations take effect at the end of the current
                billing period.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">Privacy & Data</h3>
              <p className="leading-relaxed text-white/80">
                We collect minimal user data necessary for service operation. Your project files are stored securely and
                are not shared with third parties. We do not sell user data. Account deletion requests result in
                permanent removal of all associated data within 30 days.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-2xl font-bold text-[#00ff41]">Agreement</h3>
              <p className="leading-relaxed text-white/80">
                By using MandaStrong Studio, you agree to these terms. We reserve the right to modify these terms at any
                time. Continued use of the platform after changes constitutes acceptance of new terms.
              </p>
            </section>
          </div>

          <div className="mt-8 flex gap-2">
            <Button
              onClick={() => (window.location.href = "/page17")}
              variant="outline"
              className="border-[#00ff41] bg-black text-white hover:bg-white/10"
            >
              Previous
            </Button>
            <Button
              onClick={() => (window.location.href = "/page19")}
              className="ml-auto bg-black text-white hover:bg-black/90"
            >
              Continue
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
