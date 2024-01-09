import { ProfileCard } from 'components/ProfileCard'
import { TeacherQuestionCard } from 'components/TeacherQuestionCard'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Profile',
}

type Props = {
	params: {
		id: string
	}
}

export default async function UserProfilePage(props: Props) {
	const user = await userService.getUser(props.params.id)
	const nationality = await userService.getNationality()

	return (
		<div className='flex flex-col gap-[32px] w-[300px]'>
			<ProfileCard
				name={`${user.firstName} ${user.lastName}`}
				username={user.username}
				email={user.email}
				nationality={nationality}
			/>

			<TeacherQuestionCard />
		</div>
	)
}
