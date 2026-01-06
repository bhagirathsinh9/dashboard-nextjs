import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function DashboardEntry() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/login")

  if (session.user.role === "admin") {
    redirect("/admin")
  }

  redirect("/user")
}
