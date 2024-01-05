import { Sidebar } from 'components/Sidebar'
import { Topbar } from 'components/Topbar'
import { userService } from 'services/user.service'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const user = await userService.me()

	return (
		<section className='bg-bg-light min-h-screen dashboardLayout'>
			<Topbar
				userData={{
					firstName: user.firstName,
					lastName: user.lastName,
					username: user.username,
				}}
			/>
			<Sidebar />
			<div className='[grid-area:main] w-full mainContainer'>
				<main className='max-w-[1800px] mx-auto w-full p-[32px] '>
					{children}
				</main>
			</div>
		</section>
	)
}
