import type { AlbumArtist } from './album';
import type { Artist, ExternalUrls, Images } from './artist';

export type ExternalIds = {
  irc: string;
};

export type Album = {
  album_type: string;
  artists: Array<AlbumArtist>;
  externals_urls: ExternalUrls;
  href: string;
  id: string;
  images: Array<Images>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type Track = {
  album: Album;
  artists: Array<Artist>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};
