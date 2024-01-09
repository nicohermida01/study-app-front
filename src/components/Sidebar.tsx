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
					href='/dashboard/classrooms'
					text='Classrooms'
					icon={<ClassroomIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/dashboard/friends'
					text='Friends'
					icon={<FriendsIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/dashboard/messages'
					text='Messages'
					icon={<MessageIcon height={iconSize} width={iconSize} />}
				/>
				<NavbarItem
					href='/dashboard/calendar'
					text='Calendar'
					icon={<CalendarIcon height={iconSize} width={iconSize} />}
				/>
			</nav>
		</aside>
	)
}
