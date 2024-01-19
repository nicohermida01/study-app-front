import { ICreateClassroomDto } from 'interfaces/classroom.interface'
import api from 'httpclients/api'
import { apiWrapper } from 'lib/apiWrapper'

/* const verifyUserInClass = async (id: string): Promise<IClassroom> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/classrooms/auth/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
} */

/* const getAllForRelatedUser = async (
	userId: string
): Promise<IClassroomCard[]> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/classrooms/user/${userId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
} */

const create = async (data: ICreateClassroomDto, accessToken: string) => {
	return await apiWrapper(async () => {
		const res = await api.post('/classroom', data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const classroomService = {
	create,
	/* getAllForRelatedUser,
	verifyUserInClass, */
}
