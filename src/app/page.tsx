import Link from 'next/link'

export default function Home() {
	return (
		<div className='min-h-screen flex gap-4 flex-col items-center justify-center'>
			<h1 className='font-bold text-3xl'>Home Page</h1>

			<nav>
				<ul className='[&>*:hover]:underline [&>*]:text-center'>
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
		</div>
	)
}
