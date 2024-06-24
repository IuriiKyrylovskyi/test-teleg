<script setup lang="ts"></script>

<template>
  <div class="main-bg">
    <img
      class="bg-image"
      src="@/assets/images/main-bg.png"
      alt="main background"
    />
  </div>
</template>

<style scoped lang="scss">
.main-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & img {
    object-position: 0 0;
  }
}
</style>
