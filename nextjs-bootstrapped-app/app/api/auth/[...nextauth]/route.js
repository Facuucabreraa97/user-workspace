import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          throw new Error("No user found with the email");
        }
        // Assuming password is hashed and stored in a separate table or field
        // For this example, let's assume user has a hashedPassword field
        // If not present, registration flow needs to be implemented separately
        if (!user.hashedPassword) {
          throw new Error("User has no password set, please login with Google");
        }
        const isValid = await compare(credentials.password, user.hashedPassword);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.role = user.role;
      const subscription = await prisma.subscription.findFirst({
        where: { userId: user.id, endDate: null },
      });
      session.user.subscription = subscription;
      return session;
    },
    async signIn({ user, account, profile }) {
      return true;
    },
  },
  pages: {
    signIn: '/',
  },
});

export { handler as GET, handler as POST };
