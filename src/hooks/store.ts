import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebase/firebaseConfig";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  loadCart: () => void;
  addToCart: (item: CartItem) => void;
  saveCart: () => void;
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  loadCart: async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartRef = collection(db, `users/${user.uid}/cart`);
      const cartDocs = await getDocs(cartRef);

      const cartItems = cartDocs.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.data().id,
          title: data.title,
          price: data.price,
          quantity: data.quantity,
        } as CartItem;
      });

      set({ cart: cartItems });
    }
  },

  addToCart: async (item: CartItem) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartRef = doc(db, `users/${user.uid}/cart`, String(item.id));
      const cartDocs = await getDoc(cartRef);

      if (cartDocs.exists()) {
        const existingData = cartDocs.data() as CartItem;
        const newQuantity = existingData.quantity + 1;

        const updatedCart = get().cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        );

        set({ cart: updatedCart });
        await setDoc(cartRef, { quantity: newQuantity }, { merge: true });
      } else {
        set((state) => ({
          cart: [...state.cart, { ...item, quantity: 1 }],
        }));

        await setDoc(cartRef, { ...item, quantity: 1 });
      }
    }
  },

  saveCart: async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartItems = get().cart;
      for (const item of cartItems) {
        const cartRef = doc(db, `users/${user.uid}/cart`, String(item.id));
        await setDoc(cartRef, item, { merge: true });
      }
    }
  },

  updateCartItemQuantity: async (itemId: number, newQuantity: number) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartRef = doc(db, `users/${user.uid}/cart`, String(itemId));

      if (newQuantity > 0) {
        await setDoc(cartRef, { quantity: newQuantity }, { merge: true });
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      } else {
        await deleteDoc(cartRef);
        set((state) => ({
          cart: state.cart.filter((item) => item.id === itemId),
        }));
      }
    }
  },

  clearCart: async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartItems = get().cart;
      for (const item of cartItems) {
        const cartRef = doc(db, `users/${user.uid}/cart`, String(item.id));
        await deleteDoc(cartRef);
      }
      set({ cart: [] });
    }
  },
}));
