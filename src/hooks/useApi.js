import ProductsApi from "../services/ProductsApi";
import UserApi from "../services/UserApi";

export default function useApi() {
  return {
    user: new UserApi(),
    products: new ProductsApi(),
  };
} 