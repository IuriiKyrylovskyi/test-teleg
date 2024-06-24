<script setup lang="ts">
import WebinarList from '@/components/webinar/WebinarList.vue';
</script>

<template>
  <div class="column">
    <div class="webinar-chip">
      <img src="/images/icons/globe.svg" alt="globe icon" />
      <p>Вебинар</p>
    </div>

    <h1>front-end</h1>

    <h2 class="subtitle">
      <span class="subtitle-chip">с нуля</span> легкий старт в IT профессии
    </h2>

    <p class="text">
      Узнайте какими
      <span> навыками должен обладать фронтенд разработчик в 2022 году</span> и
      как начать карьеру в востребованной профессии
    </p>

    <WebinarList />
  </div>
</template>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;

  max-width: 427px;
  width: 100%;
}

.webinar-chip {
  width: 119px;
  height: 32px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 5px;
  background: #4252d1;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */

  @media (max-width: 767px) {
    width: 89px;
    height: 24px;
    flex-shrink: 0;
    gap: 4px;

    font-size: 12px;
    line-height: 18px;

    margin: 0 auto;

    & img {
      max-width: 13px;
    }
  }
}

h1 {
  color: var(--vt-c-red);
  font-size: 77px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 53px;
    text-align: center;
  }
}

.subtitle {
  color: var(--vt-c-white);
  font-size: 21.949px;
  font-weight: 600;
  line-height: normal;

  display: flex;
  align-items: center;
  gap: 16px;

  &-chip {
    flex: 0 0 107px;
    width: 107px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 23.639px;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;

    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--vt-c-red);
      border-radius: 5px;
      transform: rotate(-3.506deg);
      z-index: -1;
    }
  }

  @media (max-width: 767px) {
    font-size: 15px;
    gap: 12px;
    justify-content: center;

    &-chip {
      flex: 0 0 76px;
      width: 76px;
      height: 28px;
      font-size: 16px;
    }
  }
}

.text {
  font-size: 18px;
  font-weight: 400;
  line-height: 148%; /* 26.64px */

  margin: 20px 0 58px;

  & span {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    text-align: center;
    margin: 20px 0 -16px;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    &-imgbox {
      flex: 0 0 56px;
      width: 56px;
      display: flex;
    }
    &-content {
      max-width: 307px;
      width: 100%;
    }
    &-title {
      font-size: 13px;
      font-weight: 700;
      line-height: 120%; /* 15.6px */
    }
    &-text {
      line-height: 160%; /* 19.2px */
    }
  }

  @media (max-width: 767px) {
    &.desktop {
      display: none;
    }
  }
  @media (max-width: 767px) {
    display: none;

    &.mobile {
      display: flex;
    }
  }
}
</style>
