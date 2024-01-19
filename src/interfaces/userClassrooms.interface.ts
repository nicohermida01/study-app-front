import { IClassroom } from './classroom.interface'

interface ICLassroomCard {
	name: string
	description: string
	subject: string
	professor: string
	id: string
	membersCount: number
}

export interface IUserClassrooms {
	coursesClass: ICLassroomCard[]
	teachesClass: ICLassroomCard[]
}
