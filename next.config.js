/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/dashboard',
				permanent: true,
			},
			{
				source: '/dashboard',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/profile',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/calendar',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/friends',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/messages',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/rooms',
				missing: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/login',
				permanent: false,
			},
			{
				source: '/login',
				has: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/dashboard',
				permanent: false,
			},
			{
				source: '/register',
				has: [
					{
						type: 'cookie',
						key: 'accessToken',
					},
				],
				destination: '/dashboard',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
