import { MailIcon, InstagramIcon } from "lucide-react";
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
    <div className="flex gap-2 items-start justify-between w-full px-4">
      <p className="text-sm md:text-md text-black/90 drop-shadow-md font-light">
        &copy; {site_title} {new Date().getFullYear()}
      </p>
      <div className="flex gap-2">
        <p className="text-sm md:text-md text-black/90 drop-shadow-md font-light">
          <Link href={`mailto:${email_address}`}>
            <MailIcon className="w-4 h-4" />
          </Link>
        </p>
        <p className="text-sm md:text-md text-black/90 drop-shadow-md font-light">
          <Link href={instagram_url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="w-4 h-4" />
          </Link>
        </p>
      </div>
    </div>
  );
}
