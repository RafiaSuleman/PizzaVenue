
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-200">
      <div className="mx-auto flex flex-col items-center justify-center gap-2 px-6 py-5">

        {/* Logo + Text */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logo.png"
            alt="Pizza Venue Logo"
            width={50}
            height={50}
          />

          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-extrabold text-[#C62828]">
              Pizza
            </h1>

            <p className="text-2xl font-extrabold text-[#F4A11A]">
              Venue
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          Copyright © 2026. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

