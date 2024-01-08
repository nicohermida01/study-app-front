import api from 'httpclients/api'
import { INationality } from 'interfaces/nationality.interface'

interface IPaginationResponse<T> {
	docs: T[]
	hasNextPage: boolean
	hasPrevPage: boolean
	limit: number
	nextPage: number
	offset: number
	page: number
	pagingCounter: number
	prevPage: number
	totalDocs: number
	totalPages: number
}

const getNationalitiesWithPagination = async (
	queryParams: {
		offset: number
		limit: number
	},
	signalObject: AbortSignal
): Promise<IPaginationResponse<INationality>> => {
	const res = await api.get('/nationalities/pagination', {
		signal: signalObject,
		params: queryParams,
	})

	return res.data
}

export const nationalitiesService = {
	getNationalitiesWithPagination,
}
