'use client'

import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react'
import { JoinClassIcon } from './icons/JoinClassIcon'
import { FormEventHandler, useState } from 'react'
import { toast } from 'sonner'
import { userService } from 'services/user.service'
import { useAccessToken } from 'hooks/useAccessToken'
import { DEFAULT_ERROR_MESSAGE } from 'ssot/constants'
import { errorMessages } from 'ssot/errorMessages'

export async function JoinClassModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [classroomCode, setClassroomCode] = useState<string>('')

	const accessToken = useAccessToken()

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		userService
			.createCourse(classroomCode, accessToken)
			.then(() => {
				toast.success('Request sent successfully')
			})
			.catch(err => {
				toast.error(
					errorMessages[
						(err.message
							? err.message
							: DEFAULT_ERROR_MESSAGE) as keyof typeof errorMessages
					]
				)
			})
	}

	const handleOnClose = () => {
		setClassroomCode('')
	}

	return (
		<>
			<Tooltip content='Join a classroom' delay={0} closeDelay={0}>
				<Button
					size='md'
					isIconOnly
					className='text-light-black'
					radius='full'
					aria-label='Join a classroom'
					variant='flat'
					onPress={onOpen}
				>
					<JoinClassIcon
						width={22}
						height={22}
						className='stroke-light-black'
					/>
				</Button>
			</Tooltip>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onClose={handleOnClose}
			>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Join a Classroom</ModalHeader>

							<ModalBody className='pb-[16px]'>
								<p>Enter the classroom code to request joining</p>

								<form
									onSubmit={handleSubmit}
									className='flex flex-col gap-[16px] items-end'
								>
									<Input
										value={classroomCode}
										label='Classroom code'
										onChange={({ target }) => setClassroomCode(target.value)}
										size='sm'
										isRequired
									/>

									<div className='flex items-center gap-[16px]'>
										<Button
											variant='flat'
											className='font-bold text-light-black rounded-[4px]'
											onPress={onClose}
										>
											Cancel
										</Button>

										<Button
											variant='solid'
											color='primary'
											type='submit'
											className='font-bold text-white rounded-[4px]'
										>
											Join
										</Button>
									</div>
								</form>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
