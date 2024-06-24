<template>
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
</template>

<style scoped lang="scss">
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
    display: none;
  }
}
</style>
