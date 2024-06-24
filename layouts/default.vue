<script setup>
import PageContainer from '@/components/common/PageContainer.vue';
import Bgs from '@/components/common/bgs/Bgs.vue';
</script>

<template>
  <main class="main">
    <PageContainer>
      <NuxtPage />
    </PageContainer>

    <Bgs />
  </main>
</template>

<style>
.main {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  position: relative;
}
</style>
