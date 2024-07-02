import api from 'httpclients/api'
import { ICLassroomSerialized } from 'interfaces/classroom.interface'
import { IUserPermissions } from 'interfaces/permissions.interface'
import { IProfileData } from 'interfaces/profileData.interface'
import { IUser, UpdateUserDTO } from 'interfaces/user.interface'
import { apiWrapper } from 'lib/apiWrapper'
import { getAccessToken } from 'lib/getAccessToken'

const getCourses = async (): Promise<ICLassroomSerialized[]> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get('/user/courses', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const createCourse = async (classroomCode: string, accessToken: string) => {
	return await apiWrapper(async () => {
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

	return await apiWrapper(async () => {
		const res = await api.get(`/user/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getPermissions = async (): Promise<IUserPermissions> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get('/user/me/permissions', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getProfileData = async (userId: string): Promise<IProfileData> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/user/profile/${userId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const updateUserData = async (dto: UpdateUserDTO, accessToken: string) => {
	return await apiWrapper(async () => {
		const res = await api.put(`/user`, dto, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const userService = {
	getProfileData,
	getPermissions,
	getUser,
	createCourse,
	getCourses,
	updateUserData,
}
