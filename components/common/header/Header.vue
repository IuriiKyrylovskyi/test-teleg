<script setup lang="ts">
import Logo from '@/components/common/header/Logo.vue';
import Chips from '@/components/common/header/Chips.vue';
</script>

<template>
  <header>
    <Logo />
    <Chips />
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 56px;

  margin: 10px 0 0;

  @media (max-width: 767px) {
    margin: 28px 0 0;
    padding: 0px 0 0 14px;
  }
}
</style>
