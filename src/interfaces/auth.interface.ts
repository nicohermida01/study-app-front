export interface IRegisterAuthDto {
	firstName: string
	lastName: string
	username: string
	email: string
	password: string
	dateOfBirth: Date
	nationality: string
}

export interface ILoginDto {
	username: string
	password: string
}
