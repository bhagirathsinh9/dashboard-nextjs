import { users } from '@/lib/memoryStore'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, password } = await req.json()

  const exists = users.find((u) => u.email === email)
  if (exists) {
    return NextResponse.json({ error: 'User exists' }, { status: 400 })
  }

  users.push({
    id: Date.now().toString(),
    name,
    email,
    password,
    role: 'user',
  })

  return NextResponse.json({ success: true })
}
