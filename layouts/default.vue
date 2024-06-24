<script setup>
import PageContainer from '@/components/common/PageContainer.vue';
import Header from '@/components/common/header/Header.vue';
import Bgs from '@/components/common/bgs/Bgs.vue';
</script>

<template>
  <main class="main">
    <Bgs />

    <PageContainer>
      <Header />
      <NuxtPage />
    </PageContainer>
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
