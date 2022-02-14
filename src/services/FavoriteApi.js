import api from './api.js'

export default class FavoriteApi {
    favoriteProduct(id, userId, isFavorite) {
        return api.put(`/produtos/${id}`, { userId: userId, isFavorite })
    }
    favoriteList(headers) {
        return api.get(`/favoritos`, headers)
    }
}