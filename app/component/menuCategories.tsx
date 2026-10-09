'use client'
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const categories = [
  {
    name: "PIZZAS",
    image: "/images/chicken-tikka.jpg",
  },
  {
    name: "CHICKEN",
    image: "/images/fry-chicken.jpg",
  },
  {
    name: "PASTAS",
    image: "/images/pasta.jpg",
  },
  {
    name: "BURGERS",
    image: "/images/zing.jpg",
  },
  {
    name: "SIDES",
    image: "/images/sand.jpg",
  },
  {
    name: "DRINKS",
    image: "/images/cola.jpg",
  },
  {
    name: "FRIES",
    image: "/images/friess.jpg",
  },
];

export default function MenuCategories() {
  const sliderRef = useRef<HTMLDivElement>(null);
const router = useRouter();
  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

 return (
  <section className="bg-white px-6 py-16 lg:px-10">
    <div className="mx-auto max-w-7xl">

      {/* Heading */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F4A11A]">
            Our Menu
          </p>
          <h2 className="text-4xl font-extrabold text-[#C62828] md:text-5xl">
            Explore Our Menu
          </h2>
        </div>
        <button
          onClick={() => router.push("/menu")}
          className="hidden rounded-full border-2 border-[#C62828] px-6 py-2.5 font-bold text-[#C62828] transition hover:bg-[#C62828] hover:text-white sm:block"
        >
          VIEW ALL
        </button>
      </div>
      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          aria-label="Slide left"
          className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl md:flex"
        >
          <ChevronLeft size={26} className="text-[#C62828]" />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-2 py-3 scrollbar-hide"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                router.push(`/menu/${category.name.toLowerCase()}`)
              }
              className="group w-62.5 shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 border-[#F4A11A]/40 bg-[#FFF8F0] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="flex h-57.5 items-center justify-center p-5">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={230}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="bg-white px-4 py-5 text-center">
                <h3 className="text-lg font-extrabold tracking-wide text-gray-800">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#C62828]">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          aria-label="Slide right"
          className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl md:flex"
        >
          <ChevronRight size={26} className="text-[#C62828]" />
        </button>

      </div>
    </div>
  </section>
);
}