import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      description: "This will be displayed in the URL. For example, a service named 'Family Portraits' might have a slug of 'family-portraits'.",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "service_description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service_image",
      type: "image",
      description: "This image will preview the service. Its orientation will crop to portrait orientation.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
