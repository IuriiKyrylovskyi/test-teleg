<script setup lang="ts">
import HeaderChip from '@/components/common/header/HeaderChip.vue';

const chips = ref([
  {
    iconSrc: '/images/icons/calendar.svg',
    alt: 'calendar icon',
    text: '28 декабря',
  },
  {
    iconSrc: '/images/icons/clock.svg',
    alt: 'clock icon',
    text: '3,5 часа',
  },
]);
</script>

<template>
  <div class="chips">
    <HeaderChip v-for="c in chips" :key="c.alt" :item="c" />
  </div>
</template>

<style scoped lang="scss">
.chips {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media (max-width: 767px) {
    gap: 6px;

    flex-wrap: wrap;
  }
}
</style>
