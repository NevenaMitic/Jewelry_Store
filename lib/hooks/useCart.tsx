import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// Interfejs za reprezentaciju jednog artikla u korpi
interface CartItem {
  item: ProductType; // Detalji proizvoda
  quantity: number; // Količina artikla
  size?: string; // Opciona veličina artikla

}
// Interfejs za stanje korpe
interface CartStore {
  cartItems: CartItem[];  // Lista artikala u korpi
  addItem: (item: CartItem) => void;  // Metod za dodavanje artikla u korpu
  removeItem: (idToRemove: string) => void; // Metod za uklanjanje artikla iz korpe na osnovu ID-a
   // Metod za povećanje i smanjenje količine artikla
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;   // Metod za pražnjenje korpe
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [], // Inicijalizacija korpe kao praznog niza
      addItem: (data: CartItem) => {
        const { item, quantity, size } = data; // Ekstrahovanje podataka o artiklu
        const currentItems = get().cartItems;
        const isExisting = currentItems.find(
          (cartItem) => cartItem.item._id === item._id // Provera da li artikal već postoji u korpi
        );

        if (isExisting) {
          return toast("Item already in cart");
        }

        set({ cartItems: [...currentItems, { item, quantity, size }] });
        toast.success("Item added to cart", { icon: "🛒" });
      },
      removeItem: (idToRemove: String) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Item removed from cart");
      },
      increaseQuantity: (idToIncrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Item quantity increased");
      },
      decreaseQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Item quantity decreased");
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // Ključ za lokalno skladište
      storage: createJSONStorage(() => localStorage),  // Korišćenje localStorage za čuvanje podataka
    }
  )
);

export default useCart;