'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	text: string
	href: string
	icon: React.ReactNode
}

export function NavbarItem({ text, href, icon }: Props) {
	const pathname = usePathname()
	const isActive =
		href === '/dashboard'
			? href === pathname
			: pathname.includes(text.toLowerCase())

	return (
		<Link
			href={href}
			className={`w-full py-[16px] flex items-center gap-[8px] pl-[32px] hover:navActive transition-all  font-bold relative ${
				isActive ? 'navActive' : 'navInactive'
			}`}
		>
			<span className='absolute left-0 top-0 w-1 h-full'></span>
			{icon}
			{text}
		</Link>
	)
}
