<script setup lang="ts">
import type { Tracks } from 'types/album';
import Track from './Track.vue';

defineProps<{ tracks: Tracks }>();
</script>

<template>
  <table class="w-full border-separate border-spacing-x-0 border-spacing-y-3">
    <tr class="text-[#b1b1b1]">
      <th class="w-16 border-b border-slate-800 pb-3">#</th>
      <th class="grow text-left border-b border-slate-800 pb-3">TITRE</th>
      <th class="text-right border-b border-slate-800 pb-3">🕒</th>
      <th class="border-b border-slate-800 pb-3"></th>
    </tr>
    <tbody v-for="track in tracks.items" class="mt-6">
      <Track :track="track" :key="track.id" />
    </tbody>
  </table>
</template>
