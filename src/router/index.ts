import { createRouter, createWebHistory } from 'vue-router';

import NewsDetailsPage from '@/pages/NewsDetailsPage.vue';
import NewsListPage from '@/pages/NewsListPage.vue';
import { useNewsStore } from '@/stores/news';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsListPage,
      meta: {
        title: 'Latest news',
      },
    },
    {
      path: '/news/:id',
      name: 'news-details',
      component: NewsDetailsPage,
      props: true,
      meta: {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        title: (to: any) => {
          const newsStore = useNewsStore();
          const id = Number(to.params.id);
          const item = newsStore.getNewsById(id);

          return item?.title;
        },
      },
    },
  ],
});

export default router;
