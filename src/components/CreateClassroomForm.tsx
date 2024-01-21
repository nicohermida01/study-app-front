'use client'

import { Button, Chip, Input, Snippet } from '@nextui-org/react'
import { useAccessToken } from 'hooks/useAccessToken'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { classroomService } from 'services/classroom.service'
import { useRouter } from 'next/navigation'
import { SubjectSelectForClass } from './SubjectSelect'
import { ICreateClassroomDto } from 'interfaces/classroom.interface'
import { toast } from 'sonner'
import { errorMessages } from 'ssot/errorMessages'

interface ICreateClassroomForm {
	name: string
	description: string
	subject: string
}

const defaultValues: ICreateClassroomForm = {
	description: '',
	name: '',
	subject: '',
}

type Props = {
	onClose: () => void
}

export function CreateClassroomForm(props: Props) {
	const router = useRouter()

	const accessToken = useAccessToken()

	const [classroomCode, setClassroomCode] = useState<string>('')
	const [formValues, setFormValues] =
		useState<ICreateClassroomForm>(defaultValues)

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
		setFormValues({ ...formValues, subject: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		const dto: ICreateClassroomDto = {
			name: formValues.name,
			description: formValues.description,
			subject: formValues.subject,
		}

		classroomService
			.createOne(dto, accessToken)
			.then(res => {
				setClassroomCode(res)
				toast.success('Classroom successfully created!')
			})
			.catch(err => toast.error(errorMessages.DEFAULT_ERROR_MESSAGE))
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-[16px]'>
			{classroomCode ? (
				<>
					<Chip color='success' variant='flat'>
						Classroom created successfully!
					</Chip>
					<p>Copy de following code to share the classroom:</p>
					<Snippet size='sm'>{classroomCode}</Snippet>
				</>
			) : (
				<>
					<p>Complete the following information to create a classroom:</p>

					<Input
						onChange={handleChange}
						value={formValues.name}
						type='text'
						name='name'
						isRequired
						variant='flat'
						label='Name'
						size='sm'
					/>

					<Input
						onChange={handleChange}
						value={formValues.description}
						type='text'
						name='description'
						isRequired
						variant='flat'
						label='Description'
						size='sm'
					/>

					<SubjectSelectForClass
						accessToken={accessToken}
						onChange={handleSelectChange}
					/>

					<div className='flex items-center justify-end gap-[16px]'>
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
				</>
			)}
		</form>
	)
}
