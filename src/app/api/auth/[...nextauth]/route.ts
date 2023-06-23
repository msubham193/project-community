import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/db";



const handler = NextAuth({
  adapter:PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    })
],
callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
      
        session.user.email = user?.email;
        session.user.image =user?.image;
        session.user.name = user?.name 
        
      }
      // const userData = await fetch(`${process.env.NEXTAUTH_URL}/api/user?userId=${user.id}`).then(response => response.json());
      // session.user.subscriptionStatus = userData.subscriptionStatus;
      return session;
    },
  },
})



export { handler as GET, handler as POST } 
