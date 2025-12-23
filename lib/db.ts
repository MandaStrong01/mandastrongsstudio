import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function createUser(email: string, password: string) {
  const passwordHash = await bcrypt.hash(password, 10)

  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password_hash: passwordHash }])
    .select()
    .maybeSingle()

  if (error) {
    if (error.message.includes('duplicate') || error.code === '23505') {
      return { success: false, error: 'Email already exists' }
    }
    return { success: false, error: error.message }
  }

  return { success: true, userId: data?.id }
}

export async function verifyUser(email: string, password: string) {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .maybeSingle()

  if (error || !user) {
    return { success: false, error: 'Invalid email or password' }
  }

  const isValid = await bcrypt.compare(password, user.password_hash)

  if (!isValid) {
    return { success: false, error: 'Invalid email or password' }
  }

  return { success: true, user: { id: user.id, email: user.email } }
}
