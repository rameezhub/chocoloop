"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OrdersPage() {
  const router = useRouter();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data: orderData, error } = await supabase
      .from("orders")
      .select(`
        *,
        order_items (
          quantity,
          price,
          products (
            product_name,
            image
          )
        )
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Orders error:", error);
      setLoading(false);
      return;
    }

    setOrders(orderData || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#140D08] flex items-center justify-center text-white">
        <p className="text-2xl">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#140D08] text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 rounded-xl border border-yellow-500/30 bg-[#20130B] px-5 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
        >
          ← Back to Home
        </Link>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="rounded-2xl border border-yellow-500/20 bg-[#20130B] p-8">
            <p className="text-gray-400 text-xl">
              No orders found.
            </p>

            <Link
              href="/shop"
              className="inline-block mt-6 rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition"
            >
              Start Shopping →
            </Link>
          </div>
        ) : (
          orders.map((order: any) => (
            <div
              key={order.id}
              className="bg-[#20130B] border border-yellow-500/20 rounded-2xl p-6 mb-8"
            >

              <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">

                <div>
                  <h2 className="text-2xl font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Payment: {order.payment_method}
                  </p>

                  <p className="text-gray-400">
                    Status: {order.payment_status}
                  </p>

                </div>

                <h2 className="text-3xl font-bold text-yellow-400">
                  ₹{order.total}
                </h2>

              </div>

              <div className="space-y-4">

                {order.order_items?.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-[#140D08] rounded-xl p-4 flex items-center justify-between gap-4"
                    >

                      <div className="flex items-center gap-4">

                        {item.products?.image && (
                          <img
                            src={`/images/${item.products.image}`}
                            alt={item.products.product_name || "Product"}
                            className="w-20 h-20 rounded-xl object-cover"
                          />
                        )}

                        <div>
                          <h3 className="text-xl font-bold">
                            {item.products?.product_name}
                          </h3>

                          <p className="text-gray-400">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                      </div>

                      <p className="text-yellow-400 font-bold text-xl">
                        ₹{item.price}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>
          ))
        )}

      </div>

    </main>
  );
}