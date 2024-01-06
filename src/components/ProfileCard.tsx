'use client'

import { Avatar, Chip, Input } from '@nextui-org/react'
import { Card } from 'components/Card'

interface IProfileCardProps {
	name: string
	username: string
	email: string
	nationality: string
}

export function ProfileCard({
	name,
	username,
	email,
	nationality,
}: IProfileCardProps) {
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

				<Chip color='primary' variant='flat' className='text-xs'>
					Student
				</Chip>
			</div>

			<div className='w-full flex flex-col gap-[16px]'>
				<Input type='email' label='Email' value={email} isReadOnly />
				<Input type='text' label='Nationality' value={nationality} isReadOnly />
			</div>
		</Card>
	)
}
