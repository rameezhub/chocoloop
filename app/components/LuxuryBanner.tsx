import Link from "next/link";

export default function LuxuryBanner() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-chocolate.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gold Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#140D08]/95 via-[#140D08]/70 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] border border-yellow-500/20 bg-white/5 backdrop-blur-md p-12 lg:p-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <div>
              <span className="inline-block px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                Premium Collection
              </span>

              <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">
                Indulge in
                <span className="text-yellow-400"> Luxury </span>
                Chocolate
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-300 max-w-xl">
                Experience handcrafted Belgian chocolates made with the
                world's finest cocoa, roasted nuts and luxurious ingredients.
                Every bite is designed to create unforgettable moments.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/shop"
                  className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300 shadow-xl"
                >
                  Shop Now →
                </Link>

                <Link
                  href="/about"
                  className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition duration-300"
                >
                  Learn More
                </Link>

              </div>
            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-[#20120A]/90 border border-yellow-500/20 p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">🍫</div>

                <h3 className="text-4xl font-black text-yellow-400">
                  25+
                </h3>

                <p className="mt-2 text-gray-300">
                  Premium Flavours
                </p>

              </div>

              <div className="rounded-3xl bg-[#20120A]/90 border border-yellow-500/20 p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">⭐</div>

                <h3 className="text-4xl font-black text-yellow-400">
                  4.9
                </h3>

                <p className="mt-2 text-gray-300">
                  Customer Rating
                </p>

              </div>

              <div className="rounded-3xl bg-[#20120A]/90 border border-yellow-500/20 p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">🎁</div>

                <h3 className="text-4xl font-black text-yellow-400">
                  Luxury
                </h3>

                <p className="mt-2 text-gray-300">
                  Gift Packaging
                </p>

              </div>

              <div className="rounded-3xl bg-[#20120A]/90 border border-yellow-500/20 p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">🚚</div>

                <h3 className="text-4xl font-black text-yellow-400">
                  Fresh
                </h3>

                <p className="mt-2 text-gray-300">
                  Fast Delivery
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}