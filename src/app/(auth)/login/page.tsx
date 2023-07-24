'use client'

import Link from 'next/link'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

const inputs = [
	{
		id: 'username',
		title: 'Username',
		type: 'text',
		required: true,
	},
	{
		id: 'password',
		title: 'Password',
		type: 'password',
		required: true,
	},
]

interface ILoginForm {
	username: string
	password: string
}

export default function LoginPage() {
	const [formValues, setValues] = useState<ILoginForm | {}>({
		username: '',
		email: '',
		password: '',
	})

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		console.log(formValues)

		setValues({
			username: '',
			email: '',
			password: '',
		})
	}

	return (
		<>
			<div className='flex h-screen bg-gray-100'>
				<div className='m-auto p-10 bg-white shadow-md rounded-md'>
					<h1 className='text-3xl font-bold mb-4 text-gray-700'>Login</h1>
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
										type={input.type}
										name={input.id}
										value={formValues[input.id as keyof typeof formValues]}
										id={input.id}
										className='w-[400px] border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 text-gray-700'
										required={input.required}
									/>
								</div>
							)
						})}
						<button
							type='submit'
							className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
						>
							Log in
						</button>
					</form>
					<Link href='/register'>Rgister</Link>
				</div>
			</div>
		</>
	)
}
