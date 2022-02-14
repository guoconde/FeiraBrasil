import api from "./api"

export default class CartApi {
  getCart(headers) {
    return api.get("/carrinho", headers);
  }
  postCart(data, headers) {
    return api.post("/carrinho", data, headers);
  }
  deleteProduct(headers, id) {
    return api.delete(`/carrinho/${id}`, headers);
  }
  confirmPurchase(body, headers) {
    return api.post(`/pagamento`, body, headers);
  }
} 