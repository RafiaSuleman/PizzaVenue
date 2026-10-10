
import { Star, Quote, ArrowUpRight } from "lucide-react";

const reviews = [
  {
    name: "Ali Ahmed",
    location: "Lahore",
    rating: 5,
    review:
      "Delicious pizza with amazing taste. The crust was fresh and the toppings were generous!",
  },
  {
    name: "Ayesha Khan",
    location: "Lahore",
    rating: 5,
    review:
      "Loved the food and the variety of deals. Great option for enjoying pizza with family.",
  },
  {
    name: "Hamza Malik",
    location: "Lahore",
    rating: 4,
    review:
      "Good taste, generous portions, and a nice menu. Would love to order again!",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#F8F7F4] px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#C62828] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#F4A11A]" />
              Real Flavors, Happy Moments
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Words From Our{" "}
              <span className="text-[#C62828]">Customers.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Good food creates great memories. Here is where your
              Pizza Venue experience takes the spotlight.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF2DF] text-[#C62828]">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#171717]">
                Customer Feedback
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Every opinion matters
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl sm:p-7"
            >
              {/* Top row */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#171717] text-[#F4A11A] transition-colors duration-300 group-hover:bg-[#C62828] group-hover:text-white">
                  <Quote size={23} />
                </div>

                <span className="text-sm font-bold tracking-widest text-gray-300">
                  0{index + 1}
                </span>
              </div>

              {/* Stars */}
              <div
                className="mb-5 flex gap-1"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={17}
                    fill={
                      starIndex < review.rating
                        ? "#F4A11A"
                        : "transparent"
                    }
                    className={
                      starIndex < review.rating
                        ? "text-[#F4A11A]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="flex-1 text-base leading-7 text-gray-600">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Customer information */}
              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF2DF] text-lg font-black text-[#C62828]">
                  {review.name.charAt(0)}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[#171717]">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    {review.location}
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-gray-300 transition-colors group-hover:text-[#C62828]"
                />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C62828] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}