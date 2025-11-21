import type { Metadata } from "next";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Fustat } from "next/font/google";
import { METADATA_QUERY } from "@/sanity/lib/queries";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  return {
    title: metadata.data.site_title,
    description: metadata.data.site_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased`}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
