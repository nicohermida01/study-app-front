import { ClassroomCard } from 'components/ClassroomCard'
import { JoinClassModal } from 'components/JoinClassModal'
import { NewClassModal } from 'components/NewClassModal'
import { SearchBox } from 'components/SearchBox'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Classrooms',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ClassroomsPage() {
	const permissions = await userService.getPermissions()
	const classrooms = await userService.getClassrooms()

	return (
		<div className='h-full box-border classroomPageLayout'>
			<header className='[grid-area:topbar] flex gap-[8px] items-center'>
				<SearchBox />

				<JoinClassModal />
				<NewClassModal hasPermissions={permissions.canCreateClassrooms} />
			</header>

			<div className='[grid-area:class] flex items-center justify-center'>
				{classrooms.teachesClass && classrooms.teachesClass.length > 0 && (
					<div className='h-full w-full flex flex-wrap gap-[16px]'>
						{classrooms.teachesClass.map((item, index) => (
							<ClassroomCard key={index} {...item} />
						))}
					</div>
				)}

				{classrooms.coursesClass && classrooms.coursesClass.length > 0 && (
					<div className='h-full w-full flex flex-wrap gap-[16px]'>
						{classrooms.coursesClass.map((item, index) => (
							<ClassroomCard key={index} {...item} />
						))}
					</div>
				)}

				{!classrooms.coursesClass && !classrooms.teachesClass && (
					<h3 className='font-bold text-lg text-slate-400'>{`~ You haven't joined any class yet ~`}</h3>
				)}
			</div>
		</div>
	)
}
