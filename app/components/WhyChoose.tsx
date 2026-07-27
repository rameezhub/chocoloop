export default function WhyChoose() {
  const features = [
    {
      icon: "🍫",
      title: "Premium Belgian Chocolate",
      description:
        "Made using world-class Belgian cocoa with a rich, smooth taste that melts perfectly.",
    },
    {
      icon: "🌿",
      title: "Natural Ingredients",
      description:
        "Prepared with handpicked cocoa beans, roasted nuts, fresh dairy, vanilla and premium ingredients.",
    },
    {
      icon: "👨‍🍳",
      title: "Handcrafted Excellence",
      description:
        "Every chocolate is crafted by skilled chocolatiers with attention to every detail.",
    },
    {
      icon: "🎁",
      title: "Luxury Gift Boxes",
      description:
        "Elegant packaging designed to make every celebration and gift unforgettable.",
    },
    {
      icon: "🚚",
      title: "Fresh Delivery",
      description:
        "Packed carefully and delivered fresh to preserve taste, aroma and texture.",
    },
    {
      icon: "❤️",
      title: "Made With Passion",
      description:
        "Every ChocoLoop creation is designed to bring joy, happiness and memorable moments.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-28 bg-[#140D08] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Why Choose ChocoLoop
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">
            Experience the
            <span className="text-yellow-400"> Luxury </span>
            Difference
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            We believe chocolate is more than a dessert—it's an experience.
            Every bite is carefully crafted to deliver elegance, flavour and
            unforgettable happiness.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#22140C] to-[#1A100A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_0_40px_rgba(255,193,7,0.15)]"
            >
              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-4xl shadow-lg">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-8">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center text-yellow-400 font-semibold tracking-wide">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-[40px] overflow-hidden bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-[1px]">
          <div className="rounded-[40px] bg-[#180F09] px-10 py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-4xl font-bold">
                Crafted for Every Celebration
              </h3>

              <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-8">
                Whether it's birthdays, anniversaries, weddings or festive
                occasions, ChocoLoop transforms every celebration into a sweet
                memory with handcrafted premium chocolates.
              </p>
            </div>

            <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300 shadow-lg">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "25+", label: "Chocolate Varieties" },
            { number: "100%", label: "Belgian Cocoa" },
            { number: "4.9★", label: "Customer Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center rounded-3xl border border-yellow-500/20 bg-[#1B110B] py-10 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-5xl font-black text-yellow-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-400 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}