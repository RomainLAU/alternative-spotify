<script setup lang="ts">
import { searchAlbum } from '@/api/spotify';
import type { Album, TrackItem } from '../../types/album';
import { ref } from 'vue';
import { useRoute, useRouter, type LocationQueryValue } from 'vue-router';
import format from 'format-duration';
import Tracks from '@/components/Tracks.vue';
import useImage from '@/hooks/useImage';

const route = useRoute();
const router = useRouter();

const album = ref<Album | null>(null);

const totalDuration = ref<string>('');

const albumParam: string | LocationQueryValue[] = route.params.id
  ? route.params.id
  : '';

let convertingDuration: number = 0;

async function init() {
  if (albumParam.length !== 0) {
    album.value = await searchAlbum(albumParam);

    if (album.value) {
      album.value.tracks.items.forEach((track: TrackItem) => {
        convertingDuration += track.duration_ms;
      });

      totalDuration.value = format(convertingDuration);
    }
  } else {
    router.push('/search');
  }
}

init();

const { sm } = useImage();
</script>

<template>
  <main class="sm:p-16 bg-[#0f172a] text-white min-h-screen" v-if="album">
    <div
      class="flex gap-8 flex-wrap justify-center sm:justify-start max-sm:flex-col mb-6 sm:mb-0"
    >
      <img
        :src="album.images[sm].url"
        :alt="album.name"
        class="object-contain w-[200px] justify-self-center xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] max-sm:mb-6"
      />
      <div class="flex flex-col justify-end">
        <p class="uppercase font-bold hidden sm:block">
          {{ album.album_type }}
        </p>
        <h1
          class="xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold mb-2 sm:mb-12 max-w-[900px] overflow-hidden text-ellipsis whitespace-nowrap"
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
          &nbsp;{{ new Date(album.release_date).getFullYear() }}
          &nbsp;
          <span class="text-xs self-center hidden sm:block">●</span>
          &nbsp;
          <p class="hidden sm:block">
            {{ album.total_tracks }}
            <span v-if="album.total_tracks > 1">titres</span
            ><span v-else>titre</span>,
          </p>
          &nbsp;
          <p class="opacity-75 hidden sm:block">{{ totalDuration }}</p>
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
