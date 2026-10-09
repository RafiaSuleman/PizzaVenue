import Image from "next/image";

const cards = [
  {
    title: "🔥 Hot & Fresh Delivered",
    description: "Express fast delivery right at your doorstep, piping hot and ready to enjoy.",
    image: "/images/card1.jpg",
    badge: "Fast Delivery",
  },
  {
    title: "Injucted Brost",
    description: "Our newly introduced crispy chicken loaded with amazing flavor.",
    image: "/images/brost.jpg",
    badge: "NEW",
  },
  {
    title: "Loaded Pizza",
    description: "Freshly baked with delicious toppings and extra cheese. ",
    image: "/images/card3.jpg",
    badge: "MUST TRY",
  },
];

export default function StaticCards() {
  return (
    <section className="w-full bg-[#F8F7F4] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-96 overflow-hidden rounded-2xl bg-black shadow-md"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-[#ED8609] px-3 py-1 text-xs font-bold text-white">
                  {card.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-1 max-w-sm text-sm text-white/85">
                  {card.description}
                </p>

                {/* <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#171717] transition hover:bg-[#ED8609] hover:text-white">
                  Order Now
                </button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}