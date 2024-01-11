'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { NewIcon } from './icons/NewIcon'

export function NewClassButton() {
	return (
		<Tooltip content='Create new class' delay={0} closeDelay={0}>
			<Button
				size='md'
				isIconOnly
				className='text-light-black'
				radius='full'
				aria-label='Create new class'
				variant='flat'
			>
				<NewIcon width={22} height={22} className='stroke-light-black' />
			</Button>
		</Tooltip>
	)
}
