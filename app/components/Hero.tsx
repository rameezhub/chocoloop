import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#140D08]">
      {/* Background Glow */}
      <div className="absolute -top-32 right-[-150px] h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-[180px]" />
      <div className="absolute -bottom-32 left-[-150px] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="z-10">
            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Premium Belgian Chocolate
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl xl:text-7xl">
              Crafted for
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Pure Indulgence
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
              Experience handcrafted Belgian chocolates made with premium cocoa,
              roasted nuts and luxurious ingredients. Every bite is designed to
              create unforgettable moments.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/shop"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105"
              >
                Shop Now →
              </Link>

              <Link
                href="#our-story"
                className="rounded-full border border-yellow-500/40 px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:bg-yellow-400/10"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute h-[520px] w-[520px] rounded-full bg-yellow-400/20 blur-[120px]" />

            {/* Floating Chocolate */}
            <img
              src="/images/hero-chocolate.png"
              alt="ChocoLoop Premium Chocolate"
              className="relative z-10 w-full max-w-[620px] animate-[float_6s_ease-in-out_infinite] object-contain drop-shadow-[0_40px_80px_rgba(255,193,7,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}