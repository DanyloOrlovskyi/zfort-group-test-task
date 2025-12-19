<template>
  <div
    v-if="crumbs.length > 1"
    class="pb-10 text-sm"
    aria-label="Breadcrumb"
  >
    <ol class="flex items-center space-x-3">
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
      >
        <div class="flex items-center">
          <span
            v-if="index > 0"
            class="color-light-gray-200 mx-2"
          >
            /
          </span>
          <component
            :is="index === crumbs.length - 1 ? 'span' : RouterLink"
            :to="crumb.to"
            :class="[
              'transition-colors',
              index === crumbs.length - 1
                ? 'color-light-gray-200'
                : 'text-purple cursor-pointer'
            ]"
            :aria-current="index === crumbs.length - 1 ? 'page' : undefined"
          >
            {{ crumb.title }}
          </component>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink,useRoute } from 'vue-router';

import { useNewsStore } from '@/stores/news';
import type { Crumb } from '@/types/breadcrumbs';

const route = useRoute();
const newsStore = useNewsStore();

const crumbs = computed(() => {
  const items:Crumb[] = [];

  items.push({
    title: 'Latest news',
    to: '/news',
  });

  route.matched.forEach((record) => {

    if (record.meta?.title) {
      let title: string;

      if (typeof record.meta.title === 'function') {
        title = record.meta.title(route, newsStore);
      } else {
        title = record.meta.title as string;
      }

      items.push({
        title,
        to: record.path,
      });
    }
  });

  return items;
});
</script>

<style scoped>
li{
  margin: 0;
}
</style>
