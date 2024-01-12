'use client'

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react'
import { NewIcon } from './icons/NewIcon'
import { CreateTeacherForm } from './CreateTeacherForm'
import { CreateClassroomForm } from './CreateClassroomForm'

const AllowedContent = () => {
	return (
		<ModalContent>
			{onClose => (
				<>
					<ModalHeader className=''>Create a new classroom</ModalHeader>
					<ModalBody className='pb-[16px]'>
						<CreateClassroomForm onClose={onClose} />
					</ModalBody>
				</>
			)}
		</ModalContent>
	)
}

const NotAllowdContent = () => {
	return (
		<ModalContent>
			{onClose => (
				<>
					<ModalHeader className=''>Are you a professor?</ModalHeader>
					<ModalBody className='pb-[16px]'>
						<p>
							To create a classroom, we need to verify that you are a teacher.
						</p>
						<p>Complete the following information to become a teacher!</p>

						<CreateTeacherForm onClose={onClose} />
					</ModalBody>
				</>
			)}
		</ModalContent>
	)
}

type Props = {
	hasPermissions: boolean
}

export function NewClassModal(props: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Tooltip content='Create new class' delay={0} closeDelay={0}>
				<Button
					size='md'
					isIconOnly
					className='text-light-black'
					radius='full'
					aria-label='Create new class'
					variant='flat'
					onPress={onOpen}
				>
					<NewIcon width={22} height={22} className='stroke-light-black' />
				</Button>
			</Tooltip>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				{props.hasPermissions ? <AllowedContent /> : <NotAllowdContent />}
			</Modal>
		</>
	)
}
