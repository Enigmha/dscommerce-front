import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devesuperior.dscommerce/Cart", str );
}