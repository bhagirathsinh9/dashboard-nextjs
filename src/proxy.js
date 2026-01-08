import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function proxy(req) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const role = token.role
  
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(role === "admin" ? "/admin" : "/user", req.url)
    )
  }

  
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
  matcher: [ "/","/dashboard", "/admin/:path*", "/user/:path*"],
}
