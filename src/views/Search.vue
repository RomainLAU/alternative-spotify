<script setup lang="ts">
import { search } from '@/api/spotify';
import SearchBar from '@/components/Searchbar.vue';
import type { SearchAlbums } from 'types/album';
import { ref } from 'vue';
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();

const albums = ref<SearchAlbums | null>(null);

async function init() {
  if (route.query.query) {
    albums.value = (await search(route.query.query, 'album')).albums;
  }
}

init();
</script>

<template>
  <main
    class="container-xl h-screen bg-[#0f172a] text-white flex flex-col p-16"
  >
    <SearchBar />
    <div v-if="albums">
      <ul class="flex gap-7 mt-12">
        <li v-for="album in albums?.items" :key="album.id">
          <img :src="album.images[1].url" alt="album.name" />
        </li>
      </ul>
    </div>
    <p v-else>No query</p>
  </main>
</template>
