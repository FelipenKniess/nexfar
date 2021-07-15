import { DataProduct } from './dataProducts';

export default function getTotalCart(cart: DataProduct[]):number {
  let total = 0;
  cart.forEach((product) => {
    total += Number(product.price.price) * Number(product.quantityCart);
  });

  return total;
}
