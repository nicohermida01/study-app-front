import { authOptions } from 'app/api/auth/[...nextauth]/route'
import api from 'httpclients/api'
import { IUser } from 'interfaces/user.interface'
import { getServerSession } from 'next-auth'
import { getAccessToken } from 'utils/getAccessToken'

const getNationality = async (): Promise<string> => {
	const accessToken = await getAccessToken()

	const res = await api.get('/users/nationality', {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

const getUser = async (id: string): Promise<IUser> => {
	const accessToken = await getAccessToken()

	const res = await api.get(`/users/${id}`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})

	return res.data
}

export const userService = {
	getNationality,
	getUser,
}
