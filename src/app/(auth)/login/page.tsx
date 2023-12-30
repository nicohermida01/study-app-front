'use client'

import Link from 'next/link'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Button, Divider, Input } from '@nextui-org/react'
import { StudyLogo } from 'components/icons/StudyLogo'
import { GoogleIcon } from 'components/icons/GoogleIcon'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { EyeIcon } from 'components/icons/EyeIcon'

interface ILoginForm {
	email: string
	password: string
}

export default function LoginPage() {
	const [formValues, setValues] = useState<ILoginForm>({
		email: '',
		password: '',
	})
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		console.log(formValues)

		setValues({
			email: '',
			password: '',
		})
	}

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<div className='w-[400px] flex flex-col items-center'>
			<StudyLogo width={250} height={70} />

			<form
				onSubmit={handleSubmit}
				className='w-full flex flex-col gap-[16px] mt-[32px]'
			>
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

			<div className='w-full flex justify-between items-center mt-[32px] mb-[16px]'>
				<div className='h-[3px] bg-slate-200 w-[45%]'></div>
				<span className='font-bold'>o</span>
				<div className='h-[3px] bg-slate-200 w-[45%]'></div>
			</div>

			<Button
				isIconOnly
				aria-label='Login with Google'
				variant='bordered'
				className='rounded-full'
			>
				<GoogleIcon width='16px' height='16px' />
			</Button>
		</div>
	)
}
