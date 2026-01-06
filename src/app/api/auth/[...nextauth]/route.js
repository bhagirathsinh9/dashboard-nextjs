// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"

// const users = [
//   {
//     id: "1",
//     name: "Admin",
//     email: "admin@test.com",
//     password: "admin123",
//     role: "admin",
//   },
//   {
//     id: "2",
//     name: "User",
//     email: "user@test.com",
//     password: "user123",
//     role: "user",
//   },
// ]

// export const authOptions = {
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const user = users.find(
//           (u) =>
//             u.email === credentials.email &&
//             u.password === credentials.password
//         )

//         if (!user) return null

//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//         }
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.role = user.role
//       return token
//     },
//     async session({ session, token }) {
//       session.user.role = token.role
//       return session
//     },
//   },
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }



import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { users } from "@/lib/memoryStore"

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = users.find(
          u =>
            u.email === credentials.email &&
            u.password === credentials.password
        )

        if (!user) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },

  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
