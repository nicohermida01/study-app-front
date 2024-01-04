export interface IRegisterAuthDto {
	firstName: string
	lastName: string
	username: string
	email: string
	password: string
}

export interface ILoginAuthDto {
	username: string
	password: string
}
