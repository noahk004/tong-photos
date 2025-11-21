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
      className="group relative overflow-hidden aspect-square block border-6 border-transparent hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <Image
        src={serviceImage}
        alt={serviceName}
        width={800}
        height={800}
        quality={100}
        className="transition-all duration-300 brightness-60 md:brightness-100 md:group-hover:brightness-50 w-80 h-80 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-white text-xl underline underline-offset-4">{serviceName.toUpperCase()}</h1>
      </div>
    </Link>
  );
}
