
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Flame } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden bg-[#171717] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C62828]/25 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#E65100]/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(23,23,23,0.98)_0%,rgba(23,23,23,0.88)_50%,rgba(70,22,12,0.65)_100%)]" />
      </div>

      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:px-12 lg:py-10">
        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4A11A]/30 bg-white/6 px-4 py-2 backdrop-blur-sm">
            <Flame size={17} className="text-[#F4A11A]" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#F4A11A] sm:text-sm">
              Fresh From The Oven
            </span>
          </div>

          <h1 className="text-3xl font-black leading-none tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            BIG FLAVOR.
            <br />
            <span className="text-[#F4A11A]">NO</span>{" "}
            <span className="text-[#C62828]">COMPROMISE.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Your cravings, our passion. Explore delicious pizzas, loaded
            burgers, flavorful pastas, and deals made for sharing.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C62828] px-7 py-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-red-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#E53935] sm:text-base"
            >
              EXPLORE MENU
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#branches"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#F4A11A] hover:bg-white/10 sm:text-base"
            >
              <MapPin size={18} className="text-[#F4A11A]" />
              FIND A BRANCH
            </Link>
          </div>

          {/* Category strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/15 pt-6 text-xs font-semibold uppercase tracking-[1.5px] text-gray-400 sm:text-sm">
            <span>Pizza</span>
            <span className="text-[#F4A11A]">✦</span>
            <span>Burgers</span>
            <span className="text-[#F4A11A]">✦</span>
            <span>Pasta</span>
            <span className="text-[#F4A11A]">✦</span>
            <span>More</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none">
          {/* Decorative circle */}
          <div className="absolute h-[75%] w-[75%] rounded-full border border-[#F4A11A]/20" />
          <div className="absolute h-[60%] w-[60%] rounded-full bg-[#C62828]/20 blur-3xl" />

          {/* Pizza Image */}
          <Image
            src="/pizza.png"
            alt="Delicious Pizza from Pizza Venue"
            width={900}
            height={900}
            priority
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="relative z-10 h-auto w-full max-w-140 object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-[1.04]"
          />

          {/* Floating badge */}
          <div className="absolute bottom-5 left-0 z-20 rounded-2xl border border-white/10 bg-[#262626]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-10 sm:left-2 sm:px-5 sm:py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Made for
            </p>
            <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">
              Pizza Lovers
              <span className="ml-2 text-[#F4A11A]">♥</span>
            </p>
          </div>

          {/* Small accent badge */}
          <div className="absolute right-0 top-5 z-20 rounded-full border border-[#F4A11A]/40 bg-[#F4A11A] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171717] shadow-lg sm:right-2 sm:top-10">
            Taste the Difference
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;