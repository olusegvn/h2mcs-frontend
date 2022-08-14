const config = {
    apiUrl: 'https://h2mcs.herokuapp.com/api/v1/'
}

export const resolveError = (error: any) => {
    if (error.response) {
        const { data } = error.response
        const message = data.message || data.msg
        if (message) {
            return Promise.reject(message)
        }
    }
    return Promise.reject('Something went wrong! Please try again later!')
}


export default config;