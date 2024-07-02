'use client'

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react'

import { EditIcon } from 'components/icons/EditIcon'
import { EditProfileForm } from 'components/EditProfileForm'
import { IProfileData } from 'interfaces/profileData.interface'

const editProfileFormId = 'edit-profile-form'

type EditProfileModalProps = Omit<IProfileData, 'isProfessor'>

export function EditProfileModal(props: EditProfileModalProps) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Tooltip content='Edit profile' delay={0} closeDelay={0}>
				<Button
					isIconOnly
					aria-label='edit profile'
					radius='full'
					variant='faded'
					size='sm'
					className='border-none absolute top-[12px] right-[12px]'
					onPress={onOpen}
				>
					<EditIcon className='h-[16px] stroke-light-black' />
				</Button>
			</Tooltip>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Edit profile</ModalHeader>
							<ModalBody>
								<EditProfileForm
									formId={editProfileFormId}
									data={{
										dateOfBirth: props.dateOfBirth,
										email: props.email,
										firstName: props.firstName,
										lastName: props.lastName,
										nationality: props.nationality.id,
										username: props.username,
									}}
									avatarNum={props.avatarNum}
									onCloseFn={onClose}
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									type='submit'
									form={editProfileFormId}
									color='primary'
									className='font-bold text-white'
								>
									Save
								</Button>
								<Button onPress={onClose}>Cancel</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
