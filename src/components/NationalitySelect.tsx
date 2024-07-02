'use client'

import { Select, SelectItem, SlotsToClasses } from '@nextui-org/react'
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll'
import { useCountryList } from 'hooks/useCountriesList'
import { ChangeEventHandler, useState } from 'react'

type NationalitySelectProps = {
	handleChange: ChangeEventHandler<HTMLSelectElement>
	isRequired?: boolean
	selectedKeys?: 'all' | Iterable<any> | undefined
	variant?: 'underlined' | 'flat' | 'faded' | 'bordered' | undefined
	styles?:
		| SlotsToClasses<
				| 'description'
				| 'errorMessage'
				| 'label'
				| 'base'
				| 'value'
				| 'mainWrapper'
				| 'trigger'
				| 'innerWrapper'
				| 'selectorIcon'
				| 'spinner'
				| 'listboxWrapper'
				| 'listbox'
				| 'popoverContent'
				| 'helperWrapper'
		  >
		| undefined
}

export function NationalitySelect({
	handleChange,
	variant,
	styles,
	selectedKeys,
	isRequired,
}: NationalitySelectProps) {
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
			variant={variant}
			scrollRef={scrollRef}
			selectionMode='single'
			onOpenChange={setIsOpenSelect}
			isLoading={countryList.isLoading}
			items={countryList.items}
			isRequired={isRequired}
			onChange={handleChange}
			classNames={styles}
			selectedKeys={selectedKeys}
		>
			{item => (
				<SelectItem key={item.id} className='capitalize' value={item.id}>
					{item.name}
				</SelectItem>
			)}
		</Select>
	)
}
