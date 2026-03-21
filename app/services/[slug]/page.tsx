// app/services/[slug]/page.tsx
import Service from "@/components/services/Service";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_QUERY } from "@/sanity/lib/queries";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await sanityFetch({ query: SERVICE_QUERY, params: { slug } });

  return (
    <div>
      <Service service={service.data} />
    </div>
  );
}