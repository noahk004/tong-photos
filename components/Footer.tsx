import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer({
  site_title,
  email_address,
  instagram_url,
}: {
  site_title: string;
  email_address: string;
  instagram_url: string;
}) {
  return (
    <footer className="border-t border-black/10 py-8 bg-white">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <p className="text-xs tracking-widest uppercase text-black/40 font-light">
          &copy; {site_title} {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${email_address}`}
            className="text-black/40 hover:text-[#cd7400] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
          <Link
            href={instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 hover:text-[#cd7400] transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}