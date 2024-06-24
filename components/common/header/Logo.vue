<script setup lang="ts">
import { Routes } from '@/interfaces/global';
</script>

<template>
  <RouterLink :to="Routes.HOME">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  flex: 0 0 182px;
  width: 182px;

  aspect-ratio: 182 / 56;

  & img {
    position: absolute;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    flex: 0 0 101px;
    width: 101px;
    aspect-ratio: 101 / 32;
  }
}
</style>
