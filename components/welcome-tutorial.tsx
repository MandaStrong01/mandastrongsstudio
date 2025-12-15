"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface WelcomeTutorialProps {
  onClose: () => void
}

export function WelcomeTutorial({ onClose }: WelcomeTutorialProps) {
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: "Welcome to MandaStrong1 Studio!",
      description: "This quick tutorial will show you how to create your first movie in 3 simple phases.",
      emoji: "👋",
    },
    {
      title: "Pre-Production Phase",
      description: "Plan your story, characters, and scenes before you start filming.",
      emoji: "📝",
    },
    {
      title: "Production Phase",
      description: "Use our AI tools to bring your vision to life with automated editing.",
      emoji: "🎬",
    },
    {
      title: "Post-Production Phase",
      description: "Polish your movie with effects, music, and final touches.",
      emoji: "✨",
    },
    {
      title: "Ready to Begin!",
      description: "Let your creativity flow and make something amazing!",
      emoji: "🚀",
    },
  ]

  const currentStep = steps[step]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-600 to-purple-800 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6 text-center">
          <div className="mb-4 text-6xl">{currentStep.emoji}</div>
          <h2 className="text-3xl font-bold text-white">{currentStep.title}</h2>
        </div>

        {/* Progress Dots */}
        <div className="mb-6 flex justify-center gap-2">
          {steps.map((_, index) => (
            <div key={index} className={`h-2 w-2 rounded-full ${index === step ? "bg-purple-300" : "bg-white/30"}`} />
          ))}
        </div>

        <div className="mb-8 rounded-lg bg-black/30 p-6">
          <p className="text-lg leading-relaxed text-white">{currentStep.description}</p>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="flex-1 bg-black/30 text-white hover:bg-black/50 disabled:opacity-30"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              if (step < steps.length - 1) {
                setStep(step + 1)
              } else {
                onClose()
              }
            }}
            className="flex-1 bg-purple-500 text-white hover:bg-purple-600"
          >
            {step < steps.length - 1 ? "Next" : "Get Started"}
          </Button>
        </div>
      </div>
    </div>
  )
}
