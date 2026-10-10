
import { Check, ArrowUpRight } from "lucide-react";

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
    <section
      id="deals"
      className="relative overflow-hidden bg-[#F8F7F4] px-5 py-16 md:px-10 md:py-20 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#C62828] sm:text-sm">
              <span className="h-[2px] w-8 bg-[#F4A11A]" />
              Made for Sharing
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Deals Worth{" "}
              <span className="text-[#C62828]">Sharing.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              More flavour, more favourites, and more reasons to get together.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-3">
            <span className="text-xl">🍕</span>
            <span className="text-xs font-bold text-gray-700 sm:text-sm">
              12 Exclusive Combo Deals
            </span>
          </div>
        </div>

        {/* Deals grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/10"
            >
              {/* Top accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#C62828] via-[#E65100] to-[#F4A11A]" />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Deal heading and price */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#C62828]">
                      Pizza Venue
                    </p>
                    <h3 className="mt-1 text-xl font-black text-[#171717] sm:text-2xl">
                      Deal {String(deal.id).padStart(2, "0")}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-[#FFF2DF] px-3 py-2 text-right transition-colors group-hover:bg-[#F4A11A]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 group-hover:text-[#171717]">
                      Only
                    </p>
                    <p className="whitespace-nowrap text-lg font-black text-[#C62828] group-hover:text-[#171717] sm:text-xl">
                      Rs. {deal.price.toLocaleString("en-PK")}
                    </p>
                  </div>
                </div>

                {/* Decorative food icon */}
                <div className="my-5 flex items-center gap-4 rounded-xl bg-[#F8F7F4] px-4 py-3 transition-colors group-hover:bg-orange-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                    🍕
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#171717]">
                      Combo Special
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Your favourites in one deal
                    </p>
                  </div>
                </div>

                {/* Included items */}
                <div className="flex-1">
                  <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[2px] text-gray-400">
                    What&apos;s Included
                  </p>

                  <ul className="space-y-3">
                    {deal.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-5 text-gray-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom label */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Good food. Great moments.
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white transition-all duration-300 group-hover:bg-[#C62828]">
                    <ArrowUpRight size={17} />
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