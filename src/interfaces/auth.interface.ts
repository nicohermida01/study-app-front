export interface IRegisterAuthDto {
	firstName: string
	lastName: string
	username: string
	email: string
	password: string
	dateOfBirth: Date
	nationalityId: string
}

export interface ILoginDto {
	username: string
	password: string
}
