import { Card } from 'components/Card'
import { ClassroomAsideCard } from 'components/ClassroomAsideCard'
import { classroomService } from 'services/classroom.service'

type Props = {
	params: {
		id: string
	}
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ClassPage(props: Props) {
	const classroomAuth = await classroomService.verifyUserInClass(
		props.params.id
	)

	if (!classroomAuth)
		return (
			<div>
				<h2>You are not in the classroom</h2>
			</div>
		)

	return (
		<section className='classPageLayout w-full h-full'>
			<header className='[grid-area:bar]'>
				<Card containerStyles='p-[16px] flex items-center justify-center gap-[16px]'>
					<span>Board</span>
					<span>Homework</span>
					<span>Schedules</span>
				</Card>
			</header>

			<aside className='[grid-area:class]'>
				<ClassroomAsideCard
					name={classroomAuth.name}
					description={classroomAuth.description}
					code={classroomAuth.code}
				/>
			</aside>
			<main className='[grid-area:content] bg-slate-100 min-w-[400px]'></main>
		</section>
	)
}
