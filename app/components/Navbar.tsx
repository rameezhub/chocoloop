"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/client";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (mounted) {
        setUser(user);
        setLoading(false);
      }
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/";
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-yellow-700/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          ChocoLoop
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-white">

          <Link
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:text-yellow-400 transition"
          >
            Shop
          </Link>

          <Link
            href="/cart"
            className="hover:text-yellow-400 transition"
          >
            Cart
          </Link>

          <Link
            href="/orders"
            className="hover:text-yellow-400 transition"
          >
            My Orders
          </Link>

          {!loading && (
            user ? (
              <div className="flex items-center gap-4">

                <Link
                  href="/profile"
                  className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
                >
                  👤 Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Logout
                </button>

              </div>
            ) : (
              <Link
                href="/login"
                className="hover:text-yellow-400 transition"
              >
                Login
              </Link>
            )
          )}

        </div>
      </div>
    </nav>
  );
}