'use client'

import { Button, Input } from '@nextui-org/react'
import { useAccessToken } from 'hooks/useAccessToken'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { professorService } from 'services/professor.service'
import { toast } from 'sonner'

interface ICreateProfessorForm {
	area: string
	education: string
}

const defaultValues: ICreateProfessorForm = {
	area: '',
	education: '',
}

type Props = {
	onClose: () => void
}

export function CreateProfessorForm(props: Props) {
	const accessToken = useAccessToken()

	const [formValues, setValues] = useState<ICreateProfessorForm>(defaultValues)

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		professorService
			.createOne(formValues, accessToken)
			.then(() => {
				toast.success('Now you are a professor')
				props.onClose()
			})
			.catch()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='flex items-center gap-[16px]'>
				<Input
					onChange={handleChange}
					value={formValues.area}
					type='text'
					name='area'
					isRequired
					variant='flat'
					label='Area'
					size='sm'
				/>

				<Input
					onChange={handleChange}
					value={formValues.education}
					type='text'
					name='education'
					isRequired
					variant='flat'
					label='Education'
					size='sm'
				/>
			</div>

			<div className='w-max float-right mt-[16px] flex items-center gap-[16px]'>
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
