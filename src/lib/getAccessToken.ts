'server only'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from './authConfig'

export const getAccessToken = async () => {
	const session = await getServerSession(authOptions)

	if (!session) {
		console.log('Not session found')
		redirect('/login')
	}

	return session.backendTokens.access_token
}
