// ContactPage
import Contact from "@/components/contact/Contact";
import { METADATA_QUERY, CONTACTPAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function ContactPage() {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const contactpage = await sanityFetch({ query: CONTACTPAGE_QUERY });

  return (
    <div>
      <Contact
        form_header={contactpage.data.form_header}
        display_image={contactpage.data.display_image.asset.url}
        email_address={metadata.data.email_address}
      />
    </div>
  );
}