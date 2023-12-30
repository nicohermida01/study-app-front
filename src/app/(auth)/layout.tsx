import Link from 'next/link'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className='w-full h-screen'>
			<header className='w-full  fixed'>
				<nav className='max-w-[1000px] mx-auto flex justify-between font-bold uppercase p-[32px]'>
					<Link href='#'>Contact</Link>
					<Link href='#'>Sign up</Link>
				</nav>
			</header>
			<main className='grid place-items-center h-full'>{children}</main>
		</section>
	)
}
