import api from 'httpclients/api'
import { IUserPermissions } from 'interfaces/permissions.interface'
import { IProfileData } from 'interfaces/profileData.interface'
import { IUser } from 'interfaces/user.interface'
import { apiWrapper } from 'lib/apiWrapper'
import { getAccessToken } from 'lib/getAccessToken'

const getUser = async (id: string): Promise<IUser> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get(`/users/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getPermissions = async (): Promise<IUserPermissions> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get('/users/me/permissions', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getProfileData = async (userId: string): Promise<IProfileData> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get(`/users/profile/${userId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const userService = {
	getUser,
	getPermissions,
	getProfileData,
}
