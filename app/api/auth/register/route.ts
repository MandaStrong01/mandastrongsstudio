import { NextResponse } from "next/server"
import { createUser } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (password.length < 8) {
      return NextResponse.json({ success: false, error: "Password must be at least 8 characters" }, { status: 400 })
    }

    if (!/\d/.test(password)) {
      return NextResponse.json({ success: false, error: "Password must include at least 1 number" }, { status: 400 })
    }

    const result = await createUser(email, password)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      userId: result.userId,
      message: "Registration successful",
    })
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ success: false, error: "Registration failed" }, { status: 500 })
  }
}
