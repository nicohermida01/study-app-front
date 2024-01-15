import { MathsIcon } from './icons/MathsIcon'

const iconSize = 32

const MathImage = () => {
	return (
		<div className='bg-blue-100 p-[12px] w-max h-max rounded-lg'>
			<MathsIcon width={iconSize} height={iconSize} className='fill-blue-600' />
		</div>
	)
}

export const classroomImages = {
	MATH: <MathImage />,
}
