import { IPaginationResponse } from 'interfaces/pagination.interface'
import { ISubject } from 'interfaces/subject.interface'
import { apiWrapper } from 'lib/apiWrapper'
import api from 'httpclients/api'

const getAllWithPagination = async (
	queryParams: {
		offset: number
		limit: number
	},
	signalObject: AbortSignal
): Promise<IPaginationResponse<ISubject>> => {
	return await apiWrapper(async () => {
		const res = await api.get('/subject/all/pagination', {
			signal: signalObject,
			params: queryParams,
		})

		return res.data
	})
}

export const subjectService = {
	getAllWithPagination,
}
