import { type SchemaTypeDefinition } from "sanity";
import { homepageType } from "./homepageType";
import { aboutpageType } from "./aboutpageType";
import { metadataType } from "./metadataType";
import { serviceType } from "./serviceType";
import { testimonialType } from "./testimonialType";
import { contactpageType } from "./contactpageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageType, aboutpageType, metadataType, serviceType, testimonialType, contactpageType],
};
