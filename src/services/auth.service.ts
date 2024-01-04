import api from 'httpclients/api'
import { ILoginAuthDto, IRegisterAuthDto } from 'interfaces/auth.interface'

const registerUser = async (dto: IRegisterAuthDto) => {
	const res = await api.post('/auth/register', dto)

	return res.data
}

const loginUser = async (dto: ILoginAuthDto) => {
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
