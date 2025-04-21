import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const { handlers, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/',        
    error: '/',         
  },
});
