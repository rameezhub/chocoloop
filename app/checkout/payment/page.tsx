"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/app/lib/client";

export default function PaymentPage() {
  const params = useSearchParams();
  const router = useRouter();

  const total = Number(params.get("total"));
  const paymentMethod = params.get("method") || "UPI";

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  async function payNow() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    // Get cart
    const { data: cart } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id);

    if (!cart || cart.length === 0) {
      alert("Cart is empty");
      setLoading(false);
      return;
    }

    // Create Order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        total,
        payment_method: paymentMethod,
        payment_status: "Paid",
      })
      .select()
      .single();

    if (orderError) {
      console.error(orderError);
      alert(orderError.message);
      setLoading(false);
      return;
    }

    // Get products for price lookup
    const { data: products } = await supabase
      .from("products")
      .select("*");

    const items = cart.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price:
        products?.find((p: any) => p.id === item.product_id)?.price || 0,
    }));

    // Insert order items
    const { error: itemError } = await supabase
      .from("order_items")
      .insert(items);

    if (itemError) {
      console.error(itemError);
      alert(itemError.message);
      setLoading(false);
      return;
    }

    // Empty Cart
    await supabase
      .from("cart")
      .delete()
      .eq("user_id", user.id);

    alert("🎉 Payment Successful!");

    router.push("/orders");
  }

  return (
    <main className="min-h-screen bg-[#140D08] flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-[#20130B] border border-yellow-500/20 rounded-3xl p-10 text-white">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Secure Checkout
        </h1>

        <p className="text-gray-400 mb-6">
          Payment Method : {paymentMethod}
        </p>

        <input
          placeholder="Card Holder Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140D08] border border-gray-700 mb-4"
        />

        <input
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140D08] border border-gray-700 mb-4"
        />

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="p-4 rounded-xl bg-[#140D08] border border-gray-700"
          />

          <input
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="p-4 rounded-xl bg-[#140D08] border border-gray-700"
          />

        </div>

        <button
          onClick={payNow}
          disabled={loading}
          className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl"
        >
          {loading ? "Processing Payment..." : `Pay ₹${total}`}
        </button>

      </div>
    </main>
  );
}