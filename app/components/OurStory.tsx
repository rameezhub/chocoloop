export default function OurStory() {
  const storyImages = [
    {
      src: "https://images.pexels.com/photos/5149344/pexels-photo-5149344.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Premium chocolate truffles",
    },
    {
      src: "https://images.pexels.com/photos/8627518/pexels-photo-8627518.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Handcrafted chocolate truffles",
    },
    {
      src: "https://images.pexels.com/photos/3735187/pexels-photo-3735187.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Premium chocolate bars",
    },
    {
      src: "https://images.pexels.com/photos/6167337/pexels-photo-6167337.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Luxury chocolate bars",
    },
    {
      src: "https://images.pexels.com/photos/4157763/pexels-photo-4157763.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Cocoa beans",
    },
    {
      src: "https://images.pexels.com/photos/29098395/pexels-photo-29098395.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Gourmet chocolate truffles",
    },
  ];

  const chefImages = [
    {
      src: "https://images.pexels.com/photos/6035336/pexels-photo-6035336.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Chocolatier preparing melted chocolate",
      name: "The Art of Tempering",
      description:
        "Every batch begins with patience, precision and perfectly tempered chocolate.",
    },
    {
      src: "https://images.pexels.com/photos/6036017/pexels-photo-6036017.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Chocolatier preparing chocolate molds",
      name: "Crafted by Hand",
      description:
        "Our chocolatiers carefully shape and finish every creation by hand.",
    },
    {
      src: "https://images.pexels.com/photos/6036012/pexels-photo-6036012.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Chocolatier tempering chocolate",
      name: "Perfectly Finished",
      description:
        "Smooth texture, deep flavour and a luxurious finish in every bite.",
    },
  ];

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

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">

          <div className="group overflow-hidden rounded-3xl border border-yellow-500/20">
            <img
              src={storyImages[0].src}
              alt={storyImages[0].alt}
              loading="lazy"
              className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

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

        {/* Chocolate Gallery */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {storyImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-yellow-500/20"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

        {/* =============================== */}
        {/* OUR CHOCOLATIERS */}
        {/* =============================== */}

        <div className="mt-32">

          <div className="text-center mb-14">

            <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Behind The Chocolate
            </span>

            <h2 className="mt-7 text-5xl lg:text-6xl font-black text-white">
              Meet Our
              <span className="text-yellow-400"> Chocolatiers</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
              Great chocolate isn't made by machines alone. It is shaped by
              people who understand patience, precision and the beauty of
              handcrafted chocolate.
            </p>

          </div>

          {/* Chef Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {chefImages.map((chef, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#20130B] transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
              >

                <div className="overflow-hidden">

                  <img
                    src={chef.src}
                    alt={chef.alt}
                    loading="lazy"
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-7">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="h-10 w-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
                      🍫
                    </div>

                    <span className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                      ChocoLoop Artisan
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {chef.name}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    {chef.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Quote */}
        <div className="mt-24 rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-[#23140B] to-[#2F1B0F] p-12 text-center">

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