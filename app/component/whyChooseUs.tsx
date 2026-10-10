
import { Flame, Tags, MapPin, Heart } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Flavorful Favorites",
    description:
      "Explore pizzas, burgers, crispy chicken, pastas, and more delicious choices.",
    icon: Flame,
  },
  {
    number: "02",
    title: "Deals Worth Sharing",
    description:
      "Discover combo deals for family meals, friends, and your favorite cravings.",
    icon: Tags,
  },
  {
    number: "03",
    title: "Find Your Nearest Branch",
    description:
      "Explore our Lahore locations, check branch details, and get directions.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Made for Food Lovers",
    description:
      "A menu full of tempting flavors, tasty combinations, and choices to enjoy.",
    icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 md:py-20 lg:px-12">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#C62828]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#F4A11A] sm:text-sm">
            <span className="h-[2px] w-7 bg-[#C62828]" />
            The Pizza Venue Difference
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            More Than Pizza.
            <br />
            <span className="text-[#F4A11A]">It&apos;s an Experience.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover what makes exploring the Pizza Venue menu worth it.
            Find your favorites, browse our deals, and locate a nearby branch.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4A11A]/50 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C62828]/15 text-[#F4A11A] transition-colors group-hover:bg-[#C62828] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-white/25">
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-[#C62828] transition-all duration-300 group-hover:w-14 group-hover:bg-[#F4A11A]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}