<script setup lang="ts">
import { search } from '@/api/spotify';
import SearchBar from '@/components/Searchbar.vue';
import type { SearchAlbums } from 'types/album';
import { ref } from 'vue';
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router';
import useImage from '@/hooks/useImage';

const route: RouteLocationNormalizedLoaded = useRoute();

const albums = ref<SearchAlbums | null>(null);

async function init() {
  if (route.query.query) {
    albums.value = (await search(route.query.query, 'album')).albums;
  } else {
    albums.value = (await search('Imagine dragons', 'album')).albums;
  }
}

init();

const { sm } = useImage();
</script>

<template>
  <main
    class="container-xl min-h-screen bg-[#0f172a] text-white flex flex-col p-16 transition-all"
  >
    <SearchBar />
    <div v-if="albums">
      <ul class="flex gap-7 mt-12 mb-4 flex-wrap justify-center">
        <li
          v-for="album in albums?.items"
          :key="album.id"
          class="max-w-[300px] bg-[#17233d] p-4 pb-8 rounded-lg hover:bg-[#1d2b49]"
        >
          <router-link :to="`/albums/${album.id}`">
            <img
              :src="album.images[sm].url"
              alt="album.name"
              class="object-contain"
            />
            <p
              class="max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden mt-4"
            >
              {{ album.name }}
            </p>
            <div
              class="max-w-[300px] flex whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {{ new Date(album.release_date).getFullYear() }}&nbsp;<span
                class="text-xs self-center"
                >●</span
              >
              &nbsp;
              <ul
                class="flex items-center whitespace-nowrap overflow-hidden text-ellipsis"
              >
                <li
                  v-for="(artist, index) in album.artists"
                  :key="artist.id"
                  class="flex items-center"
                >
                  {{ artist.name }}
                  <p v-if="index !== album.artists.length - 1">, &nbsp;</p>
                </li>
              </ul>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <p v-else class="text-center">No data found...</p>
  </main>
</template>
