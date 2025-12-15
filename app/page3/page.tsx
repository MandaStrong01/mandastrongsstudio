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
          >import React, { useState } from 'react';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('ocean-postcard');
  const [uploadedMedia, setUploadedMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  // Default ocean view video URL from Pexels (free stock)
  const defaultOceanVideo = 'https://player.vimeo.com/video/459081856?h=example'; // Placeholder; replace with actual Pexels embed or direct MP4 like https://videos.pexels.com/video-files/854356/854356-hd_1920_1080_30fps.mp4
  // For direct MP4: Use <video src="https://videos.pexels.com/video-files/854356/854356-hd_1920_1080_30fps.mp4" /> but host if needed.

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedMedia(file);
      setPreviewUrl(url);
    }
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'ocean-postcard':
        return (
          <div className="relative w-full h-96 bg-blue-900 rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              src={previewUrl || defaultOceanVideo}
            >
              <source src={previewUrl || defaultOceanVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl font-bold mb-2">Ocean Serenity</h2>
                <p className="text-lg">Upload your media to customize!</p>
              </div>
            </div>
          </div>
        );
      case 'relaxation-reel':
        return (
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg overflow-hidden flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              src={previewUrl || defaultOceanVideo}
            >
              <source src={previewUrl || defaultOceanVideo} type="video/mp4" />
            </video>
            <div className="relative z-10 text-center text-white">
              <blockquote className="text-xl italic mb-4">"The sea, once it casts its spell, holds one in its net of wonder forever."</blockquote>
              <p className="text-sm">- Jacques Cousteau</p>
            </div>
          </div>
        );
      case 'custom-generator':
        return (
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Create Custom Asset</h3>
            <input
              type="file"
              accept="video/*,image/*"
              onChange={handleUpload}
              className="mb-4 p-2 border rounded"
            />
            {previewUrl && (
              <div className="mb-4">
                <video src={previewUrl} controls className="w-full max-w-md rounded" />
              </div>
            )}
            <textarea
              placeholder="Add overlay text..."
              className="w-full p-2 border rounded mb-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate Asset</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          AI Asset Creator: Ocean Views & Media Upload
        </h1>
        
        {/* Template Selector */}
        <div className="mb-6 flex justify-center space-x-4">
          {['ocean-postcard', 'relaxation-reel', 'custom-generator'].map((template) => (
            <button
              key={template}
              onClick={() => setSelectedTemplate(template)}
              className={`px-4 py-2 rounded ${selectedTemplate === template ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            >
              {template.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Media Upload */}
        <div className="mb-6 text-center">
          <label className="block bg-white p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="file" accept="video/*,image/*" onChange={handleUpload} className="hidden" />
            <p className="text-gray-600">📁 Drag or click to upload media (Video/Image)</p>
            {uploadedMedia && <p className="text-green-600 mt-2">Uploaded: {uploadedMedia.name}</p>}
          </label>
        </div>

        {/* Render Selected Template */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}

export default App;
            MandaStrong1.Etsy.com
          </a>
        </p>
      </footer>
    </div>
  )
}
