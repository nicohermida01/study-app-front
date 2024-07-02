'use client'

import {
	ChangeEventHandler,
	FormEventHandler,
	useEffect,
	useState,
} from 'react'
import { Avatar, Input } from '@nextui-org/react'
import { toast } from 'sonner'

import { IProfileData } from 'interfaces/profileData.interface'
import { UpdateUserDTO } from 'interfaces/user.interface'
import { NationalitySelect } from 'components/NationalitySelect'
import { userService } from 'services/user.service'
import { DEFAULT_ERROR_MESSAGE } from 'ssot/constants'
import { useAccessToken } from 'hooks/useAccessToken'
import Image from 'next/image'

const avatars: Avatars[] = ['1', '2', '3', '4', '5', '6', '7']

type Avatars = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type EditProfileForm = Omit<IProfileData, 'isProfessor' | 'nationality'> & {
	nationality: string
}

type EditProfileFormProps = {
	formId: string
	data: EditProfileForm
	onCloseFn: () => void
}

const initValues: EditProfileForm = {
	dateOfBirth: '',
	email: '',
	firstName: '',
	lastName: '',
	nationality: '',
	username: '',
}

export function EditProfileForm({
	formId,
	data,
	onCloseFn,
}: EditProfileFormProps) {
	const [formValues, setFormValues] = useState<EditProfileForm>(initValues)
	const [updateValues, setUpdateValues] = useState<EditProfileForm>(initValues)
	const [changedValues, setChangedValues] = useState<boolean>(false)
	const [selectedAvatar, setSelectedAvatar] = useState<Avatars>('6')

	const accessToken = useAccessToken()

	useEffect(() => {
		setFormValues(data)
		setUpdateValues(initValues)
		setChangedValues(false)
	}, [])

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
		setUpdateValues({ ...updateValues, [e.target.name]: e.target.value })
		setChangedValues(true)
	}

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
		setFormValues({ ...formValues, nationality: e.target.value })
		setUpdateValues({ ...updateValues, nationality: e.target.value })
		setChangedValues(true)
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (!changedValues) return

		const dto: UpdateUserDTO = {
			...(updateValues.firstName && { firstName: updateValues.firstName }),
			...(updateValues.lastName && { lastName: updateValues.lastName }),
			...(updateValues.email && { email: updateValues.email }),
			...(updateValues.username && { username: updateValues.username }),
			...(updateValues.nationality && {
				nationality: updateValues.nationality,
			}),
			...(updateValues.dateOfBirth && {
				dateOfBirth: new Date(updateValues.dateOfBirth),
			}),
		}

		userService
			.updateUserData(dto, accessToken)
			.then(res => {
				toast.success(res.message)
				onCloseFn()
			})
			.catch(error => {
				toast.error(DEFAULT_ERROR_MESSAGE)
			})
	}

	const handleClickAvatar = (elem: Avatars) => {
		setSelectedAvatar(elem)
	}

	return (
		<form id={formId} className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<div className='flex gap-4'>
				<div className='bg-gray-100 p-6 w-max hover:bg-gray-200 transition-all rounded-xl'>
					<Avatar
						src={`/avatar-${selectedAvatar}.jpg`}
						className='w-28 h-28 text-large'
					/>
				</div>

				<div className='flex h-max w-max gap-2'>
					{avatars.map((elem, i) => (
						<Image
							src={`/avatar-${elem}.jpg`}
							key={i}
							width={50}
							height={50}
							alt={`avatar-${elem}`}
							className={`${
								elem === selectedAvatar ? 'outline-primary' : ''
							} outline outline-4 hover:outline-gray-500 transition-all border border-white`}
							onClick={() => handleClickAvatar(elem)}
						/>
					))}
				</div>
			</div>

			<fieldset className='flex gap-4'>
				<Input
					label='First name'
					name='firstName'
					value={formValues.firstName}
					onChange={handleChange}
				/>
				<Input
					label='Last name'
					name='lastName'
					value={formValues.lastName}
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className='flex gap-4'>
				<Input
					label='Username'
					name='username'
					value={formValues.username}
					onChange={handleChange}
				/>
				<Input
					type='email'
					label='Email'
					name='email'
					value={formValues.email}
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className='flex gap-4'>
				<Input
					label='Birth date'
					value={formValues.dateOfBirth}
					onChange={handleChange}
					name='dateOfBirth'
					type='date'
				/>

				<NationalitySelect
					handleChange={handleSelectChange}
					variant='flat'
					selectedKeys={[`${formValues.nationality}`]}
				/>
			</fieldset>
		</form>
	)
}
