import { ProfileCard } from 'components/ProfileCard'
import { TeacherQuestionCard } from 'components/TeacherQuestionCard'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Profile',
}

export default async function ProfilePage() {
	const user = await userService.me()

	return (
		<div className='flex flex-col gap-[32px] w-[300px]'>
			<ProfileCard
				name={`${user.firstName} ${user.lastName}`}
				username={user.username}
			/>

			<TeacherQuestionCard />
		</div>
	)
}
