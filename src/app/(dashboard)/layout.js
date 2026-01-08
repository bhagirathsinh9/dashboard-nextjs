import LogoutButton from '@/componets/LogoutButton'

export default function DashboardLayout({ children }) {
  return (
    <div className='min-h-screen bg-black'>
      <header className='bg-gray-900 border-b border-gray-800 shadow-lg'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <h2 className='font-bold text-xl text-white'>Dashboard</h2>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
