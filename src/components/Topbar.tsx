'use client'

import { Button } from '@nextui-org/react'
import { StudyLogo } from 'components/icons/StudyLogo'
import { MenuIcon } from 'components/icons/MenuIcon'
import { UserDropdown } from 'components/UserDropdown'
import { NotificationIcon } from './icons/NotificationICon'
import { MessageIcon } from './icons/MessageIcon'

export function Topbar() {
	return (
		<header className='bg-white w-full [grid-area:top] px-[32px] py-[16px] flex justify-between items-center'>
			<div className='flex items-center gap-[32px]'>
				<Button
					isIconOnly
					aria-label='Toggle menu'
					variant='solid'
					className='rounded-full bg-slate-100'
				>
					<MenuIcon width={24} height={24} className='stroke-light-black' />
				</Button>

				<StudyLogo width={120} height={44} />
			</div>

			<div className='flex items-center gap-[32px]'>
				<div className='flex items-center gap-[16px]'>
					<Button
						isIconOnly
						aria-label='Toggle messages'
						variant='solid'
						className='rounded-full bg-slate-100'
					>
						<MessageIcon
							width={24}
							height={24}
							className='stroke-light-black'
						/>
					</Button>

					<Button
						isIconOnly
						aria-label='Toggle notifications'
						variant='solid'
						className='rounded-full bg-slate-100'
					>
						<NotificationIcon
							width={24}
							height={24}
							className='stroke-light-black'
						/>
					</Button>
				</div>

				<UserDropdown />
			</div>
		</header>
	)
}
