import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  { db } from "@/lib/db";



const handler = NextAuth({
  adapter:PrismaAdapter(db),
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
      
      return session;
    },

    async jwt({ token, account, profile,user }) {
      console.log(token);
      // Persist the OAuth access_token and or the user id to the token right after signin
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      // if (!dbUser.username) {
      //   await db.user.update({
      //     where: {
      //       id: dbUser.id,
      //     },
      //     data: {
      //       username: nanoid(10),
      //     },
      //   })
      // }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      }
    }





  }
})


export const getAuthSession = () => getServerSession(handler)

export { handler as GET, handler as POST } 
