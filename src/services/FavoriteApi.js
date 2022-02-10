import api from './api.js'

export default class FavoriteApi {
    favoriteProduct(id, favorite) {
        console.log(id)
        return api.put(`/produtos/${id}`, { favorite: favorite})
    }
}