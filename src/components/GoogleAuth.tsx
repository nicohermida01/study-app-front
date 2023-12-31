import { Button } from '@nextui-org/react'
import { GoogleIcon } from 'components/icons/GoogleIcon'

export function GoogleAuth() {
	return (
		<>
			<div className='w-full flex justify-between items-center mt-[32px] mb-[16px]'>
				<div className='h-[3px] bg-slate-200 w-[45%]'></div>
				<span className='font-bold'>o</span>
				<div className='h-[3px] bg-slate-200 w-[45%]'></div>
			</div>

			<Button
				isIconOnly
				aria-label='Login with Google'
				variant='bordered'
				className='rounded-full'
			>
				<GoogleIcon width='16px' height='16px' />
			</Button>
		</>
	)
}
