import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-linear-to-r from-[#C62828] via-[#D84315] to-[#E65100] py-10 lg:py-0">
      
      {/* Background Image with Blur Overlay */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-25 blur-sm"
        style={{ backgroundImage: "url('/pizza-bg.jpg')" }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative Floating Background Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 h-3 w-3 animate-ping rounded-full bg-[#F4A11A]/40" />
        <div className="absolute top-1/3 right-1/4 h-2 w-2 animate-bounce rounded-full bg-white/30" />
        <div className="absolute bottom-12 left-1/3 h-4 w-4 animate-pulse rounded-full bg-[#F4A11A]/30" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 lg:flex-row lg:px-8">
        
        {/* Left Content (Text & CTA) */}
        <div className="z-10 w-full py-4 lg:w-1/2 lg:py-10">
          <p className="mb-3 inline-block rounded-full bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F4A11A] backdrop-blur-md sm:text-sm">
            🔥 Hot & Fresh Delivered
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Fresh Pizza.
            <br />
            <span className="text-[#F4A11A]">Bold Flavors.</span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            Delicious pizzas made with fresh ingredients, loaded with flavor and
            baked just the way you love.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#C62828] px-7 py-3.5 text-sm font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#A91F1F] sm:text-base">
              ORDER NOW
            </button>

            <button className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#C62828] sm:text-base">
              VIEW MENU
            </button>
          </div>

          {/* Social Proof & Quick Info Bar */}
          <div className="mt-8 flex items-center gap-6 border-t border-white/20 pt-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <div>
                <p className="text-sm font-bold leading-none">4.9 / 5.0</p>
                <p className="text-xs text-white/70">1.2k+ Reviews</p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              <div>
                <p className="text-sm font-bold leading-none">30 Mins</p>
                <p className="text-xs text-white/70">Express Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Pizza Image with Floating Discount Badge) */}
        <div className="relative mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end lg:-mr-12">
          <div className="relative flex items-center justify-center w-full">
            
            {/* Floating Discount Badge */}
            <div className="absolute top-4 left-6 z-20 flex animate-bounce items-center gap-1 rounded-full bg-[#C62828] px-4 py-2 font-bold text-white shadow-2xl border-2 border-[#F4A11A] text-xs sm:text-sm">
              <span>🏷️</span> UP TO 30% OFF
            </div>

            <Image
              src="/pizza.png"
              alt="Delicious Pizza"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-w-112.5 scale-125 transform object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-130 sm:max-w-137.5 lg:max-w-170 lg:scale-135"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;