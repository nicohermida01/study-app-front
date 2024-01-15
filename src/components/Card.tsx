interface ICardProps {
	children: React.ReactNode
	containerStyles?: string
}

export function Card({ children, containerStyles }: ICardProps) {
	return (
		<div className={` rounded-[8px] shadow-md bg-white ${containerStyles}`}>
			{children}
		</div>
	)
}
