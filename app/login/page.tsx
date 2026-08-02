"use client";

import { useState } from "react";
import { supabase } from "../lib/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome Back!");

    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#140D08] px-4">
      <div className="bg-[#24170F] p-10 rounded-3xl w-[420px] shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Login
        </h1>

        <input
          className="w-full p-4 rounded-xl mb-4 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-4 rounded-xl mb-6 text-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-yellow-500 py-4 rounded-xl font-semibold mb-4"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mb-3">
          Don't have an account?
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="w-full border border-yellow-500 text-yellow-400 py-4 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}