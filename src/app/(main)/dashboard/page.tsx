import { userService } from 'services/user.service'

export const metadata = {
	title: 'Study | Dashboard',
}
export const revalidate = 3600
export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
	const user = await userService.me()

	return (
		<>
			<h1>Dashboard</h1>
			<p>{`Hello ${user.firstName} ${user.lastName}`}</p>
		</>
	)
}
