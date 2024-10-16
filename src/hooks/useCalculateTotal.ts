import { useCartStore } from "./useCartStore";

export const useCalculateTotal = () => {
  const cart = useCartStore((state) => state.cart);

  const calTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return { calTotal };
};
