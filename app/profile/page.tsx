import { redirect } from "next/navigation";
import { createClient } from "../lib/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#140D08] text-white flex items-center justify-center">
      <div className="bg-[#24170F] p-10 rounded-3xl w-[500px] text-center shadow-2xl">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Welcome 🍫
        </h1>

        <p className="text-lg mb-3">
          <strong>Email:</strong>
        </p>

        <p className="text-yellow-300 break-all">
          {user.email}
        </p>
      </div>
    </main>
  );
}