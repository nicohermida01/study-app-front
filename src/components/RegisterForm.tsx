'use client'

import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { GoogleAuth } from 'components/GoogleAuth'
import { EyeIcon } from 'components/icons/EyeIcon'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { StudyLogo } from 'components/icons/StudyLogo'
import { useCountryList } from 'hooks/useCountriesList'
import { useError } from 'hooks/useError'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { authService } from 'services/auth.service'
import { toast } from 'sonner'
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll'

interface IRegisterForm {
	password: string
	email: string
	firstName: string
	lastName: string
	username: string
}

const defaultValues: IRegisterForm = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
}

export function RegisterForm() {
	const [formValues, setValues] = useState<IRegisterForm>(defaultValues)
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
	const countryList = useCountryList({ fetchDelay: 1500 })

	const [, scrollRef] = useInfiniteScroll({
		hasMore: countryList.hasMore,
		isEnabled: isOpenSelect,
		shouldUseLoader: false,
		onLoadMore: countryList.onLoadMore,
	})

	const { handleError } = useError()

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		authService
			.registerUser(formValues)
			.then(res => {
				toast.success(res.message)
				setValues(defaultValues)
			})
			.catch(handleError)
	}

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<div className='w-[400px] flex flex-col items-center'>
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
					/>

					<Input
						onChange={handleChange}
						value={formValues.lastName}
						type='text'
						name='lastName'
						isRequired
						variant='underlined'
						label='Last name'
					/>
				</fieldset>

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
					value={formValues.email}
					type='email'
					name='email'
					isRequired
					variant='underlined'
					label='Email'
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

				<Select
					label='Nationality'
					variant='underlined'
					scrollRef={scrollRef}
					selectionMode='single'
					onOpenChange={setIsOpenSelect}
					isLoading={countryList.isLoading}
					items={countryList.items}
				>
					{item => (
						<SelectItem key={item} className='capitalize'>
							{item}
						</SelectItem>
					)}
				</Select>

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
