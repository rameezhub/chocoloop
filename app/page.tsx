import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WhyChoose from "./components/WhyChoose";
import Reviews from "./components/Reviews";
import LuxuryBanner from "./components/LuxuryBanner";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#140D08] text-red-500 text-xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#140D08] text-white overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* Our Story */}
        <OurStory />

        {/* Why Choose */}
        <WhyChoose />

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Our Collection
            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black">
              Premium
              <span className="text-yellow-400"> Chocolates</span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
              Explore our handcrafted Belgian chocolates made with premium
              ingredients and luxurious flavours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <Reviews />

        {/* Luxury CTA */}
        <LuxuryBanner />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}