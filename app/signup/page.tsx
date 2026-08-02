"use client";

import { useState } from "react";
import { supabase } from "../lib/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signup() {
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");

    router.push("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#140D08] px-4">
      <div className="bg-[#24170F] p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Create Account
        </h1>

        <input
          className="w-full p-4 rounded-xl mb-4 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-4 rounded-xl mb-4 text-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-4 rounded-xl mb-6 text-black"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-yellow-500 py-4 rounded-xl font-semibold text-black"
        >
          Create Account
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?
        </p>

        <button
          onClick={() => router.push("/login")}
          className="w-full mt-3 border border-yellow-500 text-yellow-400 py-3 rounded-xl"
        >
          Login
        </button>

      </div>
    </main>
  );
}