import { NextResponse } from "next/server"
import { verifyUser } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const result = await verifyUser(email, password)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 401 })
    }

    // TODO: Create session/JWT token for authenticated user
    return NextResponse.json({
      success: true,
      user: result.user,
      message: "Login successful",
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 })
  }
}
