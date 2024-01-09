import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const metadata = {
	title: 'Study | Dashboard',
}

export default async function DashboardPage() {
	const session = await getServerSession(authOptions)

	return (
		<div className='w-full h-full dashboardPageLayout '>
			<div className='[grid-area:a] bg-slate-400'>Classrooms</div>

			<div className='[grid-area:b] bg-green-400'>Calendar</div>

			<div className='[grid-area:c] bg-blue-300'>Friends</div>
		</div>
	)
}
