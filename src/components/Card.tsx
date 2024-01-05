interface ICardProps {
	children: React.ReactNode
	containerStyles?: string
}

export function Card({ children, containerStyles }: ICardProps) {
	return (
		<div
			className={`p-[32px] rounded-[8px] shadow-md bg-white w-full ${containerStyles}`}
		>
			{children}
		</div>
	)
}
