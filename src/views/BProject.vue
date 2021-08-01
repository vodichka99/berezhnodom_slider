<template>
  <div class="project-page">
    <div class="info-block">
      <div class="main-info">
        <router-link :to="{ name: 'home' }">
          <button type="button" class="button-back">
            <img src="@/assets/icons/arrow-left.svg" alt="" />вернуться назад
          </button>
        </router-link>
        <h3 class="main-info-title">{{ content.name }}</h3>
        <p class="main-info-descr">{{ content.descr }}</p>
        <span class="main-info-price">{{ content.fullPrice }} ₽</span>
      </div>
      <div class="parameters">
        <span class="parameters-title">Характеристики проекта</span>
        <div class="parameters-block">
          <div class="parameters-block-item">
            <img src="@/assets/icons/total-area-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.totalArea }} м2
              </span>
              <span class="parameters-block-parameter">Общая площадь</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/living-area-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.livingArea }} м2
              </span>
              <span class="parameters-block-parameter">Жилая площадь</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/floors-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value"> {{ content.floors }} </span>
              <span class="parameters-block-parameter">Этажи</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/bathroom-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.bathrooms }}
              </span>
              <span class="parameters-block-parameter">Ванные комнаты</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/terrace-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value">
                {{ content.terraces }}
              </span>
              <span class="parameters-block-parameter">Террасы</span>
            </div>
          </div>
          <div class="parameters-block-item">
            <img src="@/assets/icons/water-icon.svg" alt="!" />
            <div class="parameters-block-text">
              <span class="parameters-block-value"> {{ content.pools }} </span>
              <span class="parameters-block-parameter">Бассейны</span>
            </div>
          </div>
        </div>
        <button type="button" class="project-button">
          хочу такой же <img src="@/assets/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="gallery-block">
      <swiper
        effect="fade"
        :grabCursor="false"
        :centeredSlides="false"
        :slidesPerView="1"
        direction="vertical"
        :loop="false"
        :speed="800"
        :clickable="true"
        mousewheel
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :scrollbar="{ hide: false, el: '.swiper-scrollbar' }"
      >
        <div class="swiper-button-prev">
          <span class="arrow-up"
            ><img src="@/assets/icons/arrow-up.svg" alt="<"
          /></span>
        </div>
        <div class="swiper-button-next">
          <span class="arrow-down"
            ><img src="@/assets/icons/arrow-down.svg" alt=">"
          /></span>
        </div>
        <div class="swiper-scrollbar"></div>
        <template v-if="inGallery">
          <swiper-slide v-for="(imagePath, index) in gallery" :key="index">
            <div
              class="background"
              :style="`background-image: url(${imagePath});`"
            ></div>
          </swiper-slide>
        </template>
        <template v-else>
          <swiper-slide v-for="(imagePath, index) in layouts" :key="index">
            <div
              class="background"
              :style="`background-image: url(${imagePath});`"
            ></div>
          </swiper-slide>
        </template>
        <button class="to-layout" @click="inGallery = !inGallery">
          <img src="@/assets/icons/layout-icon.svg" alt="" />
          <template v-if="inGallery"> смотреть планировку </template>
          <template v-else> смотреть галерею </template>
        </button>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
} from "swiper";

SwiperCore.use([Navigation, Scrollbar, A11y, EffectFade, Mousewheel]);

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      content: this.getContent(),
      gallery: this.getContent().gallery,
      layouts: this.getContent().layout,
      inGallery: true,
    };
  },
  methods: {
    getContent() {
      return JSON.parse(localStorage.getItem("content"));
    },
  },
  mounted() {
    console.log(this.content.gallery[0]);
    console.log(this.content.layout[0]);
  },
};
</script>
<style lang="scss">
.project-page {
  width: 100%;
  height: 100%;
  display: flex;
  .to-layout {
    padding: 15px;
    font-weight: 500;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 0.1em;
    color: #ffffff;
    position: absolute;
    right: 60px;
    bottom: 60px;
    z-index: 10;
    background: none;
    border: 1px solid white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      margin-right: 15px;
    }
  }
  .info-block {
    width: 40%;
    height: 100%;
    background: white;
    padding: 0 60px;
    display: grid;
    grid-template-rows: 45% 55%;
  }
  .parameters {
    width: 100%;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .project-button {
      padding: 18px 20px;
      background: #222222;
      font-weight: 500;
      font-size: 11px;
      line-height: 20px;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-transform: uppercase;
      border: none;
      max-width: 200px;
      cursor: pointer;
      img {
        margin-left: 20px;
      }
    }
    &-block {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(3, 1fr);
      height: 60%;
      &-item {
        display: flex;
        img {
          margin-right: 20px;
          width: 40px;
          height: 40px;
        }
      }
      &-text {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      &-value {
        font-weight: 700;
        font-size: 24px;
        margin-top: -5px;
        margin-bottom: 3px;
      }
      &-parameter {
        font-weight: 500;
        font-size: 10px;
        text-transform: uppercase;
      }
    }
    &-title {
      font-weight: 500;
      font-size: 11px;
      line-height: 20px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
  .main-info {
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    padding-top: 60px;
    margin-bottom: 40px;
    min-height: min-content;
    .button-back {
      background: none;
      border: none;
      font-weight: 500;
      font-size: 11px;
      line-height: 20px;
      letter-spacing: 0.1em;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      cursor: pointer;
      img {
        margin-right: 25px;
      }
    }
    &-title {
      font-weight: 700;
      font-size: 64px;
      line-height: 30px;
      margin: 40px 0;
    }
    &-descr {
      font-weight: bold;
      font-size: 18px;
      line-height: 30px;
      display: block;
      width: 90%;
    }
    &-price {
      font-weight: bold;
      font-size: 36px;
      line-height: 20px;
      text-transform: uppercase;
      margin-top: 40px;
      display: block;
    }
  }
}
.gallery-block {
  width: 60%;
  height: 100%;
  background: grey;
}
</style>