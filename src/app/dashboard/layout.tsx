import { Sidebar } from 'components/Sidebar'
import { Topbar } from 'components/Topbar'
import { redirect } from 'next/navigation'
import { authService } from 'services/auth.service'

export const revalidate = 3600 // revalidate at most every hour

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	let user = {}
	try {
		user = await authService.me()
	} catch (err) {
		redirect('/login')
	}

	return (
		<section className='bg-bg-light min-h-screen dashboardLayout'>
			<Topbar user={user} />
			<Sidebar />
			<div className='[grid-area:main] w-full mainContainer'>
				<main className='max-w-[1800px] mx-auto w-full p-[32px] h-full'>
					{children}
				</main>
			</div>
		</section>
	)
}
