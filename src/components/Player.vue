<script setup lang="ts">
import { searchTrack } from '@/api/spotify';
import { usePlayerStore } from '@/stores/player';
import type { Track } from 'types/track';
import { ref } from 'vue';
import useImage from '@/hooks/useImage';

const store = usePlayerStore();

const track = ref<Track | null>(null);

store.$subscribe(async (mutation, state) => {
  track.value = await searchTrack(state.trackId);
});

const { md } = useImage();
</script>

<template>
  <div
    class="flex items-center fixed bottom-0 w-full text-white p-4 bg-slate-800"
    v-if="track"
  >
    <img
      :src="track.album.images[md].url"
      :alt="track.name"
      class="mr-4 max-sm:hidden"
    />
    <div class="flex-col items-baseline">
      <p
        class="w-[100px] sm:w-[300px] whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {{ track.name }}
      </p>
      <ul
        class="flex w-[100px] sm:w-[300px] whitespace-nowrap overflow-hidden text-ellipsis"
      >
        <li
          v-for="(artist, index) in track.artists"
          :key="artist.id"
          class="flex items-center font-semibold"
        >
          <router-link
            :to="'/artists/' + artist.id"
            class="hover:underline font-semibold flex items-center"
            >{{ artist.name }}</router-link
          >
          <span v-if="index !== track.artists.length - 1">, &nbsp;</span>
        </li>
      </ul>
    </div>
    <audio
      controls
      class="sm:w-[800px] max-sm:ml-[15%] sm:ml-64"
      :src="(track.preview_url as string)"
      autoplay
      loop
    >
      <source :src="(track.preview_url as string)" />
    </audio>
  </div>
</template>
