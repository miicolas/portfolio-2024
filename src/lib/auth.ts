import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Github from "next-auth/providers/github"
import prisma from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    })
  ],
})