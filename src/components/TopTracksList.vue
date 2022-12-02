<script setup lang="ts">
import type { TopTracks } from 'types/album';
import TopTrackItem from './TopTrackItem.vue';

defineProps<{ topTracks: TopTracks }>();
</script>

<template>
  <table class="w-full border-separate border-spacing-x-0 border-spacing-y-3">
    <tbody
      v-for="(track, index) in topTracks.tracks"
      class="mt-6"
      :key="track.id"
    >
      <TopTrackItem
        v-if="index < 5"
        :topTrack="track"
        :index="index"
        :key="track.id"
      />
    </tbody>
  </table>
</template>
