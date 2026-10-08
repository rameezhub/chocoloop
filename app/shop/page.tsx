import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { supabase } from "../lib/supabase";

export default async function ShopPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#140D08] text-white px-6">
        <div className="max-w-2xl w-full rounded-2xl border border-red-500/30 bg-red-950/30 p-6">
          <h1 className="text-2xl font-bold text-red-400 mb-3">
            Unable to load products
          </h1>

          <pre className="whitespace-pre-wrap text-sm text-red-200">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#140D08] via-[#24170F] to-[#3B2316] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#2A1B12] px-5 py-3 font-semibold text-yellow-400 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black"
        >
          ← Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-14 mt-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
            🍫 ChocoLoop
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Luxury Chocolate Collection
          </p>
        </div>

        {/* Product Grid */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="rounded-2xl bg-[#24170F] p-8 text-center shadow-xl">
              <div className="text-5xl mb-4">🍫</div>

              <h2 className="text-2xl font-bold text-yellow-400">
                No chocolates available
              </h2>

              <p className="mt-2 text-gray-400">
                Please check back later.
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}