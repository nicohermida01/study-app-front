import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Dashboard',
}

export default async function DashboardPage() {
	const user = await userService.me()

	return (
		<>
			<h1>Dashboard</h1>
			<p>{`Hello ${user.firstName} ${user.lastName}`}</p>
		</>
	)
}
