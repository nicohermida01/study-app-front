interface ISchedulesLayout {
	children: React.ReactNode
}

export default function SchedulesLayout({ children }: ISchedulesLayout) {
	return <section>{children}</section>
}
