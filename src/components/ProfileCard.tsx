'use client'

import { Avatar, Chip, Input } from '@nextui-org/react'

import { IProfileData } from 'interfaces/profileData.interface'
import { Card } from 'components/Card'
import { EditProfileModal } from 'components/EditProfileModal'

interface IProps extends IProfileData {}

export function ProfileCard({
	firstName,
	lastName,
	username,
	isProfessor,
	dateOfBirth,
	email,
	nationality,
}: IProps) {
	return (
		<Card containerStyles='flex flex-col items-center gap-[16px] p-[32px] relative'>
			<EditProfileModal
				firstName={firstName}
				lastName={lastName}
				username={username}
				email={email}
				dateOfBirth={new Date(dateOfBirth).toISOString().split('T')[0]}
				nationality={nationality}
			/>
			<Avatar
				src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
				className='w-28 h-28 text-large'
			/>

			<h2 className='font-bold text-2xl'>{`${firstName} ${lastName}`}</h2>

			<div className='flex justify-center gap-[8px]'>
				<Chip color='success' variant='flat' className='text-xs'>
					{`@${username}`}
				</Chip>

				<Chip color='primary' variant='flat' className='text-xs'>
					{isProfessor ? 'Professor' : 'Student'}
				</Chip>
			</div>

			<div className='w-full flex flex-col gap-[16px]'>
				<Input type='email' label='Email' value={email} isReadOnly />

				<Input
					type='Date'
					label='Date of birth'
					value={new Date(dateOfBirth).toISOString().split('T')[0]}
					isReadOnly
				/>

				<Input
					type='text'
					label='Nationality'
					value={nationality.name}
					isReadOnly
				/>
			</div>
		</Card>
	)
}
