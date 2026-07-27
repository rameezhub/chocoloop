import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({
  product,
}: {
  product: any;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <Image
        src={`/images/${product.image}`}
        alt={product.product_name}
        width={500}
        height={350}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-black">
          {product.product_name}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-amber-700">
            ₹{product.price}
          </span>

        </div>

        <AddToCartButton productId={product.id} />

      </div>
    </div>
  );
}