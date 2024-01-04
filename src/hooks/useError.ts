import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'

export function useError() {
	const handleError = (err: Error | AxiosError | unknown) => {
		if (axios.isAxiosError(err)) {
			toast.error(err.response?.data?.message || err.message)
		} else {
			toast.error('Something went wrong. Try again later')
		}
	}

	return {
		handleError,
	}
}
