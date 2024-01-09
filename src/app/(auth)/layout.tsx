import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { Navbar } from 'components/Navbar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authOptions)

	if (session) {
		redirect('/dashboard')
	}

	return (
		<section className='w-full h-screen'>
			<Navbar />
			<main className='grid place-items-center h-full'>{children}</main>
		</section>
	)
}
