import { ClassroomAsideCard } from 'components/ClassroomAsideCard'
import { ClassroomHeader } from 'components/ClassroomHeader'
import { classroomService } from 'services/classroom.service'

type Props = {
	params: {
		id: string
	}
	children: React.ReactNode
}

export default async function ClassroomLayout(props: Props) {
	const classAuth = await classroomService.authUserClass(props.params.id)

	if (!classAuth)
		return (
			<div>
				<h2>You are not in the classroom</h2>
			</div>
		)

	const { rol, classroom } = classAuth

	return (
		<section className='classPageLayout w-full h-full'>
			<header className='[grid-area:bar]'>
				<ClassroomHeader
					classroomId={props.params.id}
					isProfessor={rol === 'Professor'}
				/>
			</header>

			<aside className='[grid-area:class]'>
				<ClassroomAsideCard
					name={classroom.name}
					description={classroom.description}
					code={classroom.code}
				/>
			</aside>
			<main className='[grid-area:content] bg-slate-100 min-w-[400px] p-[8px]'>
				{props.children}
			</main>
		</section>
	)
}
