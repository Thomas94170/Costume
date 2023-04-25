import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        mdp: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, mdp } = credentials;
        const response = await fetch(`http://localhost:5400/user?email=${email}&mdp=${password}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await response.json();
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error("Invalid credentials"));
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.user.id = token.id;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    verifyRequest: "/",
    newUser: null,
    callbackUrl: "/auth/callback",
    successUrl: "/auth/profil",
    },
  
};

export default (req, res) => NextAuth(req, res, options);
