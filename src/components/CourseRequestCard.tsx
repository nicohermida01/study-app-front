'use client'

import { Avatar, Button } from '@nextui-org/react'
import { Card } from './Card'
import { classroomService } from 'services/classroom.service'
import { useAccessToken } from 'hooks/useAccessToken'
import { toast } from 'sonner'
import { errorMessages } from 'ssot/errorMessages'
import { useRouter } from 'next/navigation'

type Props = {
	name: string
	username: string
	courseId: string
}

export function CourseRequestCard(props: Props) {
	const accessToken = useAccessToken()
	const router = useRouter()

	const handleReject = () => {
		classroomService
			.rejectRequest(props.courseId, accessToken)
			.then(() => router.refresh())
			.catch(err => toast.error(errorMessages.DEFAULT_ERROR_MESSAGE))
	}

	const handleAccept = () => {
		classroomService
			.acceptRequest(props.courseId, accessToken)
			.then(() => router.refresh())
			.catch(err => toast.error(errorMessages.DEFAULT_ERROR_MESSAGE))
	}

	return (
		<Card containerStyles='p-[16px] w-max flex flex-col items-center gap-[16px]'>
			<div className='flex flex-col items-center'>
				<Avatar
					src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
					className='w-14 h-14 text-small'
				/>

				<h3 className='font-bold'>{props.name}</h3>
				<span className='text-sm text-gray-500'>{`@${props.username}`}</span>
			</div>

			<div className='flex items-center gap-[4px]'>
				<Button size='sm' variant='flat' onClick={handleReject}>
					Reejct
				</Button>
				<Button size='sm' color='primary' onClick={handleAccept}>
					Accept
				</Button>
			</div>
		</Card>
	)
}
