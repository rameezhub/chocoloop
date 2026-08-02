"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/client";

export default function AdminLogin() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth() {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (isSignup) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Account created successfully!");
      setIsSignup(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");
    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#140D08] px-4">
      <div className="w-full max-w-md bg-[#24170F] rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-yellow-400 text-center mb-8">
          {isSignup ? "Create Account" : "Admin Login"}
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-white text-black px-4 py-3 mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-white text-black px-4 py-3 mb-6"
        />

        <button
          onClick={handleAuth}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl mb-4"
        >
          {isSignup ? "Create Account" : "Login"}
        </button>

        <button
          onClick={() => setIsSignup(!isSignup)}
          className="w-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-3 rounded-xl"
        >
          {isSignup
            ? "Already have an account? Login"
            : "Create New Account"}
        </button>

      </div>
    </main>
  );
}