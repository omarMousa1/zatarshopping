import { store } from "./store";

export const useUpdateQuantity = () => {
  const cart = store((state) => state.cart);
  const updateCartItemQuantity = store((state) => state.updateCartItemQuantity);

  const increaseQuantity = async (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateCartItemQuantity(itemId, item.quantity + 1);
    }
  };

  const decreaseQuantity = async (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(itemId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      updateCartItemQuantity(itemId, 0);
    }
  };

  return { increaseQuantity, decreaseQuantity };
};
