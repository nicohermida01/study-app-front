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

interface IUserDropdownProps {
	name: string
}

export function UserDropdown() {
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
						src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', // change to user avatar in props
					}}
					className='transition-transform'
					description={`{username}`}
					name={`{firstName + lastName}`}
				/>
			</DropdownTrigger>

			<DropdownMenu aria-label='User Actions' variant='flat'>
				<DropdownItem key='profile' className='h-14 gap-2'>
					<p className='font-bold'>Signed in as</p>
					<p className='font-bold'>{`{username}`}</p>
				</DropdownItem>

				<DropdownItem key='logout' color='danger' onClick={handleLogout}>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
