import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto w-full px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Premium Belgian Chocolates
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl xl:text-8xl font-black leading-none text-white">
              Luxury
              <br />
              <span className="text-yellow-400">Chocolate</span>
              <br />
              Collection
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
              Discover handcrafted luxury chocolates made using the finest
              Belgian cocoa, premium roasted nuts, silky caramel and the
              highest quality ingredients for every celebration.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 px-8 py-4 font-bold text-black shadow-xl transition duration-300 hover:scale-105"
              >
                Shop Collection
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center rounded-full border border-yellow-500/40 px-8 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
              >
                View Collection
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
                <p className="mt-2 text-gray-400">Premium Flavours</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
                <p className="mt-2 text-gray-400">Belgian Cocoa</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">★4.9</h3>
                <p className="mt-2 text-gray-400">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden items-center justify-center lg:flex">
            {/* Glow */}
            <div className="absolute h-[650px] w-[650px] rounded-full bg-yellow-400/20 blur-[140px]" />

            {/* Decorative Rings */}
            <div className="absolute h-[560px] w-[560px] rounded-full border border-yellow-500/10" />
            <div className="absolute h-[480px] w-[480px] rounded-full border border-yellow-500/10" />

            <img
              src="/images/hero-chocolate.png"
              alt="Premium Belgian Chocolate"
              className="relative z-10 w-[720px] max-w-none object-contain drop-shadow-[0_40px_80px_rgba(255,193,7,0.35)] transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}