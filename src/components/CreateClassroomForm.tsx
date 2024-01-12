'use client'

import { Button, Chip, Input, Snippet } from '@nextui-org/react'
import { useAccessToken } from 'hooks/useAccessToken'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { classroomService } from 'services/classroom.service'

interface ICreateClassroomForm {
	name: string
	description: string
}

const defaultValues: ICreateClassroomForm = {
	description: '',
	name: '',
}

type Props = {
	onClose: () => void
}

export function CreateClassroomForm(props: Props) {
	const accessToken = useAccessToken()

	const [classroomCode, setClassroomCode] = useState<string>('')
	const [formValues, setValues] = useState<ICreateClassroomForm>(defaultValues)

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		classroomService
			.create(formValues, accessToken)
			.then(res => {
				setClassroomCode(res)
			})
			.catch()
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
