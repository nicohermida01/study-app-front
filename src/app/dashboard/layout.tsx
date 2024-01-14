import { Sidebar } from 'components/Sidebar'
import { Topbar } from 'components/Topbar'
import React from 'react'
import { authService } from 'services/auth.service'

type Props = {
	children: React.ReactNode
}

export const dynamic = 'force-dynamic'

export default async function DashboardLayout(props: Props) {
	const userAuth = await authService.me()

	return (
		<section className='bg-bg-light min-h-screen dashboardLayout'>
			<Topbar user={userAuth} />
			<Sidebar />
			<div className='[grid-area:main] w-full mainContainer'>
				<main className='max-w-[1800px] mx-auto w-full p-[32px] h-full'>
					{props.children}
				</main>
			</div>
		</section>
	)
}
