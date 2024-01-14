'use client'

import { Chip } from '@nextui-org/react'
import { Card } from './Card'

type Props = {
	name: string
	description: string
	area: string
}

export function ClassroomCard(props: Props) {
	return (
		<Card containerStyles='w-max h-max'>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<Chip variant='flat'>{props.area}</Chip>
		</Card>
	)
}
