import CartApi from "../services/CartApi";
import UserApi from "../services/UserApi";

export default function useApi() {
  return {
    user: new UserApi(),
    cart: new CartApi()
  };
} 