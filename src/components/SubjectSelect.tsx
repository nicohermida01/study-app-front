'use client'

import { Select, SelectItem, Selection } from '@nextui-org/react'
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll'
import { useSubjectList } from 'hooks/useSubjectList'
import { ISubject } from 'interfaces/subject.interface'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { professorService } from 'services/professor.service'
import { toast } from 'sonner'
import { errorMessages } from 'ssot/errorMessages'

type Props = {
	values: any
	setValues: ChangeEventHandler<HTMLSelectElement>
}

export function SubjectSelect(props: Props) {
	const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
	const subjectList = useSubjectList({ fetchDelay: 1500 })

	const [, scrollRef] = useInfiniteScroll({
		hasMore: subjectList.hasMore,
		isEnabled: isOpenSelect,
		shouldUseLoader: false,
		onLoadMore: subjectList.onLoadMore,
	})

	return (
		<Select
			label='Subject'
			isRequired
			selectionMode='multiple'
			scrollRef={scrollRef}
			onOpenChange={setIsOpenSelect}
			isLoading={subjectList.isLoading}
			items={subjectList.items}
			selectedKeys={props.values}
			onChange={props.setValues}
			size='sm'
			variant='flat'
		>
			{item => (
				<SelectItem key={item.id} className='capitalize' value={item.id}>
					{item.name}
				</SelectItem>
			)}
		</Select>
	)
}

type PropsForClass = {
	onChange: ChangeEventHandler<HTMLSelectElement>
	accessToken: string
}

export function SubjectSelectForClass(props: PropsForClass) {
	const [subjects, setSubjects] = useState<ISubject[]>([])

	useEffect(() => {
		professorService
			.getSubjects(props.accessToken)
			.then(res => {
				setSubjects(res)
			})
			.catch(err => toast.error(errorMessages.DEFAULT_ERROR_MESSAGE))
	}, [])

	return (
		<Select
			items={subjects}
			label='Subject'
			size='sm'
			isRequired
			onChange={props.onChange}
		>
			{item => (
				<SelectItem key={item.id} value={item.id}>
					{item.name}
				</SelectItem>
			)}
		</Select>
	)
}
