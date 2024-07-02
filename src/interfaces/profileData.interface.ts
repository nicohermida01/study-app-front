import { INationality } from 'interfaces/nationality.interface'
import { Avatars } from 'ssot/avatars'

export interface IProfileData {
	firstName: string
	lastName: string
	nationality: INationality
	email: string
	dateOfBirth: string
	isProfessor: boolean
	username: string
	avatarNum: Avatars
}
