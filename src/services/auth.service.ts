import api from 'httpclients/api'
import { ILoginDto, IRegisterAuthDto } from 'interfaces/auth.interface'
import { IUser } from 'interfaces/user.interface'
import { JWT } from 'next-auth/jwt'
import { getAccessToken } from 'utils/getAccessToken'

interface ISuccessResponse {
	message: string
}

interface IRegisterUserResponse extends ISuccessResponse {
	user: IUser
}

const me = async (): Promise<IUser> => {
	const accessToken = await getAccessToken()

	const res = await api.get('/auth/me', {
		headers: { Authorization: `Bearer ${accessToken}` },
	})
	return res.data
}

const registerUser = async (
	dto: IRegisterAuthDto
): Promise<IRegisterUserResponse> => {
	const res = await api.post('/auth/register', dto)

	return res.data
}

const loginUser = async (dto: ILoginDto) => {
	const res = await api.post('/auth/login', dto)
	return res.data
}

const refreshToken = async (token: JWT) => {
	const res = await api.post('/auth/refresh', {
		headers: { Authorization: `Refresh ${token.backendTokens.refreshToken}` },
	})

	return res.data
}

export const authService = {
	registerUser,
	loginUser,
	me,
	refreshToken,
}
