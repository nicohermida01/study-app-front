'use client'

import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	User,
} from '@nextui-org/react'

import { useRouter } from 'next/navigation'
import { authService } from 'services/auth.service'
import { toast } from 'sonner'

export interface IUserDropdownProps {
	username: string
	firstName: string
	lastName: string
}

export function UserDropdown({
	username,
	firstName,
	lastName,
}: IUserDropdownProps) {
	const router = useRouter()

	const handleLogout = () => {
		authService
			.logoutUser()
			.then(() => router.push('/login'))
			.catch(err => {
				// move into error wrapper
				console.error(err)
				toast.error('Something went wrong. Try again later')
			})
	}

	return (
		<Dropdown placement='bottom-end'>
			<DropdownTrigger>
				<User
					as='button'
					avatarProps={{
						isBordered: true,
						src: 'https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg', // change to user avatar in props
					}}
					className='transition-transform'
					description={username}
					name={`${firstName} ${lastName}`}
				/>
			</DropdownTrigger>

			<DropdownMenu aria-label='User Actions' variant='flat'>
				<DropdownItem key='profile' className='h-14 gap-2'>
					<p className='font-bold'>Signed in as</p>
					<p className='font-bold'>{username}</p>
				</DropdownItem>

				<DropdownItem key='logout' color='danger' onClick={handleLogout}>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
