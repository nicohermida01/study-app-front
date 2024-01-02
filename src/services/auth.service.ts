import api from 'httpclients/api'

interface IRegisterAuthDto {
	firstName: string
	lastName: string
	email: string
	password: string
}

interface ILoginAuthDto {
	email: string
	password: string
}

const registerUser = async (dto: IRegisterAuthDto) => {
	const res = await api.post('/auth/register', dto)

	return res.data
}

const loginUser = async (dto: ILoginAuthDto) => {
	const res = await api.post('/auth/login', dto)

	return res.data
}

export const authService = {
	registerUser,
	loginUser,
}
