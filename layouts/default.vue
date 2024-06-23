<script setup>
import PageContainer from '@/components/common/PageContainer.vue';
</script>

<template>
  <main class="main">
    <PageContainer>
      <NuxtPage />
    </PageContainer>
  </main>
</template>

<style>
.main {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
