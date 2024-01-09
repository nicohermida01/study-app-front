import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const metadata = {
	title: 'Study | Dashboard',
}

export default async function DashboardPage() {
	const session = await getServerSession(authOptions)

	return (
		<>
			<h1>Dashboard</h1>
			<p>{`Hello ${session?.user.firstName} ${session?.user.lastName}`}</p>
		</>
	)
}
