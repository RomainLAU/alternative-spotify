<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, type LocationQueryValue } from 'vue-router';

const route = useRoute();

const search = ref<string | LocationQueryValue[]>('');

function init() {
  if (route.query.query) {
    search.value = route.query.query;
  }
}

init();
</script>

<template>
  <form method="GET" class="self-center w-1/3">
    <input
      v-model="search"
      class="text-black h-12 text-xl w-full rounded-lg p-2"
      name="query"
      placeholder="ex: Akimbo"
    />
  </form>
</template>
