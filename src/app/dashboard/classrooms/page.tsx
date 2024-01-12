import { JoinClassButton } from 'components/JoinClassButton'
import { NewClassModal } from 'components/NewClassModal'
import { SearchBox } from 'components/SearchBox'
import { useAuthenticate } from 'hooks/useAuthenticate'
import { ITeaches } from 'interfaces/teaches.interface'
import { attendsService } from 'services/attends.service'
import { teachesService } from 'services/teaches.service'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Classrooms',
}

export const dynamic = 'force-dynamic'

export default async function ClassroomsPage() {
	const session = await useAuthenticate()
	const attends = await attendsService.getAllAttendsByUser(session.user.id)
	const userPermissions = await userService.getPermissions()
	let teaches: ITeaches[] | [] = []

	if (userPermissions.canCreateClassrooms) {
		teaches = await teachesService.getAllTeachesByUser(session.user.id)
	}

	return (
		<div className='h-full box-border classroomPageLayout'>
			<header className='[grid-area:topbar] flex gap-[8px] items-center'>
				<SearchBox />

				<JoinClassButton />
				<NewClassModal hasPermissions={userPermissions.canCreateClassrooms} />
			</header>

			<div className='[grid-area:class]  flex items-center justify-center'>
				{!!attends &&
					attends.length > 0 &&
					attends.map((item, index) => <div key={index}>Attends</div>)}
				{!!teaches &&
					teaches.length &&
					teaches.map((elem, index) => <div key={index}>Teaches</div>)}
				{!attends && !teaches && (
					<h3 className='font-bold text-lg text-slate-400'>{`~ You haven't joined any class yet ~`}</h3>
				)}
			</div>
		</div>
	)
}
