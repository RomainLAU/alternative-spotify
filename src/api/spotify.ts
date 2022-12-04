import type { Album, TopTracks } from 'types/album';
import type { Artist } from 'types/artist';
import type { Track } from 'types/track';
import type { User } from 'types/user';
import type { LocationQueryValue } from 'vue-router';
import { instance } from './index';

export async function search(
  query: string | LocationQueryValue[],
  type: string,
  limit = 20
) {
  return instance
    .get('/search', {
      params: {
        q: query,
        type: type,
        limit: limit,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export async function getUser(): Promise<User> {
  return instance.get(`https://api.spotify.com/v1/me`).then((response) => {
    return response.data;
  });
}

export async function searchArtist(
  query: string | LocationQueryValue[]
): Promise<Artist> {
  return instance
    .get(`https://api.spotify.com/v1/artists/${query}`)
    .then((response) => {
      return response.data;
    });
}

export async function searchTopTracks(
  query: string | LocationQueryValue[]
): Promise<TopTracks> {
  return instance
    .get(`https://api.spotify.com/v1/artists/${query}/top-tracks?market=FR`)
    .then((response) => {
      return response.data;
    });
}

export async function searchAlbum(
  albumId: string | LocationQueryValue[]
): Promise<Album> {
  return instance
    .get(`https://api.spotify.com/v1/albums/${albumId}`)
    .then((response) => {
      return response.data;
    });
}

export async function searchTrack(trackId: string): Promise<Track> {
  return instance
    .get(`https://api.spotify.com/v1/tracks/${trackId}?market=FR`)
    .then((response) => {
      return response.data;
    });
}
