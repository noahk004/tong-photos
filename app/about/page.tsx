import About from "@/components/about/About";

import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTPAGE_QUERY, HOMEPAGE_QUERY } from "@/sanity/lib/queries";

import CTA from "@/components/home/CTA";

export default async function AboutPage() {
  const homepage = await sanityFetch({ query: HOMEPAGE_QUERY });
  const aboutpage = await sanityFetch({ query: ABOUTPAGE_QUERY });
  return (
    <div>
      <About
        header={aboutpage.data.page_header}
        body_text={aboutpage.data.body_text}
      />
      <CTA
        header={homepage.data.cta_header}
        description={homepage.data.cta_description}
      />
    </div>
  );
}
