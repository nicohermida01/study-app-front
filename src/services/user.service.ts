import api from 'httpclients/api'
import { IUserPermissions } from 'interfaces/permissions.interface'
import { IUser } from 'interfaces/user.interface'
import { getAccessToken } from 'utils/getAccessToken'

const getNationality = async (): Promise<string> => {
	const accessToken = await getAccessToken()

	const res = await api.get('/users/nationality', {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

const getUser = async (id: string): Promise<IUser> => {
	const accessToken = await getAccessToken()

	const res = await api.get(`/users/${id}`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

const getPermissions = async (): Promise<IUserPermissions> => {
	const accessToken = await getAccessToken()

	const res = await api.get('/users/me/permissions', {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const userService = {
	getNationality,
	getUser,
	getPermissions,
}
