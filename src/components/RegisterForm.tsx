'use client'

import { Button, Input } from '@nextui-org/react'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { toast } from 'sonner'

import { GoogleAuth } from 'components/GoogleAuth'
import { EyeIcon } from 'components/icons/EyeIcon'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { StudyLogo } from 'components/icons/StudyLogo'
import { NationalitySelect } from 'components/NationalitySelect'

import { authService } from 'services/auth.service'
import { IRegisterAuthDto } from 'interfaces/auth.interface'
import { DEFAULT_ERROR_MESSAGE } from 'ssot/constants'

interface IRegisterForm {
	password: string
	email: string
	firstName: string
	lastName: string
	username: string
	nationality: string
	dateOfBirth: string
}

const defaultValues: IRegisterForm = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
	nationality: '',
	dateOfBirth: '',
}

export function RegisterForm() {
	const [formValues, setValues] = useState<IRegisterForm>(defaultValues)
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
		setValues({ ...formValues, nationality: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		const dto: IRegisterAuthDto = {
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			username: formValues.username,
			email: formValues.email,
			password: formValues.password,
			dateOfBirth: new Date(formValues.dateOfBirth),
			nationality: formValues.nationality,
		}

		authService
			.registerUser(dto)
			.then(res => {
				toast.success(res.message)
				setValues(defaultValues)
			})
			.catch(() => {
				toast.error(DEFAULT_ERROR_MESSAGE)
			})
	}

	const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)

	return (
		<div className='w-[600px] flex flex-col items-center'>
			<StudyLogo width={250} height={70} />

			<h2 className='text-primary text-2xl font-bold my-[32px]'>
				Create Account
			</h2>

			<form onSubmit={handleSubmit} className='w-full flex flex-col gap-[16px]'>
				<fieldset className='flex gap-[16px]'>
					<Input
						onChange={handleChange}
						value={formValues.firstName}
						type='text'
						name='firstName'
						isRequired
						variant='underlined'
						label='First name'
						classNames={{
							inputWrapper: ['rounded-none'],
						}}
					/>

					<Input
						onChange={handleChange}
						value={formValues.lastName}
						type='text'
						name='lastName'
						isRequired
						variant='underlined'
						label='Last name'
						classNames={{
							inputWrapper: ['rounded-none'],
						}}
					/>
				</fieldset>

				<fieldset className='flex gap-[16px]'>
					<Input
						onChange={handleChange}
						value={formValues.username}
						type='text'
						name='username'
						isRequired
						variant='underlined'
						label='Username'
						classNames={{
							inputWrapper: ['rounded-none'],
						}}
					/>

					<Input
						onChange={handleChange}
						value={formValues.email}
						type='email'
						name='email'
						isRequired
						variant='underlined'
						label='Email'
						classNames={{
							inputWrapper: ['rounded-none'],
						}}
					/>
				</fieldset>

				<fieldset className='flex gap-[16px]'>
					<Input
						onChange={handleChange}
						value={formValues.password}
						type={passwordVisible ? 'text' : 'password'}
						name='password'
						isRequired
						variant='underlined'
						label='Password'
						classNames={{
							inputWrapper: ['rounded-none'],
						}}
						endContent={
							<button type='button' onClick={togglePasswordVisibility}>
								{passwordVisible ? (
									<EyeSlashIcon
										height='16'
										width='16'
										className='pointer-events-none stroke-slate-400'
									/>
								) : (
									<EyeIcon
										height='16'
										width='16'
										className='pointer-events-none stroke-slate-400'
									/>
								)}
							</button>
						}
					/>

					<NationalitySelect
						handleChange={handleSelectChange}
						variant='underlined'
						styles={{
							trigger: ['rounded-none'],
						}}
						isRequired
					/>
				</fieldset>

				<Input
					onChange={handleChange}
					value={formValues.dateOfBirth}
					type='date'
					name='dateOfBirth'
					isRequired
					variant='underlined'
					label='Date of birth'
					placeholder='a'
					classNames={{
						inputWrapper: ['rounded-none'],
					}}
				/>

				<Button
					variant='solid'
					color='primary'
					type='submit'
					className='font-bold text-white rounded-[4px]'
				>
					Sign Up
				</Button>
			</form>

			<GoogleAuth />
		</div>
	)
}
