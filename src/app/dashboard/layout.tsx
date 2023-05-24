interface IDashboardLayoutProps {
	children: React.ReactNode
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
	return <section>{children}</section>
}
