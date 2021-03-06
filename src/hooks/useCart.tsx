import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';

import { toast } from 'react-toastify';

import { DataProduct } from '../utils/dataProducts';

interface CartContextData {
  cart: DataProduct[];
  addProduct: (Product: DataProduct) => void;
  removeProduct: (Product: DataProduct) => void;
  removeQtdItemCart: (Product: DataProduct) => void;
  cleanCart: () => void;
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

  const addProduct = (Product: DataProduct) => {
    const productAlreadyInCart = cart.find((item) => item.id === Product.id);

    if (!productAlreadyInCart) {
      if (Product.quantityCart + 1 > Product.quantityAvailable) {
        toast('Produto sem estoque!');
        return;
      }

      localStorage.setItem('@Nexfar:cart', JSON.stringify([...cart, { ...Product, quantityCart: 1 }]));
      setCart([...cart, { ...Product, quantityCart: 1 }]);
      toast('Produto adicionado no carrinho!');

      return;
    }

    if (productAlreadyInCart) {
      if (Product.quantityCart > Product.quantityAvailable) {
        toast('Excedido a quantidade de estoque do produto!');
        return;
      }

      const updatedCart = cart.map((cartItem) => (cartItem.id === Product.id ? {
        ...cartItem,
        quantityCart: Number(cartItem.quantityCart) + 1,
      } : cartItem));

      setCart(updatedCart);
      localStorage.setItem('@Nexfar:cart', JSON.stringify(updatedCart));
      toast('Alterado quantidade do produto no carrinho!');
    }
  };

  const removeProduct = (Product: DataProduct) => {
    const productExists = cart.some((cartProduct) => cartProduct.id === Product.id);
    if (!productExists) {
      toast('Esse produto n??o est?? no carrinho!');
      return;
    }

    const updatedCart = cart.filter((cartItem) => cartItem.id !== Product.id);
    setCart(updatedCart);
    localStorage.setItem('@Nexfar:cart', JSON.stringify(updatedCart));

    toast('Removido produto do carrinho!');
  };

  const removeQtdItemCart = (Product:DataProduct) => {
    const productExistInCart = cart.find((item) => item.id === Product.id);

    if (!productExistInCart) {
      toast('Produto n??o est?? adicionado no carrinho!');
      return;
    }

    if (productExistInCart.quantityCart === 1) {
      removeProduct(Product);
      return;
    }

    const updatedCart = cart.map((cartItem) => (cartItem.id === Product.id ? {
      ...cartItem,
      quantityCart: Number(cartItem.quantityCart) - 1,
    } : cartItem));

    setCart(updatedCart);
    localStorage.setItem('@Nexfar:cart', JSON.stringify(updatedCart));
    toast('Alterado quantidade do produto no carrinho!');
  };

  const cleanCart = () => {
    localStorage.removeItem('@Nexfar:cart');
    localStorage.removeItem('@Nexfar:products');
    setCart([]);
    toast('Carrinho limpado!');
  };

  return (
    <CartContext.Provider value={{
      cart, addProduct, removeProduct, removeQtdItemCart, cleanCart,
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
