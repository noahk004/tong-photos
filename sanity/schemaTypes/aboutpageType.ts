import { defineField, defineType } from "sanity";

export const aboutpageType = defineType({
  name: "aboutpage",
  title: "About Page",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "About Page",
      };
    },
  },
  fields: [
    defineField({
      name: "page_header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body_text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
