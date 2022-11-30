<script setup lang="ts">
import { search } from '@/api/spotify';
import SearchBar from '@/components/Searchbar.vue';
import type { SearchAlbums } from 'types/album';
import { ref } from 'vue';
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router';
import moment from 'moment';

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
    class="container-xl min-h-screen bg-[#0f172a] text-white flex flex-col p-16"
  >
    <SearchBar />
    <div v-if="albums">
      <ul class="flex gap-7 mt-12 flex-wrap justify-center">
        <li
          v-for="album in albums?.items"
          :key="album.id"
          class="max-w-[300px] bg-[#17233d] p-4 pb-8 rounded-lg hover:bg-[#1d2b49]"
        >
          <router-link :to="`/album/${album.id}`">
            <img :src="album.images[1].url" alt="album.name" />
            <p
              class="max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden mt-4"
            >
              {{ album.name }}
            </p>
            <p class="max-w-[300px] flex whitespace-nowrap overflow-hidden text-ellipsis">
              {{ moment(album.release_date).format('YYYY') }}&nbsp;<span class="text-xs self-center">●</span> &nbsp;
              <ul class="flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                <li
                  v-for="(artist, index) in album.artists"
                  :key="artist.id"
                  class="flex items-center"
                >
                  {{ artist.name }}
                  <p v-if="index !== album.artists.length - 1">, &nbsp;</p>
                </li>
              </ul>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <p v-else>No query</p>
  </main>
</template>
