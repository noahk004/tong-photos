import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Singleton: Metadata
      S.listItem().title("Metadata").id("metadata").child(
        S.document().schemaType("metadata").documentId("metadata") // <--- fixed ID
      ),
      S.divider(),
      // Singleton: Homepage
      S.listItem().title("Home Page").id("homepage").child(
        S.document().schemaType("homepage").documentId("homepage") // <--- fixed ID
      ),
      // Singleton: About Page
      S.listItem().title("About Page").id("aboutpage").child(
        S.document().schemaType("aboutpage").documentId("aboutpage") // <--- fixed ID
      ),
      // Singleton: Contact Page
      S.listItem().title("Contact Page").id("contactpage").child(
        S.document().schemaType("contactpage").documentId("contactpage") // <--- fixed ID
      ),
      S.divider(),
      // Service Type (multiple documents allowed)
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
      // Testimonial Type (multiple documents allowed)
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
    ]);
