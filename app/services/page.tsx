import { SectionProvider } from "@/components/home/SectionContext";
import Services from "@/components/services/Services";
import Navigation from "@/components/Navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { METADATA_QUERY, SERVICES_PREVIEW_QUERY } from "@/sanity/lib/queries";

export default async function ServicesPage() {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const services = await sanityFetch({ query: SERVICES_PREVIEW_QUERY });
  
  return (
    <SectionProvider>
      <div className="relative">
        <Navigation logo={metadata.data.site_logo.asset.url} />
        <Services services={services.data} site_title={metadata.data.site_title} email_address={metadata.data.email_address} instagram_url={metadata.data.instagram_url} />
      </div>
    </SectionProvider>
  );
}