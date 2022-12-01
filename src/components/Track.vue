<script setup lang="ts">
import moment from 'moment';
import type { TrackItem } from '../../types/album';

const props = defineProps<{ track?: TrackItem }>();

const duration = moment.duration(props?.track?.duration_ms);
</script>

<template>
  <tr
    class="text-[#b1b1b1] hover:text-white hover:bg-slate-600 p-4 cursor-pointer"
  >
    <td class="text-center rounded-l-lg p-1">
      {{ track?.track_number }}
    </td>
    <td class="flex flex-col items-baseline p-1">
      <p class="text-base text-white">
        {{ track?.name }}
      </p>
      <div class="flex gap-x-2">
        <p v-if="track?.explicit">🅴</p>
        <ul class="flex overflow-hidden text-ellipsis">
          <li
            v-for="(artist, index) in track?.artists"
            :key="artist.id"
            class="flex"
          >
            <router-link
              :to="'/artist?name=' + artist.name"
              class="hover:underline whitespace-nowrap"
              >{{ artist.name }}</router-link
            >
            <p v-if="index !== track?.artists.length - 1">, &nbsp;</p>
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
