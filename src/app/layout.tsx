import localFont from 'next/font/local'

import './globals.css'

const sansationFont = localFont({
	src: [
		{
			path: './ssot/assets/fonts/Sansation-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: './ssot/assets/fonts/Sansation-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
})

export const metadata = {
	title: 'Study',
	description: 'Study app is a place for the student',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={sansationFont.className}>
			<body className=''>{children}</body>
		</html>
	)
}
