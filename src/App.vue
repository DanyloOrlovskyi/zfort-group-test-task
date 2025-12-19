<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-grow container mx-auto pt-10 pb-10 md:pt-12 md:pb-19 pl-4 pr-4">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

</script>

<style scoped></style>
