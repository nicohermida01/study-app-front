import { SVGProps } from 'react'

export function EditIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='M20.15 7.94L8.28 19.81c-1.06 1.07-4.23 1.56-4.95.85-.72-.71-.21-3.88.85-4.95L16.05 3.84a2.9 2.9 0 014.1 4.1v0z'
			></path>
		</svg>
	)
}
