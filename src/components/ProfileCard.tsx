'use client'

import { Avatar, Button, Chip, Input, Tooltip } from '@nextui-org/react'

import { IProfileData } from 'interfaces/profileData.interface'
import { Card } from 'components/Card'
import { EditIcon } from 'components/icons/EditIcon'

interface IProps extends IProfileData {}

export function ProfileCard(props: IProps) {
	return (
		<Card containerStyles='flex flex-col items-center gap-[16px] p-[32px] relative'>
			<Tooltip content='Edit profile'>
				<Button
					isIconOnly
					aria-label='edit profile'
					radius='full'
					variant='faded'
					size='sm'
					className='border-none absolute top-[12px] right-[12px]'
				>
					<EditIcon className='h-[16px] stroke-light-black' />
				</Button>
			</Tooltip>

			<Avatar
				src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
				className='w-28 h-28 text-large'
			/>

			<h2 className='font-bold text-2xl'>{props.fullName}</h2>

			<div className='flex justify-center gap-[8px]'>
				<Chip color='success' variant='flat' className='text-xs'>
					{`@${props.username}`}
				</Chip>

				<Chip color='primary' variant='flat' className='text-xs'>
					{props.isProfessor ? 'Professor' : 'Student'}
				</Chip>
			</div>

			<div className='w-full flex flex-col gap-[16px]'>
				<Input type='email' label='Email' value={props.email} isReadOnly />
				<Input
					type='text'
					label='Date of birth'
					value={new Date(props.dateOfBirth).toLocaleDateString()}
					isReadOnly
				/>
				<Input
					type='text'
					label='Nationality'
					value={props.nationality}
					isReadOnly
				/>
			</div>
		</Card>
	)
}
