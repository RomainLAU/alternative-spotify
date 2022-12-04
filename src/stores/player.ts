import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', () => {
  const trackId = ref<string>('');
  function updateTrack(id: string) {
    trackId.value = id;
  }

  return { trackId, updateTrack };
});
