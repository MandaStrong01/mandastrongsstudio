"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QuickMenu } from "@/components/quick-menu"

export default function Page3() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters"
    }
    if (!/\d/.test(password)) {
      return "Password must include at least 1 number"
    }
    return null
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess("Login successful! Redirecting...")
        setTimeout(() => {
          window.location.href = "/page4"
        }, 1500)
      } else {
        setError(data.error || "Login failed")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    const passwordError = validatePassword(registerPassword)
    if (passwordError) {
      setError(passwordError)
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: registerEmail, password: registerPassword }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess("Registration successful! You can now login.")
        setRegisterEmail("")
        setRegisterPassword("")
      } else {
        setError(data.error || "Registration failed")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    }
  }

  return (
    <div className="relative min-h-screen bg-black">
      <QuickMenu />

      <header className="flex items-center justify-between border-b border-white/10 p-6">
        <h1 className="font-serif text-3xl font-bold text-white">MANDASTRONG'S STUDIO</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold italic text-white md:text-5xl">
            Login or Register to continue. Then choose your plan below to unlock full studio access.
          </h2>
        </div>

        <div className="mx-auto mb-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">Login</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email" className="text-white">
                  Email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="border-[#00ff41] bg-black text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-white">
                  Password
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="border-[#00ff41] bg-black text-white"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              {success && <p className="text-sm text-[#00ff41]">{success}</p>}
              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                Login
              </Button>
            </form>
          </div>

          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">Register</h3>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Label htmlFor="register-email" className="text-white">
                  Email
                </Label>
                <Input
                  id="register-email"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="border-[#00ff41] bg-black text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="register-password" className="text-white">
                  Password
                </Label>
                <Input
                  id="register-password"
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="border-[#00ff41] bg-black text-white"
                  required
                />
                <p className="mt-1 text-xs text-white/60">Must be 8+ characters with at least 1 number</p>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              {success && <p className="text-sm text-[#00ff41]">{success}</p>}
              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                Register
              </Button>
            </form>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-6 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Bonus</h3>
            <p className="mb-4 text-4xl font-bold text-[#00ff41]">$10</p>
            <ul className="mb-6 space-y-2 text-left text-sm text-white">
              <li>✓ Basic AI Tools</li>
              <li>✓ HD Export</li>
              <li>✓ 5 Projects</li>
              <li>✓ Email Support</li>
            </ul>
            <Button
              onClick={() => window.open("https://buy.stripe.com/fZubJ35BE3B53oHdiyafS00", "_blank")}
              className="w-full bg-black text-white hover:bg-black/90"
            >
              Get Started
            </Button>
            <Button
              onClick={() => (window.location.href = "https://mandastrongstudio.bolt.host")}
              className="mt-4 w-full border border-white/20 bg-black text-white hover:bg-white/10"
              variant="outline"
            >
              Return to App
            </Button>
          </div>

          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-6 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Pro</h3>
            <p className="mb-4 text-4xl font-bold text-[#00ff41]">$20</p>
            <ul className="mb-6 space-y-2 text-left text-sm text-white">
              <li>✓ All AI Tools</li>
              <li>✓ 4K Export</li>
              <li>✓ Unlimited Projects</li>
              <li>✓ Priority Support</li>
            </ul>
            <Button
              onClick={() => window.open("https://buy.stripe.com/14A00l8NQ0oTbVd3HYafS01", "_blank")}
              className="w-full bg-black text-white hover:bg-black/90"
            >
              Get Started
            </Button>
            <Button
              onClick={() => (window.location.href = "https://mandastrongstudio.bolt.host")}
              className="mt-4 w-full border border-white/20 bg-black text-white hover:bg-white/10"
              variant="outline"
            >
              Return to App
            </Button>
          </div>

          <div className="rounded-lg border-2 border-[#00ff41] bg-black p-6 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Studio</h3>
            <p className="mb-4 text-4xl font-bold text-[#00ff41]">$30</p>
            <ul className="mb-6 space-y-2 text-left text-sm text-white">
              <li>✓ Premium AI Tools</li>
              <li>✓ 8K Export</li>
              <li>✓ Team Collaboration</li>
              <li>✓ 24/7 VIP Support</li>
            </ul>
            <Button
              onClick={() => window.open("https://buy.stripe.com/4gM5kFaVYfjN7EX0vMafS02", "_blank")}
              className="w-full bg-black text-white hover:bg-black/90"
            >
              Get Started
            </Button>
            <Button
              onClick={() => (window.location.href = "https://mandastrongstudio.bolt.host")}
              className="mt-4 w-full border border-white/20 bg-black text-white hover:bg-white/10"
              variant="outline"
            >
              Return to App
            </Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Button
            onClick={() => (window.location.href = "/page2")}
            className="bg-black px-8 py-3 text-white hover:bg-black/90"
          >
            Back
          </Button>
          <Button
            onClick={() => (window.location.href = "/page4")}
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
  )
}
