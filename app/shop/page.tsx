import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function ShopPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#140D08] text-white">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#140D08] via-[#24170F] to-[#3B2316]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#2A1B12] px-5 py-3 font-semibold text-yellow-400 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black"
        >
          ← Back to Home
        </Link>

        <div className="mb-14 mt-8 text-center">
          <h1 className="text-6xl font-extrabold text-yellow-400">
            🍫 ChocoLoop
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Luxury Chocolate Collection
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products?.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-yellow-700/20 bg-[#24170F] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_25px_60px_rgba(255,193,7,0.18)]"
            >
              <div className="overflow-hidden">
                <img
                  src={`/images/${product.image}`}
                  alt={product.product_name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex h-[250px] flex-col p-6">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {product.product_name}
                  </h2>

                  <p className="mt-3 min-h-[56px] text-lg text-gray-400 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-yellow-400">
                    ₹{product.price}
                  </span>

                  <button
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 px-6 py-3 font-bold text-[#1a120c] shadow-lg shadow-yellow-600/30 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      🛒 Add to Cart
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 hover:translate-x-0"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}