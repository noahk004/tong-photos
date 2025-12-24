import { sanityFetch } from "@/sanity/lib/live";
import { METADATA_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import Navigation from "@/components/Navigation";
import { SectionProvider } from "@/components/home/SectionContext";
import SectionTransition from "@/components/home/SectionTransition";
import Testimonial from "@/components/testimonials/Testimonial";
import CTA from "@/components/home/CTA";

type TestimonialData = {
  name_of_client: string;
  testimonial_text: string;
  image_to_display: {
    asset: {
      url: string;
    };
  };
  text_position: string;
};

export default async function TestimonialsPage() {
  const metadata = await sanityFetch({ query: METADATA_QUERY });
  const testimonials = await sanityFetch({ query: TESTIMONIALS_QUERY });
  console.log(testimonials.data);
  return (
    <SectionProvider>
      <div className="relative">
        <Navigation logo={metadata.data.site_logo.asset.url} inverted_colors={true} clear_len={testimonials.data.length} />
        <SectionTransition>
          {testimonials.data.map(
            (testimonial: TestimonialData, index: number) => (
              <Testimonial
                key={index}
                name_of_client={testimonial.name_of_client}
                testimonial_text={testimonial.testimonial_text}
                image_to_display={testimonial.image_to_display.asset.url}
                text_position={testimonial.text_position}
              />
            )
          )}
          <CTA
            site_title={metadata.data.site_title}
            email_address={metadata.data.email_address}
            instagram_url={metadata.data.instagram_url}
            header="Ready to book your session?"
            description="Contact us to discuss your needs and get started on your next photo shoot."
          />
        </SectionTransition>
      </div>
    </SectionProvider>
  );
}
