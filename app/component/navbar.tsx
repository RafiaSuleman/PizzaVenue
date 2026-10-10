"use client";

import { useState } from "react";
import { Menu, Search , X } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const PickupLocations = dynamic(() => import("./picupLoc"), { ssr: false });
import BranchWhatsAppModal from "./whatsAppBranchSec";
import Link from "next/link";
const Navbar = () => {
  const [pickupOpen, setPickupOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="rounded-md p-2 transition hover:bg-gray-100"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Pizza Venue Logo"
                  width={50}
                  height={50}
                />

                <div className="flex items-center gap-1">
                  <h1 className="text-2xl font-extrabold leading-none text-[#C62828]">
                    Pizza
                  </h1>
                  <p className="text-2xl font-extrabold leading-none text-[#F4A11A]">
                    Venue
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Delivery / Pick-up */}
          <div className="hidden items-center rounded-full bg-gray-100 p-1 md:flex">
            <button
              onClick={() => setDeliveryOpen(true)}
              className="rounded-full bg-[#C62828] px-5 py-2 text-sm font-bold text-white hover:bg-[#A82020]"
            >
              DELIVERY
            </button>

            <button
              onClick={() => setPickupOpen(true)}
              className="rounded-full px-5 py-2 text-sm font-bold text-gray-600 hover:bg-white"
            >
              PICK-UP
            </button>
          </div>

          {/* Search */}
          {/* Search */}
          <div className="flex-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const query = search.trim();

                if (query) {
                  router.push(`/menu?search=${encodeURIComponent(query)}`);
                }
              }}
              className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <Search size={20} className="mr-2 shrink-0 text-gray-500" />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Pizza, Burgers, Pasta..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </form>
          </div>
        </div>
        {menuOpen && (
  <div className="absolute left-4 top-full z-50 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">
    {[
      { label: "Home", href: "/" },
      { label: "Explore Menu", href: "/menu" },
      { label: "Special Deals", href: "/#deals" },
      { label: "Our Branches", href: "/#branches" },
      { label: "Customer Reviews", href: "/#reviews" },
    ].map((item) => (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-[#C62828]"
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
      </nav>

      <PickupLocations open={pickupOpen} onClose={() => setPickupOpen(false)} />

      <BranchWhatsAppModal
        open={deliveryOpen}
        onClose={() => setDeliveryOpen(false)}
      />
      
    </>
  );
};

export default Navbar;
