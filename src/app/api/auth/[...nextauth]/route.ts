import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { sequelize, User } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await sequelize.authenticate(); // ensure connection
          console.log("credentials", credentials);
          const user = await User.findOne({
            where: { username: credentials?.username },
          });
          console.log("user", user);

          if (!user) {
            console.error("User not found:", credentials?.username);
            throw new Error("User not found");
          }

          const isValid = await bcrypt.compare(
            credentials!.password,
            user.password,
          );

          if (!isValid) {
            console.error("Invalid password for user:", credentials?.username);
            throw new Error("Invalid password");
          }

          return {
            id: user.id,
            name: user.username,
          };
        } catch (error: any) {
          console.error("Authorize error:", error.message || error);
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id as number;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as number;
      return session;
    },
  },
  pages: { signIn: "/admin/login" },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
