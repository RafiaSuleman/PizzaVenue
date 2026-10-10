
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "PIZZAS", image: "/images/chicken-tikka.jpg" },
  { name: "CHICKEN", image: "/images/fry-chicken.jpg" },
  { name: "PASTAS", image: "/images/pasta.jpg" },
  { name: "BURGERS", image: "/images/zing.jpg" },
  { name: "SIDES", image: "/images/sand.jpg" },
  { name: "DRINKS", image: "/images/cola.jpg" },
  { name: "FRIES", image: "/images/friess.jpg" },
];

export default function MenuCategories() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -540,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 540,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#F8F7F4] px-5 py-14 sm:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#C62828] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#F4A11A]" />
              Something Delicious
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Explore Our{" "}
              <span className="text-[#C62828]">Menu.</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
              Discover your favorites, from cheesy pizzas to crispy chicken.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/menu")}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C62828] sm:inline-flex"
          >
            View All
            <ArrowUpRight size={17} />
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={slideLeft}
            aria-label="Slide left"
            className="absolute -left-1 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#171717] shadow-lg transition hover:border-[#C62828] hover:bg-[#C62828] hover:text-white md:flex lg:-left-4"
          >
            <ChevronLeft size={23} />
          </button>

          {/* Category Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-1 py-4 scrollbar-hide sm:gap-5 md:gap-6"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category.name}
                onClick={() =>
                  router.push(`/menu/${category.name.toLowerCase()}`)
                }
                className="group relative w-57.5 shrink-0 overflow-hidden rounded-2xl border border-gray-200/80 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F4A11A] hover:shadow-xl sm:w-62.5"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-[#C62828] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Image */}
                <div className="flex h-51.25 items-center justify-center overflow-hidden bg-white p-5 sm:h-56.25">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={230}
                    sizes="250px"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="flex items-center justify-between border-t border-gray-100 px-4 py-4 sm:px-5">
                  <div>
                    <p className="text-base font-black tracking-wide text-[#171717] sm:text-lg">
                      {category.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-gray-500">
                      Explore category
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF2DF] text-[#C62828] transition-all duration-300 group-hover:bg-[#C62828] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={slideRight}
            aria-label="Slide right"
            className="absolute -right-1 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#171717] shadow-lg transition hover:border-[#C62828] hover:bg-[#C62828] hover:text-white md:flex lg:-right-4"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-5 text-center sm:hidden">
          <button
            type="button"
            onClick={() => router.push("/menu")}
            className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C62828]"
          >
            View All Menu
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}