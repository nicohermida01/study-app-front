'use client'

import { Button, Input, Select } from '@nextui-org/react'
import { useAccessToken } from 'hooks/useAccessToken'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { professorService } from 'services/professor.service'
import { toast } from 'sonner'
import { SubjectSelect } from './SubjectSelect'
import { ICreateProfessorDto } from 'interfaces/professor.interface'

type Props = {
	onClose: () => void
}

export function CreateProfessorForm(props: Props) {
	const accessToken = useAccessToken()

	const [subjects, setSubjects] = useState<string[]>([])
	const [info, setInfo] = useState<string>('')

	const handleSelectionChange: ChangeEventHandler<HTMLSelectElement> = e => {
		setSubjects(e.target.value.split(','))
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		const dto: ICreateProfessorDto = {
			educationInfo: info,
			subjectIds: subjects,
		}

		professorService
			.createOne(dto, accessToken)
			.then(() => {
				toast.success('Now you are a professor')
				props.onClose()
			})
			.catch()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-[16px] items-end'
		>
			<SubjectSelect setValues={handleSelectionChange} values={subjects} />

			<Input
				onChange={({ target }) => setInfo(target.value)}
				value={info}
				type='text'
				isRequired
				variant='flat'
				label='Information about your education'
				size='sm'
			/>

			<div className='flex gap-[16px]'>
				<Button
					variant='flat'
					className='font-bold text-light-black rounded-[4px]'
					onPress={props.onClose}
				>
					Cancel
				</Button>

				<Button
					variant='solid'
					color='primary'
					type='submit'
					className='font-bold text-white rounded-[4px]'
				>
					Send
				</Button>
			</div>
		</form>
	)
}
