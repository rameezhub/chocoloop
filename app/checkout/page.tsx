"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/client";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data: cart } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id);

    const { data: products } = await supabase
      .from("products")
      .select("*");

    const merged =
      cart?.map((item: any) => ({
        ...item,
        product: products?.find((p: any) => p.id === item.product_id),
      })) || [];

    setCartItems(merged);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  async function payNow() {
    setLoading(true);

    router.push(
      `/checkout/payment?method=${paymentMethod}&total=${total}`
    );
  }

  return (
    <main className="min-h-screen bg-[#140D08] text-white py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          Checkout
        </h1>

        <div className="space-y-5">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#20130B] border border-yellow-500/20 rounded-xl p-5 flex justify-between"
            >
              <div>
                <h2 className="text-xl font-bold">
                  {item.product.product_name}
                </h2>

                <p className="text-gray-400">
                  Qty : {item.quantity}
                </p>
              </div>

              <div className="text-yellow-400 text-xl font-bold">
                ₹{item.product.price * item.quantity}
              </div>
            </div>
          ))}

          <div className="bg-[#20130B] rounded-xl p-6 mt-10">

            <h2 className="text-2xl font-bold mb-4">
              Payment Method
            </h2>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#140D08] border border-yellow-500"
            >
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Cash On Delivery</option>
            </select>

            <div className="mt-8 flex justify-between items-center">

              <h2 className="text-3xl font-bold">
                Total ₹{total}
              </h2>

              <button
                onClick={payNow}
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
              >
                {loading ? "Processing..." : "Proceed To Payment"}
              </button>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}