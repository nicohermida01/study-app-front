import api from 'httpclients/api'
import { ITeaches } from 'interfaces/teaches.interface'
import { getAccessToken } from 'utils/getAccessToken'

const getAllTeachesByUser = async (userId: string): Promise<ITeaches[]> => {
	const accessToken = await getAccessToken()

	const res = await api.get(`/teaches/user/${userId}`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const teachesService = {
	getAllTeachesByUser,
}
