"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky font-playfair text-grey-2 top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-black ${pathname === "/" && "text-beige-2"
            }`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/login"}
          className={`hover:text-black ${pathname === "/wishlist" && "text-beige-1"
            }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/login"}
          className={`hover:text-black ${pathname === "/orders" && "text-beige-1"
            }`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 border font-playfair border-grey-2 px-3 py-1 items-center rounded-xl w-full max-w-[500px]">
        <input
          className="outline-none w-full max-w-[100%]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && query !== "") {
              router.push(`/search/${query}`);
            }
          }}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-beige-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 font-noto rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">{cart.cartItems.length}</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-beige-1">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/login"}
              className="hover:text-beige-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/login"}
              className="hover:text-beige-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart {cart.cartItems.length}</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/login" />
        ) : (
          <Link href="/login">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;