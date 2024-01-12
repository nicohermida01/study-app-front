import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authService } from 'services/auth.service'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.username || !credentials.password) return null

				const loginResponse = await authService.loginUser({
					password: credentials.password,
					username: credentials.username,
				})

				if (loginResponse) return loginResponse

				return null
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) return { ...token, ...user }

			if (new Date().getTime() < token.backendTokens.expiresIn) return token

			const backendTokens = await authService.refreshToken(
				token.backendTokens.refreshToken
			)

			return {
				...token,
				backendTokens,
			}
		},

		async session({ token, session }) {
			session.user = token.user
			session.backendTokens = token.backendTokens

			return session
		},
	},

	pages: { signIn: '/login' },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
