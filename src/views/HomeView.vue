<script setup lang="ts">
import { search } from '@/api/spotify';
import { ref } from 'vue';

const artists = ref([]);

async function init() {
  artists.value = await search('ziak', 'artist');
}

init();

console.log(artists);

// let image = artists.value.items[0].images[0];
</script>

<template>
  <main class="p-16 bg-[#E1E9ED]">
    <img :href="artists.items[0].images[0]" alt="" />
    <pre>{{ artists }}</pre>
  </main>
</template>
