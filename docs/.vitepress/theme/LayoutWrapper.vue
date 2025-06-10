<template>
  <div class="layout-wrapper">
    <CustomHeader />
    <div class="content-wrapper">
      <Content />
    </div>
  </div>
</template>

<script setup>
import CustomHeader from './CustomHeader.vue'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
}

.content-wrapper {
  padding-top: 70px; /* Height of navbar */
}

@media (max-width: 480px) {
  .content-wrapper {
    padding-top: 60px; /* Adjusted height for mobile */
  }
}
</style>