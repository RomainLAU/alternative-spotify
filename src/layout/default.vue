<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center w-full p-6 px-16 bg-[#0f172a] text-white border-b-2 border-b-[#f8fafc0f]"
  >
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
    <router-link
      to="/login"
      class="text-lg hover:font-semibold w-28 grow text-end"
      >Login</router-link
    >
  </div>
  <router-view></router-view>
</template>
