
import { MapPin, Clock, Phone } from "lucide-react";

const branches = [
  {
    name: "AL Rehman Garden Branch",
    openinghours: "Monday to Sunday: 10:00 AM to 3:00 AM",
    address: "Plaza No. 84, Hassan Commercial, A.R Garden, Phase-2, Lahore",
    phones: ["0334 786 2222", "0329 786 2222"],
  },
  {
    name: "Marghzar Branch",
    openinghours: "Monday to Wednesday: 3:00 PM to 3:00 AM,Thursday: 3:00 PM to 2:00 AM ,Friday to Sunday: 12:00 PM to 3:00 AM",
    address: "15 EC Block E, Marghzar Colony, Lahore",
    phones: ["0300-0111831","0300-0111832"],
  },
  {
    name: "Park View City Branch",
    openinghours: "Monday to Sunday: 12:00 PM to 3:00 AM",
    address:
      "91-Tulip Commercial, Near 3rd Round About, Park View City, Lahore",
    phones: ["+92 309 0312222"],
  },
];

export default function Branches() {
  return (
    <section
      id="branches"
      className="bg-[#F8F7F4] px-5 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-[3px] text-[#E85D04]">
            Find Us Near You
          </p>
          <h2 className="text-3xl font-extrabold text-[#171717] md:text-5xl">
            Our Branches
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Visit your nearest Pizza Venue branch and enjoy your favorites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-[#E85D04]">
                <MapPin size={28} />
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#171717]">
                {branch.name}
              </h3>
              <div className="mb-5 flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="mt-1 shrink-0 text-[#E85D04]" />
                <p className="text-sm leading-6">{branch.address}</p>
              </div>

              <div className="mb-5 flex items-center gap-3 text-gray-600">
                <Clock size={20} className="shrink-0 text-[#E85D04]" />
                <p className="text-sm">{branch.openinghours}</p>
              </div>

              {branch.phones.length > 0 && (
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  {branch.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replaceAll(" ", "")}`}
                      className="flex items-center gap-3 text-sm font-semibold text-[#171717] transition hover:text-[#E85D04]"
                    >
                      <Phone size={18} className="text-[#E85D04]" />
                      {phone}
                    </a>
                  ))}
                </div>
              )}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  branch.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-lg bg-[#171717] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#E85D04]"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}