import api from 'httpclients/api'
import { IUser } from 'interfaces/user.interface'
import { getAccessToken } from 'utils/getAccessToken'

const me = async (): Promise<IUser> => {
	const accessToken = getAccessToken()

	const res = await api.get('/users/me', {
		headers: { Authorization: `Bearer ${accessToken}` },
		cache: false,
	})

	return res.data
}

const getNationality = async (): Promise<string> => {
	const accessToken = getAccessToken()

	const res = await api.get('/users/nationality', {
		headers: { Authorization: `Bearer ${accessToken}` },
		cache: false,
	})

	return res.data
}

export const userService = {
	me,
	getNationality,
}
