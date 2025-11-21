import { defineField, defineType } from "sanity";

export const metadataType = defineType({
  name: "metadata",
  title: "Meta Data",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Meta Data",
      };
    },
  },
  fields: [
    defineField({
      name: "site_title",
      type: "string",
      description: "This is the title of the site. This will be displayed in the web browser tab and in the search engine results.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "site_description",
      type: "text",
      description: "This is the description of the site. This will be displayed in the search engine results and on the web browser when users search for the site.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "site_logo",
      type: "image",
      description: "This is the logo of the site. This should be in landscape orientation and have a transparent background.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instagram_url",
      type: "url",
      description: "This is the URL of the Instagram profile.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email_address",
      type: "email",
      description: "This is the email address that will receive the contact form submissions.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
