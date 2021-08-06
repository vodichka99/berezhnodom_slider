<template>
  <footer class="footer" :class="{'d-grid': showFilter}">
    <span class="footer-title">Параметры</span>
    <div class="button-close" :class="{'d-block': showFilter}" @click="showFilter = false">
      <img src="@/assets/icons/close-icon.svg" alt="" />
    </div>

    <div class="footer-prices footer-item">
      <span class="footer-item-title">Цена, ₽</span>
      <div class="footer-item-line">
        <div class="footer-item-indicators">
          <div class="indicator-left indicator">
            <div class="indicator-data">3 500 000</div>
          </div>
          <div class="indicator-right indicator">
            <div class="indicator-data">5 800 000</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-square footer-item">
      <span class="footer-item-title">Площадь, м2</span>
      <div class="footer-item-line">
        <div class="footer-item-indicators">
          <div class="indicator-left indicator">
            <div class="indicator-data">120</div>
          </div>
          <div class="indicator-right indicator">
            <div class="indicator-data">200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-floors footer-item">
      <span class="footer-item-title">Этажей</span>
      <div class="footer-item-checkboxes">
        <div class="checkbox-wrapper" v-for="num in 3" :key="num">
          <input type="checkbox" name="floors" /> {{ num }}
        </div>
      </div>
    </div>
    <div class="footer-bedrooms footer-item">
      <span class="footer-item-title">Спален</span>
      <div class="footer-item-checkboxes wrapper-1">
        <div class="checkbox-wrapper" v-for="num in 3" :key="num">
          <input type="checkbox" name="bedrooms" /> {{ num }}
        </div>
      </div>
      <div class="footer-item-checkboxes wrapper-2">
        <div class="checkbox-wrapper" v-for="num in 4" :key="num">
          <input type="checkbox" name="bedrooms" /> {{ num }}
        </div>
      </div>
    </div>
    <div class="footer-button footer-item">
      <span>показать проекты</span>
      <img
        class="footer-arrow-right-dark"
        src="@/assets/icons/arrow-right-dark.svg"
        alt=""
      />
      <img
        class="footer-arrow-right"
        src="@/assets/icons/arrow-right.svg"
        alt=""
      />
    </div>
  </footer>
  <button class="button-to-filter" @click="showFilter = true">
    ПОДОБРАТЬ ПРОЕКТЫ ПО параметрам
    <img src="@/assets/icons/arrow-right-dark.svg" alt="" />
  </button>
</template>
<script>
export default {
  data() {
    return {
      showFilter: false,
    };
  },
};
</script>
<style lang="scss">
.button-to-filter {
  width: 100%;
  height: 72px;
  background: white;
  position: absolute;
  bottom: 0;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.15em;
  border: none;
  display: none;
  align-items: center;
  justify-content: center;
  img {
    margin-left: 22px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
}
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

  @media (max-width: 768px) {
    grid-template-rows: 72px repeat(4, 1fr) 72px;
    display: none;
    z-index: 20;
    grid-template-columns: 100%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    &-item {
      &-checkboxes {
        display: grid !important;
        grid-template-columns: repeat(4, 25%);
      }
      &-title {
        // margin-bottom: 20px;
        font-size: 14px !important;
      }
      &-line {
        height: 10px !important;
        border-radius: 10px;
        .indicator {
          width: 20px !important;
          height: 20px !important;
          top: -1px !important;
          &-data {
            font-weight: 700 !important;
            font-size: 12px !important;
            transform: translate(34px, -20px);
          }
        }
        // margin-top: 20px;
      }
    }
    &-button {
      height: 72px !important;
      background-color: #222222 !important;
      color: white;
      position: relative;
      span {
        width: max-content !important;
        font-weight: 500;
      }
    }
  }
  &-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #222222;
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 20px;
    }
  }
  .wrapper-1 {
    display: flex;
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  .wrapper-2 {
    display: none;
    @media (max-width: 768px) {
      display: grid;
    }
  }
  &-arrow-right-dark {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &-arrow-right {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  &-button {
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
  &-item {
    height: 100%;
    border-right: 1px solid #f1eee9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
    &-title {
      color: #222222;
      font-size: 10px;
      width: 80%;
      margin-top: 12px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    &-line {
      width: 80%;
      height: 4px;
      background-color: #f1eee9;
      margin-bottom: 14px;
      position: relative;
      @media (max-width: 768px) {
        width: 100%;
      }
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
      @media (max-width: 768px) {
        width: 100%;
      }
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
  &-floors,
  &-bedrooms {
    @media (max-width: 768px) {
      justify-content: center;
      .footer-item-title {
        margin-bottom: 20px;
      }
    }
  }
  .button-close{
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
.d-grid{
  display: grid;
}
.d-block{
  display: block !important;
}
</style>
