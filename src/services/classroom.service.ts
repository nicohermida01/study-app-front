import { IClassroom, ICreateClassroomDto } from 'interfaces/classroom.interface'
import api from 'httpclients/api'
import { apiWrapper } from 'lib/apiWrapper'
import { getAccessToken } from 'lib/getAccessToken'

interface AuthUserClassOutput {
	rol: 'Student' | 'Professor'
	classroom: IClassroom
}

const getRequests = async (classroomId: string): Promise<any> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/classroom/requests/${classroomId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const authenticateProfessor = async (classroomId: string): Promise<any> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/classroom/professor/auth/${classroomId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const authUserClass = async (
	classroomId: string
): Promise<AuthUserClassOutput> => {
	const accessToken = await getAccessToken()

	return await apiWrapper(async () => {
		const res = await api.get(`/classroom/auth/${classroomId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const createOne = async (data: ICreateClassroomDto, accessToken: string) => {
	return await apiWrapper(async () => {
		const res = await api.post('/classroom', data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const classroomService = {
	createOne,
	authUserClass,
	authenticateProfessor,
	getRequests,
}
