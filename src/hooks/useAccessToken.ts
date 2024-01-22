'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export function useAccessToken() {
	const { data: session, status } = useSession()

	useEffect(() => {
		if (session?.error === 'RefreshAccessTokenError') {
			signIn()
		}
	}, [session])

	if (status === 'unauthenticated') {
		redirect('/login')
	}

	return session?.backendTokens.access_token || ''
}
