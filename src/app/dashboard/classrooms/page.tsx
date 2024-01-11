import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { JoinClassButton } from 'components/JoinClassButton'
import { NewClassButton } from 'components/NewClassButton'
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
		<div className='h-full box-border classroomPageLayout'>
			<header className='[grid-area:topbar] flex gap-[8px] items-center'>
				<SearchBox />

				<JoinClassButton />
				<NewClassButton />
			</header>

			<div className='[grid-area:class]  flex items-center justify-center'>
				{!!attends && attends.length > 0 ? (
					attends.map((item, index) => <div key={index}>clase 1</div>)
				) : (
					<h3 className='font-bold text-lg text-slate-400'>{`~ You haven't joined any class yet ~`}</h3>
				)}
			</div>
		</div>
	)
}
