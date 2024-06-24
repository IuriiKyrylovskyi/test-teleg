<script setup lang="ts">
interface IChip {
  iconSrc: string;
  alt: string;
  text: string;
}
const props = defineProps<{ item: IChip }>();

const { item } = toRefs(props);
</script>

<template>
  <div class="chip">
    <img :src="item.iconSrc" :alt="item.alt" />
    <p>{{ item.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.chip {
  flex: 0 0 141px;
  width: 141px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  background: var(--vt-c-tuna);

  @media (max-width: 767px) {
    flex: 0 0 88px;
    width: 88px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 6px;
    gap: 4px;
    font-size: 11px;

    & img {
      max-width: 12px;
    }
  }
}
</style>
