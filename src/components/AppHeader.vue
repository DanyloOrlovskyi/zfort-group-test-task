<template>
  <header class="bg-white shadow-md sticky top-0">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.jpg"
            width="120"
            height="32"
            alt="Logo"
          >
        </router-link>
      </div>
      <div class="user-info flex gap-3 items-center">
        <div class="user-name__wrapper">
          <span class="text-base">
            {{ user?.first_name }} {{ user?.last_name }}
          </span>
        </div>
        <div class="user-image__wrapper">
          <img
            class="user-image rounded-full"
            :src="user?.photo"
            width="44"
            height="44"
            alt="User photo"
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed, onBeforeMount } from 'vue';

import { useUserStore } from '@/stores/user';
import type { User } from '@/types/user.ts';

const userStore = useUserStore();

const user: ComputedRef<User | undefined> = computed(() => {
  return userStore.user;
});

onBeforeMount(async () => {
  await userStore.fetchUser();
});

</script>

<style scoped></style>
