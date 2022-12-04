<script setup lang="ts">
import moment from 'moment';
import type { TrackItem } from '../../types/album';
import { usePlayerStore } from '@/stores/player';
import { ref } from 'vue';

const { updateTrack } = usePlayerStore();
const store = usePlayerStore();

const props = defineProps<{ track: TrackItem }>();

const duration = moment.duration(props?.track?.duration_ms);

const playTrack = (trackId: string) => {
  updateTrack(trackId);
};

const trackId = ref<string | null>(null);

store.$subscribe((mutation, state) => {
  trackId.value = state.trackId;
});
</script>

<template>
  <tr
    class="text-[#b1b1b1] hover:text-white hover:bg-slate-800 p-4 cursor-pointer"
    :class="{
      'text-green-500 hover:text-green-600': trackId === track.id,
    }"
    v-if="track && typeof track !== 'undefined'"
    @click="playTrack(track?.id)"
  >
    <td class="text-center rounded-l-lg p-1 max-sm:hidden">
      {{ track.track_number }}
    </td>
    <td class="flex flex-col items-baseline p-1 max-w-[175px] sm:max-w-sm">
      <p
        class="text-base text-white max-w-[175px] sm:max-w-sm overflow-hidden text-ellipsis whitespace-nowrap"
        :class="{
          'text-green-500 hover:text-green-600': trackId === track.id,
        }"
      >
        {{ track.name }}
      </p>
      <div class="flex gap-x-2">
        <p v-if="track.explicit">🅴</p>
        <ul
          class="max-w-[175px] flex sm:max-w-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <li
            v-for="(artist, index) in track.artists"
            :key="artist.id"
            class="flex"
          >
            <router-link
              :to="'/artists/' + artist.id"
              class="hover:underline whitespace-nowrap"
              >{{ artist.name }}</router-link
            >
            <p v-if="track && index !== track.artists.length - 1">, &nbsp;</p>
          </li>
        </ul>
      </div>
    </td>
    <td class="rtl:mr-5 text-right p-1">
      {{ duration.minutes() }}:{{
        parseInt(duration.seconds().toString()) < 10
          ? '0' + duration.seconds()
          : duration.seconds()
      }}
    </td>
    <td class="rounded-r-lg p-1"></td>
  </tr>
</template>
