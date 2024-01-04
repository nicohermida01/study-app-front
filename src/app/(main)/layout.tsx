import { Sidebar } from 'components/Sidebar'
import { Topbar } from 'components/Topbar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className='bg-bg-light min-h-screen dashboardLayout'>
			<Topbar />
			<Sidebar />
			<div className='[grid-area:main] w-full mainContainer'>
				<main className='max-w-[1800px] mx-auto w-full p-[32px] '>
					{children}
				</main>
			</div>
		</section>
	)
}
