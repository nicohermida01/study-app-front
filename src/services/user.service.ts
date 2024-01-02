import api from 'httpclients/api'
import { IUser } from 'interfaces/user.interface'
import { cookies } from 'next/headers'

const me = async (): Promise<IUser> => {
	const cookieStore = cookies()
	const token = cookieStore.get('accessToken')

	const res = await api.get('/users/me', {
		headers: { Authorization: `Bearer ${token?.value}` },
	})

	return res.data
}

export const userService = {
	me,
}
