import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { User } from '@/types/user';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>();
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchUser() {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch('/user.json');

      if (!response.ok) {
        throw new Error('Failed to load news');
      }

      user.value = {
        id: 1,
        first_name: 'Ronnie',
        last_name: 'Radke',
        photo: 'https://placehold.co/44x44?text=RR',
      };

    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  }

  return { loading, error , user, fetchUser };
});
