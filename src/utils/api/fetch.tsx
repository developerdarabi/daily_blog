import toast from "react-hot-toast"

interface Props {
    url: string,
    options: any,
    onSuccess?: (data: Promise<any>) => void,
    onError?: (error: unknown) => void,
    isLocal?: boolean
}

export const FetchHandler = async ({ url, options, onError, onSuccess, isLocal = false }: Props) => {
    try {
        let completeUrl = '/' + url
        if (!isLocal) {
            completeUrl = process.env.API_BASE_URL + completeUrl
        }

        const response = await fetch(completeUrl, options)
        console.log(response);
        console.log('response');
        if (!response.ok) {
            throw new Error('error on fetch')
            return
        }
        const jsonedResponse = response?.json?.()

        if (!onSuccess) {
            return jsonedResponse
        }
        onSuccess?.(jsonedResponse)
        typeof window !== "undefined" && toast?.success?.('Successfull')
    } catch (error: unknown) {
        onError?.(error)
        typeof window !== "undefined" && toast?.error?.('error on fetch')
        return null
    }
}