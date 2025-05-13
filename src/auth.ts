import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";
import { compare } from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      authorize: async ({ email, password }) => {
        try {
          const user = await prisma.user.findUnique({
            where: { email: email as string },
          });

          console.log(user);

          if (!user) {
            throw new Error("User not found");
          }

          const passwordsMatch = await compare(
            password as string,
            user.password
          );

          if (!passwordsMatch) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          console.error(error);
          throw new Error("Something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
});
