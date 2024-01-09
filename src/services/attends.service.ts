import { IAttends } from 'interfaces/attends.interface'
import { getAccessToken } from 'utils/getAccessToken'
import api from 'httpclients/api'

const getAllAttendsByUser = async (userId: string): Promise<IAttends[]> => {
	const accessToken = await getAccessToken()

	const res = await api.get(`/attends/user/${userId}`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const attendsService = {
	getAllAttendsByUser,
}
