"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/client";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    if (!user) {
      setLoading(false);
      return;
    }

    const { data: cart, error: cartError } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id);

    if (cartError) {
      console.error(cartError);
      setLoading(false);
      return;
    }

    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*");

    if (productsError) {
      console.error(productsError);
      setLoading(false);
      return;
    }

    const mergedCart =
      cart?.map((item: any) => ({
        ...item,
        product: products?.find((p: any) => p.id === item.product_id),
      })) || [];

    setCartItems(mergedCart);
    setLoading(false);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  if (loading) {
    return (
      <main className="min-h-screen bg-[#140D08] flex items-center justify-center text-white text-2xl">
        Loading...
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#140D08] flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Please login first.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#140D08] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          🛒 Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex gap-6 items-center rounded-2xl border border-yellow-500/20 bg-[#20130B] p-6"
                >
                  <Image
                    src={`/images/${item.product?.image}`}
                    alt={item.product?.product_name || "Product"}
                    width={120}
                    height={120}
                    className="rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                      {item.product?.product_name}
                    </h2>

                    <p className="mt-2 text-gray-400">
                      {item.product?.description}
                    </p>

                    <p className="mt-4 text-2xl font-bold text-yellow-400">
                      ₹{item.product?.price}
                    </p>

                    <p className="mt-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400">
                      Subtotal
                    </p>

                    <h2 className="text-2xl font-bold text-yellow-400">
                      ₹{(item.product?.price || 0) * item.quantity}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#20130B] border border-yellow-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

              <div>
                <p className="text-gray-400 text-lg">
                  Grand Total
                </p>

                <h2 className="text-5xl font-bold text-yellow-400 mt-2">
                  ₹{total}
                </h2>
              </div>

              <Link href="/checkout">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition">
                  Proceed To Checkout →
                </button>
              </Link>

            </div>
          </>
        )}

      </div>
    </main>
  );
}