'use client'

import { Avatar, Chip } from '@nextui-org/react'
import { Card } from 'components/Card'

interface IProfileCardProps {
	name: string
	username: string
}

export function ProfileCard({ name, username }: IProfileCardProps) {
	return (
		<Card containerStyles='flex flex-col items-center gap-[16px]'>
			<Avatar
				src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
				className='w-28 h-28 text-large'
			/>

			<h2 className='font-bold text-2xl'>{name}</h2>

			<div className='flex justify-center gap-[8px]'>
				<Chip color='success' variant='flat' className='text-xs'>
					{username}
				</Chip>

				<Chip color='primary' variant='solid' className='text-xs'>
					Student
				</Chip>
			</div>
		</Card>
	)
}
