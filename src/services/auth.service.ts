import api from 'httpclients/api'
import { ILoginAuthDto, IRegisterAuthDto } from 'interfaces/auth.interface'
import { IUser } from 'interfaces/user.interface'

interface ISuccessResponse {
	message: string
}

interface IRegisterUserResponse extends ISuccessResponse {
	user: IUser
}

const registerUser = async (
	dto: IRegisterAuthDto
): Promise<IRegisterUserResponse> => {
	const res = await api.post('/auth/register', dto)

	return res.data
}

const loginUser = async (dto: ILoginAuthDto): Promise<ISuccessResponse> => {
	const res = await api.post('/auth/login', dto)

	return res.data
}

const logoutUser = async () => {
	const res = await api.get('/auth/logout')

	return res.data
}

export const authService = {
	registerUser,
	loginUser,
	logoutUser,
}
