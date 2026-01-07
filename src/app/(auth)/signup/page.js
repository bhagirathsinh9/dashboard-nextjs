'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Signup() {
  const router = useRouter()
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Call your in-memory signup API
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    setLoading(false)

    if (data.error) {
      setError(data.error)
      return
    }

    // Auto-login after signup
    const loginRes = await signIn('credentials', {
      email: input.email,
      password: input.password,
      redirect: false,
    })

    if (loginRes?.error) {
      setError('Something went wrong. Try logging in.')
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleSignup}
        className='w-96 p-6 border rounded-xl flex flex-col gap-4'
      >
        <h1 className='text-xl font-bold text-center'>Signup</h1>

        {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

        <div className='flex flex-col gap-1'>
          <label>Name</label>
          <input
            name='name'
            value={input.name}
            onChange={handleChange}
            required
            className='border p-2 rounded'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Email</label>
          <input
            name='email'
            type='email'
            value={input.email}
            onChange={handleChange}
            required
            className='border p-2 rounded'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Password</label>
          <input
            name='password'
            type='password'
            value={input.password}
            onChange={handleChange}
            required
            className='border p-2 rounded'
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-black text-white p-2 rounded disabled:opacity-50'
        >
          {loading ? 'Signing up...' : 'Signup'}
        </button>

        <p className='text-center text-sm'>
          Already have an account?{' '}
          <Link href='/login' className='text-blue-500 underline'>
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
