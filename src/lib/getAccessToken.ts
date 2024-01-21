'server only'

import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const getAccessToken = async () => {
	const session = await getServerSession(authOptions)

	if (!session) {
		console.log('Not session found')
		redirect('/login')
	}

	return session.backendTokens.access_token
}
