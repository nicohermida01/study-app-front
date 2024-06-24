export const apiWrapper = async (fn: () => any) => {
	try {
		return await fn()
	} catch (error: any) {
		console.log(`Error when try to fetch`, error)
	}
}
