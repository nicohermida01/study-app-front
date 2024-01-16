'use client'

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { OptionsIcon } from './icons/OptionsIcon'
import { toast } from 'sonner'

// navigator.clipboard.writeText(this.state.textToCopy)}

type Props = {
	code: string
}

export function OptionsDropdown(props: Props) {
	const handleCopyCode = () => {
		navigator.clipboard.writeText(props.code)
		toast.info('Classroom code copied to clipboard')
	}

	return (
		<Dropdown
			placement='bottom-end'
			showArrow
			classNames={{ content: ['rounded-md'] }}
		>
			<DropdownTrigger>
				<Button
					isIconOnly
					aria-label='Toggle menu options'
					className='rounded-full absolute top-[16px] right-[16px] '
					variant='light'
					size='sm'
				>
					<OptionsIcon width={16} className='fill-slate-600' />
				</Button>
			</DropdownTrigger>

			<DropdownMenu aria-label='Classroom options' variant='flat'>
				<DropdownItem key='code' onPress={handleCopyCode}>
					Copy classroom code
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
