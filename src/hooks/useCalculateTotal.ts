import { store } from "./store";

export const useCalculateTotal = () => {
  const cart = store((state) => state.cart);

  const calTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return { calTotal };
};
