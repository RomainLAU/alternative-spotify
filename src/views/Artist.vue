<script setup lang="ts">
import { searchArtist } from '@/api/spotify';
import type { Artist } from '../../types/artist';
import { ref } from 'vue';
import router from '@/router/index';
import { useRoute, type LocationQueryValue } from 'vue-router';

const route = useRoute();

const artist = ref<Artist | null>(null);
const artistParam: string | LocationQueryValue[] = route.query.name
  ? route.query.name
  : '';

async function init() {
  if (artistParam.length === 0) {
    router.push({ path: '/', replace: true });
  } else {
    artist.value = await searchArtist(artistParam);
  }
}

init();
</script>

<template>
  <main class="p-16 bg-[#0f172a] text-white h-screen">
    <h1 v-if="artist !== null" class="text-9xl font-extrabold">
      {{ artist.name }}
    </h1>
    <img
      v-if="artist !== null"
      :src="artist.images[1].url"
      :alt="artist.name"
    />
    <p v-if="artist && artist.followers.total > 1000">Verified artist</p>
    <p v-else>Unverified artist</p>
  </main>
</template>
