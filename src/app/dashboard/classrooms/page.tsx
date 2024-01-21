import { ClassroomCard } from 'components/ClassroomCard'
import { JoinClassModal } from 'components/JoinClassModal'
import { NewClassModal } from 'components/NewClassModal'
import { SearchBox } from 'components/SearchBox'
import { ICLassroomSerialized } from 'interfaces/classroom.interface'
import { professorService } from 'services/professor.service'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Classrooms',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ClassroomsPage() {
	let teachesClassrooms: ICLassroomSerialized[] = []
	const coursesClassrooms = await userService.getCourses()
	const permissions = await userService.getPermissions()

	if (permissions.canCreateClassrooms)
		teachesClassrooms = await professorService.getTeaches()

	return (
		<div className='h-full box-border classroomPageLayout'>
			<header className='[grid-area:topbar] flex gap-[8px] items-center'>
				<SearchBox />

				<JoinClassModal />
				<NewClassModal hasPermissions={permissions.canCreateClassrooms} />
			</header>

			<div className='[grid-area:class] flex items-center justify-center'>
				{teachesClassrooms && teachesClassrooms.length > 0 && (
					<div className='h-full w-full flex flex-wrap gap-[16px]'>
						{teachesClassrooms.map((item, index) => (
							<ClassroomCard key={index} {...item} />
						))}
					</div>
				)}

				{coursesClassrooms && coursesClassrooms.length > 0 && (
					<div className='h-full w-full flex flex-wrap gap-[16px]'>
						{coursesClassrooms.map((item, index) => (
							<ClassroomCard key={index} {...item} />
						))}
					</div>
				)}

				{(!coursesClassrooms || coursesClassrooms.length === 0) &&
					(!teachesClassrooms || teachesClassrooms.length === 0) && (
						<h3 className='font-bold text-lg text-slate-400'>{`~ You haven't joined any class yet ~`}</h3>
					)}
			</div>
		</div>
	)
}
