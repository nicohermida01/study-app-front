import { NavbarItem } from 'components/NavbarItem'
import { DashboardIcon } from './icons/DashboardIcon'
import { ClassroomIcon } from './icons/ClassroomIcon'
import { FriendsIcon } from './icons/FriendsIcon'
import { MessageIcon } from './icons/MessageIcon'
import { CalendarIcon } from './icons/CalendarIcon'

const iconSize = 24

export function Sidebar() {
	return (
		<aside className='bg-white w-full h-full [grid-area:aside] pt-[128px]'>
			<nav className='flex flex-col'>
				<NavbarItem
					href='/dashboard'
					text='Dashboard'
					icon={<DashboardIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/rooms'
					text='Rooms'
					icon={<ClassroomIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/friends'
					text='Friends'
					icon={<FriendsIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/messages'
					text='Messages'
					icon={<MessageIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/calendar'
					text='Calendar'
					icon={<CalendarIcon height={iconSize} width={iconSize} />}
				/>
			</nav>
		</aside>
	)
}