import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { Image } from "@/types/types";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CTA from "@/components/home/CTA";

export default async function HomePage() {
  const homepage = await sanityFetch({ query: HOMEPAGE_QUERY });

  return (
    <div>
      <Hero
        title={homepage.data.section1_title}
        description={homepage.data.section1_description}
        images={homepage.data.section1_gallery.map(
          (item: Image) => item.asset?.url
        )}
      />
      <ServicesPreview
        imgLandscape={homepage.data.section2_landscape_image.asset.url}
        imgPortrait={homepage.data.section2_portrait_image.asset.url}
        header={homepage.data.section2_header}
        description={homepage.data.section2_description}
      />
      <TestimonialsPreview
        images={homepage.data.section3_grid_gallery.map(
          (item: Image) => item.asset?.url
        )}
        header={homepage.data.section3_header}
        description={homepage.data.section3_description}
      />
      <CTA
        header={homepage.data.cta_header}
        description={homepage.data.cta_description}
      />
    </div>
  );
}