'use client'

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	User,
} from '@nextui-org/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

type Props = {
	username: string
	firstName: string
	lastName: string
	userId: string
}

export function UserDropdown({ username, firstName, lastName, userId }: Props) {
	const handleLogout = () => {
		signOut({ callbackUrl: '/login' })
	}

	return (
		<Dropdown placement='bottom-end' showArrow>
			<DropdownTrigger>
				<Button>USER</Button>
				{/* <User
					as='button'
					avatarProps={{
						isBordered: true,
						src: 'https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg', // change to user avatar in props
					}}
					className='transition-transform'
					description={`@${username}`}
					name={`${firstName} ${lastName}`}
				/> */}
			</DropdownTrigger>

			<DropdownMenu aria-label='User Actions' variant='flat'>
				<DropdownItem
					key='profile'
					className='h-14 gap-2'
					as={Link}
					href={`/dashboard/user/${userId}`}
				>
					Profile
				</DropdownItem>

				<DropdownItem key='logout' color='danger' onClick={handleLogout}>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
