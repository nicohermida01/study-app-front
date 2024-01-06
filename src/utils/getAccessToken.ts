import { cookies } from 'next/headers'

export function getAccessToken() {
	const cookieStore = cookies()
	const token = cookieStore.get('accessToken')

	return token?.value
}
