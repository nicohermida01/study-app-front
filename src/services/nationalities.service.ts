import api from 'httpclients/api'

interface IPaginationResponse<T> {
	next: number
	results: T[]
}

const getNationalitiesWithPagination = async (): Promise<
	IPaginationResponse<string>
> => {
	const res = await api.get('/nationalities/pagination')

	return res.data
}

export const nationalitiesService = {
	getNationalitiesWithPagination,
}
