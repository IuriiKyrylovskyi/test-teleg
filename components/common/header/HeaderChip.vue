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

<style scoped>
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
}
</style>
