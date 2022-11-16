export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: string | null;
  total: number;
};

export type Images = {
  height: number;
  url: string;
  width: number;
};

export type Artist = {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: Array<string | null>;
  href: string;
  id: string;
  images: Array<Images>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SearchArtists = {
  href: string;
  items: Array<Artist>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Artists = {
  artists: SearchArtists;
};
