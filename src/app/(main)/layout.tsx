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
			<main className='max-w-[1800px] [grid-area:main] mx-auto w-full p-[32px]'>
				{children}
			</main>
		</section>
	)
}
