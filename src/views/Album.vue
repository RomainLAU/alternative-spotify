<script setup lang="ts">
import { searchAlbum } from '@/api/spotify';
import type { Album } from '../../types/album';
import { ref } from 'vue';
import { useRoute, type LocationQueryValue } from 'vue-router';
import moment from 'moment';

const route = useRoute();

const album = ref<Album | null>(null);

const totalDuration = ref<any>(0);

const albumParam: string | LocationQueryValue[] = route.params.id
  ? route.params.id
  : '';

let convertingDuration = null;

async function init() {
  if (albumParam.length !== 0) {
    album.value = await searchAlbum(albumParam);

    if (album.value) {
      album.value.tracks.items.forEach((track) => {
        totalDuration.value += track.duration_ms;
      });

      convertingDuration = moment.duration(totalDuration.value);

      if (convertingDuration.hours() > 0) {
        totalDuration.value = `${convertingDuration.hours()} h ${convertingDuration.minutes()} min ${convertingDuration.seconds()} s`;
      } else {
        totalDuration.value = `${convertingDuration.minutes()} min ${convertingDuration.seconds()} s`;
      }
    }
  }
}

init();
</script>

<template>
  <main class="p-16 bg-[#0f172a] text-white min-h-screen" v-if="album">
    <div class="flex">
      <img :src="album.images[1].url" :alt="album.name" />
      <div class="flex flex-col">
        <p>{{ album.album_type }}</p>
        <h1 class="text-9xl font-extrabold">
          {{ album.name }}
        </h1>
        <div class="flex items-center">
          <ul class="flex items-center">
            <li
              v-for="(artist, index) in album.artists"
              :key="artist.id"
              class="flex items-center"
            >
              {{ artist.name }}
              <p v-if="index !== album.artists.length - 1">, &nbsp;</p>
            </li>
          </ul>
          &nbsp;
          <span class="text-xs self-center">●</span>
          &nbsp;{{ moment(album.release_date).format('YYYY') }}
          &nbsp;
          <span class="text-xs self-center">●</span>
          &nbsp;
          <p>{{ album.total_tracks }} titres,</p>
          &nbsp;
          <p>{{ totalDuration }}</p>
        </div>
      </div>
    </div>
  </main>
  <main
    v-else
    class="p-16 bg-[#0f172a] text-white min-h-screen flex items-center flex-col pt-72"
  >
    <h1 class="text-6xl font-bold">404</h1>
    <br />
    <h1 class="text-6xl font-bold">Woops, we didn't find anything here...</h1>
  </main>
</template>
