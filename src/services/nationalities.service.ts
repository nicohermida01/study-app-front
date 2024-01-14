import api from 'httpclients/api'
import { INationality } from 'interfaces/nationality.interface'
import { IPaginationResponse } from 'interfaces/pagination.interface'
import { apiWrapper } from 'lib/apiWrapper'

const getNationalitiesWithPagination = async (
	queryParams: {
		offset: number
		limit: number
	},
	signalObject: AbortSignal
): Promise<IPaginationResponse<INationality>> => {
	return await apiWrapper(async () => {
		const res = await api.get('/nationalities/pagination', {
			signal: signalObject,
			params: queryParams,
		})

		return res.data
	})
}

export const nationalitiesService = {
	getNationalitiesWithPagination,
}
