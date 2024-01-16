import { ProfileCard } from 'components/ProfileCard'
import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Profile',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
	params: {
		id: string
	}
}

export default async function UserProfilePage(props: Props) {
	const profileData = await userService.getProfileData(props.params.id)

	return (
		<div className='flex flex-col gap-[32px] w-[300px]'>
			<ProfileCard {...profileData} />
		</div>
	)
}
