'use client'

import Link from 'next/link'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { userService } from 'services/user.service'

const inputs = [
	{
		id: 'username',
		title: 'Username',
		type: 'text',
		required: true,
	},
	{
		id: 'email',
		title: 'Email',
		type: 'email',
		required: true,
	},
	{
		id: 'password',
		title: 'Password',
		type: 'password',
		required: true,
	},
	{
		id: 'firstName',
		title: 'First Name',
		type: 'text',
		required: false,
	},
	{
		id: 'lastName',
		title: 'Last Name',
		type: 'text',
		required: false,
	},
]

interface IRegisterForm {
	username: string
	password: string
	email: string
	firstName: string
	lastName: string
}

export default function RegisterPage() {
	const [formValues, setValues] = useState<IRegisterForm | {}>({
		username: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	})

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		userService
			.create(formValues)
			.then(res => {
				alert('USER CREATED SUCCESSFULLY')
				console.log(res)
			})
			.catch(err => console.error(err))

		setValues({
			username: '',
			email: '',
			password: '',
			firstName: '',
			lastName: '',
		})
	}

	return (
		<>
			<div className='flex h-screen bg-gray-100'>
				<div className='m-auto p-8 bg-white shadow-md rounded-md'>
					<h1 className='text-3xl font-bold mb-4 text-gray-700'>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						{inputs.map((input, index) => {
							return (
								<div className='mb-4' key={index}>
									<label
										htmlFor={input.id}
										className='block text-gray-700 font-bold mb-2'
									>
										{input.title}
									</label>
									<input
										onChange={handleChange}
										value={formValues[input.id as keyof typeof formValues]}
										type={input.type}
										id={input.id}
										className='w-[500px] border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 text-gray-700'
										required={input.required}
										name={input.id}
									/>
								</div>
							)
						})}
						<button
							type='submit'
							className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
						>
							Sign up
						</button>
					</form>
					<Link href='/login'>Login</Link>
				</div>
			</div>
		</>
	)
}
