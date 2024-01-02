'use client'

import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { authService } from 'services/auth.service'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { StudyLogo } from 'components/icons/StudyLogo'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { EyeIcon } from 'components/icons/EyeIcon'
import { GoogleAuth } from 'components/GoogleAuth'

interface ILoginForm {
	email: string
	password: string
}

const defaultValues: ILoginForm = {
	email: '',
	password: '',
}

export function LoginForm() {
	const [formValues, setValues] = useState<ILoginForm>(defaultValues)
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const router = useRouter()

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		authService
			.loginUser(formValues)
			.then(res => {
				// toast
				router.push('/dashboard')
			})
			.catch(err => console.error(err))

		setValues({
			email: '',
			password: '',
		})
	}

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<div className='w-[400px] flex flex-col items-center'>
			<StudyLogo width={250} height={70} />

			<h2 className='text-primary text-2xl font-bold my-[32px]'>
				Welcome Back!
			</h2>

			<form onSubmit={handleSubmit} className='w-full flex flex-col gap-[16px]'>
				<Input
					onChange={handleChange}
					value={formValues.email}
					type='email'
					name='email'
					required
					variant='underlined'
					label='Email'
				/>

				<Input
					onChange={handleChange}
					value={formValues.password}
					type={isVisible ? 'text' : 'password'}
					name='password'
					required
					variant='underlined'
					label='Password'
					endContent={
						<button type='button' onClick={toggleVisibility}>
							{isVisible ? (
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

				<Button
					variant='solid'
					color='primary'
					type='submit'
					className='font-bold text-white rounded-[4px]'
				>
					Log In
				</Button>
			</form>

			<span className='underline text-xs mt-[8px]'>Forgot your password?</span>

			<GoogleAuth />
		</div>
	)
}