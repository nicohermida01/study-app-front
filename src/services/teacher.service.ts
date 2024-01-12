import { ICreateTeacherDto } from 'interfaces/teacher.interface'
import api from 'httpclients/api'
import { getAccessToken } from 'utils/getAccessToken'
import { useAccessToken } from 'hooks/useAccessToken'

const create = async (data: ICreateTeacherDto, accessToken: string) => {
	const res = await api.post('/teachers', data, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const teacherService = {
	create,
}
