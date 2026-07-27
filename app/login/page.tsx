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
    <main className="min-h-screen flex items-center justify-center bg-[#140D08]">
      <div className="bg-[#24170F] p-10 rounded-3xl w-[420px] shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Login
        </h1>

        <input
          className="w-full p-4 rounded-xl mb-4 text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-4 rounded-xl mb-6 text-black"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-yellow-500 py-4 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}