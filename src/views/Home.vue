<template>
  <BHeader />
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
    :pagination="{ clickable: true, el: '.swiper-pagination' }"
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
    <div class="swiper-pagination"></div>
    <div class="swiper-scrollbar"></div>
    <swiper-slide
      v-for="(content, index) in slidesContent"
      :data-title="content.name"
      :key="index"
    >
      <div class="darknes">
        <div
          class="background"
          :style="`background-image: url(${content.background});`"
        ></div>
      </div>
      <div class="slider-content">
        <div class="slider-content__wrapper">
          <h2>{{ content.name }}</h2>
          <p>
            {{ content.descr }}
          </p>
          <div class="other-info">
            <span class="price">от {{ content.price }} </span>
            <div class="square">S {{ content.square }} м2</div>
          </div>
          <router-link :to="{ name: 'project', params: { id: content.id }, query: {content: content}}">
            <button class="other-button">
              <span> подробнее о проекте </span>
              <img
                class="arrow-right"
                src="@/assets/icons/arrow-right.svg"
                alt=">"
              />
            </button>
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <BFooter />
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
} from "swiper";

import BHeader from "@/components/BHeader";
import BFooter from "@/components/BFooter";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    BHeader,
    BFooter,
  },
  data() {
    return {
      slidesContent: [
        {
          name: "Икс-Рей",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн",
          background:
            "https://berezhnodom.ru/upload/iblock/64c/64c03035e75ad3201b43f13b72401c7e.jpg",
          price: "5.8 млн Р",
          square: 354,
          id: "project-1",
        },
        {
          name: "Супер проект",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 2",
          background:
            "https://berezhnodom.ru/upload/iblock/39b/39b8558d62857da99da59fe57961ea74.jpg",
          price: "3.8 млн Р",
          square: 234,
          id: "project-2",
        },
        {
          name: "Икс-Рей 3",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 3",
          background:
            "https://berezhnodom.ru/upload/iblock/6c9/6c9538ae1202a37e3225064f80e6d09d.jpg",
          price: "4.8 млн Р",
          square: 546,
          id: "project-3",
        },
        {
          name: "Икс-Рей 4",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 4",
          background: "https://swiperjs.com/demos/images/nature-4.jpg",
          price: "6.8 млн Р",
          square: 123,
          id: "project-4",
        },
        {
          name: "Икс-Рей 5",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 5",
          background: "https://swiperjs.com/demos/images/nature-5.jpg",
          price: "5.8 млн Р",
          square: 321,
          id: "project-5",
        },
        {
          name: "Икс-Рей 6",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 6",
          background: "https://swiperjs.com/demos/images/nature-6.jpg",
          price: "5.8 млн Р",
          square: 354,
          id: "project-6",
        },
        {
          name: "Икс-Рей 7",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 7",
          background: "https://swiperjs.com/demos/images/nature-7.jpg",
          price: "5.8 млн Р",
          square: 354,
          id: "project-7",
        },
        {
          name: "Икс-Рей 8",
          descr:
            "Проект коттеджа для круглогодичного проживания выполненный в современном стиле Модерн 8",
          background: "https://swiperjs.com/demos/images/nature-8.jpg",
          price: "5.8 млн Р",
          square: 354,
          id: "project-8",
        },
      ],
    };
  },
  methods: {
    renderBull(index, className) {
      return `<span class="${className}" data-index="${index}">${this.slidesContent[index].name}</span>`;
    },
  },
  mounted() {
    const paginationBullets = document.querySelectorAll(
      ".swiper-pagination-bullet"
    );
    paginationBullets.forEach((item, index) => {
      item.innerHTML = this.slidesContent[index].name;
    });
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "geometria";
  font-weight: 300;
  src: url("../assets/fonts/geometria/Geometria-Light.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 400;
  src: url("../assets/fonts/geometria/Geometria.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 500;
  src: url("../assets/fonts/geometria/Geometria-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "geometria";
  font-weight: 700;
  src: url("../assets/fonts/geometria/Geometria-Bold.ttf") format("truetype");
}
#app {
  width: 100%;
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "geometria";
  color: white;
}
a {
  text-decoration: none;
}

body {
  background: #eee;
  font-family: "geometria";
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.other-info {
  color: white;
  margin: auto;
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  font-family: "geometria";
  .price {
    display: inline;
    margin-right: 40px;
  }
  .square {
    display: inline;
  }
}
.header {
  width: 100%;
  height: 38px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  /*padding-top: 50px;
        padding-bottom: 50px;*/
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition-duration: 1000ms;
  z-index: -10;
  &-active {
    z-index: 0;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

.darknes {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.background {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.slider-content {
  position: absolute;
  z-index: 101;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.swiper-container-vertical > .swiper-pagination-bullets {
  top: 60%;
  right: auto;
}
.swiper-pagination {
  height: 60%;
  right: 0;
  left: 70px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  cursor: pointer;
  color: white;
  width: 150px;
  background: none;
  text-align: left;
  margin: 0;
  line-height: 10px;
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  opacity: 0.5;
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-container-vertical > .swiper-scrollbar {
  right: auto;
  left: 40px;
  height: 60%;
  top: 60%;
  transform: translateY(-50%);
  width: 2px;
}

.swiper-scrollbar-drag {
  background-color: white;
}

.slider-content__wrapper {
  width: 50%;
  margin: auto;
  position: relative;
  top: 37%;
  transform: translateY(-30%);
  z-index: 101;
  text-align: center;
}

.slider-content__wrapper > h2 {
  color: white;
  padding: 0;
  margin: 10px 0;
  font-size: 64px;
  font-weight: 700;
  font-family: "geometria";
  // text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
}
.slider-content__wrapper > p {
  color: white;
  font-size: 18px;
  line-height: 30px;
  font-family: "geometria";
  width: 80%;
  margin: auto;
}

.other-button {
  .arrow-right {
    width: 20px;
    height: 11px;
    margin-left: 7px;
  }
  font-family: "geometria";
  font-weight: 500;
  border: 1px solid white;
  padding: 18px 20px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 11px;
  display: flex;
  align-items: center;
  margin: 7% auto 0;
  text-transform: uppercase;
  background: none;
}

.other-button:hover {
  background: white;
  color: black;
}
.swiper-button-next {
  left: auto;
  right: 40px;
  background: #000000 !important;
  top: 53%;
}

.swiper-button-prev {
  top: 40%;
  left: auto;
  right: 40px;
}

.swiper-button-next,
.swiper-button-prev {
  width: 54px;
  height: 54px;
  background: #ffffff;
  // transform: rotate(-90deg);
  transition: all 0.3s ease;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: none;
}
</style>
