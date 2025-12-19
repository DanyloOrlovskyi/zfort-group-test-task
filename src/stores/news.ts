import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { NewsItem } from '@/types/news';

export const useNewsStore = defineStore('news', () => {
  const newsList = ref<NewsItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchNews() {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch('/data/news.json');

      if (!response.ok) {
        throw new Error('Failed to load news');
      }

      newsList.value = await response.json();

    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  }

  function getNewsById(id: number): NewsItem | undefined {
    return newsList.value.find(item => item.id === id);
  }

  return { newsList, loading, error, fetchNews, getNewsById };
});
