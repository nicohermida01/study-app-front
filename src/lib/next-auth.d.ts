import { IBackendTokens } from 'interfaces/backendTokens.interface'
import { IUser } from 'interfaces/user.interface'
import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: IUser

		backendTokens: IBackendTokens

		error?: 'RefreshAccessTokenError'
	}
}

import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
	interface JWT {
		user: IUser

		backendTokens: IBackendTokens

		error?: 'RefreshAccessTokenError'
	}
}
