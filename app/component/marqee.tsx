
const items = [
  "FRESHLY BAKED",
  "LOADED WITH CHEESE",
  "BIG FLAVORS",
  "MADE FOR SHARING",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-[#F4A11A] py-3 text-[#171717]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[1, 2].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center">
                <span className="mx-5 text-xs font-black tracking-[2px] sm:text-sm">
                  {item}
                </span>
                <span className="text-lg font-black text-[#C62828]">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}