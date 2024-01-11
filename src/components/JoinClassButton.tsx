'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { JoinClassIcon } from './icons/JoinClassIcon'

export function JoinClassButton() {
	return (
		<Tooltip content='Join a class' delay={0} closeDelay={0}>
			<Button
				size='md'
				isIconOnly
				className='text-light-black'
				radius='full'
				aria-label='Join a class'
				variant='flat'
			>
				<JoinClassIcon width={22} height={22} className='stroke-light-black' />
			</Button>
		</Tooltip>
	)
}
