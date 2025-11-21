export interface ImageAsset {
  url: string;
}

export interface Image {
  asset: ImageAsset;
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface Metadata {
  site_title: string;
  site_description: string;
  site_logo: Image;
  site_icon: Image;
  instagram_url: string;
  email_address: string;
}
