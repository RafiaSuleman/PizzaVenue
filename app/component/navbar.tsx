"use client";

import { useState } from "react";
import { Menu, Search, MapPin } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const PickupLocations = dynamic(
  () => import("./picupLoc"),
  { ssr: false }
);
import BranchWhatsAppModal from "./whatsAppBranchSec";
import Link from "next/link";

const Navbar = () => {
  const [pickupOpen, setPickupOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button className="rounded-md p-2 hover:bg-gray-100">
              <Menu size={24} />
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
            </div></Link>
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
          <div className="flex-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (search.trim()) {
                  window.dispatchEvent(
                    new CustomEvent("pizza-search", {
                      detail: search.trim(),
                    })
                  );
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

          {/* Delivery Address */}
          {/* <button className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-3 text-left hover:border-[#C62828] xl:flex">
            <MapPin size={20} className="text-[#C62828]" />
            <div>
              <p className="text-xs text-gray-500">Deliver to</p>
              <p className="max-w-32 truncate text-sm font-semibold">
                Enter Delivery Address
              </p>
            </div>
          </button> */}
        </div>
      </nav>

      <PickupLocations
        open={pickupOpen}
        onClose={() => setPickupOpen(false)}
      />

      <BranchWhatsAppModal
        open={deliveryOpen}
        onClose={() => setDeliveryOpen(false)}
      />
    </>
  );
};

export default Navbar;