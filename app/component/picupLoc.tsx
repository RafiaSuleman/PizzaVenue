'use client'
import { useState } from "react";
import {
  X,
  MapPin,
  Navigation,
} from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const branches = [
  {
    id: 1,
    name: "Al-Rehman Garden",
    address: "Al-Rehman Garden, Lahore",
    position: [31.5895, 74.4386] as [number, number],
    mapLink: "https://maps.app.goo.gl/nCN1frbujdVXuJgp8",
  },
  {
    id: 2,
    name: "Maraghzar",
    address: "EC-15, Maraghzar Colony Block E Market, Lahore",
    position: [31.5055, 74.3185] as [number, number],
    mapLink: "https://maps.app.goo.gl/4uJUgArc3dxxXrRN6",
  },
  {
    id: 3,
    name: "Park View City",
    address:
      "91, Tulip Commercial, Near 3rd Round About, Park View City, Lahore",
    position: [31.4567879, 74.1947498] as [number, number],
    mapLink: "https://maps.app.goo.gl/1WLmg5idZCrG5TcJ9",
  },
];

function MapMove({
  position,
}: {
  position: [number, number];
}) {
  const map = useMap();

  map.flyTo(position, 15, {
    duration: 1,
  });

  return null;
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PickupLocations({
  open,
  onClose,
}: Props) {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">

      {/* Modal */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-[#171717]">
              Pick-up Locations
            </h2>

            <p className="text-sm text-gray-500">
              Select your nearest Pizza Venue
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Map + Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Map */}
          <div className="h-105">
            <MapContainer
              center={selectedBranch.position}
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {branches.map((branch) => (
                <Marker
                  key={branch.id}
                  position={branch.position}
                  icon={markerIcon}
                  eventHandlers={{
                    click: () => setSelectedBranch(branch),
                  }}
                >
                  <Popup>
                    <strong>Pizza Venue</strong>
                    <br />
                    {branch.name}
                  </Popup>
                </Marker>
              ))}

              <MapMove position={selectedBranch.position} />
            </MapContainer>
          </div>

          {/* Locations */}
          <div className="max-h-105 overflow-y-auto p-5">

            <div className="space-y-3">
              {branches.map((branch) => {
                const selected =
                  selectedBranch.id === branch.id;

                return (
                  <div
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      selected
                        ? "border-[#C62828] bg-[#FFF5F3]"
                        : "border-gray-200 hover:border-[#C62828]"
                    }`}
                  >
                    <div className="flex gap-3">

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          selected
                            ? "bg-[#C62828] text-white"
                            : "bg-gray-100 text-[#C62828]"
                        }`}
                      >
                        <MapPin size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#171717]">
                          {branch.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {branch.address}
                        </p>

                        <a
                          href={branch.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#C62828]"
                        >
                          <Navigation size={15} />
                          Get Directions
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}