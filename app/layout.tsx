import type { Metadata } from "next";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Analytics } from '@vercel/analytics/next';
import { Fustat } from "next/font/google";
import { METADATA_QUERY } from "@/sanity/lib/queries";

import NavWrapper from "@/components/NavWrapper";
import Footer from "@/components/Footer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata = await sanityFetch({ query: METADATA_QUERY });

  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased`}>
        <div>
          <NavWrapper logo={metadata.data.site_logo.asset.url} />
          {children}

          <Footer
            site_title={metadata.data.site_title}
            email_address={metadata.data.email_address}
            instagram_url={metadata.data.instagram_url}
          />
        </div>
        <Analytics />
        <SanityLive />
      </body>
    </html>
  );
}
