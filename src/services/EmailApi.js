import api from './api.js'

export default class EmailApi {
     senfEmail(data, headers) {
        return api.post(`/sucesso`, data, headers)
    }
}