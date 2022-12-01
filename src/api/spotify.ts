import type { Album, TopTracks } from 'types/album';
import type { Artist } from 'types/artist';
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
        type,
        limit,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export async function searchArtist(
  query: string | LocationQueryValue[],
  type = 'artist'
): Promise<Artist> {
  const response = await search(query, type);
  const artistId = response.artists.items[0].id;

  return instance
    .get(`https://api.spotify.com/v1/artists/${artistId}`)
    .then((response) => {
      return response.data;
    });
}

export async function searchTopTracks(
  query: string | LocationQueryValue[],
  type = 'artist'
): Promise<TopTracks> {
  const response = await search(query, type);
  const artistId = response.artists.items[0].id;

  return instance
    .get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`)
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
