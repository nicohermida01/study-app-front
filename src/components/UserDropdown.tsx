'use client'

import {
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
				<User
					as='button'
					avatarProps={{
						isBordered: true,
						src: 'https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg', // change to user avatar in props
					}}
					className='transition-transform'
					description={`@${username}`}
					name={`${firstName} ${lastName}`}
				/>
			</DropdownTrigger>

			<DropdownMenu aria-label='User Actions' variant='flat'>
				<DropdownItem key='profile' className='h-14 gap-2'>
					<Link href={`/dashboard/user/${userId}`}>
						<p className='font-bold'>Signed in as</p>
						<p className='font-bold'>{`@${username}`}</p>
					</Link>
				</DropdownItem>

				<DropdownItem key='logout' color='danger' onClick={handleLogout}>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
