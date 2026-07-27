export default function Reviews() {
  const reviews = [
    {
      name: "Sophia Johnson",
      role: "Chocolate Lover",
      rating: "★★★★★",
      review:
        "Absolutely divine! The texture is silky smooth, the flavour is rich, and every bite feels luxurious. ChocoLoop has become my favourite chocolate brand.",
    },
    {
      name: "Daniel Smith",
      role: "Food Blogger",
      rating: "★★★★★",
      review:
        "Beautiful packaging and premium taste. The truffles were perfectly balanced and made an unforgettable gift for my family.",
    },
    {
      name: "Emily Wilson",
      role: "Verified Customer",
      rating: "★★★★★",
      review:
        "From ordering to delivery, everything was flawless. Fresh chocolates, elegant presentation and exceptional quality.",
    },
    {
      name: "Michael Brown",
      role: "Dessert Enthusiast",
      rating: "★★★★★",
      review:
        "The best Belgian chocolate I've had outside Europe. Rich, creamy and incredibly satisfying. Highly recommended!",
    },
    {
      name: "Olivia Taylor",
      role: "Corporate Client",
      rating: "★★★★★",
      review:
        "Ordered gift boxes for our company event and everyone loved them. Premium quality with stunning presentation.",
    },
    {
      name: "James Anderson",
      role: "Sweet Tooth",
      rating: "★★★★★",
      review:
        "Every flavour tastes handcrafted. You can genuinely feel the quality in every bite. Worth every penny.",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-28 bg-gradient-to-b from-[#140D08] via-[#1A100A] to-[#140D08]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black">
            Loved by
            <span className="text-yellow-400"> Thousands </span>
            of Chocolate Lovers
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            Every review reflects our commitment to creating unforgettable
            chocolate experiences with premium quality and exceptional taste.
          </p>
        </div>

        {/* Review Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#24160D] to-[#1A100A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(255,193,7,0.12)]"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-black text-xl">
                  {review.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>

              <div className="mt-6 text-yellow-400 text-xl">
                {review.rating}
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Rating Banner */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-[1px]">
          <div className="rounded-[40px] bg-[#180F09] py-14 px-10 text-center">
            <h3 className="text-5xl font-black text-yellow-400">
              ★★★★★ 4.9 / 5
            </h3>

            <p className="mt-5 text-xl text-gray-300">
              Rated by more than
              <span className="text-yellow-400 font-bold"> 10,000+ </span>
              happy chocolate lovers.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <div className="px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                Premium Quality
              </div>

              <div className="px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                Fresh Delivery
              </div>

              <div className="px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                Luxury Packaging
              </div>

              <div className="px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                Belgian Chocolate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}