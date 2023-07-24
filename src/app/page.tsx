import Link from 'next/link'

import { StudyLogo } from 'components/icons/StudyLogo'

export default function Home() {
	return (
		<div className='min-h-screen flex gap-4 flex-col items-center justify-center'>
			<StudyLogo width={250} height={70} />

			<h1 className='font-bold text-xl'>Home Page</h1>

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
