'use client'

import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { StudyLogo } from 'components/icons/StudyLogo'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { EyeIcon } from 'components/icons/EyeIcon'
import { GoogleAuth } from 'components/GoogleAuth'
import { useError } from 'hooks/useError'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

interface ILoginForm {
	username: string
	password: string
}

const defaultValues: ILoginForm = {
	username: '',
	password: '',
}

export function LoginForm() {
	const [formValues, setValues] = useState<ILoginForm>(defaultValues)
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const router = useRouter()
	const { handleError } = useError()

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		signIn('credentials', {
			...formValues,
			redirect: false,
		}).then(res => {
			if (res?.status === 200) {
				toast.success('Logged successful')
				router.push('/dashboard')
			}

			if (res?.status === 401) {
				toast.error('Invalid username or password')
			}
		})

		setValues(defaultValues)
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
					value={formValues.username}
					type='text'
					name='username'
					isRequired
					variant='underlined'
					label='Username'
				/>

				<Input
					onChange={handleChange}
					value={formValues.password}
					type={isVisible ? 'text' : 'password'}
					name='password'
					isRequired
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
