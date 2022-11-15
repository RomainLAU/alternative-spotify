<script setup lang="ts">
import { searchArtist } from '@/api/spotify';
import { ref } from 'vue';
import type { Artist } from '../../types/artist';

const response = ref<any>(null);
const artist = ref<Artist>(null);

async function init() {
  response.value = await searchArtist('Imagine Dragons');
  artist.value = response.value;
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
