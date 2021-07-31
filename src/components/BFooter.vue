<template>
  <footer class="footer">
    <div class="footer__prices footer__item">
      <span class="footer__item-title">Цена, ₽</span>
      <div class="footer__item-line">
        <div class="footer__item-indicators">
          <div class="indicator-left indicator">
            <div class="indicator-data">3 500 000</div>
          </div>
          <div class="indicator-right indicator">
            <div class="indicator-data">5 800 000</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__square footer__item">
      <span class="footer__item-title">Площадь, м2</span>
      <div class="footer__item-line">
        <div class="footer__item-indicators">
          <div class="indicator-left indicator">
            <div class="indicator-data">120</div>
          </div>
          <div class="indicator-right indicator">
            <div class="indicator-data">200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__floors footer__item">
      <span class="footer__item-title">Этажей</span>
      <div class="footer__item-checkboxes">
        <div class="checkbox-wrapper" v-for="num in 3" :key="num">
          <input type="checkbox" name="floors" /> {{ num }}
        </div>
      </div>
    </div>
    <div class="footer__bedrooms footer__item">
      <span class="footer__item-title">Спален</span>
      <div class="footer__item-checkboxes">
        <div class="checkbox-wrapper" v-for="num in 3" :key="num">
          <input type="checkbox" name="bedrooms" /> {{ num }}
        </div>
      </div>
    </div>
    <div class="footer__button footer__item">
      <span>показать проекты</span>
      <img src="@/assets/icons/arrow-right-dark.svg" alt="" />
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  width: 60%;
  background-color: #fff;
  height: 80px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 22% 22% 20% 20% 18%;
  &__button {
    background-color: #f1eee9;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "geometria";
    display: flex;
    flex-direction: row !important;
    cursor: pointer;
    span {
      display: block;
      width: 50px;
      line-height: 18px;
      margin-left: 20px;
    }
    img {
      margin-right: 20px;
    }
  }
  &__item {
    height: 100%;
    border-right: 1px solid #f1eee9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &-title {
      color: #222222;
      font-size: 10px;
      width: 80%;
      margin-top: 12px;
    }
    &-line {
      width: 80%;
      height: 4px;
      background-color: #f1eee9;
      margin-bottom: 14px;
      position: relative;
    }
    &-indicators {
      width: 50%;
      height: 100%;
      background-color: black;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .indicator {
        position: absolute;
        width: 12px;
        height: 12px;
        background-color: black;
        border-radius: 50%;
        &-data {
          font-family: "geometria";
          position: absolute;
          top: -16px;
          font-size: 10px;
          font-weight: 700;
          width: 100px;
          text-align: center;
          left: -370%;
        }
      }
      .indicator-left {
        right: 100%;
        transform: translate(50%, -4px);
        top: 0;
      }
      .indicator-right {
        left: 100%;
        transform: translate(-50%, -4px);
        top: 0;
      }
    }
    &-checkboxes {
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
    .checkbox-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      input {
        width: 16px;
        height: 16px;
        border-radius: 0;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
