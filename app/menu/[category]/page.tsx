
"use client";

import { useParams } from "next/navigation";

const menuItems = [
  { name: "Chicken Fajita Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Venue Special Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Bone Fire Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Chicken Tikka Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Chicken Supreme Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Cheese Lover Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Chicken Euro Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },
  { name: "Hot & Spicy Pizza", category: "pizzas", prices: ["600", "1300", "1700"], sizes: ["Small", "Medium", "Large"] },

  { name: "Kabab Stuffer Pizza", category: "pizzas", prices: ["1450", "2000"], sizes: ["Medium", "Large"] },
  { name: "Chicken Cheese Stuffer Pizza", category: "pizzas", prices: ["1450", "2000"], sizes: ["Medium", "Large"] },
  { name: "Mughlai Pizza", category: "pizzas", prices: ["1350", "1800"], sizes: ["Medium", "Large"] },
  { name: "Behari Pizza", category: "pizzas", prices: ["1400", "1900"], sizes: ["Medium", "Large"] },
  { name: "Malai Boti Pizza", category: "pizzas", prices: ["1350", "1800"], sizes: ["Medium", "Large"] },
  { name: "Peri Peri Pizza", category: "pizzas", prices: ["1350", "1800"], sizes: ["Medium", "Large"] },

  { name: "Spin Roll", category: "sides", price: "650" },
  { name: "Chilli Milli Roll", category: "sides", price: "700" },
  { name: "Behari Roll", category: "sides", price: "700" },
  { name: "Chicken Cheese Stick", category: "sides", price: "650" },
  { name: "Pizza Sandwich", category: "sides", price: "700" },

  { name: "Petty Burger", category: "burgers", price: "420" },
  { name: "Filet Burger", category: "burgers", price: "480" },
  { name: "Zinger Burger", category: "burgers", price: "450" },
  { name: "Chapli Burger", category: "burgers", price: "400" },

  { name: "Bar BQ Fries", category: "fries", price: "650" },
  { name: "Cheesy Mayo Fries", category: "fries", price: "650" },
  { name: "Large Fries", category: "fries", price: "400" },
  { name: "Potamatoes", category: "fries", price: "620" },

  { name: "Bar BQ Wings (10 pcs)", category: "chicken", price: "600" },
  { name: "Peri Peri Wings (10 pcs)", category: "chicken", price: "600" },
  { name: "Plain Wings (10 pcs)", category: "chicken", price: "600" },
  { name: "Hot Wings (10 pcs)", category: "chicken", price: "750" },
  { name: "Nuggets (10 pcs)", category: "chicken", price: "580" },
  { name: "Chicken Strips (6 pcs)", category: "chicken", price: "650" },

  { name: "Special Pasta", category: "pastas", price: "700" },
  { name: "Flaming Pasta", category: "pastas", price: "730" },
  { name: "Behari Pasta", category: "pastas", price: "850" },

  { name: "1.5 Liter", category: "drinks", price: "220" },
  { name: "0.5 Liter", category: "drinks", price: "120" },
  { name: "Water (L)", category: "drinks", price: "120" },
  { name: "Water (S)", category: "drinks", price: "60" },
  { name: "Dip Sauce", category: "drinks", price: "80" },
];

export default function CategoryPage() {
  const params = useParams();
  const category = String(params.category || "").toLowerCase();

  const items = menuItems.filter(
    (item) => item.category === category
  );

  const title =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="min-h-screen bg-[#F8F7F4] px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-bold uppercase tracking-widest text-[#F4A11A]">
          PIZZA VENUE
        </p>

        <h1 className="text-4xl font-extrabold text-[#C62828] md:text-5xl">
          {title}
        </h1>

        <p className="mt-3 text-gray-600">
          Explore our menu and prices.
        </p>

        {items.length === 0 ? (
          <p className="mt-10 rounded-xl bg-white p-6 text-gray-600">
            No items found in this category.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-[#FFF5E8]">
                  <span className="text-4xl">🍽️</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  {item.name}
                </h2>

                {item.prices && item.sizes ? (
                  <div className="mt-4 space-y-2">
                    {item.sizes.map((size, index) => (
                      <div
                        key={size}
                        className="flex justify-between border-b border-gray-100 py-2"
                      >
                        <span className="text-gray-600">{size}</span>
                        <span className="font-bold text-[#C62828]">
                          Rs. {item.prices![index]}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-lg font-extrabold text-[#C62828]">
                    Rs. {item.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}