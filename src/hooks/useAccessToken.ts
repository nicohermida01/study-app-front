'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export function useAccessToken() {
	const { data: session } = useSession()

	if (!session) {
		redirect('/login')
	}

	return session.backendTokens.access_token
}
