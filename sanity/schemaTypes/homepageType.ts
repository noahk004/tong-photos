import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
  fields: [
    defineField({
      name: "section1_title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section1_description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section1_gallery",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1).required(),
    }),

    defineField({
      name: "section2_header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section2_description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section2_landscape_image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section2_portrait_image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section3_header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section3_description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section3_grid_gallery",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta_header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta_description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
