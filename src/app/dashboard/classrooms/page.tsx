import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { JoinClassButton } from 'components/JoinClassButton'
import { SearchBox } from 'components/SearchBox'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { attendsService } from 'services/attends.service'

export const metadata = {
	title: 'Study | Classrooms',
}

export default async function ClassroomsPage() {
	const session = await getServerSession(authOptions)

	if (!session) redirect('/login')

	const attends = await attendsService.getAllAttendsByUser(session.user.id)

	return (
		<div className=''>
			<header className='flex justify-between items-center'>
				<SearchBox />

				<JoinClassButton />
			</header>

			{!!attends && attends.length > 0 ? (
				attends.map((item, index) => <div key={index}>clase 1</div>)
			) : (
				<h3>{`You haven't joined any class yet. Click on 'Join a class'`}</h3>
			)}
		</div>
	)
}
