export const errorCatch = (error: any): string => 
    error.response && error.response.data 
        ? typeof error.response.data.message === 'object'
            ? typeof error.response.data.message[0]
            : typeof error.response.data.message
        : error.message

export const getContentType = () => ({
    'Content-Type' : 'application/json',
})
 