"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/client";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    setLoading(true);

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

    const { data: products, error: productError } = await supabase
      .from("products")
      .select("*");

    if (productError) {
      console.error(productError);
      setLoading(false);
      return;
    }

    const merged =
      cart?.map((item: any) => ({
        ...item,
        product: products?.find((p: any) => p.id === item.product_id),
      })) || [];

    setCartItems(merged);
    setLoading(false);
  }

  async function removeFromCart(cartId: string) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("id", cartId)
      .eq("user_id", user.id);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    setCartItems((prev) => prev.filter((item) => item.id !== cartId));
  }

  async function updateQuantity(cartId: string, currentQty: number, delta: number) {
    const newQty = currentQty + delta;

    if (newQty < 1) {
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    setUpdatingId(cartId);

    // Optimistic update
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, quantity: newQty } : item
      )
    );

    const { error } = await supabase
      .from("cart")
      .update({ quantity: newQty })
      .eq("id", cartId)
      .eq("user_id", user.id);

    if (error) {
      console.error(error);
      alert(error.message);
      // Revert on failure
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cartId ? { ...item, quantity: currentQty } : item
        )
      );
    }

    setUpdatingId(null);
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
        <h1 className="text-4xl font-bold">
          Please login first.
        </h1>
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

                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-gray-400">Quantity:</span>

                      <div className="flex items-center rounded-xl border border-yellow-500/30 overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity, -1)
                          }
                          disabled={updatingId === item.id || item.quantity <= 1}
                          className="px-3 py-1 text-lg font-bold text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          −
                        </button>

                        <span className="px-4 py-1 min-w-[3rem] text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity, 1)
                          }
                          disabled={updatingId === item.id}
                          className="px-3 py-1 text-lg font-bold text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400">
                      Subtotal
                    </p>

                    <h2 className="text-2xl font-bold text-yellow-400">
                      ₹{(item.product?.price || 0) * item.quantity}
                    </h2>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 rounded-xl border border-red-500 px-5 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-[#20130B] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-400 text-lg">
                  Grand Total
                </p>

                <h2 className="mt-2 text-5xl font-bold text-yellow-400">
                  ₹{total}
                </h2>
              </div>

              <Link href="/checkout">
                <button className="rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-yellow-400">
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