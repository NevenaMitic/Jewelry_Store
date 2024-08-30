"use client";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();  // Dobija trenutnog korisnika
  const cart = useCart(); // Dobija informacije o korpi

   // Računa ukupnu cenu artikala u korpi
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  // Zaokružuje ukupnu cenu na dve decimale
  const totalRounded = parseFloat(total.toFixed(2));

  // Priprema podatke o kupcu
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  // Funkcija koja se poziva pri kliku na dugme "Checkout"
  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/login");
      } else { // Ako je korisnik prijavljen, šalje zahtev za kreiranje naloga za naplatu
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url; // Preusmerava korisnika na stranicu za plaćanje
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20  py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold font-playfair text-grey-2">Shopping Cart</p>
        <hr className="my-6" />

        {/* Proverava da li je korpa prazna */}
        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold font-playfair">Your shopping bag is empty!</p>
        ) : (
          <div>
            {/* Prikazuje sve artikle u korpi */}
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col font-noto max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between">
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.size && (
                      <p className="text-small-medium text-grey-2">Size: {cartItem.size}</p>
                    )}
                    <p className="text-small-medium">{cartItem.item.price} EUR</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-beige-2 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-beige-2 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Prikazuje sartžaj korpe */}
      <div className="w-1/3 max-lg:w-full font-noto flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <div className="flex justify-between text-grey-2 text-heading4-bold">
          <span>Summary: </span>
          <span>{`${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"}`}
          </span>
        </div>

        <div className="flex justify-between text-body-semibold">
          <span>Total Amount:</span>
          <span>{totalRounded} EUR</span>
        </div>
        <button
          className="border rounded-3xl text-body-bold font-noto bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
        Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;