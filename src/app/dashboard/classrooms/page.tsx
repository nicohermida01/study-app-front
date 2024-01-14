import { ClassroomCard } from 'components/ClassroomCard'
import { JoinClassButton } from 'components/JoinClassButton'
import { NewClassModal } from 'components/NewClassModal'
import { SearchBox } from 'components/SearchBox'
import { authService } from 'services/auth.service'
import { classroomService } from 'services/classroom.service'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Classrooms',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ClassroomsPage() {
	const userAuth = await authService.me()
	const userPermissions = await userService.getPermissions()
	const classrooms = await classroomService.getAllForRelatedUser(userAuth.id)

	return (
		<div className='h-full box-border classroomPageLayout'>
			<header className='[grid-area:topbar] flex gap-[8px] items-center'>
				<SearchBox />

				<JoinClassButton />
				<NewClassModal hasPermissions={userPermissions.canCreateClassrooms} />
			</header>

			<div className='[grid-area:class] flex items-center justify-center'>
				{!!classrooms && classrooms.length > 0 ? (
					<div className='h-full w-full flex'>
						{classrooms.map((item, index) => (
							<ClassroomCard
								key={index}
								area={''}
								description={item.description}
								name={item.name}
							/>
						))}
					</div>
				) : (
					<h3 className='font-bold text-lg text-slate-400'>{`~ You haven't joined any class yet ~`}</h3>
				)}
			</div>
		</div>
	)
}
