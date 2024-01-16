'use client'

import { Card } from './Card'
import { OptionsDropdown } from './OptionsDropdown'

type Props = {
	name: string
	description: string
	code: string
}

export function ClassroomAsideCard(props: Props) {
	return (
		<Card containerStyles='h-full p-[32px] relative'>
			<OptionsDropdown code={props.code} />
			<h2 className='font-bold text-2xl'>{props.name}</h2>

			<p>{props.description}</p>
		</Card>
	)
}
