<script setup lang="ts">
import { searchArtist, searchTopTracks } from '@/api/spotify';
import type { Artist } from '../../types/artist';
import { ref } from 'vue';
import { useRoute, useRouter, type LocationQueryValue } from 'vue-router';
import type { TopTracks } from 'types/album';
import TopTracksList from '@/components/TopTracksList.vue';

const route = useRoute();
const router = useRouter();

const artist = ref<Artist | null>(null);
const topTracks = ref<TopTracks | null>(null);

const artistParam = ref<string | LocationQueryValue[]>('');

async function init() {
  artistParam.value = route.params.id ? route.params.id : '';

  if (artistParam.value.length !== 0) {
    router.push({ path: '/artists/' + artistParam.value, replace: true });
    artist.value = await searchArtist(artistParam.value);
    topTracks.value = await searchTopTracks(artistParam.value);
  } else {
    router.push('/');
  }
}

init();
</script>

<template>
  <main
    class="py-8 px-4 sm:p-16 bg-[#0f172a] text-white min-h-screen"
    v-if="artist"
  >
    <div class="flex gap-x-3 mb-16 max-sm:flex-col">
      <img
        :src="artist.images[1].url"
        :alt="artist.id"
        class="sm:object-contain min-w-[200px] w-[200px] justify-self-center xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] max-sm:mb-6"
      />
      <div class="flex flex-col justify-end">
        <h1
          class="xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold"
        >
          {{ artist.name }}
        </h1>
        <p v-if="artist.followers.total > 1000">Verified artist</p>
        <p v-else>Unverified artist</p>
      </div>
    </div>
    <TopTracksList v-if="topTracks" :topTracks="topTracks" />
  </main>
  <main
    v-else
    class="p-16 bg-[#0f172a] text-white min-h-screen flex items-center flex-col pt-72"
  ></main>
</template>
