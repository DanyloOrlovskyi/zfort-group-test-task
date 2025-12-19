<template>
  <div
    class=" overflow-hidden cursor-pointer"
    @click="goToDetails(news.id)"
  >
    <div class="image-wrapper rounded-lg overflow-hidden">
      <img
        :src="news.image"
        alt="News image"
        class="w-full h-48 object-cover"
      >
    </div>
    <div class="pt-4">
      <h3 class="text-lg font-bold color-purple">
        {{ news.title }}
      </h3>
      <p class="text-base">
        {{ news.shortDescription }}
      </p>
      <div class="mt-2 text-sm color-light-gray-200 flex items-center flex-nowrap gap-2">
        <CalendarIcon
          width="16"
          height="16"
        />
        <span>{{ news.publicationDate }}</span> | <span>written by {{ news.author }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import type { NewsItem } from '@/types/news';

defineProps<{
  news: NewsItem
}>();

const router = useRouter();

function goToDetails(id: number) {
  router.push({ name: 'news-details', params: { id } });
}
</script>
