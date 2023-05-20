interface IProfileLayoutProps {
	children: React.ReactNode
}

export default function ProfileLayout({ children }: IProfileLayoutProps) {
	return <section>{children}</section>
}
