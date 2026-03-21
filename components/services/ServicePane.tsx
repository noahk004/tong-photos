// ServicePane.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicePane({
  serviceImage,
  serviceName,
  serviceSlug,
}: {
  serviceImage: string;
  serviceName: string;
  serviceSlug: string;
}) {
  return (
    <Link
      href={`/services/${serviceSlug}`}
      className="group relative overflow-hidden aspect-square block shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={serviceImage}
        alt={serviceName}
        fill
        quality={90}
        className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 md:brightness-100 md:group-hover:brightness-50"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
        <span className="text-white text-sm tracking-[0.25em] uppercase font-light mb-3">
          {serviceName}
        </span>
        <div className="w-6 h-px bg-[#cd7400]" />
      </div>
    </Link>
  );
}