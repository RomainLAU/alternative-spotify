<script setup lang="ts">
import { searchArtist } from '@/api/spotify';
import type { Artist } from '../../types/artist';
import { ref } from 'vue';
import router from '@/router/index';
import type { LocationQueryValue } from 'vue-router';

const artist = ref<Artist | null>(null);
const artistParam: string | LocationQueryValue[] = router.currentRoute.value
  .query.artist
  ? router.currentRoute.value.query.artist
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
  <main class="p-16 bg-[#E1E9ED]">
    <h1 v-if="artist !== null" class="text-9xl font-extrabold">
      {{ artist.name }}
    </h1>
    <img
      v-if="artist !== null"
      :src="artist.images[0].url"
      :alt="artist.name"
    />
    <p v-if="artist && artist.followers.total > 1000">Verified artist</p>
    <p v-else>Unverified artist</p>
  </main>
</template>
