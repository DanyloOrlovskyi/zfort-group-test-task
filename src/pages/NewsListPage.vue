<template>
  <div>
    <h2 class="text-xl font-bold mb-10">
      Latest News
    </h2>
    <div
      v-if="newsStore.loading"
      class="text-center"
    >
      Loading...
    </div>
    <div
      v-else-if="newsStore.error"
      class="text-red-500"
    >
      {{ newsStore.error }}
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10"
    >
      <NewsItem
        v-for="item in paginatedNews"
        :key="item.id"
        :news="item"
      />
    </div>
    <nav
      v-if="totalPages > 1"
      class="flex justify-center mt-12"
      aria-label="Pagination"
    >
      <div class="flex items-center space-x-2">
        <button
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg border border-transparent disabled:opacity-50 disabled:hidden hover:border-black cursor-pointer transition"
          @click="goToPage(currentPage - 1)"
        >
          Previous
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          :class="[
            'px-4 py-2 transition border border-transparent cursor-pointer hover:border-black rounded-lg',
            currentPage === page
              ? 'color-light-gray-200 pointer-events-none'
              : ''
          ]"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <button
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg border border-transparent disabled:hidden cursor-pointer hover:border-black transition"
          @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,watch } from 'vue';

import NewsItem from '../components/NewsItem.vue';
import { useNewsStore } from '../stores/news';

const newsStore = useNewsStore();
const itemsPerPage = 6;

const currentPage = ref(1);

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return newsStore.newsList.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(newsStore.newsList.length / itemsPerPage);
});

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value){
    return;
  }
  currentPage.value = page;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  if (newsStore.newsList.length === 0) {
    newsStore.fetchNews();
  }
});

watch(() => newsStore.newsList.length, () => {
  currentPage.value = 1;
});
</script>

<style scoped></style>
