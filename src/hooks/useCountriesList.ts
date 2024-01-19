import { useEffect, useState } from 'react'
import { nationalityService } from 'services/nationality.service'
import { INationality } from 'interfaces/nationality.interface'
import { toast } from 'sonner'
import { DEFAULT_ERROR_MESSAGE } from 'ssot/constants'

interface IUseContryListReturn {
	items: INationality[] | []
	hasMore: boolean
	isLoading: boolean
	onLoadMore: () => void
}

export function useCountryList({ fetchDelay = 0 }): IUseContryListReturn {
	const [items, setItems] = useState<INationality[] | []>([])
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [offset, setOffset] = useState<number>(0)
	const limit = 10

	const loadCountry = async (currentOffset: number) => {
		const controller = new AbortController()
		const { signal } = controller

		try {
			setIsLoading(true)

			if (offset > 0) {
				// Delay to simulate network latency
				await new Promise(resolve => setTimeout(resolve, fetchDelay))
			}

			nationalityService
				.getNationalitiesWithPagination(
					{
						offset: currentOffset,
						limit,
					},
					signal
				)
				.then(res => {
					setHasMore(res.nextPage !== null)
					setItems(prevItems => [...prevItems, ...res.docs])
				})
				.catch(() => toast.error(DEFAULT_ERROR_MESSAGE))
		} catch (err) {
			toast.error(DEFAULT_ERROR_MESSAGE)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		loadCountry(offset)
	}, [])

	const onLoadMore = () => {
		const newOffset = offset + limit

		setOffset(newOffset)
		loadCountry(newOffset)
	}

	return {
		items,
		hasMore,
		isLoading,
		onLoadMore,
	}
}
