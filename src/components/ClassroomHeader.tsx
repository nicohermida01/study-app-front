'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { Card } from './Card'
import { usePathname } from 'next/navigation'

type Props = {
	classroomId: string
	isProfessor?: boolean
}

const validPaths = ['homework', 'schedules', 'requests']

export function ClassroomHeader({ classroomId, isProfessor }: Props) {
	const pathname = usePathname()
	const key = pathname.split('/')[pathname.split('/').length - 1]
	const selectedKey = validPaths.includes(key) ? key : 'board'

	return (
		<Card containerStyles='p-[16px] flex justify-center'>
			<Tabs aria-label='Options' selectedKey={selectedKey}>
				<Tab
					key='board'
					title='Board'
					href={`/dashboard/classrooms/${classroomId}`}
				/>

				<Tab
					key='homework'
					title='Homework'
					href={`/dashboard/classrooms/${classroomId}/homework`}
				/>

				<Tab
					key='schedules'
					title='Schedules'
					href={`/dashboard/classrooms/${classroomId}/schedules`}
				/>

				{isProfessor && (
					<Tab
						key='requests'
						title='Requests'
						href={`/dashboard/classrooms/${classroomId}/requests`}
					/>
				)}
			</Tabs>
		</Card>
	)
}
