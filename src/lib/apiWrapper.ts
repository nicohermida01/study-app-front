export const apiWrapper = async (fn: () => any) => {
	try {
		return await fn()
	} catch (error: any) {
		console.error(`Error when try to fetch`, error.response.data)
	}
}
