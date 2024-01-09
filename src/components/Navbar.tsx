'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
	const pathname = usePathname()

	return (
		<header className='w-full  fixed'>
			<nav className='max-w-[1000px] mx-auto flex justify-between font-bold uppercase p-[32px]'>
				<Link href='/support'>Contact</Link>
				<Link href={pathname === '/login' ? '/register' : '/login'}>
					{pathname === '/login' ? 'Sign up' : 'Log in'}
				</Link>
			</nav>
		</header>
	)
}
