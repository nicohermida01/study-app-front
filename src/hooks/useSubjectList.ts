import { ISubject } from 'interfaces/subject.interface'
import { useEffect, useState } from 'react'
import { subjectService } from 'services/subject.service'
import { toast } from 'sonner'
import { DEFAULT_ERROR_MESSAGE } from 'ssot/constants'

type Items = ISubject[] | []

interface IUseSubjectListOutput {
	items: Items
	hasMore: boolean
	isLoading: boolean
	onLoadMore: () => void
}

export function useSubjectList({ fetchDelay = 0 }): IUseSubjectListOutput {
	const [items, setItems] = useState<Items>([])
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [offset, setOffset] = useState<number>(0)
	const limit = 10

	const loadSubject = async (currentOffset: number) => {
		const controller = new AbortController()
		const { signal } = controller

		try {
			setIsLoading(true)

			if (offset > 0) {
				await new Promise(resolve => setTimeout(resolve, fetchDelay))
			}

			subjectService
				.getAllWithPagination(
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
		} catch (error) {
			toast.error(DEFAULT_ERROR_MESSAGE)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		loadSubject(offset)
	}, [])

	const onLoadMore = () => {
		const newOffset = offset + limit

		setOffset(newOffset)
		loadSubject(newOffset)
	}

	return {
		items,
		hasMore,
		isLoading,
		onLoadMore,
	}
}
