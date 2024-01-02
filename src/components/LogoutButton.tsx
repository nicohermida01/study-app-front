'use client'

import { Button } from '@nextui-org/react'
import { authService } from 'services/auth.service'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function LogoutButton() {
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

	return <Button onClick={handleLogout}>Logout</Button>
}
