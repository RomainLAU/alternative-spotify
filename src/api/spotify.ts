import { instance } from './index';

export function search(query: string, type: string, limit = 10) {
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

export async function searchArtist(query: string, type = 'artist') {
  const response = await search(query, type);
  const artistId = response.artists.items[0].id;

  return instance
    .get(`https://api.spotify.com/v1/artists/${artistId}`)
    .then((response) => {
      return response.data;
    });
}
