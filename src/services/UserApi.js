import api from "./api"

export default class UserApi {
  signUp(data) {
    return api.post("/cadastrar", data);
  }
  signIn(data) {
    return api.post("/entrar", data);
  }
} 