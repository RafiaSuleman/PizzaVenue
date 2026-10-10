
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Hot & Fresh Delivery",
    description:
      "Freshly prepared favorites delivered straight to your doorstep.",
    image: "/images/card1.jpg",
    badge: "FAST DELIVERY",
    number: "01",
  },
  {
    title: "Injected Broast",
    description:
      "Crispy chicken packed with delicious flavor in every bite.",
    image: "/images/brost.jpg",
    badge: "MUST TRY",
    number: "02",
  },
  {
    title: "Loaded Pizza",
    description:
      "Freshly baked pizza topped with irresistible flavors and cheese.",
    image: "/images/card3.jpg",
    badge: "CUSTOMER FAVORITE",
    number: "03",
  },
];

export default function StaticCards() {
  return (
    <section className="bg-[#F8F7F4] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-12">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#C62828] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#F4A11A]" />
              The Venue Experience
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Made to Satisfy
              <span className="text-[#C62828]"> Every Craving.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
            From crispy chicken to cheesy pizza, discover something
            delicious for every mood.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.number}
              className="group relative h-87.5 overflow-hidden rounded-2xl bg-[#171717] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:h-100"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-black/5 transition duration-500 group-hover:from-black/90" />

              {/* Top row */}
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-2 text-[10px] font-extrabold tracking-[1.5px] text-white backdrop-blur-md sm:text-xs">
                  {card.badge}
                </span>

                <span className="text-sm font-bold text-white/70">
                  {card.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-[#F4A11A] transition-all duration-300 group-hover:w-16" />

                <h3 className="text-2xl font-black sm:text-3xl">
                  {card.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                  {card.description}
                </p>

                <Link
                  href="/menu"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#F4A11A] transition-colors hover:text-white"
                >
                  Explore Menu
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}