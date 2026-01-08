'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/login') // redirect to login after logout
  }

  return (
    <button
      onClick={handleLogout}
      className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium border border-red-700/50'
    >
      Logout
    </button>
  )
}
