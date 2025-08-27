import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function productDetails({ params }) {
  const p = await params;
  const mobilesCollection = dbConnect(collectionNames.mobilesCollection);
  const product = await mobilesCollection.findOne({
    _id: new ObjectId(p.id),
  });

  if (!product) {
    return <h1 className="text-center mt-20 text-2xl">Product not found</h1>;
  }
  return (
    <div className="min-h-screen  flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl w-full  rounded-2xl shadow-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            {product.brand} {product.model}
          </h1>
          <p className="">{product.series}</p>

          <div className="mt-4 space-y-2 ">
            <p>
              <strong>Release Year:</strong> {product.release_year}
            </p>
            <p>
              <strong>Chipset:</strong> {product.chip_set}
            </p>
            <p>
              <strong>Display:</strong> {product.display}
            </p>
            <p>
              <strong>Camera:</strong> {product.camera}
            </p>
            <p>
              <strong>Battery:</strong> {product.battery}
            </p>
            <p>
              <strong>Price:</strong> ৳ {product.price_bdt.toLocaleString()}
            </p>
          </div>

          <Link href="/products">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
