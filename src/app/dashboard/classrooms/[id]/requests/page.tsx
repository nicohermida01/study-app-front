import { CourseRequestCard } from 'components/CourseRequestCard'
import { classroomService } from 'services/classroom.service'

type Props = {
	params: {
		id: string
	}
}

export default async function ClassroomRequestsPage(props: Props) {
	const auth = await classroomService.authenticateProfessor(props.params.id)

	if (!auth) {
		return (
			<div>
				<h3>You do not have the necessary permissions to access the content</h3>
			</div>
		)
	}

	const courseRequests = await classroomService.getRequests(props.params.id)

	return (
		<div className='flex item-center gap-[16px]'>
			{courseRequests.map((item, index) => (
				<CourseRequestCard
					key={index}
					name={item.name}
					username={item.username}
					courseId={item.courseId}
				/>
			))}
		</div>
	)
}
