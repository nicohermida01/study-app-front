export interface ICreateClassroomDto {
	name: string
	description: string
	subject: string
}

export interface IClassroom {
	name: string
	description: string
	code: string
	subject: string
}

export interface ICLassroomSerialized {
	name: string
	description: string
	subject: string
	professor: string
	id: string
	membersCount: number
}
