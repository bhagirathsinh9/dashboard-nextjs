// import { withAuth } from 'next-auth/middleware'
// import { NextResponse } from 'next/server'

// export default withAuth(
//   function middleware(req) {
//     const { pathname } = req.nextUrl
//     const role = req.nextauth.token?.role

//     // Handle dashboard entry click
//     if (pathname === '/dashboard') {
//       if (role === 'admin') {
//         return NextResponse.redirect(new URL('/admin', req.url))
//       }
//       return NextResponse.redirect(new URL('/user', req.url))
//     }

//     if (pathname.startsWith('/admin') && role !== 'admin') {
//       return NextResponse.redirect(new URL('/user', req.url))
//     }

//     if (pathname.startsWith('/user') && role !== 'user') {
//       return NextResponse.redirect(new URL('/admin', req.url))
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   },
// )

// export const config = {
//   matcher: ['/dashboard', '/admin/:path*', '/user/:path*'],
// }



import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function proxy(req) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const role = token.role

  if (pathname === "/dashboard") {
    return NextResponse.redirect(
      new URL(role === "admin" ? "/admin" : "/user", req.url)
    )
  }

  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/user", req.url))
  }

  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/admin/:path*", "/user/:path*"],
}
