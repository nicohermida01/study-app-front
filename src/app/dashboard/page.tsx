export const metadata = {
	title: 'Study | Dashboard',
}

export default async function DashboardPage() {
	return (
		<div className='w-full h-full dashboardPageLayout '>
			<div className='[grid-area:a] bg-slate-400'>Classrooms</div>

			<div className='[grid-area:b] bg-green-400'>Calendar</div>

			<div className='[grid-area:c] bg-blue-300'>Contacts</div>
		</div>
	)
}
