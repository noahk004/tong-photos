import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY, HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import Testimonial from "@/components/testimonials/Testimonial";
import CTA from "@/components/home/CTA";

type TestimonialData = {
  name_of_client: string;
  testimonial_text: string;
  image_to_display: { asset: { url: string } };
  text_position: string;
};

export default async function TestimonialsPage() {
  const testimonials = await sanityFetch({ query: TESTIMONIALS_QUERY });
  const homepage = await sanityFetch({ query: HOMEPAGE_QUERY });

  return (
    <div>
      {testimonials.data.map((testimonial: TestimonialData, index: number) => (
        <Testimonial
          key={index}
          name_of_client={testimonial.name_of_client}
          testimonial_text={testimonial.testimonial_text}
          image_to_display={testimonial.image_to_display.asset.url}
          text_position={testimonial.text_position}
        />
      ))}
      <CTA
        header={homepage.data.cta_header}
        description={homepage.data.cta_description}
      />
    </div>
  );
}