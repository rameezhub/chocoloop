"use client";

import { supabase } from "../lib/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  const router = useRouter();

  async function addToCart() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("User:", user);

    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    const { data: existing, error: existingError } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", productId)
      .maybeSingle();

    console.log({ existing, existingError });

    let result;

    if (existing) {
      result = await supabase
        .from("cart")
        .update({
          quantity: existing.quantity + 1,
        })
        .eq("id", existing.id);
    } else {
      result = await supabase.from("cart").insert({
        user_id: user.id,
        product_id: productId,
        quantity: 1,
      });
    }

    console.log(result);

    if (result.error) {
      console.error(result.error);
      toast.error(result.error.message);
      return;
    }

    toast.success("Added to Cart 🍫");
    router.refresh();
  }

  return (
    <button
      onClick={addToCart}
      className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
    >
      Add to Cart
    </button>
  );
}