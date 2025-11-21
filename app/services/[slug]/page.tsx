import { sanityFetch } from "@/sanity/lib/live";
import { METADATA_QUERY, SERVICE_QUERY } from "@/sanity/lib/queries";
import { SectionProvider } from "@/components/home/SectionContext";
import Navigation from "@/components/Navigation";
import Service from "@/components/services/Service";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const service = await sanityFetch({
    query: SERVICE_QUERY,
    params: { slug },
  });

  return (
    <SectionProvider>
      <div className="relative">
        <Navigation logo={metadata.data.site_logo.asset.url} />
        <Service service={service.data} site_title={metadata.data.site_title} email_address={metadata.data.email_address} instagram_url={metadata.data.instagram_url} />
      </div>
    </SectionProvider>
  );
}
