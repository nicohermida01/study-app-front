import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { StudyLogo } from 'components/icons/StudyLogo'
import { authOptions } from 'lib/authConfig'

export default async function Home() {
	const session = await getServerSession(authOptions)

	if (session) {
		redirect('/dashboard')
	}

	return (
		<div className='min-h-screen flex gap-4 flex-col items-center justify-center'>
			<StudyLogo width={250} height={70} />

			<h1 className='font-bold text-xl'>Home Page</h1>

			<nav>
				<ul className='[&>*:hover]:underline [&>*]:text-center'>
					<li>
						<Link href='/login'>Log In</Link>
					</li>
					<li>
						<Link href='/register'>Sign up</Link>
					</li>
					<li>
						<Link href='/support'>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
