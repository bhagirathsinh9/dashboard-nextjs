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
    <div className='min-h-screen bg-black flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold text-white'>Create your account</h1>
          <p className='text-gray-400 text-sm'>Sign up to get started with your dashboard</p>
        </div>

        {error && (
          <p className='text-red-400 text-sm text-center bg-red-900/30 border border-red-800 rounded-lg px-3 py-2'>
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium text-gray-300'>Name</label>
            <input
              name='name'
              type='text'
              value={input.name}
              onChange={handleChange}
              required
              placeholder='John Doe'
              className='w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium text-gray-300'>Email</label>
            <input
              name='email'
              type='email'
              value={input.email}
              onChange={handleChange}
              required
              placeholder='you@example.com'
              className='w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium text-gray-300'>Password</label>
            <input
              name='password'
              type='password'
              value={input.password}
              onChange={handleChange}
              required
              placeholder='••••••••'
              className='w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        <p className='text-center text-sm text-gray-400'>
          Already have an account?{' '}
          <Link href='/login' className='text-indigo-400 hover:text-indigo-300 font-semibold'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
