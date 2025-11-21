import Navigation from "@/components/Navigation";
import About from "@/components/about/About";

import { sanityFetch } from "@/sanity/lib/live";
import { METADATA_QUERY, ABOUTPAGE_QUERY, HOMEPAGE_QUERY } from "@/sanity/lib/queries";

import SectionTransition from "@/components/home/SectionTransition";
import { SectionProvider } from "@/components/home/SectionContext";
import CTA from "@/components/home/CTA";

export default async function AboutPage() {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const homepage = await sanityFetch({ query: HOMEPAGE_QUERY });
  const aboutpage = await sanityFetch({ query: ABOUTPAGE_QUERY });
  return (
    <SectionProvider>
      <div className="relative">
        <Navigation logo={metadata.data.site_logo.asset.url} />
        <SectionTransition>
          <About
            header={aboutpage.data.page_header}
            body_text={aboutpage.data.body_text}
          />
          <CTA
            site_title={metadata.data.site_title}
            email_address={metadata.data.email_address}
            instagram_url={metadata.data.instagram_url}
            header={homepage.data.cta_header}
            description={homepage.data.cta_description}
          />
        </SectionTransition>
      </div>
    </SectionProvider>
  );
}
