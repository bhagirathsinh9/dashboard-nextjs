// import { getServerSession } from "next-auth"
// import { authOptions } from "../../api/auth/[...nextauth]/route"

// export default async function DashboardPage() {
//   const session = await getServerSession(authOptions)

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <p>Name: {session.user.name}</p>
//       <p>Email: {session.user.email}</p>
//       <p>Role: {session.user.role}</p>
//     </div>
//   )
// }



import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // If not logged in
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Dashboard</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-6">
        {/* Name Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm mb-2">Name</h3>
          <p className="text-gray-800 font-medium">{session.user.name}</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm mb-2">Email</h3>
          <p className="text-gray-800 font-medium">{session.user.email}</p>
        </div>

        {/* Role Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm mb-2">Role</h3>
          <p className="text-gray-800 font-medium capitalize">{session.user.role}</p>
        </div>
      </div>
    </div>
  );
}
