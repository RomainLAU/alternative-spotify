<script setup lang="ts">
import { searchAlbum } from '@/api/spotify';
import type { Album, TrackItem } from '../../types/album';
import { ref } from 'vue';
import { useRoute, useRouter, type LocationQueryValue } from 'vue-router';
import moment from 'moment';
import Tracks from '@/components/Tracks.vue';

const route = useRoute();
const router = useRouter();

const album = ref<Album | null>(null);

const totalDuration = ref<string>('');

const albumParam: string | LocationQueryValue[] = route.params.id
  ? route.params.id
  : '';

let convertingDuration = null;

async function init() {
  if (albumParam.length !== 0) {
    album.value = await searchAlbum(albumParam);

    if (album.value) {
      album.value.tracks.items.forEach((track: TrackItem) => {
        totalDuration.value += track.duration_ms;
      });

      convertingDuration = moment.duration(totalDuration.value);

      if (convertingDuration.hours() > 0) {
        totalDuration.value = `${convertingDuration.hours()} h ${convertingDuration.minutes()} min ${convertingDuration.seconds()} s`;
      } else {
        totalDuration.value = `${convertingDuration.minutes()} min ${convertingDuration.seconds()} s`;
      }
    }
  } else {
    router.push('/search');
  }
}

init();
</script>

<template>
  <main class="p-16 bg-[#0f172a] text-white min-h-screen" v-if="album">
    <div class="flex gap-8">
      <img
        :src="album.images[1].url"
        :alt="album.name"
        class="object-contain"
      />
      <div class="flex flex-col justify-end">
        <p class="uppercase font-bold">{{ album.album_type }}</p>
        <h1
          class="text-9xl font-extrabold mb-12 max-w-[900px] overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {{ album.name }}
        </h1>
        <div class="flex items-center">
          <ul class="flex items-center max-w-[700px]">
            <li
              v-for="(artist, index) in album.artists"
              :key="artist.id"
              class="flex items-center font-semibold"
            >
              <router-link
                :to="'/artists/' + artist.id"
                class="hover:underline font-semibold flex items-center text-ellipsis"
                >{{ artist.name }}</router-link
              >
              <span v-if="index !== album.artists.length - 1">, &nbsp;</span>
            </li>
          </ul>
          &nbsp;
          <span class="text-xs self-center">●</span>
          &nbsp;{{ moment(album.release_date).format('YYYY') }}
          &nbsp;
          <span class="text-xs self-center">●</span>
          &nbsp;
          <p>
            {{ album.total_tracks }}
            <span v-if="album.total_tracks > 1">titres</span
            ><span v-else>titre</span>,
          </p>
          &nbsp;
          <p class="opacity-75">{{ totalDuration }}</p>
        </div>
      </div>
    </div>
    <Tracks :tracks="album.tracks" />
  </main>
  <main
    v-else
    class="p-16 bg-[#0f172a] text-white min-h-screen flex items-center flex-col pt-72"
  ></main>
</template>
