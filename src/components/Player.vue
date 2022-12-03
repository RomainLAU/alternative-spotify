<script setup lang="ts">
import { usePlayerStore } from '@/stores/player';
import { ref } from 'vue';

const store = usePlayerStore();

const trackUrl = ref<String>('');
const trackName = ref<String>('');

store.$subscribe((mutation, state) => {
  trackUrl.value = state.trackPreview;
  trackName.value = state.trackName;
});
</script>

<template>
  <p>{{ trackName }}</p>
  <audio controls class="w-[800px]" :src="trackUrl">
    <source :src="trackUrl" />
  </audio>
  <div></div>
</template>
