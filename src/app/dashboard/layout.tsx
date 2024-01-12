import { Sidebar } from 'components/Sidebar'
import { Topbar } from 'components/Topbar'
import { useAuthenticate } from 'hooks/useAuthenticate'
import React from 'react'

type Props = {
	children: React.ReactNode
}

export default async function DashboardLayout(props: Props) {
	const session = await useAuthenticate()

	return (
		<section className='bg-bg-light min-h-screen dashboardLayout'>
			<Topbar user={session.user} />
			<Sidebar />
			<div className='[grid-area:main] w-full mainContainer'>
				<main className='max-w-[1800px] mx-auto w-full p-[32px] h-full'>
					{props.children}
				</main>
			</div>
		</section>
	)
}
