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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header Section */}
        <div className='mb-8 animate-fade-in-up'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h1 className='text-4xl font-bold text-white mb-2'>
                Admin Control Panel
              </h1>
              <p className='text-gray-400'>Manage and monitor your system</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-right'>
                <p className='text-sm text-gray-500'>Logged in as</p>
                <p className='text-white font-semibold'>{session.user.name}</p>
              </div>
              <div className='w-12 h-12 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center'>
                <span className='text-red-400 text-xl font-bold'>
                  {session.user.name?.charAt(0).toUpperCase() || 'A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up animation-delay-300'>
          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-10 h-10 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Total Users</p>
            <p className='text-white text-2xl font-bold'>1,234</p>
            <p className='text-green-400 text-xs mt-2'>+12% from last month</p>
          </div>

          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-600/50 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-600/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Active Sessions</p>
            <p className='text-white text-2xl font-bold'>89</p>
            <p className='text-green-400 text-xs mt-2'>+5% from last hour</p>
          </div>

          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600/50 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>System Status</p>
            <p className='text-white text-2xl font-bold'>Online</p>
            <p className='text-green-400 text-xs mt-2'>All systems operational</p>
          </div>

          <div className='bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-600/50 transition-all duration-200'>
            <div className='flex items-center justify-between mb-4'>
              <div className='w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-600/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium mb-1'>Data Processed</p>
            <p className='text-white text-2xl font-bold'>2.4TB</p>
            <p className='text-green-400 text-xs mt-2'>+8% from last week</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-500'>
          {/* Admin Info Card */}
          <div className='lg:col-span-2 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden'>
            <div className='bg-linear-to-r from-red-600/20 to-red-800/20 px-6 py-4 border-b border-gray-800'>
              <h2 className='text-xl font-bold text-white'>Administrator Information</h2>
            </div>
            <div className='p-6'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4 pb-6 border-b border-gray-800'>
                  <div className='w-12 h-12 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Full Name</p>
                    <p className='text-white text-lg font-semibold'>{session.user.name}</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 pb-6 border-b border-gray-800'>
                  <div className='w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Email Address</p>
                    <p className='text-white text-lg font-semibold break-all'>{session.user.email}</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-lg bg-amber-600/20 border border-amber-600/30 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Access Level</p>
                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600/20 text-red-400 border border-red-600/30 uppercase'>
                      {session.user.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className='bg-gray-900 rounded-xl border border-gray-800 overflow-hidden'>
            <div className='bg-linear-to-r from-purple-600/20 to-purple-800/20 px-6 py-4 border-b border-gray-800'>
              <h2 className='text-xl font-bold text-white'>Quick Actions</h2>
            </div>
            <div className='p-6 space-y-4'>
              <button className='w-full bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 text-red-400 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                </svg>
                Manage Users
              </button>
              <button className='w-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 text-blue-400 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
                View Analytics
              </button>
              <button className='w-full bg-amber-600/20 hover:bg-amber-600/30 border border-amber-600/30 text-amber-400 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                System Settings
              </button>
              <button className='w-full bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                </svg>
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
