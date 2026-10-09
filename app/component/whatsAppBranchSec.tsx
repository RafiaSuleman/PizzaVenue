"use client";

import { useState } from "react";
import { X, MessageSquare, Check } from "lucide-react";

type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string; // WhatsApp number (country code ke sath, jaise 923001234567)
};

const branches: Branch[] = [
  {
    id: 1,
    name: "Al-Rehman Garden",
    address: "Al-Rehman Garden, Lahore",
    phone: "923001234567", // Yahan apna real WhatsApp number dalein
  },
  {
    id: 2,
    name: "Maraghzar",
    address: "EC-15, Maraghzar Colony Block E Market, Lahore",
    phone: "923001234568",
  },
  {
    id: 3,
    name: "Park View City",
    address: "91, Tulip Commercial, Park View City, Lahore",
    phone: "923001234569",
  },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BranchWhatsAppModal({ open, onClose }: Props) {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  if (!open) return null;

  const handleBranchSelect = (branch: Branch) => {
    // 1. Clipboard par number copy karna
    navigator.clipboard.writeText(branch.phone);
    setCopiedId(branch.id);

    // 2. WhatsApp ka link banana jisme pehle se message likha ho
    const message = encodeURIComponent(
      `Hello, mujhe ${branch.name} branch se order place karna hai.`
    );
    const whatsappUrl = `https://wa.me/${branch.phone}?text=${message}`;

    // 3. Thoda delay de kar WhatsApp open karna aur modal close karna
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setCopiedId(null);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h3 className="text-xl font-bold text-[#171717]">
              Select Branch for Order
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Apni qareebi branch select karein taaki WhatsApp par rabta ho sake.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Branches List */}
        <div className="mt-4 space-y-3">
          {branches.map((branch) => (
            <div
              key={branch.id}
              onClick={() => handleBranchSelect(branch)}
              className="cursor-pointer rounded-xl border border-gray-200 p-4 transition hover:border-[#C62828] hover:bg-[#FFF5F3]"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#171717]">{branch.name}</h4>
                {copiedId === branch.id ? (
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                    <Check size={14} /> Copied! Opening WhatsApp...
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-bold text-[#C62828]">
                    <MessageSquare size={14} /> Order via WhatsApp
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}