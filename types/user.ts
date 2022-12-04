import type { ExternalUrls, Images } from './artist';

export type Followers = {
  href: null | string;
  total: number;
};

export type User = {
  display_name: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Array<Images>;
  type: string;
  uri: string;
};
