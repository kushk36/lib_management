const API_BASE_URL = '/Book.json'

const fetchBooks = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}`)
        if (response.ok) {
            const data = await response.json()
            // console.log(data);
            return data
        } else {
            throw new Error('Failed to Fetch Books')
        }
    } catch (error) {
        throw new Error('Failed to Fetch Books')
    }
}

export default {
    fetchBooks
}
