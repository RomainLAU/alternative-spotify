<script setup lang="ts">
import { search, searchArtist } from '@/api/spotify';
import { ref } from 'vue';

const response: Array<any> = ref(null);

async function init() {
  response.value = await searchArtist('Imagine Dragons');
  console.log(response.value);
}

init();
</script>

<template>
  <main class="p-16 bg-[#E1E9ED]">
    <h1 v-if="response !== null" class="text-9xl font-extrabold">
      {{ response.name }}
    </h1>
    <img v-if="response !== null" :src="response.images[0].url" alt="" />
  </main>
</template>
