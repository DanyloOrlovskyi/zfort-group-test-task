<template>
  <footer class="pt-8 pb-8 mt-auto shadow-top">
    <div class="container px-4 mx-auto flex flex-nowrap flex-col-reverse items-center gap-4 md:justify-between md:flex-row">
      <div class="copyright text-sm">
        Copyright 2025 Test. All rights reserved.
      </div>
      <div class="contacts flex flex-nowrap gap-4">
        <div class="email">
          <a
            class="flex items-center flex-nowrap gap-2 text-sm color-purple"
            href="mailto:info@test.com"
          >
            <EmailIcon
              width="16"
              height="16"
            />
            info@test.com
          </a>
        </div>
        <div class="phone">
          <a
            class="flex items-center flex-nowrap gap-2 text-sm color-purple"
            href="tel:+380953908751"
          >
            <PhoneIcon
              width="16"
              height="16"
            />
            +380 95 390 87 51
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import EmailIcon from '@/components/icons/EmailIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
</script>

<style scoped></style>
