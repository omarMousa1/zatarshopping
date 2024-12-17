import { store } from "./store";

export const useQuantityTotal = () => {
  const cart = store((state) => state.cart);

  const quantityTotal = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return { quantityTotal };
};
