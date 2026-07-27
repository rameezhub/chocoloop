export default function OurStory() {
  return (
    <section
      id="our-story"
      className="py-28 bg-gradient-to-b from-[#140D08] via-[#1A100A] to-[#140D08]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Our Story
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white">
            Crafted for
            <span className="text-yellow-400"> Moments </span>
            That Matter
          </h2>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-9">
            Every ChocoLoop chocolate begins with carefully selected Belgian
            cocoa beans, artisan techniques, roasted nuts and luxurious
            ingredients to create unforgettable moments in every bite.
          </p>

        </div>

        {/* Large Story Grid */}

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">

          {/* Story Image */}

          <div className="group overflow-hidden rounded-3xl border border-yellow-500/20">

            <img
              src="/images/story1.jpeg"
              alt=""
              className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Story Text */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">
              Premium Belgian Cocoa,
              <br />
              Crafted by Passion.
            </h3>

            <p className="mt-8 text-gray-400 text-lg leading-9">
              Every chocolate starts with imported Belgian cocoa and the finest
              natural ingredients sourced with exceptional care.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-9">
              Our chocolatiers handcraft every batch using traditional methods,
              ensuring smooth texture, rich flavour and a luxurious finish that
              melts perfectly.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="rounded-2xl bg-[#23140B] p-6 border border-yellow-500/10">
                <h4 className="text-3xl font-bold text-yellow-400">
                  100%
                </h4>

                <p className="mt-2 text-gray-400">
                  Belgian Cocoa
                </p>
              </div>

              <div className="rounded-2xl bg-[#23140B] p-6 border border-yellow-500/10">
                <h4 className="text-3xl font-bold text-yellow-400">
                  15+
                </h4>

                <p className="mt-2 text-gray-400">
                  Artisan Recipes
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Gallery */}

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="group rounded-3xl overflow-hidden border border-yellow-500/20">
            <img
              src="/images/story2.jpeg"
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group rounded-3xl overflow-hidden border border-yellow-500/20">
            <img
              src="/images/story3.jpeg"
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group rounded-3xl overflow-hidden border border-yellow-500/20">
            <img
              src="/images/story4.jpeg"
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group rounded-3xl overflow-hidden border border-yellow-500/20">
            <img
              src="/images/story5.jpeg"
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group rounded-3xl overflow-hidden border border-yellow-500/20">
            <img
              src="/images/story6.jpeg"
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

        </div>

        {/* Quote */}

        <div className="mt-20 rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-[#23140B] to-[#2F1B0F] p-12 text-center">

          <h3 className="text-4xl font-bold text-white leading-tight">
            "Luxury isn't created in a factory.
            <br />
            It's crafted by people who love chocolate."
          </h3>

          <p className="mt-6 text-yellow-400 uppercase tracking-[0.3em] text-sm">
            ChocoLoop Artisan Collection
          </p>

        </div>

      </div>
    </section>
  );
}