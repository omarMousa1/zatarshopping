import { store } from "./store";

export const useUpdateQuantity = () => {
  const cart = store((state) => state.cart);
  const updateCartItemQuantity = store((state) => state.updateCartItemQuantity);

  const increaseQuantity = async (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      await updateCartItemQuantity(itemId, item.quantity + 1);
    }
  };

  const decreaseQuantity = async (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      await updateCartItemQuantity(itemId, item.quantity - 1);
    }
  };

  return { increaseQuantity, decreaseQuantity };
};
