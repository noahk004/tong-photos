import Link from "next/link";

export default function SiteButton({ text, href, type }: { text: string, href: string, type?: "accent" | "clear" }) {
    if (type === "clear") {
        return (
            <Link href={href} className="bg-transparent text-white/90 border-2 border-white/90 px-4 py-2 hover:bg-white/90 hover:text-black transition-colors duration-300">
                {text.toUpperCase()}
            </Link>
        );
    }

    return (
        <Link href={href} className="bg-accent text-white border-2 border-accent px-4 py-2 hover:bg-transparent hover:text-accent transition-colors duration-300">
            {text.toUpperCase()}
        </Link>
    );
}