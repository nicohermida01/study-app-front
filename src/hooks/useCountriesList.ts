import { useEffect, useState } from 'react'
import { nationalitiesService } from 'services/nationalities.service'
import { useError } from './useError'

interface IUseContryListReturn {
	items: string[] | []
	hasMore: boolean
	isLoading: boolean
	onLoadMore: () => void
}

export function useCountryList({ fetchDelay = 0 }): IUseContryListReturn {
	const [items, setItems] = useState<string[] | []>([])
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [offset, setOffset] = useState<number>(0)
	const limit = 10

	const { handleError } = useError()

	const loadCountry = async (currentOffset: number) => {
		const controller = new AbortController()
		const { signal } = controller

		try {
			setIsLoading(true)

			if (offset > 0) {
				// Delay to simulate network latency
				await new Promise(resolve => setTimeout(resolve, fetchDelay))
			}

			nationalitiesService
				.getNationalitiesWithPagination()
				.then(res => {
					setHasMore(res.next !== null)
					setItems(prevItems => [...prevItems, ...res.results])
				})
				.catch(handleError)
		} catch (err) {
			handleError(err)
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
