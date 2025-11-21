import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  preview: {
    select: {
      title: "name_of_client",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Testimonial",
      };
    },
  },
  fields: [
    defineField({
      name: "name_of_client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "testimonial_text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image_to_display",
      type: "array",
      of: [{ type: "image" }],
      description:
        "This image will cover the whole screen. It should be high resolution and landscape orientation.",
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
});
