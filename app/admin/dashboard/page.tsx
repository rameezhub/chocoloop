"use client";

import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
  Plus,
  ClipboardList,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-[#140D08] text-white">

      {/* Sidebar */}
      <aside className="w-72 bg-[#1B120C] border-r border-[#3a2517] p-6">

        <h1 className="text-3xl font-bold text-yellow-400 mb-12">
          🍫 ChocoLoop
        </h1>

        <nav className="space-y-3">

          <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-yellow-500 text-black font-semibold">
            <LayoutDashboard size={22} />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-[#2d1b12] transition">
            <Package size={22} />
            Products
          </button>

          <button className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-[#2d1b12] transition">
            <Plus size={22} />
            Add Product
          </button>

          <button className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-[#2d1b12] transition">
            <ShoppingCart size={22} />
            Orders
          </button>

          <button className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-[#2d1b12] transition">
            <Users size={22} />
            Customers
          </button>

          <button className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-[#2d1b12] transition">
            <ClipboardList size={22} />
            Reports
          </button>

        </nav>

        <button className="mt-16 flex items-center gap-3 text-red-400 hover:text-red-300">
          <LogOut size={20} />
          Logout
        </button>

      </aside>

      {/* Main */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold text-yellow-400">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back, Admin 👋
            </p>
          </div>

          <div className="bg-[#24170F] px-6 py-3 rounded-xl">
            Admin Panel
          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-[#24170F] rounded-3xl p-7 shadow-lg">
            <Package className="text-yellow-400 mb-5" size={34} />
            <p className="text-gray-400">Products</p>
            <h2 className="text-5xl font-bold mt-2">6</h2>
          </div>

          <div className="bg-[#24170F] rounded-3xl p-7 shadow-lg">
            <ShoppingCart className="text-green-400 mb-5" size={34} />
            <p className="text-gray-400">Orders</p>
            <h2 className="text-5xl font-bold mt-2">0</h2>
          </div>

          <div className="bg-[#24170F] rounded-3xl p-7 shadow-lg">
            <Users className="text-blue-400 mb-5" size={34} />
            <p className="text-gray-400">Customers</p>
            <h2 className="text-5xl font-bold mt-2">0</h2>
          </div>

          <div className="bg-[#24170F] rounded-3xl p-7 shadow-lg">
            <IndianRupee className="text-pink-400 mb-5" size={34} />
            <p className="text-gray-400">Revenue</p>
            <h2 className="text-5xl font-bold mt-2">₹0</h2>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-2xl p-6 transition">
              ➕ Add New Product
            </button>

            <button className="bg-[#24170F] hover:bg-[#342016] rounded-2xl p-6 transition">
              📦 Manage Products
            </button>

            <button className="bg-[#24170F] hover:bg-[#342016] rounded-2xl p-6 transition">
              🛒 View Orders
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}