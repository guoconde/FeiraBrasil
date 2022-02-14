import CartApi from "../services/CartApi";
import ProductsApi from "../services/ProductsApi";
import UserApi from "../services/UserApi";
import FavoriteApi from "../services/FavoriteApi";
import EmailApi from "../services/EmailApi";

export default function useApi() {
  return {
    user: new UserApi(),
    cart: new CartApi(),
    products: new ProductsApi(),
    favorite: new FavoriteApi(),
    send: new EmailApi(),
  };
} 