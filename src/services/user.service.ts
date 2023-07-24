interface ICreateUserDTO {
	username: string
	email: string
	password: string
	firstName?: string
	lastName?: string
}

const create = async (input: ICreateUserDTO) => {
	const response = await fetch('http://localhost:8000/users/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(input),
	})

	return await response.json()
}

export const userService = {
	create,
}
