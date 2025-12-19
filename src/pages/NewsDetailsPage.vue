<template>
  <BreadcrumbsComponent />
  <div
    v-if="newsStore.loading"
  >
    Loading...
  </div>
  <div
    v-else-if="newsStore.error || !post"
    class="text-red-500"
  >
    {{ newsStore.error || 'News not found' }}
  </div>
  <div v-else>
    <img
      :src="post.image"
      class="w-full h-80 object-cover mb-4 rounded-lg"
      alt="News image"
    >
    <h2 class="text-2xl font-bold mb-4">
      {{ post.title }}
    </h2>
    <div class="text-sm flex flex-nowrap items-center gap-2 color-light-gray-200 mb-8">
      <CalendarIcon
        width="16"
        height="16"
      />
      <span>{{ post.publicationDate }}</span> | <span>written by {{ post.author }}</span>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="text-base html-content"
      v-html="post.text"
    ></div>
    <!--eslint-enable-->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import CalendarIcon from '@/components/icons/CalendarIcon.vue';

import { useNewsStore } from '../stores/news';

const route = useRoute();
const newsStore = useNewsStore();
const newsId = Number(route.params.id);
const post = computed(() => newsStore.getNewsById(newsId));

onMounted(() => {
  if (newsStore.newsList.length === 0) {
    newsStore.fetchNews();
  }
});
</script>

<style scoped></style>
