import { ICreateClassroomDto } from 'interfaces/classroom.interface'
import api from 'httpclients/api'

const create = async (data: ICreateClassroomDto, accessToken: string) => {
	const res = await api.post('/classrooms', data, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const classroomService = {
	create,
}
