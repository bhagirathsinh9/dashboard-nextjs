import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  // If not logged in
  if (!session) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-black'>
        <p className='text-red-400 text-lg font-medium'>You are not logged in.</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Welcome Section */}
        <div className='mb-10 animate-fade-in-up'>
          <h1 className='text-4xl font-bold text-white mb-2'>
            Welcome back, {session.user.name?.split(' ')[0] || 'User'}!
          </h1>
          <p className='text-gray-400 text-lg'>Here&apos;s your account overview</p>
        </div>

        {/* Profile Card */}
        <div className='bg-gray-900 rounded-2xl shadow-lg border border-gray-800 overflow-hidden mb-8 animate-fade-in-up animation-delay-300'>
          <div className='bg-linear-to-r from-gray-800 to-gray-900 px-8 py-6 border-b border-gray-800'>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 rounded-full bg-blue-600/30 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold border border-blue-500/30'>
                {session.user.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <h2 className='text-white text-2xl font-semibold'>{session.user.name}</h2>
                <p className='text-gray-400 text-sm mt-1'>{session.user.email}</p>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-8'>
            <div className='space-y-1'>
              <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Full Name</p>
              <p className='text-lg text-white font-semibold'>{session.user.name}</p>
            </div>
            
            <div className='space-y-1'>
              <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Email Address</p>
              <p className='text-lg text-white font-semibold break-all'>{session.user.email}</p>
            </div>
            
            <div className='space-y-1'>
              <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Account Role</p>
              <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-600/20 text-blue-400 border border-blue-600/30 capitalize'>
                {session.user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-500'>
          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center'>
                <svg className='w-6 h-6 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Profile Status</p>
            <p className='text-white text-xl font-bold'>Active</p>
          </div>

          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-12 h-12 rounded-lg bg-green-600/20 border border-green-600/30 flex items-center justify-center'>
                <svg className='w-6 h-6 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Account Type</p>
            <p className='text-white text-xl font-bold capitalize'>{session.user.role}</p>
          </div>

          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-12 h-12 rounded-lg bg-purple-600/20 border border-purple-600/30 flex items-center justify-center'>
                <svg className='w-6 h-6 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Member Since</p>
            <p className='text-white text-xl font-bold'>Today</p>
          </div>
        </div>
      </div>
    </div>
  )
}
