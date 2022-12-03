import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', () => {
  const trackName = ref<string>('');
  const trackPreview = ref<string>('');
  function updateTrack(url: string, name: string) {
    trackPreview.value = url;
    trackName.value = name;
  }

  return { trackPreview, trackName, updateTrack };
});
