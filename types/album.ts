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

export type ArtistTrackExternalIds = {
  isrc: string;
};

export type ArtistAlbum = {
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

export type TopTrack = {
  album: ArtistAlbum;
  artists: Array<AlbumArtist>;
  disc_number: number;
  duration_ms: number;
  explicit: true;
  external_ids: ArtistTrackExternalIds;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type TopTracks = {
  tracks: Array<TopTrack>;
};

export type SearchAlbums = {
  href: string;
  items: Array<Album>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Albums = {
  albums: SearchAlbums;
};

const example = {
  album: {
    album_type: 'single',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5gU8eqolA1bziWv6e3Wjp3',
        },
        href: 'https://api.spotify.com/v1/artists/5gU8eqolA1bziWv6e3Wjp3',
        id: '5gU8eqolA1bziWv6e3Wjp3',
        name: 'Django',
        type: 'artist',
        uri: 'spotify:artist:5gU8eqolA1bziWv6e3Wjp3',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3uiTnIx5N6ZWAPkPb8GFC9',
        },
        href: 'https://api.spotify.com/v1/artists/3uiTnIx5N6ZWAPkPb8GFC9',
        id: '3uiTnIx5N6ZWAPkPb8GFC9',
        name: 'Lybro',
        type: 'artist',
        uri: 'spotify:artist:3uiTnIx5N6ZWAPkPb8GFC9',
      },
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0qEjgnCrkQfSCIFUrRyKto',
    },
    href: 'https://api.spotify.com/v1/albums/0qEjgnCrkQfSCIFUrRyKto',
    id: '0qEjgnCrkQfSCIFUrRyKto',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2738e6e315274b77e09917fa28f',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e028e6e315274b77e09917fa28f',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048518e6e315274b77e09917fa28f',
        width: 64,
      },
    ],
    name: 'Tout doux',
    release_date: '2022-11-10',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:0qEjgnCrkQfSCIFUrRyKto',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5gU8eqolA1bziWv6e3Wjp3',
      },
      href: 'https://api.spotify.com/v1/artists/5gU8eqolA1bziWv6e3Wjp3',
      id: '5gU8eqolA1bziWv6e3Wjp3',
      name: 'Django',
      type: 'artist',
      uri: 'spotify:artist:5gU8eqolA1bziWv6e3Wjp3',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3uiTnIx5N6ZWAPkPb8GFC9',
      },
      href: 'https://api.spotify.com/v1/artists/3uiTnIx5N6ZWAPkPb8GFC9',
      id: '3uiTnIx5N6ZWAPkPb8GFC9',
      name: 'Lybro',
      type: 'artist',
      uri: 'spotify:artist:3uiTnIx5N6ZWAPkPb8GFC9',
    },
  ],
  disc_number: 1,
  duration_ms: 215184,
  explicit: true,
  external_ids: {
    isrc: 'FR9W12242179',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/1O3z6lnw437FTQc9KetUnW',
  },
  href: 'https://api.spotify.com/v1/tracks/1O3z6lnw437FTQc9KetUnW',
  id: '1O3z6lnw437FTQc9KetUnW',
  is_local: false,
  is_playable: true,
  name: 'Tout doux',
  popularity: 54,
  preview_url:
    'https://p.scdn.co/mp3-preview/d76259f416f464eee54efc3c1112396ed549fde3?cid=774b29d4f13844c495f206cafdad9c86',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:1O3z6lnw437FTQc9KetUnW',
};
