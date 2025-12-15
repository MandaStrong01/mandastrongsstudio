"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { QuickMenu } from "@/components/quick-menu"
import { useRouter } from "next/navigation"

export default function Page2() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (videoRef.current) {
      const savedTime = localStorage.getItem("videoTime")
      if (savedTime) {
        videoRef.current.currentTime = Number.parseFloat(savedTime)
      }
      videoRef.current.play().catch((err) => {
        console.log("[v0] Background video autoplay blocked:", err)
      })
    }
  }, [])

  const handleContinue = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    localStorage.removeItem("videoTime")
    router.push("/page3")
  }

  const handleBack = () => {
    if (videoRef.current) {
      localStorage.setItem("videoTime", videoRef.current.currentTime.toString())
    }
    router.push("/")
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
            Make Awesome Family Movies Or Put Your Dreams Into Film Reality! Enjoy!
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleBack}
              className="bg-black px-8 py-6 text-lg font-semibold text-white hover:bg-black/90"
            >
              Back
            </Button>
            <Button
              onClick={handleContinue}
              className="bg-black px-8 py-6 text-lg font-semibold text-white hover:bg-black/90"
            >
              Continue
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
