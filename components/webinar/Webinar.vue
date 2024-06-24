<script setup lang="ts"></script>

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

    <ul class="list">
      <li class="li">
        <div class="li-imgbox">
          <img
            class="li-img"
            src="@/assets/images/man.png"
            alt="Кирилл КАСАТОНОВ"
          />
        </div>
        <div class="li-content">
          <p class="li-title uppercase">
            Кирилл <span class="blue">КАСАТОНОВ</span>
          </p>
          <p class="li-text">
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
            другими крупными корпорациями
          </p>
        </div>
      </li>
      <li class="li">
        <div class="li-imgbox">
          <img class="li-img" src="@/assets/images/box.png" alt="present" />
        </div>
        <div class="li-content">
          <p class="li-title">Бонус за регистрацию</p>
          <p class="li-text">
            PDF-файл "5 преимуществ профессии фронтенд разработчика"
          </p>
        </div>
      </li>
    </ul>
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
}

h1 {
  color: var(--vt-c-red);
  font-size: 77px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
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
}

.text {
  font-size: 18px;
  font-weight: 400;
  line-height: 148%; /* 26.64px */

  margin: 20px 0 58px;

  & span {
    font-weight: 600;
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
}
</style>
