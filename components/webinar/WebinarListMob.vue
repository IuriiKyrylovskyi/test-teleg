<template>
  <ul class="list mobile">
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
        <p class="li-text">PDF-файл "5 преимуществ профессии веб-дизайнера"</p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 22px;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 11px;

      max-width: 228px;
    }

    .li-imgbox {
      flex: 0 0 56px;
      width: 56px;
      min-width: 56px;
      height: 100%;
      display: flex;
      flex-direction: column;

      & img {
        min-width: 46px;
      }
    }
    .li-content {
      max-width: 307px;
      width: 100%;
    }
    .li-title {
      font-size: 13px;
      font-weight: 700;
      line-height: 120%; /* 15.6px */
    }
    .li-text {
      line-height: 160%; /* 19.2px */
    }
  }
}
</style>
