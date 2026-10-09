
import { Star, Quote } from "lucide-react";

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
    <section id="reviews" className="bg-white px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold uppercase tracking-[3px] text-[#E85D04]">
            Customer Feedback
          </p>

          <h2 className="text-3xl font-extrabold text-[#171717] md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Every bite is better when shared with happy customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-100 bg-[#F8F7F4] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote size={32} className="mb-5 text-[#E85D04]" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#F59E0B"
                    className="text-amber-500"
                  />
                ))}
              </div>

              <p className="mb-7 min-h-20 leading-7 text-gray-600">
                “{review.review}”
              </p>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-lg font-bold text-white">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-[#171717]">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}