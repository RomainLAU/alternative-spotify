<script setup lang="ts">
import { searchArtist } from '@/api/spotify';
import type { Artist } from '../../types/artist';
import { ref } from 'vue';
import { useRoute, type LocationQueryValue } from 'vue-router';

const route = useRoute();

const artist = ref<Artist | null>(null);
const artistParam: string | LocationQueryValue[] = route.query.name
  ? route.query.name
  : '';

async function init() {
  if (artistParam.length !== 0) {
    artist.value = await searchArtist(artistParam);
  }
}

console.log(route.fullPath);

init();
</script>

<template>
  <main
    class="p-16 bg-[#0f172a] text-white min-h-screen"
    v-if="artist !== null"
  >
    <h1 class="text-9xl font-extrabold">
      {{ artist.name }}
    </h1>
    <img :src="artist.images[1].url" :alt="artist.name" />
    <p v-if="artist.followers.total > 1000">Verified artist</p>
    <p v-else>Unverified artist</p>
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
