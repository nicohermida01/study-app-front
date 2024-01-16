'use client'

import { Avatar, AvatarGroup, Chip, Image } from '@nextui-org/react'
import { Card } from './Card'
import { classroomImages } from './ClassroomImages'
import { UsersIcon } from './icons/UsersIcon'
import Link from 'next/link'

type Props = {
	name: string
	description: string
	area: string
	teacher: string
	id: string
	membersCount: number
}

export function ClassroomCard(props: Props) {
	return (
		<Link href={`/dashboard/classrooms/${props.id}`} className='h-max'>
			<Card containerStyles='w-[250px] h-[340px] p-[20px] break-words text-pretty flex flex-col justify-between hover:shadow-xl hover:shadow-slate-300 cursor-pointer transition-all'>
				<div className='flex flex-col gap-[8px]'>
					{classroomImages.MATH}
					<div>
						<h3 className='font-bold text-lg'>{props.name}</h3>
						<p className='text-gray-500 max-h-32 overflow-auto'>
							{props.description}
						</p>
					</div>
				</div>

				<div className='flex flex-col gap-[16px]'>
					<div className='flex flex-col gap-[8px]'>
						<Chip
							variant='flat'
							className='text-xs bg-blue-100 text-blue-600'
							size='sm'
						>
							{props.area}
						</Chip>
						<Chip
							className='text-xs bg-gray-100 text-gray-600'
							size='sm'
							variant='flat'
						>
							{props.teacher}
						</Chip>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-[4px]'>
							<UsersIcon width={20} height={20} />
							<span className='text-xs text-gray-600'>
								{props.membersCount}
							</span>
						</div>

						{/* <AvatarGroup
							size='sm'
							isBordered
							max={3}
							total={10}
							renderCount={count => (
								<p className='text-xs  ms-2 text-gray-600'>+{count}</p>
							)}
						>
							<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
							<Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
							<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
							<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
							<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
							<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
						</AvatarGroup> */}
					</div>
				</div>
			</Card>
		</Link>
	)
}
