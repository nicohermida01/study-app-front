import { ICreateTeacherDto } from 'interfaces/teacher.interface'
import api from 'httpclients/api'
import { apiWrapper } from 'lib/apiWrapper'

const createOne = async (data: ICreateTeacherDto, accessToken: string) => {
	return apiWrapper(async () => {
		const res = await api.post('/professor', data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const professorService = {
	createOne,
}
