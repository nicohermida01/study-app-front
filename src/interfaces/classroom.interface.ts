export interface ICreateClassroomDto {
	name: string
	description: string
}

export interface IClassroom {
	name: string
	description: string
	code: string
}

export interface IClassroomCard {
	name: string
	description: string
	teacher: string
	area: string
	membersCount: number
	id: string
}
