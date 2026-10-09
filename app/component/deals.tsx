
const deals = [
  { id: 1, price: 1350, items: ["1 Small Pizza (Regular Flavour)", "1 Pasta", "1.5 Ltr Cold Drink"] },
  { id: 2, price: 2950, items: ["2 Medium Stuffer Pizzas", "1.5 Ltr Cold Drink"] },
  { id: 3, price: 2350, items: ["1 Large Pizza (Regular Flavour)", "Wings (10 Pcs)", "1.5 Ltr Cold Drink"] },
  { id: 4, price: 3450, items: ["2 Large Pizzas (Regular Flavour)", "1.5 Ltr Cold Drink"] },
  { id: 5, price: 2100, items: ["1 Medium Stuffer Pizza", "Wings (10 Pcs)", "1.5 Ltr Cold Drink"] },
  { id: 6, price: 2650, items: ["2 Medium Pizzas (Regular Flavour)", "1.5 Ltr Cold Drink"] },
  { id: 7, price: 3200, items: ["1 Large Pizza (Regular Flavour)", "1 Medium Stuffer Pizza", "1.5 Ltr Cold Drink"] },
  { id: 8, price: 3750, items: ["1 Large Pizza (Regular Flavour)", "1 Large Stuffer Pizza", "1.5 Ltr Cold Drink"] },
  { id: 9, price: 4050, items: ["2 Large Stuffer Pizzas", "1.5 Ltr Cold Drink"] },
  { id: 10, price: 2750, items: ["1 Large Stuffer Pizza", "Creamy Pasta", "1.5 Ltr Cold Drink"] },
  { id: 11, price: 3000, items: ["1 Large Pizza (Regular Flavour)", "10 Pcs Wings", "1 Spin Roll", "1.5 Ltr Cold Drink"] },
  { id: 12, price: 5050, items: ["1 Large Pizza (Regular Flavour)", "1 Large Stuffer Pizza", "10 Pcs Wings", "Creamy Pasta", "1.5 Ltr Cold Drink"] },
];

export default function Deals() {
  return (
    <section className="bg-[#FFF8F0] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F4A11A]">
            Delicious Savings
          </p>
          <h2 className="text-4xl font-extrabold text-[#C62828] md:text-5xl">
            Special Deals
          </h2>
          <p className="mt-3 text-gray-600">
            More flavour, more food, more value!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between bg-[#C62828] px-6 py-5">
                <h3 className="text-xl font-extrabold text-white">
                  Deal {deal.id}
                </h3>
                <span className="rounded-full bg-[#F4A11A] px-4 py-2 text-lg font-extrabold text-white">
                  Rs. {deal.price}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-[#FFF8F0] text-5xl">
                  🍕
                </div>

                <ul className="space-y-3">
                  {deal.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-gray-700"
                    >
                      <span className="font-bold text-[#F4A11A]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-gray-100 pt-4 text-center">
                  <span className="text-sm font-bold text-[#C62828]">
                    Pizza Venue Special Offer
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}