'use client'

import { Input } from '@nextui-org/react'
import { SearchIcon } from './icons/SearchIcon'

export function SearchBox() {
	return (
		<Input
			isClearable
			radius='md'
			placeholder='Enter the name of a classroom'
			startContent={
				<SearchIcon className='stroke-light-black' height={16} width={16} />
			}
			className='max-w-[400px]'
			size='sm'
		/>
	)
}
