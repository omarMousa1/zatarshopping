import { useCartStore } from "./useCartStore";

export const useUpdateQuantity = () => {
  const cart = useCartStore((state) => state.cart);
  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );

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
