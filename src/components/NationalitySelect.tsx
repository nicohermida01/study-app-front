'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll'
import { useCountryList } from 'hooks/useCountriesList'
import { ChangeEventHandler, useState } from 'react'

type Props = {
	handleChange: ChangeEventHandler<HTMLSelectElement>
}

export function NationalitySelect(props: Props) {
	const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
	const countryList = useCountryList({ fetchDelay: 1500 })

	const [, scrollRef] = useInfiniteScroll({
		hasMore: countryList.hasMore,
		isEnabled: isOpenSelect,
		shouldUseLoader: false,
		onLoadMore: countryList.onLoadMore,
	})

	return (
		<Select
			label='Nationality'
			variant='underlined'
			scrollRef={scrollRef}
			selectionMode='single'
			onOpenChange={setIsOpenSelect}
			isLoading={countryList.isLoading}
			items={countryList.items}
			isRequired
			onChange={props.handleChange}
			classNames={{
				trigger: ['rounded-none'],
			}}
		>
			{item => (
				<SelectItem key={item.id} className='capitalize' value={item.id}>
					{item.name}
				</SelectItem>
			)}
		</Select>
	)
}
