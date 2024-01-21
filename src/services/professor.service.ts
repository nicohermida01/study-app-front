import api from 'httpclients/api'
import { ICLassroomSerialized } from 'interfaces/classroom.interface'
import { ICreateProfessorDto } from 'interfaces/professor.interface'
import { ISubject } from 'interfaces/subject.interface'
import { apiWrapper } from 'lib/apiWrapper'
import { getAccessToken } from 'lib/getAccessToken'

const createOne = async (dto: ICreateProfessorDto, accessToken: string) => {
	return apiWrapper(async () => {
		const res = await api.post('/professor', dto, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getTeaches = async (): Promise<ICLassroomSerialized[]> => {
	const accessToken = await getAccessToken()

	return apiWrapper(async () => {
		const res = await api.get('/professor/teaches', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

const getSubjects = async (accessToken: string): Promise<ISubject[]> => {
	return apiWrapper(async () => {
		const res = await api.get('/professor/subjects', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const professorService = {
	createOne,
	getSubjects,
	getTeaches,
}
