"use client";

import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  function login() {
    localStorage.setItem("admin", "true");
    alert("Login Successful!");
    router.push("/admin/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#140D08] px-4">
      <div className="w-full max-w-md bg-[#24170F] rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-yellow-400 text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full rounded-xl bg-white text-black px-4 py-3 mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl bg-white text-black px-4 py-3 mb-6"
        />

        <button
          onClick={login}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl"
        >
          Login
        </button>

      </div>
    </main>
  );
}