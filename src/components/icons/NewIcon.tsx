import { SVGProps } from 'react'

export function NewIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				<g id='Edit / Add_Plus'>
					<path
						id='Vector'
						d='M6 12H12M12 12H18M12 12V18M12 12V6'
						stroke='inherit'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</g>
			</g>
		</svg>
	)
}
