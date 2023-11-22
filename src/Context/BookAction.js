export const getBooks = async () => {
    const response = await fetch('/Book.json')

    const data = await response.json()

    return data
}