import api from 'httpclients/api'
import { IUserPermissions } from 'interfaces/permissions.interface'
import { IProfileData } from 'interfaces/profileData.interface'
import { IUser } from 'interfaces/user.interface'
import { IUserClassrooms } from 'interfaces/userClassrooms.interface'
import { apiWrapper } from 'lib/apiWrapper'
import { getAccessToken } from 'lib/getAccessToken'

const getClassrooms = async (): Promise<IUserClassrooms> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get('/user/classrooms', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const createCourse = async (classroomCode: string, accessToken: string) => {
	return apiWrapper(async () => {
		const res = await api.post(
			'/user/course',
			{ classroomCode },
			{
				headers: { Authorization: `Bearer ${accessToken}` },
			}
		)

		return res.data
	})
}

const getUser = async (id: string): Promise<IUser> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get(`/user/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getPermissions = async (): Promise<IUserPermissions> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get('/user/me/permissions', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getProfileData = async (userId: string): Promise<IProfileData> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get(`/user/profile/${userId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const userService = {
	getUser,
	getPermissions,
	getProfileData,
	getClassrooms,
	createCourse,
}
