
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Menu", href: "/menu" },
  { name: "Special Deals", href: "#deals" },
  { name: "Our Branches", href: "#branches" },
  { name: "Customer Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 md:pt-16 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Pizza Venue Logo"
                width={48}
                height={48}
              />

              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-[#C62828]">
                  Pizza
                </span>
                <span className="text-2xl font-black text-[#F4A11A]">
                  Venue
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Your destination for delicious pizzas, flavorful meals, and
              special deals made for sharing.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#F4A11A]">
              <span className="h-2 w-2 rounded-full bg-[#F4A11A]" />
              Fresh Flavors. Great Moments.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[2px] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#F4A11A]"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[2px] text-white">
              Opening Hours
            </h3>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#F4A11A]">
                <Clock size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Daily Service
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  10:00 AM – 3:00 AM
                </p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Opening hours may vary by branch.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[2px] text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-[#F4A11A]"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    A.R Garden Branch
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Plaza No. 84, Hassan Commercial, A.R Garden Phase-2,
                    Lahore
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-[#F4A11A]"
                />
                <div className="space-y-2">
                  <a
                    href="tel:+923347862222"
                    className="block text-sm text-gray-400 transition hover:text-[#F4A11A]"
                  >
                    0334 786 2222
                  </a>
                  <a
                    href="tel:+923297862222"
                    className="block text-sm text-gray-400 transition hover:text-[#F4A11A]"
                  >
                    0329 786 2222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-5 text-gray-500">
            © 2026 Pizza Venue. All rights reserved.
          </p>

          <Link
            href="/"
            className="text-xs font-semibold text-gray-400 transition hover:text-[#F4A11A]"
          >
            Made with passion for pizza lovers.
          </Link>
        </div>
      </div>
    </footer>
  );
}