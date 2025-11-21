import { defineField, defineType } from "sanity";

export const contactpageType = defineType({
  name: "contactpage",
  title: "Contact Page",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Contact Page",
      };
    },
  },
  fields: [
    defineField({
      name: "form_header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "display_image",
        type: "image",
        description: "This image will display on the left side of the contact page. It should be high resolution and portrait orientation.",
        validation: (Rule) => Rule.required(),
    }),
  ],
});
