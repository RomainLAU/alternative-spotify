<script setup lang="ts">
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
    class="flex items-center justify-between w-full py-6 px-6 sm:px-16 bg-[#0f172a] text-white border-b-2 border-b-[#f8fafc0f] fixed top-0 z-50"
  >
    <div class="items-center hidden sm:flex">
      <router-link to="/search" class="text-lg hover:font-semibold w-28"
        >Search</router-link
      >
    </div>
    <router-link
      to="/search"
      class="text-lg hover:font-semibold w-28 flex sm:hidden"
      >Search</router-link
    >
    <router-link
      v-if="!userData"
      to="/login"
      class="text-lg hover:font-semibold w-28 grow text-end"
      >Login</router-link
    >
    <p v-else>Hi, {{ userData.display_name }} !</p>
  </div>
</template>
