import { SectionProvider } from "@/components/home/SectionContext";
import Contact from "@/components/contact/Contact";
import SectionTransition from "@/components/home/SectionTransition";
import Navigation from "@/components/Navigation";
import { METADATA_QUERY, CONTACTPAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
export default async function ContactPage() {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const contactpage = await sanityFetch({ query: CONTACTPAGE_QUERY });
  return (
    <SectionProvider>
      <div className="relative">
        <Navigation logo={metadata.data.site_logo.asset.url} clear_len={0} />
        <SectionTransition>
          <Contact
            form_header={contactpage.data.form_header}
            display_image={contactpage.data.display_image.asset.url}
            site_title={metadata.data.site_title}
            email_address={metadata.data.email_address}
            instagram_url={metadata.data.instagram_url}
          />
        </SectionTransition>
      </div>
    </SectionProvider>
  );
}
