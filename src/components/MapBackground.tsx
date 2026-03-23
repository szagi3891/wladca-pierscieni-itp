import Image from "next/image";

import mapa from "@/img/mapa.jpeg";

export default function MapBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      aria-hidden
    >
      <Image
        src={mapa}
        alt=""
        fill
        className="object-cover opacity-70"
        priority
        sizes="100vw"
      />
      {/* Ciemna warstwa dla czytelności tekstu */}
      <div
        className="absolute inset-0 bg-[var(--bg-primary)]/65"
        aria-hidden
      />
    </div>
  );
}
