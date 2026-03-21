import Services from "@/components/services/Services";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_PREVIEW_QUERY } from "@/sanity/lib/queries";

export default async function ServicesPage() {
  const services = await sanityFetch({ query: SERVICES_PREVIEW_QUERY });

  return (
    <div>
      <Services services={services.data} />
    </div>
  );
}