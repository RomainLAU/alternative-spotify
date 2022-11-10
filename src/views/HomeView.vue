<script setup lang="ts">
import { search } from '@/api/spotify';
import { ref } from 'vue';

const response: Array<any> = ref(null);

async function init() {
  response.value = await search('ziak', 'artist');
}

init();
</script>

<template>
  <main class="p-16 bg-[#E1E9ED]">
    <img
      v-if="response !== null"
      :src="response.artists.items[0].images[0].url"
      alt=""
    />
    <h1 v-if="response !== null" class="">
      {{ response.artists.items[0].name }}
    </h1>
  </main>
</template>
