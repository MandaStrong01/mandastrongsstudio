import Database from "better-sqlite3"
import { join } from "path"
import bcrypt from "bcryptjs"

let db: Database.Database | null = null

export function getDatabase() {
  if (!db) {
    const dbPath = join(process.cwd(), "users.db")
    db = new Database(dbPath)

    // Create users table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log("[v0] Database initialized successfully")
  }

  return db
}

export async function createUser(email: string, password: string) {
  const db = getDatabase()
  const passwordHash = await bcrypt.hash(password, 10)

  try {
    const stmt = db.prepare("INSERT INTO users (email, password_hash) VALUES (?, ?)")
    const result = stmt.run(email, passwordHash)
    return { success: true, userId: result.lastInsertRowid }
  } catch (error: any) {
    if (error.message.includes("UNIQUE constraint failed")) {
      return { success: false, error: "Email already exists" }
    }
    throw error
  }
}

export async function verifyUser(email: string, password: string) {
  const db = getDatabase()
  const stmt = db.prepare("SELECT * FROM users WHERE email = ?")
  const user = stmt.get(email) as { id: number; email: string; password_hash: string } | undefined

  if (!user) {
    return { success: false, error: "Invalid email or password" }
  }

  const isValid = await bcrypt.compare(password, user.password_hash)

  if (!isValid) {
    return { success: false, error: "Invalid email or password" }
  }

  return { success: true, user: { id: user.id, email: user.email } }
}
