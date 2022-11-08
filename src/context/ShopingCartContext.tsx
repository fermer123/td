import { createContext, useContext, useState } from 'react';
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};
type CartItem = {
  id: number;
  name?: string;
  quantity: number;
};
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((e) => e.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((e) => {
      if (e.find((item) => item.id === id) == null) {
        return [...e, { id, quantity: 1 }];
      } else {
        return e.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemQuantity = (id: number) => {
    setCartItems((e) => {
      if (e.find((item) => item.id === id)?.quantity === 1) {
        return e.filter((item) => item.id !== id);
      } else {
        return e.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems((e) => {
      return e.filter((item) => item.id !== id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
