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
          <router-link :to="{ name: 'project', params: { id: content.id } }">
            <button
              class="other-button"
              @click="saveContent(content)"
              @mouseover="hovered = true"
              @mouseout="hovered = false"
            >
              <span> подробнее о проекте </span>
              <img
                v-if="!hovered"
                class="arrow-right"
                src="@/assets/icons/arrow-right.svg"
                alt=">"
              />
              <img
                v-else
                class="arrow-right"
                src="@/assets/icons/arrow-right-dark.svg"
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
      slidesContent: this.$store.state.projectsContent,
      hovered: false,
    };
  },
  methods: {
    saveContent(content) {
      localStorage.setItem("content", JSON.stringify(content));
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
  transition-property: opacity;
  // z-index: -10;
  &-active {
    z-index: 1;
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
