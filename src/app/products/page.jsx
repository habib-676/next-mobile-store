import dbConnect, { collectionNames } from "@/lib/dbConnect";
import Link from "next/link";

export default async function page() {
  const mobilesCollection = await dbConnect(collectionNames.mobilesCollection);
  const mobileData = await mobilesCollection.find({}).toArray();

  return (
    <div className="py-20 px-6">
      <h1 className="text-3xl font-bold text-center my-10">
        Latest Smartphones
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileData.map((phone, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className=" shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-52 ">
              <img
                src={phone.image}
                alt={phone.model}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold">
                {phone.brand} {phone.model}
              </h2>
              <p className=" text-sm">{phone.series}</p>
              <p className=" mt-2 font-medium">
                ৳ {phone.price_bdt.toLocaleString()}
              </p>

              {/* View Details Button */}
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
                <Link href={`/products/${phone._id}`}> View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
