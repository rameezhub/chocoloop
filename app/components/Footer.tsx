import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0805] border-t border-yellow-500/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}

          <div>
            <h2 className="text-4xl font-black tracking-wide">
              Choco
              <span className="text-yellow-400">Loop</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Experience handcrafted Belgian chocolates made with premium cocoa,
              roasted nuts and luxurious ingredients. Every bite is crafted to
              create unforgettable memories.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1C120C] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                📷
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1C120C] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                👍
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1C120C] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                ✖
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1C120C] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-yellow-400 transition">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/cart" className="hover:text-yellow-400 transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Customer Care
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Premium Belgian Chocolate</li>
              <li>Luxury Gift Boxes</li>
              <li>Fresh Delivery</li>
              <li>Secure Payments</li>
              <li>24×7 Customer Support</li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              Stay Updated
            </h3>

            <p className="text-gray-400 leading-7">
              Subscribe to receive exclusive offers, new collections and luxury
              chocolate updates.
            </p>

            <div className="mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#1B110B] border border-yellow-500/20 px-6 py-4 outline-none focus:border-yellow-400"
              />

              <button className="mt-4 w-full rounded-full bg-yellow-400 text-black font-bold py-4 hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-yellow-500/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} ChocoLoop. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-500">
            <Link href="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}