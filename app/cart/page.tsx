export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#140D08] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          🛒 Shopping Cart
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Your cart is empty.
        </p>
      </div>
    </main>
  );
}