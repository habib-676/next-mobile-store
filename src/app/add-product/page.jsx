import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

// Server action to handle form submission
async function addProduct(formData) {
  "use server";

  const newProduct = {
    brand: formData.get("brand"),
    model: formData.get("model"),
    series: formData.get("series"),
    image: formData.get("image"),
    release_year: Number(formData.get("release_year")),
    chip_set: formData.get("chip_set"),
    display: formData.get("display"),
    camera: formData.get("camera"),
    battery: formData.get("battery"),
    price_bdt: Number(formData.get("price_bdt")),
  };

  console.log("Product submitted:", newProduct);

  const mobilesCollection = dbConnect(collectionNames.mobilesCollection);
  const result = await mobilesCollection.insertOne(newProduct);
  console.log(result);
  revalidatePath("/products");
}

export default function AddProduct() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-32 pb-8 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-base-200 p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>

        <form action={addProduct} className="space-y-5">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="brand">
              Brand
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="Xiaomi"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="model">
              Model
            </label>
            <input
              id="model"
              name="model"
              type="text"
              placeholder="Xiaomi 15 Ultra"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Series */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="series">
              Series
            </label>
            <input
              id="series"
              name="series"
              type="text"
              placeholder="Xiaomi 15"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://i.ibb.co.com/d0JNDQCz/Xiaomi-15-Ultra.png"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Release Year */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="release_year"
            >
              Release Year
            </label>
            <input
              id="release_year"
              name="release_year"
              type="number"
              placeholder="2025"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Chipset */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="chip_set"
            >
              Chipset
            </label>
            <input
              id="chip_set"
              name="chip_set"
              type="text"
              placeholder="Snapdragon 8 Elite"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Display */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="display">
              Display
            </label>
            <input
              id="display"
              name="display"
              type="text"
              placeholder="6.73-inch QHD+ AMOLED"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Camera */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="camera">
              Camera
            </label>
            <input
              id="camera"
              name="camera"
              type="text"
              placeholder="200MP quad camera"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Battery */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="battery">
              Battery
            </label>
            <input
              id="battery"
              name="battery"
              type="text"
              placeholder="5410 mAh"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Price */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="price_bdt"
            >
              Price (BDT)
            </label>
            <input
              id="price_bdt"
              name="price_bdt"
              type="number"
              placeholder="165000"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-white font-medium hover:opacity-90"
          >
            Add Mobile
          </button>
        </form>
      </div>
    </div>
  );
}
