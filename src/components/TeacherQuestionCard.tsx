'use client'

import { Button } from '@nextui-org/react'
import { Card } from './Card'

export function TeacherQuestionCard() {
	return (
		<Card containerStyles='p-[16px]'>
			<Button color='primary' variant='flat' className='w-full font-bold'>
				Are you a teacher?
			</Button>
		</Card>
	)
}
