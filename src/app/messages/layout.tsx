interface IMessagesLayoutProps {
	children: React.ReactNode
}

export default function MessagesLayout({ children }: IMessagesLayoutProps) {
	return <section>{children}</section>
}
