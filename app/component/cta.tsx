
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#F8F7F4] px-5 py-14 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#171717] px-6 py-16 text-center md:px-12 md:py-20">
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E85D04]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#E85D04]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#F59E0B]">
            Fresh • Hot • Delicious
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            Craving Something
            <span className="text-[#E85D04]">Delicious?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Your favorite pizza, irresistible deals, and bold flavors are
            waiting for you. Explore our menu and find your nearest branch!
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E85D04] px-7 py-4 font-bold text-white transition duration-300 hover:bg-[#c94d00]"
            >
              Explore Our Menu
              <ArrowRight size={20} />
            </Link>
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition duration-300 hover:border-[#E85D04] hover:bg-[#E85D04]"
            >
              <MapPin size={20} />
              Find a Branch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}