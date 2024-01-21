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

	const requests = await classroomService.getRequests(props.params.id)

	return (
		<div>
			{requests.map(item => (
				<span>requests 1 pendign</span>
			))}
		</div>
	)
}
