import { INationality } from 'interfaces/nationality.interface'

export interface IProfileData {
	firstName: string
	lastName: string
	nationality: INationality
	email: string
	dateOfBirth: string
	isProfessor: boolean
	username: string
}
