import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export async function useAuthenticate() {
	const session = await getServerSession(authOptions)

	if (!session?.user) {
		redirect('/login')
	}

	return session
}
