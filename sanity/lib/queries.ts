import { defineQuery } from "next-sanity";

export const METADATA_QUERY = defineQuery(`
  *[_type == "metadata"][0] {
    site_title,
    site_description,
    site_logo {
      asset -> {
        url
      },
    },
    site_icon {
      asset -> {
        url
      },
    },
    instagram_url,
    email_address
  }
`);

export const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage"][0] {
    section1_title,
    section1_description,
    section1_gallery[] {
      asset -> {
        url
      },
    },
    section2_header,
    section2_description,
    section2_landscape_image {
      asset -> {
        url
      },
    },
    section2_portrait_image {
      asset -> {
        url
      },
    },
    section3_header,
    section3_description,
    section3_grid_gallery[] {
      asset -> {
        url
      },
    },
    cta_header,
    cta_description
  }
`);

export const ABOUTPAGE_QUERY = defineQuery(`
  *[_type == "aboutpage"][0] {
    page_header,
    body_text[] {
      ...,
    },
  }
`);

export const SERVICES_PREVIEW_QUERY = defineQuery(`
  *[_type == "service"] {
    name,
    slug,
    service_image {
      asset -> {
        url
      },
    },
  }
`);

export const SERVICE_QUERY = defineQuery(`
  *[_type == "service" && slug.current == $slug][0] {
    name,
    slug,
    service_description,
    gallery[] {
      asset -> {
        url
      },
    }
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] {
    name_of_client,
    testimonial_text,
    image_to_display {
      asset -> {
        url
      },
    },
    text_position,
  }
`);

export const CONTACTPAGE_QUERY = defineQuery(`
  *[_type == "contactpage"][0] {
    form_header,
    display_image {
      asset -> {
        url
      },
    },
  }
`);