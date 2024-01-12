import { useSession } from 'next-auth/react'

export function useAccessToken() {
	const { data: session, status } = useSession()

	return session?.backendTokens.accessToken || ''
}
