import { getAuth } from "firebase/auth";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import React from "react";
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
  loadToCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  loadToCart: async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const cartRef = collection(db, `user/${user.uid}/cart`);
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
      const cartRef = doc(db, `user/${user.uid}/cart`, String(item.id));
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
}));
