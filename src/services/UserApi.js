import api from "./api"

export default class UserApi {
  signUp(data) {
    return api.post("/cadastrar", data);
  }
  signIn(data) {
    return api.post("/entrar", data);
  }
  infoUser(headers) {
    return api.get("/pagamento", headers);
  }
  saveInfo(body, headers) {
    return api.post("/informacoes", body, headers);
  }
} 