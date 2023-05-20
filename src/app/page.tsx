import Link from 'next/link'

export default function Home() {
	return (
		<>
			<h1>Home Page</h1>

			<nav>
				<ul>
					<li>
						<Link href='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link href='/courses'>Courses</Link>
					</li>
					<li>
						<Link href='/friends'>Friends</Link>
					</li>
					<li>
						<Link href='/messages'>Messages</Link>
					</li>
					<li>
						<Link href='/schedules'>Schedules</Link>
					</li>
					<li>
						<Link href='/profile'>Profile</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
