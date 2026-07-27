import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-yellow-700/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-4xl font-bold text-yellow-400">
          ChocoLoop
        </h1>

        <div className="flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/cart">Cart</Link>

          <Link href="/login">Login</Link>

        </div>

      </div>
    </nav>
  );
}