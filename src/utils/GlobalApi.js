const axios = require('axios').default;

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "http://localhost:1337/api"

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})

const getLatestProducts = () => axiosClient.get('/products?populate=*')
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)

// get products list by catagory

const getProductByCatagory = (catagory) => axiosClient.get(`/products?filters[catagory][$eq]=${catagory}&populate=*`)

// Add to Cart Collection

const addToCart = (data) => axiosClient.post('/carts', data)

/// Cart items

const getUserCartItems = (email) => axiosClient.get(`/carts?populate[products][populate][0]=banner&fillters[email][$eq]=${email}`)

export default {
    getLatestProducts, getProductById, getProductByCatagory, addToCart, getUserCartItems
}