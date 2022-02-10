import api from './api.js'

export default class ProductsApi {
    renderProducts() {
        return api.get('/')
    }
}