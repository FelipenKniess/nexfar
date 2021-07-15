import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';

import { DataProduct, dataProducts } from '../utils/dataProducts';

interface CartContextData {
  cart: DataProduct[];
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  // updateProductAmount: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<DataProduct[]>(() => {
    const storagedCart = localStorage.getItem('@Nexfar:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = (productId: string) => {
    const productAlreadyInCart = cart.find((item) => item.id === productId);

    if (!productAlreadyInCart) {
      const [product] = dataProducts.filter((item) => item.id === productId);
      const stock = product.quantityAvailable;

      if (stock > 0) {
        localStorage.setItem('@Nexfar:cart', JSON.stringify([...cart, { ...product, quantityCart: 1 }]));
        setCart([...cart, { ...product, quantityCart: 1 }]);
        // toast('Adicionado');
      }
    }

    if (productAlreadyInCart) {
      const [product] = dataProducts.filter((item) => item.id === productId);
      const stock = product.quantityAvailable;

      const updatedCart = cart.map((cartItem) => (cartItem.id === productId ? {
        ...cartItem,
        quantityCart: Number(cartItem.quantityCart) + 1,
      } : cartItem));

      setCart(updatedCart);
      localStorage.setItem('@Nexfar:cart', JSON.stringify(updatedCart));
    }
  };

  const removeProduct = (productId: string) => {
    const productExists = cart.some((cartProduct) => cartProduct.id === productId);
    if (!productExists) {
      // toast.error('Este produto não está no carrinho');
      return;
    }

    const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('@Nexfar:cart', JSON.stringify(updatedCart));
  };

  // const updateProductAmount = async ({
  //   productId,
  //   amount,
  // }: UpdateProductAmount) => {
  //   try {
  //     if (amount < 1) {
  //       toast.error('Erro na alteração de quantidade do produto');
  //       return;
  //     }

  //     const response = await api.get(`/stock/${productId}`);
  //     const productAmount = response.data.amount;
  //     const stockIsFree = amount > productAmount;

  //     if (stockIsFree) {
  //       toast.error('Quantidade solicitada fora de estoque');
  //       return;
  //     }

  //     const productExists = cart.some((cartProduct) => cartProduct.id === productId);
  //     if (!productExists) {
  //       toast.error('Erro na alteração de quantidade do produto');
  //       return;
  //     }

  //     const updatedCart = cart.map((cartItem) => (cartItem.id === productId ? {
  //       ...cartItem,
  //       amount,
  //     } : cartItem));
  //     setCart(updatedCart);
  //     localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
  //   } catch {
  //     toast.error('Erro na alteração de quantidade do produto');
  //   }
  // };

  return (
    <CartContext.Provider value={{
      cart, addProduct, removeProduct,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
