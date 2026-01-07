'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [input, setInput] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('credentials', {
      email: input.email,
      password: input.password,
      redirect: false, // important for client-side redirect
    })

    setLoading(false)

    if (res?.error) {
      setError('Invalid email or password')
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleLogin}
        className='w-96 p-6 border rounded-xl flex flex-col gap-4'
      >
        <h1 className='text-xl font-bold text-center'>Login</h1>

        {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

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
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/signup' className='text-blue-500 underline'>
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}
