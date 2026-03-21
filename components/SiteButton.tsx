import Link from "next/link";

export default function SiteButton({
    text,
    href,
    type,
}: {
    text: string;
    href: string;
    type?: "accent" | "clear";
}) {
    if (type === "clear") {
        return (
            <Link
                href={href}
                className="inline-block text-xs tracking-[0.2em] uppercase font-light px-6 py-3 border border-white/70 text-white/90 hover:bg-white/90 hover:text-black transition-colors duration-300"
            >
                {text}
            </Link>
        );
    }

    if (type === "accent") {
        return (
            <Link
                href={href}
                className="inline-block text-xs tracking-[0.2em] uppercase font-light px-6 py-3 bg-[#cd7400] text-white border border-[#cd7400] hover:bg-transparent hover:text-[#cd7400] transition-colors duration-300"
            >
                {text}
            </Link>
        );
    }

    // default
    return (
        <Link
            href={href}
            className="inline-block text-xs tracking-[0.2em] uppercase font-light px-6 py-3 border border-[#353535] text-[#353535] hover:bg-[#353535] hover:text-white transition-colors duration-300"
        >
            {text}
        </Link>
    );
}