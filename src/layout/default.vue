<script setup lang="ts">
import Player from '@/components/Player.vue';
import { getUser } from '@/api/spotify';
import { ref } from 'vue';
import type { User } from 'types/user';

const userData = ref<User | null>(null);

async function init() {
  userData.value = await getUser();
}

init();
</script>

<template>
  <div
    class="flex items-center justify-between w-full p-6 px-16 bg-[#0f172a] text-white border-b-2 border-b-[#f8fafc0f] fixed top-0"
  >
    <div class="flex items-center">
      <router-link to="/" class="text-lg hover:font-semibold w-28"
        >Home</router-link
      >
      <router-link
        to="/artists/1nRbtbdYK51y71nVOxu332"
        class="text-lg hover:font-semibold w-28"
        >Artist</router-link
      >
      <router-link to="/search" class="text-lg hover:font-semibold w-28"
        >Search</router-link
      >
    </div>
    <router-link
      v-if="!userData"
      to="/login"
      class="text-lg hover:font-semibold w-28 grow text-end"
      >Login</router-link
    >
    <p v-else>Hi, {{ userData.display_name }} !</p>
  </div>
  <router-view :key="$route.fullPath" class="my-12"></router-view>
  <Player />
</template>
