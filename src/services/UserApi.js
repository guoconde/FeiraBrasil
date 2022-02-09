import api from "./api"

export default class UserApi {
  signUp(data) {
    return api.post("/cadastrar", data);
  }
} 