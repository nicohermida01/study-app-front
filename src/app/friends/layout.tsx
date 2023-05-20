interface IFriendsLayoutProps {
	children: React.ReactNode
}

export default function FriendsLayout({ children }: IFriendsLayoutProps) {
	return <section>{children}</section>
}
