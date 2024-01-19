import api from 'httpclients/api'
import { ICreateProfessorDto } from 'interfaces/professor.interface'
import { apiWrapper } from 'lib/apiWrapper'

const createOne = async (dto: ICreateProfessorDto, accessToken: string) => {
	return apiWrapper(async () => {
		const res = await api.post('/professor', dto, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		return res.data
	})
}

export const professorService = {
	createOne,
}
