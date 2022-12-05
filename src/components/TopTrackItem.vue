<script setup lang="ts">
import moment from 'moment';
import type { TopTrack } from '../../types/album';
import { usePlayerStore } from '@/stores/player';
import { ref } from 'vue';
import useImage from '@/hooks/useImage';

const store = usePlayerStore();
const { updateTrack } = usePlayerStore();

const props = defineProps<{ topTrack: TopTrack; index: number }>();

const duration = moment.duration(props?.topTrack?.duration_ms);

const playTrack = (trackId: string) => {
  updateTrack(trackId);
};

const trackId = ref<string | null>(null);

store.$subscribe((mutation, state) => {
  trackId.value = state.trackId;
});

const { md } = useImage();
</script>

<template>
  <tr
    class="text-[#b1b1b1] hover:text-white hover:bg-slate-800 p-4 cursor-pointer"
    :class="{
      'text-green-500 hover:text-green-600': trackId === topTrack.id,
    }"
    v-if="typeof index !== 'undefined' && topTrack"
    @click="playTrack(topTrack?.id)"
  >
    <td class="text-center rounded-l-lg p-1 w-12">
      <p>{{ index + 1 }}</p>
    </td>
    <td class="w-12">
      <img
        :src="topTrack.album.images[md].url"
        :alt="topTrack.name"
        class="object-contain"
      />
    </td>
    <td class="flex flex-col items-baseline p-1 pl-4 grow">
      <p
        class="text-base text-white max-w-[175px] sm:max-w-sm overflow-hidden text-ellipsis whitespace-nowrap"
        :class="{
          'text-green-500 hover:text-green-400': trackId === topTrack.id,
        }"
      >
        {{ topTrack.name }}
      </p>
      <div class="flex gap-x-2">
        <p v-if="topTrack.explicit">🅴</p>
        <ul
          class="flex max-w-[175px] sm:max-w-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <li
            v-for="(artist, index) in topTrack.artists"
            :key="artist.id"
            class="flex"
          >
            <router-link
              :to="`/artists/${artist.id}`"
              class="hover:underline whitespace-nowrap"
              >{{ artist.name }}</router-link
            >
            <p v-if="index !== topTrack.artists.length - 1">, &nbsp;</p>
          </li>
        </ul>
      </div>
    </td>
    <td class="rtl:mr-5 text-right p-1 max-sm:hidden">
      {{ duration.minutes() }}:{{
        parseInt(duration.seconds().toString()) < 10
          ? '0' + duration.seconds()
          : duration.seconds()
      }}
    </td>
    <td class="rounded-r-lg p-1"></td>
  </tr>
</template>
