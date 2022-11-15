import type { ExternalUrls, Images } from './artist';

export type AlbumArtist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Copyright = {
  text: string;
  type: string;
};

export type ExternalIds = {
  upc: string;
};

export type TrackArtist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type TrackItem = {
  artists: Array<TrackArtist>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

export type Tracks = {
  href: string;
  items: Array<TrackItem>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Album = {
  album_type: string;
  artists: Array<AlbumArtist>;
  copyrights: Array<Copyright>;
  external_ids: ExternalIds;
  externals_urls: ExternalUrls;
  genres: Array<string | null>;
  href: string;
  id: string;
  images: Array<Images>;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
};
