import { Avatars } from 'ssot/avatars'

export interface IUser {
	firstName: string
	lastName: string
	username: string
	email: string
	id: string
	dateOfBirth: string
}

export type UpdateUserDTO = {
	firstName?: string
	lastName?: string
	username?: string
	email?: string
	dateOfBirth?: Date
	nationality?: string
	avatarNum?: Avatars
}
