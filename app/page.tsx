"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { WelcomeTutorial } from "@/components/welcome-tutorial"
import { QuickMenu } from "@/components/quick-menu"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [showTutorial, setShowTutorial] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("[v0] Background video autoplay blocked:", err)
      })
    }
  }, [])

  const handleNext = () => {
    if (videoRef.current) {
      localStorage.setItem("videoTime", videoRef.current.currentTime.toString())
    }
    router.push("/page2")
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="fixed inset-0 h-full w-full object-cover"
        src="/background.mp4"
        loop
        muted={false}
        playsInline
        autoPlay
      />

      <div className="absolute inset-0 bg-black/30" />

      <QuickMenu />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-black drop-shadow-lg md:text-7xl">MANDASTRONG'S STUDIO</h1>
          <p className="mt-4 font-serif text-xl font-bold italic text-black drop-shadow-md md:text-2xl">
            An All In One Make A Movie App! 2 ~ 2.5 Hours Duration
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleNext}
              className="bg-black px-8 py-6 text-lg font-semibold text-white hover:bg-black/90"
            >
              Next
            </Button>
            <Button
              onClick={() => router.push("/page3")}
              className="bg-black px-8 py-6 text-lg font-semibold text-white hover:bg-black/90"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/page3")}
              className="bg-black px-8 py-6 text-lg font-semibold text-white hover:bg-black/90"
            >
              Register
            </Button>
          </div>
        </main>
      </div>

      {showTutorial && <WelcomeTutorial onClose={() => setShowTutorial(false)} />}
    </div>
  )
}
