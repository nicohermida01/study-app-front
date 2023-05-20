interface ICoursesLayoutProps {
	children: React.ReactNode
}

export default function CoursesLayout({ children }: ICoursesLayoutProps) {
	return <section>{children}</section>
}
