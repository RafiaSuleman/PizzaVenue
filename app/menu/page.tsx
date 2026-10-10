
import Link from "next/link";

type MenuItem = {
  name: string;
  category: string;
  slug: string;
  price: string;
  keywords?: string;
};

const menuItems: MenuItem[] = [
  ...[
    "Chicken Fajita",
    "Venue Special",
    "Bone Fire",
    "Chicken Tikka",
    "Chicken Supreme",
    "Cheese Lover",
    "Chicken Euro",
    "Hot & Spicy",
  ].map((name) => ({
    name,
    category: "Pizzas",
    slug: "pizzas",
    price: "Small Rs 600 • Medium Rs 1,300 • Large Rs 1,700",
    keywords: "pizza regular small medium large",
  })),

  ...[
    ["Kabab Stuffer", "Rs 1,450 / Rs 2,000"],
    ["Chicken Cheese Stuffer", "Rs 1,450 / Rs 2,000"],
    ["Mughlai Stuffer", "Rs 1,350 / Rs 1,800"],
    ["Behari Stuffer", "Rs 1,400 / Rs 1,900"],
    ["Malai Boti Stuffer", "Rs 1,350 / Rs 1,800"],
    ["Peri Peri Stuffer", "Rs 1,350 / Rs 1,800"],
  ].map(([name, price]) => ({
    name,
    category: "Pizzas",
    slug: "pizzas",
    price: `${price} (Medium / Large)`,
    keywords: "pizza stuffer medium large",
  })),

  ...[
    ["Petty Burger", "Rs 420"],
    ["Filet Burger", "Rs 480"],
    ["Zinger Burger", "Rs 450"],
    ["Chapli Burger", "Rs 400"],
  ].map(([name, price]) => ({
    name,
    category: "Burgers",
    slug: "burgers",
    price,
  })),

  ...[
    ["Bar BQ Wings", "Rs 600", "10 pieces"],
    ["Peri Peri Wings", "Rs 600", "10 pieces"],
    ["Plain Wings", "Rs 600", "10 pieces"],
    ["Hot Wings", "Rs 750", "10 pieces"],
    ["Nuggets", "Rs 580", "10 pieces"],
    ["Chicken Strips", "Rs 650", "6 pieces"],
  ].map(([name, price, pieces]) => ({
    name,
    category: "Chicken",
    slug: "chicken",
    price: `${price} • ${pieces}`,
  })),

  ...[
    ["Bar BQ Fries", "Rs 650"],
    ["Cheesy Mayo Fries", "Rs 650"],
    ["Large Fries", "Rs 400"],
    ["Potamatoes", "Rs 620"],
  ].map(([name, price]) => ({
    name,
    category: "Fries",
    slug: "fries",
    price,
  })),

  ...[
    ["Special Pasta", "Rs 700"],
    ["Flaming Pasta", "Rs 730"],
    ["Behari Pasta", "Rs 850"],
  ].map(([name, price]) => ({
    name,
    category: "Pastas",
    slug: "pastas",
    price,
  })),

  ...[
    ["Spin Roll", "Rs 650"],
    ["Chilli Milli Roll", "Rs 700"],
    ["Behari Roll", "Rs 700"],
    ["Chicken Cheese Stick", "Rs 650"],
    ["Pizza Sandwich", "Rs 700"],
  ].map(([name, price]) => ({
    name,
    category: "Sides",
    slug: "sides",
    price,
  })),

  ...[
    ["1.5 Liter Cold Drink", "Rs 220"],
    ["0.5 Liter Cold Drink", "Rs 120"],
    ["Water (Large)", "Rs 120"],
    ["Water (Small)", "Rs 60"],
    ["Dip Sauce", "Rs 80"],
  ].map(([name, price]) => ({
    name,
    category: "Drinks & Extras",
    slug: "drinks",
    price,
  })),
];

const categoryIcons: Record<string, string> = {
  Pizzas: "🍕",
  Burgers: "🍔",
  Chicken: "🍗",
  Fries: "🍟",
  Pastas: "🍝",
  Sides: "🥪",
  "Drinks & Extras": "🥤",
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = (
    Array.isArray(params.search) ? params.search[0] : params.search || ""
  )
    .trim()
    .toLowerCase();

  const results = query
    ? menuItems.filter((item) =>
        `${item.name} ${item.category} ${item.keywords || ""}`
          .toLowerCase()
          .includes(query)
      )
    : menuItems;

  return (
    <main className="min-h-screen bg-[#F8F7F4] px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 font-bold uppercase tracking-[3px] text-[#E85D04]">
            Pizza Venue
          </p>

          <h1 className="text-3xl font-extrabold text-[#171717] md:text-5xl">
            {query ? "Search Results" : "Our Menu"}
          </h1>

          {query && (
            <p className="mt-3 text-gray-600">
              Results for:{" "}
              <span className="font-semibold text-[#171717]">
                {query}
              </span>
            </p>
          )}

          <p className="mt-2 text-sm text-gray-500">
            {results.length} items found
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-4xl">
                  {categoryIcons[item.category] || "🍽️"}
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#E85D04]">
                  {item.category}
                </p>

                <h2 className="text-xl font-bold text-[#171717]">
                  {item.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.price}
                </p>

                <Link
                  href={`/menu/${item.slug}`}
                  className="mt-6 inline-flex font-bold text-[#C62828] hover:text-[#E85D04]"
                >
                  View Category →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-14 text-center">
            <p className="text-5xl">🔎</p>
            <h2 className="mt-4 text-2xl font-bold text-[#171717]">
              No items found
            </h2>
            <p className="mt-2 text-gray-600">
              Try searching for pizza, chicken, burger, fries or pasta.
            </p>
            <Link
              href="/menu"
              className="mt-6 inline-block rounded-xl bg-[#C62828] px-6 py-3 font-bold text-white hover:bg-[#A82020]"
            >
              View All Menu
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}