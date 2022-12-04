<script setup lang="ts">
import Player from '@/components/Player.vue';
import Header from './Header.vue';
</script>

<template>
  <Header />
  <router-view
    :key="$route.fullPath"
    class="py-6 px-6 sm:p-16 my-16 bg-slate-800"
  ></router-view>
  <Player />
</template>
