import NextAuth from "next-auth"
import { authProviders } from './auth.providers';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";



 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: authProviders,
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: "jwt",
    maxAge: 86000
  }
})